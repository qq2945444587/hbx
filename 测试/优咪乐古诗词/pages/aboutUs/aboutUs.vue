<template>
	<view class="container" style="padding:30upx;box-sizing: border-box;background-color: #ffffff;">
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		<rich-text :nodes="content"></rich-text>
		<s-scroll-top :scrollTop="scrollTop" :isIndex="true" :isShare="true"></s-scroll-top>
	</view>
</template>

<script>
	import { getAboutUs } from '../../services/my/api.js';
	import { setShareAppMessage } from '../../utils/uniApi.js';
	export default {
		data() {
			return {
				content:'',
				scrollTop: 0,
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			async init(){
				const res = await getAboutUs();
				if(res.status === 20000){
					this.content = res.data.content
				}else{
					this.content = '';
				}
			},
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

</style>
