<template>
	<view>
		<view class="scroll_box">
			<scroll-view class="music-scr" scroll-x="true" scroll-with-animation>
				<view class="list-item" :style="{'width':item.alias?'20%':''}" v-for="(item, index) in getList" :key="item.id">
					<view class="music_l" v-if="!item.alias">
						<view class="my icon-24gl-play"></view>
						<text>{{playCount(item.playCount || item.playcount)}}</text>
					</view>
					<image v-if="!item.coverImgUrl" class="music_img" lazy-load="true" :style="{'border-radius':item.alias?'50%':'','height':item.alias?'140rpx':'','width':item.alias?'140rpx':''}" :src="item.picUrl + '?param=100y100' || item.imageUrl + '?param=100y100'" mode="scaleToFill"></image>
					<image  class="music_img" v-else :src="item.coverImgUrl + '?param=100y100' " mode="scaleToFill"></image>
					<view class="scroll_text" :style="{'text-align':item.alias?'center':''}">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import { filterPlayCount } from '@/utils/index.js';
	export default {
		props: {
			getList: {
				type: Array
			}
		},
		methods: {
			playCount(val) {
				return filterPlayCount(val);
			}
		}
	};
</script>

<style lang="scss" scoped>
	// 滚
	.scroll_box{
		margin-top: 20rpx;
		.music-scr{
			width: 100%;
			white-space: nowrap;
		}
		.list-item{
			width: 27.5%;
			margin: 0 12rpx;
			display: inline-block;
			overflow: hidden;
			position: relative;
			.music_l{
				display: flex;
				position: absolute;
			    background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0));
				width: 100%;
				// height: 80rpx;
				padding: 6rpx 12rpx 0 0;
				// text-align: right;
				justify-content: right;
				color: white;
				z-index: 5;
				font-size: 24rpx;
				align-items: center;
				box-sizing: border-box;
				border-radius: 12rpx;
				.icon-24gl-play{
					font-size: 24rpx;
					margin-right: 7rpx;
				}
			}
			.music_img{
				width: 100%;
				height: 28vw;
				border-radius: 15rpx;
			}
		}
	}
.scroll_text{
	// line-height: 72rpx;
	width: 100%;
	height: 60rpx;
	padding-top: 8rpx;
	white-space: normal;
	color: rgba(0, 0, 0, 0.5);
	font-size: 24rpx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
scroll-view ::-webkit-scrollbar {
  display:none;
  width:0;
  height:0;
  color:transparent;
}
</style>