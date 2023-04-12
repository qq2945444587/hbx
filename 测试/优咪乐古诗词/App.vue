<script>
	import { removeStorageSync,setStorageSync } from './utils/uniApi.js';
	export default {
		onLaunch: function(options) {
			removeStorageSync('libraryData');
			if(options.pid){
				setStorageSync('pid',options.pid)
			}
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	.container{
		background-color: #F8FAFE;
		min-height: 100vh;
		font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
	}
	uni-page-body,html,body{  
		height: 100%; 
		box-sizing: border-box;
		background-color: #F8FAFE;
	}
	.s-content-box {
		width: 100%;
		/* #ifdef MP-WEIXIN */
		width: 74%; 
		/* #endif */
		height: 44px;
		padding: 0 30upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	.s-avatar-box {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #eaeef1;
		flex-shrink: 0;
	}
	.s-avatar {
		width: 28px;
		height: 28px;
		border-radius: 50%;
	}
	
	.s-search-box {
		width: 100%;
		height: 32px;
		margin: 0 28upx;
		border-radius: 18px;
		font-size: 14px;
		background-color: #f1f1f1;
		padding: 0 12px;
		box-sizing: border-box;
		color: #bfbfbf;
		display: flex;
		align-items: center;
	}
	.s-search-text {
		padding-left: 10upx;
	}
	.s-notice-box {
		position: relative;
		flex-shrink: 0;
		font-size: 44upx;
		color: #fff;
	}
	.s-bottom{
		height: 20upx;
		/* #ifdef H5 */
		height: 100upx;
		/* #endif */
	}
	
	
	.s-loading-360 {
		width: 28rpx;
		height: 28rpx;
		border: 1px solid #8f8d8e;
		border-radius: 50%;
		margin: 0 6px;
		display: inline-block;
		vertical-align: middle;
		clip-path: polygon(0% 0%,100% 0%,100% 30%,0% 30%);
		animation: rotate 1s linear infinite;
	}
	
	@-webkit-keyframes rotate {
		from {
			transform: rotatez(0deg);
		}
	
		to {
			transform: rotatez(360deg);
		}
	}
	
	@keyframes rotate {
		from {
			transform: rotatez(0deg);
		}
	
		to {
			transform: rotatez(360deg);
		}
	}
	
	
	
</style>

