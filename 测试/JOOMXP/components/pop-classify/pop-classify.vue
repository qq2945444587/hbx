<template>
	<view>
		<view @touchmove.stop.prevent class="gg_zz_box" :class="{gg_active: goodclos}">
			<view class="zhezhao" @tap="zhez"></view>
			<view class="gg_guige">
				<view class="cic_title">
					<image :src="choose_show_info.img" mode="scaleToFill"></image>
					<view class="title_choose_price">
						<view class="now_price">￥{{choose_show_info.price}}</view>
						<view class="original_price">￥{{choose_show_info.original_price}}</view>
						<view class="inventorys">库存{{choose_show_info.inventory}}{{choose_show_info.inventory_unit}}
						</view>
					</view>
				</view>
				<view v-for="(item, index) in datalist.specifications.choose" :key="item.id" class="choose_guiges">
					<view class="choose_guiges_name">{{item.name}}</view>
					<view class="choose_guiges_botton" v-for="(k, kIndex) in item.value" :key="kIndex">
						<button :class="k.is_active + ' ' + k.is_dont + ' ' + k.is_disabled"
							@tap="gg_xuan_botton(item, k)" hover-class="none" class="gg_choose_button" type="default">
							<image v-if="k.images" :src="k.images" mode="scaleToFill"></image>
							<text>{{k.name}}</text>
						</button>
					</view>
				</view>
				
				<view class="buy_number">
					<view>购买数量</view>
					<view class="number_box">
						<view @tap="add_sub(0)" class="sub">-</view>
						<input type="text" :value="numbers" @input="accInpt"/>
						<view @tap="add_sub(1)" class="add">+</view>
					</view>
				</view>
				
				<button hover-class="none" @tap="tianjiaB()" class="gwxz_wod"
					type="default">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
		import {removeCache, setCache, getCache} from "@/utils/cache.js"
	export default {
		name:"pop-classify",
		data() {
			return {
				choose_show_info: {
					spec: [],
					img: '',
					price: '',
					original_price: '', //原价
					choose: [],
					inventory: '',
					linag: '',
					goods: undefined
				},
				numbers:1,
				timeOnline: null
			};
		},
		computed: {
		},
		created() {
			this.datalist.specifications.choose.forEach((e, index) => {
				e.value.forEach((k, kindex) => {
					if (index == 0) {
						this.$set(k, 'is_active', '')
						this.$set(k, 'is_dont', '')
						this.$set(k, 'is_disabled', '')
					} else {
						this.$set(k, 'is_active', '')
						this.$set(k, 'is_dont', 'is_dont')
						this.$set(k, 'is_disabled', '')
					}
				})
			})
			this.choose_show_info = {
				spec: [],
				goods: this.datalist,
				id:this.datalist.id,
				img: this.datalist.images,
				price: this.datalist.price,
				inventory_unit: this.datalist.inventory_unit,
				original_price: this.datalist.original_price, //原价
				inventory: this.datalist.inventory,
				choose: this.datalist.specifications.choose
			}
		},
		mounted() {

		},
		props: {
			datalist: {
				type: 	Object,
				default: {}
			},
			goodclos:{
				type: 	Boolean,
				default: false
			},
			types:{
				type: String,
				default: ''
			}
		},
		watch: {
			datalist: {
				handler(newVal, oldVal) {
					
				   		// console.log(JSON.parse(JSON.stringify(this.choose_show_info)))
				},
				deep: true
			}
		},
		methods: {
			accInpt(e) {
				this.numbers = e.detail.value
			},
			add_sub(type) {
				// console.log(JSON.parse(JSON.stringify(this.datalist.specifications.choose)))
				let chooselist = this.datalist.specifications.choose
				let chooselength = this.datalist.specifications.choose.length - 1
				if (chooselist[chooselength].value.findIndex(item => item.is_active == 'is_active') == -1) {
					uni.showToast({
						title: '请选择完规格后再添加购买数量',
						duration: 2000,
						icon:'none'
					});
					return
				}
			   if (type == 0) {
			   	if (this.numbers> 1) {
			   	   this.numbers--	
			   	} else {
					uni.showToast({
						title: '起购数量为1',
						duration: 2000,
						icon:'none'
					});
				}
			   } else {
			   	 this.numbers++
			   }
			   this.stock()
			},
			zhez() {
				this.$emit('chgoup', false)
			},
			tianjiaB() {
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
				let chooselist = this.datalist.specifications.choose
				let chooselength = this.datalist.specifications.choose.length - 1
				console.log(chooselength)
				const returns = false
				if (chooselength !== -1) {
					if (chooselist[chooselength].value.findIndex(item => item.is_active == 'is_active') == -1) {
						uni.showToast({
							title: this.types == 'buy'?'请选择完规格后再购买': '请选择完规格后再加入购物车',
							duration: 2000,
							icon:'none'
						});
						returns = true
					}
				}
				if (returns) {
					return
				}
				const param = {}
				if (this.types =='buy') {
					param.buy_type = 'goods'
					param.goods_id = this.datalist.id
					param.spec = JSON.stringify(this.choose_show_info.spec)
					param.stock = this.numbers
				} else {
					param.goods_id = this.datalist.id
					param.spec = JSON.stringify(this.choose_show_info.spec)
					param.stock = this.numbers
				}

					// console.log(JSON.parse(JSON.stringify(this.datalist.specifications.choose)))
		
				this.$emit('buyorg', param)
			},
			async stock() {
				const param = {
					id:this.datalist.id,
					spec:this.choose_show_info.spec,
					stock:this.numbers
				}
				console.log(param)
				const data = await this.$api.stock(param)
				if (data.code) {
					console.log(data)
				}
			},
			// 选择规格最后显示价格和数量
			async specdetail() {
				const param = {
					id:this.choose_show_info.id,
					spec:JSON.stringify(this.choose_show_info.spec),
					stock:1
				}
				const data = await this.$api.specdetail(param)
				if (data.code == 0) {
					this.choose_show_info.price = data.data.spec_base.price
					this.choose_show_info.inventory = data.data.spec_base.inventory
					this.choose_show_info.original_price = data.data.spec_base.original_price
				}
				console.log(data)
			},
			async gg_xuan_botton(Bval, val) {
				console.log(this.types)
				// this.datalist.filter((item, index)=>{
					
				// })
				if (val.is_dont || val.is_disabled) {
					return
				}
				var chooseList = this.datalist.specifications.choose
				const indexs = chooseList.findIndex(item => item.id === Bval.id)
				var xuanz = chooseList[indexs + 1]
				Bval.value.forEach((l) => {
					if (l.is_active == '' && val.name == l.name) {
						this.$set(l, 'is_active', 'is_active')
					} else {
						this.$set(l, 'is_active', '')
					}
				})
				
				if (val.images && val.is_active) {
						console.log(val.images)
					this.$set(this.choose_show_info, 'img', val.images)
					console.log(this.choose_show_info)
					// this.choose_show_info.img = val.images
				}
				if (chooseList[0].id == Bval.id) {
					chooseList.forEach((e, index) => {
						e.value.forEach((k, kindex) => {
							if (index != 0) {
								this.$set(k, 'is_active', '')
								this.$set(k, 'is_dont', 'is_dont')
								this.$set(k, 'is_disabled', '')
							}
						})
					})
				}
				
				if (chooseList[0].value.findIndex(item => item.is_active == 'is_active') == -1) {
					this.choose_show_info.img = this.datalist.images
					return
				}
				if (xuanz) {
					xuanz.value.forEach((l) => {
						this.$set(l, 'is_active', '')
						this.$set(l, 'is_dont', 'is_dont')
						this.$set(l, 'is_disabled', '')
					})
				}
				
				
				this.choose_show_info.spec = []
				const sizes = []
				chooseList.forEach((e) => {
					e.value.forEach((l) => {
						if (l.is_active) {
							this.choose_show_info.spec.push({
								type: e.name,
								value: l.name
							})
							sizes.push(l.name)
						}
					})
				})
				this.$emit('tc', sizes)
				const param = {
					id: Bval.goods_id,
					spec: JSON.stringify(this.choose_show_info.spec),
					stock: 1
				}
				if (indexs == (chooseList.length - 1) && val.is_active) {
					this.specdetail()
					setCache('specifications', chooseList)
					return
				} else {
					this.choose_show_info.price = this.datalist.price
					this.choose_show_info.inventory = this.datalist.inventory
					this.choose_show_info.original_price = this.datalist.original_price
				}
				const data = await this.$api.spectype(param)
				var choses = []
				if (data.code == 0) {
					if (xuanz) {
						xuanz.value.forEach((l) => {
							if (data.data.spec_type.indexOf(l.name) !== -1) {
								l.is_dont = ''
							}
						})
					}
				}
				// console.log(JSON.parse(JSON.stringify(Bval)))
				// console.log(JSON.parse(JSON.stringify(this.datalist.specifications.choose)))
			}
		}
	}
