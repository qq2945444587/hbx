<template>
	<!-- <page-meta
	  page-style="background: #f5f5f5"
	>
	</page-meta> -->
<page-meta :page-style="'overflow:'+(shadeShow?'hidden':'visible')"></page-meta>
	<view class="content" v-if="goods!== null">
		<view class="back_gr" choose_show :style="{'top':H_jn + 'px'}">
			<view @tap="backto" class="myiconfont icon-fanhui1"></view>
			<view style="margin-left: 20rpx;" class="myiconfont icon-liebiao"></view>
		</view>
		<view class="tabbers" :style="{'padding-top':marginTop,'opacity':opacitys}">
			<view class="tabbers_qh">
				<view class="tabberscontent" @tap="tabqih(item, index)" :class="n==index?'tabbers_active':''" v-for="(item, index) in titleList" :key="index">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="navigation-bar-fixed" :style="{'padding-top':marginTop}">
			<view class="swiper_bg">
				<view v-if="!puyvideoShow && goods.goods.video" class="puyvideo"  @tap="puyvideoShow = !puyvideoShow">
					<view class="myiconfont icon-bofang">
						
					</view>
				</view>
				<view v-if="puyvideoShow && goods.goods.video" class="myiconfont icon-quxiao" @tap="puyvideoShow = !puyvideoShow">
					
				</view>
				<view v-if="goods.goods.video && puyvideoShow" class="videos">
					  <video id="myVideo" autoplay="true" :src="goods.goods.video" controls></video>
				</view>
				<swiper class="gong_swiper"  circular :indicator-dots="true" :autoplay="true"
					:interval="3000" :duration="1000">
					<swiper-item class="gongg_list" v-for="(g,index) in goods.goods.photo" :key="index">
						<image class="gogs_photo" :src="g.images" mode="scaleToFill"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="pirces_box margin_bottom">
				<view class="price">
					<text class="hd">活动价</text>
					<text class="goodsprice">￥{{goods.goods.min_price}}</text>
				</view>
				<view class="original_price">￥{{goods.goods.original_price}}</view>
			</view>
			
			<view class="min-bigbox">
				<view class="goods_title_box margin_bottom border-radius-li">
				   <view class="goods_title_name_box pading-main-all">
					   <view class="goods_title_n">
							<view>{{goods.goods.title}}</view>
							<view @tap="shadeem(true, '分享')" class="myiconfont icon-fenxiang1"><text style="font-size: 28rpx;">分享</text></view>
					   </view>
					   <view class="simple_desc">{{goods.goods.simple_desc}}</view>
				   </view>
					<view class="inventory_box pading-main-all">
						<view>
							<text class="inventory_name">库存</text>
							<text class="inventory_number">{{goods.goods.inventory}}</text>
						</view>
						<view>
							<text class="inventory_name">热度</text>
							<text class="inventory_number">{{goods.goods.access_count}}</text>
						</view>
						<view>
							<text class="inventory_name">销量</text>
							<text class="inventory_number">{{goods.goods.sales_count}}</text>
						</view>
					</view>
				</view>
			    <view class="wxts_box margin_bottom border-radius-li">
					<view class="notice-content">
						<view><text style="vertical-align: middle;" class="myiconfont icon-xiaoxi"></text><text style="font-weight: bold;vertical-align: middle;">{{goods.plugins_intellectstools_data.base_bottom.title}}</text></view>
						<view style="margin-top: 10rpx;">{{goods.plugins_intellectstools_data.base_bottom.msg}}</view>
					</view>
				</view>
				<!-- 起批量 -->
				<view class="qpl margin_bottom border-radius-li" v-if="goods.plugins_wholesale_data">
					<view>{{goods.plugins_wholesale_data.title}}</view>
					<view class="qpl_box">
						<view @tap="shadeem(true, '起批量')" class="qpl_list" v-for="(item, index) in goods.plugins_wholesale_data.rules" :key="index">
							{{item.msg}}
						</view>
					</view>
				</view>
				 <!-- 优惠劵 -->
				<view class="qpl margin_bottom border-radius-li">
					<view>优惠券</view>
					<view class="qpl_box">
						<view @tap="shadeem(true, '优惠券')" :style="{'border':'none','background':item.bg_color_value,'color':'white'}" class="qpl_list" v-for="(item, index) in goods.plugins_coupon_data.data" :key="index">
							{{item.desc}}
						</view>
					</view>
				</view>
				<view v-if="goods.goods.specifications.choose.length !== 0" @tap="chgoup(true, 'buy')" class="qpl margin_bottom border-radius-li">
					<view>规格</view>
					<view class="qpl_box">
						{{sizes}}
						<!-- <view :style="{'border':'none','background':item.bg_color_value,'color':'white'}" class="qpl_list" v-for="(item, index) in goods.plugins_coupon_data.data" :key="index">
							{{item.desc}}
						</view> -->
					</view>
				</view>
				<view v-if="goods.goods.plugins_view_icon_data.length !== 0" class="tj_my_box margin_bottom">
					<text v-for="(item, index) in goods.goods.plugins_view_icon_data" :key="index" :style="{'color':item.color,'border-color':item.br_color}">{{item.name}}</text>
				</view>
				<view v-if="goods.goods.plugins_view_panel_data.length !== 0" class="txde margin_bottom border-radius-li">
					<view v-for="(item, index) in goods.goods.plugins_view_panel_data" :key="index">
						{{item}}
					</view>
				</view>
				<!-- 相关门店 -->
				<view class="xgmd margin_bottom border-radius-li">
					<view class="comm_style_title">
						<view>相关门店</view>
						<view>更多</view>
					</view>
					<indexNewshop v-if="goods.plugins_realstore_data.length !== 0" :datalist="goods.plugins_realstore_data"></indexNewshop>
				
					<view class="xgmd_list margin_bottom border-radius-li" v-if="goods.plugins_shop_data">
						<view class="xgmd_list_title">
							<image :src="goods.plugins_shop_data.logo" mode="scaleToFill"></image>
							<view class="xgmd_list_title_right">
								<view><text v-show="goods.plugins_shop_data.alias"></text><text>{{goods.plugins_shop_data.name}}</text></view>
								<view>
								   <text style="font-size: 26rpx;color: #666;" class="No_two_hang" decode="true">{{goods.plugins_shop_data.describe}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			    <!-- 商品评价 -->
				<view class="pj margin_bottom">
					<view class="comm_style_title">
						<view>商品评价<text style="font-weight: initial;font-size: 28rpx;">({{goods.goods.comments_count}})</text></view>
						<view>好评率{{goods.goods.comments_score.rate}}%</view>
					</view>
					
					<view class="border-radius-li comments_data bgcolor pading-main-all">
						<view v-for="(item, index) in goods.goods.comments_data" :key="index" class="goods-comment-list">
							 <view class="comments_data_top_box">
								 <view class="comments_data_user">
									  <image :src="item.user.avatar" mode="scaleToFill"></image>
									  <view style="margin-left: 18rpx;">{{item.user.user_name_view}}</view>
									  <uni-rate style="margin-left: 18rpx;" :value="item.rating" :readonly="true" :is-fill="false" :size="14" />	 
								 </view>
							     <view style="color: #9A9A9A">{{item.add_time_date}}</view>
							 </view>
							 <view class="comments_data_user_content">{{item.content}}</view>
							 <view v-if="item.images.length !== 0" class="comments_data_user_content">
								 <image class="comments_data_user_img" @tap="pjButon(item.images, l)" v-for="(k, l) in item.images" :key="l" :src="k" mode="widthFix"></image>
							 </view>
						</view>
						<view style="text-align: center;">查看更多评价>></view>
					</view>
				</view>
				<!-- 购物流程 -->
				<view class="buy_liu margin_bottom border-radius-li pading-main-all">
					<view class="ntellectstools_data_title">{{goods.plugins_intellectstools_data.content_top.title}}</view>
					<view class="ntellectstools_data" v-for="(item, index) in goods.plugins_intellectstools_data.content_top.msg" :key="index">
						{{item}}
					</view>
				</view>
				<!-- 商品参数 -->
				<view v-if="goods.goods.parameters.detail.length !== 0">
					<view class="comm_style_title">
						<view>商品参数</view>
					</view>
					<view class="cs_big_box margin_bottom border-radius-li pading-main-all bg-white">
						<view class="cs_box" v-for="(item, index) in goods.goods.parameters.detail" :key="index">
							<text>{{item.name}}</text>:<text>{{item.value}}</text>
						</view>
					</view>
				</view>
				<!-- 商品详情 -->
			    <view class="detailLi">
					<view class="comm_style_title">
						<view>商品详情</view>
					</view>
					<view class="detail_img margin_bottom border-radius-li pading-main-all bg-white">
						<mp-html v-if="goods.goods.content_web" :content="goods.goods.content_web" />
						<block v-else>
						    <view class="cr-grey tc padding-top-xxl padding-bottom-xxl">暂无详情数据</view>
						</block>
					</view>
				</view>
			
			</view>
			<view class="detail_bottom">
				<view class="detail_left_box">
					<view @tap="shop_detail" class="myiconfont icon-dianpu"><text>店铺</text></view>
					<view class="myiconfont icon-kefu2"><text>客服</text></view>
					<view @tap="toCart" style="position: relative;" class="myiconfont icon-gouwugouwuchedinggou"><text>购物车</text><view v-if="goods.cart_total.buy_number" class="cart_total">{{goods.cart_total.buy_number}}</view></view> 
					<!-- 购物车数量和  goods.cart_total.buy_number -->
					<view @tap="favorB" :style="{'color':goods.goods.is_favor == 0?'#888':'#f7cc59'}" class="myiconfont icon-xingxing1"><text>{{goods.goods.is_favor == 0?'收藏':'已收藏'}}</text></view>
				</view>
				<view class="detail_right_box">
					<button class="" @tap="chgoup(true, item.type)" :style="{'background-color':item.type == 'cart'?'#795548':'#f6c133'}" v-for="(item, index) in goods.buy_button.data" :key="index">
						{{item.name}}
					</button>
				</view>
			</view>
			
		</view>
		<popClassify @buyorg="buyorg" :types="types" :goodclos="goodclos" @tc="tc"  @chgoup="chgoup" :datalist="goods.goods"></popClassify>
		<shadeCon :type="zztype" :datalist="goods" :shadeShow="shadeShow" @shadeem='shadeem'></shadeCon>
		
		<view v-if="plugins_salerecords_data" class="buy_ath_box">
			<image :src="plugins_salerecords_data.images" mode="scaleToFill"></image>
			<text>{{plugins_salerecords_data.tips}}</text>
		</view>
		
	</view>
</template>

<script>
	const app = getApp();
	import {removeCache, setCache, getCache} from "@/utils/cache.js"
	import indexNewshop from "../../components/index-newshop/index-newshop";
	import popClassify from "../../components/pop-classify/pop-classify";
	import shadeCon from "../../components/shade-con/shade-con";
	export default {
		data() {
			return {
				goods_id:undefined,
				H_jn:0,
				goods:null,
				puyvideoShow:false,
				opacitys:0,
				n:0,
				titleList:[
					{name:'商品', selector:'.swiper_bg'},
					{name:'评价', selector:'.pj'},
					{name:'详情', selector:'.detailLi'}
				],
				goodclos: false,
				topsH:0,
				topsHs:0,
				sizes: '',
				types:'',
				shadeShow:false,
				zztype: '',
				pluginstimer: null,
				plugins_salerecords_data:null
			};
		},
		components:{
			indexNewshop,
			popClassify,
			shadeCon
		},
		computed: {
			tops() {
				var top = 0
				uni.getSystemInfo({
					success: function (res) {
						console.log(res)
						top = res.safeAreaInsets.top + 14
					}
				});
				// 胶囊高度 32px 下边框6px height 状态栏高度
				return top + "px"
			},
			marginTop() {
				const {
					platform,
					statusBarHeight
				} = uni.getSystemInfoSync()
				// #ifndef H5
				let height = statusBarHeight + 4
				if (platform.toLowerCase() == "android") {
					height += 4
				}
				// #endif
				// #ifdef H5
				let height = statusBarHeight
				console.log(height)
				// #endif
				console.log(height)
				return height + "px"
			}
		},
		onLoad(option) {
			this.inptW()
			this.goods_id = option.goods_id || option.id
			this.details(this.goods_id)
		},
		// 下拉刷新
		onPullDownRefresh() {
			uni.hideLoading();
			this.details(this.goods_id)
		},
		onShow() {
			
		},
		// 滚动监听
		onPageScroll(e) {
			if (e.scrollTop == 0) {
				this.opacitys = 0
			} else if ( e.scrollTop > 20 && e.scrollTop < 100) {
				this.opacitys = 0.4
			} else if (e.scrollTop > 100 && e.scrollTop < 200) {
				this.opacitys = 0.8
			} else if (e.scrollTop > 200) {
				this.opacitys = 1
			}
		},
		onHide() {
			removeCache('specifications')
		},
		onUnload: function() {
			removeCache('specifications')
		    clearInterval(this.pluginstimer);
		},
		methods: {
			plugins_tips() {						
				 clearInterval(this.pluginstimer);
				var list = this.goods.plugins_salerecords_data.data
				var index = 0;
				var count = list.length;
				var that = this
				var timer = setInterval(function() {
				    that.plugins_salerecords_data = list[index]
				    setTimeout(function() {
				            that.plugins_salerecords_data = null
				    }, 5000);
				    index++;
				    if (index >= count) {
				        index = 0;
				    }
				}, 10000);
				this.pluginstimer = timer
			},
			shadeem(val, type) {
				this.shadeShow = val
				if (type) {
					this.zztype = type
				}
			},
			// 返回
			backto() {
                let canNavBack = getCurrentPages()
				if( canNavBack && canNavBack.length>1) {  
				    uni.navigateBack() 
				} else {  
				    history.back();
				}
			},
			moveHandle(e) {
				// this.$set(event, 'isTrusted', false)
			},
			tc(val) {
				this.sizes = val.join('/')
			},
			// 选择完确认
			buyorg(val) {
				if (this.types == 'cart') {
					this.cartSaves(val)
					this.goodclos = false
				} else {
					uni.navigateTo({
					    url: '/pages/buy/buy?data=' + encodeURIComponent(JSON.stringify(val))
					});
				}
			},
			chgoup(val, type) {
				if (getCache('specifications')) {
				   this.goods.goods.specifications.choose = getCache('specifications')	
				}
				const sizes = []
				this.goods.goods.specifications.choose.forEach((e) => {
					e.value.forEach((l) => {
						if (l.is_active) {
							sizes.push(l.name)
						}
					})
				})
				this.sizes = sizes.join('/')
				this.goods.goods.specifications.choose.forEach((e, index) => {
					e.value.forEach((k, kindex) => {
					  if (e.value.findIndex(item => item.is_active == 'is_active') == -1) {
						  if (index == 0) {
						  	this.$set(k, 'is_active', '')
						  	this.$set(k, 'is_dont', '')
						  	this.$set(k, 'is_disabled', '')
						  } else {
						  	this.$set(k, 'is_active', '')
						  	this.$set(k, 'is_dont', 'is_dont')
						  	this.$set(k, 'is_disabled', '')
						  }
					  }
					})
				})
				if (type !== undefined) {
					this.types = type
				}
				this.goodclos = val
			},
			toCart() {
				uni.navigateTo({
					url: '/pages/cart-page/cart-page'
				});
			},
			// 顶部切换
			tabqih(val, index) {
				this.n = index
				this.$nextTick(()=>{
					uni.createSelectorQuery().select(val.selector).boundingClientRect(data=>{//目标位置的节点：类或者id
						  uni.createSelectorQuery().select('.content').boundingClientRect(res=>{//最外层盒子的节点：类或者id
								uni.pageScrollTo({
									  duration:0,//过渡时间
									// #ifdef H5
									  scrollTop:data.top - res.top - 10,//到达距离顶部的top值
									  // #endif
									  
									 // #ifndef H5
									    scrollTop:data.top - res.top - (parseInt(this.marginTop.split('px')[0])) - 10
									  // #endif
								})
						  }).exec()
					}).exec();
				})
			},
			// 查看评论反馈图片
			pjButon(val, index) {
				uni.previewImage({
					urls:val,
					current:index,
					indicator:'number'
				});
			},
			// 打电话
			call_phone(e){
				uni.makePhoneCall({
					phoneNumber: e
				});
			},
			// 搜索宽度
			inptW() {
				var top = 0
				uni.getSystemInfo({
					success: function (res) {
						top = res.safeAreaInsets.top
					}
				});
				// #ifdef MP-WEIXIN
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.H_jn = (parseInt(this.marginTop.split('px')[0]))
				// #endif
				// #ifdef H5
					this.H_jn = 6
				// #endif
				// #ifdef APP
				console.log(top)
					this.H_jn = top + 6
				// #endif
				
			},
			// 店铺
			shop_detail() {
				// uni.navigateTo({
				// 	url: this.goods.plugins_shop_data.url
				// });
			},
			async cartSaves(param) {
				const data = await this.$api.cartSave(param)
			   if (data.code == 0) {
				   	this.details(this.goods_id)	
			   }
			   uni.showToast({
			   	title: data.msg,
			   	duration: 2000,
			   	icon:'success'
			   }); 
			},
			// 收藏
			async favorB() {
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
								
							}
						}
					});
					return
				}
			    const param = {
					id:this.goods_id
				}
			    const data = await this.$api.favor(param)
				if (data.code == 0) {
					this.details(this.goods_id)
					uni.showToast({
						title: data.msg,
						duration: 2000,
					});
				}
			},
			// 商品详情
			async details(val) {
				const param = {
					goods_id: val,
				}
				const data = await this.$api.detail(param)
				this.goods = data.data
				if (this.goods.goods.specifications.length !== 0) {
					this.goods.goods.specifications.choose.forEach((e) =>{
						e.value.forEach((k)=>{
							k.type = e.name
						})
					})	
				}
			   this.plugins_tips()
				uni.stopPullDownRefresh()
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '@/pages/goods-detail/goods-detail.css';
</style>
