import {
	getCache
}
from "@/utils/cache.js"

const baseURL = 'https://d1.shopxo.vip/api.php'

// const baseURL = ''

const request = {
	get(url, data) {
		uni.showLoading({
			title: '加载中...'
		});
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseURL + url,
				data: data,
				header: {
					'Accept': 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
				},

				method: "GET",
				success: (response) => {
					let res = response.data
					if (res.code === 200 || res.code == 0) {
						resolve(res)
					} else if (res.data && res.data.code == 200) {
						resolve(res)
					} else {
						reject(res)
						showError(res);
									uni.hideLoading();
					}
				},
				fail: (error) => {
					if (error && error.response) {
						reject(error.response)
						showError(error.response);
									uni.hideLoading();
					}
				},
			});
		})

	},
	post(url, data) {
		uni.showLoading({
			title: '加载中...'
		});
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseURL + url,
				data: data,
				header: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				method: "POST",
				success: (response) => {
					let res = response.data
					if (res.code === 200 || res.code == 0 || res.code == -11 || res.code == -12 || res.code == -10 || res.code == -2 || res.code == -1 || res.code == -400) {
						resolve(res)
					} else {
						reject(res)
						showError(res);
					}
					uni.hideLoading();
			
				},
				fail: (error) => {
					if (error && error.response) {
						reject(error.msg)
						showError(error.msg);
						uni.hideLoading();
					}
				},
			})
		})
	},
}

const showError = error => {
	let errorMsg = ''
	if (error.message) {
		errorMsg = error.message
	} else {
		switch (error.code) {
			case 400:
				errorMsg = '请求参数错误'
				break
			case 301:
				errorMsg = '未授权，请登录'
				break
			case 403:
				errorMsg = '跨域拒绝访问'
				break
			case 404:
				errorMsg = '请求地址不存在'
				break
			case 408:
				errorMsg = '请求超时'
				break
			case 500:
				errorMsg = '服务器内部错误'
				break
			case 501:
				errorMsg = '服务未实现'
				break
			case 502:
				errorMsg = '网关错误'
				break
			case 503:
				errorMsg = '服务不可用'
				break
			case 504:
				errorMsg = '网关超时'
				break
			case 505:
				errorMsg = 'HTTP版本不受支持'
				break
			case -3:
				errorMsg = '账号不存在'
				break
			case -1:
				errorMsg = '账号不能为空'
				break
			default:
				errorMsg = "请求失败"
				break
		}
	}

	uni.showToast({
		title: errorMsg,
		icon: 'none',
		duration: 3000,
		complete: function() {
			setTimeout(function() {
				if (error.code == 301) {
					uni.navigateTo({
						url: '../login/index'
					});
				}
				uni.hideToast();
			}, 3000);
		}
	});
}

export default request
