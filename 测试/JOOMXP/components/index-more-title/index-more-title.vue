<template>
	<view>
		<view class="public_class">
			<view class="public_title blue_color" :style="{'color':colors}">{{datalist.title || datalist.name}}<text style="color: #888 ;font-size: 28rpx;margin-left: 20rpx;font-weight:initial;">{{acr}}</text></view>
			<view class="public_right">更多</view>
		</view>
		
		<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120" @touchmove.stop>
			<view v-for="(item,index) in datalist.keywords_arr || datalist.items" :key="index" class="scroll-view-item_H">
				<text v-if="item.name"> {{item.name}}</text>
				<text v-else>{{item}}</text>
			</view>
		</scroll-view>
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
				type: 	Object,
				default: {}
			},
			acr:{
				type:String,
				default: ''
			},
			colors:{
				type:String,
				default: ''
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
	.public_class {
		display: flex;
		justify-content: space-between;
		align-items: center;
		line-height: 84rpx;
	}
	.public_class .blue_color{
			color: rgb(0, 102, 255);
	}
	.public_title {
		font-size: 36rpx;
		font-weight: bold;
		color: #333;
	}
	.public_right {
		font-size: 26rpx;
		color: #888;
		padding-right: 40rpx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA+klEQVRYR+3WsWrDMBAG4P/eotCQLlk73UGfq6O3BgLNEsg7JQQPZ7ADfos8gAeBijYTAsnpREJBXmX0f/7RCRNe/NCL81EBtYH/1YCq/gK4iMiu1PSYGlDVloi+AOyZ+bsEwgQYx/FtmqYDgFUphAmQvniOiDFuRaTxNGEGlEZkAWaIFsCHp4lsQEIMw7AIIRw9CBfgGgFgzcw/ljPhBtxoohGR7aOIIoC+799DCCciWsYYnwvwhKeWXA14w12AEuHZgFLhWYCS4WbAPDxn5m+NpukQquqZiD49V+81wgToum6TfkiYef/oRXPvPRPg3mY56xVQG6gN/AEiuagh/yEjYQAAAABJRU5ErkJggg==);
		background-size: 19px 19px;
		background-repeat: no-repeat;
		background-position: center right;
	}
	.scroll-view_H {
		white-space: nowrap;
		margin-bottom: 20rpx;
		/* width: 100%; */
	}
	.scroll-view-item_H {
		display: inline-block;
		margin-right: 20rpx;
		background-color: #ffebd2;
		color: #f6c133;
		padding: 4rpx 14rpx 4rpx 14rpx;
		border-radius: 26px;
		text-align: center;
		font-size: 22rpx;
	}
</style>