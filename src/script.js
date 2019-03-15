"use strict";

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

document.body.innerHTML = markup;
