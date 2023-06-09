(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/common/vendor"],{

/***/ 330:
/*!*********************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/pay/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 26));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 28));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _index = _interopRequireDefault(__webpack_require__(/*! @/shopro/request/index */ 38));
var _wechat = _interopRequireDefault(__webpack_require__(/*! @/shopro/wechat/wechat */ 48));
var _index2 = __webpack_require__(/*! @/shopro/router/index.js */ 45);
var _store = _interopRequireDefault(__webpack_require__(/*! @/shopro/store */ 35));
var _platform = _interopRequireDefault(__webpack_require__(/*! @/shopro/platform */ 40));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * 支付
 * 
 * @param {String} payment = ['wechat','alipay','wallet']  	- 支付方式
 * @param {Object} order = {}  								- 订单详情
 * @param {String} orderType = ['goods','recharge'] 		- 订单类型
 */
var ShoproPay = /*#__PURE__*/function () {
  //						wxOfficialAccount			wxMiniProgram			App						H5
  // 			wechat			公众号JSSDK支付				小程序支付			微信开放平台支付			H5网页支付
  //			alipay			复制网址						复制网址				支付宝开放平台支付		    直接跳转链接
  // 			wallet			v							v					v						v

  function ShoproPay(payment, order, orderType) {
    (0, _classCallCheck2.default)(this, ShoproPay);
    this.payment = payment;
    this.order = order;
    this.orderType = orderType;
    this.platform = _platform.default.get();
    var payMehod = this.getPayMethod();
    payMehod();
  }
  (0, _createClass2.default)(ShoproPay, [{
    key: "getPayMethod",
    value: function getPayMethod() {
      var _this = this;
      var payMethod = {
        'wxOfficialAccount': {
          'wechat': function wechat() {
            _this.wxOfficialAccountPay();
          },
          'alipay': function alipay() {
            _this.copyPayLink();
          },
          'wallet': function wallet() {
            _this.walletPay();
          }
        },
        'wxMiniProgram': {
          'wechat': function wechat() {
            _this.wxMiniProgramPay();
          },
          'alipay': function alipay() {
            _this.copyPayLink();
          },
          'wallet': function wallet() {
            _this.walletPay();
          }
        },
        'App': {
          'wechat': function wechat() {
            _this.wechatPay();
          },
          'alipay': function alipay() {
            _this.aliPay();
          },
          'wallet': function wallet() {
            _this.walletPay();
          }
        },
        'H5': {
          'wechat': function wechat() {
            _this.wechatWapPay();
          },
          'alipay': function alipay() {
            _this.goToPayLink();
          },
          'wallet': function wallet() {
            _this.walletPay();
          }
        }
      };
      return payMethod[this.platform][this.payment];
    }

    // 预支付
  }, {
    key: "prepay",
    value: function prepay() {
      var _this2 = this;
      var that = this;
      return new Promise(function (resolve, reject) {
        var that = _this2;
        var params = {
          order_sn: that.order.order_sn,
          payment: that.payment
        };
        if (uni.getStorageSync('openid')) {
          params.openid = uni.getStorageSync('openid');
        }
        (0, _index.default)('money.prepay', params, '支付中').then(function (res) {
          if (res.code === 1) {
            res.data === 'no_openid' ? uni.showModal({
              title: '微信支付',
              content: '请先绑定微信再使用微信支付',
              success: function success(res) {
                if (res.confirm) {
                  _wechat.default.bind();
                }
              }
            }) : resolve(res);
          }
        });
      });
    }

    // 微信H5支付
  }, {
    key: "wxOfficialAccountPay",
    value: function () {
      var _wxOfficialAccountPay = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var that, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                _context.next = 3;
                return this.prepay();
              case 3:
                result = _context.sent;
                wxsdk.wxpay(result.data.pay_data, function (res) {
                  res.errMsg == "chooseWXPay:ok" ? that.payResult('success') : that.payResult('fail');
                });
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function wxOfficialAccountPay() {
        return _wxOfficialAccountPay.apply(this, arguments);
      }
      return wxOfficialAccountPay;
    }() //浏览器微信支付
  }, {
    key: "wechatWapPay",
    value: function () {
      var _wechatWapPay = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var that, result, url, reg, newUrl, domain, params;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                _context2.next = 3;
                return this.prepay();
              case 3:
                result = _context2.sent;
                if (result.code === 1) {
                  url = result.data.pay_data.match(/url\=\'(\S*)\'/);
                  reg = new RegExp('&amp;', 'g'); //g代表全部
                  newUrl = url[1].replace(reg, '&');
                  domain = _store.default.getters.initShop.domain; //域名需要https
                  params = encodeURIComponent("".concat(domain, "pages/order/payment/result?orderId=").concat(that.order.id, "&type=").concat(that.payment, "&orderType=").concat(that.orderType));
                  window.location.href = newUrl + '&redirect_url=' + params;
                }
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function wechatWapPay() {
        return _wechatWapPay.apply(this, arguments);
      }
      return wechatWapPay;
    }() // 微信小程序支付
  }, {
    key: "wxMiniProgramPay",
    value: function () {
      var _wxMiniProgramPay = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var that, result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = this;
                _context3.next = 3;
                return this.prepay();
              case 3:
                result = _context3.sent;
                uni.requestPayment(_objectSpread(_objectSpread({
                  provider: 'wxpay'
                }, result.data.pay_data), {}, {
                  success: function success(res) {
                    that.payResult('success');
                  },
                  fail: function fail(err) {
                    console.log('支付取消或者失败:', err);
                    err.errMsg !== "requestPayment:fail cancel" && that.payResult('fail');
                  }
                }));
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function wxMiniProgramPay() {
        return _wxMiniProgramPay.apply(this, arguments);
      }
      return wxMiniProgramPay;
    }() // 余额支付
  }, {
    key: "walletPay",
    value: function () {
      var _walletPay = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var that, result;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                that = this;
                _context4.next = 3;
                return this.prepay();
              case 3:
                result = _context4.sent;
                result.code === 1 && that.payResult('success');
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function walletPay() {
        return _walletPay.apply(this, arguments);
      }
      return walletPay;
    }() // 支付宝复制链接支付
  }, {
    key: "copyPayLink",
    value: function () {
      var _copyPayLink = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var that, result;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                that = this;
                _context5.next = 3;
                return this.prepay();
              case 3:
                result = _context5.sent;
                if (result.code === 1) {
                  //引入showModal 点击确认 复制链接；
                  uni.showModal({
                    title: '支付宝支付',
                    content: '复制链接到外部浏览器',
                    confirmText: '复制链接',
                    success: function success(res) {
                      if (res.confirm) {
                        uni.setClipboardData({
                          data: result.data.pay_data,
                          success: function success(data) {
                            that.$u.toast('已复制到剪切板');
                          }
                        });
                      }
                    }
                  });
                }
              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function copyPayLink() {
        return _copyPayLink.apply(this, arguments);
      }
      return copyPayLink;
    }() // 支付链接
  }, {
    key: "goToPayLink",
    value: function () {
      var _goToPayLink = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var that, result;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                that = this;
                _context6.next = 3;
                return this.prepay();
              case 3:
                result = _context6.sent;
                if (result.code === 1) {
                  window.location = result.data.pay_data;
                }
              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function goToPayLink() {
        return _goToPayLink.apply(this, arguments);
      }
      return goToPayLink;
    }() // 支付宝支付
  }, {
    key: "aliPay",
    value: function () {
      var _aliPay = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var that, result;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                that = this;
                _context7.next = 3;
                return this.prepay();
              case 3:
                result = _context7.sent;
                if (result.code === 1) {
                  uni.requestPayment({
                    provider: 'alipay',
                    orderInfo: result.data.pay_data,
                    //支付宝订单数据
                    success: function success(res) {
                      that.payResult('success');
                    },
                    fail: function fail(err) {
                      console.log('支付取消或者失败:', err);
                      err.errMsg !== "requestPayment:fail cancel" && that.payResult('fail');
                    }
                  });
                }
              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function aliPay() {
        return _aliPay.apply(this, arguments);
      }
      return aliPay;
    }() // 微信支付
  }, {
    key: "wechatPay",
    value: function () {
      var _wechatPay = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var that, result;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                that = this;
                _context8.next = 3;
                return this.prepay();
              case 3:
                result = _context8.sent;
                if (result.code === 1) {
                  uni.requestPayment({
                    provider: 'wxpay',
                    orderInfo: JSON.parse(result.data.pay_data),
                    //微信订单数据(官方说是string。实测为object)
                    success: function success(res) {
                      that.payResult('success');
                    },
                    fail: function fail(err) {
                      err.errMsg !== "requestPayment:fail cancel" && that.payResult('fail');
                      console.log('支付取消或者失败:', err);
                    }
                  });
                }
              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function wechatPay() {
        return _wechatPay.apply(this, arguments);
      }
      return wechatPay;
    }() // 支付结果跳转,success:成功，fail:失败
  }, {
    key: "payResult",
    value: function payResult(resultType) {
      var that = this;
      _index2.router.replace({
        path: '/pages/order/payment/result',
        query: {
          orderId: that.order.id,
          type: that.payment,
          //重新支付的时候使用
          payState: resultType,
          orderType: that.orderType
        }
      });
    }
  }]);
  return ShoproPay;
}();
exports.default = ShoproPay;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/common/vendor.js.map