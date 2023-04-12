<template>
	<view class="s-tag" :hover-class="hover ? 's-tag-opcity' : ''" :hover-stay-time="150" :class="[originLeft ? 's-origin-left' : '', originRight ? 's-origin-right' : '', getClassName(shape, plain), getTypeClass(type, plain)]"
	 :style="{ transform: `scale(${scaleMultiple})`, padding: padding, margin: margin, fontSize: size, lineHeight: size }"
	 @tap="handleClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'sTag',
		emits: ['click'],
		props: {
			type: {
				type: String,
				default: 'primary'
			},
			//padding
			padding: {
				type: String,
				default: '16rpx 26rpx'
			},
			margin: {
				type: String,
				default: '0'
			},
			//文字大小 rpx
			size: {
				type: String,
				default: '28rpx'
			},
			// circle, square，circleLeft，circleRight
			shape: {
				type: String,
				default: 'square'
			},
			//是否空心
			plain: {
				type: Boolean,
				default: false
			},
			//点击效果
			hover: {
				type: Boolean,
				default: false
			},
			//缩放倍数
			scaleMultiple: {
				type: Number,
				default: 1
			},
			originLeft: {
				type: Boolean,
				default: false
			},
			originRight: {
				type: Boolean,
				default: false
			},
			index: {
				type: Number,
				default: 0
			}
		},
		methods: {
			handleClick() {
				this.$emit('click', {
					index: this.index
				});
			},
			getTypeClass: function(type, plain) {
				return plain ? 's-' + type + '-outline' : 's-' + type;
			},
			getClassName: function(shape, plain) {
				//circle, square，circleLeft，circleRight
				var className = plain ? 's-tag-outline ' : '';
				if (shape != 'square') {
					if (shape == 'circle') {
						className = className + (plain ? 's-tag-outline-fillet' : 's-tag-fillet');
					} else if (shape == 'circleLeft') {
						className = className + 's-tag-fillet-left';
					} else if (shape == 'circleRight') {
						className = className + 's-tag-fillet-right';
					}
				}
				return className;
			}
		}
	};
</script>

<style scoped>
	/* color start*/

	.s-primary {
		background-color: #5677fc !important;
		color: #fff;
	}

	.s-light-primary {
		background-color: #5c8dff !important;
		color: #fff;
	}

	.s-dark-primary {
		background-color: #4a67d6 !important;
		color: #fff;
	}

	.s-dLight-primary {
		background-color: #4e77d9 !important;
		color: #fff;
	}

	.s-danger {
		background-color: #ed3f14 !important;
		color: #fff;
	}

	.s-red {
		background-color: #ff201f !important;
		color: #fff;
	}

	.s-warning {
		background-color: #ff7900 !important;
		color: #fff;
	}

	.s-green {
		background-color: #19be6b !important;
		color: #fff;
	}

	.s-high-green {
		background-color: #52dcae !important;
		color: #52dcae;
	}

	.s-black {
		background-color: #000 !important;
		color: #fff;
	}

	.s-white {
		background-color: #fff !important;
		color: #333 !important;
	}

	.s-translucent {
		background-color: rgba(0, 0, 0, 0.7);
	}

	.s-light-black {
		background-color: #333 !important;
	}

	.s-gray {
		background-color: #ededed !important;
	}

	.s-phcolor-gray {
		background-color: #ccc !important;
	}

	.s-divider-gray {
		background-color: #eaeef1 !important;
	}

	.s-btn-gray {
		background-color: #ededed !important;
		color: #999 !important;
	}

	.s-hover-gray {
		background-color: #f7f7f9 !important;
	}

	.s-bg-gray {
		background-color: #fafafa !important;
	}

	.s-light-blue {
		background-color: #ecf6fd;
		color: #4dabeb !important;
	}

	.s-light-brownish {
		background-color: #fcebef;
		color: #8a5966 !important;
	}

	.s-light-orange {
		background-color: #fef5eb;
		color: #faa851 !important;
	}

	.s-light-green {
		background-color: #e8f6e8;
		color: #44cf85 !important;
	}

	.s-primary-outline::after {
		border: 1px solid #5677fc !important;
	}

	.s-primary-outline {
		color: #5677fc !important;
		background-color: none;
	}

	.s-danger-outline {
		color: #ed3f14 !important;
		background-color: none;
	}

	.s-danger-outline::after {
		border: 1px solid #ed3f14 !important;
	}

	.s-red-outline {
		color: #ff201f !important;
		background-color: none;
	}

	.s-red-outline::after {
		border: 1px solid #ff201f !important;
	}

	.s-warning-outline {
		color: #ff7900 !important;
		background-color: none;
	}

	.s-warning-outline::after {
		border: 1px solid #ff7900 !important;
	}

	.s-green-outline {
		color: #44cf85 !important;
		background-color: none;
	}

	.s-green-outline::after {
		border: 1px solid #44cf85 !important;
	}

	.s-high-green-outline {
		color: #52dcae !important;
		background-color: none;
	}

	.s-high-green-outline::after {
		border: 1px solid #52dcae !important;
	}

	.s-gray-outline {
		color: #999 !important;
		background-color: none;
	}

	.s-gray-outline::after {
		border: 1px solid #ccc !important;
	}

	.s-black-outline {
		color: #333 !important;
		background-color: none;
	}

	.s-black-outline::after {
		border: 1px solid #333 !important;
	}

	.s-white-outline {
		color: #fff !important;
		background-color: none;
	}

	.s-white-outline::after {
		border: 1px solid #fff !important;
	}

	/* color end*/

	/* tag start*/

	.s-tag {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 6rpx;
		flex-shrink: 0;
	}

	.s-tag-outline {
		position: relative;
		background-color: none;
		color: #5677fc;
	}

	.s-tag-outline::after {
		content: ' ';
		position: absolute;
		width: 200%;
		height: 200%;
		transform: scale(0.5) translateZ(0);
		transform-origin: 0 0;
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 12rpx;
	}

	.s-tag-fillet {
		border-radius: 50rpx;
	}

	.s-white.s-tag-fillet::after {
		border-radius: 80rpx;
	}

	.s-tag-outline-fillet::after {
		border-radius: 80rpx;
	}

	.s-tag-fillet-left {
		border-radius: 50rpx 0 0 50rpx;
	}

	.s-tag-fillet-right {
		border-radius: 0 50rpx 50rpx 0;
	}

	.s-tag-fillet-left.s-tag-outline::after {
		border-radius: 100rpx 0 0 100rpx;
	}

	.s-tag-fillet-right.s-tag-outline::after {
		border-radius: 0 100rpx 100rpx 0;
	}

	/* tag end*/
	.s-origin-left {
		transform-origin: 0 center;
	}

	.s-origin-right {
		transform-origin: 100% center;
	}

	.s-tag-opcity {
		opacity: 0.5;
	}
</style>
