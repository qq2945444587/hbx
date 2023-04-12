<template>
	<view>
		<view
			class="s-top-dropdown s-dropdown-box"
			:class="[show ? 's-dropdown-show' : '']"
			:style="{
				height: height ? px(height) : 'auto',
				backgroundColor: backgroundColor,
				paddingBottom: px(paddingbtm),
				transform: 'translateZ(0) translateY(' + (show ? px(translatey) : '-100%') + ')'
			}"
		>
			<slot></slot>
		</view>
		<view @touchmove.stop.prevent class="s-dropdown-mask" :class="[mask && show ? 's-mask-show' : '']" @tap="handleClose"></view>
	</view>
</template>

<script>
export default {
	name: 'sTopDropdown',
	emits: ['close'],
	props: {
		//是否需要mask
		mask: {
			type: Boolean,
			default: true
		},
		//控制显示
		show: {
			type: Boolean,
			default: false
		},
		//背景颜色
		backgroundColor: {
			type: String,
			default: '#f2f2f2'
		},
		//padding-bottom  rpx
		paddingbtm: {
			type: Number,
			default: 0
		},
		//高度 rpx
		height: {
			type: Number,
			default: 580
		},
		//移动距离 需要计算
		translatey: {
			type: Number,
			default: 0
		}
	},
	methods: {
		handleClose() {
			if (!this.show) {
				return;
			}
			this.$emit('close', {});
		},
		px(num) {
			return uni.upx2px(num) + 'px';
		}
	}
};
</script>

<style scoped>
.s-dropdown-box {
	width: 100%;
	position: fixed;
	box-sizing: border-box;
	border-bottom-right-radius: 24rpx;
	border-bottom-left-radius: 24rpx;
	transform: translateZ(0);
	overflow: hidden;
	/* visibility: hidden; */
	transition: all 0.3s ease-in-out;
	z-index: 996;
	top: 0;
}

.s-dropdown-show {
	/* visibility: visible; */
}

.s-dropdown-mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 986;
	transition: all 0.3s ease-in-out;
	opacity: 0;
	visibility: hidden;
}

.s-mask-show {
	opacity: 1;
	visibility: visible;
}
</style>
