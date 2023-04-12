import request from '@/utils/request'
import {setCache, getCache} from "@/utils/cache.js"


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


var t = parseInt(new Date().getTime() / 1000)
var d = new Date().getTime();
var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	var r = (d + Math.random() * 16) % 16 | 0;
	d = Math.floor(d / 16);
	return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
});

var cache_user_uuid_key
var uuid = getCache('cache_user_uuid_key') || null;
if (uuid == null) {
	setCache('cache_user_uuid_key', uid)
}
var token  = getCache('info').token || ''
// 登录
export const login = (params) => {
	uuid = getCache('cache_user_uuid_key') || null;
	if (uuid == null) {
		setCache('cache_user_uuid_key', uid)
	}
	return request.post('?s=user/login&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uuid +'&ajax=ajax', {...params})
}
// 注册
export const reg = (params) => {
	uuid = getCache('cache_user_uuid_key') || null;
	if (uuid == null) {
		setCache('cache_user_uuid_key', uid)
	}
	console.log(params)
	return request.post('?s=user/reg&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uuid +'&ajax=ajax', {...params})
}
// 账户注销
export const logout = (params) => {
	return request.get('?s=safety/logout&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax')
}

// 注册验证码
export const regyzm = (params) => {
	uuid = getCache('cache_user_uuid_key') || null;
	if (uuid == null) {
		setCache('cache_user_uuid_key', uid)
	}
	console.log(uuid)
	return request.post('?s=user/regverifysend&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uuid +'&ajax=ajax', {...params})
}

// 登录验证码
export const regyzm_login = (params) => {
	uuid = getCache('cache_user_uuid_key') || null;
	if (uuid == null) {
		setCache('cache_user_uuid_key', uid)
	}
	console.log(uuid)
	return request.post('?s=user/loginverifysend&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uuid +'&ajax=ajax', {...params})
}

// // 登录验证码
// export const regewm = (params) => {
// 	return request.get('?s=user/userverifyentry&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax&type=user_reg&t=' + t)
// }

