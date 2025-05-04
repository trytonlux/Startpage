use actix_web::{App, HttpResponse, HttpServer, Responder, get, web::Data};
use tera::{Context, Tera};

#[get("/")]
async fn index(tera: Data<Tera>) -> impl Responder {
    let mut ctx = Context::new();
    ctx.insert("name", "World");

    let rendered = tera.render("index.html", &ctx).unwrap();
    HttpResponse::Ok().body(rendered)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let tera = Data::new(Tera::new("templates/*").unwrap());

    HttpServer::new(move || App::new().app_data(tera.clone()).service(index))
        .bind(("127.0.0.1", 7365))?
        .run()
        .await
}
