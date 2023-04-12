<template>
	<page-meta
	  page-style="background: #f5f5f5"
	>
	</page-meta>
	<view class="content">
		<view v-if="dataList.length!==0">
			<view class="bg_whisu">
				<navigation-custom :swiperList="swiperList" :config="config" :PageScroll="PageScroll"
					:scrollTop="scrollTop" @movesH="movesH" :types="types" :scrollMaxHeight="scrollMaxHeight" />
			</view>
				<movable-area class="on_uyt" :style="{'height':'calc(100% - ' + movableareaH +'px)','top':movableareatopH + 'px'}">
					<movable-view class="movable_box" :x="x" :y="y" direction="all" inertia="true">
						<view class="myiconfont icon-kefu"></view>
					</movable-view>
				</movable-area>
			<!-- 内容 -->
			<view class="min_content">
				<!-- 导航nav -->
				<view class="nav">
					<view class="nav_list" v-for="(navs, index) in navList" :key="navs.id">
						<view class="nav_icon" :style="'background-color:' + (navs.bg_color || '#fff')">
							<image :src="navs.images_url" mode=""></image>
						</view>
						<text class="nav_text">{{navs.name}}</text>
					</view>
				</view>
				<!-- 内容公告 -->
				<view class="gonggao_box">
					<swiper class="gong_swiper" vertical="true" circular :indicator-dots="false" :autoplay="true"
						:interval="3000" :duration="1000">
						<swiper-item class="gongg_list" v-for="(g,index) in gonggList" :key="index">
							<view style="font-size: 38rpx;" class="myiconfont icon-laba"></view>
							<view class="" style="margin-left: 20rpx;">{{g.title}}</view>
						</swiper-item>
					</swiper>
				</view>

				<!-- 最新资讯 -->
				<view class="zx_box">
					<image src="https://d1.shopxo.vip/static/app/yellow/home/new-icon.png" mode=""></image>
					<view class="arile_box">
						<swiper class="gong_swiper" vertical="true" circular :indicator-dots="false" :autoplay="true"
							:interval="3000" :duration="1000">
							<swiper-item class="gongg_list" style="color: #666;" v-for="(g,index) in article_list"
								:key="index">
								<view class="" style="margin-left: 20rpx;font-size: 30rpx;">
									<text style="color: black;">[{{g.article_category_name}}]</text>
									<text :style="{ color:g.title_color, marginLeft: '20rpx'}">{{g.title}}</text>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>

				<!-- 广告 -->
				<view class="plug">
					<view @tap="goodNav(item)" v-for="(item, index) in pluginsList" :key="item.id">
						<image :src="item.images" mode="scaleToFill"></image>
					</view>
				</view>
				<!-- 最新门店 -->
				<view class="new_shop_d" v-if="realstorelist !== null">
					<view class="public_class">
						<view class="public_title">最新门店</view>
						<view class="public_right">更多</view>
					</view>
					<indexNewshop :datalist="realstorelist.data"></indexNewshop>
				</view>
				<!-- 最新商家 -->
				<view class="new" v-if="plug_shop_list !== null">
					<view class="public_class">
						<view class="public_title">最新商家</view>
						<view class="public_right">更多</view>
					</view>

					<view class="new_shop_c">
						<view class="new_shop_list" v-for="(item,index) in plug_shop_list.data" :key="item.id">
							<view class="new_shop_top">
								<image class="new_shop_Img" :src="item.logo" mode=""></image>
								<view style="margin-left: 20rpx;">
									<view><text style="color: #6fc4fc;" class="myiconfont icon-fankuibaozhang"></text>
										<text class="bq_font">{{item.name}}</text>
									</view>
									<view class="yy_time">
										<text decode="true">{{item.describe}}</text>

									</view>
								</view>

							</view>

						</view>
					</view>

				</view>
				<!-- 新品推荐 -->
				<view class="new_tj-box" v-if="activityList !== null">
					<index-more-title v-if="acr" :datalist="activityList.data[0]" :acr="acr"></index-more-title>
					<index-shop @goodNav='goodNav' :datalist="activityList.goods_list"></index-shop>
				</view>	
				<!-- 双十一特惠 -->
				<view class="new_tj-box" v-if="elevenList !== null">
					<index-more-title :datalist="elevenList" :acr="elevenList.vice_title"></index-more-title>
					<view class="eleven_list_box">
						<view class="eleven_list" @tap="goodNav(item)" v-for="(item, index) in elevenList.goods_list" :key="item.id">
							<view class="type_zt">
								<image :src="item.icon" mode="scaleToFill"></image>
							</view>
							<image class="elevenImg" :src="item.images" mode="scaleToFill"></image>
							<view class="elenen_ms">
								<view>{{item.title}}</view>
								<text>{{item.price}}</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 猜你喜欢 -->
				<view class="guess_you_love" v-if="LoveList !== null">
					<index-more-title :datalist="LoveList" :acr="LoveList.vice_title"></index-more-title>
					<index-cnxh :datalist="LoveList.goods_list" :autop="false"></index-cnxh>
				</view>
				<!-- 数码办公 -->
				<view class="new_tj-box">
					<index-more-title :datalist="smbg" :acr="smbg.describe"></index-more-title>
					<index-shop :datalist="smbg.goods"></index-shop>
				</view>
				
				<!-- 服饰鞋包 -->
				<view class="new_tj-box">
					<index-more-title :datalist="shoe_bao" :acr="shoe_bao.describe"></index-more-title>
					<index-shop :datalist="shoe_bao.goods"></index-shop>
				</view>
				
				<!-- 热门博文 -->
				<view class="hot_bw" v-if="plugins_blog_data !== null">
				    <index-more-title :datalist="plugins_blog_data" :colors="colors" :acr="plugins_blog_data.vice_title"></index-more-title>
					<view class="hot_bw_swiper">
						<swiper class="swiper"  display-multiple-items="3" :circular="false" :indicator-dots="false" :autoplay="true" interval="5000" duration="500">
							<swiper-item v-for="(item, index) in plugins_blog_data.blog_list" :key="item.id">
								<view class="hot_bw_contImg">
									<image :src="item.cover" mode="scaleToFill"></image>
									<view class="hot_bw_title">
										{{item.title}}
									</view>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
				
				<!-- 最新博文 -->
				<view class="new_bw" v-if="new_bw_list !== null">
					<index-more-title :datalist="new_bw_list" :acr="new_bw_list.vice_title"></index-more-title>
					<view class="new_bw_box">
						<view v-for="(item, index) in new_bw_list.blog_list" :key="item.id" class="new_bw_list bg-white overh border-radius-li">
							<image class="new_bw_Img" :src="item.cover" mode=""></image>
							<view class="new_bw_content">
								<view class="new_bw_title No_one_hang">{{item.title}}</view>
								<view class="new_bw_timr">{{item.add_time_date_cn}}</view>
								<view class="new_bw_con No_two_hang">{{item.describe}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- 最新购买 -->
				
				<view class="new_buy">
					<view class="public_class">
						<view class="public_title">最新购买<text style="color: #888 ;font-size: 28rpx;margin-left: 20rpx;font-weight:initial;">看看大家都买了那些东西</text></view>
					</view>
				
				    <view class="new_buy_swiper bg-white">
				    	<swiper class="swiper"  display-multiple-items="6" :circular="false" vertical="true" :indicator-dots="false" :autoplay="true" interval="5000" duration="500">
				    		<swiper-item v-for="(item, index) in salerecordsList" :key="item.id">
				    		    <view class="new_buy_list">
				    		    	<view class="new_buy_box">
				    					<image :src="item.user.avatar" mode="scaleToFill"></image>
				    					<text>{{item.user.user_name_view}}</text>
				    				</view>
				    				<view class="new_right_box">
				    					<image :src="item.images" mode="scaleToFill"></image>
				    					<text class="new_title">{{item.title}}</text>
				    					<text class="new_time">{{item.add_time}}</text>
				    				</view>
				    		    </view>
				    		</swiper-item>
				    	</swiper>
				    </view>
				</view>
			</view>
			
			<!-- 结束 -->
			<view class="main_end">
				我已经到底部了
			</view>
			
			<view class="main_end">
				我的JOOM结束
			</view>
		</view>
	</view>
</template>

<script>
		const app = getApp();
	import indexMoreTitle from "../../components/index-more-title/index-more-title";
	import indexShop from "../../components/index-shop/index-shop";
	import indexCnxh from "../../components/index-cnxh/index-cnxh.vue";
	import indexNewshop from "../../components/index-newshop/index-newshop";
	export default {
		data() {
			return {
				config: {
					title: "", //title
					bgcolor: "", //背景颜色
					fontcolor: "#333333", //文字颜色，默认白色
					type: 2, //type 1，3胶囊 2，4无胶囊模式
					transparent: false, //是否背景透明 默认白色
					linear: false, //是为开启下滑渐变
					share: false, //是否将主页按钮显示为分享按钮
					show_sc: false, // 是否显示搜索栏(首页导航栏)
					show_no: false, // 真的搜索功能
					xuyao: true,
					// menuIcon:"../static/icon/back_.png", 当type为3或者4的时候左边的icon文件位置，注意位置与当前页面不一样
					// menuText:"返回", 当type为3或4的时候icon右边的文字
				},
				 x: 0,
				 y: 0,
				 topH:0,
				PageScroll: {},
				scrollTop: 0, // 当linear为true的时候需要通过onpagescroll传递参数
				scrollMaxHeight: 200, //滑动的高度限制，超过这个高度即背景全部显示
				swiperList: [],
				dataList: [],
				navList: [],
				article_list: [],
				gonggList: [{
						title: '这个是公告的第一个'
					},
					{
						title: '这个是公告的第二个'
					}
				],
				pluginsList: [],
				plug_shop_list: [],
				realstorelist: [],
				activityList:{},
				labelList:[],
				LoveList:{},
				elevenList:{},
				shoe_bao:{},
				acr:'',
				smbg:{},
				movableareaH:0,
				movableareatopH:0,
				colors:'rgb(51, 51, 51)',
				plugins_blog_data:{},
				new_bw_list:{},
				salerecordsList:[],
				types:'index'
			}
		},
		computed:{
		},
		components:{
			indexMoreTitle,
			indexShop,
			indexCnxh,
			indexNewshop
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.getDayRecommendData()
			uni.hideLoading();
		},
		// 滚动监听
		onPageScroll(e) {
			this.PageScroll = e
		},
		onLoad() {
			this.getDayRecommendData()
			this.x = uni.getWindowInfo().windowWidth
			this.y = (uni.getWindowInfo().screenHeight) / 2
		},
		onShow(){
			// this.getDayRecommendData()
		},
		methods: {
			movesH(e, h) {
			
				// #ifdef MP-WEIXIN
					console.log('出发了')
				this.movableareaH = e.height + parseInt(h.split('px')[0])
				this.movableareatopH = e.height + parseInt(h.split('px')[0])
								console.log(e,h)
				// #endif
				// #ifdef H5
					console.log('出发了')
				this.movableareaH = e.height + 50
				this.movableareatopH = e.height
								console.log(e,h)
			    // #endif
				// #ifdef APP
				var top = 0
				uni.getSystemInfo({
					success: function (res) {
						top = res.safeAreaInsets.top
					}
				});
				console.log(e,h)
				this.movableareaH = parseInt(e.height) + top
				this.movableareatopH = parseInt(e.height) + top
				// #endif
			},
			// 打电话
			call_phone(e){
				uni.makePhoneCall({
					phoneNumber: e
				});
			},
			iconList() {
				if (this.activityList !== null) {
					this.activityList.goods_list.forEach((e)=>{
						this.labelList.forEach((item)=>{
							if (item.goods_ids.indexOf(e.id)!== -1) {
								e.icon = item.icon
							}
						})
					})
				}
				if (this.elevenList !== null) {
					this.elevenList.goods_list.forEach((e)=>{
						this.labelList.forEach((item)=>{
							if (item.goods_ids.indexOf(e.id)!== -1) {
								e.icon = item.icon
							}
						})
					})
				}
				if (this.smbg !== null) {
					this.smbg.goods.forEach((e)=>{
						this.labelList.forEach((item)=>{
							if (item.goods_ids.indexOf(e.id)!== -1) {
								e.icon = item.icon
							}
						})
					})
				}
				if (this.LoveList !== null) {
					this.LoveList.goods_list.forEach((e)=>{
						this.labelList.forEach((item)=>{
							if (item.goods_ids.indexOf(e.id)!== -1) {
								e.icon = item.icon
							}
						})
					})
				}
				if (this.shoe_bao !== null) {
					this.shoe_bao.goods.forEach((e)=>{
						this.labelList.forEach((item)=>{
							if (item.goods_ids.indexOf(e.id)!== -1) {
								e.icon = item.icon
							}
						})
					})
				}
			},
			goodNav(val) {
				console.log('触发', val)
				uni.navigateTo({
					url: val.url || val.goods_url
				});
			},
			async getDayRecommendData() {
				const data = await this.$api.getRecommendList();
				this.dataList = data.data
				this.swiperList = data.data.banner_list || [] // banner
				this.navList = data.data.navigation // 导航栏
				this.article_list = data.data.article_list // 最新资讯文章
				this.pluginsList = data.data.plugins_homemiddleadv_data // 广告推广
				this.plug_shop_list = data.data.plugins_shop_data || null // 最新商家
				this.realstorelist = data.data.plugins_realstore_data || null // 最新门店
				this.activityList = data.data.plugins_activity_data || null // 新品推荐
				this.LoveList = data.data.plugins_activity_data || null // 猜你喜欢
				this.elevenList = data.data.plugins_activity_data || null // 双十一特惠
				if (data.data.plugins_activity_data) {
					this.acr = data.data.plugins_activity_data.data[0].describe.slice([...data.data.plugins_activity_data.data[0].title].length + 1) // 新品推荐小字描述
				}
				this.labelList = data.data.plugins_label_data.data // 判断商品是否为新品或者vip
				this.smbg = data.data.data_list[0]// 数码办公
				this.shoe_bao = data.data.data_list[1] //服饰
				this.plugins_blog_data = data.data.plugins_blog_data || null // 热门博文
				this.new_bw_list = data.data.plugins_blog_data || null // 最新博文
				this.salerecordsList = data.data.plugins_salerecords_data.data
				console.log(JSON.parse(JSON.stringify(this.pluginsList)))
				this.iconList()
				uni.stopPullDownRefresh()
				// uni.hideLoading();
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '@/pages/index/index.css';
</style>
