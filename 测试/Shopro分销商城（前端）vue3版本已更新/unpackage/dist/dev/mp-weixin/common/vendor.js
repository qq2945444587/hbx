(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1145:
/*!************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/poster/tools.js ***!
  \************************************************************/
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
var _default = {
  checkImgHttp: function checkImgHttp(imgPath, type) {
    var _this = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var res, newPath, pathArr;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getImageInfo_PromiseFc(imgPath);
            case 2:
              res = _context.sent;
              newPath = '';
              if (res) {
                _context.next = 20;
                break;
              }
              uni.hideLoading();
              _context.t0 = type;
              _context.next = _context.t0 === 'avatar' ? 9 : _context.t0 === 'bgImage' ? 11 : _context.t0 === 'wxCode' ? 13 : _context.t0 === 'goodsImage' ? 15 : 17;
              break;
            case 9:
              console.log('%cerr:海报头像图片错误: ' + imgPath, 'color:green;background:yellow');
              return _context.abrupt("break", 18);
            case 11:
              console.log('%cerr:海报背景图片错误: ' + imgPath, 'color:green;background:yellow');
              return _context.abrupt("break", 18);
            case 13:
              console.log('%cerr:海报微信二维码图片错误: ' + imgPath, 'color:green;background:yellow');
              return _context.abrupt("break", 18);
            case 15:
              console.log('%cerr:海报商品图片错误: ' + imgPath, 'color:green;background:yellow');
              return _context.abrupt("break", 18);
            case 17:
              return _context.abrupt("break", 18);
            case 18:
              _context.next = 23;
              break;
            case 20:
              pathArr = imgPath.split('://');
              pathArr[0] = 'https';
              newPath = pathArr.join('://');
            case 23:
              return _context.abrupt("return", newPath);
            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  // 检测图片是否可用
  getImageInfo_PromiseFc: function getImageInfo_PromiseFc(imgPath) {
    var _this2 = this;
    return new Promise(function (rs, rj) {
      imgPath = _this2.checkMPUrl(imgPath);
      uni.getImageInfo({
        src: imgPath,
        success: function success(res) {
          rs(1);
        },
        fail: function fail(err) {
          console.log(err);
          rs(0);
        }
      });
    });
  },
  // 微信头像
  checkMPUrl: function checkMPUrl(url) {
    if (url.substring(0, 4) === 'http' && url.substring(0, 5) !== 'https' && url.substring(0, 12) !== 'http://store' && url.substring(0, 10) !== 'http://tmp' && url.substring(0, 10) !== 'http://usr') {
      url = 'https' + url.substring(4, url.length);
    }
    return url;
  },
  /**
   * 相对比例
   * @param {Object} bgObj -  背景图片数据对象
   * @param {Number} num -  需要计算的绘制模块数值
   */
  getScale: function getScale(bgObj) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Number(bgObj.width * (num / bgObj.width).toFixed(2));
  },
  /**
   * 绘制序列
   * @param {Object} bgObj -  背景图片数据对象
   * @param {Array} drawArr -  绘制元素数组对象
   */
  initDrawArray: function initDrawArray(bgObj, drawArr) {
    var _this3 = this;
    var that = this;
    var arr = [];
    drawArr.forEach(function (item) {
      var _item$lineFeed, _item$lineFeed2, _item$lineFeed3, _item$lineFeed4, _item$lineThrough, _item$lineThrough2, _item$lineThrough3, _item$lineThrough4, _arr$push, _item$circleSet, _item$circleSet2, _item$circleSet3, _item$roundRectSet, _arr$push2;
      switch (item.type) {
        case 'text':
          arr.push((_arr$push = {
            type: 'text',
            text: item.text,
            //文本
            size: that.getScale(bgObj, item.size) || 50,
            //大小
            color: item.color || 'black',
            //颜色
            alpha: item.alpha || 1,
            //透明度
            textAlign: item.textAlign || 'left',
            //文字x对齐方式: 'left'、'middle'、'right'
            textBaseline: item.textBaseline || 'middle',
            //文字y对齐方式: 'top'、'bottom'、'middle'、'normal'
            dx: that.getScale(bgObj, item.dx) || 0,
            //文字x轴位置
            dy: that.getScale(bgObj, item.dy + item.size) || 0
          }, (0, _defineProperty2.default)(_arr$push, item.lineFeed ? 'lineFeed' : '', {
            //设置换行
            maxWidth: ((_item$lineFeed = item.lineFeed) === null || _item$lineFeed === void 0 ? void 0 : _item$lineFeed.maxWidth) && that.getScale(bgObj, item.lineFeed.maxWidth) || bgObj.width,
            //最大宽度
            lineHeight: ((_item$lineFeed2 = item.lineFeed) === null || _item$lineFeed2 === void 0 ? void 0 : _item$lineFeed2.lineHeight) && that.getScale(bgObj, item.lineFeed.lineHeight) || 50,
            //行高
            lineNum: ((_item$lineFeed3 = item.lineFeed) === null || _item$lineFeed3 === void 0 ? void 0 : _item$lineFeed3.lineNum) || -1,
            // 最多行数，小于0为无限
            dx: ((_item$lineFeed4 = item.lineFeed) === null || _item$lineFeed4 === void 0 ? void 0 : _item$lineFeed4.dx) || -1 //非第一行文字位置，小于0为默认位置
          }), (0, _defineProperty2.default)(_arr$push, "infoCallBack", function infoCallBack(textLength) {
            //回调函数，返回文本信息
            if (item.isBgCenter) {
              return {
                dx: (bgObj.width - textLength) / 2
              };
            }
            return {};
          }), (0, _defineProperty2.default)(_arr$push, item.lineThrough ? 'lineThrough' : '', {
            // 设置删除线，默认为字体样式
            width: ((_item$lineThrough = item.lineThrough) === null || _item$lineThrough === void 0 ? void 0 : _item$lineThrough.width) || item.size / 10,
            style: ((_item$lineThrough2 = item.lineThrough) === null || _item$lineThrough2 === void 0 ? void 0 : _item$lineThrough2.style) || item.color,
            alpha: ((_item$lineThrough3 = item.lineThrough) === null || _item$lineThrough3 === void 0 ? void 0 : _item$lineThrough3.alpha) || 1,
            cap: ((_item$lineThrough4 = item.lineThrough) === null || _item$lineThrough4 === void 0 ? void 0 : _item$lineThrough4.cap) || 'butt'
          }), (0, _defineProperty2.default)(_arr$push, "fontStyle", item.fontStyle || 'normal'), (0, _defineProperty2.default)(_arr$push, "fontVariant", item.fontVariant || 'normal'), (0, _defineProperty2.default)(_arr$push, "fontWeight", item.fontWeight || 'normal'), (0, _defineProperty2.default)(_arr$push, "fontFamily", item.fontFamily || 'sans-serif'), _arr$push));
          break;
        case 'qrcode':
          arr.push({
            type: 'qrcode',
            text: String(item.text || '') || '',
            // 生成内容
            size: Number(that.getScale(bgObj, item.size) || 0) || 200,
            // 二维码大小
            background: String(item.background || '') || '#ffffff',
            // 背景色
            foreground: String(item.foreground || '') || '#000000',
            // 前景色
            correctLevel: Number(item.correctLevel || 0) || 3,
            // 容错级别
            image: String(item.image || '') || '',
            // 二维码图标
            imageSize: Number(that.getScale(bgObj, item.imageSize) || 0) || 40,
            // 二维码图标大小
            dx: item.isBgCenter ? (bgObj.width - item.size) / 2 : Number(that.getScale(bgObj, item.dx) || 0) || 0,
            dy: Number(that.getScale(bgObj, item.dy) || 0) || 0 // y轴距离
          });

          break;
        case 'image':
          arr.push((_arr$push2 = {
            type: 'image',
            url: _this3.checkImgHttp(item.url, item.name),
            // 网络图片路径
            dWidth: Number(that.getScale(bgObj, item.dWidth) || 0) || 100,
            //绘制图像的宽度，允许缩放
            dHeight: Number(that.getScale(bgObj, item.dHeight) || 0) || 100,
            //绘制图像的高度，允许缩放
            sWidth: Number(that.getScale(bgObj, item.sWidth) || 0) || 100,
            //绘制图像的宽度，允许缩放
            sHeight: Number(that.getScale(bgObj, item.sHeight) || 0) || 100,
            //绘制图像的高度，允许缩放
            dx: Number(that.getScale(bgObj, item.dx) || 0) || 0,
            // x轴距离
            dy: Number(that.getScale(bgObj, item.dy) || 0) || 0,
            // y轴距离
            sx: Number(that.getScale(bgObj, item.sx) || 0) || 0,
            sy: Number(that.getScale(bgObj, item.sy) || 0) || 0
          }, (0, _defineProperty2.default)(_arr$push2, item.circleSet ? 'circleSet' : '', {
            //圆形设置
            r: Number(((_item$circleSet = item.circleSet) === null || _item$circleSet === void 0 ? void 0 : _item$circleSet.r) && that.getScale(bgObj, item.circleSet.r) || 0),
            x: Number(((_item$circleSet2 = item.circleSet) === null || _item$circleSet2 === void 0 ? void 0 : _item$circleSet2.x) && that.getScale(bgObj, item.circleSet.x) || 0),
            y: Number(((_item$circleSet3 = item.circleSet) === null || _item$circleSet3 === void 0 ? void 0 : _item$circleSet3.y) && that.getScale(bgObj, item.circleSet.y) || 0)
          }), (0, _defineProperty2.default)(_arr$push2, item.roundRectSet ? 'roundRectSet' : '', {
            //圆角设置
            r: Number(((_item$roundRectSet = item.roundRectSet) === null || _item$roundRectSet === void 0 ? void 0 : _item$roundRectSet.r) && that.getScale(bgObj, item.roundRectSet.r) || 0)
          }), (0, _defineProperty2.default)(_arr$push2, "infoCallBack", function infoCallBack(imgInfo) {
            //回调函数，返回图片信息
            if (item.isBgCenter) {
              return {
                dx: (bgObj.width - item.dWidth) / 2
              };
            }
          }), _arr$push2));
          break;
        default:
          _app.log('暂无次类型');
          break;
      }
    });
    return arr;
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 184:
/*!****************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/permission/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 26));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 28));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _mp = _interopRequireDefault(__webpack_require__(/*! ./mp.js */ 185));
/**
 * 权限入口文件
 * @param {String}  authType -权限种类
 */
//微信小程序
var Auth = /*#__PURE__*/function () {
  function Auth(authType) {
    (0, _classCallCheck2.default)(this, Auth);
    this.authType = authType;
  }
  (0, _createClass2.default)(Auth, [{
    key: "check",
    value: function () {
      var _check = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var state;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = 0;
                _context.next = 3;
                return new _mp.default(this.authType).checkAuth();
              case 3:
                state = _context.sent;
                return _context.abrupt("return", Promise.resolve(state));
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function check() {
        return _check.apply(this, arguments);
      }
      return check;
    }()
  }]);
  return Auth;
}();
exports.default = Auth;

/***/ }),

/***/ 185:
/*!*************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/permission/mp.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
/**
 * 小程序相关权限
 * @param {String} scopeValue - 权限种类，isMessage为订阅消息设置,默认false
 *                         
 */

var TIPS_MAP = {
  'userInfo': '用户信息',
  'userLocation': '地理位置',
  //需要在manifest中配置permission。
  'address': '通信地址',
  'userLocationBackground': '后台定位',
  'record': '录音功能',
  'writePhotosAlbum': '保存到相册',
  'camera': '摄像头',
  'invoice': '获取发票',
  'invoiceTitle': '发票抬头',
  'werun': '微信步数',
  'message': '订阅消息'
};
var MpAuth = /*#__PURE__*/function () {
  function MpAuth(scopeValue) {
    (0, _classCallCheck2.default)(this, MpAuth);
    this.scopeValue = scopeValue;
    this.isMessage = scopeValue === 'message' ? true : false;
  }

  // 检测当前请求权限是否可用。
  (0, _createClass2.default)(MpAuth, [{
    key: "checkAuth",
    value: function checkAuth() {
      var _this = this;
      var that = this;
      return new Promise(function (resolve, reject) {
        uni.getSetting({
          withSubscriptions: that.isMessage,
          //是否获取用户订阅消息的订阅状态
          success: function success(res) {
            if (!that.isMessage) {
              // 非订阅消息
              if (!res.authSetting["scope.".concat(_this.scopeValue)]) {
                //用户未请求过此权限，后者用户拒绝了此权限
                uni.authorize({
                  //如果没请求过，会弹窗询问。同意过，直接success。此前拒绝，直接fai
                  scope: "scope.".concat(_this.scopeValue),
                  success: function success(res) {
                    //用户同意
                    console.log("%c\u7528\u6237\u540C\u610F".concat(TIPS_MAP[_this.scopeValue], "\u6743\u96501"), 'color:green;background:yellow');
                    resolve(1);
                  },
                  fail: function fail(err) {
                    //用户拒绝
                    console.log("%c\u7528\u6237\u62D2\u7EDD".concat(TIPS_MAP[_this.scopeValue], "\u6743\u9650"), 'color:green;background:yellow');
                    resolve(0);
                    that.setAuth();
                  }
                });
              } else {
                //用户同意授权此权限，直接调用接口
                console.log("%c\u7528\u6237\u540C\u610F".concat(TIPS_MAP[_this.scopeValue], "\u6743\u96502"), 'color:green;background:yellow');
                resolve(1);
              }
            } else {//订阅消息 TODO
            }
          },
          fail: function fail(err) {
            console.log("%cuni.getSetting\u5931\u8D25\uFF1A", 'color:green;background:yellow');
            console.log(err);
          }
        });
      });
    }

    // 引导用户开启权限
  }, {
    key: "setAuth",
    value: function setAuth() {
      uni.showModal({
        title: '设置权限',
        content: "\u5F53\u524D\u529F\u80FD\u9700\u8981".concat(TIPS_MAP[this.scopeValue], "\u6743\u9650\uFF0C\u662F\u5426\u5F00\u542F\uFF1F"),
        confirmText: '立即授权',
        success: function success(res) {
          res.confirm && uni.openSetting();
        },
        fail: function fail(err) {
          console.log("%cuni.showModal\u5931\u8D25\uFF1A", 'color:green;background:yellow');
        }
      });
    }
  }]);
  return MpAuth;
}();
exports.default = MpAuth;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "",
    appName: "Shopro分销商城（前端）vue3版本已更新",
    appVersion: "1.3.8",
    appVersionCode: "137",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.7.9",
    uniRuntimeVersion: "3.7.9",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "",
      appName: "Shopro分销商城（前端）vue3版本已更新",
      appVersion: "1.3.8",
      appVersionCode: "137",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"Shopro分销商城（前端）vue3版本已更新","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
var eventChannelStack = [];
function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };
  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };
  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isArray = Array.isArray;
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"Shopro分销商城（前端）vue3版本已更新","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"Shopro分销商城（前端）vue3版本已更新","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"Shopro分销商城（前端）vue3版本已更新","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"Shopro分销商城（前端）vue3版本已更新","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize',
    'onUploadDouyinVideo'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 27)();
module.exports = runtime;

/***/ }),

/***/ 27:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 28:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 29:
/*!************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/pages.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 33:
/*!*****************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.init = init;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 26));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 28));
var _env = __webpack_require__(/*! ../env.js */ 34);
var _store = _interopRequireDefault(__webpack_require__(/*! @/shopro/store */ 35));
var _request = _interopRequireDefault(__webpack_require__(/*! @/shopro/request */ 38));
var _platform = _interopRequireDefault(__webpack_require__(/*! @/shopro/platform */ 40));
var _tools = _interopRequireDefault(__webpack_require__(/*! @/shopro/utils/tools */ 44));
var _mixins = _interopRequireDefault(__webpack_require__(/*! @/shopro/mixins */ 50));
var _wechat = _interopRequireDefault(__webpack_require__(/*! @/shopro/wechat/wechat */ 48));
// 挂载变量

// mixin混入

var install = function install(Vue) {
  Vue.prototype.$API_URL = _env.API_URL;
  Vue.prototype.$IMG_URL = _env.IMG_URL;
  // 挂载请求
  Vue.prototype.$http = _request.default;
  // 平台判断
  Vue.prototype.$platform = _platform.default;
  // 挂载工具函数
  Vue.prototype.$tools = _tools.default;
  Vue.mixin(_mixins.default);
};
function init(_x) {
  return _init.apply(this, arguments);
}
function _init() {
  _init = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 检测小程序更新(如果从朋友圈场景进入则无此API)
            options.scene !== 1154 && _wechat.default.checkMiniProgramUpdate();
            _context.next = 3;
            return _store.default.dispatch("appInit", options);
          case 3:
            _context.next = 5;
            return _store.default.dispatch("getTemplate", options);
          case 5:
            _context.next = 7;
            return _store.default.dispatch('getMessageIds');
          case 7:
            //获取模板消息

             true && _store.default.dispatch("syncPages");
          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}
var _default = {
  install: install
};
exports.default = _default;

/***/ }),

/***/ 34:
/*!********************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/env.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAP_KEY = exports.IMG_URL = exports.HAS_LIVE = exports.BASE_URL = exports.API_URL = void 0;
/**
 *  Shopro全局配置文件
 */

var BASE_URL = 'https://demo.shopro.top'; //后台根域名 https://demo.shopro.top
exports.BASE_URL = BASE_URL;
var API_URL = "".concat(BASE_URL, "/addons/shopro/"); //后台接口域名
exports.API_URL = API_URL;
var IMG_URL = 'http://file.shopro.top'; //全局网络图片地址变量，css背景图片地址变量在uni.scss
exports.IMG_URL = IMG_URL;
var MAP_KEY = '426ebc3f1bbaced***89ee6061a98'; //高德地图开发者Web服务key,逆坐标解析
exports.MAP_KEY = MAP_KEY;
var HAS_LIVE = false; //后台是否开通直播权限,根据情况在manifest.json中，开启注释相应组件的引入，pages.json中打开直播
exports.HAS_LIVE = HAS_LIVE;

/***/ }),

/***/ 35:
/*!***********************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/store/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 36));
var _shopro = _interopRequireDefault(__webpack_require__(/*! ./modules/shopro.js */ 37));
var _user = _interopRequireDefault(__webpack_require__(/*! ./modules/user.js */ 43));
var _cart = _interopRequireDefault(__webpack_require__(/*! ./modules/cart.js */ 49));
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  modules: {
    shopro: _shopro.default,
    user: _user.default,
    cart: _cart.default
  }
});
var _default = store;
exports.default = _default;

/***/ }),

/***/ 36:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 37:
/*!********************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/store/modules/shopro.js ***!
  \********************************************************************/
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
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 28));
var _index = _interopRequireDefault(__webpack_require__(/*! @/shopro/request/index */ 38));
var _share = _interopRequireDefault(__webpack_require__(/*! @/shopro/share */ 42));
var state = {
  shop: {},
  // 商城信息
  wechat: {},
  // 微信配置
  share: {},
  // 分享配置
  payment: {},
  // 支付配置
  addons: [],
  // 插件配置
  chat: uni.getStorageSync("chat") || {},
  // 客服配置
  store: {},
  // 商城信息
  tabbarData: [],
  //自定义底部导航数据
  recharge: uni.getStorageSync("recharge") || {},
  //充值配置

  homeTemplate: [],
  // 首页模板数据
  userTemplate: [],
  // 个人中心模板数据
  floatData: {},
  // 悬浮按钮数据
  popupData: {},
  // 弹窗数据
  hasTemplate: true,
  //是否有模板数据
  shareInfo: {} // 默认分享数据
};

var getters = {
  initShop: function initShop(state) {
    return state.shop;
  },
  initStore: function initStore(state) {
    return state.store;
  },
  initShare: function initShare(state) {
    return state.share;
  },
  initPayment: function initPayment(state) {
    return state.payment;
  },
  initAddons: function initAddons(state) {
    return state.addons;
  },
  initChat: function initChat(state) {
    return state.chat;
  },
  initWechat: function initWechat(state) {
    return state.wechat;
  },
  initRecharge: function initRecharge(state) {
    return state.recharge;
  },
  hasTemplate: function hasTemplate(state) {
    return state.hasTemplate;
  },
  homeTemplate: function homeTemplate(state) {
    return state.homeTemplate;
  },
  userTemplate: function userTemplate(state) {
    return state.userTemplate;
  },
  floatData: function floatData(state) {
    return state.floatData;
  },
  popupData: function popupData(state) {
    return state.popupData;
  },
  tabbarData: function tabbarData(state) {
    return state.tabbarData;
  },
  shareInfo: function shareInfo(state) {
    return state.shareInfo;
  }
};
var actions = {
  // 初始化数据
  appInit: function appInit(_ref, options) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var commit, dispatch, result, _options$query;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit, dispatch = _ref.dispatch;
              _context.next = 3;
              return (0, _index.default)('common.init');
            case 3:
              result = _context.sent;
              if (!(result.code === 1)) {
                _context.next = 8;
                break;
              }
              commit('CONFIG', result.data);
              if (!(options !== null && options !== void 0 && (_options$query = options.query) !== null && _options$query !== void 0 && _options$query.token)) {
                dispatch('autoLogin');
              }
              return _context.abrupt("return", result.data);
            case 8:
              return _context.abrupt("return", false);
            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  // 获取模板数据
  getTemplate: function getTemplate(_ref2, options) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var commit, shop_id, scene, sceneObj, result;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              shop_id = 0;
              if (options !== null && options !== void 0 && options.query.scene) {
                scene = decodeURIComponent(options === null || options === void 0 ? void 0 : options.query.scene);
                sceneObj = scene.split('=');
                if (sceneObj[0] === 'shop_id') {
                  shop_id = sceneObj[1];
                }
              }
              _context2.next = 5;
              return (0, _index.default)('common.template', shop_id ? {
                shop_id: shop_id
              } : {});
            case 5:
              result = _context2.sent;
              if (!(result.code === 1)) {
                _context2.next = 12;
                break;
              }
              commit("hasTemplate", true);
              commit('TEMPLATE', result.data);
              return _context2.abrupt("return", result.data);
            case 12:
              commit("hasTemplate", false);
              return _context2.abrupt("return", false);
            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  // 同步路由到后端
  syncPages: function syncPages(_ref3) {
    var commit = _ref3.commit;
    (0, _index.default)('common.syncPages', {
      data: [{"path":"/pages/index/index","aliasPath":"/","meta":{"auth":false,"async":true,"title":"首页","group":"商城"}},{"path":"/pages/index/category","meta":{"auth":false,"async":true,"title":"分类","group":"商城"}},{"path":"/pages/index/cart","meta":{"auth":false,"async":true,"title":"购物车","group":"商城"}},{"path":"/pages/index/user","meta":{"auth":false,"async":true,"title":"我的","group":"商城"}},{"path":"/pages/index/view","name":"view","meta":{"auth":false,"async":true,"title":"自定义页面","group":"商城"}},{"path":"/pages/activity/sign/index","meta":{"auth":true,"async":true,"title":"签到中心","group":"应用"}},{"path":"/pages/activity/seckill/list","meta":{"auth":false,"async":true,"title":"限时秒杀","group":"秒杀"}},{"path":"/pages/activity/groupon/list","meta":{"auth":false,"async":true,"title":"今日必拼","group":"拼团"}},{"path":"/pages/activity/groupon/detail","meta":{"auth":false,"async":false,"title":"拼团详情","group":"拼团"}},{"path":"/pages/activity/groupon/my-groupon","meta":{"auth":true,"async":true,"title":"我的拼团","group":"拼团"}},{"path":"/pages/activity/discounts/list","meta":{"auth":false,"async":false,"title":"优惠活动商品","group":"活动"}},{"path":"/pages/app/score/list","meta":{"auth":false,"async":true,"title":"积分商品","group":"积分"}},{"path":"/pages/app/coupon/list","meta":{"auth":true,"async":true,"title":"优惠券中心","group":"优惠券"}},{"path":"/pages/app/coupon/detail","meta":{"auth":true,"async":true,"title":"优惠券详情","group":"优惠券"}},{"path":"/pages/app/merchant/index","meta":{"auth":true,"async":false,"title":"门店中心","group":"门店"}},{"path":"/pages/app/merchant/apply","meta":{"auth":true,"async":true,"title":"门店入驻","group":"门店"}},{"path":"/pages/app/merchant/detail","meta":{"auth":true,"async":false,"title":"订单详情","group":"订单"}},{"path":"/pages/app/merchant/info","meta":{"auth":true,"async":false,"title":"门店详情","group":"门店"}},{"path":"/pages/app/merchant/list","meta":{"auth":true,"async":true,"title":"我的门店","group":"门店"}},{"path":"/pages/app/commission/index","meta":{"auth":true,"async":true,"title":"分销中心","group":"分销"}},{"path":"/pages/app/commission/team","meta":{"auth":true,"async":true,"title":"我的团队","group":"分销"}},{"path":"/pages/app/commission/commission-log","meta":{"auth":true,"async":true,"title":"佣金明细","group":"分销"}},{"path":"/pages/app/commission/order","meta":{"auth":true,"async":true,"title":"分销订单","group":"分销"}},{"path":"/pages/app/commission/goods","meta":{"auth":true,"async":true,"title":"推广商品","group":"分销"}},{"path":"/pages/app/commission/apply","meta":{"auth":true,"async":true,"title":"申请分销商","group":"分销"}},{"path":"/pages/app/commission/rankings","meta":{"auth":true,"async":true,"title":"分销排行","group":"分销"}},{"path":"/pages/app/commission/share-log","meta":{"auth":true,"async":false,"title":"分享记录","group":"分销"}},{"path":"/pages/goods/list","meta":{"auth":false,"async":true,"title":"商品列表","group":"商品"}},{"path":"/pages/goods/detail","meta":{"auth":false,"async":true,"title":"商品详情","group":"商品"}},{"path":"/pages/goods/comment/add-comment","meta":{"auth":false,"async":false,"title":"评价","group":"商品"}},{"path":"/pages/goods/comment/comment-list","meta":{"auth":false,"async":false,"title":"评价列表","group":"商品"}},{"path":"/pages/order/confirm","meta":{"auth":true,"async":false,"title":"确认订单","group":"订单"}},{"path":"/pages/order/payment/method","meta":{"auth":true,"async":false,"title":"收银台","group":"订单"}},{"path":"/pages/order/payment/result","meta":{"auth":false,"async":false,"title":"支付结果","group":"订单"}},{"path":"/pages/order/list","meta":{"auth":true,"async":true,"title":"订单列表","group":"订单"}},{"path":"/pages/order/detail","meta":{"auth":true,"async":false,"title":"订单详情","group":"订单"}},{"path":"/pages/order/after-sale/detail","meta":{"auth":true,"async":false,"title":"售后详情","group":"订单"}},{"path":"/pages/order/after-sale/list","meta":{"auth":true,"async":true,"title":"售后列表","group":"订单"}},{"path":"/pages/order/after-sale/log","meta":{"auth":true,"async":false,"title":"售后记录","group":"订单"}},{"path":"/pages/order/after-sale/refund","meta":{"auth":true,"async":false,"title":"申请售后","group":"订单"}},{"path":"/pages/order/express/distribution-detail","meta":{"auth":true,"async":false,"title":"配送详情","group":"订单"}},{"path":"/pages/order/express/express-detail","meta":{"auth":true,"async":false,"title":"物流详情","group":"订单"}},{"path":"/pages/order/express/express-list","meta":{"auth":true,"async":false,"title":"包裹列表","group":"订单"}},{"path":"/pages/order/express/store-address","meta":{"auth":true,"async":false,"title":"选择自提点","group":"订单"}},{"path":"/pages/public/faq","meta":{"auth":false,"async":true,"title":"常见问题","group":"通用"}},{"path":"/pages/public/feedback","meta":{"auth":true,"async":true,"title":"问题反馈","group":"通用"}},{"path":"/pages/public/chat/index","meta":{"auth":true,"async":true,"title":"客服","group":"通用"}},{"path":"/pages/public/search","meta":{"auth":false,"async":true,"title":"搜索","group":"通用"}},{"path":"/pages/public/richtext","meta":{"auth":false,"async":true,"title":"富文本","group":"通用"}},{"path":"/pages/public/webview","meta":{"auth":false,"async":true,"title":"外链","group":"通用"}},{"path":"/pages/public/404","name":"404"},{"path":"/pages/public/loading"},{"path":"/pages/user/info","meta":{"auth":true,"async":true,"title":"个人信息","group":"用户"}},{"path":"/pages/user/set","meta":{"auth":false,"async":true,"title":"系统设置","group":"通用"}},{"path":"/pages/user/view-log","meta":{"auth":true,"async":true,"title":"浏览足迹","group":"用户"}},{"path":"/pages/user/wallet/index","meta":{"auth":true,"async":true,"title":"钱包","group":"用户"}},{"path":"/pages/user/wallet/withdraw","meta":{"auth":true,"async":true,"title":"提现","group":"用户"}},{"path":"/pages/user/wallet/withdraw-log","meta":{"auth":true,"async":true,"title":"提现记录","group":"用户"}},{"path":"/pages/user/wallet/top-up","meta":{"auth":true,"async":true,"title":"充值","group":"用户"}},{"path":"/pages/user/wallet/top-up-log","meta":{"auth":true,"async":true,"title":"充值记录","group":"用户"}},{"path":"/pages/user/wallet/score-balance","meta":{"auth":true,"async":true,"title":"积分余额","group":"积分"}},{"path":"/pages/user/address/list","meta":{"auth":true,"async":true,"title":"收货地址","group":"用户"}},{"path":"/pages/user/address/edit","meta":{"auth":true,"async":false,"title":"修改地址","group":"用户"}},{"path":"/pages/user/favorite","meta":{"auth":true,"async":true,"title":"我的收藏","group":"用户"}}]
    });
  }
};
var mutations = {
  CONFIG: function CONFIG(state, payload) {
    Object.keys(payload).forEach(function (k) {
      state[k] = payload[k];
      if (k === 'chat') {
        uni.setStorageSync("chat", payload[k]);
      }
      if (k === 'recharge') {
        uni.setStorageSync("recharge", payload[k]);
      }
    });
  },
  TEMPLATE: function TEMPLATE(state, data) {
    var _data$floatButton, _data$floatButton$, _data$popup, _data$popup$, _data$tabbar, _data$tabbar$;
    state.template = data;
    state.homeTemplate = data.home;
    state.userTemplate = data.user;
    state.floatData = (_data$floatButton = data['float-button']) === null || _data$floatButton === void 0 ? void 0 : (_data$floatButton$ = _data$floatButton[0]) === null || _data$floatButton$ === void 0 ? void 0 : _data$floatButton$.content;
    state.popupData = data === null || data === void 0 ? void 0 : (_data$popup = data.popup) === null || _data$popup === void 0 ? void 0 : (_data$popup$ = _data$popup[0]) === null || _data$popup$ === void 0 ? void 0 : _data$popup$.content;
    state.tabbarData = data === null || data === void 0 ? void 0 : (_data$tabbar = data.tabbar) === null || _data$tabbar === void 0 ? void 0 : (_data$tabbar$ = _data$tabbar[0]) === null || _data$tabbar$ === void 0 ? void 0 : _data$tabbar$.content;
  },
  hasTemplate: function hasTemplate(state, data) {
    state.hasTemplate = data;
  },
  // 弹窗一次的话，关闭的时候删除数据。
  delPopup: function delPopup(state, index) {
    var popupData = state.popupData;
    popupData.list.splice(index, 1);
    state.template = popupData;
  },
  shareInfo: function shareInfo(state, _shareInfo) {
    state.shareInfo = _shareInfo;
  }
};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 38:
/*!*************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/request/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = http;
var _request = _interopRequireDefault(__webpack_require__(/*! ./request */ 39));
var _apis = _interopRequireDefault(__webpack_require__(/*! ./apis.js */ 41));
var _index = _interopRequireDefault(__webpack_require__(/*! @/shopro/store/index.js */ 35));
var shoproRequest = new _request.default();
function http(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var toastBefore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var toastAfter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var api = getApiPath(url);
  /* 请求之前拦截器 */
  shoproRequest.interceptor.request(function (config, cancel) {
    var token = uni.getStorageSync('token');
    if (api.auth && !token) {
      _index.default.dispatch('showAuthModal');
      uni.hideLoading();
      throw "\u6682\u672A\u767B\u5F55,\u5DF2\u963B\u6B62\u6B64\u6B21API\u8BF7\u6C42: '".concat(api.url, "'");
    }
    token && shoproRequest.setConfig(function (config) {
      config.header.token = token;
    });
    if (toastBefore !== '') {
      uni.showLoading({
        title: toastBefore,
        mask: true
      });
    }
    return config;
  });

  /* 请求之后拦截器 */
  shoproRequest.interceptor.response(function (response) {
    uni.hideLoading();
    if (response.code === 0) {
      if (toastAfter) {
        uni.showToast({
          title: response.msg || '请求出错,稍后重试',
          icon: 'none',
          duration: 1000,
          mask: true
        });
      }
    }

    // token过期注销
    if (response.code === 401) {
      _index.default.dispatch('logout');
      _index.default.dispatch('showAuthModal');
      throw "\u767B\u5F55\u5DF2\u8FC7\u671F\u6216\u6CE8\u9500,\u5DF2\u963B\u6B62\u6B64\u6B21API\u8BF7\u6C42: '".concat(api.url, "'");
    }
    return response;
  });
  return shoproRequest.request({
    url: api.url,
    data: data,
    method: api.method
  });
}

