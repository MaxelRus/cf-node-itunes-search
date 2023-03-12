"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchItunes = exports.itunesSearchRoot = void 0;
const result_1 = require("../result/result");
const search_options_1 = require("./search-options");
exports.itunesSearchRoot = "https://itunes.apple.com/search";
function searchItunes(options) {
    return new Promise((resolve, reject) => {
        //Initializing passed options (adding methods when directly passing an object)
        const searchOptions = search_options_1.ItunesSearchOptions.from(options);
        fetch(`${exports.itunesSearchRoot}?${searchOptions.toURI()}`)
            .then((res) => res.json().then((body) => resolve(result_1.ItunesResult.from(body))))
            .catch((err) => reject(err));
    });
}
exports.searchItunes = searchItunes;
