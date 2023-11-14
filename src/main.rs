use rand::prelude::*;
use sycamore::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

fn random_color() -> String {
    vec![
        "flamingo", "pink", "mauve", "red", "maroon", "peach", "yellow", "green", "teal", "sky",
        "sapphire", "blue", "lavender",
    ]
    .choose_multiple(&mut rand::thread_rng(), 1)
    .cloned()
    .collect()
}

#[component(inline_props)]
fn Link<G: Html>(cx: Scope, name: &'static str, url: &'static str) -> View<G> {
    view! {cx,
        a(class=(format!("link {}", random_color())), href=(url)) {(name)}
    }
}

#[component()]
fn Header<G: Html>(cx: Scope) -> View<G> {
    view! {cx,
        header(){
            h1(){("STARTPAGE")}
        }
    }
}

fn main() {
    sycamore::render(|cx| {
        view! { cx,
            Header()
            main() {
                Link(name="Github", url="https://github.com")
                Link(name="Email", url="https://mail.proton.me/inbox")
                Link(name="Lemmy", url="https://sh.itjust.works")
                Link(name="Steam", url="https://store.steampowered.com")
                Link(name="Titanium-Server", url="https://titanium-server.thelux.family")
            }
        }
    });
}
