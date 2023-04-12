(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods-category/goods-category"],{

/***/ 48:
/*!********************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/main.js?{"page":"pages%2Fgoods-category%2Fgoods-category"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _goodsCategory = _interopRequireDefault(__webpack_require__(/*! ./pages/goods-category/goods-category.vue */ 49));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_goodsCategory.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 49:
/*!*************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/goods-category/goods-category.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_category_vue_vue_type_template_id_b6c4f7b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-category.vue?vue&type=template&id=b6c4f7b4& */ 50);
/* harmony import */ var _goods_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-category.vue?vue&type=script&lang=js& */ 52);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods-category.vue?vue&type=style&index=0&lang=css& */ 54);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 37);

var renderjs





/* normalize component */

var component = Object(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_category_vue_vue_type_template_id_b6c4f7b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_category_vue_vue_type_template_id_b6c4f7b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _goods_category_vue_vue_type_template_id_b6c4f7b4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/goods-category/goods-category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/*!********************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/goods-category/goods-category.vue?vue&type=template&id=b6c4f7b4& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_template_id_b6c4f7b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-category.vue?vue&type=template&id=b6c4f7b4& */ 51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_template_id_b6c4f7b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_template_id_b6c4f7b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_template_id_b6c4f7b4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_template_id_b6c4f7b4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 51:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/goods-category/goods-category.vue?vue&type=template&id=b6c4f7b4& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = _vm.category_list.length
  var g1 =
    g0 > 0 && !(_vm.category_show_level == 1) && _vm.category_show_level == 0
      ? (_vm.data_content || null) != null &&
        (_vm.data_content.items || null) != null &&
        _vm.data_content.items.length > 0
      : null
  var g2 =
    g0 > 0 && !(_vm.category_show_level == 1) && _vm.category_show_level == 0
      ? (_vm.data_three_content || null) != null &&
        (_vm.data_three_content.items || null) != null &&
        _vm.data_three_content.items.length > 0
      : null
  var g3 =
    g0 > 0 && !(_vm.category_show_level == 1) && _vm.category_show_level == 0
      ? (_vm.data_list || null) != null && _vm.data_list.length > 0
      : null
  var g4 =
    g0 > 0 &&
    !(_vm.category_show_level == 1) &&
    !(_vm.category_show_level == 0) &&
    (_vm.data_content || null) != null
      ? (_vm.data_content.items || null) != null &&
        _vm.data_content.items.length > 0
      : null
  var l0 =
    g0 > 0 &&
    !(_vm.category_show_level == 1) &&
    !(_vm.category_show_level == 0) &&
    (_vm.data_content || null) != null &&
    g4 &&
    _vm.category_show_level == 3
      ? _vm.__map(_vm.data_content.items, function (v, index) {
          var $orig = _vm.__get_orig(v)
          var g5 = (v.items || null) != null && v.items.length > 0
          return {
            $orig: $orig,
            g5: g5,
          }
        })
      : null
  var g6 = _vm.category_list.length == 0 && _vm.data_list_loding_status != 0
  var g7 =
    _vm.category_show_level == 0 && _vm.cart_status
      ? (_vm.cart || null) != null &&
        (_vm.cart.data || null) != null &&
        _vm.cart.data.length > 0
      : null
  var g8 =
    _vm.category_show_level == 0 ? _vm.goods_specifications_choose.length : null
  var l1 =
    _vm.category_show_level == 0 && g8 > 0
      ? _vm.__map(_vm.goods_specifications_choose, function (item, key) {
          var $orig = _vm.__get_orig(item)
          var g9 = item.value.length
          return {
            $orig: $orig,
            g9: g9,
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
        l0: l0,
        g6: g6,
        g7: g7,
        g8: g8,
        l1: l1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 52:
/*!**************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/goods-category/goods-category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-category.vue?vue&type=script&lang=js& */ 53);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/goods-category/goods-category.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var componentSearch = function componentSearch() {
  __webpack_require__.e(/*! require.ensure | components/search/search */ "components/search/search").then((function () {
    return resolve(__webpack_require__(/*! ../../components/search/search */ 938));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentQuickNav = function componentQuickNav() {
  __webpack_require__.e(/*! require.ensure | components/quick-nav/quick-nav */ "components/quick-nav/quick-nav").then((function () {
    return resolve(__webpack_require__(/*! ../../components/quick-nav/quick-nav */ 945));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentNoData = function componentNoData() {
  __webpack_require__.e(/*! require.ensure | components/no-data/no-data */ "components/no-data/no-data").then((function () {
    return resolve(__webpack_require__(/*! ../../components/no-data/no-data */ 510));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentPopup = function componentPopup() {
  __webpack_require__.e(/*! require.ensure | components/popup/popup */ "components/popup/popup").then((function () {
    return resolve(__webpack_require__(/*! ../../components/popup/popup */ 1021));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentBadge = function componentBadge() {
  __webpack_require__.e(/*! require.ensure | components/badge/badge */ "components/badge/badge").then((function () {
    return resolve(__webpack_require__(/*! ../../components/badge/badge */ 980));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var common_static_url = app.globalData.get_static_url('common');
// 状态栏高度
var bar_height = parseInt(app.globalData.get_system_info('statusBarHeight', 0));
var _default = {
  data: function data() {
    return {
      common_static_url: common_static_url,
      status_bar_height: bar_height,
      data_bottom_line_status: false,
      data_list_loding_status: 1,
      data_list_loding_msg: '',
      category_list: [],
      data_content: null,
      data_three_content: null,
      cart: null,
      data_list: [],
      data_total: 0,
      data_page_total: 0,
      data_page: 1,
      currency_symbol: app.globalData.data.currency_symbol,
      is_first: 1,
      search_keywords_value: '',
      nav_active_index: 0,
      nav_active_item_two_index: -1,
      nav_active_item_three_index: -1,
      scroll_top: 0,
      scroll_top_old: 0,
      cart_status: false,
      popup_spec_status: false,
      goods_spec_base_price: 0,
      goods_spec_base_original_price: 0,
      goods_spec_base_inventory: 0,
      goods_spec_base_images: '',
      goods_choose_data: {},
      goods_specifications_choose: [],
      // 基础配置
      category_show_level: 0,
      // 自定义分享信息
      share_info: {},
      // 是否单页预览
      is_single_page: app.globalData.is_current_single_page() || 0,
      // 商品列表模式一级分类图标类型
      category_goods_model_icon_field: app.globalData.data.category_goods_model_icon_type == 0 ? 'big_images' : 'icon'
    };
  },
  components: {
    componentSearch: componentSearch,
    componentQuickNav: componentQuickNav,
    componentNoData: componentNoData,
    componentPopup: componentPopup,
    componentBadge: componentBadge
  },
  props: {},
  onShow: function onShow() {
    // 数据加载
    this.init();

    // 初始化配置
    this.init_config();
  },
  // 下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    this.init();
  },
  methods: {
    // 初始化配置
    init_config: function init_config(status) {
      if ((status || false) == true) {
        this.setData({
          currency_symbol: app.globalData.get_config('currency_symbol'),
          category_show_level: app.globalData.get_config('config.category_show_level')
        });
      } else {
        app.globalData.is_config(this, 'init_config');
      }
    },
    // 获取数据
    init: function init() {
      var _this = this;
      if (this.is_first == 1) {
        this.setData({
          data_list_loding_status: 1
        });
      }
      uni.request({
        url: app.globalData.get_request_url("category", "goods"),
        method: 'POST',
        data: {},
        dataType: 'json',
        success: function success(res) {
          uni.stopPullDownRefresh();
          if (res.data.code == 0) {
            var temp_category = res.data.data.category || [];
            var upd_data = {
              category_list: temp_category,
              data_content: temp_category[_this.nav_active_index] || null
            };
            // 非商品列表模式
            if (_this.category_show_level != 0) {
              upd_data['data_list_loding_status'] = temp_category.length == 0 ? 0 : 3;
              upd_data['data_bottom_line_status'] = true;
            }
            _this.setData(upd_data);

            // 商品列表模式
            if (_this.category_show_level == 0) {
              // 商品列表模式获取购物车数据
              _this.get_cart_data();
              // 获取商品列表、仅首次请求商品列表
              if (_this.is_first == 1) {
                _this.get_goods_list(1);
              }
            } else {
              // 分类模式下、仅首次请求购物车接口和商品模式下
              if (_this.is_first == 1 && _this.category_show_level == 0) {
                _this.get_cart_data();
              }
            }
            // 是否首次记录
            _this.setData({
              is_first: 0
            });
          } else {
            _this.setData({
              data_list_loding_status: 2,
              data_list_loding_msg: res.data.msg
            });
          }

          // 基础自定义分享
          _this.setData({
            share_info: {
              path: '/pages/goods-category/goods-category'
            }
          });

          // 分享菜单处理、延时执行，确保基础数据已加载完成
          setTimeout(function () {
            app.globalData.page_share_handle(this.share_info);
          }, 3000);
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
    // 获取商品列表
    get_goods_list: function get_goods_list(is_mandatory) {
      var _this2 = this;
      // 分页是否还有数据
      if ((is_mandatory || 0) == 0) {
        if (this.data_bottom_line_status == true) {
          uni.stopPullDownRefresh();
          return false;
        }
      }

      // 请求参数
      var data = {
        page: this.data_page,
        wd: this.search_keywords_value || ''
      };
      // 分类id
      if ((this.data_content || null) != null) {
        // 主分类id
        data['category_id'] = this.data_content['id'];
        // 是否选中了二级分类
        if (this.nav_active_item_two_index != -1) {
          data['category_id'] = this.data_content['items'][this.nav_active_item_two_index]['id'];
        }
        // 是否选中了三级分类
        if (this.data_three_content != null && this.nav_active_item_three_index != -1) {
          data['category_id'] = this.data_three_content['items'][this.nav_active_item_three_index]['id'];
        }
      }

      // 获取数据
      uni.request({
        url: app.globalData.get_request_url("datalist", "search"),
        method: 'POST',
        data: data,
        dataType: 'json',
        success: function success(res) {
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

              // 购物车数据处理
              _this2.cart_data_list_handle();
            } else {
              _this2.setData({
                data_list_loding_status: 0,
                data_total: 0
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
          _this2.setData({
            data_list_loding_status: 2,
            data_list_loding_msg: '服务器请求出错'
          });
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 重置滑动位置
    reset_scroll: function reset_scroll() {
      var _this3 = this;
      this.setData({
        scroll_top: this.scroll_top_old
      });
      this.$nextTick(function () {
        _this3.setData({
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
      this.get_goods_list();
    },
    // 导航事件
    nav_event: function nav_event(e) {
      var index = e.currentTarget.dataset.index;
      var two_index = e.currentTarget.dataset.itemtwoindex;
      var three_index = e.currentTarget.dataset.itemthreeindex;
      var temp_data_content = this.category_list[index] || null;
      var temp_data_three_content = null;
      if (two_index != -1 && temp_data_content != null) {
        temp_data_three_content = temp_data_content['items'][two_index];
      }
      this.setData({
        nav_active_index: index,
        nav_active_item_two_index: two_index,
        nav_active_item_three_index: three_index,
        data_content: temp_data_content,
        data_three_content: temp_data_three_content,
        data_page: 1,
        data_list_loding_status: 1,
        data_list: []
      });

      // 商品模式则读取商品
      if (this.category_show_level == 0) {
        this.reset_scroll();
        this.get_goods_list(1);
      }
    },
    // 分类事件
    category_event: function category_event(e) {
      uni.navigateTo({
        url: '/pages/goods-search/goods-search?category_id=' + e.currentTarget.dataset.value
      });
    },
    // 搜索事件
    search_button_event: function search_button_event(e) {
      // 商品列表模式
      if (this.category_show_level == 0) {
        this.setData({
          search_keywords_value: e || '',
          data_page: 1,
          data_list_loding_status: 1,
          data_list: []
        });
        this.get_goods_list(1);
      } else {
        // 进入搜索页面
        uni.navigateTo({
          url: '/pages/goods-search/goods-search' + ((e || null) == null ? '' : '?keywords=' + e)
        });
      }
    },
    // url事件
    url_event: function url_event(e) {
      app.globalData.url_event(e);
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
    // 数量操作处理
    buy_number_handle: function buy_number_handle(type, goods, buy_number_field) {
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
      var _this4 = this;
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
            _this4.get_cart_data();
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
      var _this5 = this;
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
            _this5.get_cart_data();
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
      var _this6 = this;
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
    // 获取购物车数据
    get_cart_data: function get_cart_data() {
      var _this7 = this;
      uni.request({
        url: app.globalData.get_request_url("index", "cart"),
        method: 'POST',
        data: {},
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 0) {
            var data = res.data.data;
            var temp_cart = data.data || [];
            _this7.setData({
              cart: res.data.data
            });
            _this7.cart_data_list_handle();

            // 导航购物车处理
            if (data.buy_number <= 0) {
              app.globalData.set_tab_bar_badge(2, 0);
            } else {
              app.globalData.set_tab_bar_badge(2, 1, data.buy_number);
            }
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
      var _this8 = this;
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
          spec: JSON.stringify(spec)
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
              _this8.setData({
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
      var _this9 = this;
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
          stock: 1
        },
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 0) {
            _this9.goods_spec_detail_back_handle(res.data.data);
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
    // 批量删除操作
    cart_all_delete_event: function cart_all_delete_event(e) {
      var _this10 = this;
      uni.showModal({
        title: '温馨提示',
        content: '挑了这么久，真的要清空吗？',
        confirmText: '确认',
        cancelText: '暂不',
        success: function success(result) {
          if (result.confirm) {
            var ids = [];
            var temp_data = _this10.cart.data;
            for (var i in temp_data) {
              ids.push(temp_data[i]['id']);
            }
            _this10.cart_delete(ids.join(','));
          }
        }
      });
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

      // 获取购物车数据
      var ids = [];
      if ((this.cart || null) != null) {
        var temp_data = this.cart.data || [];
        for (var i in temp_data) {
          if (temp_data[i]['is_error'] == 0) {
            ids.push(temp_data[i]['id']);
          }
        }
      }
      if (ids.length <= 0) {
        app.globalData.showToast('请先选购商品');
        return false;
      }

      // 进入订单确认页面
      var data = {
        "buy_type": "cart",
        "ids": ids.join(',')
      };
      uni.navigateTo({
        url: '/pages/buy/buy?data=' + encodeURIComponent(JSON.stringify(data))
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 54:
/*!**********************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/goods-category/goods-category.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-category.vue?vue&type=style&index=0&lang=css& */ 55);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_category_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 55:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/goods-category/goods-category.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[48,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods-category/goods-category.js.map