(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/plugins/membershiplevelvip/order/order"],{

/***/ 358:
/*!*********************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/main.js?{"page":"pages%2Fplugins%2Fmembershiplevelvip%2Forder%2Forder"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _order = _interopRequireDefault(__webpack_require__(/*! ./pages/plugins/membershiplevelvip/order/order.vue */ 359));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_order.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 359:
/*!**********************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/membershiplevelvip/order/order.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_vue_vue_type_template_id_416c5735___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.vue?vue&type=template&id=416c5735& */ 360);
/* harmony import */ var _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.vue?vue&type=script&lang=js& */ 362);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.vue?vue&type=style&index=0&lang=css& */ 364);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 37);

var renderjs





/* normalize component */

var component = Object(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_vue_vue_type_template_id_416c5735___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_vue_vue_type_template_id_416c5735___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _order_vue_vue_type_template_id_416c5735___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/plugins/membershiplevelvip/order/order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 360:
/*!*****************************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/membershiplevelvip/order/order.vue?vue&type=template&id=416c5735& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_416c5735___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=template&id=416c5735& */ 361);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_416c5735___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_416c5735___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_416c5735___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_template_id_416c5735___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 361:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/membershiplevelvip/order/order.vue?vue&type=template&id=416c5735& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.data_list.length
  var g1 = _vm.payment_list.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 362:
