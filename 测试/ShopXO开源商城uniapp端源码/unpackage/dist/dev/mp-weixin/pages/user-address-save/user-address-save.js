(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user-address-save/user-address-save"],{

/***/ 138:
/*!**************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/main.js?{"page":"pages%2Fuser-address-save%2Fuser-address-save"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _userAddressSave = _interopRequireDefault(__webpack_require__(/*! ./pages/user-address-save/user-address-save.vue */ 139));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_userAddressSave.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 139:
/*!*******************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/user-address-save/user-address-save.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_address_save_vue_vue_type_template_id_01c7f590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-address-save.vue?vue&type=template&id=01c7f590& */ 140);
/* harmony import */ var _user_address_save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-address-save.vue?vue&type=script&lang=js& */ 142);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_address_save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_address_save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _user_address_save_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-address-save.vue?vue&type=style&index=0&lang=css& */ 144);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 37);

var renderjs





/* normalize component */

var component = Object(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _user_address_save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_address_save_vue_vue_type_template_id_01c7f590___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_address_save_vue_vue_type_template_id_01c7f590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _user_address_save_vue_vue_type_template_id_01c7f590___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/user-address-save/user-address-save.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 140:
/*!**************************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/user-address-save/user-address-save.vue?vue&type=template&id=01c7f590& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_template_id_01c7f590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-address-save.vue?vue&type=template&id=01c7f590& */ 141);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_template_id_01c7f590___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_template_id_01c7f590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_template_id_01c7f590___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_template_id_01c7f590___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 141:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/user-address-save/user-address-save.vue?vue&type=template&id=01c7f590& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 142:
/*!********************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/user-address-save/user-address-save.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-address-save.vue?vue&type=script&lang=js& */ 143);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 143:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/user-address-save/user-address-save.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var app = getApp();
var common_static_url = app.globalData.get_static_url('common');
var _default = {
  data: function data() {
    return {
      common_static_url: common_static_url,
      params: null,
      data_list_loding_status: 1,
      data_list_loding_msg: '',
      editor_path_type: '',
      address_data: {},
      province_list: [],
      city_list: [],
      county_list: [],
      province_id: null,
      city_id: null,
      county_id: null,
      idcard_images_data: {},
      default_province: "请选择省",
      default_city: "请选择市",
      default_county: "请选择区/县",
      province_value: null,
      city_value: null,
      county_value: null,
      user_location_cache_key: app.globalData.data.cache_userlocation_key,
      user_location: null,
      address_discern_value: '',
      form_submit_disabled_status: false,
      // 基础配置
      home_user_address_map_status: 0,
      home_user_address_idcard_status: 0,
      is_user_address_discern: 0,
      is_user_address_location_discern: 0,
      is_user_address_forbid_choice_region: 0
    };
  },
  components: {},
  props: {},
  onLoad: function onLoad(params) {
    this.setData({
      params: params
    });
  },
  onReady: function onReady() {
    uni.setNavigationBarTitle({
      title: '地址' + ((this.params.id || null) == null ? '添加' : '编辑')
    });

    // 初始化配置
    this.init_config();

    // 清除位置缓存信息
    this.user_location_remove();

    // 初始化
    this.init();
  },
  onShow: function onShow() {
    this.user_location_init();

    // 分享菜单处理
    app.globalData.page_share_handle();
  },
  methods: {
    // 初始化配置
    init_config: function init_config(status) {
      if ((status || false) == true) {
        this.setData({
          home_user_address_map_status: app.globalData.get_config('config.home_user_address_map_status'),
          home_user_address_idcard_status: app.globalData.get_config('config.home_user_address_idcard_status'),
          is_user_address_discern: app.globalData.get_config('plugins_base.intellectstools.data.is_user_address_discern', 0),
          is_user_address_location_discern: app.globalData.get_config('plugins_base.intellectstools.data.is_user_address_location_discern', 0),
          is_user_address_forbid_choice_region: app.globalData.get_config('plugins_base.intellectstools.data.is_user_address_forbid_choice_region', 0)
        });
      } else {
        app.globalData.is_config(this, 'init_config');
      }
    },
    // 获取数据
    init: function init() {
      var user = app.globalData.get_user_info(this, "init");
      if (user != false) {
        // 用户未绑定用户则转到登录页面
        if (app.globalData.user_is_need_login(user)) {
          uni.redirectTo({
            url: "/pages/login/login?event_callback=init"
          });
          this.setData({
            data_list_loding_status: 2,
            data_list_loding_msg: '请先绑定手机号码'
          });
          return false;
        } else {
          this.get_province_list();
          this.get_data();
        }
      } else {
        this.setData({
          data_list_loding_status: 2,
          data_list_loding_msg: '请先授权用户信息'
        });
      }
    },
    // 获取数据
    get_data: function get_data() {
      var _this = this;
      uni.request({
        url: app.globalData.get_request_url("detail", "useraddress"),
        method: 'POST',
        data: this.params,
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 0) {
            var data = res.data.data || null;
            var ads_data = data.data || null;
            var idcard_images = {
              idcard_front: ads_data == null ? '' : ads_data.idcard_front || '',
              idcard_back: ads_data == null ? '' : ads_data.idcard_back || ''
            };
            _this.setData({
              address_data: ads_data || {},
              idcard_images_data: idcard_images,
              editor_path_type: data.editor_path_type || ''
            });

            // 数据设置
            if (ads_data != null) {
              _this.setData({
                province_id: ads_data.province || null,
                city_id: ads_data.city || null,
                county_id: ads_data.county || null
              });

              // 地理位置
              var lng = ads_data.lng || 0;
              var lat = ads_data.lat || 0;
              if (lng != 0 && lat != 0) {
                _this.setData({
                  user_location: {
                    lng: lng,
                    lat: lat,
                    address: ads_data.address || ''
                  }
                });
              }
            }

            // 地区数据填充处理
            _this.region_data_fill_handle();
          } else {
            if (app.globalData.is_login_check(res.data)) {
              app.globalData.showToast(res.data.msg);
            }
          }
        },
        fail: function fail() {
          app.globalData.showToast("省份信息失败");
        }
      });
    },
    // 地区数据填充处理
    region_data_fill_handle: function region_data_fill_handle() {
      // 获取城市、区县
      this.get_city_list(true);
      this.get_county_list(true);
    },
    // 地区数据初始化
    init_region_value: function init_region_value() {
      this.setData({
        province_value: this.get_region_value("province_list", "province_id"),
        city_value: this.get_region_value("city_list", "city_id"),
        county_value: this.get_region_value("county_list", "county_id")
      });
    },
    // 地区初始化匹配索引
    get_region_value: function get_region_value(list, id) {
      var data = this[list];
      var data_id = this[id];
      var value = null;
      data.forEach(function (d, i) {
        if (d.id == data_id) {
          value = i;
          return false;
        }
      });
      return value;
    },
    // 获取省份
    get_province_list: function get_province_list() {
      var _this2 = this;
      uni.request({
        url: app.globalData.get_request_url("index", "region"),
        method: 'POST',
        data: {},
        dataType: 'json',
        success: function success(res) {
          if (res.data.code == 0) {
            var data = res.data.data;
            _this2.setData({
              province_list: data
            });
          } else {
            app.globalData.showToast(res.data.msg);
          }
        },
        fail: function fail() {
          app.globalData.showToast("省份获取失败");
        }
      });
    },
    // 获取市
    get_city_list: function get_city_list() {
      var _this3 = this;
      var is_init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.province_id) {
        uni.request({
          url: app.globalData.get_request_url("index", "region"),
          method: 'POST',
          data: {
            pid: this.province_id
          },
          dataType: 'json',
          success: function success(res) {
            if (res.data.code == 0) {
              var data = res.data.data;
              _this3.setData({
                city_list: data
              });
              if (is_init) {
                _this3.init_region_value();
              }
            } else {
              app.globalData.showToast(res.data.msg);
            }
          },
          fail: function fail() {
            app.globalData.showToast("城市获取失败");
          }
        });
      }
    },
    // 获取区/县
    get_county_list: function get_county_list() {
      var _this4 = this;
      var is_init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.city_id) {
        // 加载loding
        uni.request({
          url: app.globalData.get_request_url("index", "region"),
          method: 'POST',
          data: {
            pid: this.city_id
          },
          dataType: 'json',
          success: function success(res) {
            if (res.data.code == 0) {
              var data = res.data.data;
              _this4.setData({
                county_list: data
              });
              if (is_init) {
                _this4.init_region_value();
              }
            } else {
              app.globalData.showToast(res.data.msg);
            }
          },
          fail: function fail() {
            app.globalData.showToast("区/县获取失败");
          }
        });
      }
    },
    // 省份事件
    select_province_event: function select_province_event(e) {
      var index = e.detail.value || 0;
      if (index >= 0) {
        var data = this.province_list[index];
        this.setData({
          province_value: index,
          province_id: data.id,
          city_value: null,
          county_value: null,
          city_id: null,
          county_id: null
        });
        this.get_city_list();
      }
    },
    // 市事件
    select_city_event: function select_city_event(e) {
      var index = e.detail.value || 0;
      if (index >= 0) {
        var data = this.city_list[index];
        this.setData({
          city_value: index,
          city_id: data.id,
          county_value: null,
          county_id: null
        });
        this.get_county_list();
      }
    },
    // 区/县事件
    select_county_event: function select_county_event(e) {
      var index = e.detail.value || 0;
      if (index >= 0) {
        var data = this.county_list[index];
        this.setData({
          county_value: index,
          county_id: data.id
        });
      }
    },
    // 省市区未按照顺序选择提示
    region_select_error_event: function region_select_error_event(e) {
      var value = e.currentTarget.dataset.value || null;
      if (value != null) {
        app.globalData.showToast(value);
      }
    },
    // 选择地理位置
    choose_location_event: function choose_location_event(e) {
      uni.navigateTo({
        url: '/pages/common/open-setting-location/open-setting-location'
      });
    },
    // 清除位置缓存信息
    user_location_remove: function user_location_remove() {
      uni.removeStorage({
        key: this.user_location_cache_key
      });
    },
    // 地址信息初始化
    user_location_init: function user_location_init() {
      var result = uni.getStorageSync(this.user_location_cache_key) || null;
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

      // 是否开启地理位置选择后自动识别
      if (result != null && this.is_user_address_location_discern == 1) {
        this.address_discern_handle(result, 0, 1);
      }
    },
    // 文件上传
    file_upload_event: function file_upload_event(e) {
      var form_name = e.currentTarget.dataset.value || null;
      if (form_name == null) {
        app.globalData.showToast('表单名称类型有误');
        return false;
      }
      var self = this;
      uni.chooseImage({
        count: 1,
        success: function success(res) {
          var success = 0;
          var fail = 0;
          var length = res.tempFilePaths.length;
          var count = 0;
          self.upload_one_by_one(res.tempFilePaths, success, fail, count, length, form_name);
        }
      });
    },
    // 采用递归的方式上传多张
    upload_one_by_one: function upload_one_by_one(img_paths, _success, _fail, count, length, form_name) {
      var self = this;
      uni.uploadFile({
        url: app.globalData.get_request_url("index", "ueditor"),
        filePath: img_paths[count],
        name: 'upfile',
        formData: {
          action: 'uploadimage',
          path_type: self.editor_path_type
        },
        success: function success(res) {
          _success++;
          if (res.statusCode == 200) {
            var data = (0, _typeof2.default)(res.data) == 'object' ? res.data : JSON.parse(res.data);
            if (data.code == 0 && (data.data.url || null) != null) {
              var temp_idcard_images_data = self.idcard_images_data || {};
              temp_idcard_images_data[form_name] = data.data.url;
              self.setData({
                idcard_images_data: temp_idcard_images_data
              });
            } else {
              app.globalData.showToast(data.msg);
            }
          }
        },
        fail: function fail(e) {
          _fail++;
        },
        complete: function complete(e) {
          count++;
          // 下一张
          if (count >= length) {// 上传完毕，作一下提示
            //app.showToast('上传成功' + success +'张', 'success');
          } else {
            // 递归调用，上传下一张
            self.upload_one_by_one(img_paths, _success, _fail, count, length, form_name);
          }
        }
      });
    },
    // 图片删除
    upload_delete_event: function upload_delete_event(e) {
      var form_name = e.currentTarget.dataset.value || null;
      if (form_name == null) {
        app.globalData.showToast('表单名称类型有误');
        return false;
      }
      var self = this;
      uni.showModal({
        title: '温馨提示',
        content: '删除后不可恢复、继续吗？',
        success: function success(res) {
          if (res.confirm) {
            var temp_idcard_images_data = self.idcard_images_data || {};
            temp_idcard_images_data[form_name] = '';
            self.setData({
              idcard_images_data: temp_idcard_images_data
            });
          }
        }
      });
    },
    // 默认地址设置改变
    default_ads_change_event: function default_ads_change_event(e) {
      var temp_ads = this.address_data;
      temp_ads['is_default'] = (temp_ads.is_default || 0) == 1 ? 0 : 1;
      this.setData({
        address_data: temp_ads
      });
    },
    // 地址信息识别输入事件
    address_discern_value_event: function address_discern_value_event(e) {
      this.setData({
        address_discern_value: e.detail.value
      });
    },
    // 地址信息识别确认事件
    address_discern_submit_event: function address_discern_submit_event(e) {
      if ((this.address_discern_value || null) == null) {
        app.globalData.showToast('请先输入地址信息');
        return false;
      }

      // 地址识别处理
      this.address_discern_handle({
        address: this.address_discern_value
      }, 1, 0);
    },
    // 地址识别处理
    // data 地址信息
    // is_user 是否解析用户信息（0, 1）
    // type 0 用户输入地址信息识别, 1用户选择地理位置识别
    address_discern_handle: function address_discern_handle(data) {
      var _this5 = this;
      var is_user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      data['is_user'] = is_user;
      uni.showLoading({
        title: '处理中...',
        mask: true
      });
      uni.request({
        url: app.globalData.get_request_url("address", "index", "intellectstools"),
        method: 'POST',
        data: data,
        dataType: 'json',
        success: function success(res) {
          uni.hideLoading();
          if (res.data.code == 0) {
            var temp_ads = _this5.address_data || {};
            var ads_data = res.data.data;
            var upd_data = {
              province_id: ads_data.province || null,
              city_id: ads_data.city || null,
              county_id: ads_data.county || null
            };
            // 地址赋值
            var arr = ['province', 'city', 'county', 'province_name', 'city_name', 'county_name', 'address', 'name', 'tel'];
            for (var i in arr) {
              if ((ads_data[arr[i]] || null) != null) {
                temp_ads[arr[i]] = ads_data[arr[i]];
              }
            }

            // 用户手动识别操作
            // 识别成功后清除用户选择的地理位置信息、避免坐标与识别的地址不相符
            if (type == 0) {
              // 已获取的数据置为null
              upd_data['user_location'] = null;
              // 已有的地址坐标也清除
              temp_ads['lng'] = '';
              temp_ads['lat'] = '';
              // 清除位置缓存信息
              _this5.user_location_remove();
            } else {
              // 地理位置则把名称加入别名
              temp_ads['alias'] = _this5.user_location.name;
            }
            upd_data['address_data'] = temp_ads;
            _this5.setData(upd_data);

            // 地区数据填充处理
            _this5.region_data_fill_handle();
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
    // 数据提交
    form_submit: function form_submit(e) {
      var _this6 = this;
      // 表单数据
      var form_data = e.detail.value;
      // 加入页面请求参数
      form_data['params'] = this.params;

      // 数据校验
      var validation = [{
        fields: "name",
        msg: "请填写联系人"
      }, {
        fields: "tel",
        msg: "请填写联系电话"
      }, {
        fields: "province",
        msg: "请选择省份"
      }, {
        fields: "city",
        msg: "请选择城市"
      }, {
        fields: "county",
        msg: "请选择区县"
      }, {
        fields: "address",
        msg: "请填写详细地址"
      }];

      // 是否开启了地理位置选择
      if (this.home_user_address_map_status == 1) {
        validation.push({
          fields: "lng",
          msg: "请选择地理位置"
        });
        validation.push({
          fields: "lat",
          msg: "请选择地理位置"
        });
      }

      // 是否开启了用户身份证信息
      if (this.home_user_address_idcard_status == 1) {
        // 验证
        validation.push({
          fields: "idcard_name",
          msg: "请填写身份证姓名"
        });
        validation.push({
          fields: "idcard_number",
          msg: "请填写身份证号码"
        });
        validation.push({
          fields: "idcard_front",
          msg: "请上传身份证正面照片"
        });
        validation.push({
          fields: "idcard_back",
          msg: "请上传身份证背面照片"
        });

        // 数据
        form_data['idcard_front'] = this.idcard_images_data.idcard_front || '';
        form_data['idcard_back'] = this.idcard_images_data.idcard_back || '';
      }
      form_data['province'] = this.province_id;
      form_data['city'] = this.city_id;
      form_data['county'] = this.county_id;
      form_data['id'] = this.params.id || 0;

      // 默认地址信息
      var temp_ads = this.address_data || {};
      form_data['is_default'] = temp_ads.is_default || 0;

      // 地理位置
      var lng = temp_ads.lng || 0;
      var lat = temp_ads.lat || 0;
      if ((this.user_location || null) != null) {
        lng = this.user_location.lng || 0;
        lat = this.user_location.lat || 0;
      }
      form_data['lng'] = lng;
      form_data['lat'] = lat;

      // 验证提交表单
      if (app.globalData.fields_check(form_data, validation)) {
        // 数据保存
        this.setData({
          form_submit_disabled_status: true
        });
        uni.showLoading({
          title: '处理中...'
        });
        uni.request({
          url: app.globalData.get_request_url('save', 'useraddress'),
          method: 'POST',
          data: form_data,
          dataType: 'json',
          success: function success(res) {
            uni.hideLoading();
            if (res.data.code == 0) {
              app.globalData.showToast(res.data.msg, 'success');
              setTimeout(function () {
                uni.navigateBack();
              }, 1000);
            } else {
              _this6.setData({
                form_submit_disabled_status: false
              });
              if (app.globalData.is_login_check(res.data)) {
                app.globalData.showToast(res.data.msg);
              } else {
                app.globalData.showToast('提交失败，请重试！');
              }
            }
          },
          fail: function fail() {
            _this6.setData({
              form_submit_disabled_status: false
            });
            uni.hideLoading();
            app.globalData.showToast('服务器请求出错');
          }
        });
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 144:
/*!****************************************************************************************************************!*\
  !*** E:/测试/ShopXO开源商城uniapp端源码/pages/user-address-save/user-address-save.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./user-address-save.vue?vue&type=style&index=0&lang=css& */ 145);
/* harmony import */ var _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HB_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_user_address_save_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 145:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/测试/ShopXO开源商城uniapp端源码/pages/user-address-save/user-address-save.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[138,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user-address-save/user-address-save.js.map