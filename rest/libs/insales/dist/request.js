"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

var _error = _interopRequireDefault(require("./error"));

var _output = _interopRequireDefault(require("./output"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Events of Request-Promise
 *
 * @param {Object} r Required, request-promise
 * @returns {Promise}
 */
function request(r) {
  return new Promise(function (resolve, reject) {
    r.then(function (response) {
      resolve((0, _output.default)(response));
    }).catch(function (err) {
      reject((0, _error.default)(err));
    });
  });
}