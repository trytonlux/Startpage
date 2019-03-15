"use strict";

const links_outer = document.getElementById("links-outer");

// Setup markup for links from config.json and set body innerHTML.
const markup = `
<div id="links">
    ${links.map(link => `
        <li class="link">
            <a href="${link.href}">
                ${link.name}
            </a>
        </li>
        `).join("")}
</div>
`;

links_outer.innerHTML = markup;
