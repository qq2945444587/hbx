<template>
	<view>
		<view class="head" :style="{ height: height + 'rpx', background:background}">
			<view 
			class="back"
			@click="back"
			v-if="backShow"
			:style="{ 
				top: top + 'px',
				color:color
			}">〈</view>
			<view
			class="title"
			v-if="titleShow"
			:style="{
				top: top + 'px',
				color:color,
				background:background,
				'font-size': size + 'rpx'
			}">{{title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '自定义标题'
			},
			size:{
				type: Number,
				default: 32
			},
			color:{
				type: String,
				default: '#000'
			},
			titleShow: {
				type: Boolean,
				default: true
			},
			backShow: {
				type: Boolean,
				default: true
			},
			background:{
				type: String,
				default: ""
			}
		},
		data() {
			return {
				height :0,
				top:0,
			}
		},
		onLoad() {
			//设备信息
			let app = uni.getSystemInfoSync();
			console.log('设备信息',app)
			// #ifdef APP-PLUS
			this.top = app.safeAreaInsets.top
			this.height = 64 + app.safeAreaInsets.bottom
			//#endif
			
			// #ifdef MP-WEIXIN
			
				//胶囊信息
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
				console.log(menuButtonInfo)
				this.height  = app.statusBarHeight + menuButtonInfo.height + (menuButtonInfo.top - app.statusBarHeight)*2
				this.top = menuButtonInfo.top;
			//#endif
			
		},
		methods: {
			back(){
				console.log('点击头部返回')
				uni.navigateBack();
			}
		}
	}
</script>

<style>
.head{
	position: fixed;
	width: 100%;
	z-index: 999;
}
.title{
	position: fixed;
	width: 100%;
	text-align: center;
	/* line-height: 42rpx;
	height: 42rpx; */
}
.back{
	position: fixed;
	width: 81rpx;
	text-align: center;
	line-height: 32px;
	height: 32px;
	font-size: 32rpx;
	font-weight: 900;
	z-index: 9;
}
</style>
