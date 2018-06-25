"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = getOptions;

var _get = require("../methods/get");

function getOptions(options, id) {
  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "option_names"
  });
};