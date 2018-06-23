"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Options for Restler
 *
 * @returns {Object}
 */
var _default = {
  headers: {
    'Content-Type': 'application/json'
  },
  json: true,
  timeout: 30000,
  resolveWithFullResponse: true,
  scheme: 'https'
};
exports.default = _default;