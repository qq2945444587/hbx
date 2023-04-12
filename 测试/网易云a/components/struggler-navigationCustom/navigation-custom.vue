<template>
	<view class="navigation-bar">
		<view class="navigation-bar-fixed" :style="{height:height,background:(!config.transparent&&!config.linear)?config.bgcolor:'transparent'}">
			<!-- capsule or normal -->
			<view v-if="[1,2].indexOf(config.type)!= -1" :class="config.type==1?'navigation-bar-capsule':'navigation-bar-textbox'" :style="{top:marginTop}">
				<!-- <view class="button-action" hover-class="button-action-active" @click="back_">
					<image src="../../static/icon/back_.png" mode=""></image>
				</view>
				<view class="button-v-line"></view>
				<view v-if="!config.share" class="button-action" hover-class="button-action-active" @click="home_">
					<image src="../../static/icon/home_.png" mode=""></image>
				</view>
				<view v-if="config.share" class="button-action" hover-class="button-action-active">
					<button class="button_clear" open-type="share" hover-class="none">
						<image src="../../static/icon/share_.png" mode=""></image>
					</button>
				</view> -->
			</view>
			<!-- custom button -->
		<!-- 	<view v-if="[3,4].indexOf(config.type)!= -1" @click="conduct_" :class="config.type == 3?'navigation-bar-custom-capsule':'navigation-bar-custom-textbox'" :style="{top:marginTop}">
				<image v-if="config.menuIcon" class="custom-icon" :src="config.menuIcon"></image>
				<text class="custom-describe">{{config.menuText}}</text>
			</view> -->
			<!-- title -->
			<view class="navigation-bar-title" :style="'margin-top:'+marginTop+';color:'+config.fontcolor">{{config.title}}</view>
			<!-- linear background -->
			<!-- <view v-if="config.linear" class="navigation-bar-linear" :style="{height:height,background:config.bgcolor,opacity:scrollTop/scrollMaxHeight}"></view> -->
		</view>
		<view v-if="config.show_sc" class="search" :style="{top: hh}">
			<view class="search-form round">
				<text style="font-size: 34rpx;" class="my icon-sousuo"></text>
				<input type="text" placeholder="请搜索" confirm-type="search"/>
			</view>
		</view>
		<view v-if="config.show_no" class="search" :style="{top: hh}">
			<view class="search-form round">
				<text style="font-size: 34rpx;" class="my icon-sousuo"></text>
				<input type="text" placeholder="请搜索音乐/歌词" confirm-type="search"/>
			</view>
		</view>
		<!-- 这个是占位的，不然内容会被遮挡 -->
		<view v-if="config.xuyao" class="zhanwei" :style="{height:h3}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				h3: 0
			};
		},
		computed:{
			height(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync()
				let height = statusBarHeight +4 //ios 24px
				if (platform.toLowerCase() == "android" ){
					height +=4 //android 28px
				}
				// 胶囊高度 32px 下边框6px height 状态栏高度
				return height+ 38 + "px"
			},
			hh(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync()
				let height = statusBarHeight +4 //ios 24px
				if (platform.toLowerCase() == "android" ){
					height +=4 //android 28px
				}
				// 胶囊高度 32px 下边框6px height 状态栏高度
				return height+ 37 + "px"
			},
			marginTop(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync()
				let height = statusBarHeight +4
				if (platform.toLowerCase() == "android" ){
					height +=4
				}
				return height + "px"
			}
		},
		created() {
			var that = this
			this.$nextTick(()=>{
				var h = parseInt(that.height.split('px')[0])
				// var h2
				if (that.config.show_sc) {
					uni.createSelectorQuery().in(that).select('.search').boundingClientRect(data => {
					// h2 = data.height
					that.h3 = h + data.height + 'px'
					}).exec()	
				} else {
					that.h3 = h + 'px'
				}
				that.hights(that.h3)
				// this.h3 = h + h2 + 'px'
			})

		},
		mounted() {
			// console.log(this.config)
			
		},
		props:{
			config:{
				type:Object,
				default(){
					return {
						title:"",
						bgcolor:"",
						type:2,
						linear:false,
						transparent:false,
						fontcolor:"#000",
						menuIcon:"",
						menuText:""
					}
				}
			},
			scrollTop:{
				type:Number,
				default:0
			},
			scrollMaxHeight:{
				type:Number,
				default:288
			}
		},
		methods:{
			hights(val) {
				this.$emit('hights',this.h3)
			},
			back_(){
				uni.navigateBack({
					delta:1
				});
			},
			home_(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			},
			conduct_(){
				this.$emit("customConduct")
			}
		}
	}