// 组装接口路径
function getApiPath(url) {
  var apiArray = url.split(".");
  var api = _apis.default;
  apiArray.forEach(function (v) {
    api = api[v];
  });
  return api;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 39:
/*!***************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/request/request.js ***!
  \***************************************************************/
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
var _env = __webpack_require__(/*! @/env */ 34);
var _index = _interopRequireDefault(__webpack_require__(/*! @/shopro/platform/index */ 40));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Request = /*#__PURE__*/function () {
  function Request() {
    var _this = this;
    (0, _classCallCheck2.default)(this, Request);
    // 默认配置
    this.config = {
      baseUrl: _env.API_URL,
      header: {
        'content-type': 'application/json',
        'platform': _index.default.get()
      },
      url: '',
      data: {},
      params: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      custom: {}
    };

    /* 拦截器 */
    this.interceptor = {
      request: function request(cb) {
        if (cb) {
          _this.requestBefore = cb;
        } else {
          _this.requestBefore = function (request) {
            return request;
          };
        }
      },
      response: function response(cb) {
        if (cb) {
          _this.requestAfter = cb;
        } else {
          _this.requestAfter = function (response) {
            return response;
          };
        }
      }
    };
  }

  /* 判断url是否完整 */
  (0, _createClass2.default)(Request, [{
    key: "setConfig",
    value: /*设置全局配置*/
    function setConfig(func) {
      return func(this.config);
    }

    /**
     * @Function
     * @param {Object} options - 请求配置项
     * @prop {String} options.url - 请求路径
     * @prop {Object} options.data - 请求参数
     * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
     * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
     * @prop {Object} [options.header = config.header] - 请求header
     * @prop {Object} [options.method = config.method] - 请求方法
     * @returns {Promise<unknown>}
     */
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this2 = this;
        var options,
          _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                options = _objectSpread(_objectSpread(_objectSpread({}, options), this.config), this.requestBefore(options));
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  var mergeUrl = Request.isUrl(options.url) ? options.url : options.baseUrl + options.url;
                  if (JSON.stringify(options.params) !== '{}') {
                    var query = Request.addQueryString(options.params);
                    mergeUrl += mergeUrl.indexOf('?') === -1 ? "?".concat(query) : "&".concat(query);
                  }
                  options.url = mergeUrl;
                  options.success = function (res) {
                    resolve(_this2.requestAfter(res.data));
                  };
                  options.fail = function (err) {
                    reject(_this2.requestAfter(err));
                  };
                  uni.request(options);
                }));
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function request() {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "get",
    value: function get(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.request(_objectSpread({
        url: url,
        method: 'GET'
      }, options));
    }
  }, {
    key: "post",
    value: function post(url, data) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request(_objectSpread({
        url: url,
        data: data,
        method: 'POST'
      }, options));
    }
  }], [{
    key: "isUrl",
    value: function isUrl(url) {
      return /(http|https):\/\/([\w.]+\/?)\S*/.test(url);
    }
  }, {
    key: "addQueryString",
    value: function addQueryString(params) {
      var paramsData = '';
      Object.keys(params).forEach(function (key) {
        paramsData += key + '=' + encodeURIComponent(params[key]) + '&';
      });
      return paramsData.substring(0, paramsData.length - 1);
    }

    /* 请求前 */
  }, {
    key: "requestBefore",
    value: function requestBefore(config) {
      return config;
    }

    /* 请求后 */
  }, {
    key: "requestAfter",
    value: function requestAfter(response) {
      return response;
    }
  }]);
  return Request;
}();
exports.default = Request;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 395:
/*!*************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/poster/QS-SharePoster/app.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
var log = console.log; // 如果在项目的APP.vue文件中的onlaunch中设置 console.log = ()=> {} 则在此也不会有打印信息
log = function log() {}; // 打开注释则该插件不会打印任何信息
var _app = {
  lineFeedTags: ['<br />', '<br/>', '\r\n', '\n\t', '\r', '\n'],
  //换行符识别列表
  tagetLineFeedTag: "\u2764",
  //将lineFeedTags列表中的字符串替换为该字符, 代表换行符, 只要找一个特殊符号就行，必须是单字符单字符单字符!
  //交互控制
  log: function log(t) {
    // log(t);
  },
  // 打印控制,
  showLoading: function showLoading(msg, ifmask) {
    uni.showLoading({
      title: msg,
      mask: ifmask || false
    });
  },
  hideLoading: function hideLoading() {
    uni.hideLoading();
  },
  showToast: function showToast(msg, icon) {
    uni.showToast({
      title: msg,
      icon: icon || 'none'
    });
  },
  getPosterUrl: function getPosterUrl(objs) {
    // 后端获取背景图的url路径方法
    var backgroundImage = objs.backgroundImage,
      type = objs.type,
      formData = objs.formData;
    return new Promise(function (rs, rj) {
      var image;
      if (backgroundImage) {
        image = backgroundImage;
      } else {
        switch (type) {
          //根据type获取背景图, 一般要改成request获取
          case 1:
            image = '';
            break;
          default:
            image = '';
            break;
        }
      }
      if (image) {
        rs(image); // resolve图片的路径
      } else {
        rj('背景图片路径不存在');
      }
    });
  },
  //下面一般不用动他
  shareTypeListSheetArray: {
    array: [0, 1, 2, 3, 4, 5]
  },
  // 分享类型 0-图文链接 1-纯文字 2-纯图片 3-音乐 4-视频 5-小程序
  isArray: function isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  },
  isObject: function isObject(arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
  },
  isPromise: function isPromise(obj) {
    return !!obj && (_typeof(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isUndefined: function isUndefined(arg) {
    return arg === undefined;
  },
  isUndef: function isUndef(arg) {
    return arg === undefined;
  },
  isNotNull_string: function isNotNull_string(arg) {
    return arg !== null && arg !== undefined && arg !== '';
  },
  isFn: function isFn(fn) {
    return fn && typeof fn === 'function';
  },
  getStorage: function getStorage(key, scb, fcb) {
    uni.getStorage({
      key: key,
      success: function success(res) {
        if (res.data && res.data != "") {
          if (scb) scb(res.data);
        } else {
          if (fcb) fcb();
        }
      },
      fail: function fail() {
        if (fcb) fcb();
      }
    });
  },
  setStorage: function setStorage(key, data) {
    log('设置缓存');
    log('key：' + key);
    log('data：' + JSON.stringify(data));
    uni.setStorage({
      key: key,
      data: data
    });
  },
  setStorageSync: function setStorageSync(key, data) {
    uni.setStorageSync(key, data);
  },
  getStorageSync: function getStorageSync(key) {
    return uni.getStorageSync(key);
  },
  clearStorageSync: function clearStorageSync() {
    uni.clearStorageSync();
  },
  removeStorageSync: function removeStorageSync(key) {
    uni.removeStorageSync(key);
  },
  getImageInfo: function getImageInfo(url, cb, fcb) {
    url = checkMPUrl(url);
    uni.getImageInfo({
      src: url,
      success: function success(res) {
        if (cb && typeof cb == 'function') cb(res);
      },
      fail: function fail(err) {
        if (fcb && typeof fcb == 'function') fcb(err);
      }
    });
  },
  downloadFile: function downloadFile(url, cb) {
    url = checkMPUrl(url);
    uni.downloadFile({
      url: url,
      success: function success(res) {
        if (cb && typeof cb == 'function') cb(res);
      }
    });
  },
  downloadFile_PromiseFc: function downloadFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      if (url.substring(0, 4) !== 'http') {
        rs(url);
      } else {
        url = checkMPUrl(url);
        log('url:' + url);
        uni.downloadFile({
          url: url,
          success: function success(res) {
            if (res && res.tempFilePath) rs(res.tempFilePath);else rj('not find tempFilePath');
          },
          fail: function fail(err) {
            rj(err);
          }
        });
      }
    });
  },
  saveFile: function saveFile(url) {
    uni.saveFile({
      tempFilePath: url,
      success: function success(res) {
        log('保存成功:' + JSON.stringify(res));
      }
    });
  },
  downLoadAndSaveFile_PromiseFc: function downLoadAndSaveFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      log('准备下载并保存图片:' + url);
      if (url.substring(0, 4) === 'http') {
        url = checkMPUrl(url);
        uni.downloadFile({
          url: url,
          success: function success(d_res) {
            log('下载背景图成功：' + JSON.stringify(d_res));
            if (d_res && d_res.tempFilePath) {
              uni.saveFile({
                tempFilePath: d_res.tempFilePath,
                success: function success(s_res) {
                  log('保存背景图成功:' + JSON.stringify(s_res));
                  if (s_res && s_res.savedFilePath) rs(s_res.savedFilePath);else rs(d_res.tempFilePath);
                },
                fail: function fail(err) {
                  rs(d_res.tempFilePath);
                }
              });
            } else {
              rj('not find tempFilePath');
            }
          },
          fail: function fail(err) {
            rj(err);
          }
        });
      } else {
        rs(url);
      }
    });
  },
  checkFile_PromiseFc: function checkFile_PromiseFc(url) {
    return new Promise(function (rs, rj) {
      uni.getSavedFileList({
        success: function success(res) {
          var d = res.fileList;
          var index = d.findIndex(function (item) {
            return item.filePath === url;
          });
          rs(index);
        },
        fail: function fail(err) {
          rj(err);
        }
      });
    });
  },
  removeSavedFile: function removeSavedFile(path) {
    uni.getSavedFileList({
      success: function success(res) {
        var d = res.fileList;
        var index = d.findIndex(function (item) {
          return item.filePath === path;
        });
        if (index >= 0) uni.removeSavedFile({
          filePath: path
        });
      }
    });
  },
  fileNameInPath: function fileNameInPath(path) {
    var s = path.split("/");
    return s[s.length - 1];
  },
  getImageInfo_PromiseFc: function getImageInfo_PromiseFc(imgPath) {
    return new Promise(function (rs, rj) {
      log('准备获取图片信息:' + imgPath);
      imgPath = checkMPUrl(imgPath);
      uni.getImageInfo({
        src: imgPath,
        success: function success(res) {
          log('获取图片信息成功:' + JSON.stringify(res));
          rs(res);
        },
        fail: function fail(err) {
          log('获取图片信息失败:' + JSON.stringify(err));
          rj(err);
        }
      });
    });
  },
  previewImage: function previewImage(urls) {
    if (typeof urls == 'string') urls = [urls];
    uni.previewImage({
      urls: urls
    });
  },
  actionSheet: function actionSheet(obj, cb) {
    var sheetArray = [];
    for (var i = 0; i < obj.array.length; i++) {
      switch (obj.array[i]) {
        case 'sinaweibo':
          sheetArray[i] = '新浪微博';
          break;
        case 'qq':
          sheetArray[i] = 'QQ';
          break;
        case 'weixin':
          sheetArray[i] = '微信';
          break;
        case 'WXSceneSession':
          sheetArray[i] = '微信好友';
          break;
        case 'WXSenceTimeline':
          sheetArray[i] = '微信朋友圈';
          break;
        case 'WXSceneFavorite':
          sheetArray[i] = '微信收藏';
          break;
        case 0:
          sheetArray[i] = '图文链接';
          break;
        case 1:
          sheetArray[i] = '纯文字';
          break;
        case 2:
          sheetArray[i] = '纯图片';
          break;
        case 3:
          sheetArray[i] = '音乐';
          break;
        case 4:
          sheetArray[i] = '视频';
          break;
        case 5:
          sheetArray[i] = '小程序';
          break;
        default:
          break;
      }
    }
    this.showActionSheet(sheetArray, cb);
  },
  showActionSheet: function showActionSheet(sheetArray, cb) {
    uni.showActionSheet({
      itemList: sheetArray,
      success: function success(e) {
        if (cb && typeof cb == 'function') cb(e.tapIndex);
      }
    });
  },
  getProvider: function getProvider(type, cb, sheet) {
    var _this = this;
    uni.getProvider({
      service: type,
      success: function success(res) {
        if (sheet) {
          var obj = {};
          obj.array = res.provider;
          _this.actionSheet(obj, function (index) {
            if (cb && typeof cb == "function") cb(res.provider[index]);
          });
        } else {
          if (type == 'payment') {
            var providers = res.provider;
            var payTypeArray = [];
            for (var i = 0; i < providers.length; i++) {
              if (providers[i] == 'wxpay') {
                payTypeArray[i] = {
                  name: '微信支付',
                  value: providers[i],
                  img: '/static/image/wei.png'
                };
              } else if (providers[i] == 'alipay') {
                payTypeArray[i] = {
                  name: "支付宝支付",
                  value: providers[i],
                  img: '/static/image/ali.png'
                };
              }
            }
            if (cb && typeof cb == "function") cb(payTypeArray);
          } else {
            if (cb && typeof cb == "function") cb(res);
          }
        }
      }
    });
  }
};
function checkMPUrl(url) {
  if (url.substring(0, 4) === 'http' && url.substring(0, 5) !== 'https' && url.substring(0, 12) !== 'http://store' && url.substring(0, 10) !== 'http://tmp' && url.substring(0, 10) !== 'http://usr') {
    url = 'https' + url.substring(4, url.length);
  }
  return url;
}
module.exports = _app;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 396:
/*!************************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/poster/QS-SharePoster/QS-SharePoster.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 26));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 28));
var _app2 = _interopRequireDefault(__webpack_require__(/*! ./app.js */ 395));
var _QRCodeAlg = _interopRequireDefault(__webpack_require__(/*! ./QRCodeAlg.js */ 397));
var _imageTools = __webpack_require__(/*! ./image-tools.js */ 398);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var ShreUserPosterBackgroundKey = 'ShrePosterBackground_'; // 背景图片缓存名称前缀
var idKey = 'QSSHAREPOSTER_IDKEY'; //drawArray自动生成的idkey
var nbgScale = 1;
// export default 
function getSharePoster(obj) {
  var type = obj.type,
    formData = obj.formData,
    background = obj.background,
    posterCanvasId = obj.posterCanvasId,
    backgroundImage = obj.backgroundImage,
    reserve = obj.reserve,
    textArray = obj.textArray,
    drawArray = obj.drawArray,
    qrCodeArray = obj.qrCodeArray,
    imagesArray = obj.imagesArray,
    setCanvasWH = obj.setCanvasWH,
    setCanvasToTempFilePath = obj.setCanvasToTempFilePath,
    canvas2image = obj.canvas2image,
    setDraw = obj.setDraw,
    bgScale = obj.bgScale,
    Context = obj.Context,
    _this = obj._this,
    delayTimeScale = obj.delayTimeScale,
    drawDelayTime = obj.drawDelayTime,
    draw = obj.draw;
  return new Promise( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(rs, rj) {
      var bgObj, params, i, addDrawArray, _i, drawArrayItem, newData, addDraw, drawArray_copy, _loop, _i2, _ret, poster;
      return _regenerator.default.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (!Context) {
                _app2.default.log('没有画布对象,创建画布对象');
                Context = uni.createCanvasContext(posterCanvasId, _this || null);
              }
              if (!(background && background.width && background.height)) {
                _context2.next = 6;
                break;
              }
              bgObj = background;
              _context2.next = 9;
              break;
            case 6:
              _context2.next = 8;
              return getShreUserPosterBackground({
                backgroundImage: backgroundImage,
                type: type,
                formData: formData
              });
            case 8:
              bgObj = _context2.sent;
            case 9:
              bgScale = bgScale || nbgScale;
              bgObj.width = bgObj.width * bgScale;
              bgObj.height = bgObj.height * bgScale;
              _app2.default.log('获取背景图信息对象成功:' + JSON.stringify(bgObj));
              params = {
                bgObj: bgObj,
                type: type,
                bgScale: bgScale,
                getBgObj: function getBgObj() {
                  return params.bgObj;
                },
                setBgObj: function setBgObj(newBgObj) {
                  var n = _objectSpread(_objectSpread({}, params.bgObj), newBgObj);
                  params.bgObj = n;
                  bgObj = n;
                }
              };
              if (!imagesArray) {
                _context2.next = 20;
                break;
              }
              if (typeof imagesArray == 'function') imagesArray = imagesArray(params);
              _app2.default.log('准备设置图片');
              _context2.next = 19;
              return setImage(imagesArray);
            case 19:
              imagesArray = _context2.sent;
            case 20:
              if (textArray) {
                if (typeof textArray == 'function') textArray = textArray(params);
                textArray = setText(Context, textArray);
              }
              if (!qrCodeArray) {
                _context2.next = 33;
                break;
              }
              if (typeof qrCodeArray == 'function') qrCodeArray = qrCodeArray(params);
              i = 0;
            case 24:
              if (!(i < qrCodeArray.length)) {
                _context2.next = 33;
                break;
              }
              _app2.default.log(i);
              if (!qrCodeArray[i].image) {
                _context2.next = 30;
                break;
              }
              _context2.next = 29;
              return _app2.default.downloadFile_PromiseFc(qrCodeArray[i].image);
            case 29:
              qrCodeArray[i].image = _context2.sent;
            case 30:
              i++;
              _context2.next = 24;
              break;
            case 33:
              if (!drawArray) {
                _context2.next = 91;
                break;
              }
              if (typeof drawArray == 'function') {
                drawArray = drawArray(params);
              }
              if (!_app2.default.isPromise(drawArray)) {
                _context2.next = 39;
                break;
              }
              _context2.next = 38;
              return drawArray;
            case 38:
              drawArray = _context2.sent;
            case 39:
              if (!(_app2.default.isArray(drawArray) && drawArray.length > 0)) {
                _context2.next = 91;
                break;
              }
              // let hasAllInfoCallback = false;
              addDrawArray = [];
              _i = 0;
            case 42:
              if (!(_i < drawArray.length)) {
                _context2.next = 74;
                break;
              }
              drawArrayItem = drawArray[_i]; // if (_app.isFn(drawArrayItem.allInfoCallback) && !hasAllInfoCallback)
              // hasAllInfoCallback = true;
              drawArrayItem[idKey] = _i;
              newData = void 0;
              addDraw = false;
              _context2.t0 = drawArrayItem.type;
              _context2.next = _context2.t0 === 'image' ? 50 : _context2.t0 === 'text' ? 54 : _context2.t0 === 'qrcode' ? 56 : _context2.t0 === 'custom' ? 62 : _context2.t0 === 'fillrect' ? 63 : _context2.t0 === 'strokeRect' ? 64 : _context2.t0 === 'roundStrokeRect' ? 65 : _context2.t0 === 'roundFillRect' ? 66 : 67;
              break;
            case 50:
              _context2.next = 52;
              return setImage(drawArrayItem);
            case 52:
              newData = _context2.sent;
              return _context2.abrupt("break", 69);
            case 54:
              newData = setText(Context, drawArrayItem, params.bgObj);
              // if (_app.isArray(setTextResult)) {
              // 	addDraw = true;
              // 	addDrawArray.push({
              // 		index: i,
              // 		items: setTextResult
              // 	});
              // } else {
              // 	newData = setTextResult;
              // }
              return _context2.abrupt("break", 69);
            case 56:
              if (!drawArrayItem.image) {
                _context2.next = 61;
                break;
              }
              _context2.next = 59;
              return _app2.default.downloadFile_PromiseFc(drawArrayItem.image);
            case 59:
              _context2.t1 = _context2.sent;
              newData = {
                image: _context2.t1
              };
            case 61:
              return _context2.abrupt("break", 69);
            case 62:
              return _context2.abrupt("break", 69);
            case 63:
              return _context2.abrupt("break", 69);
            case 64:
              return _context2.abrupt("break", 69);
            case 65:
              return _context2.abrupt("break", 69);
            case 66:
              return _context2.abrupt("break", 69);
            case 67:
              _app2.default.log('未识别的类型');
              return _context2.abrupt("break", 69);
            case 69:
              if (!addDraw && newData && _app2.default.isObject(newData)) {
                drawArray[_i] = _objectSpread(_objectSpread({}, drawArrayItem), newData);
              }
              ;
            case 71:
              _i++;
              _context2.next = 42;
              break;
            case 74:
              // if (addDrawArray.length) {
              // 	for (let i = 0; i < addDrawArray.length; i++) {
              // 		const item = addDrawArray[i];
              // 		const index = drawArray.findIndex(ite => ite[idKey] == item.index);
              // 		if (-1 != index) {
              // 			item.items.forEach((ite, index) => {
              // 				ite[idKey] = drawArray.length + index;
              // 				ite.allInfoCallback = null;
              // 			});
              // 			drawArray.splice(index, 1, ...item.items)
              // 		}
              // 	}
              // }
              _app2.default.log('AllInfoCallback之前', JSON.stringify(drawArray));

              // if (hasAllInfoCallback) {
              _app2.default.log('----------------hasAllInfoCallback----------------');
              drawArray_copy = (0, _toConsumableArray2.default)(drawArray);
              drawArray_copy.sort(function (a, b) {
                var a_serialNum = !_app2.default.isUndef(a.serialNum) && !_app2.default.isNull(a.serialNum) ? Number(a.serialNum) : Number.NEGATIVE_INFINITY;
                var b_serialNum = !_app2.default.isUndef(b.serialNum) && !_app2.default.isNull(b.serialNum) ? Number(b.serialNum) : Number.NEGATIVE_INFINITY;
                return a_serialNum - b_serialNum;
              });
              _app2.default.log('开始for循环');
              _loop = /*#__PURE__*/_regenerator.default.mark(function _loop(_i2) {
                var item, item_idKey, ind, _newData, textLength, setLineFeedResult, _drawArray;
                return _regenerator.default.wrap(function _loop$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        item = _objectSpread({}, drawArray_copy[_i2]);
                        item_idKey = item[idKey];
                        _app2.default.log('item_idKey', item_idKey);
                        ind = drawArray.findIndex(function (it) {
                          return it[idKey] == item_idKey;
                        });
                        _app2.default.log('ind', ind);
                        if (!(-1 == ind)) {
                          _context.next = 7;
                          break;
                        }
                        return _context.abrupt("return", "break");
                      case 7:
                        if (!_app2.default.isFn(item.allInfoCallback)) {
                          _context.next = 16;
                          break;
                        }
                        _newData = item.allInfoCallback({
                          drawArray: drawArray
                        });
                        _app2.default.log('newData', JSON.stringify(_newData));
                        if (!_app2.default.isPromise(_newData)) {
                          _context.next = 14;
                          break;
                        }
                        _context.next = 13;
                        return _newData;
                      case 13:
                        _newData = _context.sent;
                      case 14:
                        if (drawArray[ind].type === 'text' && _newData.size) {
                          textLength = countTextLength(Context, {
                            text: _newData.text || drawArray[ind].text,
                            size: _newData.size
                          });
                          _newData.textLength = textLength;
                        }
                        drawArray[ind] = _objectSpread(_objectSpread({}, item), _newData);
                      case 16:
                        _app2.default.log('drawArray[ind]', JSON.stringify(drawArray[ind]));
                        if (drawArray[ind].type === 'text') {
                          setLineFeedResult = setLineFeed(Context, drawArray[ind], params.bgObj);
                          if (_app2.default.isArray(setLineFeedResult)) {
                            setLineFeedResult.forEach(function (ite, index) {
                              ite[idKey] = drawArray.length + index;
                              ite.allInfoCallback = null;
                            });
                            (_drawArray = drawArray).splice.apply(_drawArray, [ind, 1].concat((0, _toConsumableArray2.default)(setLineFeedResult)));
                          } else {
                            drawArray.splice(ind, 1, setLineFeedResult);
                          }
                        }
                      case 18:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _loop);
              });
              _i2 = 0;
            case 81:
              if (!(_i2 < drawArray_copy.length)) {
                _context2.next = 89;
                break;
              }
              return _context2.delegateYield(_loop(_i2), "t2", 83);
            case 83:
              _ret = _context2.t2;
              if (!(_ret === "break")) {
                _context2.next = 86;
                break;
              }
              return _context2.abrupt("break", 89);
            case 86:
              _i2++;
              _context2.next = 81;
              break;
            case 89:
              _app2.default.log('for循环结束');
              _app2.default.log('allInfocallback结束', JSON.stringify(drawArray));
              // }
            case 91:
              drawArray.sort(function (a, b) {
                var a_zIndex = !_app2.default.isUndef(a.zIndex) && !_app2.default.isNull(a.zIndex) ? Number(a.zIndex) : Number.NEGATIVE_INFINITY;
                var b_zIndex = !_app2.default.isUndef(b.zIndex) && !_app2.default.isNull(b.zIndex) ? Number(b.zIndex) : Number.NEGATIVE_INFINITY;
                return a_zIndex - b_zIndex;
              });
              _app2.default.log('params:' + JSON.stringify(params));
              if (!(setCanvasWH && typeof setCanvasWH == 'function')) {
                _context2.next = 96;
                break;
              }
              _context2.next = 96;
              return new Promise(function (resolve, reject) {
                setCanvasWH(params);
                setTimeout(function () {
                  resolve();
                }, 50);
              });
            case 96:
              _context2.next = 98;
              return drawShareImage({
                Context: Context,
                type: type,
                posterCanvasId: posterCanvasId,
                reserve: reserve,
                drawArray: drawArray,
                textArray: textArray,
                imagesArray: imagesArray,
                bgObj: bgObj,
                qrCodeArray: qrCodeArray,
                setCanvasToTempFilePath: setCanvasToTempFilePath,
                setDraw: setDraw,
                bgScale: bgScale,
                _this: _this,
                delayTimeScale: delayTimeScale,
                drawDelayTime: drawDelayTime,
                canvas2image: canvas2image,
                draw: draw
              });
            case 98:
              poster = _context2.sent;
              rs({
                bgObj: bgObj,
                poster: poster,
                type: type
              });
              _context2.next = 106;
              break;
            case 102:
              _context2.prev = 102;
              _context2.t3 = _context2["catch"](0);
              //TODO handle the exception
              _app2.default.hideLoading();
              rj(_context2.t3);
            case 106:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee, null, [[0, 102]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
function drawShareImage(obj) {
  //绘制海报方法
  var Context = obj.Context,
    type = obj.type,
    posterCanvasId = obj.posterCanvasId,
    reserve = obj.reserve,
    bgObj = obj.bgObj,
    drawArray = obj.drawArray,
    textArray = obj.textArray,
    qrCodeArray = obj.qrCodeArray,
    imagesArray = obj.imagesArray,
    setCanvasToTempFilePath = obj.setCanvasToTempFilePath,
    setDraw = obj.setDraw,
    bgScale = obj.bgScale,
    _this = obj._this,
    delayTimeScale = obj.delayTimeScale,
    drawDelayTime = obj.drawDelayTime,
    canvas2image = obj.canvas2image,
    draw = obj.draw;
  var params = {
    Context: Context,
    bgObj: bgObj,
    type: type,
    bgScale: bgScale
  };
  delayTimeScale = delayTimeScale !== undefined ? delayTimeScale : 15;
  drawDelayTime = drawDelayTime !== undefined ? drawDelayTime : 100;
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(rs, rj) {
      var i, _i3, drawArrayItem;
      return _regenerator.default.wrap(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _app2.default.log('背景对象:' + JSON.stringify(bgObj));
              if (bgObj && bgObj.path) {
                _app2.default.log('背景有图片路径');
                Context.drawImage(bgObj.path, 0, 0, bgObj.width, bgObj.height);
              } else {
                _app2.default.log('背景没有图片路径');
                if (bgObj.backgroundColor) {
                  _app2.default.log('背景有背景颜色:' + bgObj.backgroundColor);
                  Context.setFillStyle(bgObj.backgroundColor);
                  Context.fillRect(0, 0, bgObj.width, bgObj.height);
                } else {
                  _app2.default.log('背景没有背景颜色');
                }
              }
              if (imagesArray && imagesArray.length > 0) drawImage(Context, imagesArray);
              if (setDraw && typeof setDraw == 'function') setDraw(params);
              if (textArray && textArray.length > 0) drawText(Context, textArray, bgObj);
              if (qrCodeArray && qrCodeArray.length > 0) {
                for (i = 0; i < qrCodeArray.length; i++) {
                  drawQrCode(Context, qrCodeArray[i]);
                }
              }
              if (!(drawArray && drawArray.length > 0)) {
                _context3.next = 45;
                break;
              }
              _i3 = 0;
            case 9:
              if (!(_i3 < drawArray.length)) {
                _context3.next = 45;
                break;
              }
              drawArrayItem = drawArray[_i3];
              _app2.default.log('绘制可控层级序列, drawArrayItem:' + JSON.stringify(drawArrayItem));
              _context3.t0 = drawArrayItem.type;
              _context3.next = _context3.t0 === 'image' ? 15 : _context3.t0 === 'text' ? 18 : _context3.t0 === 'qrcode' ? 21 : _context3.t0 === 'custom' ? 24 : _context3.t0 === 'fillRect' ? 28 : _context3.t0 === 'strokeRect' ? 31 : _context3.t0 === 'roundStrokeRect' ? 34 : _context3.t0 === 'roundFillRect' ? 37 : 40;
              break;
            case 15:
              _app2.default.log('绘制可控层级序列, 绘制图片');
              drawImage(Context, drawArrayItem);
              return _context3.abrupt("break", 42);
            case 18:
              _app2.default.log('绘制可控层级序列, 绘制文本');
              drawText(Context, drawArrayItem, bgObj);
              return _context3.abrupt("break", 42);
            case 21:
              _app2.default.log('绘制可控层级序列, 绘制二维码');
              drawQrCode(Context, drawArrayItem);
              return _context3.abrupt("break", 42);
            case 24:
              _app2.default.log('绘制可控层级序列, 绘制自定义内容');
              if (drawArrayItem.setDraw && typeof drawArrayItem.setDraw === 'function') drawArrayItem.setDraw(Context);
              return _context3.abrupt("break", 42);
            case 28:
              _app2.default.log('绘制可控层级序列, 绘制填充直角矩形');
              drawFillRect(Context, drawArrayItem);
              return _context3.abrupt("break", 42);
            case 31:
              _app2.default.log('绘制可控层级序列, 绘制线条直角矩形');
              drawStrokeRect(Context, drawArrayItem);
              return _context3.abrupt("break", 42);
            case 34:
              _app2.default.log('绘制可控层级序列, 绘制线条圆角矩形');
              drawRoundStrokeRect(Context, drawArrayItem);
              return _context3.abrupt("break", 42);
            case 37:
              _app2.default.log('绘制可控层级序列, 绘制填充圆角矩形');
              drawRoundFillRect(Context, drawArrayItem);
              return _context3.abrupt("break", 42);
            case 40:
              _app2.default.log('未识别的类型');
              return _context3.abrupt("break", 42);
            case 42:
              _i3++;
              _context3.next = 9;
              break;
            case 45:
              setTimeout(function () {
                _app2.default.log('准备执行draw方法');
                _app2.default.log('Context:' + Context);
                if (draw === false) {
                  _app2.default.log('draw属性为false，请自行调用canvas实例的draw方法');
                  rs();
                  return;
                }
                var fn = function fn() {
                  var setObj = setCanvasToTempFilePath || {};
                  if (setObj && typeof setObj == 'function') setObj = setCanvasToTempFilePath(bgObj, type);
                  var canvasToTempFilePathFn;
                  var dpr = uni.getSystemInfoSync().pixelRatio;
                  var data = _objectSpread(_objectSpread({
                    // 注释的设置使用uni自己的默认值更为稳定
                    // x: 0,
                    // y: 0,
                    // width: Number(bgObj.width),
                    // height: Number(bgObj.height),
                    // destWidth: Number(bgObj.width) * dpr,
                    // destHeight: Number(bgObj.height) * dpr,
                    quality: .8,
                    fileType: 'jpg'
                  }, setObj), {}, {
                    canvasId: posterCanvasId
                  });
                  if (canvas2image === false) {
                    return rs({
                      setCanvasToTempFilePath: data
                    });
                  }
                  _app2.default.log('canvasToTempFilePath的data对象:' + JSON.stringify(data));
                  canvasToTempFilePathFn = function canvasToTempFilePathFn() {
                    var toTempFilePathObj = _objectSpread(_objectSpread({}, data), {}, {
                      success: function success(res) {
                        rs(_objectSpread(_objectSpread({}, res), {}, {
                          setCanvasToTempFilePath: data
                        }));
                      },
                      fail: function fail(err) {
                        _app2.default.hideLoading();
                        _app2.default.log('输出图片失败');
                        _app2.default.log('输出图片失败:' + JSON.stringify(err));
                        rj('输出图片失败:' + JSON.stringify(err));
                      }
                    });
                    uni.canvasToTempFilePath(toTempFilePathObj, _this || null);
                  };
                  var delayTime = 0;
                  if (qrCodeArray) {
                    qrCodeArray.forEach(function (item) {
                      if (item.text) {
                        delayTime += Number(item.text.length);
                      }
                    });
                  }
                  if (imagesArray) {
                    imagesArray.forEach(function () {
                      delayTime += delayTimeScale;
                    });
                  }
                  if (textArray) {
                    textArray.forEach(function () {
                      delayTime += delayTimeScale;
                    });
                  }
                  if (drawArray) {
                    drawArray.forEach(function (item) {
                      switch (item.type) {
                        case 'text':
                          if (item.text) {
                            delayTime += item.text.length;
                          }
                          break;
                        case 'qrcode':
                          if (item.text) {
                            delayTime += item.text.length * 2;
                          }
                          break;
                        default:
                          delayTime += delayTimeScale;
                          break;
                      }
                    });
                  }
                  _app2.default.log('延时系数:' + delayTimeScale);
                  _app2.default.log('总计延时:' + delayTime);
                  setTimeout(canvasToTempFilePathFn, delayTime);
                };
                Context.draw(typeof reserve == 'boolean' ? reserve : false, fn);
              }, drawDelayTime);
              _context3.next = 52;
              break;
            case 48:
              _context3.prev = 48;
              _context3.t1 = _context3["catch"](0);
              //TODO handle the exception
              _app2.default.hideLoading();
              rj(_context3.t1);
            case 52:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee2, null, [[0, 48]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
}

// export
function drawFillRect(Context) {
  var drawArrayItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  //填充矩形
  _app2.default.log('进入绘制填充直角矩形方法, drawArrayItem:' + JSON.stringify(drawArrayItem));
  Context.setFillStyle(drawArrayItem.backgroundColor || 'black');
  Context.setGlobalAlpha(drawArrayItem.alpha || 1);
  Context.fillRect(drawArrayItem.dx || 0, drawArrayItem.dy || 0, drawArrayItem.width || 0, drawArrayItem.height || 0);
  Context.setGlobalAlpha(1);
}

// export
function drawStrokeRect(Context) {
  var drawArrayItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  //线条矩形
  Context.setStrokeStyle(drawArrayItem.color || 'black');
  Context.setLineWidth(drawArrayItem.lineWidth || 1);
  Context.strokeRect(drawArrayItem.dx, drawArrayItem.dy, drawArrayItem.width, drawArrayItem.height);
}

// export
function drawRoundStrokeRect(Context) {
  var drawArrayItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var dx = drawArrayItem.dx,
    dy = drawArrayItem.dy,
    width = drawArrayItem.width,
    height = drawArrayItem.height,
    r = drawArrayItem.r,
    lineWidth = drawArrayItem.lineWidth,
    color = drawArrayItem.color;
  r = r || width * .1;
  if (width < 2 * r) {
    r = width / 2;
  }
  if (width < 2 * r) {
    r = width / 2;
  }
  Context.beginPath();
  Context.arc(dx + r, dy + r, r, 1 * Math.PI, 1.5 * Math.PI);
  Context.lineTo(dx + width - r, dy);
  Context.arc(dx + width - r, dy + r, r, 1.5 * Math.PI, 0);
  Context.lineTo(dx + width, dy + height - r);
  Context.arc(dx + width - r, dy + height - r, r, 0, .5 * Math.PI);
  Context.lineTo(dx + r, dy + height);
  Context.arc(dx + r, dy + height - r, r, .5 * Math.PI, 1 * Math.PI);
  Context.lineTo(dx, dy + r);
  Context.closePath();
  Context.setLineWidth(lineWidth || 1);
  Context.setStrokeStyle(color || 'black');
  Context.stroke();
}

// export
function drawRoundFillRect(Context) {
  var drawArrayItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var dx = drawArrayItem.dx,
    dy = drawArrayItem.dy,
    width = drawArrayItem.width,
    height = drawArrayItem.height,
    r = drawArrayItem.r,
    backgroundColor = drawArrayItem.backgroundColor;
  r = r || width * .1;
  if (width < 2 * r) {
    r = width / 2;
  }
  if (width < 2 * r) {
    r = width / 2;
  }
  Context.beginPath();
  Context.arc(dx + r, dy + r, r, 1 * Math.PI, 1.5 * Math.PI);
  Context.lineTo(dx + width - r, dy);
  Context.arc(dx + width - r, dy + r, r, 1.5 * Math.PI, 0);
  Context.lineTo(dx + width, dy + height - r);
  Context.arc(dx + width - r, dy + height - r, r, 0, .5 * Math.PI);
  Context.lineTo(dx + r, dy + height);
  Context.arc(dx + r, dy + height - r, r, .5 * Math.PI, 1 * Math.PI);
  Context.lineTo(dx, dy + r);
  Context.closePath();
  Context.setFillStyle(backgroundColor);
  Context.fill();
}

// export 
function setText(Context, texts, bgObj) {
  // 设置文本数据
  _app2.default.log('进入设置文字方法, texts:' + JSON.stringify(texts));
  if (texts && _app2.default.isArray(texts)) {
    _app2.default.log('texts是数组');
    if (texts.length > 0) {
      for (var i = 0; i < texts.length; i++) {
        _app2.default.log('字符串信息-初始化之前:' + JSON.stringify(texts[i]));
        texts[i] = setTextFn(Context, texts[i], bgObj);
      }
    }
  } else {
    _app2.default.log('texts是对象');
    texts = setTextFn(Context, texts, bgObj);
    _app2.default.log('返回texts:' + JSON.stringify(texts));
    return texts;
  }
}
function setTextFn(Context, textItem, bgObj) {
  _app2.default.log('进入设置文字方法, textItem:' + JSON.stringify(textItem));
  if (_app2.default.isNotNull_string(textItem.text)) {
    textItem.text = String(textItem.text);
    textItem.alpha = textItem.alpha !== undefined ? Number(textItem.alpha) : 1;
    textItem.color = textItem.color || 'black';
    textItem.size = textItem.size !== undefined ? Number(textItem.size) : 10;
    textItem.textAlign = textItem.textAlign || 'left';
    textItem.textBaseline = textItem.textBaseline || 'middle';
    textItem.dx = Number(textItem.dx) || 0;
    textItem.dy = Number(textItem.dy) || 0;
    textItem.size = Math.ceil(Number(textItem.size));
    _app2.default.log('字符串信息-初始化默认值后:' + JSON.stringify(textItem));
    var textLength = countTextLength(Context, {
      text: textItem.text,
      size: textItem.size
    });
    _app2.default.log('字符串信息-初始化时的文本长度:' + textLength);
    var infoCallBackObj = {};
    if (textItem.infoCallBack && typeof textItem.infoCallBack === 'function') {
      infoCallBackObj = textItem.infoCallBack(textLength);
    }
    if (infoCallBackObj.size) textLength = countTextLength(Context, {
      text: textItem.text,
      size: textItem.size
    });
    textItem = _objectSpread(_objectSpread(_objectSpread({}, textItem), infoCallBackObj), {}, {
      textLength: textLength
    });
    _app2.default.log('字符串信息-infoCallBack后:' + JSON.stringify(textItem));
  }
  return textItem;
}
function setLineFeed(Context, textItem, bgObj) {
  if (textItem.text && textItem.lineFeed) {
    _app2.default.log('设置换行');
    var lineNum = -1,
      maxWidth = bgObj.width,
      lineHeight = textItem.size,
      dx = textItem.dx;
    if (_app2.default.isObject(textItem.lineFeed)) {
      var lineFeed = textItem.lineFeed;
      lineNum = lineFeed.lineNum !== undefined && typeof lineFeed.lineNum === 'number' && lineFeed.lineNum >= 0 ? lineFeed.lineNum : lineNum;
      maxWidth = lineFeed.maxWidth !== undefined && typeof lineFeed.maxWidth === 'number' ? lineFeed.maxWidth : maxWidth;
      lineHeight = lineFeed.lineHeight !== undefined && typeof lineFeed.lineHeight === 'number' ? lineFeed.lineHeight : lineHeight;
      dx = lineFeed.dx !== undefined && typeof lineFeed.dx === 'number' ? lineFeed.dx : dx;
    }
    _app2.default.lineFeedTags.forEach(function (i) {
      textItem.text = textItem.text.split(i).join(_app2.default.tagetLineFeedTag);
    });
    var chr = textItem.text.split("");
    var temp = "";
    var row = [];
    //循环出几行文字组成数组
    for (var a = 0, len = chr.length; a < len; a++) {
      if (chr[a] === _app2.default.tagetLineFeedTag) {
        row.push(temp);
        temp = chr[++a];
        continue;
      }
      if (countTextLength(Context, {
        text: temp,
        size: textItem.size
      }) <= maxWidth && countTextLength(Context, {
        text: temp + chr[a],
        size: textItem.size
      }) <= maxWidth) {
        temp += chr[a];
        if (a == chr.length - 1) {
          row.push(temp);
        }
      } else {
        row.push(temp);
        temp = chr[a];
        if (a == chr.length - 1) row.push(chr[a]);
      }
    }
    _app2.default.log('循环出的文本数组:' + JSON.stringify(row));
    //只显示几行 变量间距lineHeight  变量行数lineNum
    var allNum = lineNum >= 0 && lineNum < row.length ? lineNum : row.length;
    var newArr = [];
    for (var i = 0; i < allNum; i++) {
      var str = row[i];
      if (i == allNum - 1 && allNum < row.length && row.length > 1) {
        if (countTextLength(Context, {
          text: str,
          size: textItem.size
        }) > (maxWidth - textItem.size) * .9) {
          str = str.substring(0, str.length - 1) + '...';
        }
      }
      var obj = _objectSpread(_objectSpread({}, textItem), {}, {
        text: str,
        dx: i === 0 ? textItem.dx : dx >= 0 ? dx : textItem.dx,
        dy: textItem.dy + i * lineHeight,
        textLength: countTextLength(Context, {
          text: str,
          size: textItem.size
        })
      });
      _app2.default.log('重新组成的文本对象:' + JSON.stringify(obj));
      newArr.push(obj);
    }
    _app2.default.log('newArr: -----', JSON.stringify(newArr));
    var result = newArr.length > 1 ? newArr : newArr[0];
    return result;
  }
  return textItem;
}
function countTextLength(Context, obj) {
  _app2.default.log('计算文字长度, obj:' + JSON.stringify(obj));
  var text = obj.text,
    size = obj.size;
  Context.setFontSize(size);
  var textLength;
  try {
    textLength = Context.measureText(text); // 官方文档说 App端自定义组件编译模式暂时不可用measureText方法
  } catch (e) {
    //TODO handle the exception
    textLength = {};
  }
  _app2.default.log('measureText计算文字长度, textLength:' + JSON.stringify(textLength));
  textLength = textLength && textLength.width ? textLength.width : 0;
  if (!textLength) {
    var l = 0;
    for (var j = 0; j < text.length; j++) {
      var t = text.substr(j, 1);
      var countL = countStrLength(t);
      _app2.default.log('计算文字宽度系数:' + countL);
      l += countL;
    }
    _app2.default.log('文字宽度总系数:' + l);
    textLength = l * size;
  }
  return textLength;
}

//计算字符长度系数
function countStrLength(t) {
  var l;
  if (/a/.test(t)) {
    l = 0.552734375;
  } else if (/b/.test(t)) {
    l = 0.638671875;
  } else if (/c/.test(t)) {
    l = 0.50146484375;
  } else if (/d/.test(t)) {
    l = 0.6396484375;
  } else if (/e/.test(t)) {
    l = 0.5673828125;
  } else if (/f/.test(t)) {
    l = 0.3466796875;
  } else if (/g/.test(t)) {
    l = 0.6396484375;
  } else if (/h/.test(t)) {
    l = 0.61572265625;
  } else if (/i/.test(t)) {
    l = 0.26611328125;
  } else if (/j/.test(t)) {
    l = 0.26708984375;
  } else if (/k/.test(t)) {
    l = 0.54443359375;
  } else if (/l/.test(t)) {
    l = 0.26611328125;
  } else if (/m/.test(t)) {
    l = 0.93701171875;
  } else if (/n/.test(t)) {
    l = 0.6162109375;
  } else if (/o/.test(t)) {
    l = 0.6357421875;
  } else if (/p/.test(t)) {
    l = 0.638671875;
  } else if (/q/.test(t)) {
    l = 0.6396484375;
  } else if (/r/.test(t)) {
    l = 0.3818359375;
  } else if (/s/.test(t)) {
    l = 0.462890625;
  } else if (/t/.test(t)) {
    l = 0.37255859375;
  } else if (/u/.test(t)) {
    l = 0.6162109375;
  } else if (/v/.test(t)) {
    l = 0.52490234375;
  } else if (/w/.test(t)) {
    l = 0.78955078125;
  } else if (/x/.test(t)) {
    l = 0.5068359375;
  } else if (/y/.test(t)) {
    l = 0.529296875;
  } else if (/z/.test(t)) {
    l = 0.49169921875;
  } else if (/A/.test(t)) {
    l = 0.70361328125;
  } else if (/B/.test(t)) {
    l = 0.62744140625;
  } else if (/C/.test(t)) {
    l = 0.6689453125;
  } else if (/D/.test(t)) {
    l = 0.76171875;
  } else if (/E/.test(t)) {
    l = 0.5498046875;
  } else if (/F/.test(t)) {
    l = 0.53125;
  } else if (/G/.test(t)) {
    l = 0.74365234375;
  } else if (/H/.test(t)) {
    l = 0.7734375;
  } else if (/I/.test(t)) {
    l = 0.2939453125;
  } else if (/J/.test(t)) {
    l = 0.39599609375;
  } else if (/K/.test(t)) {
    l = 0.634765625;
  } else if (/L/.test(t)) {
    l = 0.51318359375;
  } else if (/M/.test(t)) {
    l = 0.97705078125;
  } else if (/N/.test(t)) {
    l = 0.81298828125;
  } else if (/O/.test(t)) {
    l = 0.81494140625;
  } else if (/P/.test(t)) {
    l = 0.61181640625;
  } else if (/Q/.test(t)) {
    l = 0.81494140625;
  } else if (/R/.test(t)) {
    l = 0.65283203125;
  } else if (/S/.test(t)) {
    l = 0.5771484375;
  } else if (/T/.test(t)) {
    l = 0.5732421875;
  } else if (/U/.test(t)) {
    l = 0.74658203125;
  } else if (/V/.test(t)) {
    l = 0.67626953125;
  } else if (/W/.test(t)) {
    l = 1.017578125;
  } else if (/X/.test(t)) {
    l = 0.64501953125;
  } else if (/Y/.test(t)) {
    l = 0.603515625;
  } else if (/Z/.test(t)) {
    l = 0.6201171875;
  } else if (/[0-9]/.test(t)) {
    l = 0.58642578125;
  } else if (/[\u4e00-\u9fa5]/.test(t)) {
    l = 1;
  } else if (/ /.test(t)) {
    l = 0.2958984375;
  } else if (/\`/.test(t)) {
    l = 0.294921875;
  } else if (/\~/.test(t)) {
    l = 0.74169921875;
  } else if (/\!/.test(t)) {
    l = 0.3125;
  } else if (/\@/.test(t)) {
    l = 1.03125;
  } else if (/\#/.test(t)) {
    l = 0.63818359375;
  } else if (/\$/.test(t)) {
    l = 0.58642578125;
  } else if (/\%/.test(t)) {
    l = 0.8896484375;
  } else if (/\^/.test(t)) {
    l = 0.74169921875;
  } else if (/\&/.test(t)) {
    l = 0.8701171875;
  } else if (/\*/.test(t)) {
    l = 0.455078125;
  } else if (/\(/.test(t)) {
    l = 0.333984375;
  } else if (/\)/.test(t)) {
    l = 0.333984375;
  } else if (/\_/.test(t)) {
    l = 0.4482421875;
  } else if (/\-/.test(t)) {
    l = 0.4326171875;
  } else if (/\+/.test(t)) {
    l = 0.74169921875;
  } else if (/\=/.test(t)) {
    l = 0.74169921875;
  } else if (/\|/.test(t)) {
    l = 0.26904296875;
  } else if (/\\/.test(t)) {
    l = 0.416015625;
  } else if (/\[/.test(t)) {
    l = 0.333984375;
  } else if (/\]/.test(t)) {
    l = 0.333984375;
  } else if (/\;/.test(t)) {
    l = 0.24072265625;
  } else if (/\'/.test(t)) {
    l = 0.25634765625;
  } else if (/\,/.test(t)) {
    l = 0.24072265625;
  } else if (/\./.test(t)) {
    l = 0.24072265625;
  } else if (/\//.test(t)) {
    l = 0.42724609375;
  } else if (/\{/.test(t)) {
    l = 0.333984375;
  } else if (/\}/.test(t)) {
    l = 0.333984375;
  } else if (/\:/.test(t)) {
    l = 0.24072265625;
  } else if (/\"/.test(t)) {
    l = 0.435546875;
  } else if (/\</.test(t)) {
    l = 0.74169921875;
  } else if (/\>/.test(t)) {
    l = 0.74169921875;
  } else if (/\?/.test(t)) {
    l = 0.48291015625;
  } else {
    l = 1;
  }
  return l;
}

// export 
function setImage(images) {
  // 设置图片数据
  _app2.default.log('进入设置图片数据方法');
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(resolve, reject) {
      var i;
      return _regenerator.default.wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              if (!(images && _app2.default.isArray(images))) {
                _context4.next = 14;
                break;
              }
              _app2.default.log('images是一个数组');
              i = 0;
            case 4:
              if (!(i < images.length)) {
                _context4.next = 12;
                break;
              }
              _app2.default.log('设置图片数据循环中:' + i);
              _context4.next = 8;
              return setImageFn(images[i]);
            case 8:
              images[i] = _context4.sent;
            case 9:
              i++;
              _context4.next = 4;
              break;
            case 12:
              _context4.next = 18;
              break;
            case 14:
              _app2.default.log('images是一个对象');
              _context4.next = 17;
              return setImageFn(images);
            case 17:
              images = _context4.sent;
            case 18:
              resolve(images);
              _context4.next = 25;
              break;
            case 21:
              _context4.prev = 21;
              _context4.t0 = _context4["catch"](0);
              _app2.default.hideLoading();
              //TODO handle the exception
              reject(_context4.t0);
            case 25:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3, null, [[0, 21]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
}
function base64ToPathFn(path) {
  var reg = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
  if (!reg.test(path)) {
    return Promise.resolve(path);
  }
  return (0, _imageTools.base64ToPath)(path);
}
function setImageFn(image) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(resolve, reject) {
      var imgUrl, oldImgUrl, hasinfoCallBack, imageInfo;
      return _regenerator.default.wrap(function _callee4$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              if (!image.url) {
                _context5.next = 22;
                break;
              }
              _context5.next = 4;
              return base64ToPathFn(image.url);
            case 4:
              image.url = _context5.sent;
              imgUrl = image.url;
              oldImgUrl = imgUrl;
              _context5.next = 9;
              return _app2.default.downloadFile_PromiseFc(imgUrl);
            case 9:
              imgUrl = _context5.sent;
              image.url = imgUrl;
              hasinfoCallBack = image.infoCallBack && typeof image.infoCallBack === 'function';
              imageInfo = {};
              _context5.next = 15;
              return _app2.default.getImageInfo_PromiseFc(oldImgUrl);
            case 15:
              imageInfo = _context5.sent;
              if (hasinfoCallBack) {
                image = _objectSpread(_objectSpread({}, image), image.infoCallBack(imageInfo));
              }
              image.dx = Number(image.dx) || 0;
              image.dy = Number(image.dy) || 0;
              image.dWidth = Number(image.dWidth || imageInfo.width);
              image.dHeight = Number(image.dHeight || imageInfo.height);
              image = _objectSpread(_objectSpread({}, image), {}, {
                imageInfo: imageInfo
              });
            case 22:
              resolve(image);
              _context5.next = 29;
              break;
            case 25:
              _context5.prev = 25;
              _context5.t0 = _context5["catch"](0);
              _app2.default.hideLoading();
              reject(_context5.t0);
              //TODO handle the exception
            case 29:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee4, null, [[0, 25]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
}

// export 
function drawText(Context, textArray, bgObj) {
  // 先遍历换行再绘制
  if (!_app2.default.isArray(textArray)) {
    _app2.default.log('遍历文本方法, 不是数组');
    textArray = [textArray];
  } else {
    _app2.default.log('遍历文本方法, 是数组');
  }
  _app2.default.log('遍历文本方法, textArray:' + JSON.stringify(textArray));
  var newArr = textArray;
  // if (textArray && textArray.length > 0) {
  // 	for (let j = 0; j < textArray.length; j++) {
  // 		const textItem = textArray[j];
  // 		if (textItem.text && textItem.lineFeed) {
  // 			let lineNum = -1,
  // 				maxWidth = bgObj.width,
  // 				lineHeight = textItem.size,
  // 				dx = textItem.dx;
  // 			if (_app.isObject(textItem.lineFeed)) {
  // 				const lineFeed = textItem.lineFeed;
  // 				lineNum = (lineFeed.lineNum !== undefined && typeof(lineFeed.lineNum) === 'number') && lineFeed
  // 					.lineNum >= 0 ?
  // 					lineFeed.lineNum : lineNum;
  // 				maxWidth = (lineFeed.maxWidth !== undefined && typeof(lineFeed.maxWidth) === 'number') ? lineFeed
  // 					.maxWidth :
  // 					maxWidth;
  // 				lineHeight = (lineFeed.lineHeight !== undefined && typeof(lineFeed.lineHeight) === 'number') ?
  // 					lineFeed.lineHeight :
  // 					lineHeight;
  // 				dx = (lineFeed.dx !== undefined && typeof(lineFeed.dx) === 'number') ? lineFeed.dx : dx;
  // 			}
  // 			const chr = (textItem.text).split("");
  // 			let temp = "";
  // 			const row = [];
  // 			//循环出几行文字组成数组
  // 			for (let a = 0, len = chr.length; a < len; a++) {
  // 				if (countTextLength(Context, {
  // 						text: temp,
  // 						size: textItem.size
  // 					}) <= maxWidth && countTextLength(Context, {
  // 						text: (temp + chr[a]),
  // 						size: textItem.size
  // 					}) <= maxWidth) {
  // 					temp += chr[a];
  // 					if (a == (chr.length - 1)) {
  // 						row.push(temp);
  // 					}
  // 				} else {
  // 					row.push(temp);
  // 					temp = chr[a];
  // 					if (a == chr.length - 1) row.push(chr[a]);
  // 				}
  // 			}
  // 			_app.log('循环出的文本数组:' + JSON.stringify(row));
  // 			//只显示几行 变量间距lineHeight  变量行数lineNum
  // 			let allNum = (lineNum >= 0 && lineNum < row.length) ? lineNum : row.length;

  // 			for (let i = 0; i < allNum; i++) {
  // 				let str = row[i];
  // 				if (i == (allNum - 1) && allNum < row.length) {
  // 					str = str.substring(0, str.length - 1) + '...';
  // 				}
  // 				const obj = {
  // 					...textItem,
  // 					text: str,
  // 					dx: i === 0 ? textItem.dx : (dx >= 0 ? dx : textItem.dx),
  // 					dy: textItem.dy + (i * lineHeight),
  // 					textLength: countTextLength(Context, {
  // 						text: str,
  // 						size: textItem.size
  // 					})
  // 				};
  // 				_app.log('重新组成的文本对象:' + JSON.stringify(obj));
  // 				newArr.push(obj);
  // 			}
  // 		} else {
  // 			newArr.push(textItem);
  // 		}
  // 	}
  // }
  _app2.default.log('绘制文本新数组:' + JSON.stringify(newArr));
  drawTexts(Context, newArr);
}
function setFont() {
  var textItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (textItem.font && typeof textItem.font === 'string') {
    _app2.default.log(textItem.font);
    return textItem.font;
  } else {
    var fontStyle = 'normal';
    var fontVariant = 'normal';
    var fontWeight = 'normal';
    var fontSize = textItem.size || 10;
    var fontFamily = 'sans-serif';
    fontSize = Math.ceil(Number(fontSize));
    if (textItem.fontStyle && typeof textItem.fontStyle === 'string') fontStyle = textItem.fontStyle.trim();
    if (textItem.fontVariant && typeof textItem.fontVariant === 'string') fontVariant = textItem.fontVariant.trim();
    if (textItem.fontWeight && (typeof textItem.fontWeight === 'string' || typeof textItem.fontWeight === 'number')) fontWeight = textItem.fontWeight.trim();
    if (textItem.fontFamily && typeof textItem.fontFamily === 'string') fontFamily = textItem.fontFamily.trim();
    return fontStyle + ' ' + fontVariant + ' ' + fontWeight + ' ' + fontSize + 'px' + ' ' + fontFamily;
  }
}
function drawTexts(Context, texts) {
  // 绘制文本
  _app2.default.log('准备绘制文本方法, texts:' + JSON.stringify(texts));
  if (texts && _app2.default.isArray(texts)) {
    _app2.default.log('准备绘制文本方法, 是数组');
    if (texts.length > 0) {
      for (var i = 0; i < texts.length; i++) {
        drawTextFn(Context, texts[i]);
      }
    }
  } else {
    _app2.default.log('准备绘制文本方法, 不是数组');
    drawTextFn(Context, texts);
  }
}
function drawTextFn(Context, textItem) {
  _app2.default.log('进入绘制文本方法, textItem:' + JSON.stringify(textItem));
  if (textItem && _app2.default.isObject(textItem) && textItem.text) {
    Context.font = setFont(textItem);
    Context.setFillStyle(textItem.color);
    Context.setGlobalAlpha(textItem.alpha);
    Context.setTextAlign(textItem.textAlign);
    Context.setTextBaseline(textItem.textBaseline);
    Context.fillText(textItem.text, textItem.dx, textItem.dy);
    if (textItem.lineThrough && _app2.default.isObject(textItem.lineThrough)) {
      _app2.default.log('有删除线');
      var lineThrough = textItem.lineThrough;
      lineThrough.alpha = lineThrough.alpha !== undefined ? lineThrough.alpha : textItem.alpha;
      lineThrough.style = lineThrough.style || textItem.color;
      lineThrough.width = lineThrough.width !== undefined ? lineThrough.width : textItem.size / 10;
      lineThrough.cap = lineThrough.cap !== undefined ? lineThrough.cap : 'butt';
      _app2.default.log('删除线对象:' + JSON.stringify(lineThrough));
      Context.setGlobalAlpha(lineThrough.alpha);
      Context.setStrokeStyle(lineThrough.style);
      Context.setLineWidth(lineThrough.width);
      Context.setLineCap(lineThrough.cap);
      var mx, my;
      switch (textItem.textAlign) {
        case 'left':
          mx = textItem.dx;
          break;
        case 'center':
          mx = textItem.dx - textItem.textLength / 2;
          break;
        default:
          mx = textItem.dx - textItem.textLength;
          break;
      }
      switch (textItem.textBaseline) {
        case 'top':
          my = textItem.dy + textItem.size * .5;
          break;
        case 'middle':
          my = textItem.dy;
          break;
        default:
          my = textItem.dy - textItem.size * .5;
          break;
      }
      Context.beginPath();
      Context.moveTo(mx, my);
      Context.lineTo(mx + textItem.textLength, my);
      Context.stroke();
      Context.closePath();
      _app2.default.log('删除线完毕');
    }
    Context.setGlobalAlpha(1);
    Context.font = '10px sans-serif';
  }
}
// export 
function drawImage(Context, images) {
  // 绘制图片
  _app2.default.log('判断图片数据类型:' + JSON.stringify(images));
  if (images && _app2.default.isArray(images)) {
    if (images.length > 0) {
      for (var i = 0; i < images.length; i++) {
        readyDrawImageFn(Context, images[i]);
      }
    }
  } else {
    readyDrawImageFn(Context, images);
  }
}
function readyDrawImageFn(Context, img) {
  _app2.default.log('判断绘制图片形状, img:' + JSON.stringify(img));
  if (img.url) {
    if (img.circleSet) {
      drawCircleImage(Context, img);
    } else if (img.roundRectSet) {
      drawRoundRectImage(Context, img);
    } else {
      drawImageFn(Context, img);
    }
  }
}
var drawImageModes = {
  scaleToFill: function scaleToFill(Context, img) {
    _app2.default.log('准备绘制mode为scaleToFill的图片');
    Context.drawImage(img.url, Number(img.dx || 0), Number(img.dy || 0), Number(img.dWidth) || false, Number(img.dHeight) || false);
    _app2.default.log('mode为scaleToFill的图片绘制完毕');
  },
  aspectFit: function aspectFit(Context, img) {
    _app2.default.log('准备绘制mode为aspectFit的图片');
    var imageInfo = img.imageInfo,
      dWidth = img.dWidth,
      dHeight = img.dHeight;
    var height = imageInfo.height,
      width = imageInfo.width;
    var drawWidth = dWidth;
    var drawHeight = height / width * drawWidth;
    if (drawHeight < dHeight) {
      var diffHeight = (Number(dHeight) - Number(drawHeight)) / Number(dHeight) * height;
      img.dy = Number(img.dy) + diffHeight / 2;
    } else {
      drawHeight = dHeight;
      drawWidth = width / height * drawHeight;
      var diffWidth = (Number(dWidth) - Number(drawWidth)) / Number(dWidth) * width;
      img.dx = Number(img.dx) + diffWidth / 2;
    }
    Context.drawImage(img.url, 0, 0, width, height, img.dx, img.dy, drawWidth, drawHeight);
    _app2.default.log('mode为aspectFit的图片绘制完毕');
  },
  aspectFill: function aspectFill(Context, img) {
    var dpr = uni.getSystemInfoSync().pixelRatio;
    _app2.default.log('准备绘制mode为aspectFill的图片');
    var imageInfo = img.imageInfo,
      dWidth = img.dWidth,
      dHeight = img.dHeight;
    var height = imageInfo.height,
      width = imageInfo.width;
    var sx = 0,
      sy = 0,
      sWidth = width,
      sHeight = height;
    var drawWidth = dWidth;
    var drawHeight = height / width * drawWidth;
    if (drawHeight < dHeight) {
      _app2.default.log('绘制高度 小于 预定高度');
      drawHeight = dHeight;
      drawWidth = width / height * drawHeight;
      var diffWidth = (Number(drawWidth) - Number(dWidth)) / Number(drawWidth) * width;
      sx = diffWidth / 2;
      sWidth = width - diffWidth;
    } else {
      var diffHeight = (Number(drawHeight) - Number(dHeight)) / Number(drawHeight) * height;
      sy = diffHeight / 2;
      sHeight = height - diffHeight;
    }
    _app2.default.log("aspectFill \u6700\u7EC8\u7ED8\u5236: sx: ".concat(sx, ", sy: ").concat(sy, ", sWidth: ").concat(sWidth, ", sHeight: ").concat(sHeight, ", dx: ").concat(img.dx, ", dy: ").concat(img.dy, ", dWidth: ").concat(dWidth, ", dHeight: ").concat(dHeight));
    Context.drawImage(img.url, sx, sy, sWidth, sHeight, img.dx, img.dy, dWidth, dHeight);
    _app2.default.log('mode为aspectFill的图片绘制完毕');
  }
};
function drawImageFn(Context, img) {
  _app2.default.log('进入绘制默认图片方法, img:' + JSON.stringify(img));
  if (img.url) {
    var hasAlpha = !_app2.default.isUndef(img.alpha);
    img.alpha = Number(!_app2.default.isUndef(img.alpha) ? img.alpha : 1);
    Context.setGlobalAlpha(img.alpha);
    _app2.default.log('绘制默认图片方法, 有url');
    if (img.dHeight === undefined) img.dHeight = img.imageInfo.height;
    if (img.dWidth === undefined) img.dWidth = img.imageInfo.width;
    var fn = drawImageModes[img.mode];
    if (fn) {
      fn(Context, img);
    } else {
      if (img.dWidth && img.dHeight && img.sx && img.sy && img.sWidth && img.sHeight) {
        _app2.default.log('绘制默认图片方法, 绘制第一种方案');
        Context.drawImage(img.url, Number(img.sx) || false, Number(img.sy) || false, Number(img.sWidth) || false, Number(img.sHeight) || false, Number(img.dx || 0), Number(img.dy || 0), Number(img.dWidth) || false, Number(img.dHeight) || false);
      } else if (img.dWidth && img.dHeight) {
        _app2.default.log('绘制默认图片方法, 绘制第二种方案');
        Context.drawImage(img.url, Number(img.dx || 0), Number(img.dy || 0), Number(img.dWidth) || false, Number(img.dHeight) || false);
      } else {
        _app2.default.log('绘制默认图片方法, 绘制第三种方案');
        Context.drawImage(img.url, Number(img.dx || 0), Number(img.dy || 0));
      }
    }
    if (hasAlpha) {
      Context.setGlobalAlpha(1);
    }
  }
  _app2.default.log('绘制默认图片方法, 绘制完毕');
}
function drawCircleImage(Context, obj) {
  _app2.default.log('进入绘制圆形图片方法, obj:' + JSON.stringify(obj));
  var dx = obj.dx,
    dy = obj.dy,
    dWidth = obj.dWidth,
    dHeight = obj.dHeight,
    circleSet = obj.circleSet,
    imageInfo = obj.imageInfo;
  var x, y, r;
  if ((0, _typeof2.default)(circleSet) === 'object') {
    x = circleSet.x;
    y = circleSet.y;
    r = circleSet.r;
  }
  if (!r) {
    var d;
    d = dWidth > dHeight ? dHeight : dWidth;
    r = d / 2;
  }
  x = x ? dx + x : (dx || 0) + r;
  y = y ? dy + y : (dy || 0) + r;
  Context.save();
  Context.beginPath();
  Context.arc(x, y, r, 0, 2 * Math.PI, false);
  Context.closePath();
  Context.setGlobalAlpha(0);
  Context.fillStyle = '#FFFFFF';
  Context.fill();
  Context.setGlobalAlpha(1);
  Context.clip();
  drawImageFn(Context, obj);
  _app2.default.log('默认图片绘制完毕');
  Context.restore();
}
function drawRoundRectImage(Context, obj) {
  // 绘制矩形
  _app2.default.log('进入绘制矩形图片方法, obj:' + JSON.stringify(obj));
  Context.save();
  var dx = obj.dx,
    dy = obj.dy,
    dWidth = obj.dWidth,
    dHeight = obj.dHeight,
    roundRectSet = obj.roundRectSet,
    imageInfo = obj.imageInfo;
  var r;
  if ((0, _typeof2.default)(roundRectSet) === 'object') {
    r = roundRectSet.r;
  }
  r = r || dWidth * .1;
  if (dWidth < 2 * r) {
    r = dWidth / 2;
  }
  if (dHeight < 2 * r) {
    r = dHeight / 2;
  }
  Context.beginPath();

  // Context.moveTo(dx + r, dy);
  Context.arc(dx + r, dy + r, r, 1 * Math.PI, 1.5 * Math.PI);
  Context.lineTo(dx + dWidth - r, dy);
  Context.arc(dx + dWidth - r, dy + r, r, 1.5 * Math.PI, 0);
  Context.lineTo(dx + dWidth, dy + dHeight - r);
  Context.arc(dx + dWidth - r, dy + dHeight - r, r, 0, .5 * Math.PI);
  Context.lineTo(dx + r, dy + dHeight);
  Context.arc(dx + r, dy + dHeight - r, r, .5 * Math.PI, 1 * Math.PI);
  Context.lineTo(dx, dy + r);

  // Context.arcTo(dx + dWidth, dy, dx + dWidth, dy + dHeight, r);
  // Context.arcTo(dx + dWidth, dy + dHeight, dx, dy + dHeight, r);
  // Context.arcTo(dx, dy + dHeight, dx, dy, r);
  // Context.arcTo(dx, dy, dx + dWidth, dy, r);
  Context.closePath();
  Context.setGlobalAlpha(0);
  Context.fillStyle = '#FFFFFF';
  Context.fill();
  Context.setGlobalAlpha(1);
  Context.clip();
  drawImageFn(Context, obj);
  Context.restore();
  _app2.default.log('进入绘制矩形图片方法, 绘制完毕');
}

// export 
function drawQrCode(Context, qrCodeObj) {
  //生成二维码方法， 参考了 诗小柒 的二维码生成器代码
  _app2.default.log('进入绘制二维码方法');
  var qrcodeAlgObjCache = [];
  var options = {
    text: String(qrCodeObj.text || '') || '',
    // 生成内容
    size: Number(qrCodeObj.size || 0) || 200,
    // 二维码大小
    background: String(qrCodeObj.background || '') || '#ffffff',
    // 背景色
    foreground: String(qrCodeObj.foreground || '') || '#000000',
    // 前景色
    pdground: String(qrCodeObj.pdground || '') || '#000000',
    // 定位角点颜色
    correctLevel: Number(qrCodeObj.correctLevel || 0) || 3,
    // 容错级别
    image: String(qrCodeObj.image || '') || '',
    // 二维码图标
    imageSize: Number(qrCodeObj.imageSize || 0) || 40,
    // 二维码图标大小
    dx: Number(qrCodeObj.dx || 0) || 0,
    // x轴距离
    dy: Number(qrCodeObj.dy || 0) || 0 // y轴距离
  };

  var qrCodeAlg = null;
  var d = 0;
  for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
    d = i;
    if (qrcodeAlgObjCache[i].text == options.text && qrcodeAlgObjCache[i].text.correctLevel == options.correctLevel) {
      qrCodeAlg = qrcodeAlgObjCache[i].obj;
      break;
    }
  }
  if (d == l) {
    qrCodeAlg = new _QRCodeAlg.default(options.text, options.correctLevel);
    qrcodeAlgObjCache.push({
      text: options.text,
      correctLevel: options.correctLevel,
      obj: qrCodeAlg
    });
  }
  var getForeGround = function getForeGround(config) {
    var options = config.options;
    if (options.pdground && (config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 || config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 || config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2)) {
      return options.pdground;
    }
    return options.foreground;
  };
  var count = qrCodeAlg.getModuleCount();
  var ratioSize = options.size;
  var ratioImgSize = options.imageSize;
  //计算每个点的长宽
  var tileW = (ratioSize / count).toPrecision(4);
  var tileH = (ratioSize / count).toPrecision(4);
  //绘制
  for (var row = 0; row < count; row++) {
    for (var col = 0; col < count; col++) {
      var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
      var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
      var foreground = getForeGround({
        row: row,
        col: col,
        count: count,
        options: options
      });
      Context.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);
      Context.fillRect(options.dx + Math.round(col * tileW), options.dy + Math.round(row * tileH), w, h);
    }
  }
  if (options.image) {
    // 画圆角矩形
    var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {
      ctxi.setLineWidth(lineWidth);
      ctxi.setFillStyle(options.background);
      ctxi.setStrokeStyle(options.background);
      ctxi.beginPath(); // draw top and top right corner 
      ctxi.moveTo(x + r, y);
      ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
      ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
      ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
      ctxi.arcTo(x, y, x + r, y, r);
      ctxi.closePath();
      if (fill) {
        ctxi.fill();
      }
      if (stroke) {
        ctxi.stroke();
      }
    };
    var x = options.dx + Number(((ratioSize - ratioImgSize) / 2).toFixed(2));
    var y = options.dy + Number(((ratioSize - ratioImgSize) / 2).toFixed(2));
    drawRoundedRect(Context, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);
    Context.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);
  }
  _app2.default.log('进入绘制二维码方法完毕');
}
function getShreUserPosterBackground(objs) {
  //检查背景图是否存在于本地， 若存在直接返回， 否则调用getShreUserPosterBackgroundFc方法
  var backgroundImage = objs.backgroundImage,
    type = objs.type;
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(resolve, reject) {
      var savedFilePath;
      return _regenerator.default.wrap(function _callee5$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return getShreUserPosterBackgroundFc(objs);
            case 3:
              savedFilePath = _context6.sent;
              resolve(savedFilePath);
              _context6.next = 13;
              break;
            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              _app2.default.hideLoading();
              _app2.default.showToast('获取分享用户背景图失败:' + JSON.stringify(_context6.t0));
              _app2.default.log(JSON.stringify(_context6.t0));
              reject(_context6.t0);
            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
}
function getPosterStorage(type) {
  return _app2.default.getStorageSync(getStorageKey(type));
}
function removePosterStorage(type) {
  var ShreUserPosterBackgroundKey = getStorageKey(type);
  var pbg = _app2.default.getStorageSync(ShreUserPosterBackgroundKey);
  if (pbg && pbg.path) {
    _app2.default.removeStorageSync(ShreUserPosterBackgroundKey);
  }
}
function setPosterStorage(type, data) {
  _app2.default.setStorage(getStorageKey(type), data);
}
function getStorageKey(type) {
  return ShreUserPosterBackgroundKey + (type || 'default');
}
function getShreUserPosterBackgroundFc(objs, upimage) {
  //下载并保存背景图方法
  var backgroundImage = objs.backgroundImage,
    type = objs.type;
  _app2.default.log('获取分享背景图, 尝试清空本地数据');
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(resolve, reject) {
      var image, savedFilePath, imageObj, returnObj;
      return _regenerator.default.wrap(function _callee6$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _app2.default.log('没有从后端获取的背景图片路径, 尝试从后端获取背景图片路径');
              if (!backgroundImage) {
                _context7.next = 6;
                break;
              }
              _context7.t0 = backgroundImage;
              _context7.next = 9;
              break;
            case 6:
              _context7.next = 8;
              return _app2.default.getPosterUrl(objs);
            case 8:
              _context7.t0 = _context7.sent;
            case 9:
              image = _context7.t0;
              _context7.next = 12;
              return base64ToPathFn(image);
            case 12:
              image = _context7.sent;
              _app2.default.log('尝试下载并保存背景图:' + image);
              _context7.next = 16;
              return _app2.default.downLoadAndSaveFile_PromiseFc(image);
            case 16:
              savedFilePath = _context7.sent;
              if (!savedFilePath) {
                _context7.next = 30;
                break;
              }
              _app2.default.log('下载并保存背景图成功:' + savedFilePath);
              _context7.next = 21;
              return _app2.default.getImageInfo_PromiseFc(image);
            case 21:
              imageObj = _context7.sent;
              _app2.default.log('获取图片信息成功');
              returnObj = {
                path: savedFilePath,
                width: imageObj.width,
                height: imageObj.height,
                name: _app2.default.fileNameInPath(image)
              };
              _app2.default.log('拼接背景图信息对象成功:' + JSON.stringify(returnObj));
              setPosterStorage(type, _objectSpread({}, returnObj));
              _app2.default.log('返回背景图信息对象');
              resolve(_objectSpread({}, returnObj));
              _context7.next = 31;
              break;
            case 30:
              reject('not find savedFilePath');
            case 31:
              _context7.next = 37;
              break;
            case 33:
              _context7.prev = 33;
              _context7.t1 = _context7["catch"](0);
              //TODO handle the exception
              _app2.default.hideLoading();
              reject(_context7.t1);
            case 37:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee6, null, [[0, 33]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
}
module.exports = {
  getShreUserPosterBackground: getShreUserPosterBackground,
  getSharePoster: getSharePoster,
  setText: setText,
  setImage: setImage,
  drawText: drawText,
  drawImage: drawImage,
  drawQrCode: drawQrCode,
  drawFillRect: drawFillRect,
  drawStrokeRect: drawStrokeRect,
  drawRoundStrokeRect: drawRoundStrokeRect,
  drawRoundFillRect: drawRoundFillRect
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 397:
/*!*******************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/poster/QS-SharePoster/QRCodeAlg.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = QRCodeAlg;
/**
    * 获取单个字符的utf8编码
    * unicode BMP平面约65535个字符
    * @param {num} code
    * return {array}
    */
function unicodeFormat8(code) {
  // 1 byte
  var c0, c1, c2;
  if (code < 128) {
    return [code];
    // 2 bytes
  } else if (code < 2048) {
    c0 = 192 + (code >> 6);
    c1 = 128 + (code & 63);
    return [c0, c1];
    // 3 bytes
  } else {
    c0 = 224 + (code >> 12);
    c1 = 128 + (code >> 6 & 63);
    c2 = 128 + (code & 63);
    return [c0, c1, c2];
  }
}
/**
 * 获取字符串的utf8编码字节串
 * @param {string} string
 * @return {array}
 */
function getUTF8Bytes(string) {
  var utf8codes = [];
  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);
    var utf8 = unicodeFormat8(code);
    for (var j = 0; j < utf8.length; j++) {
      utf8codes.push(utf8[j]);
    }
  }
  return utf8codes;
}
/**
 * 二维码算法实现
 * @param {string} data              要编码的信息字符串
 * @param {num} errorCorrectLevel 纠错等级
 */
function QRCodeAlg(data, errorCorrectLevel) {
  this.typeNumber = -1; //版本
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null; //二维矩阵，存放最终结果
  this.moduleCount = 0; //矩阵大小
  this.dataCache = null; //数据缓存
  this.rsBlocks = null; //版本数据信息
  this.totalDataCount = -1; //可使用的数据量
  this.data = data;
  this.utf8bytes = getUTF8Bytes(data);
  this.make();
}
QRCodeAlg.prototype = {
  constructor: QRCodeAlg,
  /**
   * 获取二维码矩阵大小
   * @return {num} 矩阵大小
   */
  getModuleCount: function getModuleCount() {
    return this.moduleCount;
  },
  /**
   * 编码
   */
  make: function make() {
    this.getRightType();
    this.dataCache = this.createData();
    this.createQrcode();
  },
  /**
   * 设置二位矩阵功能图形
   * @param  {bool} test 表示是否在寻找最好掩膜阶段
   * @param  {num} maskPattern 掩膜的版本
   */
  makeImpl: function makeImpl(maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);
    for (var row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);
    }
    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(true, maskPattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(true);
    }
    this.mapData(this.dataCache, maskPattern);
  },
  /**
   * 设置二维码的位置探测图形
   * @param  {num} row 探测图形的中心横坐标
   * @param  {num} col 探测图形的中心纵坐标
   */
  setupPositionProbePattern: function setupPositionProbePattern(row, col) {
    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r) continue;
      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c) continue;
        if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          this.modules[row + r][col + c] = true;
        } else {
          this.modules[row + r][col + c] = false;
        }
      }
    }
  },
  /**
   * 创建二维码
   * @return {[type]} [description]
   */
  createQrcode: function createQrcode() {
    var minLostPoint = 0;
    var pattern = 0;
    var bestModules = null;
    for (var i = 0; i < 8; i++) {
      this.makeImpl(i);
      var lostPoint = QRUtil.getLostPoint(this);
      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
        bestModules = this.modules;
      }
    }
    this.modules = bestModules;
    this.setupTypeInfo(false, pattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(false);
    }
  },
  /**
   * 设置定位图形
   * @return {[type]} [description]
   */
  setupTimingPattern: function setupTimingPattern() {
    for (var r = 8; r < this.moduleCount - 8; r++) {
      if (this.modules[r][6] != null) {
        continue;
      }
      this.modules[r][6] = r % 2 == 0;
      if (this.modules[6][r] != null) {
        continue;
      }
      this.modules[6][r] = r % 2 == 0;
    }
  },
  /**
   * 设置矫正图形
   * @return {[type]} [description]
   */
  setupPositionAdjustPattern: function setupPositionAdjustPattern() {
    var pos = QRUtil.getPatternPosition(this.typeNumber);
    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];
        if (this.modules[row][col] != null) {
          continue;
        }
        for (var r = -2; r <= 2; r++) {
          for (var c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  },
  /**
   * 设置版本信息（7以上版本才有）
   * @param  {bool} test 是否处于判断最佳掩膜阶段
   * @return {[type]}      [description]
   */
  setupTypeNumber: function setupTypeNumber(test) {
    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  },
  /**
   * 设置格式信息（纠错等级和掩膜版本）
   * @param  {bool} test
   * @param  {num} maskPattern 掩膜版本
   * @return {}
   */
  setupTypeInfo: function setupTypeInfo(test, maskPattern) {
    var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data);
    // vertical
    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
      // horizontal
      var mod = !test && (bits >> i & 1) == 1;
      if (i < 8) {
        this.modules[8][this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i - 1] = mod;
      }
    }
    // fixed module
    this.modules[this.moduleCount - 8][8] = !test;
  },
  /**
   * 数据编码
   * @return {[type]} [description]
   */
  createData: function createData() {
    var buffer = new QRBitBuffer();
    var lengthBits = this.typeNumber > 9 ? 16 : 8;
    buffer.put(4, 4); //添加模式
    buffer.put(this.utf8bytes.length, lengthBits);
    for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
      buffer.put(this.utf8bytes[i], 8);
    }
    if (buffer.length + 4 <= this.totalDataCount * 8) {
      buffer.put(0, 4);
    }
    // padding
    while (buffer.length % 8 != 0) {
      buffer.putBit(false);
    }
    // padding
    while (true) {
      if (buffer.length >= this.totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeAlg.PAD0, 8);
      if (buffer.length >= this.totalDataCount * 8) {
        break;
      }
      buffer.put(QRCodeAlg.PAD1, 8);
    }
    return this.createBytes(buffer);
  },
  /**
   * 纠错码编码
   * @param  {buffer} buffer 数据编码
   * @return {[type]}
   */
  createBytes: function createBytes(buffer) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var length = this.rsBlock.length / 3;
    var rsBlocks = new Array();
    for (var i = 0; i < length; i++) {
      var count = this.rsBlock[i * 3 + 0];
      var totalCount = this.rsBlock[i * 3 + 1];
      var dataCount = this.rsBlock[i * 3 + 2];
      for (var j = 0; j < count; j++) {
        rsBlocks.push([dataCount, totalCount]);
      }
    }
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r = 0; r < rsBlocks.length; r++) {
      var dcCount = rsBlocks[r][0];
      var ecCount = rsBlocks[r][1] - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r] = new Array(dcCount);
      for (var i = 0; i < dcdata[r].length; i++) {
        dcdata[r][i] = 0xff & buffer.buffer[i + offset];
      }
      offset += dcCount;
      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (var i = 0; i < ecdata[r].length; i++) {
        var modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    var data = new Array(this.totalDataCount);
    var index = 0;
    for (var i = 0; i < maxDcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < dcdata[r].length) {
          data[index++] = dcdata[r][i];
        }
      }
    }
    for (var i = 0; i < maxEcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < ecdata[r].length) {
          data[index++] = ecdata[r][i];
        }
      }
    }
    return data;
  },
  /**
   * 布置模块，构建最终信息
   * @param  {} data
   * @param  {} maskPattern
   * @return {}
   */
  mapData: function mapData(data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;
      while (true) {
        for (var c = 0; c < 2; c++) {
          if (this.modules[row][col - c] == null) {
            var dark = false;
            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }
            var mask = QRUtil.getMask(maskPattern, row, col - c);
            if (mask) {
              dark = !dark;
            }
            this.modules[row][col - c] = dark;
            bitIndex--;
            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  }
};
/**
 * 填充字段
 */
QRCodeAlg.PAD0 = 0xEC;
QRCodeAlg.PAD1 = 0x11;
//---------------------------------------------------------------------
// 纠错等级对应的编码
//---------------------------------------------------------------------
var QRErrorCorrectLevel = [1, 0, 3, 2];
//---------------------------------------------------------------------
// 掩膜版本
//---------------------------------------------------------------------
var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};
//---------------------------------------------------------------------
// 工具类
//---------------------------------------------------------------------
var QRUtil = {
  /*
  每个版本矫正图形的位置
   */
  PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
  /*
  BCH编码格式信息
   */
  getBCHTypeInfo: function getBCHTypeInfo(data) {
    var d = data << 10;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }
    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },
  /*
  BCH编码版本信息
   */
  getBCHTypeNumber: function getBCHTypeNumber(data) {
    var d = data << 12;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }
    return data << 12 | d;
  },
  /*
  获取BCH位信息
   */
  getBCHDigit: function getBCHDigit(data) {
    var digit = 0;
    while (data != 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  },
  /*
  获取版本对应的矫正图形位置
   */
  getPatternPosition: function getPatternPosition(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  /*
  掩膜算法
   */
  getMask: function getMask(maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;
      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;
      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;
      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;
      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;
      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;
      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + maskPattern);
    }
  },
  /*
  获取RS的纠错多项式
   */
  getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
    var a = new QRPolynomial([1], 0);
    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
    }
    return a;
  },
  /*
  获取评价
   */
  getLostPoint: function getLostPoint(qrCode) {
    var moduleCount = qrCode.getModuleCount(),
      lostPoint = 0,
      darkCount = 0;
    for (var row = 0; row < moduleCount; row++) {
      var sameCount = 0;
      var head = qrCode.modules[row][0];
      for (var col = 0; col < moduleCount; col++) {
        var current = qrCode.modules[row][col];
        //level 3 评价
        if (col < moduleCount - 6) {
          if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
            if (col < moduleCount - 10) {
              if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                lostPoint += 40;
              }
            } else if (col > 3) {
              if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                lostPoint += 40;
              }
            }
          }
        }
        //level 2 评价
        if (row < moduleCount - 1 && col < moduleCount - 1) {
          var count = 0;
          if (current) count++;
          if (qrCode.modules[row + 1][col]) count++;
          if (qrCode.modules[row][col + 1]) count++;
          if (qrCode.modules[row + 1][col + 1]) count++;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
        //level 1 评价
        if (head ^ current) {
          sameCount++;
        } else {
          head = current;
          if (sameCount >= 5) {
            lostPoint += 3 + sameCount - 5;
          }
          sameCount = 1;
        }
        //level 4 评价
        if (current) {
          darkCount++;
        }
      }
    }
    for (var col = 0; col < moduleCount; col++) {
      var sameCount = 0;
      var head = qrCode.modules[0][col];
      for (var row = 0; row < moduleCount; row++) {
        var current = qrCode.modules[row][col];
        //level 3 评价
        if (row < moduleCount - 6) {
          if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
            if (row < moduleCount - 10) {
              if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                lostPoint += 40;
              }
            } else if (row > 3) {
              if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                lostPoint += 40;
              }
            }
          }
        }
        //level 1 评价
        if (head ^ current) {
          sameCount++;
        } else {
          head = current;
          if (sameCount >= 5) {
            lostPoint += 3 + sameCount - 5;
          }
          sameCount = 1;
        }
      }
    }
    // LEVEL4
    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  }
};
//---------------------------------------------------------------------
// QRMath使用的数学工具
//---------------------------------------------------------------------
var QRMath = {
  /*
  将n转化为a^m
   */
  glog: function glog(n) {
    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }
    return QRMath.LOG_TABLE[n];
  },
  /*
  将a^m转化为n
   */
  gexp: function gexp(n) {
    while (n < 0) {
      n += 255;
    }
    while (n >= 256) {
      n -= 255;
    }
    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256)
};
for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}
//---------------------------------------------------------------------
// QRPolynomial 多项式
//---------------------------------------------------------------------
/**
 * 多项式类
 * @param {Array} num   系数
 * @param {num} shift a^shift
 */
function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }
  var offset = 0;
  while (offset < num.length && num[offset] == 0) {
    offset++;
  }
  this.num = new Array(num.length - offset + shift);
  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}
QRPolynomial.prototype = {
  get: function get(index) {
    return this.num[index];
  },
  getLength: function getLength() {
    return this.num.length;
  },
  /**
   * 多项式乘法
   * @param  {QRPolynomial} e 被乘多项式
   * @return {[type]}   [description]
   */
  multiply: function multiply(e) {
    var num = new Array(this.getLength() + e.getLength() - 1);
    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
      }
    }
    return new QRPolynomial(num, 0);
  },
  /**
   * 多项式模运算
   * @param  {QRPolynomial} e 模多项式
   * @return {}
   */
  mod: function mod(e) {
    var tl = this.getLength(),
      el = e.getLength();
    if (tl - el < 0) {
      return this;
    }
    var num = new Array(tl);
    for (var i = 0; i < tl; i++) {
      num[i] = this.get(i);
    }
    while (num.length >= el) {
      var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));
      for (var i = 0; i < e.getLength(); i++) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
      }
      while (num[0] == 0) {
        num.shift();
      }
    }
    return new QRPolynomial(num, 0);
  }
};

//---------------------------------------------------------------------
// RS_BLOCK_TABLE
//---------------------------------------------------------------------
/*
二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
 */
var RS_BLOCK_TABLE = [
// L
// M
// Q
// H
// 1
[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],
// 2
[1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16],
// 3
[1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13],
// 4
[1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9],
// 5
[1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12],
// 6
[2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15],
// 7
[2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14],
// 8
[2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15],
// 9
[2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13],
// 10
[2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16],
// 11
[4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13],
// 12
[2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15],
// 13
[4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12],
// 14
[3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13],
// 15
[5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12],
// 16
[5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16],
// 17
[1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15],
// 18
[5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15],
// 19
[3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14],
// 20
[3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16],
// 21
[4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17],
// 22
[2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13],
// 23
[4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16],
// 24
[6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17],
// 25
[8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16],
// 26
[10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17],
// 27
[8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16],
// 28
[3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16],
// 29
[7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16],
// 30
[5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16],
// 31
[13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16],
// 32
[17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16],
// 33
[17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16],
// 34
[13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17],
// 35
[12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16],
// 36
[6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16],
// 37
[17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16],
// 38
[4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16],
// 39
[20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16],
// 40
[19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

/**
 * 根据数据获取对应版本
 * @return {[type]} [description]
 */
QRCodeAlg.prototype.getRightType = function () {
  for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
    var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
    if (rsBlock == undefined) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
    }
    var length = rsBlock.length / 3;
    var totalDataCount = 0;
    for (var i = 0; i < length; i++) {
      var count = rsBlock[i * 3 + 0];
      var dataCount = rsBlock[i * 3 + 2];
      totalDataCount += dataCount * count;
    }
    var lengthBytes = typeNumber > 9 ? 2 : 1;
    if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
      this.typeNumber = typeNumber;
      this.rsBlock = rsBlock;
      this.totalDataCount = totalDataCount;
      break;
    }
  }
};

//---------------------------------------------------------------------
// QRBitBuffer
//---------------------------------------------------------------------
function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}
QRBitBuffer.prototype = {
  get: function get(index) {
    var bufIndex = Math.floor(index / 8);
    return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
  },
  put: function put(num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(num >>> length - i - 1 & 1);
    }
  },
  putBit: function putBit(bit) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }
    this.length++;
  }
};

/***/ }),

/***/ 398:
/*!*********************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/poster/QS-SharePoster/image-tools.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64ToPath = base64ToPath;
exports.pathToBase64 = pathToBase64;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function getLocalFilePath(path) {
  if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
    return path;
  }
  if (path.indexOf('file://') === 0) {
    return path;
  }
  if (path.indexOf('/storage/emulated/0/') === 0) {
    return path;
  }
  if (path.indexOf('/') === 0) {
    var localFilePath = plus.io.convertAbsoluteFileSystem(path);
    if (localFilePath !== path) {
      return localFilePath;
    } else {
      path = path.substr(1);
    }
  }
  return '_www/' + path;
}
function pathToBase64(path) {
  return new Promise(function (resolve, reject) {
    if ((typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) === 'object' && 'document' in window) {
      if (typeof FileReader === 'function') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          if (this.status === 200) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
              resolve(e.target.result);
            };
            fileReader.onerror = reject;
            fileReader.readAsDataURL(this.response);
          }
        };
        xhr.onerror = reject;
        xhr.send();
        return;
      }
      var canvas = document.createElement('canvas');
      var c2x = canvas.getContext('2d');
      var img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        c2x.drawImage(img, 0, 0);
        resolve(canvas.toDataURL());
        canvas.height = canvas.width = 0;
      };
      img.onerror = reject;
      img.src = path;
      return;
    }
    if ((typeof plus === "undefined" ? "undefined" : (0, _typeof2.default)(plus)) === 'object') {
      plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function (entry) {
        entry.file(function (file) {
          var fileReader = new plus.io.FileReader();
          fileReader.onload = function (data) {
            resolve(data.target.result);
          };
          fileReader.onerror = function (error) {
            reject(error);
          };
          fileReader.readAsDataURL(file);
        }, function (error) {
          reject(error);
        });
      }, function (error) {
        reject(error);
      });
      return;
    }
    if ((typeof wx === "undefined" ? "undefined" : (0, _typeof2.default)(wx)) === 'object' && wx.canIUse('getFileSystemManager')) {
      wx.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: function success(res) {
          resolve('data:image/png;base64,' + res.data);
        },
        fail: function fail(error) {
          reject(error);
        }
      });
      return;
    }
    reject(new Error('not support'));
  });
}
function base64ToPath(base64) {
  return new Promise(function (resolve, reject) {
    if ((typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) === 'object' && 'document' in window) {
      base64 = base64.split(',');
      var type = base64[0].match(/:(.*?);/)[1];
      var str = atob(base64[1]);
      var n = str.length;
      var array = new Uint8Array(n);
      while (n--) {
        array[n] = str.charCodeAt(n);
      }
      return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], {
        type: type
      })));
    }
    var extName = base64.match(/data\:\S+\/(\S+);/);
    if (extName) {
      extName = extName[1];
    } else {
      reject(new Error('base64 error'));
    }
    var fileName = Date.now() + '.' + extName;
    if ((typeof plus === "undefined" ? "undefined" : (0, _typeof2.default)(plus)) === 'object') {
      var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now());
      bitmap.loadBase64Data(base64, function () {
        var filePath = '_doc/uniapp_temp/' + fileName;
        bitmap.save(filePath, {}, function () {
          bitmap.clear();
          resolve(filePath);
        }, function (error) {
          bitmap.clear();
          reject(error);
        });
      }, function (error) {
        bitmap.clear();
        reject(error);
      });
      return;
    }
    if ((typeof wx === "undefined" ? "undefined" : (0, _typeof2.default)(wx)) === 'object' && wx.canIUse('getFileSystemManager')) {
      var filePath = wx.env.USER_DATA_PATH + '/' + fileName;
      wx.getFileSystemManager().writeFile({
        filePath: filePath,
        data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
        encoding: 'base64',
        success: function success() {
          resolve(filePath);
        },
        fail: function fail(error) {
          reject(error);
        }
      });
      return;
    }
    reject(new Error('not support'));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!**************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/platform/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Platform v1.0.0
 * @Class Platform
 * @description shopro-platform 1.0.0 全平台兼容
 * @Author lidongtony
 * @Date 2021-04-07
 * @Email lidongtony@qq.com
 */
var _default = {
  // 获取当前运行平台
  get: function get() {
    var platform = '';
    platform = 'wxMiniProgram';
    if (platform !== '') {
      uni.setStorageSync('platform', platform);
    } else {
      uni.showToast({
        title: '暂不支持该平台',
        icon: 'none'
      });
    }
    return platform;
  },
  set: function set(platform) {
    uni.setStorageSync('platform', platform);
    return platform;
  },
  // 检测当前运行机型
  device: function device() {
    return uni.getSystemInfoSync().platform;
  },
  // 获取前端真实主机
  host: function host() {
    var host = location.origin;
    var basePath = router.$route.options.base;
    var mode = router.$route.options.mode;
    host += basePath;
    if (mode === 'hash') {
      host += '#/';
    }
    return host;
  },
  // 处理wechat jssdk 签名网址(针对IOS微信浏览器做优化)
  entry: function entry() {
    var that = this;
    var entryUrl = location.href;
    if (this.device() === 'ios') {
      if (typeof location.entryUrl !== 'undefined') {
        entryUrl = location.entryUrl;
      } else {
        location.entryUrl = entryUrl;
      }
    }
    return entryUrl;
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 41:
/*!************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/request/apis.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
/**
 * 接口列表文件
 */
var _default = {
  /** 公共 ↓ **/
  common: {
    init: {
      url: "index/init",
      auth: false,
      method: "GET"
      // desc: '初始化数据',end
    },

    chat: {
      url: "chat.index/init",
      auth: false,
      method: "GET"
      // desc: '初始化聊天配置',
    },

    upload: {
      url: "index/upload",
      auth: true,
      method: "POST"
      // desc: '上传图片',
    },

    template: {
      url: "index/template",
      auth: false,
      method: "GET"
      // desc: '模板信息',end
    },

    custom: {
      url: "index/custom",
      auth: false,
      method: "GET"
      // desc: '自定义模板页面',
    },

    live: {
      url: "live",
      auth: false,
      method: "GET"
      // desc: '直播列表',
    },

    wxJssdk: {
      url: "wechat/jssdk",
      auth: false,
      method: "POST"
      // desc: '微信Jssdk',
    },

    syncPages: {
      url: "index/asyncPages",
      auth: false,
      method: "POST"
      // desc: '路由表 DEV开发模式下有效',end
    },

    debug: {
      url: "index/debugLog",
      auth: false,
      method: "POST"
      // desc: '上传DEBUG信息',
    },

    richText: {
      url: "index/richtext",
      auth: false,
      method: "GET"
      // desc: '富文本数据',
    },

    shareAdd: {
      url: "share/add",
      auth: false,
      method: "POST"
      // desc: '添加分享记录',
    },

    smsSend: {
      url: "sms/send",
      auth: false,
      method: "POST"
      // desc: '发送短信',
    }
  },

  /** 分类 ↓ **/
  category: {
    info: {
      url: "category/detail",
      auth: false,
      method: "GET"
      // desc: '分类类别',
    },

    detail: {
      url: "category",
      auth: false,
      method: "GET"
      // desc: '分类详情',
    },

    list: {
      url: "category/list",
      auth: false,
      method: "GET"
      // desc: '首页分类商品列表',
    }
  },

  /** 门店 ↓ **/
  store: {
    list: {
      url: "store/index",
      auth: true,
      method: "GET"
      // desc: '商户列表，不需要storeId',
    },

    info: {
      url: "store.store/index",
      auth: true,
      method: "GET"
      // desc: '商户信息',
    },

    order: {
      url: "store.order/index",
      auth: true,
      method: "GET"
      // desc: '商户订单',
    },

    orderDetail: {
      url: "store.order/detail",
      auth: true,
      method: "GET"
      // desc: '订单详情',
    },

    orderSend: {
      url: "store.order/send",
      auth: true,
      method: "POST"
      // desc: '订单发货',
    },

    orderConfirm: {
      url: "store.order/confirm",
      auth: true,
      method: "POST"
      // desc: '核销订单',
    },

    apply: {
      url: "store.apply/apply",
      auth: true,
      method: "POST"
      // desc: '申请门店',
    },

    shopInfo: {
      url: "store.apply/info",
      auth: true,
      method: "POST"
      // desc: '门店信息',
    }
  },

  /** 商品 ↓ **/
  goods: {
    lists: {
      url: "goods/lists",
      auth: false,
      method: "GET"
      // desc: '商品列表',
    },

    seckillList: {
      url: "goods/seckillList",
      auth: false,
      method: "GET"
      // desc: '秒杀列表',
    },

    activity: {
      url: "goods/activity",
      auth: false,
      method: "GET"
      // desc: '活动商品',
    },

    myGroupon: {
      url: "activity_groupon/myGroupon",
      auth: true,
      method: "GET"
      // desc: '我的拼团',
    },

    grouponDetail: {
      url: "activity_groupon/detail",
      auth: false,
      method: "GET"
      // desc: '拼团详情',
    },

    grouponItem: {
      url: "activity_groupon/index",
      auth: false,
      method: "GET"
      // desc: '拼购列表',
    },

    grouponList: {
      url: "goods/grouponList",
      auth: false,
      method: "GET"
      // desc: '拼团商品列表',
    },

    detail: {
      url: "goods/detail",
      auth: false,
      method: "GET"
      // desc: '商品详情',
    },

    favorite: {
      url: "goods/favorite",
      auth: true,
      method: "POST"
      // desc: '商品收藏',
    },

    storeAddress: {
      url: "goods/store",
      auth: true,
      method: "GET"
      // desc: '商品支持的自提点',
    },

    scoreList: {
      url: "score_goods_sku_price/index",
      auth: false,
      method: "GET"
      // desc: '积分商品列表',
    },

    scoreDetail: {
      url: "score_goods_sku_price/detail",
      auth: false,
      method: "GET"
      // desc: '积分详情',
    },

    commentList: {
      url: "goods_comment/index",
      auth: false,
      method: "GET"
      // desc: '商品评论列表',
    },

    commentType: {
      url: "goods_comment/type",
      auth: false,
      method: "GET"
      // desc: '商品评论分类',
    }
  },

  /** 用户 ↓ **/
  user: {
    accountLogin: {
      url: "user/accountLogin",
      auth: false,
      method: "POST"
      // desc: '账号密码登录',
    },

    smsLogin: {
      url: "user/smsLogin",
      auth: false,
      method: "POST"
      // desc: '短信登录',
    },

    register: {
      url: "user/register",
      auth: false,
      method: "POST"
      // desc: '注册',
    },

    forgotPwd: {
      url: "user/forgotPwd",
      auth: false,
      method: "POST"
      // desc: '重置密码',
    },

    bindMobile: {
      url: "user/bindMobile",
      auth: true,
      method: "POST"
      // desc: '修改手机号',
    },

    changePwd: {
      url: "user/changePwd",
      auth: true,
      method: "POST"
      // desc: '修改密码',
    },

    info: {
      url: "user",
      auth: true,
      method: "GET"
      // desc: '用户信息',end
    },

    profile: {
      url: "user/profile",
      auth: true,
      method: "POST"
      // desc: '修改用户信息',end
    },

    logout: {
      url: "user/logout",
      auth: true,
      method: "POST"
      // desc: '退出登录',end
    },

    getWxMiniProgramSessionKey: {
      url: "user/getWxMiniProgramSessionKey",
      auth: false,
      method: "POST"
      // desc: '获取用户session_key',
    },

    wxMiniProgramOauth: {
      url: "user/wxMiniProgramOauth",
      auth: false,
      method: "POST"
      // desc: '微信小程序登录',
    },

    wxOpenPlatformOauth: {
      url: "user/wxOpenPlatformOauth",
      auth: false,
      method: "POST"
      // desc: '微信APP登录',
    },

    thirdOauthInfo: {
      url: "user/thirdOauthInfo",
      auth: true,
      method: "GET"
      // desc: '第三方绑定信息',
    },

    unbindThirdOauth: {
      url: "user/unbindThirdOauth",
      auth: true,
      method: "POST"
      // desc: '解绑信息',
    },

    signList: {
      url: "user_sign/index",
      auth: true,
      method: "GET"
      // desc: '签到记录',
    },

    sign: {
      url: "user_sign/sign",
      auth: true,
      method: "POST"
      // desc: '签到',
    },

    messageIds: {
      url: "notification/template",
      auth: false,
      method: "GET"
      // desc: '订阅消息模板ids',
    },

    favoriteList: {
      url: "goods/favoriteList",
      auth: true,
      method: "GET"
      // desc: '商品收藏列表',
    },

    viewList: {
      url: "goods/viewList",
      auth: true,
      method: "GET"
      // desc: '足迹列表',end
    },

    viewDelete: {
      url: "goods/viewDelete",
      auth: true,
      method: "POST"
      // desc: '删除足迹',end
    },

    userData: {
      url: "user/userData",
      auth: true,
      method: "GET"
      // desc: '用户其他信息',
    },

    appleIdOauth: {
      url: "user/appleIdOauth",
      auth: false,
      method: "POST"
      // desc: 'appleId授权',
    }
  },

  /** 位置 ↓ **/
  address: {
    area: {
      url: "address/area",
      auth: false,
      method: "GET"
      // desc: '省市区',
    },

    list: {
      url: "address",
      auth: true,
      method: "GET"
      // desc: '地址列表',
    },

    edit: {
      url: "address/edit",
      auth: true,
      method: "POST"
      // desc: '修改地址',
    },

    defaults: {
      url: "address/defaults",
      auth: true,
      method: "GET"
      // desc: '默认地址',
    },

    info: {
      url: "address/info",
      auth: true,
      method: "GET"
      // desc: '地址详情',
    },

    del: {
      url: "address/del",
      auth: true,
      method: "POST"
      // desc: '删除',
    }
  },

  /** 常见问题 ↓ **/
  other: {
    faqList: {
      url: "faq",
      auth: false,
      method: "GET"
      // desc: '常见问题列表',
    },

    feedbackType: {
      url: "feedback/type",
      auth: true,
      method: "GET"
      // desc: '意见反馈类型',
    },

    feedbackAdd: {
      url: "feedback/add",
      auth: true,
      method: "POST"
      // desc: '提交意见',
    },

    commentAdd: {
      url: "comment/submit",
      auth: true,
      method: "POST"
      // desc: '提交评论',
    },

    commentList: {
      url: "comment/list",
      auth: true,
      method: "GET"
      // desc: '评论列表',
    }
  },

  /** 购物车 ↓ **/
  cart: {
    index: {
      url: "cart",
      auth: true,
      method: "POST"
      // desc: '购物车商品列表',
    },

    add: {
      url: "cart/add",
      auth: true,
      method: "POST"
      // desc: '添加购物车',
    },

    edit: {
      url: "cart/edit",
      auth: true,
      method: "POST"
      // desc: '编辑购物车',
    }
  },

  /** 订单 ↓ **/
  order: (0, _defineProperty2.default)({
    index: {
      url: "order/index",
      auth: true,
      method: "GET"
      // desc: '订单列表',
    },

    pre: {
      url: "order/pre",
      auth: true,
      method: "POST"
      // desc: '预备提交订单',
    },

    createOrder: {
      url: "order/createOrder",
      auth: true,
      method: "POST"
      // desc: '提交订单',
    },

    detail: {
      url: "order/detail",
      auth: true,
      method: "GET"
      // desc: '订单详情',
    },

    itemDetail: {
      url: "order/itemDetail",
      auth: true,
      method: "GET"
      // desc: '订单商品详情',
    },

    confirm: {
      url: "order/confirm",
      auth: true,
      method: "POST"
      // desc: '确认收货',
    },

    cancel: {
      url: "order/cancel",
      auth: true,
      method: "POST"
      // desc: '取消订单',
    },

    comment: {
      url: "order/comment",
      auth: true,
      method: "POST"
      // desc: '评价商品',
    },

    coupons: {
      url: "order/coupons",
      auth: true,
      method: "POST"
      // desc: '商品可用优惠券',
    },

    aftersale: {
      url: "order_aftersale/aftersale",
      auth: true,
      method: "POST"
      // desc: '申请售后',
    },

    aftersaleList: {
      url: "order_aftersale/index",
      auth: true,
      method: "GET"
      // desc: '售后列表',
    },

    aftersaleDetail: {
      url: "order_aftersale/detail",
      auth: true,
      method: "GET"
      // desc: '售后列表详情',
    },

    deleteOrder: {
      url: "order/delete",
      auth: true,
      method: "POST"
      // desc: '删除订单',
    },

    deleteAftersaleOrder: {
      url: "order_aftersale/delete",
      auth: true,
      method: "POST"
      // desc: '删除售后订单',
    },

    cancelAftersaleOrder: {
      url: "order_aftersale/cancel",
      auth: true,
      method: "POST"
      // desc: '取消售后订单',
    },

    expressList: {
      url: "order_express/index",
      auth: true,
      method: "GET"
      // desc: '包裹列表',
    },

    expressDetail: {
      url: "order_express/detail",
      auth: true,
      method: "GET"
      // desc: '包裹详情',
    }
  }, "itemDetail", {
    url: "order/itemDetail",
    auth: true,
    method: "GET"
    // desc: '订单商品详情',
  }),

  /** 支付金钱 ↓ **/
  money: {
    prepay: {
      url: "pay/prepay",
      auth: true,
      method: "POST"
      // desc: '发起支付',
    },

    walletApply: {
      url: "user_wallet_apply/apply",
      auth: true,
      method: "POST"
      // desc: '申请提现',end
    },

    walletRule: {
      url: "user_wallet_apply/rule",
      auth: true,
      method: "GET"
      // desc: '提现规则',end
    },

    walletLog: {
      url: "user_wallet_log",
      auth: true,
      method: "GET"
      // desc: '钱包,积分明细',end
    },

    bankInfo: {
      url: "user_bank/info",
      auth: true,
      method: "GET"
      // desc: '银行卡信息',end
    },

    bankEdit: {
      url: "user_bank/edit",
      auth: true,
      method: "POST"
      // desc: '编辑银行卡信息',end
    },

    withdrawLog: {
      url: "user_wallet_apply/index",
      auth: true,
      method: "GET"
      // desc: '提现记录',end
    },

    recharge: {
      url: "trade_order/recharge",
      auth: true,
      method: "POST"
      // desc: '充值'
    },

    rechargeLog: {
      url: "trade_order/index",
      auth: true,
      method: "GET"
      // desc: '充值记录'
    },

    rechargeDetail: {
      url: "trade_order/detail",
      auth: true,
      method: "GET"
      // desc: '充值订单详情'
    }
  },

  /** 优惠券 ↓ **/
  coupons: {
    list: {
      url: "coupons",
      auth: false,
      method: "GET"
      // desc: '个人中心优惠券列表',
    },

    templateList: {
      url: "coupons/lists",
      auth: false,
      method: "GET"
      // desc: '首页优惠券',
    },

    get: {
      url: "coupons/get",
      auth: true,
      method: "GET"
      // desc: '领取',
    },

    detail: {
      url: "coupons/detail",
      auth: true,
      method: "GET"
      // desc: '购物券详情',
    },

    goods: {
      url: "coupons/goods",
      auth: false,
      method: "GET"
      // desc: '适用商品',
    }
  },

  /** 分销 ↓ **/
  commission: {
    auth: {
      url: "commission.agent/info",
      auth: true,
      method: "GET"
      // desc: '分销身份鉴权',
    },

    log: {
      url: "commission.log/index",
      auth: true,
      method: "GET"
      // desc: '分销动态',
    },

    goods: {
      url: "commission.goods/index",
      auth: true,
      method: "GET"
      // desc: '分销商品',
    },

    ranking: {
      url: "commission.agent/ranking",
      auth: true,
      method: "GET"
      // desc: '分销商排行榜',
    },

    form: {
      url: "commission.agent/agentForm",
      auth: true,
      method: "GET"
      // desc: '申请成为分销商表单',
    },

    apply: {
      url: "commission.agent/applyForm",
      auth: true,
      method: "POST"
      // desc: '申请成为分销商',
    },

    team: {
      url: "commission.agent/team",
      auth: true,
      method: "GET"
      // desc: '我的团队',
    },

    share: {
      url: "share/index",
      auth: true,
      method: "GET"
      // desc: '分享记录',
    },

    orderLog: {
      url: "commission.order/index",
      auth: true,
      method: "GET"
      // desc: '分销订单',
    },

    rewardLog: {
      url: "commission.reward/index",
      auth: true,
      method: "GET"
      // desc: '佣金记录',
    },

    lv: {
      url: "commission.agent/level",
      auth: true,
      method: "GET"
      // desc: '佣金记录',
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 42:
/*!***********************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/share/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _store = _interopRequireDefault(__webpack_require__(/*! @/shopro/store */ 35));
var _platform = _interopRequireDefault(__webpack_require__(/*! @/shopro/platform */ 40));
/**
 * Share v1.0.0
 * @Class Share
 * @description shopro-share 1.0.0 分享方法
 * @Author lidongtony
 * @Date 2021-04-19
 * @Email lidongtony@qq.com
 */
var _default = {
  // 设置分享信息
  setShareInfo: function setShareInfo() {
    var _store$getters$initSh;
    var scene = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      title: '',
      // 自定义分享标题
      desc: '',
      // 自定义描述
      image: '',
      // 自定义分享图片
      params: {} // 自定义分享参数
    };

    var that = this;
    var shareInfo = {
      title: '',
      // 分享标题
      desc: '',
      // 描述
      image: '',
      // 分享图片
      path: '',
      // 分享路径
      copyLink: '',
      // 复制链接
      query: '' // 分享参数
    };

    var shareConfig = _store.default.getters.initShare;
    var shopConfig = _store.default.getters.initShop;
    if ((shopConfig === null || shopConfig === void 0 ? void 0 : shopConfig.domain) === '' || shareConfig.title === '' || shareConfig.image === '') {
      throw '请在商城配置中设置商城域名和分享信息';
    }

    // 设置自定义分享信息
    shareInfo.title = scene.title !== '' ? scene.title : shareConfig.title;
    shareInfo.image = scene.image !== '' ? scene.image : shareConfig.image;
    shareInfo.desc = scene.desc !== '' ? scene.desc : '';

    // 自动拼接分享用户参数
    var query = that.setShareQuery(scene.params);
    shareInfo.path = "/pages/index/index?".concat(query);
    shareInfo.copyLink = "".concat((_store$getters$initSh = _store.default.getters.initShop) === null || _store$getters$initSh === void 0 ? void 0 : _store$getters$initSh.domain, "?").concat(query);
    shareInfo.query = query;
    _store.default.commit("shareInfo", shareInfo);
    return shareInfo;
  },
  // 自定义分享参数拼接: 由于小程序码长度限制(B码最大32位长度),为了确保分享参数最大可扩展性，使用spm方法拼接 shareUserId.page.pageId.platform.from ----例 spm=88888888.3.1666666.3.2 即为ID为88888888用户通过微信网页平台生成了拼团ID为1666666的拼团分享海报
  setShareQuery: function setShareQuery(params) {
    var shareUserId = '0'; // 设置分享者用户ID
    if (params.shareId === undefined) {
      if (_store.default.getters.isLogin) {
        shareUserId = _store.default.getters.userInfo.id;
      }
    }
    var page = '1'; // 页面类型: 1=首页(默认),2=商品,3=拼团...按需扩展
    if (params.page !== undefined) {
      page = params.page;
    }
    var pageId = '0'; // 设置页面ID: 如商品ID、拼团ID等
    if (params.pageId !== undefined) {
      pageId = params.pageId;
    }
    var platform = ['H5', 'wxOfficialAccount', 'wxMiniProgram', 'App'].indexOf(_platform.default.get()) + 1; // 设置分享的平台渠道: 1=H5,2=微信公众号网页,3=微信小程序,4=App,...按需扩展
    var from = '1'; // 设置分享方式: 1=直接转发,2=海报,3=链接,...按需扩展
    if (params.from !== undefined) {
      from = params.from;
    }
    //spmParam = ...  可按需扩展
    return "spm=".concat(shareUserId, ".").concat(page, ".").concat(pageId, ".").concat(platform, ".").concat(from);
  },
  getShareQuery: function getShareQuery(spm) {
    var shareParams = {};
    var shareParamsArray = spm.split('.');
    if (shareParamsArray[0] != '0') {
      shareParams.shareUserId = shareParamsArray[0];
    }
    switch (shareParamsArray[1]) {
      case '1':
        // 默认首页不跳转
        break;
      case '2':
        shareParams.page = '/pages/goods/detail';
        break;
      case '3':
        shareParams.page = '/pages/activity/groupon/detail';
        break;
    }
    if (shareParamsArray[2] !== '0') {
      shareParams.pageId = shareParamsArray[2];
    }
    shareParams.platform = shareParamsArray[3];
    shareParams.from = shareParamsArray[4];
    return shareParams;
  }
};
exports.default = _default;

/***/ }),

/***/ 43:
/*!******************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/store/modules/user.js ***!
  \******************************************************************/
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
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 28));
var _index = _interopRequireDefault(__webpack_require__(/*! @/shopro/request/index */ 38));
var _store = _interopRequireDefault(__webpack_require__(/*! @/shopro/store */ 35));
var _tools = _interopRequireDefault(__webpack_require__(/*! @/shopro/utils/tools */ 44));
var _wechat = _interopRequireDefault(__webpack_require__(/*! @/shopro/wechat/wechat */ 48));
var _share = _interopRequireDefault(__webpack_require__(/*! @/shopro/share */ 42));
// 用户数据模块

var state = {
  token: uni.getStorageSync("token") || "",
  isLogin: uni.getStorageSync("isLogin") || false,
  // 是否登陆
  userInfo: uni.getStorageSync("userInfo") || {},
  // 用户信息
  agentInfo: {},
  //分销商信息
  userData: {},
  //用户其他相关信息
  subscribeMessageIdsMap: [],
  //小程序订阅消息模板ids
  authType: '' // smsLogin:手机号登录注册, accountLogin:密码登录, forgotPwd:忘记密码, changePwd:修改密码, bindMobile:绑定手机号
};

var getters = {
  token: function token(state) {
    return state.token;
  },
  isLogin: function isLogin(state) {
    return state.isLogin;
  },
  userInfo: function userInfo(state) {
    return state.userInfo;
  },
  agentInfo: function agentInfo(state) {
    return state.agentInfo;
  },
  userOtherData: function userOtherData(state) {
    return state.userData;
  },
  authType: function authType(state) {
    return state.authType;
  },
  subscribeMessageIdsMap: function subscribeMessageIdsMap(state) {
    return state.subscribeMessageIdsMap;
  }
};
var actions = {
  // 获取用户信息
  getUserInfo: function getUserInfo(_ref) {
    var commit = _ref.commit,
      dispatch = _ref.dispatch,
      getters = _ref.getters,
      state = _ref.state;
    var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return new Promise(function (resolve, reject) {
      token && uni.setStorageSync('token', token);
      (0, _index.default)('user.info').then(function (res) {
        if (res.code === 1) {
          var lastLoginStatus = getters.isLogin;
          commit('userInfo', res.data);
          commit('isLogin', true);
          dispatch('showAuthModal', '');
          !lastLoginStatus && _share.default.setShareInfo();
          // 存在分享信息 添加分享记录
          var spm = uni.getStorageSync('spm');
          if (spm) {
            (0, _index.default)('common.shareAdd', {
              spm: spm
            });
            uni.removeStorageSync('spm');
          }
          resolve(res.data);
        }
      }).then(function () {
        // 只有在登录的时候请求购物车信息，订单信息，获取登录信息之后。
        token && dispatch('getCartList');
        token && dispatch('getUserData');
      }).catch(function (e) {
        reject(e);
      });
    });
  },
  // 用户其他相关信息
  getUserData: function getUserData(_ref2) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      (0, _index.default)('user.userData').then(function (res) {
        commit('USER_DATA', res.data);
        resolve(res);
      }).catch(function (e) {
        reject(e);
      });
    });
  },
  // 获取分销商身份信息
  getAgent: function getAgent(_ref3) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      (0, _index.default)('commission.auth').then(function (res) {
        if (res.code === 1) {
          commit('AGENT_INFO', res.data.data);
        }
        resolve(res);
      }).catch(function (e) {
        reject(e);
      });
    });
  },
  // 自动登录
  autoLogin: function autoLogin(_ref4) {
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _getters$initWechat, _getters$initWechat2;
      var getters, dispatch, token;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getters = _ref4.getters, dispatch = _ref4.dispatch;
              if (!((_getters$initWechat = getters.initWechat) !== null && _getters$initWechat !== void 0 && _getters$initWechat.autologin && !getters.isLogin)) {
                _context.next = 12;
                break;
              }
              // 微信开启自动登录 并且当前未登录，进入自动登录流程
              token = '';
              _context.next = 5;
              return _wechat.default.getWxMiniProgramSessionKey(true);
            case 5:
              token = _context.sent;
              _context.t0 = token;
              if (!_context.t0) {
                _context.next = 10;
                break;
              }
              _context.next = 10;
              return dispatch('getUserInfo', token);
            case 10:
              _context.next = 15;
              break;
            case 12:
              if (!getters.isLogin) {
                _context.next = 15;
                break;
              }
              _context.next = 15;
              return dispatch('getUserInfo');
            case 15:
              _share.default.setShareInfo();
              // 初始化小程序session_key
              if ((_getters$initWechat2 = getters.initWechat) !== null && _getters$initWechat2 !== void 0 && _getters$initWechat2.autologin) {
                _context.next = 19;
                break;
              }
              _context.next = 19;
              return _wechat.default.getWxMiniProgramSessionKey(false);
            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  // 登录弹窗控制
  showAuthModal: function showAuthModal(_ref5) {
    var commit = _ref5.commit;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accountLogin';
    commit('AUTH_TYPE', type);
  },
  // 退出登录
  logout: function logout(_ref6) {
    var commit = _ref6.commit,
      dispatch = _ref6.dispatch;
    uni.getStorageSync('token') && (0, _index.default)('user.logout');
    commit('token', "");
    uni.removeStorageSync('chatSessionId');
    commit('isLogin', false);
    commit('userInfo', {});
    commit('CART_LIST', []);
    commit('USER_DATA', {});
    // 重置全局分享信息
    _share.default.setShareInfo();
  },
  // 获取订阅消息模板ids;
  getMessageIds: function getMessageIds(_ref7) {
    var commit = _ref7.commit,
      state = _ref7.state;
    (0, _index.default)('user.messageIds').then(function (res) {
      commit('formatMessage', res.data);
      Promise.resolve(res.data);
    }).catch(function (e) {
      Promise.reject(e);
    });
  }
};
var mutations = {
  token: function token(state, payload) {
    state.token = payload;
    uni.setStorageSync("token", payload);
  },
  // 登录态
  isLogin: function isLogin(state, data) {
    state.isLogin = data;
    uni.setStorageSync('isLogin', data);
  },
  // 用户信息
  userInfo: function userInfo(state, data) {
    state.userInfo = data;
    uni.setStorageSync("userInfo", data);
  },
  // 分销商信息
  AGENT_INFO: function AGENT_INFO(state, data) {
    state.agentInfo = data;
  },
  // 小程序订阅消息模板ids
  MESSAGE_IDS: function MESSAGE_IDS(state, data) {
    state.subscribeMessageIds = data;
  },
  USER_DATA: function USER_DATA(state, data) {
    state.userData = data;
  },
  AUTH_TYPE: function AUTH_TYPE(state, data) {
    data ? uni.hideTabBar() : uni.showTabBar();
    state.authType = data;
  },
  // 订阅消息
  subscribeMessage: function subscribeMessage(state, type) {
    var arr = state.subscribeMessageIdsMap[type];
    arr.length && uni.requestSubscribeMessage({
      tmplIds: arr,
      success: function success(res) {
        console.log(res);
      },
      fail: function fail(err) {
        console.log(err);
      }
    });
  },
  // 解析订阅消息数据
  formatMessage: function formatMessage(state, messageIdsObj) {
    // 各场景下用到的订阅模板
    var typeMap = {
      'result': ['order_sended'],
      //支付成功
      'grouponResult': ['groupon_success', 'groupon_fail', 'order_sended'],
      //拼团支付成功后
      'aftersale': ['refund_agree', 'aftersale_change', 'wallet_change'],
      //点击售后
      'wallet': ['score_change', 'wallet_apply', 'wallet_change'],
      //提现提醒
      'store': ['store_order_new'],
      //门店新订单通知
      'storeApply': ['store_apply'] //门店申请通知
    };

    var idsMap = {};
    Object.keys(typeMap).forEach(function (key) {
      idsMap[key] = [];
      typeMap[key].forEach(function (item) {
        idsMap[key].push(messageIdsObj[item]);
      });
    });
    state.subscribeMessageIdsMap = idsMap;
  }
};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 44:
/*!***********************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/utils/tools.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _env = __webpack_require__(/*! @/env */ 34);
var _router = __webpack_require__(/*! @/shopro/router */ 45);
var _default = {
  /**
   * 跳转再封装,主要是为了兼容外链。
   * @param {String} path - 跳转路径
   * @param {isTabbar} isTabbar - 是否是底部导航
   */
  routerTo: function routerTo(path, isTabbar) {
    if (path) {
      // 是否跳转外部链接
      if (~path.indexOf('http') || ~path.indexOf('www')) {
        _router.router.push({
          path: '/pages/public/webview',
          query: {
            'webviewPath': path
          }
        });
        return false;
      }
      if (isTabbar) {
        _router.router.replaceAll(path);
      } else {
        path.includes('/pages/index') && !path.includes('/pages/index/view') ? _router.router.replaceAll(path) : _router.router.push(path);
      }
    } else {
      console.log("%cerr:\u6CA1\u6709\u586B\u5199\u8DF3\u8F6C\u8DEF\u5F84", 'color:green;background:yellow');
    }
  },
  /**
   * 图片处理-预览图片
   * @param {Array} urls - 图片列表
   * @param {Number} current - 首个预览下标
   */
  previewImage: function previewImage() {
    var urls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    uni.previewImage({
      urls: urls,
      current: current,
      indicator: 'default',
      loop: true,
      fail: function fail(err) {
        console.log('previewImage出错', urls, err);
      }
    });
  },
  /**
   * 数据分组
   * @param {Array} oArr - 原数组列表
   * @param {Number} length - 单个数组长度
   * @return {Array}  arr - 分组后的新数组
   */
  splitData: function splitData() {
    var oArr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var arr = [];
    var minArr = [];
    oArr.forEach(function (c) {
      if (minArr.length === length) {
        minArr = [];
      }
      if (minArr.length === 0) {
        arr.push(minArr);
      }
      minArr.push(c);
    });
    return arr;
  },
  /**
   * 剩余时间格式化
   * @param {Number} t - 剩余多少秒
   * @return {Object}  format - 格式后的天时分秒对象
   */
  format: function format(t) {
    var format = {
      d: '00',
      h: '00',
      m: '00',
      s: '00'
    };
    if (t > 0) {
      var d = Math.floor(t / 86400);
      var h = Math.floor(t / 3600 % 24);
      var m = Math.floor(t / 60 % 60);
      var s = Math.floor(t % 60);
      format.d = d < 10 ? '0' + d : d;
      format.h = h < 10 ? '0' + h : h;
      format.m = m < 10 ? '0' + m : m;
      format.s = s < 10 ? '0' + s : s;
    }
    return format;
  },
  /**
   * 打电话
   * @param {String<Number>} phoneNumber - 数字字符串
   */
  callPhone: function callPhone() {
    var phoneNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var num = phoneNumber.toString();
    uni.makePhoneCall({
      phoneNumber: num,
      fail: function fail(err) {
        console.log('makePhoneCall出错', err);
      }
    });
  },
  /**
   * 微信头像
   * @param {String} url -图片地址
   */
  checkMPUrl: function checkMPUrl(url) {
    if (url.substring(0, 4) === 'http' && url.substring(0, 5) !== 'https' && url.substring(0, 12) !== 'http://store' && url.substring(0, 10) !== 'http://tmp' && url.substring(0, 10) !== 'http://usr') {
      url = 'https' + url.substring(4, url.length);
    }
    return url;
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 45:
/*!************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/router/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "RouterMount", {
  enumerable: true,
  get: function get() {
    return _uniSimpleRouter.RouterMount;
  }
});
exports.router = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _uniSimpleRouter = __webpack_require__(/*! ./uni-simple-router.js */ 46);
var _store = _interopRequireDefault(__webpack_require__(/*! @/shopro/store */ 35));
// 路由

var router = (0, _uniSimpleRouter.createRouter)({
  platform: "mp-weixin",
  applet: {
    animationDuration: 0 //默认 300ms 
  },

  routerErrorEach: function routerErrorEach(_ref) {
    var type = _ref.type,
      msg = _ref.msg;
    switch (type) {
      case 3:
        // APP退出应用

        break;
      case 2:
      case 0:
        router.$lockStatus = false;
        break;
      default:
        break;
    }
  },
  // 通配符，非定义页面，跳转404
  routes: [].concat((0, _toConsumableArray2.default)([{"path":"/pages/index/index","aliasPath":"/","meta":{"auth":false,"async":true,"title":"首页","group":"商城"}},{"path":"/pages/index/category","meta":{"auth":false,"async":true,"title":"分类","group":"商城"}},{"path":"/pages/index/cart","meta":{"auth":false,"async":true,"title":"购物车","group":"商城"}},{"path":"/pages/index/user","meta":{"auth":false,"async":true,"title":"我的","group":"商城"}},{"path":"/pages/index/view","name":"view","meta":{"auth":false,"async":true,"title":"自定义页面","group":"商城"}},{"path":"/pages/activity/sign/index","meta":{"auth":true,"async":true,"title":"签到中心","group":"应用"}},{"path":"/pages/activity/seckill/list","meta":{"auth":false,"async":true,"title":"限时秒杀","group":"秒杀"}},{"path":"/pages/activity/groupon/list","meta":{"auth":false,"async":true,"title":"今日必拼","group":"拼团"}},{"path":"/pages/activity/groupon/detail","meta":{"auth":false,"async":false,"title":"拼团详情","group":"拼团"}},{"path":"/pages/activity/groupon/my-groupon","meta":{"auth":true,"async":true,"title":"我的拼团","group":"拼团"}},{"path":"/pages/activity/discounts/list","meta":{"auth":false,"async":false,"title":"优惠活动商品","group":"活动"}},{"path":"/pages/app/score/list","meta":{"auth":false,"async":true,"title":"积分商品","group":"积分"}},{"path":"/pages/app/coupon/list","meta":{"auth":true,"async":true,"title":"优惠券中心","group":"优惠券"}},{"path":"/pages/app/coupon/detail","meta":{"auth":true,"async":true,"title":"优惠券详情","group":"优惠券"}},{"path":"/pages/app/merchant/index","meta":{"auth":true,"async":false,"title":"门店中心","group":"门店"}},{"path":"/pages/app/merchant/apply","meta":{"auth":true,"async":true,"title":"门店入驻","group":"门店"}},{"path":"/pages/app/merchant/detail","meta":{"auth":true,"async":false,"title":"订单详情","group":"订单"}},{"path":"/pages/app/merchant/info","meta":{"auth":true,"async":false,"title":"门店详情","group":"门店"}},{"path":"/pages/app/merchant/list","meta":{"auth":true,"async":true,"title":"我的门店","group":"门店"}},{"path":"/pages/app/commission/index","meta":{"auth":true,"async":true,"title":"分销中心","group":"分销"}},{"path":"/pages/app/commission/team","meta":{"auth":true,"async":true,"title":"我的团队","group":"分销"}},{"path":"/pages/app/commission/commission-log","meta":{"auth":true,"async":true,"title":"佣金明细","group":"分销"}},{"path":"/pages/app/commission/order","meta":{"auth":true,"async":true,"title":"分销订单","group":"分销"}},{"path":"/pages/app/commission/goods","meta":{"auth":true,"async":true,"title":"推广商品","group":"分销"}},{"path":"/pages/app/commission/apply","meta":{"auth":true,"async":true,"title":"申请分销商","group":"分销"}},{"path":"/pages/app/commission/rankings","meta":{"auth":true,"async":true,"title":"分销排行","group":"分销"}},{"path":"/pages/app/commission/share-log","meta":{"auth":true,"async":false,"title":"分享记录","group":"分销"}},{"path":"/pages/goods/list","meta":{"auth":false,"async":true,"title":"商品列表","group":"商品"}},{"path":"/pages/goods/detail","meta":{"auth":false,"async":true,"title":"商品详情","group":"商品"}},{"path":"/pages/goods/comment/add-comment","meta":{"auth":false,"async":false,"title":"评价","group":"商品"}},{"path":"/pages/goods/comment/comment-list","meta":{"auth":false,"async":false,"title":"评价列表","group":"商品"}},{"path":"/pages/order/confirm","meta":{"auth":true,"async":false,"title":"确认订单","group":"订单"}},{"path":"/pages/order/payment/method","meta":{"auth":true,"async":false,"title":"收银台","group":"订单"}},{"path":"/pages/order/payment/result","meta":{"auth":false,"async":false,"title":"支付结果","group":"订单"}},{"path":"/pages/order/list","meta":{"auth":true,"async":true,"title":"订单列表","group":"订单"}},{"path":"/pages/order/detail","meta":{"auth":true,"async":false,"title":"订单详情","group":"订单"}},{"path":"/pages/order/after-sale/detail","meta":{"auth":true,"async":false,"title":"售后详情","group":"订单"}},{"path":"/pages/order/after-sale/list","meta":{"auth":true,"async":true,"title":"售后列表","group":"订单"}},{"path":"/pages/order/after-sale/log","meta":{"auth":true,"async":false,"title":"售后记录","group":"订单"}},{"path":"/pages/order/after-sale/refund","meta":{"auth":true,"async":false,"title":"申请售后","group":"订单"}},{"path":"/pages/order/express/distribution-detail","meta":{"auth":true,"async":false,"title":"配送详情","group":"订单"}},{"path":"/pages/order/express/express-detail","meta":{"auth":true,"async":false,"title":"物流详情","group":"订单"}},{"path":"/pages/order/express/express-list","meta":{"auth":true,"async":false,"title":"包裹列表","group":"订单"}},{"path":"/pages/order/express/store-address","meta":{"auth":true,"async":false,"title":"选择自提点","group":"订单"}},{"path":"/pages/public/faq","meta":{"auth":false,"async":true,"title":"常见问题","group":"通用"}},{"path":"/pages/public/feedback","meta":{"auth":true,"async":true,"title":"问题反馈","group":"通用"}},{"path":"/pages/public/chat/index","meta":{"auth":true,"async":true,"title":"客服","group":"通用"}},{"path":"/pages/public/search","meta":{"auth":false,"async":true,"title":"搜索","group":"通用"}},{"path":"/pages/public/richtext","meta":{"auth":false,"async":true,"title":"富文本","group":"通用"}},{"path":"/pages/public/webview","meta":{"auth":false,"async":true,"title":"外链","group":"通用"}},{"path":"/pages/public/404","name":"404"},{"path":"/pages/public/loading"},{"path":"/pages/user/info","meta":{"auth":true,"async":true,"title":"个人信息","group":"用户"}},{"path":"/pages/user/set","meta":{"auth":false,"async":true,"title":"系统设置","group":"通用"}},{"path":"/pages/user/view-log","meta":{"auth":true,"async":true,"title":"浏览足迹","group":"用户"}},{"path":"/pages/user/wallet/index","meta":{"auth":true,"async":true,"title":"钱包","group":"用户"}},{"path":"/pages/user/wallet/withdraw","meta":{"auth":true,"async":true,"title":"提现","group":"用户"}},{"path":"/pages/user/wallet/withdraw-log","meta":{"auth":true,"async":true,"title":"提现记录","group":"用户"}},{"path":"/pages/user/wallet/top-up","meta":{"auth":true,"async":true,"title":"充值","group":"用户"}},{"path":"/pages/user/wallet/top-up-log","meta":{"auth":true,"async":true,"title":"充值记录","group":"用户"}},{"path":"/pages/user/wallet/score-balance","meta":{"auth":true,"async":true,"title":"积分余额","group":"积分"}},{"path":"/pages/user/address/list","meta":{"auth":true,"async":true,"title":"收货地址","group":"用户"}},{"path":"/pages/user/address/edit","meta":{"auth":true,"async":false,"title":"修改地址","group":"用户"}},{"path":"/pages/user/favorite","meta":{"auth":true,"async":true,"title":"我的收藏","group":"用户"}}]), [{
    path: '*',
    redirect: function redirect(to) {
      return {
        name: '404'
      };
    }
  }])
});

//全局路由前置守卫
exports.router = router;
router.beforeEach(function (to, from, next) {
  // 权限控制登录
  if (to.meta && to.meta.auth && !_store.default.getters.isLogin) {
    _store.default.dispatch('showAuthModal');
    next(false);
  } else if (_store.default.getters.initRecharge.enable !== '1' && to.path === '/pages/user/wallet/top-up') {
    // 充值入口控制
    next(false);
  } else {
    next();
  }
});

/***/ }),

/***/ 46:
/*!************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/router/uni-simple-router.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(self, function () {
  return e = {
    779: function _(e, t, r) {
      var o = r(173);
      e.exports = function e(t, r, n) {
        return o(r) || (n = r || n, r = []), n = n || {}, t instanceof RegExp ? function (e, t) {
          var r = e.source.match(/\((?!\?)/g);
          if (r) for (var o = 0; o < r.length; o++) {
            t.push({
              name: o,
              prefix: null,
              delimiter: null,
              optional: !1,
              repeat: !1,
              partial: !1,
              asterisk: !1,
              pattern: null
            });
          }
          return c(e, t);
        }(t, r) : o(t) ? function (t, r, o) {
          for (var n = [], a = 0; a < t.length; a++) {
            n.push(e(t[a], r, o).source);
          }
          return c(new RegExp("(?:" + n.join("|") + ")", s(o)), r);
        }(t, r, n) : function (e, t, r) {
          return f(a(e, r), t, r);
        }(t, r, n);
      }, e.exports.parse = a, e.exports.compile = function (e, t) {
        return u(a(e, t), t);
      }, e.exports.tokensToFunction = u, e.exports.tokensToRegExp = f;
      var n = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
      function a(e, t) {
        for (var r, o = [], a = 0, i = 0, u = "", c = t && t.delimiter || "/"; null != (r = n.exec(e));) {
          var s = r[0],
            f = r[1],
            h = r.index;
          if (u += e.slice(i, h), i = h + s.length, f) u += f[1];else {
            var v = e[i],
              y = r[2],
              g = r[3],
              d = r[4],
              m = r[5],
              b = r[6],
              O = r[7];
            u && (o.push(u), u = "");
            var P = null != y && null != v && v !== y,
              k = "+" === b || "*" === b,
              j = "?" === b || "*" === b,
              w = r[2] || c,
              R = d || m;
            o.push({
              name: g || a++,
              prefix: y || "",
              delimiter: w,
              optional: j,
              repeat: k,
              partial: P,
              asterisk: !!O,
              pattern: R ? p(R) : O ? ".*" : "[^" + l(w) + "]+?"
            });
          }
        }
        return i < e.length && (u += e.substr(i)), u && o.push(u), o;
      }
      function i(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function u(e, t) {
        for (var r = new Array(e.length), n = 0; n < e.length; n++) {
          "object" == _typeof(e[n]) && (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", s(t)));
        }
        return function (t, n) {
          for (var a = "", u = t || {}, l = (n || {}).pretty ? i : encodeURIComponent, p = 0; p < e.length; p++) {
            var c = e[p];
            if ("string" != typeof c) {
              var s,
                f = u[c.name];
              if (null == f) {
                if (c.optional) {
                  c.partial && (a += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (o(f)) {
                if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                if (0 === f.length) {
                  if (c.optional) continue;
                  throw new TypeError('Expected "' + c.name + '" to not be empty');
                }
                for (var h = 0; h < f.length; h++) {
                  if (s = l(f[h]), !r[p].test(s)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(s) + "`");
                  a += (0 === h ? c.prefix : c.delimiter) + s;
                }
              } else {
                if (s = c.asterisk ? encodeURI(f).replace(/[?#]/g, function (e) {
                  return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                }) : l(f), !r[p].test(s)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + s + '"');
                a += c.prefix + s;
              }
            } else a += c;
          }
          return a;
        };
      }
      function l(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function p(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function c(e, t) {
        return e.keys = t, e;
      }
      function s(e) {
        return e && e.sensitive ? "" : "i";
      }
      function f(e, t, r) {
        o(t) || (r = t || r, t = []);
        for (var n = (r = r || {}).strict, a = !1 !== r.end, i = "", u = 0; u < e.length; u++) {
          var p = e[u];
          if ("string" == typeof p) i += l(p);else {
            var f = l(p.prefix),
              h = "(?:" + p.pattern + ")";
            t.push(p), p.repeat && (h += "(?:" + f + h + ")*"), i += h = p.optional ? p.partial ? f + "(" + h + ")?" : "(?:" + f + "(" + h + "))?" : f + "(" + h + ")";
          }
        }
        var v = l(r.delimiter || "/"),
          y = i.slice(-v.length) === v;
        return n || (i = (y ? i.slice(0, -v.length) : i) + "(?:" + v + "(?=$))?"), i += a ? "$" : n && y ? "" : "(?=" + v + "|$)", c(new RegExp("^" + i, s(r)), t);
      }
    },
    173: function _(e) {
      e.exports = Array.isArray || function (e) {
        return "[object Array]" == Object.prototype.toString.call(e);
      };
    },
    844: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
        return (o = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.buildVueRouter = t.buildVueRoutes = void 0;
      var n = r(366),
        a = r(883),
        i = r(789),
        u = r(169);
      t.buildVueRoutes = function (e, t) {
        for (var r = e.routesMap, o = r.pathMap, l = r.finallyPathList, p = Object.keys(t), c = 0; c < p.length; c++) {
          var s = p[c],
            f = o[s],
            h = t[s];
          if (f) {
            var v = i.getRoutePath(f, e).finallyPath;
            if (v instanceof Array) throw new Error("非 vueRouterDev 模式下，alias、aliasPath、path 无法提供数组类型！ " + JSON.stringify(f));
            null != f.name && (h.name = f.name);
            var y = h.path,
              g = h.alias;
            delete h.alias, h.path = v, "/" === y && null != g && (h.alias = g, h.path = y), f.beforeEnter && (h.beforeEnter = function (t, r, o) {
              u.onTriggerEachHook(t, r, e, n.hookToggle.enterHooks, o);
            });
          } else a.warn(s + " 路由地址在路由表中未找到，确定是否传递漏啦", e, !0);
        }
        return l.includes("*") && (t["*"] = o["*"]), t;
      }, t.buildVueRouter = function (e, t, r) {
        var n;
        n = "[object Array]" === i.getDataType(r) ? r : Object.values(r);
        var a = e.options.h5,
          u = a.scrollBehavior,
          l = a.fallback,
          p = t.options.scrollBehavior;
        t.options.scrollBehavior = function (e, t, r) {
          return p && p(e, t, r), u(e, t, r);
        }, t.fallback = l;
        var c = new t.constructor(o(o({}, e.options.h5), {
          base: t.options.base,
          mode: t.options.mode,
          routes: n
        }));
        t.matcher = c.matcher;
      };
    },
    147: function _(e, t) {
      "use strict";

      var _r,
        o = this && this.__extends || (_r = function r(e, t) {
          return (_r = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (e, t) {
            e.__proto__ = t;
          } || function (e, t) {
            for (var r in t) {
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
          })(e, t);
        }, function (e, t) {
          function o() {
            this.constructor = e;
          }
          _r(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
        });
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.proxyH5Mount = t.proxyEachHook = t.MyArray = void 0;
      var n = function (e) {
        function t(r, o, n, a) {
          var i = e.call(this) || this;
          return i.router = r, i.vueEachArray = o, i.myEachHook = n, i.hookName = a, Object.setPrototypeOf(i, t.prototype), i;
        }
        return o(t, e), t.prototype.push = function (e) {
          var t = this;
          this.vueEachArray.push(e);
          var r = this.length;
          this[this.length] = function (e, o, n) {
            r > 0 ? t.vueEachArray[r](e, o, function () {
              n && n();
            }) : t.myEachHook(e, o, function (a) {
              !1 === a ? n(!1) : t.vueEachArray[r](e, o, function (e) {
                n(a);
              });
            }, t.router, !0);
          };
        }, t;
      }(Array);
      t.MyArray = n, t.proxyEachHook = function (e, t) {
        for (var r = ["beforeHooks", "afterHooks"], o = 0; o < r.length; o++) {
          var a = r[o],
            i = e.lifeCycle[a][0];
          if (i) {
            var u = t[a];
            t[a] = new n(e, u, i, a);
          }
        }
      }, t.proxyH5Mount = function (e) {
        var t;
        if (0 === e.mount.length) {
          if (null === (t = e.options.h5) || void 0 === t ? void 0 : t.vueRouterDev) return;
          navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && setTimeout(function () {
            if (document.getElementsByTagName("uni-page").length > 0) return !1;
            window.location.reload();
          }, 0);
        } else e.mount[0].app.$mount(), e.mount = [];
      };
    },
    814: function _(e, t) {
      "use strict";

      var r = this && this.__assign || function () {
        return (r = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.tabIndexSelect = t.runtimeQuit = t.registerLoddingPage = void 0;
      var o = null,
        n = null;
      t.registerLoddingPage = function (e) {
        if (e.options.registerLoadingPage) {
          var t = e.options.APP,
            o = t.loadingPageHook,
            n = t.loadingPageStyle;
          o(new plus.nativeObj.View("router-loadding", r({
            top: "0px",
            left: "0px",
            height: "100%",
            width: "100%"
          }, n())));
        }
      }, t.runtimeQuit = function (e) {
        void 0 === e && (e = "再按一次退出应用");
        var t = +new Date();
        o ? t - o < 1e3 && plus.runtime.quit() : (o = t, uni.showToast({
          title: e,
          icon: "none",
          position: "bottom",
          duration: 1e3
        }), setTimeout(function () {
          o = null;
        }, 1e3));
      }, t.tabIndexSelect = function (e, t) {
        if (!__uniConfig.tabBar || !Array.isArray(__uniConfig.tabBar.list)) return !1;
        for (var r = __uniConfig.tabBar.list, o = [], a = 0, i = 0; i < r.length; i++) {
          var u = r[i];
          if ("/" + u.pagePath !== e.path && "/" + u.pagePath !== t.path || (u.pagePath === t.path && (a = i), o.push(u)), 2 === o.length) break;
        }
        return 2 === o.length && (null == n && (n = uni.requireNativePlugin("uni-tabview")), n.switchSelect({
          index: a
        }), !0);
      };
    },
    334: function _(e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getEnterPath = void 0, t.getEnterPath = function (e, t) {
        switch (t.options.platform) {
          case "mp-alipay":
          case "mp-weixin":
          case "mp-toutiao":
          case "mp-qq":
            return e.$options.mpInstance.route;
          case "mp-baidu":
            return e.$options.mpInstance.is || e.$options.mpInstance.pageinstance.route;
        }
        return e.$options.mpInstance.route;
      };
    },
    282: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
          return (o = Object.assign || function (e) {
            for (var t, r = 1, o = arguments.length; r < o; r++) {
              for (var n in t = arguments[r]) {
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
            }
            return e;
          }).apply(this, arguments);
        },
        n = this && this.__rest || function (e, t) {
          var r = {};
          for (var o in e) {
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
          }
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {
              t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
            }
          }
          return r;
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.notCallProxyHook = t.proxyVueSortHookName = t.indexProxyHook = t.appProxyHook = t.lifeCycle = t.baseConfig = t.mpPlatformReg = void 0;
      var a = r(883);
      t.mpPlatformReg = "(^mp-weixin$)|(^mp-baidu$)|(^mp-alipay$)|(^mp-toutiao$)|(^mp-qq$)|(^mp-360$)", t.baseConfig = {
        h5: {
          paramsToQuery: !1,
          vueRouterDev: !1,
          vueNext: !1,
          mode: "hash",
          base: "/",
          linkActiveClass: "router-link-active",
          linkExactActiveClass: "router-link-exact-active",
          scrollBehavior: function scrollBehavior(e, t, r) {
            return {
              x: 0,
              y: 0
            };
          },
          fallback: !0
        },
        APP: {
          registerLoadingPage: !0,
          loadingPageStyle: function loadingPageStyle() {
            return JSON.parse('{"backgroundColor":"#FFF"}');
          },
          loadingPageHook: function loadingPageHook(e) {
            e.show();
          },
          launchedHook: function launchedHook() {
            plus.navigator.closeSplashscreen();
          },
          animation: {}
        },
        applet: {
          animationDuration: 300
        },
        platform: "h5",
        keepUniOriginNav: !1,
        debugger: !1,
        routerBeforeEach: function routerBeforeEach(e, t, r) {
          r();
        },
        routerAfterEach: function routerAfterEach(e, t) {},
        routerErrorEach: function routerErrorEach(e, t) {
          t.$lockStatus = !1, a.err(e, t, !0);
        },
        detectBeforeLock: function detectBeforeLock(e, t, r) {},
        routes: [{
          path: "/choose-location"
        }, {
          path: "/open-location"
        }, {
          path: "/preview-image"
        }]
      }, t.lifeCycle = {
        beforeHooks: [],
        afterHooks: [],
        routerBeforeHooks: [],
        routerAfterHooks: [],
        routerErrorHooks: []
      }, t.appProxyHook = {
        app: {
          created: [],
          beforeMount: [],
          mounted: [],
          onLaunch: [],
          onShow: [],
          onHide: [],
          beforeDestroy: [],
          destroyed: []
        }
      }, t.indexProxyHook = {
        app: t.appProxyHook.app,
        page: function (e) {
          e.onLaunch;
          var t = n(e, ["onLaunch"]);
          return o(o({}, t), {
            onLoad: [],
            onReady: [],
            onUnload: [],
            onResize: []
          });
        }(JSON.parse(JSON.stringify(t.appProxyHook.app))),
        component: []
      }, t.proxyVueSortHookName = {
        app: ["created", "beforeMount", "mounted", "onLaunch", "onShow", "onHide", "beforeDestroy", "destroyed"],
        page: ["created", "beforeMount", "mounted", "onLoad", "onReady", "onShow", "onResize", "onHide", "beforeDestroy", "destroyed", "onUnload"],
        component: ["created", "beforeMount", "mounted", "beforeDestroy", "destroyed"]
      }, t.notCallProxyHook = ["onHide", "beforeDestroy", "destroyed", "destroyed", "onUnload", "onResize"];
    },
    801: function _(e, t, r) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createRouteMap = void 0;
      var o = r(883),
        n = r(789);
      t.createRouteMap = function (e, t) {
        var r = {
          finallyPathList: [],
          finallyPathMap: Object.create(null),
          aliasPathMap: Object.create(null),
          pathMap: Object.create(null),
          vueRouteMap: Object.create(null),
          nameMap: Object.create(null)
        };
        return t.forEach(function (t) {
          var a = n.getRoutePath(t, e),
            i = a.finallyPath,
            u = a.aliasPath,
            l = a.path;
          if (null == l) throw new Error("请提供一个完整的路由对象，包括以绝对路径开始的 ‘path’ 字符串 " + JSON.stringify(t));
          if (i instanceof Array && !e.options.h5.vueRouterDev && "h5" === e.options.platform) throw new Error("非 vueRouterDev 模式下，route.alias 目前无法提供数组类型！ " + JSON.stringify(t));
          var p = i,
            c = u;
          "h5" !== e.options.platform && 0 !== p.indexOf("/") && "*" !== l && o.warn("当前路由对象下，route：" + JSON.stringify(t) + " 是否缺少了前缀 ‘/’", e, !0), r.finallyPathMap[p] || (r.finallyPathMap[p] = t, r.aliasPathMap[c] = t, r.pathMap[l] = t, r.finallyPathList.push(p), null != t.name && (r.nameMap[t.name] = t));
        }), r;
      };
    },
    662: function _(e, t, r) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.registerEachHooks = t.registerRouterHooks = t.registerHook = void 0;
      var o = r(366),
        n = r(169);
      function a(e, t) {
        e[0] = t;
      }
      t.registerHook = a, t.registerRouterHooks = function (e, t) {
        return a(e.routerBeforeHooks, function (e, r, o) {
          t.routerBeforeEach(e, r, o);
        }), a(e.routerAfterHooks, function (e, r) {
          t.routerAfterEach(e, r);
        }), a(e.routerErrorHooks, function (e, r) {
          t.routerErrorEach(e, r);
        }), e;
      }, t.registerEachHooks = function (e, t, r) {
        a(e.lifeCycle[t], function (e, a, i, u, l) {
          l ? n.onTriggerEachHook(e, a, u, o.hookToggle[t], i) : r(e, a, i);
        });
      };
    },
    460: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
        return (o = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initMixins = t.getMixins = void 0;
      var n = r(801),
        a = r(844),
        i = r(147),
        u = r(814),
        l = r(845),
        p = r(890),
        c = r(789),
        s = r(334),
        f = r(282),
        h = !1,
        v = !1,
        y = {
          app: !1,
          page: ""
        };
      function g(e, t) {
        var r = t.options.platform;
        return new RegExp(f.mpPlatformReg, "g").test(r) && (r = "app-lets"), {
          h5: {
            beforeCreate: function beforeCreate() {
              var e;
              if (this.$options.router) {
                t.$route = this.$options.router;
                var r = [];
                (null === (e = t.options.h5) || void 0 === e ? void 0 : e.vueRouterDev) ? r = t.options.routes : (r = n.createRouteMap(t, this.$options.router.options.routes).finallyPathMap, t.routesMap.vueRouteMap = r, a.buildVueRoutes(t, r)), a.buildVueRouter(t, this.$options.router, r), i.proxyEachHook(t, this.$options.router);
              }
            }
          },
          "app-plus": {
            beforeCreate: function beforeCreate() {
              h || (h = !0, l.proxyPageHook(this, t, "appProxyHook", "app"), u.registerLoddingPage(t));
            }
          },
          "app-lets": {
            beforeCreate: function beforeCreate() {
              var e = this.$options.mpType;
              "component" !== e || v ? "component" !== e && (y[e] || ("page" === e ? (y[e] = s.getEnterPath(this, t), t.enterPath = y[e]) : y[e] = !0, l.proxyPageHook(this, t, "appletsProxyHook", e))) : c.assertParentChild(y.page, this) && l.proxyPageHook(this, t, "appletsProxyHook", e);
            },
            onLoad: function onLoad() {
              c.voidFun("UNI-SIMPLE-ROUTER"), !v && c.assertParentChild(y.page, this) && (v = !0, p.forceGuardEach(t));
            }
          }
        }[r];
      }
      t.getMixins = g, t.initMixins = function (e, t) {
        var r = n.createRouteMap(t, t.options.routes);
        t.routesMap = r, e.mixin(o({}, g(0, t)));
      };
    },
    789: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
          return (o = Object.assign || function (e) {
            for (var t, r = 1, o = arguments.length; r < o; r++) {
              for (var n in t = arguments[r]) {
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
            }
            return e;
          }).apply(this, arguments);
        },
        n = this && this.__rest || function (e, t) {
          var r = {};
          for (var o in e) {
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
          }
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {
              t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
            }
          }
          return r;
        },
        a = this && this.__spreadArrays || function () {
          for (var e = 0, t = 0, r = arguments.length; t < r; t++) {
            e += arguments[t].length;
          }
          var o = Array(e),
            n = 0;
          for (t = 0; t < r; t++) {
            for (var a = arguments[t], i = 0, u = a.length; i < u; i++, n++) {
              o[n] = a[i];
            }
          }
          return o;
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.deepDecodeQuery = t.resolveAbsolutePath = t.assertParentChild = t.resetPageHook = t.callHook = t.replaceHook = t.lockDetectWarn = t.deepClone = t.baseClone = t.assertDeepObject = t.paramsToQuery = t.forMatNextToFrom = t.urlToJson = t.getUniCachePage = t.copyData = t.getDataType = t.routesForMapRoute = t.notRouteTo404 = t.getWildcardRule = t.assertNewOptions = t.getRoutePath = t.notDeepClearNull = t.mergeConfig = t.timeOut = t.def = t.voidFun = void 0;
      var i = r(282),
        u = r(169),
        l = r(883),
        p = r(890),
        c = r(779);
      function s(e, t) {
        for (var r = Object.create(null), n = Object.keys(e).concat(["resolveQuery", "parseQuery"]), i = 0; i < n.length; i += 1) {
          var u = n[i];
          null != t[u] ? t[u].constructor === Object ? r[u] = o(o({}, e[u]), t[u]) : r[u] = "routes" === u ? a(e[u], t[u]) : t[u] : r[u] = e[u];
        }
        return r;
      }
      function f(e, t) {
        var r = e.aliasPath || e.alias || e.path;
        return "h5" !== t.options.platform && (r = e.path), {
          finallyPath: r,
          aliasPath: e.aliasPath || e.path,
          path: e.path,
          alias: e.alias
        };
      }
      function h(e, t) {
        var r = e.routesMap.finallyPathMap["*"];
        if (r) return r;
        throw t && u.ERRORHOOK[0](t, e), new Error("当前路由表匹配规则已全部匹配完成，未找到满足的匹配规则。你可以使用 '*' 通配符捕捉最后的异常");
      }
      function v(e) {
        return Object.prototype.toString.call(e);
      }
      function y(e, t) {
        if (null == e) t = e;else for (var r = 0, o = Object.keys(e); r < o.length; r++) {
          var n = o[r],
            a = n;
          e[n] !== e && ("object" == _typeof(e[n]) ? (t[a] = "[object Array]" === v(e[n]) ? [] : {}, t[a] = y(e[n], t[a])) : t[a] = e[n]);
        }
        return t;
      }
      function g(e) {
        var t = "[object Array]" === v(e) ? [] : {};
        return y(e, t), t;
      }
      function d(e, t, r) {
        for (var o = [], n = i.proxyVueSortHookName[e], a = 0; a < n.length; a++) {
          var u = t[n[a]][0];
          u && u.hook && o.push(u.hook(r));
        }
        return o;
      }
      t.voidFun = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }
      }, t.def = function (e, t, r) {
        Object.defineProperty(e, t, {
          get: function get() {
            return r();
          }
        });
      }, t.timeOut = function (e) {
        return new Promise(function (t) {
          setTimeout(function () {
            t();
          }, e);
        });
      }, t.mergeConfig = s, t.notDeepClearNull = function (e) {
        for (var t in e) {
          null == e[t] && delete e[t];
        }
        return e;
      }, t.getRoutePath = f, t.assertNewOptions = function (e) {
        var t,
          r = e.platform,
          o = e.routes;
        if (null == r) throw new Error("你在实例化路由时必须传递 'platform'");
        if (null == o || 0 === o.length) throw new Error("你在实例化路由时必须传递 routes 为空，这是无意义的。");
        return "h5" === e.platform && (null === (t = e.h5) || void 0 === t ? void 0 : t.vueRouterDev) && (i.baseConfig.routes = []), s(i.baseConfig, e);
      }, t.getWildcardRule = h, t.notRouteTo404 = function (e, t, r, o) {
        if ("*" !== t.path) return t;
        var n = t.redirect;
        if (void 0 === n) throw new Error(" *  通配符必须配合 redirect 使用。redirect: string | Location | Function");
        var a = n;
        return "function" == typeof a && (a = a(r)), p.navjump(a, e, o, void 0, void 0, void 0, !1);
      }, t.routesForMapRoute = function e(t, r, o, n) {
        var a;
        if (void 0 === n && (n = !1), null === (a = t.options.h5) || void 0 === a ? void 0 : a.vueRouterDev) return {
          path: r
        };
        for (var i = r.split("?")[0], u = "", l = t.routesMap, p = 0; p < o.length; p++) {
          for (var s = l[o[p]], f = 0, y = Object.entries(s); f < y.length; f++) {
            var g = y[f],
              d = g[0],
              m = g[1];
            if ("*" !== d) {
              var b = m,
                O = d;
              if ("[object Array]" === v(s) && (O = b), null != c(O).exec(i)) return "[object String]" === v(b) ? l.finallyPathMap[b] : b;
            } else "" === u && (u = "*");
          }
        }
        if (n) return {};
        if (l.aliasPathMap) {
          var P = e(t, r, ["aliasPathMap"], !0);
          if (Object.keys(P).length > 0) return P;
        }
        if ("" !== u) return h(t);
        throw new Error(r + " 路径无法在路由表中找到！检查跳转路径及路由表");
      }, t.getDataType = v, t.copyData = function (e) {
        return JSON.parse(JSON.stringify(e));
      }, t.getUniCachePage = function (e) {
        var t = getCurrentPages();
        if (null == e) return t;
        if (0 === t.length) return t;
        var r = t.reverse()[e];
        return null == r ? [] : r;
      }, t.urlToJson = function (e) {
        var t = {},
          r = e.split("?"),
          o = r[0],
          n = r[1];
        if (null != n) for (var a = 0, i = n.split("&"); a < i.length; a++) {
          var u = i[a].split("=");
          t[u[0]] = u[1];
        }
        return {
          path: o,
          query: t
        };
      }, t.forMatNextToFrom = function (e, t, r) {
        var o = [t, r],
          n = o[0],
          a = o[1];
        if ("h5" === e.options.platform) {
          var i = e.options.h5,
            u = i.vueNext,
            l = i.vueRouterDev;
          u || l || (n = p.createRoute(e, void 0, n), a = p.createRoute(e, void 0, a));
        } else n = p.createRoute(e, void 0, g(n)), a = p.createRoute(e, void 0, g(a));
        return {
          matTo: n,
          matFrom: a
        };
      }, t.paramsToQuery = function (e, t) {
        var r;
        if ("h5" === e.options.platform && !(null === (r = e.options.h5) || void 0 === r ? void 0 : r.paramsToQuery)) return t;
        if ("[object Object]" === v(t)) {
          var a = t,
            i = a.name,
            l = a.params,
            p = n(a, ["name", "params"]),
            c = l;
          if ("h5" !== e.options.platform && null == c && (c = {}), null != i && null != c) {
            var s = e.routesMap.nameMap[i];
            null == s && (s = h(e, {
              type: 2,
              msg: "命名路由为：" + i + " 的路由，无法在路由表中找到！",
              toRule: t
            }));
            var y = f(s, e).finallyPath;
            if (!y.includes(":")) return o(o({}, p), {
              path: y,
              query: c
            });
            u.ERRORHOOK[0]({
              type: 2,
              msg: "动态路由：" + y + " 无法使用 paramsToQuery！",
              toRule: t
            }, e);
          }
        }
        return t;
      }, t.assertDeepObject = function (e) {
        var t = null;
        try {
          t = JSON.stringify(e).match(/\{|\[|\}|\]/g);
        } catch (e) {
          l.warnLock("传递的参数解析对象失败。" + e);
        }
        return null != t && t.length > 3;
      }, t.baseClone = y, t.deepClone = g, t.lockDetectWarn = function (e, t, r, o, n) {
        if ("afterHooks" === n) o();else {
          var a = e.options.detectBeforeLock;
          a && a(e, t, r), e.$lockStatus ? e.options.routerErrorEach({
            type: 2,
            msg: "当前页面正在处于跳转状态，请稍后再进行跳转...."
          }, e) : o();
        }
      }, t.replaceHook = function (e, t, r, o) {
        var n = t.$options,
          a = e[r][o],
          u = {};
        if ("[object Array]" === v(a) && (u = {
          beforeCreate: [],
          created: [],
          beforeMount: [],
          mounted: [],
          beforeDestroy: [],
          destroyed: []
        }), null != a) {
          for (var l = i.proxyVueSortHookName[o], p = function p(r) {
              var p = l[r],
                c = n[p];
              if ("[object Array]" === v(c)) {
                if (1 === c.length && c.toString().includes("UNI-SIMPLE-ROUTER")) return "continue";
                var s = {
                    options: [],
                    hook: Function
                  },
                  f = c.splice(c.length - 1, 1, function () {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                      e[t] = arguments[t];
                    }
                    return s.options = e;
                  })[0];
                s.hook = function (r) {
                  return e.enterPath.replace(/^\//, "") !== r.replace(/^\//, "") && "app" !== o ? function () {} : (i.notCallProxyHook.includes(p) || f.apply(t, s.options), function () {
                    c.splice(c.length - 1, 1, f);
                  });
                }, Object.keys(u).length > 0 ? u[p] = [s] : a[p] = [s];
              }
            }, c = 0; c < l.length; c++) {
            p(c);
          }
          Object.keys(u).length > 0 && a.push(u);
        }
      }, t.callHook = d, t.resetPageHook = function (e, t) {
        var r = t.trim().match(/^(\/?[^\?\s]+)(\?[\s\S]*$)?$/);
        if (null == r) throw new Error("还原hook失败。请检查 【" + t + "】 路径是否正确。");
        t = r[1];
        var o = "appletsProxyHook";
        "app-plus" === e.options.platform && (o = "appProxyHook");
        for (var n = [], a = 0, i = Object.entries(e[o]); a < i.length; a++) {
          var u = i[a],
            l = u[0],
            p = u[1],
            c = l;
          if ("[object Array]" === v(p)) for (var s = 0; s < p.length; s++) {
            n = n.concat(d(c, p[s], t));
          } else n = n.concat(d(c, p, t));
        }
        setTimeout(function () {
          for (var e = 0; e < n.length; e++) {
            n[e]();
          }
        }, 500);
      }, t.assertParentChild = function (e, t) {
        for (; null != t.$parent;) {
          var r = t.$parent.$mp;
          if (r.page && r.page.is === e) return !0;
          t = t.$parent;
        }
        try {
          if (t.$mp.page.is === e || t.$mp.page.route === e) return !0;
        } catch (e) {
          return !1;
        }
        return !1;
      }, t.resolveAbsolutePath = function (e, t) {
        var r = /^\/?([^\?\s]+)(\?.+)?$/,
          o = e.trim();
        if (!r.test(o)) throw new Error("【" + e + "】 路径错误，请提供完整的路径(10001)。");
        var n = o.match(r);
        if (null == n) throw new Error("【" + e + "】 路径错误，请提供完整的路径(10002)。");
        var a = n[2] || "";
        if (/^\.\/[^\.]+/.test(o)) return (t.currentRoute.path + e).replace(/[^\/]+\.\//, "");
        var i = n[1].replace(/\//g, "\\/").replace(/\.\./g, "[^\\/]+").replace(/\./g, "\\."),
          u = new RegExp("^\\/" + i + "$"),
          l = t.options.routes.filter(function (e) {
            return u.test(e.path);
          });
        if (1 !== l.length) throw new Error("【" + e + "】 路径错误，尝试转成绝对路径失败，请手动转成绝对路径(10003)。");
        return l[0].path + a;
      }, t.deepDecodeQuery = function e(t) {
        for (var r = "[object Array]" === v(t) ? [] : {}, o = Object.keys(t), n = 0; n < o.length; n++) {
          var a = o[n],
            i = t[a];
          if ("string" == typeof i) try {
            var u = JSON.parse(decodeURIComponent(i));
            "object" != _typeof(u) && (u = i), r[a] = u;
          } catch (e) {
            try {
              r[a] = decodeURIComponent(i);
            } catch (e) {
              r[a] = i;
            }
          } else if ("object" == _typeof(i)) {
            var l = e(i);
            r[a] = l;
          } else r[a] = i;
        }
        return r;
      };
    },
    883: function _(e, t) {
      "use strict";

      function r(e, t, r, o) {
        if (void 0 === o && (o = !1), !o) {
          var n = "[object Object]" === t.toString();
          if (!1 === t) return !1;
          if (n && !1 === t[e]) return !1;
        }
        return console[e](r), !0;
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.warnLock = t.log = t.warn = t.err = t.isLog = void 0, t.isLog = r, t.err = function (e, t, o) {
        r("error", t.options.debugger, e, o);
      }, t.warn = function (e, t, o) {
        r("warn", t.options.debugger, e, o);
      }, t.log = function (e, t, o) {
        r("log", t.options.debugger, e, o);
      }, t.warnLock = function (e) {
        console.warn(e);
      };
    },
    607: function _(e, t, r) {
      "use strict";

      var o = this && this.__createBinding || (Object.create ? function (e, t, r, o) {
          void 0 === o && (o = r), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function get() {
              return t[r];
            }
          });
        } : function (e, t, r, o) {
          void 0 === o && (o = r), e[o] = t[r];
        }),
        n = this && this.__exportStar || function (e, t) {
          for (var r in e) {
            "default" === r || Object.prototype.hasOwnProperty.call(t, r) || o(t, e, r);
          }
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createRouter = t.RouterMount = t.runtimeQuit = void 0, n(r(366), t), n(r(309), t);
      var a = r(814);
      Object.defineProperty(t, "runtimeQuit", {
        enumerable: !0,
        get: function get() {
          return a.runtimeQuit;
        }
      });
      var i = r(963);
      Object.defineProperty(t, "RouterMount", {
        enumerable: !0,
        get: function get() {
          return i.RouterMount;
        }
      }), Object.defineProperty(t, "createRouter", {
        enumerable: !0,
        get: function get() {
          return i.createRouter;
        }
      });
    },
    366: function _(e, t) {
      "use strict";

      var r, o, n;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.rewriteMethodToggle = t.navtypeToggle = t.hookToggle = void 0, (n = t.hookToggle || (t.hookToggle = {})).beforeHooks = "beforeEach", n.afterHooks = "afterEach", n.enterHooks = "beforeEnter", (o = t.navtypeToggle || (t.navtypeToggle = {})).push = "navigateTo", o.replace = "redirectTo", o.replaceAll = "reLaunch", o.pushTab = "switchTab", o.back = "navigateBack", (r = t.rewriteMethodToggle || (t.rewriteMethodToggle = {})).navigateTo = "push", r.navigate = "push", r.redirectTo = "replace", r.reLaunch = "replaceAll", r.switchTab = "pushTab", r.navigateBack = "back";
    },
    309: function _(e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
    },
    169: function _(e, t, r) {
      "use strict";

      var o = this && this.__rest || function (e, t) {
        var r = {};
        for (var o in e) {
          Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        }
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {
            t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
          }
        }
        return r;
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.loopCallHook = t.transitionTo = t.onTriggerEachHook = t.callHook = t.callBeforeRouteLeave = t.HOOKLIST = t.ERRORHOOK = void 0;
      var n = r(789),
        a = r(890),
        i = r(147),
        u = r(814);
      function l(e, t, r, o) {
        var a,
          i = n.getUniCachePage(0);
        if (Object.keys(i).length > 0) {
          var u = void 0;
          switch ("h5" === e.options.platform ? u = i.$options.beforeRouteLeave : null != i.$vm && (u = i.$vm.$options.beforeRouteLeave), n.getDataType(u)) {
            case "[object Array]":
              a = (a = u[0]).bind(i);
              break;
            case "[object Function]":
              a = u.bind(i.$vm);
          }
        }
        return p(a, t, r, e, o);
      }
      function p(e, t, r, o, n, a) {
        void 0 === a && (a = !0), null != e && e instanceof Function ? !0 === a ? e(t, r, n, o, !1) : (e(t, r, function () {}, o, !1), n()) : n();
      }
      function c(e, t, r, o, a, i) {
        var u = n.forMatNextToFrom(e, t, r),
          l = u.matTo,
          p = u.matFrom;
        "h5" === e.options.platform ? s(a, 0, i, e, l, p, o) : s(a.slice(0, 4), 0, function () {
          i(function () {
            s(a.slice(4), 0, n.voidFun, e, l, p, o);
          });
        }, e, l, p, o);
      }
      function s(e, r, i, l, p, c, f) {
        var h = n.routesForMapRoute(l, p.path, ["finallyPathMap", "pathMap"]);
        if (e.length - 1 < r) return i();
        var v = e[r],
          y = t.ERRORHOOK[0];
        v(l, p, c, h, function (t) {
          if ("app-plus" === l.options.platform && (!1 !== t && "string" != typeof t && "object" != _typeof(t) || u.tabIndexSelect(p, c)), !1 === t) "h5" === l.options.platform && i(!1), y({
            type: 0,
            msg: "管道函数传递 false 导航被终止!",
            matTo: p,
            matFrom: c,
            nextTo: t
          }, l);else if ("string" == typeof t || "object" == _typeof(t)) {
            var n = f,
              h = t;
            if ("object" == _typeof(t)) {
              var v = t.NAVTYPE;
              h = o(t, ["NAVTYPE"]), null != v && (n = v);
            }
            a.navjump(h, l, n, {
              from: c,
              next: i
            });
          } else null == t ? (r++, s(e, r, i, l, p, c, f)) : y({
            type: 1,
            msg: "管道函数传递未知类型，无法被识别。导航被终止！",
            matTo: p,
            matFrom: c,
            nextTo: t
          }, l);
        });
      }
      t.ERRORHOOK = [function (e, t) {
        return t.lifeCycle.routerErrorHooks[0](e, t);
      }], t.HOOKLIST = [function (e, t, r, o, n) {
        return p(e.lifeCycle.routerBeforeHooks[0], t, r, e, n);
      }, function (e, t, r, o, n) {
        return l(e, t, r, n);
      }, function (e, t, r, o, n) {
        return p(e.lifeCycle.beforeHooks[0], t, r, e, n);
      }, function (e, t, r, o, n) {
        return p(o.beforeEnter, t, r, e, n);
      }, function (e, t, r, o, n) {
        return p(e.lifeCycle.afterHooks[0], t, r, e, n, !1);
      }, function (e, t, r, o, n) {
        return e.$lockStatus = !1, "h5" === e.options.platform && i.proxyH5Mount(e), p(e.lifeCycle.routerAfterHooks[0], t, r, e, n, !1);
      }], t.callBeforeRouteLeave = l, t.callHook = p, t.onTriggerEachHook = function (e, r, o, n, a) {
        var i = [];
        switch (n) {
          case "beforeEach":
            i = t.HOOKLIST.slice(0, 3);
            break;
          case "afterEach":
            i = t.HOOKLIST.slice(4);
            break;
          case "beforeEnter":
            i = t.HOOKLIST.slice(3, 4);
        }
        c(o, e, r, "push", i, a);
      }, t.transitionTo = c, t.loopCallHook = s;
    },
    890: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
        return (o = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createRoute = t.forceGuardEach = t.backOptionsBuild = t.navjump = t.lockNavjump = void 0;
      var n = r(366),
        a = r(99),
        i = r(789),
        u = r(169),
        l = r(845),
        p = r(169);
      function c(e, t, r, o, n) {
        i.lockDetectWarn(t, e, r, function () {
          "h5" !== t.options.platform && (t.$lockStatus = !0), s(e, t, r, void 0, o, n);
        });
      }
      function s(e, t, r, c, s, h, v) {
        if (void 0 === v && (v = !0), "back" === r) {
          var y;
          if (y = "string" == typeof e ? +e : e.delta || 1, "h5" === t.options.platform) {
            t.$route.go(-y);
            var g = (h || {
                success: i.voidFun
              }).success || i.voidFun,
              d = (h || {
                complete: i.voidFun
              }).complete || i.voidFun;
            return g({
              errMsg: "navigateBack:ok"
            }), void d({
              errMsg: "navigateBack:ok"
            });
          }
          e = f(t, y, h);
        }
        var m = a.queryPageToMap(e, t).rule;
        m.type = n.navtypeToggle[r];
        var b = i.paramsToQuery(t, m),
          O = a.resolveQuery(b, t);
        if ("h5" === t.options.platform) {
          if ("push" !== r && (r = "replace"), null != c) c.next(o({
            replace: "push" !== r
          }, O));else if ("push" === r && Reflect.has(O, "events")) {
            if (Reflect.has(O, "name")) throw new Error("在h5端上使用 'push'、'navigateTo' 跳转时，如果包含 events 不允许使用 name 跳转，因为 name 实现了动态路由。请更换为 path 或者 url 跳转！");
            uni.navigateTo(O, !0, i.voidFun, s);
          } else t.$route[r](O, O.success || i.voidFun, O.fail || i.voidFun);
        } else {
          var P = {
            path: ""
          };
          if (null == c) {
            var k = i.routesForMapRoute(t, O.path, ["finallyPathMap", "pathMap"]);
            k = i.notRouteTo404(t, k, O, r), O = o(o(o(o({}, k), {
              params: {}
            }), O), {
              path: k.path
            }), P = l.createToFrom(O, t);
          } else P = c.from;
          if (l.createFullPath(O, P), !1 === v) return O;
          u.transitionTo(t, O, P, r, p.HOOKLIST, function (e) {
            uni[n.navtypeToggle[r]](O, !0, e, s);
          });
        }
      }
      function f(e, t, r) {
        var n = h(e, t),
          a = o(o({}, r || {}), {
            path: n.path,
            query: n.query,
            delta: t
          });
        if ("[object Object]" === i.getDataType(r)) {
          var u = r,
            l = u.animationDuration,
            p = u.animationType;
          null != l && (a.animationDuration = l), null != p && (a.animationType = p);
          var c = r.from;
          null != c && (a.BACKTYPE = c);
        }
        return a;
      }
      function h(e, t, r) {
        void 0 === t && (t = 0);
        var u = {
          name: "",
          meta: {},
          path: "",
          fullPath: "",
          NAVTYPE: "",
          query: {},
          params: {},
          BACKTYPE: (r || {
            BACKTYPE: ""
          }).BACKTYPE || ""
        };
        if (19970806 === t) return u;
        if ("h5" === e.options.platform) {
          var l = {
            path: ""
          };
          l = null != r ? r : e.$route.currentRoute;
          var p = i.copyData(l.params);
          delete p.__id__;
          var c = a.parseQuery(o(o({}, p), i.copyData(l.query)), e);
          l = o(o({}, l), {
            query: c
          }), u.path = l.path, u.fullPath = l.fullPath || "", u.query = i.deepDecodeQuery(l.query || {}), u.NAVTYPE = n.rewriteMethodToggle[l.type || "reLaunch"];
        } else {
          var s = {};
          if (null != r) s = o(o({}, r), {
            openType: r.type
          });else {
            var f = i.getUniCachePage(t);
            if (0 === Object.keys(f).length) throw e.options.routerErrorEach({
              type: 3,
              msg: "不存在的页面栈，请确保有足够的页面可用，当前 level:" + t
            }, e), new Error("不存在的页面栈，请确保有足够的页面可用，当前 level:" + t);
            var h = f.options || {};
            s = o(o({}, f.$page || {}), {
              query: i.deepDecodeQuery(h),
              fullPath: decodeURIComponent((f.$page || {}).fullPath || "/" + f.route)
            }), "app-plus" !== e.options.platform && (s.path = "/" + f.route);
          }
          var v = s.openType;
          u.query = s.query, u.path = s.path, u.fullPath = s.fullPath, u.NAVTYPE = n.rewriteMethodToggle[v || "reLaunch"];
        }
        var y = i.routesForMapRoute(e, u.path, ["finallyPathMap", "pathMap"]),
          g = o(o({}, u), y);
        return g.query = a.parseQuery(g.query, e), g;
      }
      t.lockNavjump = c, t.navjump = s, t.backOptionsBuild = f, t.forceGuardEach = function (e, t, r) {
        if (void 0 === t && (t = "replaceAll"), void 0 === r && (r = !1), "h5" === e.options.platform) throw new Error("在h5端上使用：forceGuardEach 是无意义的，目前 forceGuardEach 仅支持在非h5端上使用");
        var o = i.getUniCachePage(0);
        0 === Object.keys(o).length && e.options.routerErrorEach({
          type: 3,
          msg: "不存在的页面栈，请确保有足够的页面可用，当前 level:0"
        }, e);
        var n = o,
          a = n.route,
          u = n.options;
        c({
          path: "/" + a,
          query: i.deepDecodeQuery(u || {})
        }, e, t, r);
      }, t.createRoute = h;
    },
    845: function _(e, t, r) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.proxyPageHook = t.createFullPath = t.createToFrom = void 0;
      var o = r(789),
        n = r(890),
        a = r(99);
      t.createToFrom = function (e, t) {
        var r = o.getUniCachePage(0);
        return "[object Array]" === o.getDataType(r) ? o.deepClone(e) : n.createRoute(t);
      }, t.createFullPath = function (e, t) {
        if (null == e.fullPath) {
          var r = a.stringifyQuery(e.query);
          e.fullPath = e.path + r;
        }
        null == t.fullPath && (r = a.stringifyQuery(t.query), t.fullPath = t.path + r);
      }, t.proxyPageHook = function (e, t, r, n) {
        o.replaceHook(t, e, r, n);
      };
    },
    99: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
        return (o = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.stringifyQuery = t.parseQuery = t.resolveQuery = t.queryPageToMap = void 0;
      var n = r(789),
        a = r(169),
        i = r(883),
        u = /[!'()*]/g,
        l = function l(e) {
          return "%" + e.charCodeAt(0).toString(16);
        },
        p = /%2C/g,
        c = function c(e) {
          return encodeURIComponent(e).replace(u, l).replace(p, ",");
        };
      t.queryPageToMap = function (e, t) {
        var r = {},
          i = "",
          u = e.success,
          l = e.fail;
        if ("[object Object]" === n.getDataType(e)) {
          var p = e;
          if (null != p.path) {
            var c = n.urlToJson(p.path),
              s = c.path,
              f = c.query;
            i = n.routesForMapRoute(t, s, ["finallyPathList", "pathMap"]), r = o(o({}, f), e.query || {}), p.path = s, p.query = r, delete e.params;
          } else null != p.name ? null == (i = t.routesMap.nameMap[p.name]) ? i = n.getWildcardRule(t, {
            type: 2,
            msg: "命名路由为：" + p.name + " 的路由，无法在路由表中找到！",
            toRule: e
          }) : (r = e.params || {}, delete e.query) : i = n.getWildcardRule(t, {
            type: 2,
            msg: e + " 解析失败，请检测当前路由表下是否有包含。",
            toRule: e
          });
        } else e = n.urlToJson(e), i = n.routesForMapRoute(t, e.path, ["finallyPathList", "pathMap"]), r = e.query;
        if ("h5" === t.options.platform) {
          n.getRoutePath(i, t).finallyPath.includes(":") && null == e.name && a.ERRORHOOK[0]({
            type: 2,
            msg: "当有设置 alias或者aliasPath 为动态路由时，不允许使用 path 跳转。请使用 name 跳转！",
            route: i
          }, t);
          var h = e.complete,
            v = e.success,
            y = e.fail;
          if ("[object Function]" === n.getDataType(h)) {
            var g = function g(e, t) {
              "[object Function]" === n.getDataType(t) && t.apply(this, e), h.apply(this, e);
            };
            u = function u() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                e[t] = arguments[t];
              }
              g.call(this, e, v);
            }, l = function l() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                e[t] = arguments[t];
              }
              g.call(this, e, y);
            };
          }
        }
        var d = e;
        return "[object Function]" === n.getDataType(d.success) && (d.success = u), "[object Function]" === n.getDataType(d.fail) && (d.fail = l), {
          rule: d,
          route: i,
          query: r
        };
      }, t.resolveQuery = function (e, t) {
        var r = "query";
        null != e.params && (r = "params"), null != e.query && (r = "query");
        var o = n.copyData(e[r] || {}),
          a = t.options.resolveQuery;
        if (a) {
          var u = a(o);
          "[object Object]" !== n.getDataType(u) ? i.warn("请按格式返回参数： resolveQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}", t) : e[r] = u;
        } else {
          if (!n.assertDeepObject(o)) return e;
          var l = JSON.stringify(o);
          e[r] = {
            query: l
          };
        }
        return e;
      }, t.parseQuery = function (e, t) {
        var r = t.options.parseQuery;
        if (r) e = r(n.copyData(e)), "[object Object]" !== n.getDataType(e) && i.warn("请按格式返回参数： parseQuery?:(jsonQuery:{[propName: string]: any;})=>{[propName: string]: any;}", t);else if (Reflect.get(e, "query")) {
          var o = Reflect.get(e, "query");
          if ("string" == typeof o) try {
            o = JSON.parse(o);
          } catch (e) {
            i.warn("尝试解析深度对象失败，按原样输出。" + e, t);
          }
          if ("object" == _typeof(o)) return n.deepDecodeQuery(o);
        }
        return e;
      }, t.stringifyQuery = function (e) {
        var t = e ? Object.keys(e).map(function (t) {
          var r = e[t];
          if (void 0 === r) return "";
          if (null === r) return c(t);
          if (Array.isArray(r)) {
            var o = [];
            return r.forEach(function (e) {
              void 0 !== e && (null === e ? o.push(c(t)) : o.push(c(t) + "=" + c(e)));
            }), o.join("&");
          }
          return c(t) + "=" + c(r);
        }).filter(function (e) {
          return e.length > 0;
        }).join("&") : null;
        return t ? "?" + t : "";
      };
    },
    314: function _(e, t, r) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.rewriteMethod = void 0;
      var o = r(366),
        n = r(789),
        a = r(883),
        i = r(809),
        u = ["navigateTo", "redirectTo", "reLaunch", "switchTab", "navigateBack"];
      t.rewriteMethod = function (e) {
        !1 === e.options.keepUniOriginNav && u.forEach(function (t) {
          var r = uni[t];
          uni[t] = function (u, l, p, c) {
            void 0 === l && (l = !1), l ? i.uniOriginJump(e, r, t, u, p, c) : ("app-plus" === e.options.platform && 0 === Object.keys(e.appMain).length && (e.appMain = {
              NAVTYPE: t,
              path: u.url
            }), function (e, t, r) {
              if ("app-plus" === r.options.platform) {
                var i = null;
                e && (i = e.openType), null != i && "appLaunch" === i && (t = "reLaunch");
              }
              if ("reLaunch" === t && '{"url":"/"}' === JSON.stringify(e) && (a.warn("uni-app 原生方法：reLaunch({url:'/'}) 默认被重写啦！你可以使用 this.$Router.replaceAll() 或者 uni.reLaunch({url:'/?xxx=xxx'})", r, !0), t = "navigateBack", e = {
                from: "backbutton"
              }), "navigateBack" === t) {
                var u = 1;
                null == e && (e = {
                  delta: 1
                }), "[object Number]" === n.getDataType(e.delta) && (u = e.delta), r.back(u, e);
              } else {
                var l = o.rewriteMethodToggle[t],
                  p = e.url;
                if (!p.startsWith("/")) {
                  var c = n.resolveAbsolutePath(p, r);
                  p = c, e.url = c;
                }
                if ("switchTab" === t) {
                  var s = n.routesForMapRoute(r, p, ["pathMap", "finallyPathList"]),
                    f = n.getRoutePath(s, r).finallyPath;
                  if ("[object Array]" === n.getDataType(f) && a.warn("uni-app 原生方法跳转路径为：" + p + "。此路为是tab页面时，不允许设置 alias 为数组的情况，并且不能为动态路由！当然你可以通过通配符*解决！", r, !0), "*" === f && a.warn("uni-app 原生方法跳转路径为：" + p + "。在路由表中找不到相关路由表！当然你可以通过通配符*解决！", r, !0), "h5" === r.options.platform) {
                    var h = e.success;
                    e.success = function () {
                      for (var t = [], r = 0; r < arguments.length; r++) {
                        t[r] = arguments[r];
                      }
                      null == h || h.apply(null, t), n.timeOut(150).then(function () {
                        var t = e.detail || {};
                        if (Object.keys(t).length > 0 && Reflect.has(t, "index")) {
                          var r = n.getUniCachePage(0);
                          if (0 === Object.keys(r).length) return !1;
                          var o = r,
                            a = o.$options.onTabItemTap;
                          if (a) for (var i = 0; i < a.length; i++) {
                            a[i].call(o, t);
                          }
                        }
                      });
                    };
                  }
                  p = f;
                }
                var v = e,
                  y = v.events,
                  g = v.success,
                  d = v.fail,
                  m = v.complete,
                  b = v.animationType,
                  O = {
                    path: p,
                    events: y,
                    success: g,
                    fail: d,
                    complete: m,
                    animationDuration: v.animationDuration,
                    animationType: b
                  };
                r[l](n.notDeepClearNull(O));
              }
            }(u, t, e));
          };
        });
      };
    },
    963: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
        return (o = Object.assign || function (e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) {
            for (var n in t = arguments[r]) {
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
          }
          return e;
        }).apply(this, arguments);
      };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createRouter = t.RouterMount = void 0;
      var n = r(282),
        a = r(789),
        i = r(662),
        u = r(460),
        l = r(890),
        p = r(314),
        c = function c() {},
        s = new Promise(function (e) {
          return c = e;
        });
      t.createRouter = function (e) {
        var t = a.assertNewOptions(e),
          r = {
            options: t,
            mount: [],
            Vue: null,
            appProxyHook: n.appProxyHook,
            appletsProxyHook: n.indexProxyHook,
            appMain: {},
            enterPath: "",
            $route: null,
            $lockStatus: !1,
            routesMap: {},
            lifeCycle: i.registerRouterHooks(n.lifeCycle, t),
            push: function push(e) {
              l.lockNavjump(e, r, "push");
            },
            replace: function replace(e) {
              l.lockNavjump(e, r, "replace");
            },
            replaceAll: function replaceAll(e) {
              l.lockNavjump(e, r, "replaceAll");
            },
            pushTab: function pushTab(e) {
              l.lockNavjump(e, r, "pushTab");
            },
            back: function back(e, t) {
              void 0 === e && (e = 1), "[object Object]" !== a.getDataType(t) ? t = {
                from: "navigateBack"
              } : Reflect.has(t, "from") || (t = o(o({}, t), {
                from: "navigateBack"
              })), l.lockNavjump(e + "", r, "back", void 0, t);
            },
            forceGuardEach: function forceGuardEach(e, t) {
              l.forceGuardEach(r, e, t);
            },
            beforeEach: function beforeEach(e) {
              i.registerEachHooks(r, "beforeHooks", e);
            },
            afterEach: function afterEach(e) {
              i.registerEachHooks(r, "afterHooks", e);
            },
            install: function install(e) {
              r.Vue = e, p.rewriteMethod(this), u.initMixins(e, this), Object.defineProperty(e.prototype, "$Router", {
                get: function get() {
                  var e = r;
                  return Object.defineProperty(this, "$Router", {
                    value: e,
                    writable: !1,
                    configurable: !1,
                    enumerable: !1
                  }), Object.seal(e);
                }
              }), Object.defineProperty(e.prototype, "$Route", {
                get: function get() {
                  return l.createRoute(r);
                }
              }), Object.defineProperty(e.prototype, "$AppReady", {
                get: function get() {
                  return "h5" === r.options.platform ? Promise.resolve() : s;
                },
                set: function set(e) {
                  !0 === e && c();
                }
              });
            }
          };
        return a.def(r, "currentRoute", function () {
          return l.createRoute(r);
        }), r.beforeEach(function (e, t, r) {
          return r();
        }), r.afterEach(function () {}), r;
      }, t.RouterMount = function (e, t, r) {
        if (void 0 === r && (r = "#app"), "[object Array]" !== a.getDataType(t.mount)) throw new Error("挂载路由失败，router.app 应该为数组类型。当前类型：" + _typeof(t.mount));
        if (t.mount.push({
          app: e,
          el: r
        }), "h5" === t.options.platform) {
          var o = t.$route;
          o.replace({
            path: o.currentRoute.fullPath
          });
        }
      };
    },
    809: function _(e, t, r) {
      "use strict";

      var o = this && this.__assign || function () {
          return (o = Object.assign || function (e) {
            for (var t, r = 1, o = arguments.length; r < o; r++) {
              for (var n in t = arguments[r]) {
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
            }
            return e;
          }).apply(this, arguments);
        },
        n = this && this.__awaiter || function (e, t, r, o) {
          return new (r || (r = Promise))(function (n, a) {
            function i(e) {
              try {
                l(o.next(e));
              } catch (e) {
                a(e);
              }
            }
            function u(e) {
              try {
                l(o.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function l(e) {
              var t;
              e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function (e) {
                e(t);
              })).then(i, u);
            }
            l((o = o.apply(e, t || [])).next());
          });
        },
        a = this && this.__generator || function (e, t) {
          var r,
            o,
            n,
            a,
            i = {
              label: 0,
              sent: function sent() {
                if (1 & n[0]) throw n[1];
                return n[1];
              },
              trys: [],
              ops: []
            };
          return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
          }, "function" == typeof Symbol && (a[Symbol.iterator] = function () {
            return this;
          }), a;
          function u(a) {
            return function (u) {
              return function (a) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; i;) {
                  try {
                    if (r = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
                    switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                      case 0:
                      case 1:
                        n = a;
                        break;
                      case 4:
                        return i.label++, {
                          value: a[1],
                          done: !1
                        };
                      case 5:
                        i.label++, o = a[1], a = [0];
                        continue;
                      case 7:
                        a = i.ops.pop(), i.trys.pop();
                        continue;
                      default:
                        if (!((n = (n = i.trys).length > 0 && n[n.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                          i = 0;
                          continue;
                        }
                        if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                          i.label = a[1];
                          break;
                        }
                        if (6 === a[0] && i.label < n[1]) {
                          i.label = n[1], n = a;
                          break;
                        }
                        if (n && i.label < n[2]) {
                          i.label = n[2], i.ops.push(a);
                          break;
                        }
                        n[2] && i.ops.pop(), i.trys.pop();
                        continue;
                    }
                    a = t.call(e, i);
                  } catch (e) {
                    a = [6, e], o = 0;
                  } finally {
                    r = n = 0;
                  }
                }
                if (5 & a[0]) throw a[1];
                return {
                  value: a[0] ? a[1] : void 0,
                  done: !0
                };
              }([a, u]);
            };
          }
        },
        i = this && this.__rest || function (e, t) {
          var r = {};
          for (var o in e) {
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
          }
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) {
              t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
            }
          }
          return r;
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.formatOriginURLQuery = t.uniOriginJump = void 0;
      var u = r(99),
        l = r(789),
        p = r(282),
        c = 0,
        s = "reLaunch";
      function f(e, t, r) {
        var n,
          a = t.url,
          i = t.path,
          p = t.query,
          c = t.animationType,
          s = t.animationDuration,
          f = t.events,
          h = t.success,
          v = t.fail,
          y = t.complete,
          g = t.delta,
          d = t.animation,
          m = u.stringifyQuery(p || {}),
          b = "" === m ? i || a : (i || a) + m,
          O = {};
        return "app-plus" === e.options.platform && "navigateBack" !== r && (O = (null === (n = e.options.APP) || void 0 === n ? void 0 : n.animation) || {}, O = o(o({}, O), d || {})), l.notDeepClearNull({
          delta: g,
          url: b,
          animationType: c || O.animationType,
          animationDuration: s || O.animationDuration,
          events: f,
          success: h,
          fail: v,
          complete: y
        });
      }
      t.uniOriginJump = function (e, t, r, u, h, v) {
        var y = f(e, u, r),
          g = y.complete,
          d = i(y, ["complete"]),
          m = e.options.platform.trim();
        0 === c && "h5" !== m && l.resetPageHook(e, d.url), null != v && !1 === v ? (0 === c && (c++, "h5" !== m && (e.Vue.prototype.$AppReady = !0)), g && g.apply(null, {
          msg: "forceGuardEach强制触发并且不执行跳转"
        }), h && h.apply(null, {
          msg: "forceGuardEach强制触发并且不执行跳转"
        })) : t(o(o({}, d), {
          from: u.BACKTYPE,
          complete: function complete() {
            for (var t, o, i, u, f = [], v = 0; v < arguments.length; v++) {
              f[v] = arguments[v];
            }
            return n(this, void 0, void 0, function () {
              var n, v, y;
              return a(this, function (a) {
                switch (a.label) {
                  case 0:
                    return 0 === c && (c++, "h5" !== m && (e.Vue.prototype.$AppReady = !0), "app-plus" === m && ((n = plus.nativeObj.View.getViewById("router-loadding")) && n.close(), (v = null === (t = e.options.APP) || void 0 === t ? void 0 : t.launchedHook) && v())), y = 0, new RegExp(p.mpPlatformReg, "g").test(m) ? y = null === (o = e.options.applet) || void 0 === o ? void 0 : o.animationDuration : "app-plus" === m && "navigateBack" === r && "navigateTo" === s && (y = null === (u = null === (i = e.options.APP) || void 0 === i ? void 0 : i.animation) || void 0 === u ? void 0 : u.animationDuration), "navigateTo" !== r && "navigateBack" !== r || 0 === y ? [3, 2] : [4, l.timeOut(y)];
                  case 1:
                    a.sent(), a.label = 2;
                  case 2:
                    return s = r, g && g.apply(null, f), h && h.apply(null, f), [2];
                }
              });
            });
          }
        }));
      }, t.formatOriginURLQuery = f;
    }
  }, t = {}, function r(o) {
    if (t[o]) return t[o].exports;
    var n = t[o] = {
      exports: {}
    };
    return e[o].call(n.exports, n, n.exports, r), n.exports;
  }(607);
  var e, t;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! (webpack)/buildin/module.js */ 47)(module)))

