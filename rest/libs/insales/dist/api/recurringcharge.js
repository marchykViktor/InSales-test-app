"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecurring = getRecurring;
exports.createRecurring = createRecurring;
exports.changeRecurring = changeRecurring;
exports.removeRecurring = removeRecurring;

var _get = require("../methods/get");

var _post = require("../methods/post");

var _put = require("../methods/put");

var _remove = require("../methods/remove");

/**
 * GET /admin/recurring_application_charge.xml
 *
 * Examples:
 *
 *      insales.getRecurring({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru'
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'recurring-application-charge':
 *        { blocked: 'false',
 *          'created-at': '2011-11-11T11:11:11+03:00',
 *          id: '12345',
 *          monthly: '1000.0',
 *          'paid-till': '2011-11-21',
 *          'trial-expired-at': '2011-12-11',
 *          'updated-at': '2011-11-11T11:11:11+03:00' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
function getRecurring(options, id) {
  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "recurring_application_charge"
  });
}
/**
 * POST /admin/recurring_application_charge.xml
 *
 * Examples:
 *
 *      insales.createRecurring({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        price: 1000
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'recurring-application-charge':
 *        { blocked: 'false',
 *          'created-at': '2011-11-11T11:11:11+03:00',
 *          id: '12345',
 *          monthly: '1000.0',
 *          'paid-till': '2011-11-21',
 *          'trial-expired-at': '2011-12-11',
 *          'updated-at': '2011-11-11T11:11:11+03:00' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {string|number} options.price Required, price
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function createRecurring(options, id) {
  var charge = {
    'recurring-application-charge': {
      monthly: options.price
    }
  };
  return (0, _post.post)({
    id: id,
    token: options.token,
    url: options.url,
    api: 'recurring_application_charge',
    obj: charge
  });
}
/**
 * PUT /admin/recurring_application_charge.xml
 *
 * Examples:
 *
 *      insales.changeRecurring({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        price: 1010
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
 * @param {string|number} options.price Required, price
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function changeRecurring(options, id) {
  var charge = {
    'recurring-application-charge': {
      monthly: options.price
    }
  };
  return (0, _put.put)({
    id: id,
    token: options.token,
    url: options.url,
    api: "recurring_application_charge",
    obj: charge
  });
}
/**
 * DELETE /admin/recurring_application_charge.xml
 *
 * Examples:
 *
 *      insales.changeRecurring({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru'
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
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function removeRecurring(options, id) {
  return (0, _remove.remove)({
    id: id,
    token: options.token,
    url: options.url,
    api: "recurring_application_charge"
  });
}