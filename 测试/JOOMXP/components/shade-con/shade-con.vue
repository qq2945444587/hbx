<template>
	<view>
		<view class="gg_zz_box" :class="{gg_active: shadeShow}">
			<view class="zhezhao" @tap="shadeems"></view>
			<view class="gg_guige" :style="{'background':type == '分享'?'#fff':'#f5f5f5'}">
				<view v-if="type == '起批量'">
					<view class="qpl_zz_box">
						<view class="qpl_nbmber_z" v-for="(item,index) in datalist.plugins_wholesale_data.rules"
							:key="index">
							<text>{{item.arr.msg}}</text><text>{{item.arr.val}}</text><text>{{item.arr.unit}}</text>
						</view>
					</view>
				</view>
				
				<view v-if="type == '优惠券'">
				   <scroll-view scroll-y="true" class="scroll-Y">
				   		<view class="yhj_box" v-for="(item,index) in datalist.plugins_coupon_data.data" :key="index">
							<view class="yhj_money">
								<view :style="{'color':item.bg_color_value}">￥<span style="font-size: 46rpx;font-weight: 700;">{{item.discount_value}}</span>{{item.type_unit}}</view>
								<view>{{item.use_limit_type_name}}</view>
								<view style="color: #888;">{{item.desc}}</view>
							</view>
							<view @tap="yhjlqB(item)" class="yhj_type" :style="{'background':item.is_operable_name == '已过期' || item.is_operable_name == '已领光'?'#dfdfdf':item.bg_color_value,'color':item.is_operable_name == '已过期' || item.is_operable_name == '已领光'?'#c0c0c0':'#fff'}">{{item.is_operable_name}}</view>
						</view>
				   	</scroll-view>
				</view>
				
				<view v-if="type == '分享'">
					<!-- #ifdef H5 -->
				  <view class="share_li" @tap="shareH">
					   <image src="https://d1.shopxo.vip/static/app/yellow/common/share-user-icon.png" mode="scaleToFill"></image>
					   <view>点击复制地址分享给好友、群聊</view>
				   </view>
				    <!-- #endif -->
					  <!-- #ifdef MP-ALIPAY -->
					<view class="share_li" @tap="share_base">
					   <image src="https://d1.shopxo.vip/static/app/yellow/common/share-user-icon.png" mode="scaleToFill"></image>
					   <view>一键分享给好友、群聊</view>
					</view>
					 <!-- #endif -->
					 
				    <!-- #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ || MP-TOUTIAO || MP-KUAISHOU -->
					 <button open-type="share" class="share_li" @tap="share_base_two">
					    <image src="https://d1.shopxo.vip/static/app/yellow/common/share-user-icon.png" mode="scaleToFill"></image>
					    <view>一键分享给好友、群聊</view>
					 </button>
					  <!-- #endif -->
					 
				    <view class="share_li">
						<image src="https://d1.shopxo.vip/static/app/yellow/common/share-friend-icon.png" mode="scaleToFill"></image>
						<view>生成海报，分享到朋友圈、好友及群聊</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>
<script>
			import {removeCache, setCache, getCache} from "@/utils/cache.js"
	// 公共遮罩
	export default {
		name: "shade-con",
		data() {
			return {

			};
		},
		computed: {},
		created() {
			// console.log(this.datalist)
		},
		mounted() {

		},
		props: {
			datalist: {
				type: Object,
				default: {}
			},
			shadeShow: {
				type: Boolean,
				default: false
			},
			type: {
				type: String,
				default: ''
			}
		},
		watch: {

			shadeShow: {
				handler(newVal, oldVal) {

				},
				deep: true
			}
		},
		methods: {
			shareH() {
				// #ifdef H5
				  var url = window.location.href;
				// #endif
				uni.setClipboardData({
					data: url,
					success: function () {
						uni.showToast({
							title: '复制成功!',
							duration: 2000,
							icon:"success"
						});
					}
				});
				
			},
			shadeems() {
				this.$emit('shadeem', false)
			},
			share_base_two() {
			  this.$emit('shadeem', false)
			},
			share_base() {
				this.$emit('shadeem', false)
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300,
				    complete: res => {
				        setTimeout(function() {
				            uni.showShareMenu();
				        }, 500);
				    }
				});
			},
			// 领取优惠卷
			async yhjlqB(val) {
				if (!getCache('info')) {
					uni.showModal({
						title: '温馨提示',
						content: '请先登录或注册',
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/login/login'
								});
								console.log('用户点击确定');
							} else if (res.cancel) {
								
							}
						}
					});
					return
				}
				const param = {
					coupon_id:val.id
				}
				const data = await this.$api.coupon(param)
				if (data.code == 0) {
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon:"success"
					});
				} else {
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon:"error"
					});
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.zhezhao {
		transition: all 0.25s linear;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.6);
		opacity: 0;
		pointer-events: none;
		z-index: 300;
	}

	.gg_guige {
		padding: 20rpx;
		box-sizing: border-box;
		position: fixed;
		background: #f5f5f5;
		z-index: 301;
		bottom: var(--window-bottom);
		width: 100%;
		overflow: hidden;
		left: 0;
		transition: all 0.25s linear;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		-webkit-transform: translateY(100%);
		transform: translateY(100%);
	}

	.gg_active .zhezhao {
		opacity: 1;
		pointer-events: auto;
	}

	.gg_active .gg_guige {
		-webkit-transform: none;
		transform: none;
	}

	.qpl_zz_box {
		display: grid;
		justify-content: space-between;
		grid-template-columns: repeat(auto-fill, 48%);
       grid-row-gap: 20rpx;
	}

	.qpl_nbmber_z {
		text-align: center;
		background-color: #fff;
		border-radius: 10px;
		padding: 20rpx;

	}
	.qpl_nbmber_z text:nth-child(2){
		    color: #f6c133;
			font-weight: bold;
			font-size: 36rpx;
			margin-left: 10rpx;
	}
	.scroll-Y{
	    max-height: 50vh;
		background-color: #f5f5f5;
	}
	.yhj_box{
		display: flex;
		justify-content: space-between;
		height: 182rpx;
		background-color: #fff;
		margin-bottom: 20rpx;
		border-radius: 20rpx;
		overflow: hidden;
	}
	.yhj_money{
		width: calc(100% - 144rpx);
		height: 100%;
		padding: 20rpx 10rpx 20rpx 20rpx;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	.yhj_type{
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 144rpx;
		height: 100%;
	}
	.share_li{
		display: flex;
		align-items: center;
		padding: 30rpx;
		height: 88rpx;
		background: white;
		box-sizing: initial;
		font-size: 28rpx;
	}
	.share_li:nth-child(1){
		border-bottom: 2rpx solid #f0f0f0;
	}
	.share_li image{
		width: 82rpx;
		height: 82rpx;
		margin-right: 20rpx;
	}
	uni-button:after{
		border: none;
	}
	button::after{
		border: none;
	}
</style>