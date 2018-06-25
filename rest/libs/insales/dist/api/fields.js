"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFields = getFields;

var _get = require("../methods/get");

function getFields(options, id) {
  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "product_fields"
  });
};