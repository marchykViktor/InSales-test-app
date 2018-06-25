"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProperties = getProperties;

var _get = require("../methods/get");

function getProperties(options, id) {
  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "properties"
  });
};