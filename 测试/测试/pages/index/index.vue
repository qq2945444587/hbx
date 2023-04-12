<template>
	<view>
		<!-- 定位城市导航 -->
		<view class="nove_s" style="position: fixed;">
			<view class="addr">
				<view class="ip_con myiconfont icon-dingweixiao"></view>
				{{ city }}
			</view>
			<view class="input_box">
				<input style="font-size: 25rpx;" :value="value" :placeholder="placeholderValue"
					placeholder-style="color:#c0c0c0;" @tap="toSearch()" />
				<view style="font-size: 30rpx;margin-right: 20rpx; color: #c0c0c0;" class="myiconfont icon-sousuo">
				</view>
			</view>
			<view class="right_ho">
				<view style="font-size: 40rpx;" class="myiconfont icon-yuyin_o"></view>
				<view style="font-size: 40rpx;" class="myiconfont icon-xiaoxi" @tap="toMsg"></view>
			</view>
		</view>
		<!-- 商城首页轮播 -->
		<view class="swiper">
			<view style="border-radius: 15rpx;overflow: hidden;">
				<swiper circular="true" :autoplay="true" @change="swiperChange">
					<swiper-item v-for="swiper in swiperList" :key="swiper.id">
						<image class="swiper_img" :src="swiper.img"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="indicator">
				<view class="dots" v-for="(swiper, index) in swiperList" :class="[currentSwiper >= index ? 'on' : '']"
					:key="index">{{index}}</view>
			</view>
		</view>
		<!-- 快速导航 -->
		<view class="category-list">
			<view class="category" v-for="(img,index) in img_nav_list" :key="img.id" @tap="nav_click(img)">
				<view class="list_img_box">
					<view class="">
						<image class="list_img" :src="img.img" mode=""></image>
					</view>
					<text class="img_name">{{img.name}}</text>
				</view>
			</view>
		</view>

		<!-- 广告 -->
		<view class="banner">
			<image src="../../static/index/banner.jpg" mode=""></image>
		</view>
		<!-- 优惠专区 -->
		<view class="yhzq">
			<view class="title">
				<text>优惠专区</text>
			</view>
			<view class="yhzq_list">
				<view class="yhzq_column" v-for="(item, index) in Promotion" :key="index">
					<view class="" style="display: block;width: 100%;font-size: 24rpx;display: flex;">
						<text>{{item.title}}</text>
						<view class="countdown" v-if="item.countdown">
							<view>{{item.countdown.h}}</view>
							:
							<view>{{item.countdown.m}}</view>
							:
							<view>{{item.countdown.s}}</view>
						</view>
					</view>
					<view class="text_mor">
						<text style="margin-top: 10rpx;">{{item.ad}}</text>
						<text>点击进入</text>
					</view>
					<image :src="item.img" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 猜你喜欢 -->
		<view class="cnxh">
			<view style="margin-right: 10rpx;" class="myiconfont icon-weiju"></view>
			<view class="cnxh_text">猜你喜欢</view>
			<view style="margin-left: 10rpx;" class="myiconfont icon-weiju"></view>
		</view>
		<view class="shop_list_box">
			<view class="product" v-for="(item, index) in productlist" :key="item.goods_id">
				<image :src="item.img" mode=""></image>
				<view class="product_name">
					{{item.name}}
				</view>
				<view class="product_pice_box">
					<view class="product_pice">
						{{item.price}}
					</view>
					<view class="product_pep">
						{{item.slogan}}
					</view>
				</view>
			</view>
		</view>

	<view class="gys" @tap="gys">获取服务供应商</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: '北京',
				value: '羊肉串',
				placeholderValue: "请输入",
				currentSwiper: 0,
				swiperList: [{
						id: 1,
						src: 'url1',
						img: '/static/index/1.jpg'
					},
					{
						id: 2,
						src: 'url2',
						img: '/static/index/2.jpg'
					},
					{
						id: 3,
						src: 'url3',
						img: '/static/index/3.jpg'
					}
				],
				timeold: null,
				Promotion: [],
				nVueTitle: null,
				amapPlugin: null,
				keyMap:'b84f8d07ff6b8777fbecd997a9d94542',
				img_nav_list: [{
						id: 1,
						name: '办公',
						img: '/static/index/category/1.png',
						url: "/pages/home/home"
					},
					{
						id: 2,
						name: '家电',
						img: '/static/index/category/2.png',
						url: ""
					},
					{
						id: 3,
						name: '服饰',
						img: '/static/index/category/3.png',
						url: ""
					},
					{
						id: 4,
						name: '日用',
						img: '/static/index/category/4.png',
						url: ""
					},
					{
						id: 5,
						name: '蔬果',
						img: '/static/index/category/5.png',
						url: ""
					},
					{
						id: 6,
						name: '运动',
						img: '/static/index/category/6.png',
						url: ""
					},
					{
						id: 7,
						name: '书籍',
						img: '/static/index/category/7.png',
						url: ""
					},
					{
						id: 8,
						name: '文具',
						img: '/static/index/category/8.png',
						url: ""
					}
				],
				productlist: [{
						goods_id: 0,
						img: '/static/index/goods/p1.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 1,
						img: '/static/index/goods/p2.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 2,
						img: '/static/index/goods/p3.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 3,
						img: '/static/index/goods/p4.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 4,
						img: '/static/index/goods/p5.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 5,
						img: '/static/index/goods/p6.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 6,
						img: '/static/index/goods/p7.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 7,
						img: '/static/index/goods/p8.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 8,
						img: '/static/index/goods/p9.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					},
					{
						goods_id: 9,
						img: '/static/index/goods/p10.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: '￥168',
						slogan: '1235人付款'
					}
				]
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onInit(wod) {
			console.log(wod)
		},
		// onShow(){
		// 	console.log("监听页面显示")
		// },
		onLoad() {
			//  this.amapPlugin = new amap.AMapWX({  
			// 	key: this.keyMap  
			// });  
			//  this.amapPlugin.getRegeo({  
			// 	success: (data) => {  
			// 		console.log(data)  
			// 		this.addressName = data[0].name;  
			// 		uni.hideLoading();
			// 		fail: (res) => {
			// 			console.log(JSON.stringify(res));
			// 		}
			// 	}  
			// });  
			// this.amapPlugin = new amap.AMapWX({
			// 	//高德地图KEY，随时失效，请务必替换为自己的KEY，参考：http://ask.dcloud.net.cn/article/35070
			// 	key: 'b84f8d07ff6b8777fbecd997a9d94542'
			// });
			// //定位地址
			// this.amapPlugin.getRegeo({
			// 	success: data => {
			// 		this.city = data[0].regeocodeData.addressComponent.city.replace(/市/g, ''); //把"市"去掉
			// 		// #ifdef APP-PLUS
			// 		this.nVueTitle.postMessage({
			// 			type: 'location',
			// 			city: this.city
			// 		});
			// 		// #endif
			// 	}
			// });
			this.loadPromotion();
			this.Timer();
			this.gys()
		},
		methods: {
			// 获取服务供应商
			gys() {
				uni.getProvider({
					service: 'oauth',
					success: function (res) {
						console.log(res.provider)
						if (~res.provider.indexOf('qq')) {
							uni.login({
								provider: 'qq',
								success: function (loginRes) {
									console.log(JSON.stringify(loginRes));
								}
							});
						}
					}
				});
			},
			toSearch() {
				uni.showToast({
					title: '建议跳转到新页面做搜索功能'
				});
				// uni.navigateTo({
				// 	url:"/pages/home/home?id=1&name=uniapp"
				// });
			},
			loadPromotion() {
				let cutTime = new Date();
				let yy = cutTime.getFullYear(),
					mm = cutTime.getMonth() + 1,
					dd = cutTime.getDate();
				let tmpcountdown = yy + '/' + mm + '/' + dd + ' 23:00:00';
				// let tmpcountdown = '2023/2/7/ 09:44:00';  // 测试时间
				let tmpPromotion = [{
						title: '整点秒杀',
						ad: '整天秒杀专区',
						img: '/static/index/category/s1.jpg'
					},
					{
						title: '限时抢购',
						ad: '每天23点上线',
						img: '/static/index/category/s2.jpg',
						countdown: tmpcountdown
					} //countdown为目标时间，程序会获取当前时间倒数
				];
				tmpPromotion.forEach(e => {
					if (e.countdown) {
						let h = '00',
							m = '00',
							s = '00';
						let currentTime = new Date();
						let cutoffTime = new Date(tmpcountdown);
						if (!(currentTime >= cutoffTime)) {
							let countTime = parseInt(
								(cutoffTime.getTime() - currentTime.getTime()) / 1000
							);
							h = parseInt((countTime / (60 * 60)) % 24);
							m = parseInt((countTime / 60) % 60);
							s = parseInt(countTime % 60);
							h = h < 10 ? '0' + h : h;
							m = m < 10 ? '0' + m : m;
							s = s < 10 ? '0' + s : s;
						} else {
							// clearInterval(this.timeold)
						}
						e.countdown = {
							h: h,
							m: m,
							s: s
						};
					}
				})
				this.Promotion = tmpPromotion;
			},
			Timer() {
				this.timeold = setInterval(() => {
					this.loadPromotion()
				}, 1000);
			},
			swiperChange(e) {
				this.currentSwiper = e.detail.current;
			},
			nav_click(e) {
				uni.navigateTo({
					url: e.url + '?item=' + JSON.stringify(e)
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.nove_s {
		box-sizing: border-box;
		width: 100%;
		padding: 0 4%;
		// position: fixed;
		top: 0;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 10;
		background-color: white;
	}

	.addr {
		width: 120rpx;
		height: 60rpx;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		font-size: 28rpx;

		.icon {
			height: 60rpx;
			margin-right: 5rpx;
			display: flex;
			align-items: center;
			font-size: 42rpx;
			color: #ffc50a;
		}
	}

	.ip_con {
		display: flex;
		align-items: center;
		color: #ffc50a;
		margin-right: 5rpx;
		font-size: 40rpx;
	}

	.right_ho {
		width: 120rpx;
		height: 60rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icon {
		font-family: 'HM-font' !important;
		font-size: 31px;
		font-style: normal;
		color: #000000;
	}

	.input_box {
		width: 100%;
		height: 60rpx;
		background-color: #f5f5f5;
		border-radius: 30rpx;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 28rpx;
	}

	.swiper {
		box-sizing: border-box;
		width: 100%;
		padding: 0 4%;
		margin-top: 110rpx;
		height: 30vw;
		position: relative;

		swiper {
			width: 100%;
			height: 30vw;

			swiper-item {
				height: 30vw;
			}
		}
	}

	.swiper_img {
		width: 100%;
		height: 30vw;
	}

	.indicator {
		position: absolute;
		bottom: 10%;
		left: 10%;
		background-color: rgba(255, 255, 255, 0.4);
		width: 150rpx;
		height: 5rpx;
		border-radius: 3rpx;
		overflow: hidden;
		display: flex;
	}

	.dots {
		background-color: white;
		transition: all 0.3s ease-out;
		width: 0;
	}

	.on {
		width: (100%/3);
	}


	// 快速导航
	.category-list {
		box-sizing: border-box;
		width: 100%;
		padding: 0 4%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		border-bottom: solid 2rpx #f6f6f6;
		padding: 0 0 30rpx 0;
	}

	.category-list .category {
		width: 25%;
		margin-top: 50rpx;

		.list_img_box {
			display: flex;
			text-align: center;
			align-items: center;
			flex-direction: column;

			text {
				font-size: 24rpx;
			}
		}

	}

	.category-list .category .list_img {
		width: 9vw;
		height: 9vw;
	}


	// banner
	.banner {
		width: 92%;
		margin: 20rpx 4%;

		image {
			width: 100%;
			height: 20vw;
			border-radius: 10vw;
			box-shadow: 0rpx 5rpx 25rpx rgba(0, 0, 0, 0.3);
		}
	}

	.yhzq {
		width: 92%;
		margin: 0 4%;

		.title {
			text {
				width: 100%;
				font-size: 34rpx;
				font-weight: 600;
				margin-top: -10rpx;
			}
		}
	}

	.yhzq_list {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 15rpx;

		.yhzq_column {
			box-sizing: border-box;
			width: 48%;
			padding: 15rpx 3%;
			display: flex;
			flex-wrap: wrap;
			background-color: #ebf9f9;
			border-radius: 10rpx;

			.text_mor {
				width: 50%;
				height: 18.86vw;
				display: flex;
				flex-direction: column;
				font-size: 20rpx;
				color: #acb0b0;
				justify-content: space-between;
			}

			image {
				width: 18.86vw;
				height: 18.86vw;
				margin-top: 10rpx;
			}
		}
	}

	.countdown {
		display: flex;
		align-items: center;
		margin-left: 10rpx;

		view {
			height: 30rpx;
			background-color: #f06c7a;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			border-radius: 4rpx;
			margin: 0 4rpx;
			padding: 0 2rpx;
		}
	}

	.cnxh {
		width: 100%;
		margin-top: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.myiconfont {
			color: #f58337;
			font-size: 24rpx;
		}

		.cnxh_text {
			font-size: 30rpx;
			color: #f47825
		}
	}



	// 商品
	.shop_list_box {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 92%;
		padding: 0 4%;
		margin-top: 20rpx;

		.product {
			width: 48%;
			border-radius: 20rpx;
			background-color: #fff;
			margin: 0 0 15rpx 0;
			box-shadow: 0rpx 5rpx 25rpx rgba(0, 0, 0, 0.1);

			image {
				width: 100%;
				height: 44.2vw;
			}

			.product_name {
				width: 92%;
				margin: 10rpx 4%;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				text-align: justify;
				overflow: hidden;
				font-size: 30rpx;
			}

			.product_pice_box {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 92%;
				padding: 10rpx 4% 10rpx 4%;

				.product_pice {
					color: #e65339;
					font-size: 30rpx;
					font-weight: 600;
				}

				.product_pep {
					color: #807c87;
					font-size: 24rpx;
				}
			}
		}
	}
</style>
