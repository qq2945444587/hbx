import config from '../config/config.js';
// 打电话
const makePhoneCall = async (phoneNumber) => {
	uni.makePhoneCall({
		phoneNumber: phoneNumber
	});
}
// 跳转页面
const navigateTo = async (url) => {
	uni.navigateTo({
		url: url
	});
}
// 跳转tab
const switchTab = async (url) => {
	uni.switchTab({
		url: url
	});
}

const navigateBack = async (delta) => {
	uni.navigateBack({
		delta: delta || 1
	});
}



const getCode = async ()=>{
	return new Promise((resolve, reject) => {
		uni.login({
		  provider: 'weixin',
		  success: (loginRes) =>{
			resolve(loginRes)
		  }
		})
	})
}

// 提示信息
const showToast = async (params)=>{
	uni.showToast({
		title: params.title,
		duration: params.duration || 2000,
		icon:'none'
	});
}

// 存储数据
const setStorageSync = (key,value)=>{
	uni.setStorageSync(key, value);
}
// 获取数据
const getStorageSync = (key)=>{
	return uni.getStorageSync(key);
}
// 删除数据
const removeStorageSync = (key)=>{
	uni.removeStorageSync(key);
}
// 删除所有数据
const clearStorageSync = ()=>{
	uni.clearStorageSync();
}

const setShareAppMessage = (options)=>{
	let path = options.path || "/pages/index/index"
	const userInfo = getStorageSync('userInfo')
	if(userInfo){
		if(path.indexOf("?")>0){
			path = path + "&pid=" + userInfo.id
		}else{
			path = path + "?pid=" + userInfo.id
		}
	}
	return {
		title:  options.title ? (config.name + "（每天听首诗）：" + options.title) : config.name,
		path: path,
	}
}

const pluginTextToSpeech = (plugin,content,c)=>{
	plugin.textToSpeech({
		lang: "zh_CN",
		tts: true,
		content: content,
		success: function(res) {
			c(res);
		},
		fail: function(res) {
			c(null);
		}
	})
}




export {
	makePhoneCall,
	navigateTo,
	switchTab,
	getCode,
	showToast,
	setStorageSync,
	getStorageSync,
	removeStorageSync,
	clearStorageSync,
	setShareAppMessage,
	navigateBack,
	pluginTextToSpeech
}