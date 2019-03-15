"use strict";

const links_outer = document.getElementById("links-outer");

// Setup markup for links from config.json and set body innerHTML.
const markup = `
<div id="links">
    ${links.map(link => `
        <a class="link" href="${link.href}">
            ${link.name}
        </a>
        `).join("")}
</div>
`;

links_outer.innerHTML = markup;
