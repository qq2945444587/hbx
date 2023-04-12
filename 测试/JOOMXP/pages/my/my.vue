<template>
	<page-meta
	  page-style="background: #f5f5f5"
	>
	</page-meta>
	<view class="content">
		<view class="navigation-bar-fixed" :style="{'padding-top':marginTop}">
			<view class="my_mian">
				<view class="head_sc_box">
					<view class="head_sc_left">
						<image :src="info.avatar" mode="scaleToFill"></image>
						<view class="head_name_id">
							<view><text>{{info.username}}</text><text class="myiconfont icon-weibiaoti2010104"></text>
							</view>
							<view class="head_left_id br">
								ID {{info.id}}
							</view>
						</view>
					</view>
					<view class="head_sc_right_list">
						<view class="myiconfont icon-erweima"></view>
						<view class="myiconfont icon-shezhi"></view>
						<view class="myiconfont icon-xiaoxi"></view>
					</view>
				</view>

				<!-- 我的nav -->
				<view class="my_conmp">
					<view class="my_nav_box" v-for="(item, index) in nav_list" :key="index">
						<view class="my_count">{{item.count}}</view>
						<view class="my_s_name">{{item.name}}</view>
					</view>
				</view>
				<!-- 我的 订单-->
				<view style="margin-top: 0;display: block;text-align: inherit;" class="my_conmp">
					<view class="my_order_title">
						<view style="display: flex;align-items: center;">
						 <text class="myiconfont icon-quanbudingdan"></text> <text>我的订单</text>	
						</view>
						<view style="color: #d2d2d2;" class="myiconfont icon-youjiantou"></view>
					</view>
					<view class="order_list">
						<view v-for="(item, index) in user_order_list" :key="index">
							<view class="myiconfont" :class="[item.classstyle]"></view>
							<view class="order_name">{{item.name}}</view>
						</view>
					</view>
				</view>
				
				<!-- 我的服务 -->
				<view style="margin-top: 0;display: block;text-align: inherit;" class="my_conmp">
					<view style="font-weight: bold;font-size: 34rpx;" class="my_order_title">
						我的服务
					</view>
					<view style="flex-wrap: wrap;justify-content: left;" class="order_list">
						<view class="my-fw_list" style="text-align: center;" v-for="(item, index) in user_fuw" :key="item.id" @tap="myfwButton(item)">
							<image class="my_fw_img" :src="item.images_url" mode=""></image>
							<view class="order_name">{{item.name}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<movable-area class="on_uyt"
			:style="{'height':'calc(100% - ' + movableareaH +'px)','top':movableareatopH + 'px'}">
			<movable-view class="movable_box" :x="x" :y="y" direction="all" inertia="true">
				<view class="myiconfont icon-kefu"></view>
			</movable-view>
		</movable-area>
	</view>
</template>

<script>
		    const app = getApp();
	import {removeCache, setCache, getCache} from "@/utils/cache.js"
	export default {
		data() {
			return {
				info: {},
				movableareaH: 0,
				movableareatopH:0,
				x: 0,
				y: 0,
				user_order_list: [
				    { name: "待付款", status: 1, count: 0, classstyle:'icon-daifukuan'},
				    { name: "待发货", status: 2, count: 0, classstyle:'icon-daifahuo'},
				    { name: "待收货", status: 3, count: 0, classstyle:'icon-daishouhuo'},
				    { name: "已完成", status: 4, count: 0, classstyle:'icon-daishouhuo'},
				    { name: "退款/售后", status: 101, count: 0, classstyle:'icon-tuihuo'}
				],
				user_fuw: [
				   
				],
				nav_list: [{
						name: "订单总数",
						count: 0
					},
					{
						name: "商品收藏",
						count: 0
					},
					{
						name: "我的足迹",
						count: 0
					},
					{
						name: "我的积分",
						count: 0
					}
				],
			};
		},
		computed: {
			marginTop() {
				const {
					platform,
					statusBarHeight
				} = uni.getSystemInfoSync()
				let height = statusBarHeight + 4
				if (platform.toLowerCase() == "android") {
					height += 4
				}
				return height + "px"
			}
		},
		onLoad() {
			this.movesH()
			this.x = uni.getWindowInfo().windowWidth
			this.y = (uni.getWindowInfo().screenHeight) / 2
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.usercenters()
			uni.hideLoading();
		},
		onShow() {
			this.pd()
			this.usercenters()
		},
		methods: {
			pd() {
				if (!getCache('info')) {
					uni.showModal({
						title: '温馨提示',
						content: '请先登录或注册',
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/login/login'
								});
								console.log('用户点击确定');
							} else if (res.cancel) {
								uni.reLaunch({
									url: '/pages/index/index'
								});
							}
						}
					});
				} else {
					this.info = getCache('info')
				}
			},
			async usercenters() {
				const data = await this.$api.usercenter()
				console.log(data)
				if (data.code == 0) {
					this.nav_list[0]['count'] = (data.data.user_order_count || 0) == 0 ? 0 : data.data
					.user_order_count;
					this.nav_list[1]['count'] = (data.user_goods_favor_count || 0) == 0 ? 0 : data.data
						.user_goods_favor_count;
					this.nav_list[2]['count'] = (data.data.user_goods_browse_count || 0) == 0 ? 0 : data.data
						.user_goods_browse_count;
					this.nav_list[3]['count'] = (data.data.integral || 0) == 0 ? 0 : data.data.integral;
					data.data.user_order_status.forEach((e) =>{
						this.user_order_list.forEach((l)=>{
							if (e.status == l.status) {
								l.count = e.count
							}
						})
					})
					if (data.data.cart_total.buy_number !== 0) {
						app.globalData.set_tab_bar_badge(String(data.data.cart_total.buy_number), 2);
					} else {
						app.globalData.removeTabBarBadges(2)
					}
					this.user_fuw = data.data.navigation.filter((item)=>!['1'].includes(item.id))
					this.user_fuw.splice(this.user_fuw.length,0,{images_url:'https://d1.shopxo.vip/static/app/yellow/common/cache-icon.png',name:'清除缓存',id:1213})
					
				} else {
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon: 'none'
					});
				}
				setTimeout(function() {
					uni.stopPullDownRefresh()
				}, 3000)

			},
			// 我的服务按钮操作
			myfwButton(val) {
				console.log(JSON.parse(JSON.stringify(val)))
				if (val.id==1213) {
					uni.showModal({
						title: '温馨提示',
						content: '确定要清除缓存，到时需要重新登录',
						success: function(res) {
							if (res.confirm) {
								removeCache('info')
								removeCache('shop_number')
								uni.showToast({
									title: '清除缓存成功',
									duration: 2000,
								});
								app.globalData.removeTabBarBadges(2)
								setTimeout(function() {
									uni.reLaunch({
										url: '/pages/index/index'
									});
								}, 2000)
								console.log('用户点击确定');
							} else if (res.cancel) {
								
							}
						}
					});
				}
			},
			movesH() {
				var that = this
				// #ifdef MP-WEIXIN
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				console.log(menuButtonInfo)
				that.movableareaH = menuButtonInfo.height + parseInt(that.marginTop.split('px')[0])
				that.movableareatopH = menuButtonInfo.height + parseInt(that.marginTop.split('px')[0])
				// #endif
				// #ifdef H5
				this.$nextTick(() => {
					uni.createSelectorQuery().in(that).select('.head_sc_box').boundingClientRect(data => {
						that.movableareaH = data.height + 50
						that.movableareatopH = data.height
					}).exec()
				})
				// #endif
				
				// #ifdef APP
				var top = 0
				uni.getSystemInfo({
					success: function (res) {
						console.log('设备', res)
						top = res.safeAreaInsets.top
					}
				});
				this.$nextTick(() => {
					uni.createSelectorQuery().in(that).select('.head_sc_box').boundingClientRect(data => {
						console.log(data)
						that.movableareaH = parseInt(data.height) + top
						that.movableareatopH = parseInt(data.height) + top
					}).exec()
				})
				// #endif
				
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '@/pages/my/my.css';
</style>
