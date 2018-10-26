"use strict";

var mustache = require("mustache");

function set_background(url) {
    var background = document.getElementById("background");
    background.style.backgroundImage = `url(${url})`
}

function test() {
    var cards = document.getElementById("card-columns");
    var template = document.getElementById("template-card").innerHTML;
    var rendered = mustache.render(template);
    var div = document.createElement('div');
    div.innerHTML = rendered.trim();
    cards.appendChild(div.firstChild);
}

set_background("https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=f11dd5509e0f6b4e253454f8583aff6c")

test();
test();
test();
test();
test();
test();
