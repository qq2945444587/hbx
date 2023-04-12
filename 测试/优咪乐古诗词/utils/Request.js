import config from '../config/config.js';
import promisic from './Promisic.js';
import { getStorageSync } from './uniApi.js';
/**
 * 网络请求
 */
const request = async (url, options = {}) => {
	if(!options.method){
		options.method = 'GET'
	}
	const data = options.data || {};
	data.project_id = config.projectId
	if(!data.user_id){
		const userInfo = getStorageSync('userInfo')
		data.user_id = userInfo?userInfo.id:null
		// if(!data.user_id){
		// 	data.user_id = 1
		// }
	}
	const pid = getStorageSync('pid')
	data.pid = pid?pid:null
	const res = await promisic(uni.request)({
		url: `${config.requsetUrl}${url}`,
		data:data,
		method:options.method,
		header: {
			'content-type':'application/json'
		}
	})
	return res.data;
}
const aa = async ()=>{
	console.log('aa');
}
export {request,aa}