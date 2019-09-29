"use strict";

// Setup markup for links from config.js and set body innerHTML.
const markup = `
${links.map(link => `
    <li class="link">
        <a href="${link.href}">
            ${link.name}
        </a>
    </li>
`).join("")}
`;

const links_outer = document.getElementById("links");
links_outer.innerHTML = markup;
