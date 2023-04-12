<template>
	<view class="s-list-view s-view-class" :style="{backgroundColor:backgroundColor,marginTop:marginTop}">
		<view class="s-list-title" :style="{color:color,fontSize:size+'rpx',lineHeight:30+'rpx',fontWeight:fontWeight}" v-if="title">{{title}}</view>
		<view class="s-list-content" :class="[unlined?'s-border-'+unlined:'']">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "sListView",
		props: {
			title: {
				type: String,
				default: ''
			},
			color:{
				type: String,
				default: '#666'
			},
			//rpx
			size:{
				type:Number,
				default:34
			},
			fontWeight:{
				type:Number,
				default:700
			},
			backgroundColor:{
				type: String,
				default: 'transparent'
			},
			unlined: {
				type: String,
				default: '' //top,bottom,all
			},
			marginTop:{
				type:String,
				default:'0'
			}
		}
	}
</script>

<style scoped>
	.s-list-title {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
	}

	.s-list-content {
		width: 100%;
		position: relative;
	}

	.s-list-content::before {
		content: " ";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1px solid #eaeef1;
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 0;
		z-index: 2;
		pointer-events: none;
	}

	.s-list-content::after {
		content: '';
		width: 100%;
		position: absolute;
		border-bottom: 1px solid #eaeef1;
		-webkit-transform: scaleY(0.5) translateZ(0);
		transform: scaleY(0.5) translateZ(0);
		transform-origin: 0 100%;
		bottom: 0;
		right: 0;
		left: 0;
	}

	.s-border-top::before {
		border-top: 0;
	}

	.s-border-bottom::after {
		border-bottom: 0;
	}

	.s-border-all::after {
		border-bottom: 0;
	}

	.s-border-all::before {
		border-top: 0;
	}
</style>
