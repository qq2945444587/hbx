<template>
	<view :class="[dot ? 's-badge-dot' : 's-badge', 's-' + type, !dot ? 's-badge-scale' : '']" :style="{ top: top, right: right, position: absolute ? 'absolute' : 'static', transform: getStyle, margin: margin }"
	 @tap="handleClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'sBadge',
		emits: ['click'],
		props: {
			//primary,warning,green,danger,white，black，gray,white_red
			type: {
				type: String,
				default: 'primary'
			},
			//是否是圆点
			dot: {
				type: Boolean,
				default: false
			},
			margin: {
				type: String,
				default: '0'
			},
			//是否绝对定位
			absolute: {
				type: Boolean,
				default: false
			},
			top: {
				type: String,
				default: '-8rpx'
			},
			right: {
				type: String,
				default: '0'
			},
			//缩放比例
			scaleRatio: {
				type: Number,
				default: 1
			},
			//水平方向移动距离
			translateX: {
				type: String,
				default: '0'
			}
		},
		computed: {
			getStyle() {
				return `scale(${this.scaleRatio}) translateX(${this.translateX})`;
			}
		},
		methods: {
			handleClick() {
				this.$emit('click', {});
			}
		}
	};
</script>

<style scoped>
	/* color start*/

	.s-primary {
		background-color: #5677fc;
		color: #fff;
	}

	.s-danger {
		background-color: #ed3f14;
		color: #fff;
	}

	.s-red {
		background-color: #F74D54;
		color: #fff;
	}

	.s-warning {
		background-color: #ff7900;
		color: #fff;
	}

	.s-green {
		background-color: #19be6b;
		color: #fff;
	}

	.s-white {
		background-color: #fff;
		color: #333;
	}

	.s-white_red {
		background-color: #fff;
		color: #F74D54;
	}

	.s-white_primary {
		background-color: #fff;
		color: #5677fc;
	}

	.s-white_green {
		background-color: #fff;
		color: #19be6b;
	}

	.s-white_warning {
		background-color: #fff;
		color: #ff7900;
	}

	.s-black {
		background-color: #000;
		color: #fff;
	}

	.s-gray {
		background-color: #ededed;
		color: #999;
	}

	/* color end*/

	/* badge start*/

	.s-badge-dot {
		height: 8px;
		width: 8px;
		border-radius: 50%;
	}

	.s-badge {
		font-size: 24rpx;
		line-height: 24rpx;
		height: 36rpx;
		min-width: 36rpx;
		padding: 0 10rpx;
		box-sizing: border-box;
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	.s-badge-scale {
		transform-origin: center center;
	}

	/* badge end*/
</style>
