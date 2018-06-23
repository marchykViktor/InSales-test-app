"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Output Request-Promise error, used to create Promise reject
 *
 * @param {Object} response Required, full response data
 * @returns {Object}
 * @property {String} type Name of error
 * @property {String} url Url where error happen
 * @property {String} method Http method
 * @property {String} msg Error message
 * @property {Object} response Full response
 * @property {Number} statusCode Status code
 */
var _default = function _default(response) {
  return {
    type: response.name,
    url: response.options.uri,
    method: response.options.method,
    msg: response.error,
    response: response,
    statusCode: response.statusCode
  };
};

exports.default = _default;