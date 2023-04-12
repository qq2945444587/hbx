<template>
	<view>
		<view class="login_bg_box">
			<image class="login_bg" src="../../static/loginBg.png" mode=""></image>
			<view class="absolve-wrapper">
				<view class="logo">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<view class="text-title">我有故事和歌，你听吗？</view>
				<view class="" style="margin-top: 400rpx;width: 100%;text-align: center;">
					只能游客登录哦
				</view>
				<button class="login-button" @tap="anonimousData" hover-class="button-hover" :loading="loading" type="primary">登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import { getCache, setCache } from "@/utils/cache.js";
	export default {
		data() {
			return {
				loading: false
			};
		},
		onLoad() {
			console.log(this.loading)
		},
		methods: {
			//游客登录
			async anonimousData() {
				this.loading = true
				const data = await this.$api.anonimous();
				if (data.code == 200) {
					this.loading = false
					setCache("COOKIE", data.cookie);
					setCache("userId", data.userId);
					uni.showModal({
						title: '提示',
						content: '登录成功,点击确定跳转到首页',
						success: function (res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/index/index'
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.login_bg_box{
		height: 100vh;
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	.login_bg{
		position: relative;
		height: 100%;
		width: 100%;
	}
	.absolve-wrapper{
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		width: 100%;
		height: 100%;
		.logo{
			text-align: center;
			margin-top: 12%;
			image{
				width: 200rpx;
				height: 200rpx;
			}
		}
		.text-title{
			font-size: 48rpx;
			margin-top: 5%;
			text-align: center;
			color: #fffefe;
		}
		.login-button{
			width: 70%;
			color: #fff;
		    background-image: linear-gradient(to right, #ffa6b6, #ff7c93);
			letter-spacing: 4rpx;
			height: 90rpx;
			margin-top: 78rpx !important;
			padding: 0 40rpx;
			font-size: 32rpx;
			box-sizing: border-box;
			border-radius: 2600px;
		}
	}
</style>
