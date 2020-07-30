import config_to_element from "./config.js";

class Terminal
{
    constructor()
    {
        this.insert_links();
        this.bind_close_button();
    }

    insert_links()
    {
        let ul = document.getElementById("terminal-body-list");

        ul.innerHTML = config_to_element();
    }

    bind_close_button()
    {
        let btn = document.getElementById("terminal-header-close-btn");
        btn.onclick = () => {
            let body = document.getElementById("terminal-body");
            body.classList.toggle("terminal-off");
        };
    }
}

export default Terminal