/*!***********************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/membershiplevelvip/order/order.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=script&lang=js& */ 363);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 363:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/membershiplevelvip/order/order.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(__webpack_require__(/*! ../../../../common/js/lib/base64.js */ 30));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var app = getApp();
var componentPopup = function componentPopup() {
  __webpack_require__.e(/*! require.ensure | components/popup/popup */ "components/popup/popup").then((function () {
    return resolve(__webpack_require__(/*! ../../../../components/popup/popup */ 1021));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentNoData = function componentNoData() {
  __webpack_require__.e(/*! require.ensure | components/no-data/no-data */ "components/no-data/no-data").then((function () {
    return resolve(__webpack_require__(/*! ../../../../components/no-data/no-data */ 510));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentBottomLine = function componentBottomLine() {
  __webpack_require__.e(/*! require.ensure | components/bottom-line/bottom-line */ "components/bottom-line/bottom-line").then((function () {
    return resolve(__webpack_require__(/*! ../../../../components/bottom-line/bottom-line */ 517));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      data_list: [],
      data_total: 0,
      data_page_total: 0,
      data_page: 1,
      data_list_loding_status: 1,
      data_bottom_line_status: false,
      params: null,
      load_status: 0,
      is_show_payment_popup: false,
      payment_list: [],
      payment_id: 0,
      temp_pay_value: 0,
      temp_pay_index: 0,
      nav_status_list: [{
        name: "全部",
        value: "-1"
      }, {
        name: "待支付",
        value: "0"
      }, {
        name: "已支付",
        value: "1"
      }, {
        name: "已取消",
        value: "2"
      }, {
        name: "已关闭",
        value: "3"
      }],
      nav_status_index: 0,
      content_list: [{
        name: "开通单号",
        field: "payment_user_order_no"
      }, {
        name: "开通时长",
        field: "period_value",
        unit_field: "period_unit"
      }, {
        name: "订单金额",
        field: "price",
        unit: "元"
      }, {
        name: "支付金额",
        field: "pay_price",
        unit: "元"
      }],
      // 支付信息
      popup_view_pay_qrcode_is_show: false,
      popup_view_pay_data: null,
      popup_view_pay_timer: null
    };
  },
  components: {
    componentPopup: componentPopup,
    componentNoData: componentNoData,
    componentBottomLine: componentBottomLine
  },
  props: {},
  onLoad: function onLoad(params) {
    // 是否指定状态
    var nav_status_index = 0;
    if ((params.status || null) != null) {
      for (var i in this.nav_status_list) {
        if (this.nav_status_list[i]['value'] == params.status) {
          nav_status_index = i;
          break;
        }
      }
    }
    this.setData({
      params: params,
      nav_status_index: nav_status_index
    });
    this.init();
  },
  onShow: function onShow() {
    // 分享菜单处理
    app.globalData.page_share_handle();
  },
  // 下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    this.setData({
      data_page: 1
    });
    this.get_data_list(1);
  },
  methods: {
    init: function init() {
      var user = app.globalData.get_user_info(this, 'init');
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.redirectTo({
            url: "/pages/login/login?event_callback=init"
          });
          return false;
        } else {
          // 获取数据
          this.get_data_list();
        }
      } else {
        this.setData({
          data_list_loding_status: 0,
          data_bottom_line_status: false
        });
      }
    },
    // 获取数据
    get_data_list: function get_data_list(is_mandatory) {
      var _this = this;
      // 分页是否还有数据
      if ((is_mandatory || 0) == 0) {
        if (this.data_bottom_line_status == true) {
          uni.stopPullDownRefresh();
          return false;
        }
      }

      // 加载loding
      uni.showLoading({
        title: '加载中...'
      });
      this.setData({
        data_list_loding_status: 1
      });

      // 参数
      var order_status = (this.nav_status_list[this.nav_status_index] || null) == null ? -1 : this.nav_status_list[this.nav_status_index]['value'];

      // 获取数据
      uni.request({
        url: app.globalData.get_request_url("index", "order", "membershiplevelvip"),
        method: 'POST',
        data: {
          page: this.data_page,
          status: order_status,
          is_more: 1
        },
        dataType: 'json',
        success: function success(res) {
          uni.hideLoading();
          uni.stopPullDownRefresh();
          if (res.data.code == 0) {
            if (res.data.data.data.length > 0) {
              if (_this.data_page <= 1) {
                var temp_data_list = res.data.data.data;
                // 下订单支付处理
                if (_this.load_status == 0) {
                  var ck = app.globalData.data.cache_page_pay_key;
                  var order_id = uni.getStorageSync(ck) || null;
                  if (order_id != null) {
                    uni.removeStorageSync(ck);
                    for (var i in temp_data_list) {
                      if (order_id == temp_data_list[i]['id']) {
                        _this.setData({
                          is_show_payment_popup: true,
                          temp_pay_value: temp_data_list[i]['id'],
                          temp_pay_index: i
                        });
                        break;
                      }
                    }
                  }
                }
              } else {
                var temp_data_list = _this.data_list || [];
                var temp_data = res.data.data.data;
                for (var i in temp_data) {
                  temp_data_list.push(temp_data[i]);
                }
              }
              _this.setData({
                data_list: temp_data_list,
                data_total: res.data.data.total,
                data_page_total: res.data.data.page_total,
                data_list_loding_status: 3,
                data_page: _this.data_page + 1,
                load_status: 1,
                payment_list: res.data.data.payment_list || []
              });

              // 是否还有数据
              _this.setData({
                data_bottom_line_status: _this.data_page > 1 && _this.data_page > _this.data_page_total
              });
            } else {
              _this.setData({
                data_list_loding_status: 0,
                load_status: 1,
                data_list: [],
                data_bottom_line_status: false
              });
            }
          } else {
            _this.setData({
              data_list_loding_status: 0,
              load_status: 1
            });
            if (app.globalData.is_login_check(res.data, _this, 'get_data_list')) {
              app.globalData.showToast(res.data.msg);
            }
          }
        },
        fail: function fail() {
          uni.hideLoading();
          uni.stopPullDownRefresh();
          _this.setData({
            data_list_loding_status: 2,
            load_status: 1
          });
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 滚动加载
    scroll_lower: function scroll_lower(e) {
      this.get_data_list();
    },
    // 支付
    pay_event: function pay_event(e) {
      this.setData({
        is_show_payment_popup: true,
        temp_pay_value: e.currentTarget.dataset.value,
        temp_pay_index: e.currentTarget.dataset.index
      });
    },
    // 支付弹窗关闭
    payment_popup_event_close: function payment_popup_event_close(e) {
      this.setData({
        is_show_payment_popup: false
      });
    },
    // 支付弹窗发起支付
    popup_payment_event: function popup_payment_event(e) {
      var payment_id = e.currentTarget.dataset.value || 0;
      this.setData({
        payment_id: payment_id
      });
      this.payment_popup_event_close();
      this.pay_handle(this.temp_pay_value, this.temp_pay_index);
    },
    // 支付方法
    pay_handle: function pay_handle(order_id, index) {
      var _this2 = this;
      // 支付方式
      var payment = null;
      for (var i in this.payment_list) {
        if (this.payment_list[i]['id'] == this.payment_id) {
          payment = this.payment_list[i];
        }
      }
      if (payment == null) {
        app.globalData.showToast('支付方式有误');
        return false;
      }

      // 请求数据
      var post_data = {
        id: order_id,
        payment_id: this.payment_id
      };

      // h5自定义重定向地址

      // 请求支付接口
      uni.showLoading({
        title: "请求中..."
      });
      uni.request({
        url: app.globalData.get_request_url("pay", "buy", "membershiplevelvip"),
        method: 'POST',
        data: post_data,
        dataType: 'json',
        success: function success(res) {
          uni.hideLoading();
          if (res.data.code == 0) {
            var data = res.data.data;
            _this2.common_pay_handle(_this2, data, index);
          } else {
            app.globalData.showToast(res.data.msg);
          }
        },
        fail: function fail() {
          uni.hideLoading();
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 快手小程序
    kuaishou_pay_handle: function kuaishou_pay_handle(self, data, index) {
      uni.pay({
        orderInfo: data.data,
        serviceId: '1',
        success: function success(res) {
          // 数据设置
          self.order_item_pay_success_handle(index);

          // 跳转支付页面
          uni.navigateTo({
            url: "/pages/paytips/paytips?code=9000"
          });
        },
        fail: function fail(res) {
          app.globalData.showToast('支付失败');
        }
      });
    },
    // 微信、支付宝、百度、头条、QQ
    common_pay_handle: function common_pay_handle(self, data, index) {
      uni.requestPayment({
        timeStamp: data.data.timeStamp,
        nonceStr: data.data.nonceStr,
        package: data.data.package,
        signType: data.data.signType,
        paySign: data.data.paySign,
        success: function success(res) {
          // 数据设置
          self.order_item_pay_success_handle(index);

          // 跳转支付页面
          uni.navigateTo({
            url: "/pages/paytips/paytips?code=9000"
          });
        },
        fail: function fail(res) {
          app.globalData.showToast('支付失败');
        }
      });
    },
    // QQ支付处理
    qq_pay_handle: function qq_pay_handle(self, data, index) {
      // 是否微信支付
      if (data.payment.payment == 'Weixin') {
        uni.requestWxPayment({
          url: data.data,
          referer: app.globalData.data.request_url,
          success: function success(res) {
            app.globalData.alert({
              msg: '支付成功后、请不要重复支付、如果订单状态未成功请联系客服处理',
              is_show_cancel: 0
            });
            self.get_data_list();
          },
          fail: function fail(res) {
            app.globalData.showToast('支付失败');
          }
        });
      } else {
        self.common_pay_handle(self, data, index);
      }
    },
    // h5支付处理
    h5_pay_handle: function h5_pay_handle(self, data, index) {
      // 字符串则为跳转地址直接进入
      if (typeof data.data == 'string') {
        window.location.href = data.data;
      } else {
        var status = false;
        // 微信jsapi
        if (data.payment.payment == 'Weixin' && (data.data.appId || null) != null && (data.data.timeStamp || null) != null && (data.data.nonceStr || null) != null && (data.data.package || null) != null && (data.data.signType || null) != null && (data.data.paySign || null) != null) {
          var onBridgeReady = function onBridgeReady() {
            WeixinJSBridge.invoke("getBrandWCPayRequest", {
              appId: data.data.appId,
              timeStamp: data.data.timeStamp,
              nonceStr: data.data.nonceStr,
              package: data.data.package,
              signType: data.data.signType,
              paySign: data.data.paySign
            }, function (res) {
              if (res.err_msg == "get_brand_wcpay_request:ok") {
                // 数据设置
                self.order_item_pay_success_handle(index);

                // 跳转支付页面
                uni.navigateTo({
                  url: "/pages/paytips/paytips?code=9000"
                });
              }
            });
          };
          status = true;
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
              document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
          } else {
            onBridgeReady();
          }
        }

        // 二维码展示
        if ((data.data.qrcode_url || null) != null && (data.data.name || null) != null && (data.data.check_url || null) != null && (data.data.order_no || null) != null) {
          status = true;
          // 显示支付窗口
          this.setData({
            popup_view_pay_data: data.data,
            popup_view_pay_qrcode_is_show: true
          });
          // 定时校验支付状态
          var timer = setInterval(function () {
            uni.request({
              url: app.globalData.get_request_url("paycheck", "buy", "membershiplevelvip"),
              method: 'POST',
              data: {
                order_no: self.popup_view_pay_data.order_no
              },
              dataType: 'json',
              success: function success(res) {
                uni.hideLoading();
                if (res.data.code == 0) {
                  // 清除定时和支付数据
                  clearInterval(self.popup_view_pay_timer);
                  self.setData({
                    popup_view_pay_data: null,
                    popup_view_pay_qrcode_is_show: false
                  });

                  // 数据设置
                  self.order_item_pay_success_handle(index);

                  // 跳转支付页面
                  uni.navigateTo({
                    url: "/pages/paytips/paytips?code=9000"
                  });
                } else {
                  // -300支付中、其它状态则提示错误
                  if (res.data.code != -300) {
                    clearInterval(self.popup_view_pay_timer);
                    app.globalData.showToast(res.data.msg);
                  }
                }
              },
              fail: function fail() {
                clearInterval(self.popup_view_pay_timer);
                app.globalData.showToast('服务器请求出错');
              }
            });
          }, 3000);
          self.setData({
            popup_view_pay_timer: timer
          });
        }

        // 返回html表单
        if ((data.data.html || null) != null) {
          status = true;
          var div = document.createElement('paydivform');
          div.innerHTML = data.data.html;
          document.body.appendChild(div);
          var fm = document.forms;
          if (fm.length > 0) {
            fm[0].submit();
          }
        }

        // 未匹配到的支付处理方式
        if (!status) {
          app.globalData.showToast(data.payment.name + '支付方式还未适配');
        }
      }
    },
    // 支付成功数据设置
    order_item_pay_success_handle: function order_item_pay_success_handle(index) {
      // 数据设置
      var temp_data_list = this.data_list;
      temp_data_list[index]['pay_price'] = temp_data_list[index]['price'];
      temp_data_list[index]['status'] = 1;
      temp_data_list[index]['status_name'] = '已支付';
      this.setData({
        data_list: temp_data_list
      });
    },
    // 取消
    cancel_event: function cancel_event(e) {
      var _this3 = this;
      uni.showModal({
        title: '温馨提示',
        content: '取消后不可恢复，确定继续吗?',
        confirmText: '确认',
        cancelText: '不了',
        success: function success(result) {
          if (result.confirm) {
            // 参数
            var id = e.currentTarget.dataset.value;
            var index = e.currentTarget.dataset.index;

            // 加载loding
            uni.showLoading({
              title: '处理中...'
            });
            uni.request({
              url: app.globalData.get_request_url("cancel", "order", "membershiplevelvip"),
              method: 'POST',
              data: {
                id: id
              },
              dataType: 'json',
              success: function success(res) {
                uni.hideLoading();
                if (res.data.code == 0) {
                  var temp_data_list = _this3.data_list;
                  temp_data_list[index]['status'] = 2;
                  temp_data_list[index]['status_name'] = '已取消';
                  _this3.setData({
                    data_list: temp_data_list
                  });
                  app.globalData.showToast(res.data.msg, 'success');
                } else {
                  app.globalData.showToast(res.data.msg);
                }
              },
              fail: function fail() {
                uni.hideLoading();
                app.globalData.showToast('服务器请求出错');
              }
            });
          }
        }
      });
    },
    // 删除
    delete_event: function delete_event(e) {
      var _this4 = this;
      uni.showModal({
        title: '温馨提示',
        content: '删除后不可恢复，确定继续吗?',
        confirmText: '确认',
        cancelText: '不了',
        success: function success(result) {
          if (result.confirm) {
            // 参数
            var id = e.currentTarget.dataset.value;
            var index = e.currentTarget.dataset.index;

            // 加载loding
            uni.showLoading({
              title: '处理中...'
            });
            uni.request({
              url: app.globalData.get_request_url("delete", "order", "membershiplevelvip"),
              method: 'POST',
              data: {
                id: id
              },
              dataType: 'json',
              success: function success(res) {
                uni.hideLoading();
                if (res.data.code == 0) {
                  var temp_data_list = _this4.data_list;
                  temp_data_list.splice(index, 1);
                  _this4.setData({
                    data_list: temp_data_list
                  });
                  if (temp_data_list.length == 0) {
                    _this4.setData({
                      data_list_loding_status: 0,
                      data_bottom_line_status: false
                    });
                  }
                  app.globalData.showToast(res.data.msg, 'success');
                } else {
                  app.globalData.showToast(res.data.msg);
                }
              },
              fail: function fail() {
                uni.hideLoading();
                app.globalData.showToast('服务器请求出错');
              }
            });
          }
        }
      });
    },
    // 导航事件
    nav_event: function nav_event(e) {
      this.setData({
        nav_status_index: e.currentTarget.dataset.index || 0,
        data_page: 1
      });
      this.get_data_list(1);
    },
    // 支付二维码展示窗口事件
    popup_view_pay_qrcode_event_close: function popup_view_pay_qrcode_event_close(e) {
      this.setData({
        popup_view_pay_qrcode_is_show: false
      });
      clearInterval(this.popup_view_pay_timer);
    },
    // 页面卸载
    onUnload: function onUnload(e) {
      clearInterval(this.popup_view_pay_timer);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 364:
/*!*******************************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/membershiplevelvip/order/order.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order.vue?vue&type=style&index=0&lang=css& */ 365);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 365:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/membershiplevelvip/order/order.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[358,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/plugins/membershiplevelvip/order/order.js.map