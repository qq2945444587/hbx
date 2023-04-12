<template>
	<view class="my-container">
		<view class="bg_whisu">
			<!-- // (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度 -->
			<navigation-custom :config="config" :scrollTop="scrollTop" @customConduct="customConduct"
				:scrollMaxHeight="scrollMaxHeight" />
		</view>
		<view class="zhanew">
			<image class="head-img" :src="tx_img" mode=""></image>
			<view class="my_name">{{userFor.userName}}</view>
		</view>
		 <view class="qiH">
			 <!-- 方法类动态添加类名对于小程序无效 -->
			 <view :class="['lately_box',tabShow?'active':'']" @tap="tab()">
			 	<view class="my icon-zuijinliulan"></view>
			 	<view>最近</view>
			 </view>
			 <view :class="['like_box',tabShow?'':'active']" @tap="tab()">
				 <view class="my icon-shenghuoaixinjuanzeng"></view>
			 	 <view>喜欢</view>
			 </view>
		 </view>
		 <view class="music-title">
		 	<view class="my icon-24gf-playCircle"></view>
			<view class="font_size">全部播放</view>
			<view v-if="tabShow" class="music_nuber">(共{{weekData.length}}首)</view>
			<view v-else class="music_nuber">(共30首)</view>
		 </view>
		 <scroll-view v-if="tabShow" scroll-y="true" scroll-with-animation class="scr_my">
		 	<view class="music-item" v-for="(item, index) in weekData" :key="item.song.id">
				<image class="music-img" :src="item.song.al.picUrl" mode=""></image>
				<view class="music-info">
					<view class="music-name">
						{{item.song.name}}
					</view>
					<view class="music-singer">
						<text class="small-icon" v-show="item.song.h">HD</text>
						<text class="small-icon" v-show="item.song.s">SQ</text>
                        {{item.song.ar[0].name}}
					</view>
				</view>
			</view>
		 </scroll-view>
		<taber-b currentPage="my" :datas="musci"></taber-b>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tx_img:'../../static/mr.jpeg',
				userFor: {
					userName: '默认名字',
					id: null,
				},
				musci: {},
				tabShow: true,
				config: {
					title: "我的", //title
					bgcolor: "#ffffff", //背景颜色
					fontcolor: "#000000", //文字颜色，默认白色
					type: 2, //type 1，3胶囊 2，4无胶囊模式
					transparent: false, //是否背景透明 默认白色
					linear: false, //是为开启下滑渐变
					share: false, //是否将主页按钮显示为分享按钮
					show_sc: false, // 是否显示搜索栏(首页导航栏)
					show_no: false, // 真的搜索功能
					// menuIcon:"../static/icon/back_.png", 当type为3或者4的时候左边的icon文件位置，注意位置与当前页面不一样
					// menuText:"返回", 当type为3或4的时候icon右边的文字
				},
				scrollTop: 0, // 当linear为true的时候需要通过onpagescroll传递参数
				scrollMaxHeight: 200, //滑动的高度限制，超过这个高度即背景全部显示
				weekData:[] // 最近播放
			}
		},
		onLoad() {
			this.statusData()
			this.recordData()
		},
		computed:{
		},
		methods: {
			tab() {
				this.tabShow = !this.tabShow
				if (this.tabShow) {
					this.recordData()
				} else {
					
				}
			},
			// classS1(){  // 兼容小程序的不要用方法去添加动态类名
			// 	let v = ["lately_box"];
			// 	if (this.tabShow == true) {
			// 		v.push("active");
			// 	} else {
			// 		v.push("");
			// 	}
			// 	return v;
			// },
			// classS2(){ // 兼容小程序的不要用方法去添加动态类名
			// 	let v = ["like_box"];
			// 	if (this.tabShow == false) {
			// 		v.push("active");
			// 	} else {
			// 		v.push("");
			// 	}
			// 	return v;
			// },
			// 最近播放记录
			async recordData() {
				let list = []
				const data = await this.$api.record();
				this.weekData = data.weekData || []
			},
			// 检测用户是否登录
			async statusData() {
				this.loading = true
				const data = await this.$api.status();
				console.log(data)
				if (data.data.code == 200) {
					this.userFor = Object.assign(this.userFor,data.data.account)
					console.log(this.userFor)
					
				} else{
					uni.showModal({
						title: '提示',
						content: '未登录，请跳转到登录界面',
						success: function (res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/login/login'
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

<style scoped lang="scss">
	.my-container{
		padding-bottom: 106rpx;
		width: 100%;
		position: relative;
		
	}
	.zhanew{
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 47vw;
		width: 100%;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-image: url('data:image/webp;base64,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');
	}
/* 	.zhanew{
		opacity: 0.6;
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		z-index: 3;
		background-color: rgba(0, 0, 0, 0.8);
	    filter: blur(2px);
	} */
	.head-img{
		width: 216rpx;
		height: 216rpx;
		z-index: 5;
		border-radius: 50%;
		overflow: hidden;
	}
	.my_name{
		z-index: 5;
		color: #fff;
		font-size: 36rpx;
		margin-top: 20rpx;
	}
	.qiH{
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
		/* box-shadow: 0 0 0.8px black; */
		width: 100%;
		height: 90rpx;
		align-items: center;
	}
	.lately_box,
	.like_box{
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		width: 50%;
		border-radius: 47px 47px 8px 8px;
		color: rgba(0, 0, 0, 0.5);
	    background: lightgrey
	}
	.qiH .active{
		color: white;
		border-radius: 47px 47px 8px 8px;
	  background-color: #31dc6987;
	  box-shadow: 2px 5px 6.8px 2px #2ca84f5e;
	}
	.lately_box .icon-zuijinliulan{
		font-size: 45rpx;
		margin-right: 10rpx;
	}
	.like_box .icon-shenghuoaixinjuanzeng{
		font-size: 45rpx;
		margin-right: 10rpx;
	}
	.scr_my{
	    width: 100%;
		height: 800rpx;
	}
	.music-title{
		padding-left: 40rpx;
		margin: 30rpx 0;
		box-sizing: border-box;
		color: #000;
		font-size: 32rpx;
		font-weight: 600;
		display: flex;
		align-items: center;
		.icon-24gf-playCircle{
			margin-right: 16rpx;
			font-size: 40rpx;
			color: #f84e51;
		}
		// .font_size{
			
		// }
		.music_nuber{
			font-size: 24rpx;
			margin-left: 12rpx;
			color: rgba(0, 0, 0, 0.5);
		}
	}
	.music-item{
		height: 140rpx;
		box-sizing: border-box;
		padding: 0 40rpx;
		align-items: center;
		margin-bottom: 20rpx;
		width: 100%;
		display: flex;
		.music-img{
			width: 116rpx;
			height: 116rpx;
			border-radius: 12rpx;
		}
		.music-info{
			margin-left: 30rpx;
			max-width: calc(100% - 140rpx);
			.music-name{
				font-size: 30rpx;
				margin-bottom: 14rpx;
				color: #000;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.music-singer{
				display: flex;
				color: rgba(0, 0, 0, 0.5);
				font-size: 24rpx;
				align-items: center;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				.small-icon{
					margin-right: 12rpx;
					-webkit-transform: scale(0.9);
					transform: scale(0.9);
					color: rgba(0, 0, 0, 0.5);
					font-size: 24rpx;
					padding: 2rpx 6rpx;
					border: 1px solid rgba(0, 0, 0, 0.2);
					border-radius: 8rpx;
				}
			}
		}
	}
	scroll-view ::-webkit-scrollbar {
	  display:none;
	  width:0;
	  height:0;
	  color:transparent;
	}
</style>
<!-- 8382004325 -->

