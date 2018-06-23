"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listAsset = listAsset;
exports.getAsset = getAsset;
exports.editAsset = editAsset;
exports.renameAsset = renameAsset;
exports.uploadAsset = uploadAsset;
exports.removeAsset = removeAsset;

var _get = require("../methods/get");

var _post = require("../methods/post");

var _remove = require("../methods/remove");

var _put = require("../methods/put");

/**
 * GET /admin/themes/#{theme_id}/assets.xml
 *
 * Examples:
 *
 *      insales.listAsset({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { 'assets':
 *         { 'asset':
 *            [ { id: '60410193',
 *                'theme-id': '643879',
 *                type: 'Asset::Template',
 *                name: 'order.liquid',
 *                'content-type': 'text/x-liquid',
 *                'file-size': '5125',
 *                'human-readable-name': 'Карточка заказа' }
 *             ]}};
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
function listAsset(options, id) {
  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "themes/".concat(options.theme, "/assets")
  });
}
/**
 * GET /admin/themes/#{theme_id}/assets/#{id}.xml
 *
 * Examples:
 *
 *      insales.getAsset({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879',
 *        assetId: '60423000'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {{ asset:
 *         { id: '60423000',
 *           'theme-id': '643879',
 *           type: 'Asset::Template',
 *           name: 'page.new_page.liquid',
 *           'content-type': 'text/x-liquid',
 *           'file-size': '0',
 *           'human-readable-name': 'Страница: new_page',
 *           content: 'new page {{ page.title }}' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} options.assetId Required, asset id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function getAsset(options, id) {
  return (0, _get.get)({
    id: id,
    token: options.token,
    url: options.url,
    api: "themes/".concat(options.theme, "/assets/").concat(options.assetId)
  });
}
/**
 * PUT /admin/themes/#{theme_id}/assets/#{id}.xml
 *
 * Examples:
 *
 *      insales.editAsset({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879',
 *        assetId: '60423000',
 *        asset: {
 *          content: 'Amazing template for page {{product.title}}'
 *        }
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { asset:
 *        { id: '60423000',
 *          'theme-id': '643879',
 *          type: 'Asset::Template',
 *          name: 'page.new_page.liquid',
 *          'content-type': 'text/x-liquid',
 *          'file-size': '52',
 *          'human-readable-name': 'Страница: new_page' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Object} options.asset Required, asset content
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} options.assetId Required, asset id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function editAsset(options, id) {
  return (0, _put.put)({
    id: id,
    token: options.token,
    url: options.url,
    api: "themes/".concat(options.theme, "/assets/").concat(options.assetId),
    obj: {
      asset: options.asset
    }
  });
}
/**
 * PUT /admin/themes/#{theme_id}/assets/#{id}/rename.xml
 *
 * Examples:
 *
 *      insales.renameAsset({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879',
 *        assetId: '60423000',
 *        assets: {
 *          'asset': {
 *            'new_name': 'page.amazing_new_page.liquid'
 *          }
 *        }
 *      }).then(output => {
 *        console.info(output.response.statusCode);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { asset:
 *        { id: '60423000',
 *          'theme-id': '643879',
 *          type: 'Asset::Template',
 *          name: 'page.amazing_new_page.liquid',
 *          'content-type': 'text/x-liquid',
 *          'file-size': '42',
 *          'human-readable-name': 'Страница: amazing_new_page' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Object} options.assets Required, asset new_name
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} options.assetId Required, asset id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function renameAsset(options, id) {
  return (0, _put.put)({
    id: id,
    token: options.token,
    url: options.url,
    api: "themes/".concat(options.theme, "/assets/").concat(options.assetId, "/rename"),
    obj: options.assets
  });
}
/**
 * POST /admin/themes/#{theme_id}/assets.xml
 *
 * Examples:
 *
 *      insales.uploadAsset({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        theme: '643879',
 *        asset: {
 *           'name': 'logo.png',
 *           'src': 'http://www.insales.ru/assets/images/content/logo.png',
 *           'type': 'Asset::Media'
 *           }
 *      }).then(output => {
 *        console.info(output.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      { asset:
 *         { id: '60374631',
 *           'theme-id': '643879',
 *           type: 'Asset::Media',
 *           name: 'logo.png',
 *           'content-type': 'image/jpeg',
 *           'file-size': '71373',
 *           'human-readable-name': 'logo.png',
 *             asset_url: '/assets/1/4903/643879/v_1467231594/logo.png?1467234697' } }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} id Required, app id
 * @param {object} options.asset Required, asset property
 * @returns {Promise}
 */


function uploadAsset(options, id) {
  return (0, _post.post)({
    id: id,
    token: options.token,
    url: options.url,
    api: "themes/".concat(options.theme, "/assets"),
    obj: {
      asset: options.asset
    }
  });
}
/**
 * DELETE /admin/themes/#{theme_id}/assets/#{id}.xml
 *
 * Examples:
 *
 *      insales.removeAsset({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *          theme: '643879',
 *          assetId: '60423000'
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
 * @param {Number|String} options.theme Required, theme id
 * @param {Number|String} options.assetId Required, asset id
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */


function removeAsset(options, id) {
  return (0, _remove.remove)({
    id: id,
    token: options.token,
    url: options.url,
    api: "themes/".concat(options.theme, "/assets/").concat(options.assetId)
  });
}