"use strict";

var mustache = require("mustache");

function test() {
    var cards = document.getElementById("card-columns");
    var template = document.getElementById("template-card").innerHTML;
    var rendered = mustache.render(template);
    var div = document.createElement('div');
    div.innerHTML = rendered.trim();
    cards.appendChild(div.firstChild);
}

test();
test();
test();
test();
test();
test();
