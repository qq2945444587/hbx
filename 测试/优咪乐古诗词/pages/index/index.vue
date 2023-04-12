<template>
	<view class="container">
		<s-navigation-bar backgroundColor="#ff6b00" splitLine @init="initNavigation" @change="opacityChange" :scrollTop="scrollTop" :isOpacity="false">
			<view class="s-content-box">
				<view class="s-avatar-box" >
					<image src="/static/logo.png" class="s-avatar"></image>
				</view>
				<view class="s-search-box" @click="search">
					<s-icon name="search-2" :size="18" color="#bfbfbf"></s-icon>
					<view class="s-search-text">搜索</view>
				</view>
				<!-- <view class="s-notice-box">
					<s-icon name="setup-fill" color="#fff" :size="26"></s-icon>
				</view> -->
			</view> 
		</s-navigation-bar>
		<view :style="{ height: height + 'px'}"></view>
		<!--banner-->
		<view class="s-banner-box" v-if="bannerList.length">
			<swiper
				:indicator-dots="true"
				:autoplay="true"
				:interval="5000"
				:duration="150"
				class="s-banner-swiper"
				:circular="true"
				previous-margin="60rpx"
				next-margin="60rpx"
				@change="change"
			>
				<swiper-item  v-for="(item,index) in bannerList" :key="item.id" @click="banerClick(item)" class="s-banner-item">
					<image
						:src="item.image_to.http_url"
						class="s-slide-image"
						:class="[current != index ? 's-banner-scale' : '']"
						mode="scaleToFill"
						lazy-load
					/>
				</swiper-item>
			</swiper>
		</view>
		<!--banner-->
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		<!--headlines-->
		<view class="s-rolling-news" v-if="noticeList.length">
			<s-icon name="news" :size="22" color="#555"></s-icon>
			<swiper :vertical="true" :autoplay="true" :circular="true" :interval="4000" class="s-swiper">
				<swiper-item v-for="(item, index) in noticeList" :key="index" @click="noticeClick(item)" class="s-swiper-item">
					<view class="s-news-item">{{ item.title }}</view>
				</swiper-item>
			</swiper>
		</view>
		<!--headlines-->
		<!--classify-->
		<view class="s-classify-box">
			<view class="s-classify-item" v-for="(item, index) in classify" :key="index" @click="classifyClick(index)">
				<image :src="item.img" class="s-classify-img" lazy-load/>
				<view class="s-classify-name">{{ item.name }}</view>
			</view>
		</view>
		<!--classify-->
		
		<view class="s-list-box" v-if="cardList.length">
			<s-list-view title="推荐名句" :size="34" backgroundColor="#ffffff">
				<s-list-cell v-for="(item, index) in cardList" :key="index" @click="cardClick(item.id)">
					<view class="s-list-item">
						<view class="s-item-quote">{{item.quote}}</view>
						<view class="s-item-info">
							{{item.author}}《{{item.title}}》
						</view>
					</view>
				</s-list-cell>	
			</s-list-view>	
		</view>	
		<view class="s-bottom"></view>
		<s-scroll-top :scrollTop="scrollTop" :isShare="true"></s-scroll-top>
	</view> 
</template>

<script>
	import { getPictureList,getNoticeList,getQuoteCardList } from '../../services/index/api.js';
	import { navigateTo,switchTab,setShareAppMessage } from '../../utils/uniApi.js';
	export default {
		data() {
			return {
				bannerList:[],
				noticeList:[],
				cardList:[],
				height:0,
				top: 0, //标题图标距离顶部距离
				opacity: 1,
				scrollTop: 0.5,
				current: 0,
				classify: [
					{
						img: '../../static/images/index/1.png',
						name: '古诗词'
					},
					{
						img: '../../static/images/index/2.png',
						name: '作者'
					},
					{
						img: '../../static/images/index/3.png',
						name: '名句'
					}
				],
			}
		},
		onLoad() {
			setTimeout(() => {
				uni.getSystemInfo({
					success: res => {
						let header = 102;
						let top = 30;
						//#ifdef H5
						top = 0;
						//#endif
						this.height = top + uni.upx2px(header);
					}
				});
			}, 50);
			this.init()
		},
		methods: {
			async init(){
				const bannerRes = await getPictureList({type:1});
				if(bannerRes.status === 20000){
					this.bannerList = bannerRes.data
				}else{
					this.bannerList = [];
				}
				const noticeRes = await getNoticeList({type:1});
				if(noticeRes.status === 20000){
					this.noticeList = noticeRes.data
				}else{
					this.noticeList = [];
				}
				const cardRes = await getQuoteCardList({type:1});
				if(cardRes.status === 20000){
					this.cardList = cardRes.data
				}else{
					this.cardList = [];
				}
			},
			noticeClick(item){
				if(item.open == 1){
					if(!item.url){
						return;
					}
					if(item.url == '../index/index' || item.url == '../my/my' || item.url == '../classification/classification'){
						switchTab(item.url);
					}else{
						navigateTo(item.url); 
					}
				}else if(item.open == 2){
					navigateTo('../webView/webView?url='+item.url);
				}else{
					navigateTo('../noticeDetails/noticeDetails?id='+item.id);
				}
			},
			banerClick(item){
				if(item.open == 1){
					if(!item.url){
						return;
					}
					if(item.url == '../index/index' || item.url == '../my/my' || item.url == '../classification/classification'){
						switchTab(item.url);
					}else{
						navigateTo(item.url); 
					}
				}else if(item.open == 2){
					navigateTo('../webView/webView?url='+item.url);
				}else{
					navigateTo('../pictureDetails/pictureDetails?id='+item.id);
				}
			},
			cardClick(id){
				navigateTo('../workDetails/workDetails?id='+id);
			},
			initNavigation(e) {
				this.opacity = e.opacity;
				this.top = e.top;
			},
			opacityChange(e) {
				this.opacity = e.opacity;
			},
			search(){
				navigateTo('../search/search');
			},
			change: function(e) {
				this.current = e.detail.current;
			},
			classifyClick(index){
				if(index == 0){
					navigateTo('../works/works');
				}else if(index == 1){
					navigateTo('../author/author');
				}else if(index == 2){
					navigateTo('../works/works?quote_status=1');
				}
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		//下拉刷新
		async onPullDownRefresh() {
			await this.init() 
			uni.stopPullDownRefresh()
		},
		onShareAppMessage(){
			return setShareAppMessage({})
		},
		onShareTimeline() {
		    return setShareAppMessage({})
		}
	}
</script>
<style>
	/* #ifdef MP-WEIXIN */
	.s-banner-swiper .wx-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}
	
	.s-banner-swiper .wx-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 16rpx;
		overflow: hidden;
	}
	
	.s-banner-swiper .wx-swiper-dot-active::before {
		background: #fff;
	}
	
	.s-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
		width: 16rpx;
	}
	
	/* #endif */
	
	/* #ifndef MP-WEIXIN */
	>>> .s-banner-swiper .uni-swiper-dot {
		width: 8rpx;
		height: 8rpx;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}
	
	>>> .s-banner-swiper .uni-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 16rpx;
		overflow: hidden;
	}
	
	>>> .s-banner-swiper .uni-swiper-dot-active::before {
		background: #fff;
	}
	
	>>> .s-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
		width: 16rpx;
	}
	
	/* #endif */
</style>
<style lang="scss" scoped>
@import 'index.scss';
</style>