/***/ }),

/***/ 47:
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 48:
/*!*************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/wechat/wechat.js ***!
  \*************************************************************/
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
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 28));
var _index = _interopRequireDefault(__webpack_require__(/*! @/shopro/request/index */ 38));
var _platform = _interopRequireDefault(__webpack_require__(/*! @/shopro/platform */ 40));
var _store = _interopRequireDefault(__webpack_require__(/*! @/shopro/store */ 35));
var _env = __webpack_require__(/*! @/env */ 34);
/**
 * Wechat v1.1.0
 * @Class Wechat
 * @description shopro-wechat 1.1.0 wehcat第三方登录组件
 * @Author lidongtony
 * @Date 2020-05-20
 * @Email lidongtony@qq.com
 */
var _default = {
  eventMap: function eventMap(event) {
    var map = "";
    switch (event) {
      case "login":
        map = "登录中...";
        break;
      case "refresh":
        map = "更新中...";
        break;
      case "bind":
        map = "绑定中...";
        break;
    }
    return map;
  },
  login: function login() {
    var _this = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var token;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = "";
              _context.next = 3;
              return _this.wxMiniProgramOauth("login");
            case 3:
              token = _context.sent;
              return _context.abrupt("return", token);
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  refresh: function refresh() {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var token;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              token = "";
              _context2.next = 3;
              return _this2.wxMiniProgramOauth("refresh");
            case 3:
              token = _context2.sent;
              return _context2.abrupt("return", token);
            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  bind: function bind() {
    var _this3 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var token;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              token = "";
              _context3.next = 3;
              return _this3.wxMiniProgramOauth("bind");
            case 3:
              token = _context3.sent;
              return _context3.abrupt("return", token);
            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  // 微信小程序静默登录
  getWxMiniProgramSessionKey: function getWxMiniProgramSessionKey() {
    var _arguments = arguments;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var autoLogin, sessionStatus, session_key;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              autoLogin = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : true;
              sessionStatus = false;
              session_key = "";
              return _context4.abrupt("return", new Promise(function (resolve, reject) {
                uni.checkSession({
                  success: function success(res) {
                    if (res.errMsg === "checkSession:ok") sessionStatus = true;
                  },
                  complete: function complete() {
                    if (uni.getStorageSync("session_key") && sessionStatus && !autoLogin) {
                      resolve(uni.getStorageSync("session_key"));
                    } else {
                      uni.login({
                        success: function success(info) {
                          var code = info.code;
                          (0, _index.default)("user.getWxMiniProgramSessionKey", {
                            code: code,
                            autoLogin: autoLogin
                          }).then(function (res) {
                            if (res.code === 1) {
                              uni.setStorageSync("session_key", res.data.session_key);
                              if (autoLogin) {
                                if (res.data.token) {
                                  resolve(res.data.token);
                                } else {
                                  resolve(false);
                                }
                              }
                              resolve(res.data.session_key);
                            } else {
                              reject(res.msg);
                            }
                          });
                        }
                      });
                    }
                  }
                });
              }));
            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  // 微信小程序获取用户信息登录
  wxMiniProgramOauth: function wxMiniProgramOauth() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "login";
    var that = this;
    var session_key = uni.getStorageSync("session_key");
    uni.showLoading({
      title: that.eventMap(event)
    });
    return new Promise(function (resolve, reject) {
      uni.getUserProfile({
        // 必须手动确认触发
        desc: "完善会员资料",
        // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: function success(res) {
          if (res.errMsg === "getUserProfile:ok") {
            (0, _index.default)("user.wxMiniProgramOauth", {
              event: event,
              session_key: session_key,
              encryptedData: res.encryptedData,
              iv: res.iv,
              signature: res.signature
            }).then(function (res) {
              console.log(res);
              if (res.code === 1) {
                resolve(res.data.token);
              } else {
                uni.removeStorageSync("session_key");
                that.getWxMiniProgramSessionKey(false);
                resolve(false);
              }
            });
          }
        },
        complete: function complete(res) {
          uni.hideLoading();
        }
      });
    });
  },
  // 小程序更新
  checkMiniProgramUpdate: function checkMiniProgramUpdate() {
    if (uni.canIUse("getUpdateManager")) {
      var updateManager = uni.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            uni.showModal({
              title: "更新提示",
              content: "新版本已经准备好，是否重启应用？",
              success: function success(res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate();
                }
              }
            });
          });
          updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            uni.showModal({
              title: "已经有新版本了哟~",
              content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
            });
          });
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 49:
/*!******************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/store/modules/cart.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(__webpack_require__(/*! @/shopro/request/index */ 38));
// 购物车模块

