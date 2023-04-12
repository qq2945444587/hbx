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

// 首页数据模块
export const getRecommendList = (params) => {
	var token  = getCache('info').token || ''
	return request.post('?s=index/index&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uid +'&ajax=ajax', {is_key: 1})
}

