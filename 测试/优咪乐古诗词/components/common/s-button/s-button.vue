<template>
	<button class="s-btn" :class="[
			plain ? 's-' + type + '-outline' : 's-btn-' + (type || 'primary'),
			getDisabledClass(disabled, type, plain),
			getShapeClass(shape, plain),
			getShadowClass(type, shadow, plain),
			bold ? 's-text-bold' : '',
			link ? 's-btn__link' : ''
		]" :hover-class="getHoverClass(disabled, type, plain)"
		:style="{ width: width, height: height, lineHeight: height, fontSize: size + 'rpx', margin: margin }"
		:loading="loading" :form-type="formType" :open-type="openType" @getuserinfo="bindgetuserinfo"
		@getphonenumber="bindgetphonenumber" @contact="bindcontact" @error="binderror" :disabled="disabled"
		@tap="handleClick">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: 'sButton',
		emits: ['click', 'getuserinfo', 'contact', 'getphonenumber', 'error'],
		// #ifndef VUE3
		// #ifndef MP-QQ
		behaviors: ['wx://form-field-button'],
		// #endif
		// #endif
		props: {
			//样式类型 primary, white, danger, warning, green,blue, gray，black,brown,gray-primary,gray-danger,gray-warning,gray-green
			type: {
				type: String,
				default: 'primary'
			},
			//是否加阴影
			shadow: {
				type: Boolean,
				default: false
			},
			// 宽度 rpx或 %
			width: {
				type: String,
				default: '100%'
			},
			//高度 rpx
			height: {
				type: String,
				default: '96rpx'
			},
			//字体大小 rpx
			size: {
				type: Number,
				default: 32
			},
			bold: {
				type: Boolean,
				default: false
			},
			margin: {
				type: String,
				default: '0'
			},
			//形状 circle(圆角), square(默认方形)，rightAngle(平角)
			shape: {
				type: String,
				default: 'square'
			},
			plain: {
				type: Boolean,
				default: false
			},
			//link样式，去掉边框，结合plain一起使用
			link: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			//禁用后背景是否为灰色 （非空心button生效）
			disabledGray: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			formType: {
				type: String,
				default: ''
			},
			openType: {
				type: String,
				default: ''
			},
			index: {
				type: [Number, String],
				default: 0
			},
			//是否需要阻止重复点击【默认200ms】
			preventClick: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				time: 0
			};
		},
		methods: {
			handleClick() {
				if (this.disabled) return;
				if (this.preventClick) {
					if (new Date().getTime() - this.time <= 200) return;
					this.time = new Date().getTime();
					setTimeout(() => {
						this.time = 0;
					}, 200);
				}
				this.$emit('click', {
					index: Number(this.index)
				});
			},
			bindgetuserinfo({
				detail = {}
			} = {}) {
				this.$emit('getuserinfo', detail);
			},
			bindcontact({
				detail = {}
			} = {}) {
				this.$emit('contact', detail);
			},
			bindgetphonenumber({
				detail = {}
			} = {}) {
				this.$emit('getphonenumber', detail);
			},
			binderror({
				detail = {}
			} = {}) {
				this.$emit('error', detail);
			},
			getShadowClass: function(type, shadow, plain) {
				let className = '';
				if (shadow && type != 'white' && !plain) {
					className = 's-shadow-' + type;
				}
				return className;
			},
			getDisabledClass: function(disabled, type, plain) {
				let className = '';
				if (disabled && type != 'white' && type.indexOf('-') == -1) {
					let classVal = this.disabledGray ? 's-gray-disabled' : 's-dark-disabled';
					className = plain ? 's-dark-disabled-outline' : classVal;
				}
				return className;
			},
			getShapeClass: function(shape, plain) {
				let className = '';
				if (shape == 'circle') {
					className = plain ? 's-outline-fillet' : 's-fillet';
				} else if (shape == 'rightAngle') {
					className = plain ? 's-outline-rightAngle' : 's-rightAngle';
				}
				return className;
			},
			getHoverClass: function(disabled, type, plain) {
				let className = '';
				if (!disabled) {
					className = plain ? 's-outline-hover' : 's-' + (type || 'primary') + '-hover';
				}
				return className;
			}
		}
	};
</script>

