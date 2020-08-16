const links = [

]

function insert_links()
{
    let items = [];

    for (let link of links)
    {
        items.push(
            `<li><a href="${link.href}"><span class="yellow">"${link.name}"</span>,<a/></li>`
        );
    }

    let ul = document.getElementById("link-list");
    ul.innerHTML = items.join("");
}

document.addEventListener("DOMContentLoaded", ()=> {
    insert_links();
});