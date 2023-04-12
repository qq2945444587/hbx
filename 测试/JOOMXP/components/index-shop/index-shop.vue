<template>
	<view>
		<view class="goods_list_box">
			<view class="goods_list" v-for="(item, index) in datalist" :key="item.id" @tap="goodto(item)">
				<view class="type_zt">
					<image :src="item.icon" mode="scaleToFill"></image>
				</view>
				<image class="good_Img" :src="item.images" mode="aspectFit"></image>
				<view class="good_data_titel">{{item.title}}</view>
				<view class="good_data_price">￥{{item.min_price}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name:"index-shop",
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
				default: {}
			}
		},
		watch: {
			datalist: {
				handler(newVal, oldVal) {
					
				},
				deep: true
			}
		},
		methods: {
			goodto(val) {
				this.$emit('goodNav', val)
			}
		}
	}
</script>

<style scoped lang="scss">
	.goods_list_box {
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}
	
	.goods_list_box .goods_list:nth-child(odd) {
		margin-right: 10rpx;
	}
	.goods_list_box .goods_list:nth-child(even) {
		margin-left: 10rpx;
	}
	.goods_list {
		position: relative;
		width: calc(50% - 10rpx);
		padding-bottom: 10rpx;
		margin-bottom: 20rpx;
		border-radius: 20rpx;
		background: white;
		overflow: hidden;
	}
	
	.goods_list .good_Img {
		width: 100%;
		height: 370rpx;
	}
	.type_zt{
		position: absolute;
		left: 0;
		top: 0;
		width: 82rpx;
		height: 82rpx;
		z-index: 2;
	}
	.type_zt image{
		display: block;
		width: 100%;
		height: 100%;
	}
	.good_data_titel,
	.good_data_price {
		padding: 0 20rpx;
	}
	.good_data_price{
		color: #f40;
		font-weight: bold;
		font-size: 36rpx;
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
</style>