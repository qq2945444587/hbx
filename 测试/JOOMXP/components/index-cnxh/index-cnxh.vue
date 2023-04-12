<template>
	<view>
		<view class="guess_swiper">
			<swiper class="swiper" display-multiple-items="3" :circular="false" :indicator-dots="false" :autoplay="autop" interval="5000" duration="500">
				<swiper-item v-for="(item, index) in datalist" :key="item.id">
					<view class="guess_item bg-white border-radius-li margin-right-li posrt overh">
						<view class="type_zt">
							<image :src="item.icon" mode="scaleToFill"></image>
						</view>
						<image class="guss_love_img" :src="item.images" mode="scaleToFill"></image>
						<view class="good_data_titel">{{item.title}}</view>
						<view class="good_data_price">￥{{item.min_price}}</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
	export default {
		name:"index-more-title",
		data() {
			return {
			
			};
		},
		computed: {
		},
		created() {
			
		},
		mounted() {

		},
		props: {
			datalist: {
				type: 	Array,
				default: []
			},
			autop:{
				type:Boolean,
				default:false
			}
		},
		watch: {
			datalist: {
				handler(newVal, oldVal) {
					
				},
				deep: true
			},
			acr: {
				handler(newVal, oldVal) {
					
				},
				deep: true
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	/* 猜你喜欢 */
	.guess_swiper uni-swiper {
		min-height: 400rpx;
	}
	
	.guess_item {
		padding-bottom: 20rpx;
	}
	
	.guss_love_img {
		display: block;
		width: 100%;
		height: 248rpx;
	}
	
	.guess_title {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 28rpx;
		margin-bottom: 10rpx;
	}
	.type_zt {
		position: absolute;
		left: 0;
		top: 0;
		width: 82rpx;
		height: 82rpx;
		z-index: 2;
	}
	
	.type_zt image {
		display: block;
		width: 100%;
		height: 100%;
	}
	.good_data_titel {
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		white-space: initial;
		font-size: 28rpx;
		color: #4a4a4a;
	}
	.good_data_price {
		padding: 0 20rpx;
	}
	
	.good_data_price {
		color: #f40;
		font-weight: bold;
		font-size: 36rpx;
	}
	
</style>