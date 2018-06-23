"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = remove;

var _requestPromise = _interopRequireDefault(require("request-promise"));

var _request = require("../request");

var _options = _interopRequireDefault(require("../options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opt = Object.create(_options.default);
/**
 * DELETE request
 *
 * @param {Object} conn
 * @param {string} conn.id Required, app id
 * @param {string} conn.token Required, token to access shop
 * @param {string} conn.url Required, shop url
 * @param {string} conn.api Required, api endpoint
 * @returns {Promise}
 */

function remove(conn) {
  opt.uri = "".concat(opt.scheme, "://").concat(conn.id, ":").concat(conn.token, "@").concat(conn.url, "/admin/").concat(conn.api, ".json");
  opt.method = 'DELETE';
  return (0, _request.request)((0, _requestPromise.default)(opt));
}