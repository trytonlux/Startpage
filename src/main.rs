use actix_files::Files;
use actix_web::{App, HttpResponse, HttpServer, Responder, get, middleware::Logger, web::Data};
use env_logger::Env;
use tera::{Context, Tera};

mod widgets;

#[get("/")]
async fn index(tera: Data<Tera>) -> impl Responder {
    let mut ctx = Context::new();
    ctx.insert("links", &widgets::Links::new());

    let rendered = tera.render("index.html", &ctx).unwrap();
    HttpResponse::Ok().body(rendered)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init_from_env(Env::default().default_filter_or("info"));

    let tera = Data::new(Tera::new("templates/**/*").unwrap());

    HttpServer::new(move || {
        App::new()
            .wrap(Logger::default())
            .app_data(tera.clone())
            .service(index)
            .service(Files::new("/assets", "./assets").show_files_listing())
    })
    .bind(("127.0.0.1", 7365))?
    .run()
    .await
}
