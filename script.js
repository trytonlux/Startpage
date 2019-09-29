"use strict";

// Setup markup for links from config.js and set body innerHTML.
const markup = `
<div id="links">
    <ul>
        ${links.map(link => `
            <li class="link">
                <a href="${link.href}">
                    ${link.name}
                </a>
            </li>
            `).join("")}
    </ul>
</div>
`;

const links_outer = document.getElementById("links-outer");
links_outer.innerHTML = markup;
