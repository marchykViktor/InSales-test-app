"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

var _requestPromise = _interopRequireDefault(require("request-promise"));

var _options = _interopRequireDefault(require("../options"));

var _request = require("../request");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opt = Object.create(_options.default);
/**
 * GET request
 *
 * @param {Object} conn
 * @param {string} conn.id Required, app id
 * @param {string} conn.token Required, token to access shop
 * @param {string} conn.url Required, shop url
 * @param {string} conn.api Required, api endpoint
 * @param {object} [conn.query] URL query string
 * @returns {Promise}
 */

function get(conn) {
  if (conn.query) opt.qs = conn.query;
  opt.uri = "".concat(opt.scheme, "://").concat(conn.id, ":").concat(conn.token, "@").concat(conn.url, "/admin/").concat(conn.api, ".json");
  opt.method = 'GET';
  return (0, _request.request)((0, _requestPromise.default)(opt));
}