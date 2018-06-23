"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPriceKind = getPriceKind;
exports.listPriceKind = listPriceKind;
exports.createPriceKind = createPriceKind;
exports.removePriceKind = removePriceKind;
exports.editPriceKind = editPriceKind;

var _get = require("../methods/get");

var _post = require("../methods/post");

var _remove = require("../methods/remove");

var _put = require("../methods/put");

/**
 * GET /admin/price_kinds/{id}.json
 *
 * Examples:
 *
 *      insales.getPriceKind({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        id: '111'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 *
 * Output:
 *      {
 *        "id": 111,
 *        "price_index": 1,
 *        "show_in_lists": true,
 *        "title": "тест 1",
 *        "variant_price_method_name": "price2"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.id Required, price kind id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
function getPriceKind(options, id) {
  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "price_kinds/".concat(options.id)
  });
}
/**
 * GET /admin/price_kinds.json
 *
 * Examples:
 *
 *      insales.listPriceKind({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      [
 *        {
 *            "id": 111,
 *            "price_index": 1,
 *            "show_in_lists": true,
 *            "title": "тест 1",
 *            "variant_price_method_name": "price2"
 *        },
 *        {
 *            "id": 112,
 *            "price_index": 2,
 *            "show_in_lists": true,
 *            "title": "тест2",
 *            "variant_price_method_name": "price3"
 *        }
 *      ]
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function listPriceKind(options, id) {
  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "price_kinds"
  });
}
/**
 * POST /admin/price_kinds.json
 *
 * Examples:
 *
 *      insales.createPriceKind({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        pricekind: {
 *           'price_kind': {
 *             'title': 'name'
 *           }
 *        }
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 *
 * Output:
 *
 *      {
 *        "id": 113,
 *        "price_index": 3,
 *        "show_in_lists": true,
 *        "title": "name",
 *        "variant_price_method_name": "price3"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.pricekind Required, price kind
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function createPriceKind(options, id) {
  return (0, _post.post)({
    id: id,
    token: options.token,
    url: options.url,
    api: "price_kinds",
    obj: options.pricekind
  });
}
/**
 * DELETE /admin/price_kinds/{id}.json
 *
 * Examples:
 *
 *      insales.removePriceKind({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        id: '111'
 *      }).then(output => {
 *        console.info(output.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.id Required, price kind id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function removePriceKind(options, id) {
  return (0, _remove.remove)({
    id: id,
    token: options.token,
    url: options.url,
    api: "price_kinds/".concat(options.id)
  });
}
/**
 * PUT /admin/price_kinds/{id}.xml
 *
 * Examples:
 *
 *      insales.editPriceKind({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        id: '111',
 *        pricekind: {
 *           'price_kind': {
 *             'title': 'name123'
 *           }
 *        }
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "id": 111,
 *        "price_index": 3,
 *        "show_in_lists": true,
 *        "title": "name123",
 *        "variant_price_method_name": "price3"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.id Required, price kind id
 * @param {object} options.pricekind Required, price kind
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function editPriceKind(options, id) {
  return (0, _put.put)({
    id: id,
    token: options.token,
    url: options.url,
    api: "price_kinds/".concat(options.id),
    obj: options.pricekind
  });
}