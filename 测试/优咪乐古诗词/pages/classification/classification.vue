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
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		<scroll-view
			scroll-y
			:scroll-with-animation="isTap"
			scroll-anchoring
			class="tab-view"
			:scroll-into-view="scrollView_leftId"
			:style="{ height: height + 'px', top: top + 'px' }"
		>
			<view
				:id="`left_${index}`"
				v-for="(item, index) in tabbar"
				:key="index"
				class="tab-bar-item"
				:class="[currentTab == index ? 'active' : '']"
				:data-current="index"
				@tap.stop="swichNav"
			>
				<text>{{ item.name }}</text>
			</view>
		</scroll-view>
		<scroll-view
			@scroll="scroll"
			scroll-anchoring
			scroll-y
			scroll-with-animation
			class="right-box"
			:scroll-into-view="scrollView_rightId"
			:style="{ height: height + 'px', top: top + 'px' }"
		>
			<!--内容部分 start 自定义可删除-->
			<block v-for="(item, index) in tabbar" :key="index">
				<s-linkage :distanceTop="distanceTop" :recalc="1" :scrollTop="scrollTop" :index="index" @linkage="linkage">
					<view class="page-view" :id="`right_${index}`">
						<view class="class-box">
							<view class="class-item">
								<view class="class-name">{{ item.name }}</view>
								<view class="g-container">
									<view class="g-box" v-for="(it,ind) in item.children" :index="ind" @tap.stop="sList(item,it)" :key="ind">
										<image v-if="it.image_to" :src="it.image_to.http_url" class="g-image" />
										<view class="g-title">{{it.name}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</s-linkage>
			</block>
			<!--内容部分 end 自定义可删除-->
		</scroll-view>
	</view>
</template>

<script>
	import { getLibraryData } from '../../services/library/api.js';
	import { navigateTo,setShareAppMessage } from '../../utils/uniApi.js';
export default {
	data() {
		return {
			top: 0, //标题图标距离顶部距离
			opacity: 1,
			scrollTop: 0.5,
			tabbar: [],
			height: 0, //scroll-view高度
			currentTab: 0, //预设当前项的值
			scrollView_leftId: 'left_0',
			scrollView_rightId: 'right_0',
			distanceTop: uni.upx2px(92),
			isScroll: true,
			isTap: true
		};
	},
	onLoad: function() {
		setTimeout(() => {
			uni.getSystemInfo({
				success: res => {
					let header = 102;
					let top = 40;
					//#ifdef H5
					top = 0;
					//#endif
					this.height = res.windowHeight - uni.upx2px(header);
					this.top = top + uni.upx2px(header);
				}
			});
		}, 50);
		this.init()
	},
	methods: {
		async init(){
			const res = await getLibraryData();
			if(res.status == 20000){
				this.tabbar = res.data
			}
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
		// 点击标题切换当前页时改变样式
		swichNav: function(e) {
			let cur = e.currentTarget.dataset.current;
			if (this.currentTab == cur) {
				return false;
			} else {
				this.currentTab = cur;
				this.checkCor();
			}
		},
		//判断当前滚动超过一屏时，设置tab标题滚动条。
		checkCor: function(isScroll) {
			if (!isScroll) {
				this.isScroll = false;
				this.isTap = true;
				if (this.currentTab > 6) {
					this.scrollView_leftId = `left_${this.currentTab - 2}`;
				} else {
					this.scrollView_leftId = `left_0`;
				}
				this.scrollView_rightId = `right_${this.currentTab}`;
			} else {
				this.scrollView_leftId = `left_${this.currentTab}`;
			}
		},
		sList(item,it) {
			navigateTo('../works/works?'+item.type_name + '=' + it.id);  
		},
		scroll(e) {
			//动画时长固定300ms
			if (!this.isScroll) {
				setTimeout(() => {
					this.isScroll = true;
				}, 150);
			} else {
				this.scrollTop = e.detail.scrollTop;
			}
		},
		linkage(e) {
			if (e.isLinkage && e.index != this.currentTab) {
				this.isTap = false;
				this.currentTab = e.index;
				this.checkCor(true);
			}
		}
	},
	//下拉刷新
	async onPullDownRefresh() {
		await this.init() 
		uni.stopPullDownRefresh()
	},
	onShareAppMessage(){
		return setShareAppMessage({
			title: "书库",
			path: "/pages/classification/classification",
		})
	},
	onShareTimeline() {
	    return setShareAppMessage({
	    	title: "书库",
	    	path: "/pages/classification/classification",
	    })
	}
};
</script>
<style lang="scss" scoped>
@import 'classification.scss';
</style>
