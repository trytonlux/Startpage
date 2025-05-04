use serde::Serialize;

#[derive(Serialize)]
struct Link {
    name: String,
    url: String,
}

#[derive(Serialize)]
pub struct Links {
    links: Vec<Link>,
}

impl Links {
    pub fn new() -> Links {
        Links {
            links: vec![
                Link {
                    name: "GitHub".to_string(),
                    url: "https://github.com".to_string(),
                },
                Link {
                    name: "Email".to_string(),
                    url: "https://mail.proton.me/inbox".to_string(),
                },
                Link {
                    name: "RSS".to_string(),
                    url: "https://rss.titanium-server.thelux.family".to_string(),
                },
            ],
        }
    }
}