<style scoped>
	.s-btn-primary {
		background: #5677fc !important;
		color: #fff;
	}

	.s-shadow-primary {
		box-shadow: 0 10rpx 14rpx 0 rgba(86, 119, 252, 0.2);
	}

	.s-btn-danger {
		background: #eb0909 !important;
		color: #fff;
	}

	.s-shadow-danger {
		box-shadow: 0 10rpx 14rpx 0 rgba(235, 9, 9, 0.2);
	}

	.s-btn-warning {
		background: #fc872d !important;
		color: #fff;
	}

	.s-shadow-warning {
		box-shadow: 0 10rpx 14rpx 0 rgba(252, 135, 45, 0.2);
	}

	.s-btn-green {
		background: #07c160 !important;
		color: #fff;
	}

	.s-shadow-green {
		box-shadow: 0 10rpx 14rpx 0 rgba(7, 193, 96, 0.2);
	}

	.s-btn-blue {
		background: #007aff !important;
		color: #fff;
	}

	.s-shadow-blue {
		box-shadow: 0 10rpx 14rpx 0 rgba(0, 122, 255, 0.2);
	}

	.s-btn-white {
		background: #fff !important;
		color: #333 !important;
	}

	.s-btn-gray {
		background: #bfbfbf !important;
		color: #fff !important;
	}

	.s-btn-black {
		background: #333 !important;
		color: #fff !important;
	}

	.s-btn-brown {
		background: #ac9157 !important;
		color: #fff !important;
	}

	.s-btn-gray-black {
		background: #f2f2f2 !important;
		color: #333;
	}

	.s-btn-gray-primary {
		background: #f2f2f2 !important;
		color: #5677fc !important;
	}

	.s-gray-primary-hover {
		background: #d9d9d9 !important;
	}

	.s-btn-gray-green {
		background: #f2f2f2 !important;
		color: #07c160 !important;
	}

	.s-gray-green-hover {
		background: #d9d9d9 !important;
	}

	.s-btn-gray-danger {
		background: #f2f2f2 !important;
		color: #eb0909 !important;
	}

	.s-gray-danger-hover {
		background: #d9d9d9 !important;
	}

	.s-btn-gray-warning {
		background: #f2f2f2 !important;
		color: #fc872d !important;
	}

	.s-gray-warning-hover {
		background: #d9d9d9 !important;
	}

	.s-shadow-gray {
		box-shadow: 0 10rpx 14rpx 0 rgba(191, 191, 191, 0.2);
	}

	.s-hover-gray {
		background: #f7f7f9 !important;
	}

	.s-black-hover {
		background: #555 !important;
		color: #e5e5e5 !important;
	}

	.s-brown-hover {
		background: #A37F49 !important;
		color: #e5e5e5 !important;
	}

	/* button start*/

	.s-btn {
		width: 100%;
		position: relative;
		border: 0 !important;
		border-radius: 6rpx;
		padding-left: 0;
		padding-right: 0;
		overflow: visible;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.s-btn::after {
		content: '';
		position: absolute;
		width: 200%;
		height: 200%;
		transform-origin: 0 0;
		transform: scale(0.5, 0.5) translateZ(0);
		box-sizing: border-box;
		left: 0;
		top: 0;
		border-radius: 12rpx;
		border: 0;
	}

	.s-text-bold {
		font-weight: bold;
	}

	.s-btn-white::after {
		border: 1px solid #bfbfbf;
	}

	.s-white-hover {
		background: #e5e5e5 !important;
		color: #2e2e2e !important;
	}

	.s-dark-disabled {
		opacity: 0.6 !important;
		color: #fafbfc !important;
	}

	.s-dark-disabled-outline {
		opacity: 0.5 !important;
	}

	.s-gray-disabled {
		background: #f3f3f3 !important;
		color: #919191 !important;
		box-shadow: none;
	}

	.s-outline-hover {
		opacity: 0.5;
	}

	.s-primary-hover {
		background: #4a67d6 !important;
		color: #e5e5e5 !important;
	}

	.s-primary-outline::after {
		border: 1px solid #5677fc !important;
	}

	.s-primary-outline {
		color: #5677fc !important;
		background: transparent;
	}

	.s-danger-hover {
		background: #c80808 !important;
		color: #e5e5e5 !important;
	}

	.s-danger-outline {
		color: #eb0909 !important;
		background: transparent;
	}

	.s-danger-outline::after {
		border: 1px solid #eb0909 !important;
	}

	.s-warning-hover {
		background: #d67326 !important;
		color: #e5e5e5 !important;
	}

	.s-warning-outline {
		color: #fc872d !important;
		background: transparent;
	}

	.s-warning-outline::after {
		border: 1px solid #fc872d !important;
	}

	.s-green-hover {
		background: #06ad56 !important;
		color: #e5e5e5 !important;
	}

	.s-green-outline {
		color: #07c160 !important;
		background: transparent;
	}

	.s-green-outline::after {
		border: 1px solid #07c160 !important;
	}

	.s-blue-hover {
		background: #0062cc !important;
		color: #e5e5e5 !important;
	}

	.s-blue-outline {
		color: #007aff !important;
		background: transparent;
	}

	.s-blue-outline::after {
		border: 1px solid #007aff !important;
	}

	/* #ifndef APP-NVUE */
	.s-btn-gradual {
		background: linear-gradient(90deg, rgb(255, 89, 38), rgb(240, 14, 44)) !important;
		color: #fff !important;
	}

	.s-shadow-gradual {
		box-shadow: 0 10rpx 14rpx 0 rgba(235, 9, 9, 0.15);
	}

	/* #endif */

	.s-gray-hover {
		background: #a3a3a3 !important;
		color: #898989;
	}

	/* #ifndef APP-NVUE */
	.s-gradual-hover {
		background: linear-gradient(90deg, #d74620, #cd1225) !important;
		color: #fff !important;
	}

	/* #endif */

	.s-gray-outline {
		color: #999 !important;
		background: transparent !important;
	}

	.s-white-outline {
		color: #fff !important;
		background: transparent !important;
	}

	.s-black-outline {
		background: transparent !important;
		color: #333 !important;
	}

	.s-gray-outline::after {
		border: 1px solid #ccc !important;
	}

	.s-white-outline::after {
		border: 1px solid #fff !important;
	}

	.s-black-outline::after {
		border: 1px solid #333 !important;
	}

	.s-brown-outline {
		color: #ac9157 !important;
		background: transparent;
	}

	.s-brown-outline::after {
		border: 1px solid #ac9157 !important;
	}

	/*圆角 */

	.s-fillet {
		border-radius: 50rpx;
	}

	.s-btn-white.s-fillet::after {
		border-radius: 98rpx;
	}

	.s-outline-fillet::after {
		border-radius: 98rpx;
	}

	/*平角*/
	.s-rightAngle {
		border-radius: 0;
	}

	.s-btn-white.s-rightAngle::after {
		border-radius: 0;
	}

	.s-outline-rightAngle::after {
		border-radius: 0;
	}

	.s-btn__link::after {
		border: 0 !important;
	}
</style>
