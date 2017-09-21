"use strict"

function Helper() {}

Helper.getRandomWholeNumberBetweenRange = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Add 1 to max to make range inclusive
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

module.exports = Helper;
