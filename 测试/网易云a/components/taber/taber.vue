<template>
	<view>
		<view v-if="currentPage == 'home'" class="taber_zd_box" style="box-shadow: 0 -1rpx 6rpx rgb(0 0 0 / 10%);">
			<view class="first_s" @click="navig_home" :style="{'color':currentPage == 'home'?'#f84e51':''}">
				  <view class="my icon-yinlemusic216"></view>
				 <text>首页</text>
			</view>
			<view v-if="musci.id" class="music_bo">
				<view class="music_bo_box">
					<image class="audio_img" :src="musci.coverImgUrl" mode="" :style="{ transform: 'rotate(' + rotate + 'deg)' }"></image>
				</view>
			</view>
			<view class="my_bag"  @click="navig_my" :style="{'color':currentPage == 'my'?'#f84e51':''}">
				 <view class="my icon-wode-wode"></view>
				 <text>我的</text>
			</view>
		</view>
		
		<view v-if="currentPage == 'mrtj'" class="taber_zd_box" style="box-shadow: 0 -1rpx 6rpx rgb(0 0 0 / 10%);justify-content: left;">
			<view class="left_are">
				  <image class="are_img" :src="musci.coverImgUrl" mode=""></image>
			</view>
			<view class="are_name">
				<view>{{musci.title}}</view>
				<view>{{musci.name}}</view>
			</view>
			<view class="bof">
				<view @tap="bofang(musci)" style="font-size: 56rpx;color: rgba(0, 0, 0, 0.5);" v-if="musci.bofang == true" class="my icon-zanting"></view>
				<view @tap="bofang(musci)" style="font-size: 56rpx;color: rgba(0, 0, 0, 0.5);" v-else class="my icon-bofang"></view>
				<view style="font-size: 56rpx;color: rgba(0, 0, 0, 0.5);" class="my icon-24gf-playlistMusic4"></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import { getCache, setCache } from "@/utils/cache.js";
	export default {
		name:"taber",
		data() {
			return {
				musci: {},
				rotate:0,
				time: null
			};
		},
		props: {
		  currentPage: {
			type: String,
			default: 'home'
		   },
		   datas: {
			   type: Object,
			   default: {}
		   }
		 },
		 watch:{
			 datas: {
			   handler(newVal, oldVal) {
				   // console.log(this.datas)
				 this.musci = newVal
				 // console.log('这个是', this.musci)
				 clearInterval(this.timer);
				 
				 this.init()
			   },
			   deep: true
			 }
		 },
		 created() {
			if (getCache('bofangVal')) {
				this.musci = getCache('bofangVal')
			}
			this.init()
		 },
		methods:{
			// 点击播放
			bofang(val, index) {
				this.$emit('getNum',val)
			},
			init() {
					 // console.log(getCache('bofangVal').bofang)
				if (getCache('bofangVal').bofang) {
					this.initRotate();
				} else {
					clearInterval(this.timer);
				}
			},
			navig_home() {
				uni.navigateTo({
					url:"/pages/index/index"
				});
			},
			navig_my() {
				uni.navigateTo({
					url:"/pages/my/my"
				});
			},
			initRotate() {
				this.timer = setInterval(() => {
					this.rotate += 40;
					// console.log('触发了', this.rotate)
				}, 1000);
			}
		}
	}
</script>

<style lang="scss">
	// 自定义taber
	.taber_zd_box{
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1024;
		// box-shadow: -1rpx 6rpx rgb(0, 0, 0, /, 10%);
		display: flex;
		justify-content: space-between;
		background-color: white;
		height: 104rpx;
		align-items: center;
		.first_s,
		.music_bo,
		.my_bag{
			position: relative;
			color: #7a7e83;
			width: calc(100%/3);
			.icon-yinlemusic216{
				font-size: 50rpx;
				margin-top: 10rpx;
			}
			.icon-wode-wode{
				font-size: 50rpx;
				margin-top: 10rpx;
			}
		}
		.first_s,
		.my_bag{
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-direction: column;
		}
		.first_s text{
			font-size: 22rpx;
		     margin-top: 5rpx;
		}
		.my_bag text{
			font-size: 22rpx;
			margin-top: 5rpx;
		}
		
	}
.music_bo_box{
	position: absolute;
	background-color: white;
	overflow: initial;
	width: 52px;
	height: 52px;
	top: -46px;
	left: 0;
	right: 0;
	margin: auto;
	box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.08);
	border-radius: 26px;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
.audio_img{
	width: 70rpx;
	z-index: 2;
	height: 70rpx;
	border-radius: 50%;
	line-height:  70rpx;
	transition: all 1s linear;
}


// 每日推荐播放模式
.left_are{
	width: 82rpx;
	height: 82rpx;
	overflow: hidden;
	border-radius: 50%;
	margin: auto 30rpx auto 20rpx;
	.are_img{
		display: block;
		width: 100%;
		height: 100%;
	}
}
.bof{
	width: 184rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	view{
		margin-right: 24rpx;
	}
}
.are_name{
	// display: flex;
	flex: auto;
	width: calc(100%-316rpx);
}
.are_name view:first-child{
	    font-size: 32rpx;
	    margin-bottom: 8rpx;
		color: #000;
}
.are_name view:last-child{
	    font-size: 24rpx;
	    color: rgba(0, 0, 0, 0.5);
}
</style>