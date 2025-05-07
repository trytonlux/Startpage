use std::{fs, process::exit};

use serde::Deserialize;

use crate::widgets::links::Link;

#[derive(Deserialize, Clone)]
pub struct Config {
    pub links: Vec<Link>,
}

impl Config {
    pub fn load() -> Config {
        let filename = "startpage.toml";

        let contents = match fs::read_to_string(filename) {
            Ok(c) => c,
            Err(_) => {
                eprintln!("Could not read file '{}'", filename);
                exit(1);
            }
        };

        match toml::from_str(&contents) {
            Ok(c) => c,
            Err(e) => {
                eprintln!("Unable to load data from '{}': {}", filename, e);
                exit(1);
            }
        }
    }
}
