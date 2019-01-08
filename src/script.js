"use strict";

// Setup markup for links from config.json and append to body
const markup = `
<div class="links">
    ${links.map(link => `
        <a class="link" href="${link.href}">
        <div class="link-inner">
            <div class="link-icon" data-icon="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${link.icon}.svg"></div>
            ${link.name}
        </div>
        </a>
        `).join("")}
</div>
`;
// div_links = document.createElement();
document.body.innerHTML = markup;

// Apply mask to icons from data-icon
for (var icon of document.getElementsByClassName("link-icon")) {
    icon.style.maskImage = `url(${icon.dataset.icon})`;
}
