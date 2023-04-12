<template>
	<view class="content">
		<view class="">
			这个是测试的页面
		</view>
	
		<view class="text-area">
			<svg @click="list()" t="1675408019586" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1837" width="30" height="30"><path d="M256 68.693333a160 160 0 0 1 48.768 7.616l277.333333 88.746667A160 160 0 0 1 693.333333 317.44v146.922667l87.125334-55.424a96 96 0 0 1 129.856 25.472l2.666666 3.968a96 96 0 0 1 15.018667 51.541333V896h21.333333a32 32 0 0 1 0 64h-874.666666a32 32 0 0 1 0-64h21.333333V228.693333a160 160 0 0 1 154.816-159.914666z m0 64a96 96 0 0 0-96 96V896h469.333333V317.44a96 96 0 0 0-62.378666-89.92l-4.373334-1.514667-277.333333-88.746666A96 96 0 0 0 256 132.693333z m602.986667 340.053334a32 32 0 0 0-44.16-9.813334L693.333333 540.224V896h170.666667V489.92a32 32 0 0 0-3.221333-14.016zM288 533.333333a32 32 0 0 1 32 32v106.666667a32 32 0 0 1-64 0v-106.666667a32 32 0 0 1 32-32z m0-256a32 32 0 0 1 32 32v106.666667a32 32 0 0 1-64 0v-106.666667a32 32 0 0 1 32-32z" fill="#8a8a8a" p-id="1838"></path></svg>
			<!-- <button @click="list()">跳转到子页面</button> -->
		</view>
		<view class="zx">
			<view class="flex-item uni-bg-red">A</view>
			<view class="flex-item uni-bg-green">B</view>
			<view class="flex-item uni-bg-blue">C</view>
		</view>
		<view class="hx">
			<view class="flex-item uni-bg-red">A</view>
			<view class="flex-item uni-bg-green">B</view>
			<view class="flex-item uni-bg-blue">C</view>
		</view>
		<view class="swp">
			<swiper :indicator-dots="indicatorDots" circular :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">1</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">2</view>
				</swiper-item>
			</swiper>
		</view>
		
		<movable-area>
			<movable-view :x="x" :y="y" inertia="true" out-of-bounds="true" direction="all" @change="onChange">text</movable-view>
		</movable-area>
		<view @click="centerjian()" class="">
			点击移动到中间
		</view>
		<button type="default" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber">获取手机号</button>
		<view class="progress-box">
			<progress :percent="percent" active="true" duration="30" active-mode="forwards" show-info border-radius="2" font-size="16" stroke-width="3" />
		</view>
		
		
		<image src="../../static/logo.png" height="100" width="100"  mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				x:0,
				y:0,
				 old: {
					x: 0,
					y: 0
				},
				obj_to:{
					
				},
				percent: 40,
				title: '这是子页面',
				indicatorDots: true,
				 triggered: false
			}
		},
		onInit(){
	
		},
		onLoad(op) {
			// console.log(JSON.parse(op))
			// console.log(JSON.parse(decodeURIComponent(op.item)))
			this.obj_to = JSON.parse(decodeURIComponent(op.item))
		},
		methods: {
			onChange(e){
				console.log(e)
			},
			centerjian(){
				this.x = 30
				this.y = 30
				// this.$nextTick(function() {
				// 	this.x = 300
				// 	this.y = 300
				// })
				console.log(this.obj_to)
			},
			decryptPhoneNumber(){
				console.log()
			},
			list(){
				// uni.navigateTo({
				// 	url:"/pages/home/home?id=1&name=uniapp"
				// });
			}
		}
	}
</script>

<style scoped>
	.zx{
		display: flex;
		flex-direction: row;
	}
	.hx{
		display: flex;
		flex-direction: column;
	}
	.uni-bg-red{
		background-color: red;
	}
	.uni-bg-green{
		background-color: green;
	}
	.uni-bg-blue{
		background-color: blue;
	}
	.flex-item{
		width: 100rpx;
		height: 100rpx;
	}
	movable-area{
		width: 100%;
		height: 200rpx;
		background-color: antiquewhite;
	}
	movable-view{
		text-align: center;
		width: 70rpx;
		height: 70rpx;
		line-height: 70rpx;
		background-color: coral;
	}
	.progress-box{
		width: 300rpx;
		margin: 0 auto;
	}
	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	} */
</style>