</script>

<style scoped>
/* 遮罩选择配置*/
.gg_zz_box{
}
.zhezhao{
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
.gg_guige{
	padding: 20rpx;
	box-sizing: border-box;
	position: fixed;
	background: #fff;
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
.gg_active .zhezhao{
	opacity: 1;
    pointer-events: auto;

}
.gg_active .gg_guige{
	-webkit-transform: none;
	transform: none;
}
.cic_title{
	padding-bottom: 10rpx;
	display: flex;
	border-bottom: 2rpx solid #f7f7f7;
}
.cic_title image{
	display: block;
	width: 156rpx;
	height: 156rpx;
}
.title_choose_price{
	width: 70%;
}
.now_price{
	color: #f40;
	font-weight: bold;
	font-size: 36rpx;
}
.original_price{
	color: #999;
	font-size: 26rpx;
	text-decoration: line-through;
	margin-top: 5rpx;
}
.inventorys{
	color: #888;
		margin-top: 15rpx;
}
.choose_guiges{
	margin-top: 20rpx;
	padding-bottom: 20rpx;
    border-bottom: 1px solid #f7f7f7;
	
}
.choose_guiges_botton{
	margin-top: 10rpx;
	display: inline-block;
	
}
.gg_choose_button{
	display: inline-block;
	font-size: 26rpx;
	margin-right: 26rpx;
	padding: 0 30rpx;
	background-color: #f5f5f5;
	color: #666;
	height: 62rpx;
	line-height: 52rpx;
	border: 2rpx solid #ccc;
	border-radius: 26px;
}
uni-button:after{
	border: none;
}
.gg_choose_button image{
	vertical-align: middle;
	display: inline-block;
	width: 40rpx;
	height: 40rpx;
	    border-radius: 52rpx;
	margin-right: 10rpx;
}
.gg_choose_button text{
	font-size: 26rpx;
}
.choose_guiges_botton .is_dont{
	color: #b4b3b3;
	background-color: #ffffff;
	border: 1px solid #ebeaea ;
}
.choose_guiges_botton .is_active{
	background-color: #f6c133;
	color: #fff;
	border: none;
}
.choose_guiges_botton .is_disabled{
	color: #d2cfcf !important;
	    background-color: #ffffff !important;
	    border: 1px dashed #d5d5d5 !important;
}
.gwxz_wod{
	height: 88rpx;
	line-height: 88rpx;
	font-size: 36rpx;
	margin-top: 20rpx;
	border: 0;
	color: white;
	background-color: #f6c133;
	    border-radius: 52rpx;
}

.cart-mask{
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: rgb(0, 0, 0, 0.6);
	z-index: 5
}
.cart-content{
	position: absolute;
	    left: auto;
	    bottom: 134rpx;
	    width: calc(100% - 40rpx);
		margin: 0 auto;
	    z-index: 6;
	    margin-left: 20rpx;
		border-radius: 20rpx;
		background: white;
}
.choose_yi{
	padding: 20rpx;
	display: flex;
	justify-content: space-between;
	border-bottom: 2rpx solid #f7f7f7;
}
.choose_yi view{
		font-size: 22rpx;
	color: #666;
}
.choose_yi text{
	color:#f00 ;
}
.cart_content_right{
	width: 100%;
	max-height: 60vh;
}
.gw_ul{
	display: flex;
	justify-content: space-between;
	padding: 20rpx;
	box-sizing: border-box;
	margin-bottom: 20rpx;
}
.gw_ul image{
	display: block;
	width: 124rpx;
	height: 124rpx;
}
.gw_list{
	width: calc(100% - 170rpx);
}
.gw_number{
	display: flex;
	justify-content: space-between;
	margin-top: 10rpx;
}
.gw_title{
	min-height: 62rpx;
}
.gw_price{
	color: #f40;
	font-weight: bold;
}
button::after{
	    border: none !important;
}
.buy_number{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 0;
}
.number_box{
	display: flex;
	background: #eee;
	border-radius: 4rpx;
	border: 2rpx solid #eee;
	border-radius: 52rpx;
	text-align: center;
}
.sub,
.add{
	width: 82rpx;
	height: 62rpx;
	line-height: 62rpx;
}
.number_box input{
	/* text-align: center; */
	width: 100rpx;
	background: #fff;
		height: 62rpx;
}

</style>