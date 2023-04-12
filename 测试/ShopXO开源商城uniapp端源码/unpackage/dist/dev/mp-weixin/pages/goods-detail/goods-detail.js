(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods-detail/goods-detail"],{

/***/ 114:
/*!****************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/main.js?{"page":"pages%2Fgoods-detail%2Fgoods-detail"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _goodsDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/goods-detail/goods-detail.vue */ 115));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_goodsDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 115:
/*!*********************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/goods-detail/goods-detail.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_detail_vue_vue_type_template_id_23714906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-detail.vue?vue&type=template&id=23714906& */ 116);
/* harmony import */ var _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-detail.vue?vue&type=script&lang=js& */ 118);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods-detail.vue?vue&type=style&index=0&lang=css& */ 120);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 37);

var renderjs





/* normalize component */

var component = Object(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_detail_vue_vue_type_template_id_23714906___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_detail_vue_vue_type_template_id_23714906___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _goods_detail_vue_vue_type_template_id_23714906___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/goods-detail/goods-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 116:
/*!****************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/goods-detail/goods-detail.vue?vue&type=template&id=23714906& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_23714906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-detail.vue?vue&type=template&id=23714906& */ 117);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_23714906___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_23714906___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_23714906___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_23714906___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 117:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/goods-detail/goods-detail.vue?vue&type=template&id=23714906& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uniRate: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-rate/components/uni-rate/uni-rate */ "uni_modules/uni-rate/components/uni-rate/uni-rate").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-rate/components/uni-rate/uni-rate.vue */ 1042))
    },
    mpHtml: function () {
      return Promise.all(/*! import() | uni_modules/mp-html/components/mp-html/mp-html */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/mp-html/components/mp-html/mp-html")]).then(__webpack_require__.bind(null, /*! @/uni_modules/mp-html/components/mp-html/mp-html.vue */ 1049))
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
    _vm.goods != null && _vm.is_single_page == 0
      ? _vm.nav_more_list.length
      : null
  var g1 =
    _vm.goods != null && _vm.is_single_page == 0
      ? _vm.nav_more_list.length > 0 && _vm.nav_more_status
      : null
  var g2 =
    _vm.goods != null && _vm.is_single_page == 0
      ? (_vm.top_nav_title_data || null) != null &&
        _vm.top_nav_title_data.length > 0
      : null
  var g3 = _vm.goods != null ? _vm.goods_photo.length : null
  var g4 = _vm.goods != null && g3 > 0 ? _vm.goods.video.length : null
  var g5 =
    _vm.goods != null && g3 > 0
      ? (_vm.plugins_label_data || null) != null &&
        _vm.plugins_label_data.data.length > 0
      : null
  var g6 =
    _vm.goods != null
      ? (_vm.plugins_coupon_data || null) != null &&
        _vm.plugins_coupon_data.data.length > 0
      : null
  var g7 =
    _vm.goods != null
      ? (_vm.goods.plugins_view_icon_data || null) != null &&
        _vm.goods.plugins_view_icon_data.length > 0
      : null
  var g8 =
    _vm.goods != null
      ? (_vm.goods.plugins_view_panel_data || null) != null &&
        _vm.goods.plugins_view_panel_data.length > 0
      : null
  var g9 =
    _vm.goods != null
      ? (_vm.goods.parameters || null) != null &&
        _vm.goods.parameters.base.length > 0
      : null
  var g10 =
    _vm.goods != null
      ? _vm.plugins_realstore_data != null &&
        _vm.plugins_realstore_data.length > 0
      : null
  var g11 =
    _vm.goods != null && _vm.common_is_show_goods_comments == 1
      ? (_vm.goods.comments_data || null) != null &&
        _vm.goods.comments_data.length > 0
      : null
  var l0 =
    _vm.goods != null && _vm.common_is_show_goods_comments == 1 && g11
      ? _vm.__map(_vm.goods.comments_data, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g12 = (item.images || null) != null && item.images.length > 0
          return {
            $orig: $orig,
            g12: g12,
          }
        })
      : null
  var g13 =
    _vm.goods != null
      ? (_vm.plugins_intellectstools_data || null) != null &&
        (_vm.plugins_intellectstools_data.content_top || null) != null &&
        (_vm.plugins_intellectstools_data.content_top.msg || null) != null &&
        _vm.plugins_intellectstools_data.content_top.msg.length > 0
      : null
  var g14 =
    _vm.goods != null
      ? (_vm.goods.parameters || null) != null &&
        _vm.goods.parameters.detail.length > 0
      : null
  var g15 =
    _vm.goods != null
      ? (_vm.common_is_goods_detail_show_photo == 1 &&
          _vm.goods_photo.length > 0) ||
        (_vm.common_app_is_use_mobile_detail == 0 &&
          (_vm.goods.content_web || null) != null) ||
        (_vm.common_app_is_use_mobile_detail == 1 &&
          _vm.goods_content_app.length > 0)
      : null
  var g16 =
    _vm.goods != null && g15
      ? _vm.common_is_goods_detail_show_photo == 1 && _vm.goods_photo.length > 0
      : null
  var g17 =
    _vm.goods != null && g15
      ? _vm.common_app_is_use_mobile_detail == 1 &&
        _vm.goods_content_app.length > 0
      : null
  var g18 =
    _vm.goods != null
      ? (_vm.buy_button.data || null) != null && _vm.buy_button.data.length > 0
      : null
  var g19 = _vm.goods != null ? _vm.goods_specifications_choose.length : null
  var l1 =
    _vm.goods != null && g19 > 0
      ? _vm.__map(_vm.goods_specifications_choose, function (item, key) {
          var $orig = _vm.__get_orig(item)
          var g20 = item.value.length
          return {
            $orig: $orig,
            g20: g20,
          }
        })
      : null
  var g21 =
    _vm.goods != null
      ? (_vm.plugins_coupon_data || null) != null &&
        _vm.plugins_coupon_data.data.length > 0
      : null
  var g22 =
    _vm.goods != null
      ? (_vm.plugins_realstore_data || null) != null &&
        _vm.plugins_realstore_data.length > 0
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
        g7: g7,
        g8: g8,
        g9: g9,
        g10: g10,
        g11: g11,
        l0: l0,
        g13: g13,
        g14: g14,
        g15: g15,
        g16: g16,
        g17: g17,
        g18: g18,
        g19: g19,
        l1: l1,
        g21: g21,
        g22: g22,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 118:
/*!**********************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/goods-detail/goods-detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-detail.vue?vue&type=script&lang=js& */ 119);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 119:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/goods-detail/goods-detail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var componentQuickNav = function componentQuickNav() {
  __webpack_require__.e(/*! require.ensure | components/quick-nav/quick-nav */ "components/quick-nav/quick-nav").then((function () {
    return resolve(__webpack_require__(/*! ../../components/quick-nav/quick-nav */ 945));
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
var componentTrnNav = function componentTrnNav() {
  __webpack_require__.e(/*! require.ensure | components/trn-nav/trn-nav */ "components/trn-nav/trn-nav").then((function () {
    return resolve(__webpack_require__(/*! ../../components/trn-nav/trn-nav */ 1057));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentCountdown = function componentCountdown() {
  __webpack_require__.e(/*! require.ensure | components/countdown/countdown */ "components/countdown/countdown").then((function () {
    return resolve(__webpack_require__(/*! ../../components/countdown/countdown */ 966));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentNoData = function componentNoData() {
  __webpack_require__.e(/*! require.ensure | components/no-data/no-data */ "components/no-data/no-data").then((function () {
    return resolve(__webpack_require__(/*! ../../components/no-data/no-data */ 510));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentBottomLine = function componentBottomLine() {
  __webpack_require__.e(/*! require.ensure | components/bottom-line/bottom-line */ "components/bottom-line/bottom-line").then((function () {
    return resolve(__webpack_require__(/*! ../../components/bottom-line/bottom-line */ 517));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentOnlineService = function componentOnlineService() {
  __webpack_require__.e(/*! require.ensure | components/online-service/online-service */ "components/online-service/online-service").then((function () {
    return resolve(__webpack_require__(/*! ../../components/online-service/online-service */ 994));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentRealstoreList = function componentRealstoreList() {
  __webpack_require__.e(/*! require.ensure | components/realstore-list/realstore-list */ "components/realstore-list/realstore-list").then((function () {
    return resolve(__webpack_require__(/*! ../../components/realstore-list/realstore-list */ 1011));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var componentShopList = function componentShopList() {
  __webpack_require__.e(/*! require.ensure | components/shop-list/shop-list */ "components/shop-list/shop-list").then((function () {
    return resolve(__webpack_require__(/*! ../../components/shop-list/shop-list */ 1016));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var common_static_url = app.globalData.get_static_url('common');
var system_info = app.globalData.get_system_info() || {};
var bar_height = parseInt(system_info.statusBarHeight || 0);
var win_width = parseInt(system_info.windowWidth || system_info.screenWidth || 0);
var _default = {
  data: function data() {
    return {
      status_bar_height: bar_height,
      common_static_url: common_static_url,
      indicator_dots: false,
      indicator_color: 'rgba(0, 0, 0, .2)',
      indicator_active_color: '#666',
      autoplay: true,
      circular: true,
      data_bottom_line_status: false,
      data_list_loding_status: 1,
      data_list_loding_msg: '',
      params: null,
      system_info: system_info,
      photo_height: win_width <= 0 ? '55vh' : app.globalData.window_width_handle(win_width) + 'px',
      goods: null,
      goods_photo: [],
      goods_specifications_choose: [],
      goods_content_app: [],
      popup_status: false,
      buy_number: 1,
      buy_event_type: 'buy',
      buy_button: {},
      goods_spec_base_price: 0,
      goods_spec_base_original_price: 0,
      goods_spec_base_inventory: 0,
      goods_spec_base_images: '',
      goods_spec_selected_text: '请选择规格',
      show_field_price_text: null,
      goods_video_is_autoplay: false,
      popup_share_status: false,
      // 更多导航
      nav_more_status: false,
      nav_more_timer: null,
      nav_more_list: [],
      // 导航首页按钮
      nav_home_button_info: {
        "text": "首页",
        "icon": common_static_url + "home-icon.png",
        "value": app.globalData.data.tabbar_pages[0]
      },
      // 导航收藏按钮
      nav_favor_button_info: {
        "text": "收藏",
        "status": 0
      },
      // 购物车快捷导航
      quick_nav_cart_count: 0,
      // 基础配置
      currency_symbol: app.globalData.data.currency_symbol,
      plugins_is_goods_detail_poster: 0,
      common_app_is_online_service: 0,
      common_app_is_use_mobile_detail: 0,
      common_is_goods_detail_show_photo: 0,
      common_is_show_goods_comments: 1,
      common_app_customer_service_tel: null,
      // 是否单页预览
      is_single_page: app.globalData.is_current_single_page() || 0,
      // 底部导航业务操作按钮数量
      bottom_nav_bus_number: 4,
      // 是否底部导航展示返回按钮
      is_opt_back: 0,
      is_goods_bottom_opt_back: 0,
      // 是否开启购物车
      is_opt_cart: 1,
      // 滚动监听值
      scroll_value: 0,
      // 顶部导航信息

      top_nav_icon_top_value: bar_height + 8,
      top_nav_more_top_value: bar_height + 48,
      top_nav_height: 50,
      top_nav_title_index: 0,
      top_nav_title_scroll: true,
      top_nav_title_timer: null,
      top_nav_title_data: [],
      // 自定义分享信息
      share_info: {},
      // 限时秒杀插件
      plugins_seckill_is_valid: 0,
      plugins_seckill_data: null,
      // 优惠劵插件
      plugins_coupon_data: null,
      temp_coupon_receive_index: null,
      temp_coupon_receive_value: null,
      popup_coupon_status: false,
      // 购买记录插件
      plugins_salerecords_data: null,
      plugins_salerecords_timer: null,
      plugins_salerecords_tips_content: null,
      plugins_salerecords_tips_ent: '',
      // 多商户插件
      plugins_shop_data: null,
      // 批发插件
      plugins_wholesale_data: null,
      popup_wholesale_status: false,
      // 标签插件
      plugins_label_data: null,
      // 智能工具插件
      plugins_intellectstools_config: null,
      plugins_intellectstools_data: null,
      plugins_intellectstools_timer: null,
      plugins_intellectstools_timerout: null,
      // 客服插件
      plugins_chat_data: null,
      // 门店插件
      plugins_realstore_data: null,
      popup_realstore_status: false
    };
  },
  components: {
    componentQuickNav: componentQuickNav,
    componentPopup: componentPopup,
    componentBadge: componentBadge,
    componentCountdown: componentCountdown,
    componentNoData: componentNoData,
    componentTrnNav: componentTrnNav,
    componentBottomLine: componentBottomLine,
    componentOnlineService: componentOnlineService,
    componentRealstoreList: componentRealstoreList,
    componentShopList: componentShopList
  },
  onLoad: function onLoad(params) {
    params = app.globalData.launch_params_handle(params);
    this.setData({
      params: params,
      // 是否自定义购买事件
      buy_event_type: params.opt_buy_event_type || 'buy',
      // 是否指定开启购买弹窗、默认0否、1是
      popup_status: parseInt(params.is_opt_buy_status || 0) == 1,
      // 是否底部导航展示返回按钮
      is_opt_back: parseInt(params.is_opt_back || 0),
      is_goods_bottom_opt_back: app.globalData.data.is_goods_bottom_opt_back || 0,
      // 是否自定义购物车状态
      is_opt_cart: params.is_opt_cart === undefined ? app.globalData.data.is_goods_bottom_opt_cart || 0 : parseInt(params.is_opt_cart || 0)
    });

    // 数据加载
    this.init();
  },
  onShow: function onShow() {
    // 初始化配置
    this.init_config();
  },
  // 下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    this.init();
  },
  // 页面销毁时执行
  onUnload: function onUnload() {
    clearInterval(this.plugins_salerecords_timer);
    clearInterval(this.plugins_intellectstools_timer);
    clearInterval(this.plugins_intellectstools_timerout);
  },
  // 监听滚动
  onPageScroll: function onPageScroll(e) {
    // 位置记录
    var upd_data = {
      scroll_value: e.scrollTop
    };

    // 更多导航状态处理
    if (this.nav_more_status) {
      upd_data['nav_more_status'] = false;
      clearInterval(this.nav_more_timer);
    }
    this.setData(upd_data);

    // 顶部导航选中处理
    if (this.top_nav_title_scroll) {
      var self = this;
      var data = this.top_nav_title_data;
      var query = uni.createSelectorQuery();
      for (var i in data) {
        query.select(data[i]['ent']).boundingClientRect();
      }
      query.exec(function (res) {
        var bar_h = parseInt(app.globalData.get_system_info('statusBarHeight', 0));
        var nav_h = self.top_nav_height;
        var length = res.length - 1;
        for (var i = length; i >= 0; i--) {
          var temp = res[i]['top'] - bar_h - nav_h;
          if (temp <= 0) {
            if (self.top_nav_title_index != i) {
              self.top_nav_title_index = i;
            }
            break;
          }
        }
      });
    }
  },
  methods: {
    // 初始化配置
    init_config: function init_config(status) {
      if ((status || false) == true) {
        this.setData({
          currency_symbol: app.globalData.get_config('currency_symbol'),
          common_app_is_online_service: app.globalData.get_config('config.common_app_is_online_service', 0),
          common_app_is_use_mobile_detail: app.globalData.get_config('config.common_app_is_use_mobile_detail'),
          common_is_goods_detail_show_photo: app.globalData.get_config('config.common_is_goods_detail_show_photo'),
          common_is_show_goods_comments: app.globalData.get_config('config.common_is_show_goods_comments', 1),
          common_app_customer_service_tel: app.globalData.get_config('config.common_app_customer_service_tel'),
          plugins_is_goods_detail_poster: app.globalData.get_config('plugins_base.distribution.data.is_goods_detail_poster'),
          plugins_intellectstools_config: app.globalData.get_config('plugins_base.intellectstools.data')
        });

        // 底部业务导航按钮数量处理
        var value = 4;
        if (this.is_opt_cart != 1) {
          value--;
        }
        if (this.common_app_is_online_service != 1) {
          value--;
        }
        this.setData({
          bottom_nav_bus_number: value
        });
      } else {
        app.globalData.is_config(this, 'init_config');
      }
    },
    // 获取数据
    init: function init() {
      var _this = this;
      uni.showLoading({
        title: '加载中...'
      });
      this.setData({
        data_list_loding_status: 1
      });
      uni.request({
        url: app.globalData.get_request_url("detail", "goods"),
        method: 'POST',
        data: this.params,
        dataType: 'json',
        success: function success(res) {
          uni.stopPullDownRefresh();
          uni.hideLoading();
          if (res.data.code == 0) {
            var data = res.data.data;
            var goods = data.goods;
            var upd_data = {
              data_bottom_line_status: true,
              data_list_loding_status: 3,
              goods: goods,
              indicator_dots: goods.photo.length > 1,
              autoplay: goods.photo.length > 1,
              goods_photo: goods.photo,
              nav_more_list: data.nav_more_list || [],
              goods_specifications_choose: goods.specifications.choose || [],
              goods_content_app: goods.content_app || [],
              buy_number: goods.buy_min_number || 1,
              nav_favor_button_info: {
                "text": (goods.is_favor == 1 ? '已' : '') + '收藏',
                "status": goods.is_favor
              },
              buy_button: data.buy_button || null,
              top_nav_title_data: data.middle_tabs_nav || [],
              goods_spec_base_price: goods.price,
              goods_spec_base_original_price: goods.original_price || 0,
              goods_spec_base_inventory: goods.inventory,
              goods_spec_base_images: goods.images,
              show_field_price_text: goods.show_field_price_text == '价格' ? null : goods.show_field_price_text.replace(/<[^>]+>/g, "") || null,
              plugins_seckill_data: data.plugins_seckill_data || null,
              plugins_seckill_is_valid: (data.plugins_seckill_data || null) != null && (data.plugins_seckill_data.is_valid || 0) == 1 ? 1 : 0,
              plugins_coupon_data: data.plugins_coupon_data || null,
              quick_nav_cart_count: data.cart_total.buy_number || 0,
              plugins_salerecords_data: data.plugins_salerecords_data || null,
              plugins_shop_data: data.plugins_shop_data || null,
              plugins_wholesale_data: (data.plugins_wholesale_data || null) == null ? null : data.plugins_wholesale_data,
              plugins_label_data: (data.plugins_label_data || null) == null || (data.plugins_label_data.base || null) == null || (data.plugins_label_data.data || null) == null || data.plugins_label_data.data.length <= 0 ? null : data.plugins_label_data,
              plugins_intellectstools_data: data.plugins_intellectstools_data || null,
              plugins_chat_data: data.plugins_chat_data || null,
              plugins_realstore_data: data.plugins_realstore_data || null
            };
            // 如果已默认开启弹窗，库存为0则不开启
            if (_this.popup_status == 1 && goods.inventory <= 0) {
              upd_data['popup_status'] = 0;
            }
            // 导航首页按钮
            if ((data.nav_home_button_info || null) != null) {
              upd_data['nav_home_button_info'] = data.nav_home_button_info;
            }
            _this.setData(upd_data);

            // 分享配置
            _this.setData({
              // 基础自定义分享
              share_info: {
                title: goods.seo_title || goods.title,
                kds: goods.seo_keywords || goods.simple_desc,
                desc: goods.seo_desc || goods.simple_desc,
                path: '/pages/goods-detail/goods-detail',
                query: 'id=' + goods.id,
                img: goods.images,
                video: goods.video
              }
            });

            // 不能选择规格处理
            _this.goods_specifications_choose_handle_dont(0);

            // 购买记录提示
            _this.plugins_salerecords_tips_handle();

            // 默认选中第一个规格、必须是可以可售的商品
            _this.plugins_intellectstools_selected_spec_handle();
          } else {
            _this.setData({
              data_bottom_line_status: false,
              data_list_loding_status: 0,
              data_list_loding_msg: res.data.msg
            });
          }

          // 分享菜单处理
          app.globalData.page_share_handle(_this.share_info);
        },
        fail: function fail() {
          uni.stopPullDownRefresh();
          uni.hideLoading();
          _this.setData({
            data_bottom_line_status: false,
            data_list_loding_status: 2,
            data_list_loding_msg: '服务器请求出错'
          });
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 返回事件
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
    // 更多事件
    top_nav_left_more_event: function top_nav_left_more_event(e) {
      if (this.nav_more_list.length <= 0) {
        app.globalData.showToast('无更多列表数据');
        return false;
      }

      // 已开启则关闭并取消定时任务
      var data = {};
      clearInterval(this.nav_more_timer);
      if (this.nav_more_status) {
        data['nav_more_status'] = false;
      } else {
        var self = this;
        data['nav_more_status'] = true;
        data['nav_more_timer'] = setTimeout(function () {
          self.setData({
            nav_more_status: false
          });
        }, 5000);
      }
      this.setData(data);
    },
    // 顶部导航事件
    top_nav_title_event: function top_nav_title_event(e) {
      var self = this;
      var index = e.currentTarget.dataset.index || 0;
      var value = e.currentTarget.dataset.value || null;

      // 清除定时任务并禁止滚动改变
      clearTimeout(self.top_nav_title_timer);
      self.top_nav_title_scroll = false;

      // 获取节点位置
      var query = uni.createSelectorQuery();
      query.select(value).boundingClientRect();
      query.selectViewport().scrollOffset();
      query.exec(function (res) {
        // 选中
        self.top_nav_title_index = index;

        // 距离计算
        var bar_h = parseInt(app.globalData.get_system_info('statusBarHeight', 0));
        var nav_h = self.top_nav_height;
        var top = res[0].top + res[1].scrollTop - nav_h - bar_h;
        uni.pageScrollTo({
          scrollTop: top,
          duration: 300
        });
      });

      // 滚动完成后等待2秒解除滚动改变状态
      self.top_nav_title_timer = setTimeout(function () {
        self.top_nav_title_scroll = true;
      }, 500);
    },
    // 默认选中第一个规格、必须是可以可售的商品
    plugins_intellectstools_selected_spec_handle: function plugins_intellectstools_selected_spec_handle() {
      var self = this;
      // 销毁之前的任务
      clearInterval(self.plugins_intellectstools_timer);
      clearInterval(self.plugins_intellectstools_timerout);
      // 读取智能工具插件配置、是否开启
      var config = self.plugins_intellectstools_config || null;
      if (config != null && (config.is_goods_detail_selected_first_spec || 0) == 1) {
        // 必须存在购买和加入购物车任意一个、规格必须多个
        var buy = self.buy_button;
        var sku_count = app.globalData.get_length(self.goods_specifications_choose);
        if ((buy.is_buy || 0) + (buy.is_cart || 0) > 0 && sku_count > 0) {
          // 先清除价格展示信息
          self.setData({
            goods_spec_base_price: '...',
            goods_spec_base_original_price: '...'
          });
          var num = 0;
          var timer = setInterval(function () {
            var spec = self.goods_specifications_choose;
            for (var i in spec) {
              // 清除价格展示信息、避免获取价格类型赋值
              self.setData({
                goods_spec_base_price: '...',
                goods_spec_base_original_price: '...'
              });
              // 必须不存在已选择项
              var active = spec[i]['value'].map(function (v) {
                return v.is_active;
              }).join('') || null;
              if (active == null) {
                var status = false;
                for (var k in spec[i]['value']) {
                  // 必须是可选和未选
                  if (!status && (spec[i]['value'][k]['is_disabled'] || null) == null && (spec[i]['value'][k]['is_dont'] || null) == null) {
                    self.goods_specifications_handle(i, k);
                    status = true;
                    num++;
                  }
                }
              }
            }
            if (num >= sku_count) {
              clearInterval(self.plugins_intellectstools_timer);
            }
          }, 100);
          var timerout = setTimeout(function () {
            clearInterval(self.plugins_intellectstools_timerout);
          }, 20000);
          self.setData({
            plugins_intellectstools_timer: timer,
            plugins_intellectstools_timerout: timerout
          });
        }
      }
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
    // 购买弹层关闭
    popup_close_event: function popup_close_event(e) {
      this.setData({
        popup_status: false
      });
    },
    // 进入店铺
    shop_event: function shop_event(e) {
      var value = this.nav_home_button_info.value;
      if (app.globalData.is_tabbar_pages(value)) {
        uni.switchTab({
          url: value
        });
      } else {
        uni.navigateTo({
          url: value
        });
      }
    },
    // 导航购买按钮事件
    nav_buy_submit_event: function nav_buy_submit_event(e) {
      if (!app.globalData.is_single_page_check()) {
        return false;
      }
      var type = e.currentTarget.dataset.type || 'buy';
      var value = e.currentTarget.dataset.value || null;
      switch (type) {
        // 展示型、拨打电话
        case 'show':
          app.globalData.call_tel(value || this.common_app_customer_service_tel);
          break;
        // 购买、加入购物车
        case 'buy':
        case 'cart':
          this.setData({
            popup_status: true,
            buy_event_type: type
          });
          break;
        // url事件
        case 'url':
          if (value == null) {
            app.globalData.showToast('url事件为空');
            return false;
          }
          app.globalData.url_open(value);
          break;
        // 门店
        case 'plugins-realstore':
          var temp_data_list = this.plugins_realstore_data || [];
          if (temp_data_list.length == 1) {
            app.globalData.url_open(temp_data_list[0]['url']);
          } else {
            this.setData({
              popup_realstore_status: true
            });
          }
          break;
        // 默认
        default:
          app.globalData.showToast('事件未处理');
      }
    },
    // 收藏事件
    goods_favor_event: function goods_favor_event(e) {
      var _this2 = this;
      if (!app.globalData.is_single_page_check()) {
        return false;
      }
      var user = app.globalData.get_user_info(this, 'goods_favor_event');
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.navigateTo({
            url: "/pages/login/login?event_callback=goods_favor_event"
          });
          return false;
        } else {
          uni.showLoading({
            title: '处理中...'
          });
          uni.request({
            url: app.globalData.get_request_url('favor', 'goods'),
            method: 'POST',
            data: {
              "id": this.goods.id
            },
            dataType: 'json',
            success: function success(res) {
              uni.hideLoading();
              if (res.data.code == 0) {
                _this2.setData({
                  'goods.is_favor': res.data.data.status,
                  nav_favor_button_info: {
                    "text": res.data.data.text,
                    "status": res.data.data.status
                  }
                });
                app.globalData.showToast(res.data.msg, 'success');
              } else {
                if (app.globalData.is_login_check(res.data, _this2, 'goods_favor_event')) {
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
    // 加入购物车事件
    goods_cart_event: function goods_cart_event(spec) {
      var _this3 = this;
      var user = app.globalData.get_user_info(this, 'goods_buy_confirm_event');
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.navigateTo({
            url: "/pages/login/login?event_callback=goods_buy_confirm_event"
          });
          return false;
        } else {
          var data = this.params;
          data['goods_id'] = this.goods.id;
          data['spec'] = JSON.stringify(spec);
          data['stock'] = this.buy_number;
          uni.showLoading({
            title: '处理中...'
          });
          uni.request({
            url: app.globalData.get_request_url('save', 'cart'),
            method: 'POST',
            data: data,
            dataType: 'json',
            success: function success(res) {
              uni.hideLoading();
              if (res.data.code == 0) {
                _this3.setData({
                  quick_nav_cart_count: res.data.data.buy_number
                });

                // 是否返回定义来源返回
                if (parseInt(_this3.params.is_opt_buy_status || 0) == 1 && _this3.is_opt_back == 1) {
                  setTimeout(function () {
                    uni.navigateBack();
                    ;
                  }, 1000);
                } else {
                  // 关闭购买弹窗窗口
                  _this3.popup_close_event();
                }
                app.globalData.showToast(res.data.msg, 'success');
              } else {
                if (app.globalData.is_login_check(res.data, _this3, 'goods_buy_confirm_event')) {
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
    // 规格事件
    goods_specifications_event: function goods_specifications_event(e) {
      var key = e.currentTarget.dataset.key || 0;
      var keys = e.currentTarget.dataset.keys || 0;
      this.goods_specifications_handle(key, keys);
    },
    // 规格选择处理
    goods_specifications_handle: function goods_specifications_handle(key, keys) {
      var temp_data = this.goods_specifications_choose;
      var temp_images = this.goods_spec_base_images;

      // 不能选择和禁止选择跳过
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
          goods_spec_base_images: temp_images,
          buy_number: parseInt(this.goods.buy_min_number) || 1
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
    // 获取下一个规格类型
    get_goods_specifications_type: function get_goods_specifications_type(key) {
      var _this4 = this;
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
      var data = this.params;
      data['id'] = this.goods.id;
      data['spec'] = JSON.stringify(spec);
      uni.request({
        url: app.globalData.get_request_url('spectype', 'goods'),
        method: 'POST',
        data: data,
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
              _this4.setData({
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
      var _this5 = this;
      // 获取规格值
      var spec = this.goods_selected_spec();

      // 存在规格的时候是否已完全选择规格
      var sku_count = this.goods_specifications_choose.length;
      var active_count = spec.length;
      if (spec.length <= 0 || active_count < sku_count) {
        this.setData({
          goods_spec_base_price: this.goods.price,
          goods_spec_base_original_price: this.goods.original_price || 0,
          goods_spec_base_inventory: this.goods.inventory
        });
        return false;
      }

      // 获取数据
      var data = this.params;
      data['id'] = this.goods.id;
      data['spec'] = JSON.stringify(spec);
      data['stock'] = this.buy_number;
      uni.request({
        url: app.globalData.get_request_url('specdetail', 'goods'),
        method: 'POST',
        data: data,
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 0) {
            _this5.goods_spec_detail_back_handle(res.data.data);
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
        goods_spec_base_inventory: parseInt(spec_base.inventory),
        plugins_wholesale_data: data.plugins_wholesale_data || null
      };

      // 已选数量是否超过规格库存
      if (this.buy_number > data.goods_spec_base_inventory) {
        data['buy_number'] = data.goods_spec_base_inventory;
      }
      this.setData(data);
    },
    // 数量输入事件
    goods_buy_number_blur: function goods_buy_number_blur(e) {
      var number = parseInt(e.detail.value) || 1;
      if (isNaN(number)) {
        number = this.goods.buy_min_number || 1;
      }
      this.goods_buy_number_func(number);
    },
    // 数量操作事件
    goods_buy_number_event: function goods_buy_number_event(e) {
      var type = parseInt(e.currentTarget.dataset.type) || 0;
      var temp_number = parseInt(this.buy_number);
      var number = type == 0 ? temp_number - 1 : temp_number + 1;
      this.goods_buy_number_func(number);
    },
    // 数量处理方法
    goods_buy_number_func: function goods_buy_number_func(number) {
      var _this6 = this;
      var buy_min_number = parseInt(this.goods.buy_min_number) || 1;
      var buy_max_number = parseInt(this.goods.buy_max_number) || 0;
      var inventory = parseInt(this.goods_spec_base_inventory);
      var inventory_unit = this.goods.inventory_unit;

      // 最小起购数量
      if (number < buy_min_number) {
        number = buy_min_number;
        app.globalData.showToast('起购' + buy_min_number + inventory_unit);
      }

      // 最大购买数量
      if (buy_max_number > 0 && number > buy_max_number) {
        number = buy_max_number;
        app.globalData.showToast('限购' + buy_max_number + inventory_unit);
      }

      // 是否超过库存数量
      if (number > inventory) {
        number = inventory;
        app.globalData.showToast('库存数量' + inventory + inventory_unit);
      }
      this.setData({
        buy_number: number
      });

      // 存在规格的时候是否已完全选择规格
      var spec = this.goods_selected_spec();
      var sku_count = this.goods_specifications_choose.length;
      var active_count = spec.length;
      if (sku_count > 0 && active_count < sku_count) {
        return false;
      }

      // 获取数据
      var data = this.params;
      data['id'] = this.goods.id;
      data['spec'] = spec;
      data['stock'] = this.buy_number;
      uni.request({
        url: app.globalData.get_request_url('stock', 'goods'),
        method: 'POST',
        data: data,
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 0) {
            _this6.goods_spec_detail_back_handle(res.data.data);
          } else {
            app.globalData.showToast(res.data.msg);
          }
        },
        fail: function fail() {
          app.globalData.showToast('服务器请求出错');
        }
      });
    },
    // 确认
    goods_buy_confirm_event: function goods_buy_confirm_event(e) {
      var user = app.globalData.get_user_info(this, 'goods_buy_confirm_event');
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.navigateTo({
            url: "/pages/login/login?event_callback=goods_buy_confirm_event"
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

          // 操作类型
          switch (this.buy_event_type) {
            case 'buy':
              // 进入订单确认页面
              var data = {
                "buy_type": "goods",
                "goods_id": this.goods.id,
                "stock": this.buy_number,
                "spec": JSON.stringify(spec)
              };
              uni.navigateTo({
                url: '/pages/buy/buy?data=' + encodeURIComponent(JSON.stringify(data))
              });
              this.popup_close_event();
              break;
            case 'cart':
              this.goods_cart_event(spec);
              break;
            default:
              app.globalData.showToast("操作事件类型有误");
          }
        }
      }
    },
    // 详情图片查看
    goods_detail_images_view_event: function goods_detail_images_view_event(e) {
      var value = e.currentTarget.dataset.value || null;
      if (value != null) {
        uni.previewImage({
          current: value,
          urls: [value]
        });
      }
    },
    // 商品相册图片查看
    goods_photo_view_event: function goods_photo_view_event(e) {
      var index = e.currentTarget.dataset.index;
      var all = [];
      for (var i in this.goods_photo) {
        all.push(this.goods_photo[i]['images']);
      }
      uni.previewImage({
        current: all[index],
        urls: all
      });
    },
    // 视频播放
    goods_video_play_event: function goods_video_play_event(e) {
      this.setData({
        goods_video_is_autoplay: true
      });
    },
    // 视频关闭
    goods_video_close_event: function goods_video_close_event(e) {
      this.setData({
        goods_video_is_autoplay: false
      });
    },
    // 分享开启弹层
    popup_share_event: function popup_share_event(e) {
      if (!app.globalData.is_single_page_check()) {
        return false;
      }
      this.setData({
        popup_share_status: true
      });
    },
    // 分享弹层关闭
    popup_share_close_event: function popup_share_close_event(e) {
      this.setData({
        popup_share_status: false
      });
    },
    // h5分享
    share_h5_event: function share_h5_event() {
      app.globalData.text_copy_event(app.globalData.get_page_url());
    },
    // 基础分享事件
    share_base_event: function share_base_event() {
      this.setData({
        popup_share_status: false
      });
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 300,
        complete: function complete(res) {
          setTimeout(function () {
            uni.showShareMenu();
          }, 500);
        }
      });
    },
    // 商品海报分享
    poster_event: function poster_event() {
      var _this7 = this;
      var user = app.globalData.get_user_info(this, 'poster_event');
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.navigateTo({
            url: "/pages/login/login?event_callback=poster_event"
          });
          return false;
        } else {
          uni.showLoading({
            title: '生成中...'
          });
          uni.request({
            url: app.globalData.get_request_url('goodsposter', 'distribution', 'distribution'),
            method: 'POST',
            data: {
              "goods_id": this.goods.id
            },
            dataType: 'json',
            success: function success(res) {
              uni.hideLoading();
              if (res.data.code == 0) {
                uni.previewImage({
                  current: res.data.data,
                  urls: [res.data.data]
                });
              } else {
                if (app.globalData.is_login_check(res.data, _this7, 'poster_event')) {
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
    // 优惠券开启弹层
    popup_coupon_event: function popup_coupon_event(e) {
      if (!app.globalData.is_single_page_check()) {
        return false;
      }
      this.setData({
        popup_coupon_status: true
      });
    },
    // 优惠券弹层关闭
    popup_coupon_close_event: function popup_coupon_close_event(e) {
      this.setData({
        popup_coupon_status: false
      });
    },
    // 优惠劵领取事件
    coupon_receive_event: function coupon_receive_event(e) {
      var _this8 = this;
      // 参数处理
      if ((e || null) == null) {
        var index = this.temp_coupon_receive_index;
        var value = this.temp_coupon_receive_value;
      } else {
        var index = e.currentTarget.dataset.index;
        var value = e.currentTarget.dataset.value;
        this.setData({
          temp_coupon_receive_index: index,
          temp_coupon_receive_value: value
        });
      }
      // 是否可以领取
      var temp_list = this.plugins_coupon_data.data;
      if (temp_list[index]['is_operable'] != 1) {
        return false;
      }

      // 登录校验
      var user = app.globalData.get_user_info(this, 'coupon_receive_event');
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.navigateTo({
            url: "/pages/login/login?event_callback=coupon_receive_event"
          });
          return false;
        } else {
          uni.showLoading({
            title: '处理中...'
          });
          uni.request({
            url: app.globalData.get_request_url("receive", "coupon", "coupon"),
            method: 'POST',
            data: {
              "coupon_id": value
            },
            dataType: 'json',
            success: function success(res) {
              uni.hideLoading();
              if (res.data.code == 0) {
                app.globalData.showToast(res.data.msg, 'success');
                if (_this8.plugins_coupon_data.base != null && _this8.plugins_coupon_data.base.is_repeat_receive != 1) {
                  temp_list[index]['is_operable'] = 0;
                  temp_list[index]['is_operable_name'] = '已领取';
                  _this8.setData({
                    'plugins_coupon_data.data': temp_list
                  });
                }
              } else {
                if (app.globalData.is_login_check(res.data, _this8, 'coupon_receive_event')) {
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
    // 购买记录提示处理
    plugins_salerecords_tips_handle: function plugins_salerecords_tips_handle() {
      // 销毁之前的任务
      clearInterval(this.plugins_salerecords_timer);
      // 是否存在数据
      var data = this.plugins_salerecords_data || null;
      if (data != null && (data.data || null) != null && data.data.length > 0) {
        var self = this;
        var base = data.base || null;
        var location = base == null || (base.goods_detail_tips_location || null) == null ? '' : '-' + base.goods_detail_tips_location;
        var pause = (base == null ? 5 : base.goods_detail_time_pause || 5) * 1000;
        var interval = (base == null ? 10 : base.goods_detail_time_interval || 10) * 1000;
        var index = 0;
        var list = data.data;
        var count = list.length;
        var timer = setInterval(function () {
          self.setData({
            plugins_salerecords_tips_content: list[index]
          });
          setTimeout(function () {
            self.setData({
              plugins_salerecords_tips_content: null
            });
          }, pause);
          index++;
          if (index >= count) {
            index = 0;
          }
        }, interval);
        self.setData({
          plugins_salerecords_timer: timer,
          plugins_salerecords_tips_ent: location
        });
      }
    },
    // 门店弹层关闭
    popup_realstore_close_event: function popup_realstore_close_event(e) {
      this.setData({
        popup_realstore_status: false
      });
    },
    // 评价图片预览
    comment_images_show_event: function comment_images_show_event(e) {
      var index = e.currentTarget.dataset.index;
      var ix = e.currentTarget.dataset.ix;
      uni.previewImage({
        current: this.goods.comments_data[index]['images'][ix],
        urls: this.goods.comments_data[index]['images']
      });
    },
    // 更多导航事件
    nav_more_event: function nav_more_event(e) {
      app.globalData.operation_event(e);
      this.setData({
        nav_more_status: false
      });
    },
    // 批发开启弹层
    popup_wholesale_event: function popup_wholesale_event(e) {
      this.setData({
        popup_wholesale_status: true
      });
    },
    // 批发弹层关闭
    popup_wholesale_close_event: function popup_wholesale_close_event(e) {
      this.setData({
        popup_wholesale_status: false
      });
    },
    // url事件
    url_event: function url_event(e) {
      app.globalData.url_event(e);
    },
    // 底部导航操作返回事件
    bottom_nav_back_event: function bottom_nav_back_event(e) {
      var pages = getCurrentPages();
      if (pages.length > 1) {
        uni.navigateBack();
      } else {
        // 默认首页
        var url = app.globalData.data.tabbar_pages[0];

        // 是否有参数定义
        if (this.is_opt_back == 1) {
          // 门店详情来源
          if ((this.params.realstore_id || null) != null) {
            url = '/pages/plugins/realstore/detail/detail?id=' + this.params.realstore_id;
          }
        }
        app.globalData.url_open(url);
      }
    },
    // 商品错误返回、无上一个则返回首页
    goods_error_event: function goods_error_event(e) {
      var prev_url = app.globalData.prev_page();
      if (prev_url == null) {
        uni.switchTab({
          url: app.globalData.data.tabbar_pages[0]
        });
      } else {
        uni.navigateBack();
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 120:
/*!******************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/goods-detail/goods-detail.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-detail.vue?vue&type=style&index=0&lang=css& */ 121);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 121:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/goods-detail/goods-detail.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[114,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods-detail/goods-detail.js.map