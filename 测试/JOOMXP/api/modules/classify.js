import request from '@/utils/request'
import {getCache} from "@/utils/cache.js"


  var value = '';
// #ifdef MP-WEIXIN
	value = 'weixin';
//#endif
// #ifdef MP-ALIPAY
	value = 'alipay';
//#endif
// #ifdef MP-BAIDU
	value = 'baidu';
//#endif
// #ifdef MP-QQ
	value = 'qq';
//#endif
// #ifdef MP-TOUTIAO
	value = 'toutiao';
//#endif
// #ifdef MP-KUAISHOU
	value = 'kuaishou';
//#endif
// #ifdef H5 || APP
	value = 'h5';
//#endif



 var d = new Date().getTime();
 var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	var r = (d + Math.random() * 16) % 16 | 0;
	d = Math.floor(d / 16);
	return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
});
var token  = getCache('info').token || ''
// 商品分类导航
export const good_list = (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=goods/category&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax')
}
// 商品分类内容
export const good_content_list = (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=search/datalist&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}

// 购物车展示金额和数量（需要登录）
export const cartNumber = (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=cart/index&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}
// 加入购物车
export const cartSave = (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=cart/save&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}
// 删减
export const cartDel = (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=cart/delete&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}
// 查询添加
export const stockList= (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=cart/stock&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}
// 选择规格
export const spectype= (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=goods/spectype&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}


// 选择规格最后显示价格和数量
export const specdetail= (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=goods/specdetail&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}


// 商品详情
export const detail= (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=goods/detail&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}
// 收藏
export const favor= (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=goods/favor&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}
// 商品详情的加减商品数量
export const stock= (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=goods/stock&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}

// 领取优惠卷
export const coupon= (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=plugins/index&pluginsname=coupon&pluginscontrol=coupon&pluginsaction=receive&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {...params})
}