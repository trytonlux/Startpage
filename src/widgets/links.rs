use serde::{Deserialize, Serialize};

use crate::config::Config;

#[derive(Deserialize, Serialize, Clone)]
pub struct Link {
    name: String,
    url: String,
}

pub fn render(config: Config) -> Vec<Link> {
    config.links.clone()
}
