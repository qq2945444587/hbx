<template>
	<view class="content">
		<view class="d1">5</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
   .d1{
	   font-size: 43rpx;
	   -webkit-animation-name: fl;/*关键帧名称*/
	  -webkit-animation-timing-function: ease-in-out;/*动画的速度曲线*/
	  -webkit-animation-iteration-count: infinite;/*动画播放的次数*/
	  -webkit-animation-duration:2s;/*动画所花费的时间*/
   }
   
   @keyframes fl {
         0% {
			  transform: scaleY(1);/*开始为原始大小*/
		  }
		  50% {
			  transform: scaleY(1.2);/*放大1.1倍*/
		  }
    
 }
</style>
