"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.put = put;

var _requestPromise = _interopRequireDefault(require("request-promise"));

var _request = require("../request");

var _options = _interopRequireDefault(require("../options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opt = Object.create(_options.default);
/**
 * PUT request
 *
 * @param {Object} conn
 * @param {string} conn.id Required, app id
 * @param {string} conn.token Required, token to access shop
 * @param {string} conn.url Required, shop url
 * @param {string} conn.api Required, api endpoint
 * @param {object} conn.obj HTTP PUT data
 * @returns {Promise}
 */

function put(conn) {
  if (conn.obj !== undefined) {
    opt.body = conn.obj;
  }

  opt.uri = "".concat(opt.scheme, "://").concat(conn.id, ":").concat(conn.token, "@").concat(conn.url, "/admin/").concat(conn.api, ".json");
  opt.method = 'PUT';
  return (0, _request.request)((0, _requestPromise.default)(opt));
}