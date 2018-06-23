"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProduct = getProduct;
exports.createProduct = createProduct;
exports.editProduct = editProduct;
exports.removeProduct = removeProduct;
exports.listProduct = listProduct;

var _get = require("../methods/get");

var _post = require("../methods/post");

var _put = require("../methods/put");

var _remove = require("../methods/remove");

/**
 * GET /admin/products/{id}.xml
 *
 * Examples:
 *
 *      insales.getProduct({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '12345'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { product:
 *        { archived: 'false',
 *          available: 'true',
 *          'canonical-url-collection-id': '',
 *          'category-id': '1',
 *          'created-at': '2011-11-11 11:11:11 +0300',
 *          id: '12345',
 *          'is-hidden': 'false',
 *          'sort-weight': '',
 *          unit: 'pcs',
 *          'updated-at': '2011-11-11 11:11:11 +0300',
 *          title: 'Product 1',
 *          'short-description': '',
 *          permalink: 'product-1',
 *          'html-title': '',
 *          'meta-keywords': '',
 *          'meta-description': '',
 *          'currency-code': 'RUR',
 *          'collections-ids': '',
 *          images: '',
 *          'option-names': '',
 *          properties: '',
 *          characteristics: '',
 *          'product-field-values': '',
 *          variants: { variant: [Object] },
 *          description: '' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
function getProduct(options, id) {
  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "products/".concat(options.productid)
  });
}
/**
 * POST /admin/products.xml
 *
 * Examples:
 *
 *      insales.createProduct({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        product: {
 *          'product': {
 *            'category-id': '1',
 *            'title': 'Product 1',
 *            'variants-attributes': {
 *              'variants-attribute': {
 *                'sku': '12345',
 *                'quantity': '1',
 *                'price': '100'
 *              }
 *            }
 *          }
 *        }
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { product:
 *        { archived: 'false',
 *          available: '',
 *          'canonical-url-collection-id': '',
 *          'category-id': '1',
 *          'created-at': '2011-11-11 11:11:11 +0300',
 *          id: '12345',
 *          'is-hidden': 'false',
 *          'sort-weight': '',
 *          unit: 'pcs',
 *          'updated-at': '2011-11-11 11:11:11 +0300',
 *          title: 'Product 1',
 *          'short-description': '',
 *          permalink: 'product-1',
 *          'html-title': '',
 *          'meta-keywords': '',
 *          'meta-description': '',
 *          'currency-code': 'RUR',
 *          'collections-ids': '',
 *          images: '',
 *          'option-names': '',
 *          properties: '',
 *          characteristics: '',
 *          'product-field-values': '',
 *          variants: { variant: [Object] },
 *          description: '' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {object} options.coupon Required, product
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function createProduct(options, id) {
  return (0, _post.post)({
    id: id,
    token: options.token,
    url: options.url,
    api: 'products',
    obj: options.product
  });
}
/**
 * PUT /admin/products/{id}.xml
 *
 * Examples:
 *
 *      insales.editProduct({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '12345',
 *        product: {
 *          'product': {
 *            'title': 'Product 2',
 *          }
 *        }
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { product:
 *        { archived: 'false',
 *          available: '',
 *          'canonical-url-collection-id': '',
 *          'category-id': '1',
 *          'created-at': '2011-11-11 11:11:11 +0300',
 *          id: '12345',
 *          'is-hidden': 'false',
 *          'sort-weight': '',
 *          unit: 'pcs',
 *          'updated-at': '2011-11-11 11:11:11 +0300',
 *          title: 'Product 2',
 *          'short-description': '',
 *          permalink: 'product-1',
 *          'html-title': '',
 *          'meta-keywords': '',
 *          'meta-description': '',
 *          'currency-code': 'RUR',
 *          'collections-ids': '',
 *          images: '',
 *          'option-names': '',
 *          properties: '',
 *          characteristics: '',
 *          'product-field-values': '',
 *          variants: { variant: [Object] },
 *          description: '' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {number|string} options.productid Required, product id
 * @param {object} options.product Required, product
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function editProduct(options, id) {
  return (0, _put.put)({
    id: id,
    token: options.token,
    url: options.url,
    api: "products/".concat(options.productid),
    obj: options.product
  });
}
/**
 * DELETE /admin/products/{id}.xml
 *
 * Examples:
 *
 *      insales.removeProduct({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        productid: '12345'
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
 * @param {number|string} options.productid Required, product id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function removeProduct(options, id) {
  return (0, _remove.remove)({
    id: id,
    token: options.token,
    url: options.url,
    api: "products/".concat(options.productid)
  });
}
/**
 * GET /admin/products.xml
 *
 * Examples:
 *
 *      insales.listProduct({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { products:
 *        { product:
 *           [{ archived: 'false',
 *             available: '',
 *             'canonical-url-collection-id': '',
 *             'category-id': '1',
 *             'created-at': '2011-11-11 11:11:11 +0300',
 *             id: '12345',
 *             'is-hidden': 'false',
 *             'sort-weight': '',
 *             unit: 'pcs',
 *             'updated-at': '2011-11-11 11:11:11 +0300',
 *             title: 'Product 1',
 *             'short-description': '',
 *             permalink: 'product-1',
 *             'html-title': '',
 *             'meta-keywords': '',
 *             'meta-description': '',
 *             'currency-code': 'RUR',
 *             'collections-ids': '',
 *             images: '',
 *             'option-names': '',
 *             properties: '',
 *             characteristics: '',
 *             'product-field-values': '',
 *             variants: { variant: [Object] },
 *             description: '' },
 *           { archived: 'false',
 *             available: '',
 *             'canonical-url-collection-id': '',
 *             'category-id': '1',
 *             'created-at': '2011-11-11 11:11:11 +0300',
 *             id: '123456',
 *             'is-hidden': 'false',
 *             'sort-weight': '',
 *             unit: 'pcs',
 *             'updated-at': '2011-11-11 11:11:11 +0300',
 *             title: 'Product 2',
 *             'short-description': '',
 *             permalink: 'product-2',
 *             'html-title': '',
 *             'meta-keywords': '',
 *             'meta-description': '',
 *             'currency-code': 'RUR',
 *             'collections-ids': '',
 *             images: '',
 *             'option-names': '',
 *             properties: '',
 *             characteristics: '',
 *             'product-field-values': '',
 *             variants: { variant: [Object] },
 *             description: '' }]}}
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {string|number} [options.page=1] Page
 * @param {string|number} [options.per_page=100] Per page
 * @param {string} [options.updated_since] Products updated since. Format YYYY-MM-DD
 * @param {boolean} [options.deleted] Deleted products
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function listProduct(options, id) {
  var query = {};
  query.page = options.page ? options.page : 1;
  query.per_page = options.per_page ? options.per_page : 100;

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
    api: 'products',
    query: query
  });
}