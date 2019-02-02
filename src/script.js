"use strict";

// Setup markup for links from config.json and set body innerHTML.
const markup = `
<div class="links">
    ${links.map(link => `
        <a class="link" href="${link.href}">
        <div class="link-inner">
            <span class="mdi mdi-${link.icon}"></span>
            ${link.name}
        </div>
        </a>
        `).join("")}
</div>
`;

document.body.innerHTML = markup;