var state = {
  cartList: [],
  //购物车列表
  checkCart: {},
  //检测是否是购物车数据的对象
  allSelected: false,
  // 全选检测
  cartNum: 0 //购物车,涉及到刷新数据丢失，所以存了本地,
};

var getters = {
  cartList: function cartList(state) {
    return state.cartList;
  },
  checkCart: function checkCart(state) {
    return state.checkCart;
  },
  allSelected: function allSelected(state) {
    return state.allSelected;
  },
  cartNum: function cartNum(state) {
    return state.cartNum;
  },
  // 购物车数量和总价
  totalCount: function totalCount(state) {
    var totalNum = 0;
    var totalPrice = 0;
    state.cartList.filter(function (item) {
      if (item.checked) {
        totalNum += 1;
        totalPrice += item.goods_num * (item.sku_price ? item.sku_price.price : 0);
      }
    });
    return {
      totalNum: totalNum,
      totalPrice: totalPrice
    };
  },
  // 是否选择了商品
  isSel: function isSel(state) {
    var isSel = false;
    state.cartList.map(function (item) {
      if (item.checked) {
        isSel = true;
      }
    });
    return isSel;
  },
  // 活动商品唯一选中可以结算
  isActivityPay: function isActivityPay() {
    var num = 0;
    var activityNum = 0;
    state.cartList.map(function (item) {
      if (item.checked) {
        num += 1;
        if (item.cart_type === 'activity') {
          activityNum += 1;
        }
      }
    });
    if (num === 1 && activityNum === 1 || activityNum === 0) {
      return true;
    }
    return false;
  }
};
var mutations = {
  // cart数据获取变动。
  CART_LIST: function CART_LIST(state, payload) {
    state.cartList = payload;
    var cartListNumber = payload.length;
    if (Number(cartListNumber)) {
      uni.setTabBarBadge({
        index: 2,
        text: String(cartListNumber)
      });
    } else {
      uni.removeTabBarBadge({
        index: 2
      });
    }
    state.cartNum = cartListNumber;
  },
  // 切换全选。
  changeAllSellect: function changeAllSellect(state) {
    state.allSelected = !state.allSelected;
  },
  // 全选设置
  getAllSellectCartList: function getAllSellectCartList(state, flag) {
    state.cartList.map(function (item) {
      item.checked = flag;
    });
  },
  // 全选检测
  checkCartList: function checkCartList(state) {
    var all = true;
    state.cartList.map(function (item) {
      if (!item.checked) {
        all = false;
      }
    });
    state.allSelected = all;
  },
  // 是否购物车数据检测
  getCheckCart: function getCheckCart(state) {
    var obj = {};
    state.cartList.map(function (item) {
      obj[item.goods_id] = {
        num: item.goods_num,
        cartOrderId: item.id
      };
    });
    state.checkCart = obj;
  }
};
var actions = {
  // 购物车数据（查）
  getCartList: function getCartList(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      (0, _index.default)('cart.index').then(function (res) {
        if (res.code === 1) {
          var cartData = res.data;
          cartData.length && cartData.map(function (item) {
            item.checked = true;
          });
          commit('CART_LIST', cartData);
          commit('checkCartList');
          commit('getCheckCart');
        }
      }).catch(function (e) {
        reject(e);
      });
    });
  },
  // 添加到购物车（增）
  addCartGoods: function addCartGoods(_ref2, data) {
    var dispatch = _ref2.dispatch;
    return new Promise(function (resolve, reject) {
      (0, _index.default)('cart.add', {
        goods_list: data.list,
        from: data.from
      }).then(function (res) {
        res.code === 1 && dispatch('getCartList');
        resolve(res);
      }).catch(function (e) {
        reject(e);
      });
    });
  },
  // 修改购物车商品数量（改）|| 删除购物车商品（删）
  changeCartList: function changeCartList(_ref3, param) {
    var commit = _ref3.commit,
      dispatch = _ref3.dispatch;
    return new Promise(function (resolve, reject) {
      (0, _index.default)('cart.edit', {
        cart_list: param.ids,
        value: param.goodsNum || null,
        act: param.art
      }).then(function (res) {
        if (param.art === 'delete' && res.code === 1) {
          dispatch('getCartList');
        }
        commit('checkCartList');
        resolve(res);
      }).catch(function (e) {
        reject(e);
      });
    });
  }
};
var _default = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/mixins/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _store = _interopRequireDefault(__webpack_require__(/*! @/shopro/store */ 35));
var _share = _interopRequireDefault(__webpack_require__(/*! @/shopro/share */ 42));
var _request = _interopRequireDefault(__webpack_require__(/*! @/shopro/request */ 38));
var _platform = _interopRequireDefault(__webpack_require__(/*! @/shopro/platform */ 40));
var _router = __webpack_require__(/*! @/shopro/router */ 45);
/**
 * MixinIndex v1.0.0
 * @description shopro-mixin-index 1.0.0 shopro全局入口组件
 * @Author lidongtony
 * @Date 2021-04-18
 * @Email lidongtony@qq.com
 */
