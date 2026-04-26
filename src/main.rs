use rand::prelude::*;
use sycamore::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

fn random_color() -> String {
    vec![
        "flamingo", "pink", "mauve", "red", "maroon", "peach", "yellow", "green", "teal", "sky",
        "sapphire", "blue", "lavender",
    ]
    .sample(&mut rand::rng(), 1)
    .cloned()
    .collect()
}

#[component(inline_props)]
fn Link(name: &'static str, url: &'static str) -> View {
    view! {
        a(class=format!("link {}", random_color()) , href=url ) {(name)}
    }
}

#[component()]
fn Header() -> View {
    view! {
        header(){
            h1(){("STARTPAGE")}
        }
    }
}

#[component()]
fn App() -> View {
    view!(
        Header()
        main() {
            Link(name="Github", url="https://github.com")
            Link(name="Email", url="https://mail.proton.me/inbox")
            Link(name="Steam", url="https://store.steampowered.com")
            Link(name="RSS", url="https://rss.titanium-server.thelux.family")
            Link(name="Notes", url="https://notes.titanium-server.thelux.family")
            Link(name="Torrents", url="https://torrent.titanium-server.thelux.family")
            Link(name="Jellyfin", url="https://jellyfin.titanium-server.thelux.family")
            Link(name="Titanium-Server", url="https://titanium-server.thelux.family")
        }
    )
}

fn main() {
    sycamore::render(App);
}
