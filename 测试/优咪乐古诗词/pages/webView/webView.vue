<template>
	<view class="container">
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		<web-view :webview-styles="webviewStyles" :src="url"></web-view>
		<s-scroll-top :scrollTop="scrollTop1" :isIndex="true" :isShare="true"></s-scroll-top>
	</view>
</template>

<script>
	import { setShareAppMessage } from '../../utils/uniApi.js';
	export default {
		data() {
			return {
				url:'',
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				scrollTop1:0,
			}
		},
		onLoad(options) {
			this.url = options.url
		},
		methods: {
			
		},
		onPageScroll(e) {
			this.scrollTop1 = e.scrollTop;
		},
		onShareAppMessage(){
			return setShareAppMessage({
				path: "/pages/webView/webView?url="+this.url,
			})
		},
		onShareTimeline() {
		    return setShareAppMessage({
		    	path: "/pages/webView/webView?url="+this.url,
		    })
		}
	}
</script>

<style>

</style>
