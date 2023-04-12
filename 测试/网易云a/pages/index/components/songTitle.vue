<template>
	<view>
		<view class="box-title">
			<view class="title-wrapper">
				<text>{{title}}</text>
			</view>
			<view class="more" @click="$emit('navto')">
				<text>{{buttonName}}</text>
				<view class="my icon-xiangyoujiantou"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			currentList: {
				type: Array
			},
			buttonName:{
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			}
		},
		methods: {
		}
	};
</script>

<style lang="scss" scoped>
	.box-title {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 6rpx;
	
		.title-wrapper::before {
			content: '';
			width: 8rpx;
			height: 40rpx;
			background-image: linear-gradient(to bottom, #fd7566, #f7494f);
			position: absolute;
			left: 0px;
			top: 6rpx;
		}
	
		.title-wrapper {
			font-weight: 600;
			color: #000000;
			position: relative;
			text-indent: 26rpx;
	
			text {
				font-size: 36rpx;
				font-weight: 600;
				color: #000000;
				text-indent: 26rpx;
			}
		}
	}
	
	.more {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 40rpx;
		color: rgba(0, 0, 0, 0.5);
		padding: 6rpx 20rpx 6rpx 26rpx;
		font-size: 26rpx;
		border: 2rpx solid whitesmoke;
	}
	
	.icon-xiangyoujiantou {
		margin-left: 4rpx;
		font-size: 30rpx;
		color: #000;
	}
</style>