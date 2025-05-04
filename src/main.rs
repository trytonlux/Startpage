use actix_files::Files;
use actix_web::{App, HttpResponse, HttpServer, Responder, get, web::Data};
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
    let tera = Data::new(Tera::new("templates/**/*").unwrap());

    HttpServer::new(move || {
        App::new()
            .app_data(tera.clone())
            .service(index)
            .service(Files::new("/assets", "./assets").show_files_listing())
    })
    .bind(("127.0.0.1", 7365))?
    .run()
    .await
}
