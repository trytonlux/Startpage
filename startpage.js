"use strict";

var mustache = require("mustache");

// Globals
var CARDS_CONTAINER = document.getElementById("card-columns");
var CARD_TEMPLATE = document.getElementById("template-card").innerHTML;

mustache.parse(CARD_TEMPLATE);

function set_background(url) {
    var background = document.getElementById("background");
    background.style.backgroundImage = `url(${url})`;
}

function add_card(card) {
    var rendered = mustache.render(CARD_TEMPLATE, card)
    var div = document.createElement("div");
    div.innerHTML = rendered.trim();
    CARDS_CONTAINER.appendChild(div.firstChild);
}

set_background(config["background"]);

config.cards.forEach(card => {
    add_card(card);
});