var _default = {
  onLoad: function onLoad(options) {
    var that = this;
    // 后端拼接的具体page页面 直接进入 （如订阅消息场景下直接跳转）

    if (options !== null && options !== void 0 && options.scene) {
      var scene = decodeURIComponent(options.scene);
      var sceneObj = scene.split('=');
      options[sceneObj[0]] = sceneObj[1];
    }
    if (options !== null && options !== void 0 && options.page) {
      _router.router.replace({
        path: decodeURIComponent(options.page)
      });
    }
    if (options !== null && options !== void 0 && options.custom_id) {
      _router.router.replace({
        path: '/pages/index/view',
        query: {
          id: options.custom_id
        }
      });
    }
    if (options !== null && options !== void 0 && options.spm) {
      var shareParams = _share.default.getShareQuery(options.spm);
      // 保存推荐信息
      if (shareParams.shareUserId) {
        if (_store.default.getters.isLogin) {
          (0, _request.default)('common.shareAdd', {
            spm: options.spm
          });
        } else {
          uni.setStorageSync('spm', options.spm);
        }
      }
      // 跳转分享路径
      var page = {};
      if (shareParams.page) {
        page.path = shareParams.page;
      }
      if (shareParams.pageId) {
        page.query = {
          id: shareParams.pageId
        };
      }
      if (page.path) {
        _router.router.replace(page);
      }
    }
  },
  onShareAppMessage: function onShareAppMessage(res) {
    var that = this;
    // uni.$emit('ON_WX_SHARE')
    var shareInfo = _store.default.getters.shareInfo;
    return {
      title: shareInfo.title,
      path: shareInfo.path,
      imageUrl: shareInfo.image,
      success: function success(res) {
        uni.showToast({
          title: '分享成功'
        });
      },
      fail: function fail(res) {
        uni.showToast({
          title: '分享失败',
          icon: 'none'
        });
      },
      complete: function complete() {}
    };
  },
  onShareTimeline: function onShareTimeline(res) {
    var that = this;
    var shareInfo = _store.default.getters.shareInfo;
    var query = shareInfo.query;
    //携带当前页面资源ID参数
    var currentPage = getCurrentPages()[getCurrentPages().length - 1];
    var options = currentPage.options;
    if (JSON.stringify(options) != '{}' && options.id) {
      query += "&id=".concat(options.id);
    }
    return {
      title: shareInfo.title,
      query: query,
      imageUrl: shareInfo.image,
      success: function success(res) {
        uni.showToast({
          title: '分享成功'
        });
      },
      fail: function fail(res) {
        uni.showToast({
          title: '分享失败',
          icon: 'none'
        });
      },
      complete: function complete() {}
    };
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 521:
/*!*************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/shopro/validate/form.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _test = _interopRequireDefault(__webpack_require__(/*! @/uview-ui/libs/function/test.js */ 61));
/**
 * Validate v1.0.0 通用验证
 */