</script>

<style lang="scss">
	.zhanwei{
		
	}
	.search{
		display: flex;
		position: fixed;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		width: 100%;
		box-sizing: border-box;
		background-color: white;
		z-index: 9;
        .search-form{
			box-sizing: border-box;
			width: 100%;
			background-color: #f5f5f5;
			line-height: 66rpx;
			height: 66rpx;
			font-size: 24rpx;
			color: #333333;
			flex: 1;
			display: flex;
			align-items: center;
			margin: 0 30rpx;
			border-radius: 1000px;
			text{
				margin: 0 20rpx 0 20rpx;
			}
			input{
				position: relative;
				display: block;
				height: 100%;
				width: 100%;
				padding-right: 30rpx;
				background: none;
				color: inherit;
				opacity: 1;
				font: inherit;
				line-height: inherit;
				letter-spacing: inherit;
				text-align: inherit;
				text-indent: inherit;
				text-transform: inherit;
				text-shadow: inherit;
				box-sizing: border-box;
			}
		}
	}
	.navigation-bar{
		width: 100%;
		z-index: 100;
		box-sizing: border-box;
		.navigation-bar-fixed{
			width: 100%;
			position: fixed;
			top:0;
			box-sizing: border-box;
			z-index: 10;
			background: #fff;
			display: flex;
			justify-content: center;
			text-align: center;
			.navigation-bar-linear{
				width: 100%;
				position: absolute;
				box-sizing: border-box;
				z-index: -1;
			}
			.navigation-bar-title{
				width: 280rpx;
				line-height: 32px;
				// height: 32px;
				color: #fff;
				font-size: 36rpx;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
			.navigation-bar-custom-capsule{
				position: absolute;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 32px;
				left: 10px;
				background-color: rgba(255,255,255,.5);
				border-radius: 16px;
				padding: 0 23rpx;
				// border:0.5px solid rgba(255,255,255,.3);
				box-sizing: border-box;
				overflow: hidden;
				z-index: 9;
				.custom-icon{
					width: 45rpx;
					height: 45rpx;
				}
				.custom-describe{
					font-size: 28rpx;
				}
			}
			.navigation-bar-custom-textbox{
				position: absolute;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 32px;
				left: 0px;
				padding: 0 23rpx;
				// border:0.5px solid rgba(255,255,255,.3);
				box-sizing: border-box;
				overflow: hidden;
				z-index: 9;
				.custom-icon{
					width: 55rpx;
					height: 55rpx;
				}
				.custom-describe{
					font-size: 32rpx;
				}
			}
			.navigation-bar-textbox{
				position: absolute;
				// height: 32px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				line-height: 32px;
				height: 32px;
				font-size: 30rpx;
				width: 85px;
				left: 0px;
				// border:0.5px solid rgba(255,255,255,.3);
				box-sizing: border-box;
				overflow: hidden;
				z-index: 9;
				.button-action{
					flex: 1;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					.button_clear{
						line-height: 1;
						background-color: transparent;
						border: none;
						margin: 0;
						padding: 0;
				    }
					.button_clear::after{
						border:none;
					}
					image{
						width: 60rpx;
						height: 60rpx;
						padding: 6rpx;
						box-sizing: border-box;
					}
				}
				.button-v-line{
					width: 0.5px;
					height: 18px;
					background-color: rgba(0,0,0,.2);
				}
			}
			.navigation-bar-capsule{
				position: absolute;
				// height: 32px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				line-height: 32px;
				height: 32px;
				font-size: 30rpx;
				width: 89px;
				left: 10px;
				background-color: rgba(255,255,255,.5);
				border-radius: 16px;
				// border:0.5px solid rgba(255,255,255,.3);
				box-sizing: border-box;
				overflow: hidden;
				z-index: 9;
				.button-action{
					flex: 1;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					image{
						width: 60rpx;
						height: 60rpx;
						padding: 10rpx;
						box-sizing: border-box;
					}
					.button_clear{
						line-height: 1;
						background-color: transparent;
						border: none;
						margin: 0;
						padding: 0;
						text-decoration: none;
				    }
					.button_clear::after{
						border:none;
					}
				}
				.button-action-active{
					background-color: rgba(0,0,0,.3)
					
				}
				.button-v-line{
					width: 0.5px;
					height: 18px;
					background-color: rgba(0,0,0,.2);
				}
			}
		}
	}

</style>
