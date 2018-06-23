"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = post;

var _requestPromise = _interopRequireDefault(require("request-promise"));

var _request = require("../request");

var _options = _interopRequireDefault(require("../options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opt = Object.create(_options.default);
/**
 * POST request
 *
 * @param {Object} conn
 * @param {string} conn.id Required, app id
 * @param {string} conn.token Required, token to access shop
 * @param {string} conn.url Required, shop url
 * @param {string} conn.api Required, api endpoint
 * @param {object} [conn.obj] HTTP POST data
 * @returns {Promise}
 */

function post(conn) {
  if (conn.obj !== undefined) {
    opt.body = conn.obj;
  }

  opt.uri = "".concat(opt.scheme, "://").concat(conn.id, ":").concat(conn.token, "@").concat(conn.url, "/admin/").concat(conn.api, ".json");
  opt.method = 'POST';
  return (0, _request.request)((0, _requestPromise.default)(opt));
}