var _default = {
  // 手机号
  mobile: [{
    required: true,
    message: '请输入手机号',
    trigger: ['change', 'blur']
  }, {
    validator: function validator(rule, value, callback) {
      return _test.default.mobile(value);
    },
    message: '手机号码格式不正确',
    trigger: ['change', 'blur']
  }],
  // 账户
  account: [{
    required: true,
    min: 5,
    message: '请输入账号',
    trigger: ['change', 'blur']
  }],
  // 短信验证码
  code: [{
    required: true,
    min: 4,
    message: '请输入验证码',
    trigger: ['change', 'blur']
  }],
  // 密码
  password: [{
    required: true,
    message: '请输入密码',
    trigger: ['change', 'blur']
  }, {
    pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
    message: '需同时含有字母和数字，长度在6-12之间',
    trigger: ['change', 'blur']
  }],
  // 真实姓名
  realName: [{
    required: true,
    message: '请输入持卡人姓名',
    trigger: ['change', 'blur']
  }, {
    validator: function validator(rule, value, callback) {
      return _test.default.chinese(value);
    },
    message: '请输入汉字',
    trigger: ['change', 'blur']
  }],
  // 开户行
  bankName: [{
    required: true,
    message: '请输入开户行',
    trigger: ['change', 'blur']
  }, {
    validator: function validator(rule, value, callback) {
      return _test.default.chinese(value);
    },
    message: '请输入汉字',
    trigger: ['change', 'blur']
  }],
  // 银行卡号
  bankCode: [{
    required: true,
    message: '请输入银行卡号',
    trigger: ['change', 'blur']
  }, {
    validator: function validator(rule, value, callback) {
      return _test.default.number(value);
    },
    message: '请输入正确账号',
    trigger: ['change', 'blur']
  }],
  // 支付宝账号
  alipayAccount: [{
    required: true,
    message: '请输入支付账号',
    trigger: ['change', 'blur']
  }, {
    validator: function validator(rule, value, callback) {
      var isRange = _test.default.rangeLength(value, [6, 30]);
      var isAsterisk = _test.default.contains(value, '*');
      return isRange && !isAsterisk;
    },
    message: '请输入正确账号',
    trigger: ['change', 'blur']
  }]
};
exports.default = _default;

