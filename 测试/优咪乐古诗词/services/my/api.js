import { request } from '../../utils/Request.js';
// 登录或注册
export async function loginApi(data) {
  return await request('/my/login', {
    data: data,
	method:'POST'
  });
}

// 获取用户信息
export async function getUserInfoData(data) {
  return await request('/my/getUserInfoData', {
    data: data
  });
}
// 关于我们
export async function getAboutUs() {
  return await request('/my/getAboutUs');
}

// 我的登陆后动态信息
export async function getDynamicInformation() {
  return await request('/my/getDynamicInformation');
}
// 获取二维码
export async function getUelQrCode(data) {
  return await request('/my/getUelQrCode', {
    data: data,
	method:'POST'
  });
}