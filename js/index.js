import Terminal from "./terminal.js"

const terminal = new Terminal();

document.addEventListener("DOMContentLoaded", ()=> {
    terminal.insert_links();
});