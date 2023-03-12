"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookupItunes = exports.itunesLookupRoot = void 0;
const result_1 = require("../result/result");
const lookup_options_1 = require("./lookup-options");
exports.itunesLookupRoot = "https://itunes.apple.com/lookup";
function lookupItunes(options) {
    return new Promise((resolve, reject) => {
        //Initializing passed options (adding methods when directly passing an object)
        const lookupOptions = lookup_options_1.ItunesLookupOptions.from(options);
        fetch(`${exports.itunesLookupRoot}?${lookupOptions.toURI()}`)
            .then((res) => res.json().then((body) => resolve(result_1.ItunesResult.from(body))))
            .catch((err) => reject(err));
    });
}
exports.lookupItunes = lookupItunes;