/***/ }),

/***/ 53:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 54:
/*!*******************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 55));
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 56));
var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 57));
var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 58));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 59));
var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 60));
var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 61));
var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 62));
var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 63));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 64));
var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 65);
var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 66));
var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 67));
var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 68));
var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 69));
/**
 * uview 工具入口
 * @description 精简掉了部分用不到的，如有需要，根据项目情况添加，或者直接覆盖
 */

// 引入全局mixin

// 时间格式化

// 时间戳格式化,返回多久之前

// 生成全局唯一guid字符串

// 对象和数组的深度克隆

// 添加单位

// 规则检验

// 获取整个父组件

// 去除空格

// toast提示，对uni.showToast的封装

// 获取sys()和os()工具方法
// 获取设备信息，挂载到$u的sys()(system的缩写)属性中，
// 同时把安卓和ios平台的名称"ios"和"android"挂到$u.os()中，方便取用

// 防抖方法

// 节流方法

// 配置信息

// 各个需要fixed的地方的z-index配置文件

var $u = {
  timeFormat: _timeFormat.default,
  timeFrom: _timeFrom.default,
  guid: _guid.default,
  sys: _sys.sys,
  os: _sys.os,
  test: _test.default,
  deepClone: _deepClone.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  toast: _toast.default,
  config: _config.default,
  // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default
};

