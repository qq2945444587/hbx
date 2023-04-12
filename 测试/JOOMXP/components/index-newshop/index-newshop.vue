<template>
	<view>
		<view class="new_shop_c">
			<view class="new_shop_list" v-for="(item,index) in datalist" :key="item.id">
				<view class="new_shop_top">
					<image class="new_shop_Img" :src="item.logo" mode=""></image>
					<view style="margin-left: 20rpx;">
						<view><text class="bq_box">{{item.alias}}</text><text class="bq_font">{{item.name}}</text>
						</view>
						<view class="yy_time">
							<text decode="true">营业时间:&nbsp;&nbsp;{{item.status_info.time}}</text>
						</view>
					</view>
					<view class="new_shop_icon" :style="{background:item.status_info.status == 0?'#d6d6d6':'#f6c133'}">
						{{item.status_info.msg}}
					</view>
				</view>
				<view class="new_shop_bottom">
					<view class="ip_class">
						<text
							class="myiconfont icon-dingweixiao"></text><text>{{item.province_name}}{{item.city_name}}{{item.county_name}}{{item.address}}</text>
					</view>
					<view class="three_icon">
						<view class="myiconfont icon-fenxiang"></view>
						<view v-if="item.service_tel !== ''" class="myiconfont icon-dianhua"
							@tap="call_phone(item.service_tel)"></view>
						<view class="myiconfont icon-aixin1"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "index-newshop",
		data() {
			return {

			};
		},
		computed: {},
		created() {

		},
		mounted() {

		},
		props: {
			datalist: {
				type: Array,
				default: []
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

<style scoped>
.new_shop_list {
	display: flex;
	flex-direction: column;
	padding: 20rpx;
	border-radius: 10px;
	margin-bottom: 20rpx;
	background: white;
}
.new_shop_top {
	display: flex;
	position: relative;
}
.new_shop_Img {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	border: 1px solid #f7f7f7;
	overflow: hidden;
}

.bq_box {
	display: inline-block;
	color: #f6c133;
	padding: 0 10rpx;
	border: 1px solid #f6c133;
	font-size: 22rpx;
	border-radius: 26px;
}

.bq_font {
	font-size: 32rpx;
	font-weight: bold;
	margin-left: 22rpx;
}
.yy_time {
	font-size: 22rpx;
	margin-top: 10rpx;
	color: #9A9A9A;
}
.new_shop_icon {
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;
	background-color: #f6c133;
	border-top-left-radius: 26rpx;
	border-bottom-left-radius: 26rpx;
	font-size: 22rpx;
	color: white;
	top: -2rpx;
	right: -20rpx;
	padding: 8rpx 20rpx;
	box-shadow: -1px 1px 3px rgb(0 0 0 / 10%);
}

.new_shop_bottom {
	display: flex;
	justify-content: space-between;
	margin-top: 20rpx;
	align-items: flex-end;
}
.ip_class {
	font-size: 24rpx;
	color: rgb(141, 141, 141);
}

.ip_class .icon-dingweixiao {
	font-size: 24rpx;
}
.three_icon {
	display: flex;
	align-items: center;
}

.three_icon .myiconfont {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 52rpx;
	height: 52rpx;
	margin-right: 14rpx;
	border-radius: 50%;
	font-size: 24rpx;
	color: white;
}

.three_icon .icon-fenxiang {
	background-color: #1AAD19;
}

.three_icon .icon-dianhua {
	background-color: #f6c133;
}

.three_icon .icon-aixin1 {
	background-color: #d6d6d6;
}
</style>