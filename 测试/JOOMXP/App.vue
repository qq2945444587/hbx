<script>
	export default {
		globalData:{
			data:{
				
			},
			set_tab_bar_badge(val, index) {
				uni.setTabBarBadge({
					index: index,
					"text": val
				});
			},
			removeTabBarBadges(index) {
				uni.removeTabBarBadge({
					index: index
				})
			}
		}
	}
</script>
<style>
	@import 'font/font.css';

	uni-page-body {
		font-size: 28rpx;
	}

	page {
		background: #f5f5f5;
		color: #4a4a4a;
	}

	uni-page-body {
		background: #f5f5f5;
		min-height: 100%;
	}

	/*每个页面公共css */
	/* 解决小程序和app滚动条的问题 */
	/* #ifdef MP-WEIXIN || APP-PLUS */
	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	/* #endif */

	/* 解决H5 的问题 */
	/* #ifdef H5 */
	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}

	/* #endif */

	.bg-white {
		background-color: #fff !important;
	}

	.border-radius-li {
		border-radius: 20rpx;
	}

	.margin-right-li {
		margin-right: 20rpx;
	}
	.pading-main-all{
		    padding: 20rpx;
	}
	.posrt {
		position: relative;
	}

	.overh {
		overflow: hidden;
	}

	.br {
		border: 2rpx solid #f7f7f7;
	}
	.bgcolor{
		background: white;
	}
	.No_one_hang {
		width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.No_two_hang {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		white-space: initial;
	}

	.No_three_hang {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		white-space: initial;
	}
</style>
