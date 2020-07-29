import links from "./config.js";

function insert_items()
{
    const items = [];

    for (let link of links)
    {
        items.push(
            `<li><a href="${link.href}">${link.name}<a/></li>`
        );
    }

    const el = document.getElementById("list-links");
    el.innerHTML = items.join("");
}

document.addEventListener("DOMContentLoaded", insert_items);