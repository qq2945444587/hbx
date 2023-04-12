(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/plugins/realstore/detail/detail"],{

/***/ 876:
/*!**************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/main.js?{"page":"pages%2Fplugins%2Frealstore%2Fdetail%2Fdetail"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/plugins/realstore/detail/detail.vue */ 877));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 877:
/*!***************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/realstore/detail/detail.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_cbe9c82a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=cbe9c82a& */ 878);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 880);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=css& */ 882);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 37);

var renderjs





/* normalize component */

var component = Object(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_cbe9c82a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_cbe9c82a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_cbe9c82a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/plugins/realstore/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 878:
/*!**********************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/realstore/detail/detail.vue?vue&type=template&id=cbe9c82a& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_cbe9c82a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=cbe9c82a& */ 879);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_cbe9c82a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_cbe9c82a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_cbe9c82a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_cbe9c82a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 879:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/realstore/detail/detail.vue?vue&type=template&id=cbe9c82a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 930))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 =
    (_vm.info || null) != null
      ? (_vm.info.buy_use_type_list || null) != null &&
        _vm.info.buy_use_type_list.length > 0
      : null
  var g1 =
    (_vm.info || null) != null
      ? (_vm.info.buy_use_type_list || null) != null &&
        _vm.info.buy_use_type_list.length > 0
      : null
  var g2 =
    (_vm.info || null) != null
      ? (_vm.goods_category || null) != null && _vm.goods_category.length > 0
      : null
  var g3 =
    (_vm.info || null) != null
      ? (_vm.goods_category || null) != null &&
        _vm.goods_category.length > 0 &&
        _vm.nav_active_index != -1 &&
        (_vm.goods_category[_vm.nav_active_index]["items"] || null) != null &&
        _vm.goods_category[_vm.nav_active_index]["items"].length > 0
      : null
  var g4 =
    (_vm.info || null) != null
      ? (_vm.data_list || null) != null && _vm.data_list.length > 0
      : null
  var g5 =
    (_vm.info || null) != null && _vm.cart_status
      ? (_vm.cart || null) != null &&
        (_vm.cart.data || null) != null &&
        _vm.cart.data.length > 0
      : null
  var g6 =
    (_vm.info || null) != null ? _vm.goods_specifications_choose.length : null
  var l0 =
    (_vm.info || null) != null && g6 > 0
      ? _vm.__map(_vm.goods_specifications_choose, function (item, key) {
          var $orig = _vm.__get_orig(item)
          var g7 = item.value.length
          return {
            $orig: $orig,
            g7: g7,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        g4: g4,
        g5: g5,
        g6: g6,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 880:
/*!****************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/realstore/detail/detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 881);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 881:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/realstore/detail/detail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
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
var componentNoData = function componentNoData() {
  __webpack_require__.e(/*! require.ensure | components/no-data/no-data */ "components/no-data/no-data").then((function () {
    return resolve(__webpack_require__(/*! ../../../../components/no-data/no-data */ 510));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentSearch = function componentSearch() {
  __webpack_require__.e(/*! require.ensure | components/search/search */ "components/search/search").then((function () {
    return resolve(__webpack_require__(/*! ../../../../components/search/search */ 938));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentBadge = function componentBadge() {
  __webpack_require__.e(/*! require.ensure | components/badge/badge */ "components/badge/badge").then((function () {
    return resolve(__webpack_require__(/*! ../../../../components/badge/badge */ 980));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentPopup = function componentPopup() {
  __webpack_require__.e(/*! require.ensure | components/popup/popup */ "components/popup/popup").then((function () {
    return resolve(__webpack_require__(/*! ../../../../components/popup/popup */ 1021));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var common_static_url = app.globalData.get_static_url('common');
var _default = {
  data: function data() {
    return {
      status_bar_height: parseInt(app.globalData.get_system_info('statusBarHeight', 0)),
      common_static_url: common_static_url,
      data_list_loding_status: 1,
      data_list_loding_msg: '',
      currency_symbol: app.globalData.data.currency_symbol,
      cache_buy_use_type_index_key: 'cache_plugins_realstore_buy_use_type_index',
      buy_use_type_index: 0,
      params: null,
      is_first: 1,
      scroll_top: 0,
      scroll_top_old: 0,
      user: null,
      info: null,
      goods_category: [],
      data_list: [],
      data_total: 0,
      data_page_total: 0,
      data_page: 1,
      cart: null,
      goods_count: 0,
      data_base: null,
      favor_user: [],
      tablecode: null,
      category: [],
      goods_list: [],
      search_keywords_value: '',
      nav_active_index: -1,
      nav_active_item_index: -1,
      cart_status: false,
      popup_spec_status: false,
      goods_spec_base_price: 0,
      goods_spec_base_original_price: 0,
      goods_spec_base_inventory: 0,
      goods_spec_base_images: '',
      goods_choose_data: {},
      goods_specifications_choose: [],
      // 收藏信息
      favor_info: {
        "text": "收藏",
        "status": 0,
        "count": 0
      },
      // 用户位置信息
      user_location: null,
      // 自定义分享信息
      share_info: {},
      // 是否单页预览
      is_single_page: app.globalData.is_current_single_page() || 0,
      // 顶部导航返回按钮
      is_realstore_top_nav_back: app.globalData.data.is_realstore_top_nav_back || 0
    };
  },
  components: {
    componentNoData: componentNoData,
    componentSearch: componentSearch,
    componentBadge: componentBadge,
    componentPopup: componentPopup
  },
  props: {},
  onLoad: function onLoad(params) {
    this.setData({
      params: app.globalData.launch_params_handle(params),
      user: app.globalData.get_user_cache_info()
    });
  },
  onShow: function onShow() {
    // 类型选择
    this.setData({
      buy_use_type_index: this.get_buy_use_type_index()
    });

    // 用户位置初始化
    this.user_location_init();

    // 获取数据
    this.get_detail_init();

    // 初始化配置
    this.init_config();
  },
  // 下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    this.setData({
      data_page: 1
    });
    this.reset_scroll();
    this.get_detail_init();
  },
  methods: {
    // 初始化配置
    init_config: function init_config(status) {
      if ((status || false) == true) {
        this.setData({
          currency_symbol: app.globalData.get_config('currency_symbol')
        });
      } else {
        app.globalData.is_config(this, 'init_config');
      }
    },
    // 获取数据-初始化
    get_detail_init: function get_detail_init() {
      var _this = this;
      uni.request({
        url: app.globalData.get_request_url("index", "detail", "realstore"),
        method: 'POST',
        data: this.request_params_merge({
          "id": this.params.id || 0
        }, 'init'),
        dataType: 'json',
        success: function success(res) {
          uni.stopPullDownRefresh();
          if (res.data.code == 0) {
            var data = res.data.data;
            _this.setData({
              data_base: data.base || null,
              info: data.info || null,
              goods_category: data.goods_category || [],
              favor_user: data.favor_user || [],
              tablecode: data.tablecode || null
            });

            // 下单类型是否存在索引
            _this.setData({
              buy_use_type_index: _this.get_buy_use_type_index()
            });

            // 收藏处理
            if ((_this.info || null) != null) {
              // 收藏信息
              var status = _this.favor_user.indexOf(_this.info.id) != -1 ? 1 : 0;
              _this.setData({
                favor_info: {
                  "count": _this.info.favor_count || 0,
                  "status": status,
                  "text": (status == 1 ? '已' : '') + '收藏'
                }
              });

              // 基础自定义分享
              _this.setData({
                share_info: {
                  title: _this.info.seo_title || _this.info.name,
                  desc: _this.info.seo_desc || _this.info.describe,
                  path: '/pages/plugins/realstore/detail/detail',
                  query: 'id=' + _this.info.id,
                  img: _this.info.logo
                }
              });

              // 标题名称
              uni.setNavigationBarTitle({
                title: _this.info.name
              });

              // 获取数据、仅首次调用
              // 获取列表接口和购物车
              if (_this.is_first == 1) {
                _this.get_data_list();
                _this.get_cart_data(_this.is_first);
                _this.setData({
                  is_first: 0
                });
              } else {
                // 非首次赋值购物车数据
                _this.setData({
                  cart: data.cart || null
                });
                // 购物车更新列表数据处理
                _this.cart_data_list_handle();
              }
            }
          } else {
            _this.setData({
              data_list_loding_status: 2,
              data_list_loding_msg: res.data.msg
            });
          }

          // 分享菜单处理
          app.globalData.page_share_handle(_this.share_info);
        },
        fail: function fail() {
          uni.stopPullDownRefresh();
          _this.setData({
            data_list_loding_status: 2,
            data_list_loding_msg: '服务器请求出错'
          });
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 获取数据-商品列表
    get_data_list: function get_data_list(is_mandatory) {
      var _this2 = this;
      // 分页是否还有数据
      if ((is_mandatory || 0) == 0) {
        if (this.data_bottom_line_status == true) {
          uni.stopPullDownRefresh();
          return false;
        }
      }

      // 加载loding
      uni.showLoading({
        title: '加载中...',
        mask: true
      });

      // 分类id
      var temp_category = this.goods_category;
      if (this.nav_active_item_index != -1) {
        var category_id = temp_category[this.nav_active_index]['items'][this.nav_active_item_index]['id'];
      } else {
        var category_id = this.nav_active_index == -1 ? 0 : temp_category[this.nav_active_index]['id'];
      }

      // 获取数据
      uni.request({
        url: app.globalData.get_request_url("datalist", "detail", "realstore"),
        method: 'POST',
        data: this.request_params_merge({
          id: this.params.id || 0,
          page: this.data_page,
          keywords: this.search_keywords_value,
          category_id: category_id
        }, 'data'),
        dataType: 'json',
        success: function success(res) {
          uni.hideLoading();
          uni.stopPullDownRefresh();
          if (res.data.code == 0) {
            var data = res.data.data;
            if (data.data.length > 0) {
              if (_this2.data_page <= 1) {
                var temp_data_list = data.data;
              } else {
                var temp_data_list = _this2.data_list || [];
                var temp_data = data.data;
                for (var i in temp_data) {
                  temp_data_list.push(temp_data[i]);
                }
              }
              _this2.setData({
                data_list: temp_data_list,
                data_total: data.total,
                data_page_total: data.page_total,
                data_list_loding_status: 3,
                data_page: _this2.data_page + 1
              });

              // 是否还有数据
              _this2.setData({
                data_bottom_line_status: _this2.data_page > 1 && _this2.data_page > _this2.data_page_total
              });
            } else {
              _this2.setData({
                data_list_loding_status: 0
              });
              if (_this2.data_page <= 1) {
                _this2.setData({
                  data_list: [],
                  data_bottom_line_status: false
                });
              }
            }
          } else {
            _this2.setData({
              data_list_loding_status: 0,
              data_list_loding_msg: res.data.msg
            });
            app.globalData.showToast(res.data.msg);
          }
        },
        fail: function fail() {
          uni.hideLoading();
          uni.stopPullDownRefresh();
          _this2.setData({
            data_list_loding_status: 2,
            data_list_loding_msg: '服务器请求出错'
          });
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 收藏事件
    favor_event: function favor_event(e) {
      var _this3 = this;
      if (!app.globalData.is_single_page_check()) {
        return false;
      }
      var user = app.globalData.get_user_info(this, 'favor_event');
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.navigateTo({
            url: "/pages/login/login?event_callback=favor_event"
          });
          return false;
        } else {
          uni.showLoading({
            title: '处理中...'
          });
          uni.request({
            url: app.globalData.get_request_url("reversal", "favor", "realstore"),
            method: 'POST',
            data: {
              "id": this.info.id
            },
            dataType: 'json',
            success: function success(res) {
              uni.hideLoading();
              if (res.data.code == 0) {
                _this3.setData({
                  favor_info: res.data.data
                });
                app.globalData.showToast(res.data.msg, 'success');
              } else {
                if (app.globalData.is_login_check(res.data, _this3, 'favor_event')) {
                  app.globalData.showToast(res.data.msg);
                }
              }
            },
            fail: function fail() {
              uni.hideLoading();
              app.globalData.showToast('服务器请求出错');
            }
          });
        }
      }
    },
    // 列表数据操作
    buy_number_event: function buy_number_event(e) {
      if (!app.globalData.is_single_page_check()) {
        return false;
      }
      var user = app.globalData.get_user_info(this);
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.navigateTo({
            url: "/pages/login/login?event_callback=buy_number_event"
          });
          return false;
        } else {
          var index = e.currentTarget.dataset.index;
          var type = parseInt(e.currentTarget.dataset.type) || 0;
          var temp_goods = this.data_list[index];

          // 是否存在多规格
          if ((temp_goods.is_exist_many_spec || 0) != 0) {
            // 是否购物车中操作
            if (type == 0) {
              this.setData({
                cart_status: true
              });
              app.globalData.showToast('不同规格的商品需在购物车减购');
            } else {
              // 展示规格选择
              var temp_specifications = temp_goods['specifications']['choose'] || [];
              if (temp_specifications.length > 0) {
                for (var i in temp_specifications) {
                  for (var k in temp_specifications[i]['value']) {
                    temp_specifications[i]['value'][k]['is_active'] = '';
                    if (i > 0) {
                      temp_specifications[i]['value'][k]['is_dont'] = 'spec-dont-choose';
                    }
                  }
                }
              }
              this.setData({
                popup_spec_status: true,
                goods_choose_data: temp_goods,
                goods_specifications_choose: temp_specifications,
                goods_spec_base_price: temp_goods.price,
                goods_spec_base_original_price: temp_goods.original_price || 0,
                goods_spec_base_inventory: temp_goods.inventory,
                goods_spec_base_images: temp_goods.images
              });
            }
            return false;
          }

          // 数据操作处理
          this.buy_number_event_handle(type, temp_goods);
        }
      }
    },
    // 列表数量事件处理
    buy_number_event_handle: function buy_number_event_handle(type, goods) {
      var spec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var res = this.buy_number_handle(type, goods, 'buy_number');
      if (res === false) {
        return false;
      }

      // 为0或减操作则查询
      var cart_item = null;
      if (type == 0 || type == 1 && goods['buy_number'] > 0) {
        var cart_data = this.cart.data;
        var params_spec = (spec || null) == null || (0, _typeof2.default)(spec) != 'object' ? '' : JSON.stringify(spec);
        for (var i in cart_data) {
          if (goods['id'] == cart_data[i]['goods_id']) {
            var cart_spec = (cart_data[i]['spec'] || null) == null || (0, _typeof2.default)(cart_data[i]['spec']) != 'object' ? '' : JSON.stringify(cart_data[i]['spec']);
            if (type == 0 || type == 1 && cart_spec == params_spec) {
              cart_item = cart_data[i];
            }
            break;
          }
        }
      }

      // 操作类型
      if (res == 0) {
        if (cart_item == null) {
          app.globalData.showToast('购物车id有误');
          return false;
        }
        this.cart_delete(cart_item.id);
      } else if (cart_item == null) {
        this.cart_save(goods['id'], res, spec);
      } else {
        var number = type == 0 ? parseInt(cart_item['stock']) - res : res + parseInt(cart_item['stock']);
        this.cart_update(cart_item.id, goods['id'], number);
      }
      return true;
    },
    // 购物车数量操作
    cart_buy_number_event: function cart_buy_number_event(e) {
      if (!app.globalData.is_single_page_check()) {
        return false;
      }
      var user = app.globalData.get_user_info(this);
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.navigateTo({
            url: "/pages/login/login?event_callback=cart_buy_number_event"
          });
          return false;
        } else {
          var index = e.currentTarget.dataset.index;
          var type = parseInt(e.currentTarget.dataset.type) || 0;
          var temp_data = this.cart.data;
          var temp_goods = temp_data[index];

          // 数据操作处理
          var res = this.buy_number_handle(type, temp_goods, 'stock');
          if (res === false) {
            return false;
          }

          // 操作类型
          if (res == 0) {
            this.cart_delete(temp_goods['id']);
          } else {
            var number = type == 0 ? parseInt(temp_goods['stock']) - res : res + parseInt(temp_goods['stock']);
            this.cart_update(temp_goods['id'], temp_goods['goods_id'], number);
          }
        }
      }
    },
    // 批量删除操作
    cart_all_delete_event: function cart_all_delete_event(e) {
      var _this4 = this;
      uni.showModal({
        title: '温馨提示',
        content: '挑了这么久，真的要清空吗？',
        confirmText: '确认',
        cancelText: '暂不',
        success: function success(result) {
          if (result.confirm) {
            var ids = [];
            var temp_data = _this4.cart.data;
            for (var i in temp_data) {
              ids.push(temp_data[i]['id']);
            }
            _this4.cart_delete(ids.join(','));
          }
        }
      });
    },
    // 数量操作处理
    buy_number_handle: function buy_number_handle(type, goods, buy_number_field) {
      // 门店状态
      if (type == 1 && !this.is_status_check()) {
        return false;
      }

      // 加减处理
      var buy_number = parseInt(goods[buy_number_field]) || 0;
      if (type == 0) {
        buy_number -= 1;
      } else {
        buy_number += 1;
      }
      if (buy_number < 0) {
        buy_number = 0;
      }

      // 数据校验
      var buy_min_number = parseInt(goods['buy_min_number']) || 1;
      var buy_max_number = parseInt(goods['buy_max_number']) || 0;
      var inventory = parseInt(goods['inventory']);
      var inventory_unit = goods['inventory_unit'];
      if (buy_min_number > 0) {
        if (type == 0) {
          if (buy_number < buy_min_number) {
            buy_number = 0;
          }
        } else {
          if (buy_number < buy_min_number) {
            buy_number = buy_min_number;
          }
        }
      }
      if (buy_max_number > 0 && buy_number > buy_max_number) {
        app.globalData.showToast('限购' + buy_max_number + inventory_unit);
        return false;
      }
      if (buy_number > inventory) {
        app.globalData.showToast('库存数量' + inventory + inventory_unit);
        return false;
      }
      if (goods[buy_number_field] == buy_number) {
        app.globalData.showToast('数量为改变');
        return false;
      }

      // 操作数量
      var opt_number = 1;
      if (type == 0) {
        if (buy_number <= 0) {
          opt_number = 0;
        }
      } else {
        if (buy_number > goods['buy_number']) {
          opt_number = buy_number - goods['buy_number'];
        }
      }
      return opt_number;
    },
    // 购物车添加
    cart_save: function cart_save(goods_id, buy_number) {
      var _this5 = this;
      var spec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      uni.showLoading({
        title: '处理中...'
      });
      uni.request({
        url: app.globalData.get_request_url('save', 'cart'),
        method: 'POST',
        data: {
          "goods_id": goods_id,
          "stock": buy_number,
          "spec": spec
        },
        dataType: 'json',
        success: function success(res) {
          uni.hideLoading();
          if (res.data.code == 0) {
            _this5.get_cart_data();
          } else {
            if (app.globalData.is_login_check(res.data)) {
              app.globalData.showToast(res.data.msg);
            }
          }
        },
        fail: function fail() {
          uni.hideLoading();
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 购物车更新
    cart_update: function cart_update(cart_id, goods_id, buy_number) {
      var _this6 = this;
      uni.showLoading({
        title: '处理中...',
        mask: true
      });
      uni.request({
        url: app.globalData.get_request_url("stock", "cart"),
        method: 'POST',
        data: {
          "id": cart_id,
          "goods_id": goods_id,
          "stock": buy_number
        },
        dataType: 'json',
        success: function success(res) {
          uni.hideLoading();
          if (res.data.code == 0) {
            _this6.get_cart_data();
          } else {
            if (app.globalData.is_login_check(res.data)) {
              app.globalData.showToast(res.data.msg);
            } else {
              app.globalData.showToast('提交失败，请重试！');
            }
          }
        },
        fail: function fail() {
          uni.hideLoading();
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 购物车删除
    cart_delete: function cart_delete(cart_id) {
      var _this7 = this;
      uni.showLoading({
        title: '处理中...',
        mask: true
      });
      uni.request({
        url: app.globalData.get_request_url('delete', 'cart'),
        method: 'POST',
        data: {
          "id": cart_id
        },
        dataType: 'json',
        success: function success(res) {
          uni.hideLoading();
          if (res.data.code == 0) {
            _this7.get_cart_data();
          } else {
            if (app.globalData.is_login_check(res.data)) {
              app.globalData.showToast(res.data.msg);
            } else {
              app.globalData.showToast('提交失败，请重试！');
            }
          }
        },
        fail: function fail() {
          uni.hideLoading();
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 获取购物车数据、参数是否首次请求
    get_cart_data: function get_cart_data() {
      var _this8 = this;
      var is_first = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      uni.request({
        url: app.globalData.get_request_url("cartdata", "detail", "realstore"),
        method: 'POST',
        data: this.request_params_merge({
          "id": this.params.id || 0
        }, 'cart'),
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 0) {
            _this8.setData({
              cart: res.data.data
            });
            _this8.cart_data_list_handle();

            // 首次判断是否需要开启购物车
            if (is_first == 1 && (_this8.params.is_show_cart || 0) == 1) {
              _this8.setData({
                cart_status: true
              });
            }
          } else {
            app.globalData.showToast('请求失败，请重试！');
          }
        },
        fail: function fail() {
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 购物车更新列表数据处理
    cart_data_list_handle: function cart_data_list_handle() {
      var temp_cart = this.cart || null;
      if (temp_cart != null) {
        var temp_data_list = this.data_list;
        if (temp_data_list.length > 0) {
          for (var i in temp_data_list) {
            temp_data_list[i]['buy_number'] = 0;
            if (temp_cart.data.length > 0) {
              for (var k in temp_cart.data) {
                if (temp_cart.data[k]['goods_id'] == temp_data_list[i]['id']) {
                  temp_data_list[i]['buy_number'] += parseInt(temp_cart.data[k]['stock']);
                }
              }
            }
          }
        }
        this.setData({
          data_list: temp_data_list
        });
      }
    },
    // 门店状态判断
    is_status_check: function is_status_check() {
      if ((this.info || null) == null) {
        app.globalData.showToast('门店信息有误');
        return false;
      } else {
        if (this.info.status_info.status != 1) {
          app.globalData.showToast(this.info.status_info.msg);
          return false;
        }
      }
      return true;
    },
    // 搜索事件
    search_button_event: function search_button_event(e) {
      this.setData({
        search_keywords_value: e || '',
        data_page: 1
      });
      this.reset_scroll();
      this.get_data_list(1);
    },
    // 搜索icon扫码事件、扫码商品id实现加入购物车
    search_icon_event: function search_icon_event(e) {
      var user = app.globalData.get_user_info(this);
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.navigateTo({
            url: "/pages/login/login?event_callback=cart_buy_number_event"
          });
          return false;
        } else {
          // 门店状态
          if (!this.is_status_check()) {
            return false;
          }

          // 调用扫码
          var self = this;
          uni.scanCode({
            success: function success(res) {
              uni.showLoading({
                title: '处理中...',
                mask: true
              });
              uni.request({
                url: app.globalData.get_request_url("scan", "detail", "realstore"),
                method: 'POST',
                data: self.request_params_merge({
                  value: res.result
                }, 'buy'),
                dataType: 'json',
                success: function success(res) {
                  uni.hideLoading();
                  if (res.data.code == 0) {
                    if (res.data.data.is_error == 1) {
                      app.globalData.showToast(res.data.data.is_error_msg);
                    } else {
                      // 加入购物车
                      self.cart_save(res.data.data.goods_id, 1, res.data.data.spec);
                    }
                  } else {
                    if (app.globalData.is_login_check(res.data)) {
                      app.globalData.showToast(res.data.msg);
                    } else {
                      app.globalData.showToast('提交失败，请重试！');
                    }
                  }
                },
                fail: function fail() {
                  uni.hideLoading();
                  app.globalData.showToast('服务器请求出错');
                }
              });
            }
          });
        }
      }
    },
    // 购物车状态
    cart_event: function cart_event(e) {
      this.setData({
        cart_status: !this.cart_status
      });
    },
    // 购物车结算
    buy_submit_event: function buy_submit_event(e) {
      if (!app.globalData.is_single_page_check()) {
        return false;
      }

      // 门店状态
      if (!this.is_status_check()) {
        return false;
      }

      // 获取购物车数据
      var ids = [];
      if ((this.cart || null) != null) {
        var temp_data = this.cart.data || [];
        for (var i in temp_data) {
          ids.push(temp_data[i]['id']);
        }
      }
      if (ids.length <= 0) {
        app.globalData.showToast('请先选购商品');
        return false;
      }

      // 起步价
      var starting_price = parseFloat(this.info.starting_price) || 0;
      if (starting_price > 0 && this.cart.total_price < starting_price) {
        // 是否限制类型
        var limit_type = this.info.starting_price_limit_type_list || [];
        if (limit_type.length > 0) {
          var buy_use_type = this.info.buy_use_type_list[this.buy_use_type_index];
          if (limit_type.indexOf(buy_use_type['index']) != -1 || limit_type.indexOf(buy_use_type['index'].toString()) != -1) {
            app.globalData.showToast(buy_use_type['name'] + '起步价' + starting_price + '元');
            return false;
          }
        } else {
          app.globalData.showToast('起步价' + starting_price + '元');
          return false;
        }
      }

      // 进入订单确认页面
      var data = this.request_params_merge({
        "buy_type": "cart",
        "ids": ids.join(',')
      }, 'buy');
      uni.navigateTo({
        url: '/pages/buy/buy?data=' + encodeURIComponent(JSON.stringify(data))
      });
    },
    // 剪切板
    text_copy_event: function text_copy_event(e) {
      app.globalData.text_copy_event(e);
    },
    // 地图查看
    address_map_event: function address_map_event(e) {
      var info = this.info;
      if (info.lat == 0 || info.lng == 0) {
        app.globalData.showToast("地址有误");
        return false;
      }

      // 打开地图
      var address = (info.province_name || '') + (info.city_name || '') + (info.county_name || '') + (info.address || '');
      app.globalData.open_location(info.lng, info.lat, info.name, address);
    },
    // 电话
    tel_event: function tel_event(e) {
      app.globalData.call_tel(this.info.service_tel || null);
    },
    // 图片预览
    image_show_event: function image_show_event(e) {
      app.globalData.image_show_event(e);
    },
    // 导航事件
    nav_event: function nav_event(e) {
      this.setData({
        nav_active_index: e.currentTarget.dataset.index,
        nav_active_item_index: e.currentTarget.dataset.itemindex,
        data_page: 1
      });
      this.reset_scroll();
      this.get_data_list(1);
    },
    // 重置滑动位置
    reset_scroll: function reset_scroll() {
      var _this9 = this;
      this.setData({
        scroll_top: this.scroll_top_old
      });
      this.$nextTick(function () {
        _this9.setData({
          scroll_top: 0
        });
      });
    },
    // 滑动事件位置记录
    scroll_event: function scroll_event(e) {
      this.setData({
        scroll_top_old: e.detail.scrollTop
      });
    },
    // 滚动加载
    scroll_lower: function scroll_lower(e) {
      this.get_data_list();
    },
    // 顶部返回操作
    top_nav_left_back_event: function top_nav_left_back_event(e) {
      var pages = getCurrentPages();
      if (pages.length <= 1) {
        uni.switchTab({
          url: app.globalData.data.tabbar_pages[0]
        });
      } else {
        uni.navigateBack();
      }
    },
    // 地址信息初始化
    user_location_init: function user_location_init() {
      var result = uni.getStorageSync(app.globalData.data.cache_userlocation_key) || null;
      var data = null;
      if (result != null) {
        data = {
          name: result.name || null,
          address: result.address || null,
          lat: result.latitude || null,
          lng: result.longitude || null
        };
      }
      this.setData({
        user_location: data
      });
    },
    // 使用类型事件
    buy_use_type_event: function buy_use_type_event(e) {
      var self = this;
      uni.showActionSheet({
        itemList: this.info.buy_use_type_list.map(function (v) {
          return v.name;
        }),
        success: function success(res) {
          self.setData({
            buy_use_type_index: res.tapIndex,
            data_page: 1
          });
          uni.setStorageSync(self.cache_buy_use_type_index_key, res.tapIndex);
          self.reset_scroll();
          self.get_data_list(1);
          self.get_cart_data();
        }
      });
    },
    // 获取使用类型数据索引、默认在店0
    get_buy_use_type_index: function get_buy_use_type_index() {
      var index = uni.getStorageSync(this.cache_buy_use_type_index_key);
      if ((this.info || null) != null) {
        // 用户未设置类型则使用默认的
        if (index === null || index === '') {
          // 是否默认类型
          if (this.info.default_buy_use_type != undefined && this.info.default_buy_use_type != -1) {
            // 不在店铺设置的类型列表则默认0
            var temp_index = null;
            for (var i in this.info.buy_use_type_list) {
              if (this.info.buy_use_type_list[i]['index'] == this.info.default_buy_use_type) {
                temp_index = i;
              }
            }
            if (temp_index !== null) {
              index = temp_index;
            }
          }
        }

        // 不在店铺设置的类型列表则默认0
        if (this.info.buy_use_type_list[index] == undefined) {
          index = 0;
        }
      }
      return index || 0;
    },
    // 请求参数处理
    // 默认增加使用类型参数
    // 下单 buy / 初始化 init / 获取数据 data / 获取购物车 cart
    request_params_merge: function request_params_merge(data) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'init';
      // 用户使用类型
      var index = this.buy_use_type_index;
      if ((this.info || null) != null && (this.info.buy_use_type_list || null) != null && this.info.buy_use_type_list.length > 0) {
        if (this.info.buy_use_type_list[index] == undefined) {
          index = 0;
        }
        data['buy_use_type_index'] = this.buy_use_type_index;
      }

      // 初始化
      if (type == 'init') {
        // 桌码
        if ((this.params.tablecode_id || null) != null) {
          data['tablecode_id'] = this.params.tablecode_id;
        }
      }

      // 初始化、获取数据
      if (type == 'init' || type == 'data' || type == 'cart') {
        // 用户选择的位置
        var lng = 0;
        var lat = 0;
        if ((this.user_location || null) != null) {
          lng = this.user_location.lng || 0;
          lat = this.user_location.lat || 0;
        }
        data['lng'] = lng;
        data['lat'] = lat;
      }

      // 提交订单
      if (type == 'buy') {
        // 门店id
        data['realstore_id'] = this.info.id;

        // 桌码
        if ((this.tablecode || null) != null) {
          data['tablecode_id'] = this.tablecode.id;
        }
      }
      return data;
    },
    // 规格选择弹层关闭
    popup_spec_close_event: function popup_spec_close_event(e) {
      this.setData({
        popup_spec_status: false
      });
    },
    // 规格事件
    goods_specifications_event: function goods_specifications_event(e) {
      var key = e.currentTarget.dataset.key || 0;
      var keys = e.currentTarget.dataset.keys || 0;
      this.goods_specifications_handle(key, keys);
    },
    // 规格选择处理
    goods_specifications_handle: function goods_specifications_handle(key, keys) {
      // 不能选择和禁止选择跳过
      var temp_data = this.goods_specifications_choose;
      var temp_images = this.goods_spec_base_images;
      if ((temp_data[key]['value'][keys]['is_dont'] || null) == null && (temp_data[key]['value'][keys]['is_disabled'] || null) == null) {
        // 规格选择
        for (var i in temp_data) {
          for (var k in temp_data[i]['value']) {
            if ((temp_data[i]['value'][k]['is_dont'] || null) == null && (temp_data[i]['value'][k]['is_disabled'] || null) == null) {
              if (key == i) {
                if (keys == k && (temp_data[i]['value'][k]['is_active'] || null) == null) {
                  temp_data[i]['value'][k]['is_active'] = 'cr-white bg-main br-main';
                  if ((temp_data[i]['value'][k]['images'] || null) != null) {
                    temp_images = temp_data[i]['value'][k]['images'];
                  }
                } else {
                  temp_data[i]['value'][k]['is_active'] = '';
                }
              }
            }
          }
        }
        this.setData({
          goods_specifications_choose: temp_data,
          goods_spec_base_images: temp_images
        });

        // 不能选择规格处理
        this.goods_specifications_choose_handle_dont(key);

        // 获取下一个规格类型
        this.get_goods_specifications_type(key);

        // 获取规格详情
        this.get_goods_specifications_detail();
      }

      // 已选择规格
      var spec_selected = [];
      for (var i in temp_data) {
        for (var k in temp_data[i]['value']) {
          if ((temp_data[i]['value'][k]['is_active'] || null) != null) {
            spec_selected.push(temp_data[i]['value'][k]['name']);
          }
        }
      }
      this.setData({
        goods_spec_selected_text: spec_selected.length <= 0 ? '请选择规格' : spec_selected.join(' / ')
      });
    },
    // 不能选择规格处理
    goods_specifications_choose_handle_dont: function goods_specifications_choose_handle_dont(key) {
      var temp_data = this.goods_specifications_choose || [];
      if (temp_data.length <= 0) {
        return false;
      }

      // 是否不能选择
      key = parseInt(key);
      for (var i in temp_data) {
        for (var k in temp_data[i]['value']) {
          if (i > key) {
            temp_data[i]['value'][k]['is_dont'] = 'spec-dont-choose';
            temp_data[i]['value'][k]['is_disabled'] = '';
            temp_data[i]['value'][k]['is_active'] = '';
          }

          // 当只有一个规格的时候
          if (key == 0 && temp_data.length == 1) {
            temp_data[i]['value'][k]['is_disabled'] = (temp_data[i]['value'][k]['is_only_level_one'] || null) != null && (temp_data[i]['value'][k]['inventory'] || 0) <= 0 ? 'spec-items-disabled' : '';
          }
        }
      }
      this.setData({
        goods_specifications_choose: temp_data
      });
    },
    // 获取下一个规格类型
    get_goods_specifications_type: function get_goods_specifications_type(key) {
      var _this10 = this;
      var temp_data = this.goods_specifications_choose;
      var active_index = parseInt(key) + 1;
      var sku_count = app.globalData.get_length(temp_data);
      if (active_index <= 0 || active_index >= sku_count) {
        return false;
      }

      // 获取规格值
      var spec = [];
      for (var i in temp_data) {
        for (var k in temp_data[i]['value']) {
          if ((temp_data[i]['value'][k]['is_active'] || null) != null) {
            spec.push({
              "type": temp_data[i]['name'],
              "value": temp_data[i]['value'][k]['name']
            });
            break;
          }
        }
      }
      if (spec.length <= 0) {
        return false;
      }

      // 获取数据
      uni.request({
        url: app.globalData.get_request_url('spectype', 'goods'),
        method: 'POST',
        data: {
          id: this.goods_choose_data.id,
          spec: JSON.stringify(spec),
          buy_use_type_index: this.buy_use_type_index,
          realstore_id: this.info.id
        },
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 0) {
            var spec_type = res.data.data.spec_type;
            var spec_count = spec.length;
            var index = spec_count > 0 ? spec_count : 0;
            if (index < sku_count) {
              for (var i in temp_data) {
                for (var k in temp_data[i]['value']) {
                  if (index == i) {
                    temp_data[i]['value'][k]['is_dont'] = '';
                    var temp_value = temp_data[i]['value'][k]['name'];
                    var temp_status = false;
                    for (var t in spec_type) {
                      if (spec_type[t] == temp_value) {
                        temp_status = true;
                        break;
                      }
                    }
                    if (temp_status == true) {
                      temp_data[i]['value'][k]['is_disabled'] = '';
                    } else {
                      temp_data[i]['value'][k]['is_disabled'] = 'spec-items-disabled';
                    }
                  }
                }
              }
              _this10.setData({
                goods_specifications_choose: temp_data
              });
            }
          } else {
            app.globalData.showToast(res.data.msg);
          }
        },
        fail: function fail() {
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 获取规格详情
    get_goods_specifications_detail: function get_goods_specifications_detail() {
      var _this11 = this;
      // 获取规格值
      var spec = this.goods_selected_spec();

      // 存在规格的时候是否已完全选择规格
      var sku_count = this.goods_specifications_choose.length;
      var active_count = spec.length;
      if (spec.length <= 0 || active_count < sku_count) {
        this.setData({
          goods_spec_base_price: this.goods_choose_data.price,
          goods_spec_base_original_price: this.goods_choose_data.original_price || 0,
          goods_spec_base_inventory: this.goods_choose_data.inventory
        });
        return false;
      }

      // 获取数据
      uni.request({
        url: app.globalData.get_request_url('specdetail', 'goods'),
        method: 'POST',
        data: {
          id: this.goods_choose_data.id,
          spec: JSON.stringify(spec),
          stock: 1,
          buy_use_type_index: this.buy_use_type_index,
          realstore_id: this.info.id
        },
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 0) {
            _this11.goods_spec_detail_back_handle(res.data.data);
          } else {
            app.globalData.showToast(res.data.msg);
          }
        },
        fail: function fail() {
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 已选的商品规格
    goods_selected_spec: function goods_selected_spec() {
      var spec = [];
      var temp_data = this.goods_specifications_choose;
      for (var i in temp_data) {
        for (var k in temp_data[i]['value']) {
          if ((temp_data[i]['value'][k]['is_active'] || null) != null) {
            spec.push({
              "type": temp_data[i]['name'],
              "value": temp_data[i]['value'][k]['name']
            });
            break;
          }
        }
      }
      return spec;
    },
    // 商品规格详情返回数据处理
    goods_spec_detail_back_handle: function goods_spec_detail_back_handle(data) {
      var spec_base = data.spec_base;
      var data = {
        goods_spec_base_price: spec_base.price,
        goods_spec_base_original_price: spec_base.original_price || 0,
        goods_spec_base_inventory: parseInt(spec_base.inventory)
      };
      this.setData(data);
    },
    // 规格选择确认
    goods_spec_confirm_event: function goods_spec_confirm_event(e) {
      var user = app.globalData.get_user_info(this, 'goods_spec_confirm_event');
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.navigateTo({
            url: "/pages/login/login?event_callback=goods_spec_confirm_event"
          });
          return false;
        } else {
          // 属性
          var temp_data = this.goods_specifications_choose;
          var sku_count = temp_data.length;
          var active_count = 0;
          var spec = [];
          if (sku_count > 0) {
            for (var i in temp_data) {
              for (var k in temp_data[i]['value']) {
                if ((temp_data[i]['value'][k]['is_active'] || null) != null) {
                  active_count++;
                  spec.push({
                    "type": temp_data[i]['name'],
                    "value": temp_data[i]['value'][k]['name']
                  });
                }
              }
            }
            if (active_count < sku_count) {
              app.globalData.showToast('请选择规格');
              return false;
            }
          }

          // 数据操作处理
          if (this.buy_number_event_handle(1, this.goods_choose_data, spec)) {
            this.setData({
              popup_spec_status: false
            });
          }
        }
      }
    },
    // 规格图片查看
    goods_spec_base_images_view_event: function goods_spec_base_images_view_event(e) {
      var value = e.currentTarget.dataset.value || null;
      if (value != null) {
        uni.previewImage({
          current: value,
          urls: [value]
        });
      }
    },
    // url事件
    url_event: function url_event(e) {
      app.globalData.url_event(e);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 882:
/*!************************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/realstore/detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=css& */ 883);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 883:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/plugins/realstore/detail/detail.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[876,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/plugins/realstore/detail/detail.js.map