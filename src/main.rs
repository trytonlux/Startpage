use sycamore::prelude::*;

#[component(inline_props)]
fn Link<G: Html>(cx: Scope, name: String, url: String) -> View<G> {
    view! {cx,
        div(class="link") {
            a(href=(url)) {(name)}
        }
    }
}

fn main() {
    sycamore::render(|cx| {
        view! { cx,
            Link(name="Steam".to_string(), url="https://store.steampowered.com".to_string())
        }
    });
}
