"use strict";

// Setup markup for links from config.js and set body innerHTML.
const markup = `
${links.map(link => `
    <div class="link">
    <a href="${link.href}">
        <img src="${link.icon}" width="128" height="128"></img>
        <span>${link.name}</span>
    </a>
    </div>
`).join("")}
`;

const main = document.getElementById("main");
main.innerHTML = markup;