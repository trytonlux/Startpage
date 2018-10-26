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

set_background(config["background"])

test();
test();
test();
test();
test();
test();
