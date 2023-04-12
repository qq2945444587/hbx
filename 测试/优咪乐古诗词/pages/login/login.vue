<template>
	<view class="container">
		<view class="s-content">
			<!-- #ifdef MP-WEIXIN -->
			<official-account></official-account>
			<!-- #endif -->
			<view class="s-logo">
				<image src="../../static/logo.png">
			</view>
			<view class="s-name">{{projectName}}</view>
			<button type="default" open-type="getPhoneNumber" class="s-button-login" @getphonenumber="login">注册 / 登录</button>
		</view>
	</view>
</template>

<script>
	import config from '../../config/config.js';
	import { getCode,showToast,setStorageSync,getStorageSync,navigateBack } from '../../utils/uniApi.js';
	import { loginApi,getUserInfoData } from '../../services/my/api.js';
	export default {
		data() {
			return {
				projectName:config.name,
				code:''
			}
		},
		async onShow() {
			if(getStorageSync('userInfo')){
				navigateBack();
				return;
			}
			const codeData = await getCode()
			if(!codeData.code){
				showToast({title:'网络错误,请重试'});
				return;
			}
			this.code = codeData.code	
		},
		methods: {
			async login(e){
				if(getStorageSync('userInfo')){
					navigateBack();
					return;
				}
				if(!e.detail.code){
					showToast({title:'网络错误,请重试'});
					return;
				}
				const data = {
					code:this.code,
					iv:e.detail.iv,
					encryptedData:e.detail.encryptedData,
				}
				const loginRes = await loginApi(data);
				if(loginRes.status !== 20000){
					showToast({title:loginRes.message});
					return;
				}
				const myRes = await getUserInfoData({user_id:loginRes.data.user_id});
				if(myRes.status !== 20000){
					showToast({title:myRes.message});
					return;
				}
				setStorageSync('userInfo',myRes.data)
				showToast({title:'登录成功'});
				navigateBack();
			},
		}
	}
</script>
<style lang="scss" scoped>
@import 'login.scss';
</style>
