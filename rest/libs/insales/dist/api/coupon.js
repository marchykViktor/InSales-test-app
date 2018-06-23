"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoupon = getCoupon;
exports.listCoupon = listCoupon;
exports.createCoupon = createCoupon;
exports.removeCoupon = removeCoupon;
exports.editCoupon = editCoupon;

var _get = require("../methods/get");

var _post = require("../methods/post");

var _remove = require("../methods/remove");

var _put = require("../methods/put");

/**
 * GET /admin/discount_codes/{id}.xml
 *
 * Examples:
 *
 *      insales.getCoupon({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        couponid: '1076619'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'discount-code':
 *         { 'act-once': 'false',
 *           'act-once-for-client': 'false',
 *           code: 'WWWWWW',
 *           'created-at': '2011-11-11T11:11:11+03:00',
 *           description: '',
 *           disabled: 'false',
 *           discount: '10.0',
 *           'expired-at': '2011-11-11',
 *           id: '1111111',
 *           'min-price': '0.0',
 *           'type-id': '1',
 *           'updated-at': '2011-11-11T11:11:11+03:00',
 *           worked: 'true',
 *           'discount-collections': '' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.couponid Required, coupon id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
function getCoupon(options, id) {
  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "discount_codes/".concat(options.couponid)
  });
}
/**
 * GET /admin/discount_codes.xml
 *
 * Examples:
 *
 *      insales.listCoupon({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'discount-codes':
 *         { 'discount-code':
 *            [{ 'act-once': 'false',
 *              'act-once-for-client': 'false',
 *              code: 'WWWWWW',
 *              'created-at': '2011-11-11T11:11:11+03:00',
 *              description: '',
 *              disabled: 'false',
 *              discount: '10.0',
 *              'expired-at': '2011-11-11',
 *              id: '1111111',
 *              'min-price': '0.0',
 *              'type-id': '1',
 *              'updated-at': '2011-11-11T11:11:11+03:00',
 *              worked: 'true',
 *              'discount-collections': '' },
 *            { 'act-once': 'false',
 *              'act-once-for-client': 'false',
 *              code: 'WWWWWY',
 *              'created-at': '2011-11-11T11:11:11+03:00',
 *              description: '',
 *              disabled: 'false',
 *              discount: '10.0',
 *              'expired-at': '2011-11-11',
 *              id: '1111112',
 *              'min-price': '0.0',
 *              'type-id': '1',
 *              'updated-at': '2011-11-11T11:11:11+03:00',
 *              worked: 'true',
 *              'discount-collections': '' }]}}
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} [options.page=1] Page
 * @param {number|string} [options.per_page=250] Coupons per page
 * @param {string} [options.updated_since] Coupons updated since. Format YYYY-MM-DD
 * @param {boolean} [options.deleted] Deleted coupons
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function listCoupon(options, id) {
  var query = {};
  query.page = options.page ? options.page : 1;
  query.per_page = options.per_page ? options.per_page : 250;

  if (options.updated_since && options.updated_since !== false) {
    query.updated_since = options.updated_since;
  }

  if (options.deleted === true) {
    query.deleted = true;
  }

  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "discount_codes",
    query: query
  });
}
/**
 * POST /admin/discount_codes.xml
 *
 * Examples:
 *
 *      insales.createCoupon({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        coupon: {
 *           'discount_code': {
 *             'code': 'frandom2',
 *             'act_once': 'true',
 *             'discount': 10,
 *             'type_id': 1,
 *             'description': 'API code',
 *             'disabled': 0,
 *             'expired-at': '2030-06-09'
 *           }
 *        }
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'discount-code':
 *         { 'act-once': 'true',
 *           'act-once-for-client': '',
 *           code: 'frandom2',
 *           'created-at': '2011-11-11T11:11:11+03:00',
 *           description: 'API code',
 *           disabled: 'false',
 *           discount: '10.0',
 *           'expired-at': '2030-06-09',
 *           id: '100000',
 *           'min-price': '',
 *           'type-id': '1',
 *           'updated-at': '2011-11-11T11:11:11+03:00',
 *           worked: 'true',
 *           'discount-collections': '' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.coupon Required, coupon
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function createCoupon(options, id) {
  return (0, _post.post)({
    id: id,
    token: options.token,
    url: options.url,
    api: "discount_codes",
    obj: options.coupon
  });
}
/**
 * DELETE /admin/discount_codes/{id}.xml
 *
 * Examples:
 *
 *      insales.removeCoupon({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        couponid: '100000'
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.couponid Required, coupon id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function removeCoupon(options, id) {
  return (0, _remove.remove)({
    id: id,
    token: options.token,
    url: options.url,
    api: "discount_codes/".concat(options.couponid)
  });
}
/**
 * PUT /admin/discount_codes/{id}.xml
 *
 * Examples:
 *
 *      insales.editCoupon({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        couponid: '100000',
 *        coupon: {
 *          'discount_code': {
 *            'code': 'frandom3'
 *          }
 *        }
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      200
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.couponid Required, coupon id
 * @param {object} options.coupon Required, coupon
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function editCoupon(options, id) {
  return (0, _put.put)({
    id: id,
    token: options.token,
    url: options.url,
    api: "discount_codes/".concat(options.couponid),
    obj: options.coupon
  });
}