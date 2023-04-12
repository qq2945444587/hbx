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
export const usercenter = (params) => {
	token  = getCache('info').token || ''
	return request.post('?s=user/center&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uuid +'&ajax=ajax', {...params})
}



// // 登录验证码
// export const regewm = (params) => {
// 	return request.get('?s=user/userverifyentry&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax&type=user_reg&t=' + t)
// }

