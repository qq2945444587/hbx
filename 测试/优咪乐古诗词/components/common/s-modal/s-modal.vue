<template>
	<view class="s-modal__container" :class="[show ? 's-modal-show' : '']" :style="{zIndex:zIndex}" @touchmove.stop.prevent>
		<view
			class="s-modal-box"
			:style="{ width: width, padding: padding, borderRadius: radius, backgroundColor: backgroundColor,zIndex:zIndex+1 }"
			:class="[fadeIn || show ? 's-modal-normal' : 's-modal-scale', show ? 's-modal-show' : '']"
		>
			<view v-if="!custom">
				<view class="s-modal-title" v-if="title">{{ title }}</view>
				<view class="s-modal-content" :class="[title ? '' : 's-mtop']" :style="{ color: color, fontSize: size + 'rpx' }">{{ content }}</view>
				<view class="s-modalBtn-box" :class="[button.length != 2 ? 's-flex-column' : '']">
					<block v-for="(item, index) in button" :key="index">
						<button
							class="s-modal-btn"
							:class="[
								's-' + (item.type || 'primary') + (item.plain ? '-outline' : ''),
								button.length != 2 ? 's-btn-width' : '',
								button.length > 2 ? 's-mbtm' : '',
								shape == 'circle' ? 's-circle-btn' : ''
							]"
							:hover-class="'s-' + (item.plain ? 'outline' : item.type || 'primary') + '-hover'"
							:data-index="index"
							@tap="handleClick"
						>
							{{ item.text || '确定' }}
						</button>
					</block>
				</view>
			</view>
			<view v-else><slot></slot></view>
		</view>
		<view class="s-modal-mask" :class="[show ? 's-mask-show' : '']" :style="{zIndex:maskZIndex}" @tap="handleClickCancel"></view>
	</view>
</template>

<script>
export default {
	name: 'sModal',
	emits: ['click','cancel'],
	props: {
		//是否显示
		show: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: '84%'
		},
		backgroundColor: {
			type: String,
			default: '#fff'
		},
		padding: {
			type: String,
			default: '40rpx 64rpx'
		},
		radius: {
			type: String,
			default: '24rpx'
		},
		//标题
		title: {
			type: String,
			default: ''
		},
		//内容
		content: {
			type: String,
			default: ''
		},
		//内容字体颜色
		color: {
			type: String,
			default: '#999'
		},
		//内容字体大小 rpx
		size: {
			type: Number,
			default: 28
		},
		//形状 circle, square
		shape: {
			type: String,
			default: 'square'
		},
		button: {
			type: Array,
			default: function() {
				return [
					{
						text: '取消',
						type: 'red',
						plain: true //是否空心
					},
					{
						text: '确定',
						type: 'red',
						plain: false
					}
				];
			}
		},
		//点击遮罩 是否可关闭
		maskClosable: {
			type: Boolean,
			default: true
		},
		//淡入效果，自定义弹框插入input输入框时传true
		fadeIn: {
			type: Boolean,
			default: false
		},
		//自定义弹窗内容
		custom: {
			type: Boolean,
			default: false
		},
		//容器z-index
		zIndex:{
			type: Number,
			default: 9997
		},
		//mask z-index
		maskZIndex:{
			type: Number,
			default: 9990
		}
	},
	data() {
		return {};
	},
	methods: {
		handleClick(e) {
			if (!this.show) return;
			const dataset = e.currentTarget.dataset;
			this.$emit('click', {
				index: Number(dataset.index)
			});
		},
		handleClickCancel() {
			if (!this.maskClosable) return;
			this.$emit('cancel');
		}
	}
};
</script>

<style scoped>
.s-modal__container {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	visibility: hidden;
}
.s-modal-box {
	position: relative;
	opacity: 0;
	visibility: hidden;
	box-sizing: border-box;
	transition: all 0.3s ease-in-out;
}

.s-modal-scale {
	transform: scale(0);
}

.s-modal-normal {
	transform: scale(1);
}

.s-modal-show {
	opacity: 1;
	visibility: visible;
}

.s-modal-mask {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.6);
	transition: all 0.3s ease-in-out;
	opacity: 0;
	visibility: hidden;
}

.s-mask-show {
	visibility: visible;
	opacity: 1;
}

.s-modal-title {
	text-align: center;
	font-size: 34rpx;
	color: #333;
	padding-top: 20rpx;
	font-weight: bold;
}

.s-modal-content {
	text-align: center;
	color: #999;
	font-size: 28rpx;
	padding-top: 20rpx;
	padding-bottom: 60rpx;
}

.s-mtop {
	margin-top: 30rpx;
}

.s-mbtm {
	margin-bottom: 30rpx;
}

.s-modalBtn-box {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.s-flex-column {
	flex-direction: column;
}

.s-modal-btn {
	width: 46%;
	height: 68rpx;
	line-height: 68rpx;
	position: relative;
	border-radius: 10rpx;
	font-size: 26rpx;
	overflow: visible;
	margin-left: 0;
	margin-right: 0;
}

.s-modal-btn::after {
	content: ' ';
	position: absolute;
	width: 200%;
	height: 200%;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	transform: scale(0.5, 0.5) translateZ(0);
	left: 0;
	top: 0;
	border-radius: 20rpx;
	z-index: 2;
}

.s-btn-width {
	width: 80% !important;
}

.s-primary {
	background: #5677fc;
	color: #fff;
}

.s-primary-hover {
	background: #4a67d6;
	color: #e5e5e5;
}

.s-primary-outline {
	color: #5677fc;
	background: transparent;
}

.s-primary-outline::after {
	border: 1px solid #5677fc;
}

.s-danger {
	background: #ed3f14;
	color: #fff;
}

.s-danger-hover {
	background: #d53912;
	color: #e5e5e5;
}

.s-danger-outline {
	color: #ed3f14;
	background: transparent;
}

.s-danger-outline::after {
	border: 1px solid #ed3f14;
}

.s-red {
	background: #e41f19;
	color: #fff;
}

.s-red-hover {
	background: #c51a15;
	color: #e5e5e5;
}

.s-red-outline {
	color: #e41f19;
	background: transparent;
}

.s-red-outline::after {
	border: 1px solid #e41f19;
}

.s-warning {
	background: #ff7900;
	color: #fff;
}

.s-warning-hover {
	background: #e56d00;
	color: #e5e5e5;
}

.s-warning-outline {
	color: #ff7900;
	background: transparent;
}

.s-warning-outline::after {
	border: 1px solid #ff7900;
}

.s-green {
	background: #19be6b;
	color: #fff;
}

.s-green-hover {
	background: #16ab60;
	color: #e5e5e5;
}

.s-green-outline {
	color: #19be6b;
	background: transparent;
}

.s-green-outline::after {
	border: 1px solid #19be6b;
}

.s-white {
	background: #fff;
	color: #333;
}

.s-white-hover {
	background: #f7f7f9;
	color: #666;
}

.s-white-outline {
	color: #333;
	background: transparent;
}

.s-white-outline::after {
	border: 1px solid #333;
}

.s-gray {
	background: #ededed;
	color: #999;
}

.s-gray-hover {
	background: #d5d5d5;
	color: #898989;
}

.s-gray-outline {
	color: #999;
	background: transparent;
}

.s-gray-outline::after {
	border: 1px solid #999;
}

.s-outline-hover {
	opacity: 0.6;
}

.s-circle-btn {
	border-radius: 40rpx !important;
}

.s-circle-btn::after {
	border-radius: 80rpx !important;
}
</style>
