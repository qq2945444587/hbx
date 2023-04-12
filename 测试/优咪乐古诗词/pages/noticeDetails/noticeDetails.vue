<template>
	<view class="container" style="padding:30upx;box-sizing: border-box;background-color: #ffffff;">
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		<rich-text :nodes="content"></rich-text>
		 <s-scroll-top :scrollTop="scrollTop1" :isIndex="true" :isShare="true"></s-scroll-top>
	</view>
</template>

<script>
	import { getNoticeDetails } from '../../services/index/api.js';
	import { setShareAppMessage } from '../../utils/uniApi.js';
	export default {
		data() {
			return {
				content:'',
				id:null,
				scrollTop1:0,
			}
		},
		onLoad(options) {
			this.id = options.id
			this.init()
		},
		methods: {
			async init(){
				const res = await getNoticeDetails({id:this.id});
				if(res.status === 20000){
					this.content = res.data.content
				}else{
					this.content = '';
				}
			},
		},
		onPageScroll(e) {
			this.scrollTop1 = e.scrollTop;
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
