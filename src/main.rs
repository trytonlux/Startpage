use actix_files::{Files, NamedFile};
use actix_web::{App, HttpResponse, HttpServer, Responder, get, middleware::Logger, web::Data};
use config::Config;
use env_logger::Env;
use tera::{Context, Tera};

mod config;
mod widgets;

#[get("/favicon.ico")]
async fn favicon() -> impl Responder {
    NamedFile::open("./assets/favicon.ico")
}

#[get("/")]
async fn index(tera: Data<Tera>) -> impl Responder {
    let config = Config::load();

    let mut ctx = Context::new();
    ctx.insert("links", &widgets::links::render(config));

    let rendered = tera.render("index.html", &ctx).unwrap();
    HttpResponse::Ok().body(rendered)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init_from_env(Env::default().default_filter_or("info"));

    HttpServer::new(|| {
        let tera = Data::new(Tera::new("templates/**/*").unwrap());

        App::new()
            .wrap(Logger::default())
            .app_data(tera)
            .service(favicon)
            .service(index)
            .service(Files::new("/assets", "./assets").show_files_listing())
    })
    .bind(("127.0.0.1", 7365))?
    .run()
    .await
}
