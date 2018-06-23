"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _options2 = _interopRequireDefault(require("./options"));

var _token2 = require("./api/token");

var _account = require("./api/account");

var _product = require("./api/product");

var _collection = require("./api/collection");

var _file = require("./api/file");

var _asset = require("./api/asset");

var _jstag = require("./api/jstag");

var _themes = require("./api/themes");

var _recurringcharge = require("./api/recurringcharge");

var _charge = require("./api/charge");

var _coupon = require("./api/coupon");

var _pricekind = require("./api/pricekind");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InSales =
/*#__PURE__*/
function () {
  function InSales(options) {
    _classCallCheck(this, InSales);

    var _options = options || {};

    if (!_options.id) throw new Error('Missing app id');
    if (!_options.secret) throw new Error('Missing app secret');
    if (_options.http) _options2.default.scheme = 'http';
    this.id = _options.id;
    this.secret = _options.secret;
  }

  _createClass(InSales, [{
    key: "token",
    value: function token(tok) {
      return (0, _token2.token)(tok, this.secret);
    }
  }, {
    key: "getProduct",
    value: function getProduct(options) {
      return (0, _product.getProduct)(options, this.id);
    }
  }, {
    key: "createProduct",
    value: function createProduct(options) {
      return (0, _product.createProduct)(options, this.id);
    }
  }, {
    key: "editProduct",
    value: function editProduct(options) {
      return (0, _product.editProduct)(options, this.id);
    }
  }, {
    key: "removeProduct",
    value: function removeProduct(options) {
      return (0, _product.removeProduct)(options, this.id);
    }
  }, {
    key: "listProduct",
    value: function listProduct(options) {
      return (0, _product.listProduct)(options, this.id);
    }
  }, {
    key: "getCollection",
    value: function getCollection(options) {
      return (0, _collection.getCollection)(options, this.id);
    }
  }, {
    key: "listCollection",
    value: function listCollection(options) {
      return (0, _collection.listCollection)(options, this.id);
    }
  }, {
    key: "listFile",
    value: function listFile(options) {
      return (0, _file.listFile)(options, this.id);
    }
  }, {
    key: "removeFile",
    value: function removeFile(options) {
      return (0, _file.removeFile)(options, this.id);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(options) {
      return (0, _file.uploadFile)(options, this.id);
    }
  }, {
    key: "listAsset",
    value: function listAsset(options) {
      return (0, _asset.listAsset)(options, this.id);
    }
  }, {
    key: "getAsset",
    value: function getAsset(options) {
      return (0, _asset.getAsset)(options, this.id);
    }
  }, {
    key: "editAsset",
    value: function editAsset(options) {
      return (0, _asset.editAsset)(options, this.id);
    }
  }, {
    key: "renameAsset",
    value: function renameAsset(options) {
      return (0, _asset.renameAsset)(options, this.id);
    }
  }, {
    key: "removeAsset",
    value: function removeAsset(options) {
      return (0, _asset.removeAsset)(options, this.id);
    }
  }, {
    key: "uploadAsset",
    value: function uploadAsset(options) {
      return (0, _asset.uploadAsset)(options, this.id);
    }
  }, {
    key: "listThemes",
    value: function listThemes(options) {
      return (0, _themes.listThemes)(options, this.id);
    }
  }, {
    key: "getAccount",
    value: function getAccount(options) {
      return (0, _account.getAccount)(options, this.id);
    }
  }, {
    key: "createJsTag",
    value: function createJsTag(options) {
      return (0, _jstag.createJsTag)(options, this.id);
    }
  }, {
    key: "getRecurring",
    value: function getRecurring(options) {
      return (0, _recurringcharge.getRecurring)(options, this.id);
    }
  }, {
    key: "createRecurring",
    value: function createRecurring(options) {
      return (0, _recurringcharge.createRecurring)(options, this.id);
    }
  }, {
    key: "changeRecurring",
    value: function changeRecurring(options) {
      return (0, _recurringcharge.changeRecurring)(options, this.id);
    }
  }, {
    key: "removeRecurring",
    value: function removeRecurring(options) {
      return (0, _recurringcharge.removeRecurring)(options, this.id);
    }
  }, {
    key: "getCharge",
    value: function getCharge(options) {
      return (0, _charge.getCharge)(options, this.id);
    }
  }, {
    key: "createCharge",
    value: function createCharge(options) {
      return (0, _charge.createCharge)(options, this.id);
    }
  }, {
    key: "declineCharge",
    value: function declineCharge(options) {
      return (0, _charge.declineCharge)(options, this.id);
    }
  }, {
    key: "listCharge",
    value: function listCharge(options) {
      return (0, _charge.listCharge)(options, this.id);
    }
  }, {
    key: "getCoupon",
    value: function getCoupon(options) {
      return (0, _coupon.getCoupon)(options, this.id);
    }
  }, {
    key: "createCoupon",
    value: function createCoupon(options) {
      return (0, _coupon.createCoupon)(options, this.id);
    }
  }, {
    key: "removeCoupon",
    value: function removeCoupon(options) {
      return (0, _coupon.removeCoupon)(options, this.id);
    }
  }, {
    key: "listCoupon",
    value: function listCoupon(options) {
      return (0, _coupon.listCoupon)(options, this.id);
    }
  }, {
    key: "editCoupon",
    value: function editCoupon(options) {
      return (0, _coupon.editCoupon)(options, this.id);
    }
  }, {
    key: "getPriceKind",
    value: function getPriceKind(options) {
      return (0, _pricekind.getPriceKind)(options, this.id);
    }
  }, {
    key: "createPriceKind",
    value: function createPriceKind(options) {
      return (0, _pricekind.createPriceKind)(options, this.id);
    }
  }, {
    key: "removePriceKind",
    value: function removePriceKind(options) {
      return (0, _pricekind.removePriceKind)(options, this.id);
    }
  }, {
    key: "listPriceKind",
    value: function listPriceKind(options) {
      return (0, _pricekind.listPriceKind)(options, this.id);
    }
  }, {
    key: "editPriceKind",
    value: function editPriceKind(options) {
      return (0, _pricekind.editPriceKind)(options, this.id);
    }
  }]);

  return InSales;
}();

var _default = function _default(options) {
  return new InSales(options);
};

exports.default = _default;