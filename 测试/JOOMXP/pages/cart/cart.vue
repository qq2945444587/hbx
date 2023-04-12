<template>
	<page-meta
	  page-style="background: #f5f5f5"
	>
	</page-meta>
	<view class="content" v-if="cartList">
		<view class="navigation-bar-fixed" :style="{'padding-top':marginTop}">
			<view :style="{'padding-top':padingTop + 'px'}">
				<view v-for="(item, index) in "></view>
			</view>
	    </view>
	</view>
</template>

<script>
	import {removeCache, setCache, getCache} from "@/utils/cache.js"
	export default {
		data() {
			return {
				padingTop:0,
				cartList:null
			}
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
			// #ifdef MP-WEIXIN
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			this.padingTop = menuButtonInfo.height
			// #endif
		},
		// onReady() {
			
		// },
		// 下拉刷新
		onPullDownRefresh() {
		   this.cartNumbers()
		},
		onShow() {
			this.cartNumbers()
		},
		methods: {
			async cartNumbers() {
				const data = await this.$api.cartNumber()
				if (data.code == 0) {
					this.cartList = data.data.data
					this.cartList.forEach((item)=>{
						item.goushow = false
					})
					this.total_price = data.data.total_price
				}
				console.log(JSON.parse(JSON.stringify(this.cartList)))
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '@/pages/cart/cart.css';
</style>