// $u挂载到uni对象上
uni.$u = $u;
var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  // 时间格式化，timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};
var _default = {
  install: install
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 55:
/*!******************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/mixin/mixin.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _env = __webpack_require__(/*! @/env.js */ 34);
module.exports = {
  data: function data() {
    return {
      //解决小程序端template中无法使用vue挂载变量
      $IMG_URL: _env.IMG_URL,
      //图片地址
      $API_URL: _env.API_URL,
      //api地址
      $tools: this.$tools // 工具函数
    };
  },
  mounted: function mounted() {
    var _this = this;
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$nextTick(function () {
      _this.$u.getRect = _this.$uGetRect;
    });
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {
      var _this2 = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().in(_this2)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    getParentData: function getParentData() {
      var _this3 = this;
      var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this3.parentData[key] = _this3.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    }
  },
  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {
    var _this4 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this4) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 56:
/*!**************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/timeFormat.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {
    var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError('fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);
    var fillLength = maxLength - str.length,
      times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(),
    // 年
    "m+": (date.getMonth() + 1).toString(),
    // 月
    "d+": date.getDate().toString(),
    // 日
    "h+": date.getHours().toString(),
    // 时
    "M+": date.getMinutes().toString(),
    // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    }
    ;
  }
  ;
  return fmt;
}
var _default = timeFormat;
exports.default = _default;

/***/ }),

/***/ 57:
/*!************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/timeFrom.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 56));
/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
function timeFrom() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));
  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }
  }
  return tips;
}
var _default = timeFrom;
exports.default = _default;

/***/ }),

/***/ 58:
/*!********************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/guid.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;
  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}
var _default = guid;
exports.default = _default;

/***/ }),

/***/ 59:
/*!*************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/deepClone.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if ((0, _typeof2.default)(obj) !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = (0, _typeof2.default)(obj[i]) === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
var _default = deepClone;
exports.default = _default;

/***/ }),

/***/ 592:
/*!***************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/util/async-validator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"Shopro分销商城（前端）vue3版本已更新","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}) && "development" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " " + arg;
    }
    return str;
  }
  return f;
}
function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function (a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors)
        }) : resolve();
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function (e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results)
        }) : resolve();
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }
    objArrKeys.forEach(function (key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((0, _typeof2.default)(value) === 'object' && (0, _typeof2.default)(target[s]) === 'object') {
          target[s] = _extends({}, target[s], {}, value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    // 修改源码，将字符串数值先转为数值
    return typeof +value === 'number';
  },
  object: function object(value) {
    return (0, _typeof2.default)(value) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check
  } else if (ruleType && (0, _typeof2.default)(value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type

  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}
var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}
var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === '') {
      value = undefined;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'array');
    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function date(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      var dateObject;
      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}
function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : (0, _typeof2.default)(value);
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}
function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
}
var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};
function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}
Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((0, _typeof2.default)(rules) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z;
    var item;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc() {};
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }
    function complete(results) {
      var i;
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }
      callback(errors, fields);
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof2.default)(rule.fields) === 'object' || (0, _typeof2.default)(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }
        errors = errors.map(complementError(rule));
        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};
Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  validators[type] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
var _default = Schema;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/node-libs-browser/mock/process.js */ 593)))

/***/ }),

/***/ 593:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 594);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 594:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 593)))

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!***********************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/addUnit.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addUnit;
var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 61));
// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 61:
/*!********************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/test.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 验证电子邮箱格式
 */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
 * 验证URL格式
 */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
 * 验证日期格式
 */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
 * 验证十进制数字
 */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
 * 验证整数
 */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
 * 验证身份证号码
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
}

/**
 * 是否车牌号
 */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
 * 是否固定电话
 */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
  switch ((0, _typeof2.default)(value)) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if ((0, _typeof2.default)(obj) == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 是否数组
 */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
 * 是否对象
 */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}
var _default = {
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code
};
exports.default = _default;

/***/ }),

/***/ 62:
/*!***********************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/$parent.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = $parent;
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 63:
/*!********************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/trim.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function trim(str) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}
var _default = trim;
exports.default = _default;

/***/ }),

/***/ 64:
/*!*********************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/toast.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function toast(title) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration
  });
}
var _default = toast;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 65:
/*!*******************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/sys.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.os = os;
exports.sys = sys;
function os() {
  return uni.getSystemInfoSync().platform;
}
;
function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 66:
/*!************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/debounce.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}
var _default = debounce;
exports.default = _default;

/***/ }),

/***/ 67:
/*!************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/function/throttle.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timer, flag;
/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }
  }
}
;
var _default = throttle;
exports.default = _default;

/***/ }),

/***/ 68:
/*!********************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/config/config.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 此版本发布于2020-12-17
var version = '1.8.3';
var _default = {
  v: version,
  version: version,
  // 主题名称
  type: ['primary', 'success', 'info', 'error', 'warning']
};
exports.default = _default;

/***/ }),

/***/ 69:
/*!********************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/config/zIndex.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */
var _default = {
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965
};
exports.default = _default;

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 740:
/*!*******************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/libs/util/emitter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 递归使用 call 方式this指向
 * @param componentName // 需要找的组件的名称
 * @param eventName // 事件名称
 * @param params // 需要传递的参数
 */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
var _default = {
  methods: {
    /**
     * 派发 (向上查找) (一个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
     * 广播 (向下查找) (广播多个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 979:
/*!**************************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/components/u-parse/libs/MpHtmlParser.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {/**
 * html 解析器
 * @tutorial https://github.com/jin-yufeng/Parser
 * @version 20201029
 * @author JinYufeng
 * @listens MIT
 */
var cfg = __webpack_require__(/*! ./config.js */ 980),
  blankChar = cfg.blankChar,
  CssHandler = __webpack_require__(/*! ./CssHandler.js */ 981),
  windowWidth = uni.getSystemInfoSync().windowWidth;
var emoji;
function MpHtmlParser(data) {
  var _this = this;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  this.attrs = {};
  this.CssHandler = new CssHandler(options.tagStyle, windowWidth);
  this.data = data;
  this.domain = options.domain;
  this.DOM = [];
  this.i = this.start = this.audioNum = this.imgNum = this.videoNum = 0;
  options.prot = (this.domain || '').includes('://') ? this.domain.split('://')[0] : 'http';
  this.options = options;
  this.state = this.Text;
  this.STACK = [];
  // 工具函数
  this.bubble = function () {
    for (var i = _this.STACK.length, item; item = _this.STACK[--i];) {
      if (cfg.richOnlyTags[item.name]) return false;
      item.c = 1;
    }
    return true;
  };
  this.decode = function (val, amp) {
    var i = -1,
      j,
      en;
    while (1) {
      if ((i = val.indexOf('&', i + 1)) == -1) break;
      if ((j = val.indexOf(';', i + 2)) == -1) break;
      if (val[i + 1] == '#') {
        en = parseInt((val[i + 2] == 'x' ? '0' : '') + val.substring(i + 2, j));
        if (!isNaN(en)) val = val.substr(0, i) + String.fromCharCode(en) + val.substr(j + 1);
      } else {
        en = val.substring(i + 1, j);
        if (cfg.entities[en] || en == amp) val = val.substr(0, i) + (cfg.entities[en] || '&') + val.substr(j + 1);
      }
    }
    return val;
  };
  this.getUrl = function (url) {
    if (url[0] == '/') {
      if (url[1] == '/') url = _this.options.prot + ':' + url;else if (_this.domain) url = _this.domain + url;
    } else if (_this.domain && url.indexOf('data:') != 0 && !url.includes('://')) url = _this.domain + '/' + url;
    return url;
  };
  this.isClose = function () {
    return _this.data[_this.i] == '>' || _this.data[_this.i] == '/' && _this.data[_this.i + 1] == '>';
  };
  this.section = function () {
    return _this.data.substring(_this.start, _this.i);
  };
  this.parent = function () {
    return _this.STACK[_this.STACK.length - 1];
  };
  this.siblings = function () {
    return _this.STACK.length ? _this.parent().children : _this.DOM;
  };
}
MpHtmlParser.prototype.parse = function () {
  if (emoji) this.data = emoji.parseEmoji(this.data);
  for (var c; c = this.data[this.i]; this.i++) {
    this.state(c);
  }
  if (this.state == this.Text) this.setText();
  while (this.STACK.length) {
    this.popNode(this.STACK.pop());
  }
  return this.DOM;
};
// 设置属性
MpHtmlParser.prototype.setAttr = function () {
  var name = this.attrName.toLowerCase(),
    val = this.attrVal;
  if (cfg.boolAttrs[name]) this.attrs[name] = 'T';else if (val) {
    if (name == 'src' || name == 'data-src' && !this.attrs.src) this.attrs.src = this.getUrl(this.decode(val, 'amp'));else if (name == 'href' || name == 'style') this.attrs[name] = this.decode(val, 'amp');else if (name.substr(0, 5) != 'data-') this.attrs[name] = val;
  }
  this.attrVal = '';
  while (blankChar[this.data[this.i]]) {
    this.i++;
  }
  if (this.isClose()) this.setNode();else {
    this.start = this.i;
    this.state = this.AttrName;
  }
};
// 设置文本节点
MpHtmlParser.prototype.setText = function () {
  var back,
    text = this.section();
  if (!text) return;
  text = cfg.onText && cfg.onText(text, function () {
    return back = true;
  }) || text;
  if (back) {
    this.data = this.data.substr(0, this.start) + text + this.data.substr(this.i);
    var j = this.start + text.length;
    for (this.i = this.start; this.i < j; this.i++) {
      this.state(this.data[this.i]);
    }
    return;
  }
  if (!this.pre) {
    // 合并空白符
    var flag,
      tmp = [];
    for (var i = text.length, c; c = text[--i];) {
      if (!blankChar[c]) {
        tmp.unshift(c);
        if (!flag) flag = 1;
      } else {
        if (tmp[0] != ' ') tmp.unshift(' ');
        if (c == '\n' && flag == void 0) flag = 0;
      }
    }
    if (flag == 0) return;
    text = tmp.join('');
  }
  this.siblings().push({
    type: 'text',
    text: this.decode(text)
  });
};
// 设置元素节点
MpHtmlParser.prototype.setNode = function () {
  var node = {
      name: this.tagName.toLowerCase(),
      attrs: this.attrs
    },
    close = cfg.selfClosingTags[node.name];
  if (this.options.nodes.length) node.type = 'node';
  this.attrs = {};
  if (!cfg.ignoreTags[node.name]) {
    // 处理属性
    var attrs = node.attrs,
      style = this.CssHandler.match(node.name, attrs, node) + (attrs.style || ''),
      styleObj = {};
    if (attrs.id) {
      if (this.options.compress & 1) attrs.id = void 0;else if (this.options.useAnchor) this.bubble();
    }
    if (this.options.compress & 2 && attrs.class) attrs.class = void 0;
    switch (node.name) {
      case 'a':
      case 'ad':
        this.bubble();
        break;
      case 'font':
        if (attrs.color) {
          styleObj['color'] = attrs.color;
          attrs.color = void 0;
        }
        if (attrs.face) {
          styleObj['font-family'] = attrs.face;
          attrs.face = void 0;
        }
        if (attrs.size) {
          var size = parseInt(attrs.size);
          if (size < 1) size = 1;else if (size > 7) size = 7;
          var map = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
          styleObj['font-size'] = map[size - 1];
          attrs.size = void 0;
        }
        break;
      case 'embed':
        var src = node.attrs.src || '',
          type = node.attrs.type || '';
        if (type.includes('video') || src.includes('.mp4') || src.includes('.3gp') || src.includes('.m3u8')) node.name = 'video';else if (type.includes('audio') || src.includes('.m4a') || src.includes('.wav') || src.includes('.mp3') || src.includes('.aac')) node.name = 'audio';else break;
        if (node.attrs.autostart) node.attrs.autoplay = 'T';
        node.attrs.controls = 'T';
      case 'video':
      case 'audio':
        if (!attrs.id) attrs.id = node.name + ++this["".concat(node.name, "Num")];else this["".concat(node.name, "Num")]++;
        if (node.name == 'video') {
          if (this.videoNum > 3) node.lazyLoad = 1;
          if (attrs.width) {
            styleObj.width = parseFloat(attrs.width) + (attrs.width.includes('%') ? '%' : 'px');
            attrs.width = void 0;
          }
          if (attrs.height) {
            styleObj.height = parseFloat(attrs.height) + (attrs.height.includes('%') ? '%' : 'px');
            attrs.height = void 0;
          }
        }
        if (!attrs.controls && !attrs.autoplay) attrs.controls = 'T';
        attrs.source = [];
        if (attrs.src) {
          attrs.source.push(attrs.src);
          attrs.src = void 0;
        }
        this.bubble();
        break;
      case 'td':
      case 'th':
        if (attrs.colspan || attrs.rowspan) for (var k = this.STACK.length, item; item = this.STACK[--k];) {
          if (item.name == 'table') {
            item.flag = 1;
            break;
          }
        }
    }
    if (attrs.align) {
      if (node.name == 'table') {
        if (attrs.align == 'center') styleObj['margin-inline-start'] = styleObj['margin-inline-end'] = 'auto';else styleObj['float'] = attrs.align;
      } else styleObj['text-align'] = attrs.align;
      attrs.align = void 0;
    }
    // 压缩 style
    var styles = style.split(';');
    style = '';
    for (var i = 0, len = styles.length; i < len; i++) {
      var info = styles[i].split(':');
      if (info.length < 2) continue;
      var _key = info[0].trim().toLowerCase(),
        _value = info.slice(1).join(':').trim();
      if (_value[0] == '-' || _value.includes('safe')) style += ";".concat(_key, ":").concat(_value);else if (!styleObj[_key] || _value.includes('import') || !styleObj[_key].includes('import')) styleObj[_key] = _value;
    }
    if (node.name == 'img') {
      if (attrs.src && !attrs.ignore) {
        if (this.bubble()) attrs.i = (this.imgNum++).toString();else attrs.ignore = 'T';
      }
      if (attrs.ignore) {
        style += ';-webkit-touch-callout:none';
        styleObj['max-width'] = '100%';
      }
      var width;
      if (styleObj.width) width = styleObj.width;else if (attrs.width) width = attrs.width.includes('%') ? attrs.width : parseFloat(attrs.width) + 'px';
      if (width) {
        styleObj.width = width;
        attrs.width = '100%';
        if (parseInt(width) > windowWidth) {
          styleObj.height = '';
          if (attrs.height) attrs.height = void 0;
        }
      }
      if (styleObj.height) {
        attrs.height = styleObj.height;
        styleObj.height = '';
      } else if (attrs.height && !attrs.height.includes('%')) attrs.height = parseFloat(attrs.height) + 'px';
    }
    for (var key in styleObj) {
      var value = styleObj[key];
      if (!value) continue;
      if (key.includes('flex') || key == 'order' || key == 'self-align') node.c = 1;
      // 填充链接
      if (value.includes('url')) {
        var j = value.indexOf('(');
        if (j++ != -1) {
          while (value[j] == '"' || value[j] == "'" || blankChar[value[j]]) {
            j++;
          }
          value = value.substr(0, j) + this.getUrl(value.substr(j));
        }
      }
      // 转换 rpx
      else if (value.includes('rpx')) value = value.replace(/[0-9.]+\s*rpx/g, function ($) {
        return parseFloat($) * windowWidth / 750 + 'px';
      });else if (key == 'white-space' && value.includes('pre') && !close) this.pre = node.pre = true;
      style += ";".concat(key, ":").concat(value);
    }
    style = style.substr(1);
    if (style) attrs.style = style;
    if (!close) {
      node.children = [];
      if (node.name == 'pre' && cfg.highlight) {
        this.remove(node);
        this.pre = node.pre = true;
      }
      this.siblings().push(node);
      this.STACK.push(node);
    } else if (!cfg.filter || cfg.filter(node, this) != false) this.siblings().push(node);
  } else {
    if (!close) this.remove(node);else if (node.name == 'source') {
      var parent = this.parent();
      if (parent && (parent.name == 'video' || parent.name == 'audio') && node.attrs.src) parent.attrs.source.push(node.attrs.src);
    } else if (node.name == 'base' && !this.domain) this.domain = node.attrs.href;
  }
  if (this.data[this.i] == '/') this.i++;
  this.start = this.i + 1;
  this.state = this.Text;
};
// 移除标签
MpHtmlParser.prototype.remove = function (node) {
  var _this2 = this;
  var name = node.name,
    j = this.i;
  // 处理 svg
  var handleSvg = function handleSvg() {
    var src = _this2.data.substring(j, _this2.i + 1);
    node.attrs.xmlns = 'http://www.w3.org/2000/svg';
    for (var key in node.attrs) {
      if (key == 'viewbox') src = " viewBox=\"".concat(node.attrs.viewbox, "\"") + src;else if (key != 'style') src = " ".concat(key, "=\"").concat(node.attrs[key], "\"") + src;
    }
    src = '<svg' + src;
    var parent = _this2.parent();
    if (node.attrs.width == '100%' && parent && (parent.attrs.style || '').includes('inline')) parent.attrs.style = 'width:300px;max-width:100%;' + parent.attrs.style;
    _this2.siblings().push({
      name: 'img',
      attrs: {
        src: 'data:image/svg+xml;utf8,' + src.replace(/#/g, '%23'),
        style: node.attrs.style,
        ignore: 'T'
      }
    });
  };
  if (node.name == 'svg' && this.data[j] == '/') return handleSvg(this.i++);
  while (1) {
    if ((this.i = this.data.indexOf('</', this.i + 1)) == -1) {
      if (name == 'pre' || name == 'svg') this.i = j;else this.i = this.data.length;
      return;
    }
    this.start = this.i += 2;
    while (!blankChar[this.data[this.i]] && !this.isClose()) {
      this.i++;
    }
    if (this.section().toLowerCase() == name) {
      // 代码块高亮
      if (name == 'pre') {
        this.data = this.data.substr(0, j + 1) + cfg.highlight(this.data.substring(j + 1, this.i - 5), node.attrs) + this.data.substr(this.i - 5);
        return this.i = j;
      } else if (name == 'style') this.CssHandler.getStyle(this.data.substring(j + 1, this.i - 7));else if (name == 'title') this.DOM.title = this.data.substring(j + 1, this.i - 7);
      if ((this.i = this.data.indexOf('>', this.i)) == -1) this.i = this.data.length;
      if (name == 'svg') handleSvg();
      return;
    }
  }
};
// 节点出栈处理
MpHtmlParser.prototype.popNode = function (node) {
  // 空白符处理
  if (node.pre) {
    node.pre = this.pre = void 0;
    for (var i = this.STACK.length; i--;) {
      if (this.STACK[i].pre) this.pre = true;
    }
  }
  var siblings = this.siblings(),
    len = siblings.length,
    childs = node.children;
  if (node.name == 'head' || cfg.filter && cfg.filter(node, this) == false) return siblings.pop();
  var attrs = node.attrs;
  // 替换一些标签名
  if (cfg.blockTags[node.name]) node.name = 'div';else if (!cfg.trustTags[node.name]) node.name = 'span';
  // 处理列表
  if (node.c && (node.name == 'ul' || node.name == 'ol')) {
    if ((node.attrs.style || '').includes('list-style:none')) {
      for (var _i = 0, child; child = childs[_i++];) {
        if (child.name == 'li') child.name = 'div';
      }
    } else if (node.name == 'ul') {
      var floor = 1;
      for (var _i2 = this.STACK.length; _i2--;) {
        if (this.STACK[_i2].name == 'ul') floor++;
      }
      if (floor != 1) for (var _i3 = childs.length; _i3--;) {
        childs[_i3].floor = floor;
      }
    } else {
      for (var _i4 = 0, num = 1, _child; _child = childs[_i4++];) {
        if (_child.name == 'li') {
          _child.type = 'ol';
          _child.num = function (num, type) {
            if (type == 'a') return String.fromCharCode(97 + (num - 1) % 26);
            if (type == 'A') return String.fromCharCode(65 + (num - 1) % 26);
            if (type == 'i' || type == 'I') {
              num = (num - 1) % 99 + 1;
              var one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                res = (ten[Math.floor(num / 10) - 1] || '') + (one[num % 10 - 1] || '');
              if (type == 'i') return res.toLowerCase();
              return res;
            }
            return num;
          }(num++, attrs.type) + '.';
        }
      }
    }
  }
  // 处理表格
  if (node.name == 'table') {
    var padding = parseFloat(attrs.cellpadding),
      spacing = parseFloat(attrs.cellspacing),
      border = parseFloat(attrs.border);
    if (node.c) {
      if (isNaN(padding)) padding = 2;
      if (isNaN(spacing)) spacing = 2;
    }
    if (border) attrs.style = "border:".concat(border, "px solid gray;").concat(attrs.style || '');
    if (node.flag && node.c) {
      // 有 colspan 或 rowspan 且含有链接的表格转为 grid 布局实现
      attrs.style = "".concat(attrs.style || '', ";").concat(spacing ? ";grid-gap:".concat(spacing, "px") : ';border-left:0;border-top:0');
      var row = 1,
        col = 1,
        colNum,
        trs = [],
        children = [],
        map = {};
      (function f(ns) {
        for (var i = 0; i < ns.length; i++) {
          if (ns[i].name == 'tr') trs.push(ns[i]);else f(ns[i].children || []);
        }
      })(node.children);
      for (var _i5 = 0; _i5 < trs.length; _i5++) {
        for (var j = 0, td; td = trs[_i5].children[j]; j++) {
          if (td.name == 'td' || td.name == 'th') {
            while (map[row + '.' + col]) {
              col++;
            }
            var cell = {
              name: 'div',
              c: 1,
              attrs: {
                style: (td.attrs.style || '') + (border ? ";border:".concat(border, "px solid gray") + (spacing ? '' : ';border-right:0;border-bottom:0') : '') + (padding ? ";padding:".concat(padding, "px") : '')
              },
              children: td.children
            };
            if (td.attrs.colspan) {
              cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + parseInt(td.attrs.colspan));
              if (!td.attrs.rowspan) cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + 1);
              col += parseInt(td.attrs.colspan) - 1;
            }
            if (td.attrs.rowspan) {
              cell.attrs.style += ';grid-row-start:' + row + ';grid-row-end:' + (row + parseInt(td.attrs.rowspan));
              if (!td.attrs.colspan) cell.attrs.style += ';grid-column-start:' + col + ';grid-column-end:' + (col + 1);
              for (var k = 1; k < td.attrs.rowspan; k++) {
                map[row + k + '.' + col] = 1;
              }
            }
            children.push(cell);
            col++;
          }
        }
        if (!colNum) {
          colNum = col - 1;
          attrs.style += ";grid-template-columns:repeat(".concat(colNum, ",auto)");
        }
        col = 1;
        row++;
      }
      node.children = children;
    } else {
      attrs.style = "border-spacing:".concat(spacing, "px;").concat(attrs.style || '');
      if (border || padding) (function f(ns) {
        for (var i = 0, n; n = ns[i]; i++) {
          if (n.name == 'th' || n.name == 'td') {
            if (border) n.attrs.style = "border:".concat(border, "px solid gray;").concat(n.attrs.style || '');
            if (padding) n.attrs.style = "padding:".concat(padding, "px;").concat(n.attrs.style || '');
          } else f(n.children || []);
        }
      })(childs);
    }
    if (this.options.autoscroll) {
      var table = Object.assign({}, node);
      node.name = 'div';
      node.attrs = {
        style: 'overflow:scroll'
      };
      node.children = [table];
    }
  }
  this.CssHandler.pop && this.CssHandler.pop(node);
  // 自动压缩
  if (node.name == 'div' && !Object.keys(attrs).length && childs.length == 1 && childs[0].name == 'div') siblings[len - 1] = childs[0];
};
// 状态机
MpHtmlParser.prototype.Text = function (c) {
  if (c == '<') {
    var next = this.data[this.i + 1],
      isLetter = function isLetter(c) {
        return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';
      };
    if (isLetter(next)) {
      this.setText();
      this.start = this.i + 1;
      this.state = this.TagName;
    } else if (next == '/') {
      this.setText();
      if (isLetter(this.data[++this.i + 1])) {
        this.start = this.i + 1;
        this.state = this.EndTag;
      } else this.Comment();
    } else if (next == '!' || next == '?') {
      this.setText();
      this.Comment();
    }
  }
};
MpHtmlParser.prototype.Comment = function () {
  var key;
  if (this.data.substring(this.i + 2, this.i + 4) == '--') key = '-->';else if (this.data.substring(this.i + 2, this.i + 9) == '[CDATA[') key = ']]>';else key = '>';
  if ((this.i = this.data.indexOf(key, this.i + 2)) == -1) this.i = this.data.length;else this.i += key.length - 1;
  this.start = this.i + 1;
  this.state = this.Text;
};
MpHtmlParser.prototype.TagName = function (c) {
  if (blankChar[c]) {
    this.tagName = this.section();
    while (blankChar[this.data[this.i]]) {
      this.i++;
    }
    if (this.isClose()) this.setNode();else {
      this.start = this.i;
      this.state = this.AttrName;
    }
  } else if (this.isClose()) {
    this.tagName = this.section();
    this.setNode();
  }
};
MpHtmlParser.prototype.AttrName = function (c) {
  if (c == '=' || blankChar[c] || this.isClose()) {
    this.attrName = this.section();
    if (blankChar[c]) while (blankChar[this.data[++this.i]]) {
      ;
    }
    if (this.data[this.i] == '=') {
      while (blankChar[this.data[++this.i]]) {
        ;
      }
      this.start = this.i--;
      this.state = this.AttrValue;
    } else this.setAttr();
  }
};
MpHtmlParser.prototype.AttrValue = function (c) {
  if (c == '"' || c == "'") {
    this.start++;
    if ((this.i = this.data.indexOf(c, this.i + 1)) == -1) return this.i = this.data.length;
    this.attrVal = this.section();
    this.i++;
  } else {
    for (; !blankChar[this.data[this.i]] && !this.isClose(); this.i++) {
      ;
    }
    this.attrVal = this.section();
  }
  this.setAttr();
};
MpHtmlParser.prototype.EndTag = function (c) {
  if (blankChar[c] || c == '>' || c == '/') {
    var name = this.section().toLowerCase();
    for (var i = this.STACK.length; i--;) {
      if (this.STACK[i].name == name) break;
    }
    if (i != -1) {
      var node;
      while ((node = this.STACK.pop()).name != name) {
        this.popNode(node);
      }
      this.popNode(node);
    } else if (name == 'p' || name == 'br') this.siblings().push({
      name: name,
      attrs: {}
    });
    this.i = this.data.indexOf('>', this.i);
    this.start = this.i + 1;
    if (this.i == -1) this.i = this.data.length;else this.state = this.Text;
  }
};
module.exports = MpHtmlParser;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 980:
/*!********************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/components/u-parse/libs/config.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(wx) {/* 配置文件 */
var cfg = {
  // 出错占位图
  errorImg: null,
  // 过滤器函数
  filter: null,
  // 代码高亮函数
  highlight: null,
  // 文本处理函数
  onText: null,
  // 实体编码列表
  entities: {
    quot: '"',
    apos: "'",
    semi: ';',
    nbsp: '\xA0',
    ensp: "\u2002",
    emsp: "\u2003",
    ndash: '–',
    mdash: '—',
    middot: '·',
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    bull: '•',
    hellip: '…'
  },
  blankChar: makeMap(' ,\xA0,\t,\r,\n,\f'),
  boolAttrs: makeMap('allowfullscreen,autoplay,autostart,controls,ignore,loop,muted'),
  // 块级标签，将被转为 div
  blockTags: makeMap('address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section'),
  // 将被移除的标签
  ignoreTags: makeMap('area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr'),
  // 只能被 rich-text 显示的标签
  richOnlyTags: makeMap('a,colgroup,fieldset,legend'),
  // 自闭合的标签
  selfClosingTags: makeMap('area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr'),
  // 信任的标签
  trustTags: makeMap('a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video'),
  // 默认的标签样式
  userAgentStyles: {
    address: 'font-style:italic',
    big: 'display:inline;font-size:1.2em',
    blockquote: 'background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px',
    caption: 'display:table-caption;text-align:center',
    center: 'text-align:center',
    cite: 'font-style:italic',
    dd: 'margin-left:40px',
    mark: 'background-color:yellow',
    pre: 'font-family:monospace;white-space:pre;overflow:scroll',
    s: 'text-decoration:line-through',
    small: 'display:inline;font-size:0.8em',
    u: 'text-decoration:underline'
  }
};
function makeMap(str) {
  var map = Object.create(null),
    list = str.split(',');
  for (var i = list.length; i--;) {
    map[list[i]] = true;
  }
  return map;
}
if (wx.canIUse('editor')) {
  cfg.blockTags.pre = void 0;
  cfg.ignoreTags.rp = true;
  Object.assign(cfg.richOnlyTags, makeMap('bdi,bdo,caption,rt,ruby'));
  Object.assign(cfg.trustTags, makeMap('bdi,bdo,caption,pre,rt,ruby'));
}
module.exports = cfg;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 981:
/*!************************************************************************************!*\
  !*** E:/测试/Shopro分销商城（前端）vue3版本已更新/uview-ui/components/u-parse/libs/CssHandler.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cfg = __webpack_require__(/*! ./config.js */ 980),
  isLetter = function isLetter(c) {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';
  };
function CssHandler(tagStyle) {
  var styles = Object.assign(Object.create(null), cfg.userAgentStyles);
  for (var item in tagStyle) {
    styles[item] = (styles[item] ? styles[item] + ';' : '') + tagStyle[item];
  }
  this.styles = styles;
}
CssHandler.prototype.getStyle = function (data) {
  this.styles = new parser(data, this.styles).parse();
};
CssHandler.prototype.match = function (name, attrs) {
  var tmp,
    matched = (tmp = this.styles[name]) ? tmp + ';' : '';
  if (attrs.class) {
    var items = attrs.class.split(' ');
    for (var i = 0, item; item = items[i]; i++) {
      if (tmp = this.styles['.' + item]) matched += tmp + ';';
    }
  }
  if (tmp = this.styles['#' + attrs.id]) matched += tmp + ';';
  return matched;
};
module.exports = CssHandler;
function parser(data, init) {
  this.data = data;
  this.floor = 0;
  this.i = 0;
  this.list = [];
  this.res = init;
  this.state = this.Space;
}
parser.prototype.parse = function () {
  for (var c; c = this.data[this.i]; this.i++) {
    this.state(c);
  }
  return this.res;
};
parser.prototype.section = function () {
  return this.data.substring(this.start, this.i);
};
// 状态机
parser.prototype.Space = function (c) {
  if (c == '.' || c == '#' || isLetter(c)) {
    this.start = this.i;
    this.state = this.Name;
  } else if (c == '/' && this.data[this.i + 1] == '*') this.Comment();else if (!cfg.blankChar[c] && c != ';') this.state = this.Ignore;
};
parser.prototype.Comment = function () {
  this.i = this.data.indexOf('*/', this.i) + 1;
  if (!this.i) this.i = this.data.length;
  this.state = this.Space;
};
parser.prototype.Ignore = function (c) {
  if (c == '{') this.floor++;else if (c == '}' && ! --this.floor) {
    this.list = [];
    this.state = this.Space;
  }
};
parser.prototype.Name = function (c) {
  if (cfg.blankChar[c]) {
    this.list.push(this.section());
    this.state = this.NameSpace;
  } else if (c == '{') {
    this.list.push(this.section());
    this.Content();
  } else if (c == ',') {
    this.list.push(this.section());
    this.Comma();
  } else if (!isLetter(c) && (c < '0' || c > '9') && c != '-' && c != '_') this.state = this.Ignore;
};
parser.prototype.NameSpace = function (c) {
  if (c == '{') this.Content();else if (c == ',') this.Comma();else if (!cfg.blankChar[c]) this.state = this.Ignore;
};
parser.prototype.Comma = function () {
  while (cfg.blankChar[this.data[++this.i]]) {
    ;
  }
  if (this.data[this.i] == '{') this.Content();else {
    this.start = this.i--;
    this.state = this.Name;
  }
};
parser.prototype.Content = function () {
  this.start = ++this.i;
  if ((this.i = this.data.indexOf('}', this.i)) == -1) this.i = this.data.length;
  var content = this.section();
  for (var i = 0, item; item = this.list[i++];) {
    if (this.res[item]) this.res[item] += ';' + content;else this.res[item] = content;
  }
  this.list = [];
  this.state = this.Space;
};

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map