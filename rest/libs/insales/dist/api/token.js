"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.token = token;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generate access token for shop
 *
 * Examples:
 *
 *      insales.token('12345');
 *
 * Output:
 *
 *      8cfa2282b17de0a598c010f5f0109e7d
 * @param {String|Number} token Required, token receive when install app
 * @param {String|Number} secret Required, app secret
 * @returns {String} access token
 */
function token(token, secret) {
  return _crypto.default.createHash('md5').update(token + secret).digest('hex');
}