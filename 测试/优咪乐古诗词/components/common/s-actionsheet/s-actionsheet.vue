<template>
	<view @touchmove.stop.prevent>
		<view class="s-actionsheet" :class="{'s-actionsheet-show':show,'s-actionsheet-radius':radius}">
			<view class="s-actionsheet-tips" :style="{fontSize:size+'upx',color:color}" v-if="tips">
				{{tips}}
			</view>
			<view :class="[isCancel?'s-operate-box':'']">
				<block v-for="(item,index) in itemList" :key="index">
					<view class="s-actionsheet-btn s-actionsheet-divider" :class="{'s-btn-last':!isCancel && index==itemList.length-1}"
					 hover-class="s-actionsheet-hover" :hover-stay-time="150" :data-index="index" :style="{color:item.color || '#2B2B2B'}"
					 @tap="handleClickItem">{{item.text}}</view>
				</block>
			</view>
			<view class="s-actionsheet-btn s-actionsheet-cancel" hover-class="s-actionsheet-hover" :hover-stay-time="150"
			 v-if="isCancel" @tap="handleClickCancel">取消</view>
		</view>
		<view class="s-actionsheet-mask" :class="{'s-mask-show':show}" @tap="handleClickMask"></view>
	</view>
</template>

<script>
	export default {
		name: "sActionsheet",
		emits: ['click','cancel'],
		props: {
			//点击遮罩 是否可关闭
			maskClosable: {
				type: Boolean,
				default: true
			},
			//显示操作菜单
			show: {
				type: Boolean,
				default: false
			},
			//菜单按钮数组，自定义文本颜色，红色参考色：#e53a37
			itemList: {
				type: Array,
				default: function() {
					return [{
						text: "确定",
						color: "#2B2B2B"
					}]
				}
			},
			//提示文字
			tips: {
				type: String,
				default: ""
			},
			//提示文字颜色
			color: {
				type: String,
				default: "#808080"
			},
			//提示文字大小 upx
			size: {
				type: Number,
				default: 26
			},
			//是否需要圆角
			radius: {
				type: Boolean,
				default: true
			},
			//是否需要取消按钮
			isCancel: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			handleClickMask() {
				if (!this.maskClosable) return;
				this.handleClickCancel();
			},
			handleClickItem(e) {
				if (!this.show) return;
				const index = Number(e.currentTarget.dataset.index);
				this.$emit('click', {
					index: index,
					...this.itemList[index]
				});
			},
			handleClickCancel() {
				this.$emit('cancel');
			}
		}
	}
</script>

<style scoped>
	.s-actionsheet {
		width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
		visibility: hidden;
		transform: translate3d(0, 100%, 0);
		transform-origin: center;
		transition: all 0.25s ease-in-out;
		background-color: #F7F7F7;
		min-height: 100upx;
	}

	.s-actionsheet-radius {
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		overflow: hidden;
	}

	.s-actionsheet-show {
		transform: translate3d(0, 0, 0);
		visibility: visible;
	}

	.s-actionsheet-tips {
		width: 100%;
		padding: 40upx 60upx;
		box-sizing: border-box;
		text-align: center;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.s-operate-box {
		padding-bottom: 12upx;
	}

	.s-actionsheet-btn {
		width: 100%;
		height: 100upx;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 34upx;
		position: relative;
	}

	.s-btn-last {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.s-actionsheet-divider::before {
		content: '';
		width: 100%;
		border-top: 1upx solid #E7E7E7;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.s-actionsheet-cancel {
		color: #1a1a1a;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.s-actionsheet-hover {
		background-color: #f7f7f9;
	}

	.s-actionsheet-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 9996;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.s-mask-show {
		opacity: 1;
		visibility: visible;
	}
</style>
