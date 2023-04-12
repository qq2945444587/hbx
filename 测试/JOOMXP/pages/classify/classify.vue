<template>
	<page-meta page-style="background: #fff">
	</page-meta>
	<view class="content" style="position: relative;">

		<view class="gwc_number">
			<view class="gwc_number_button">
				<view class="gwc_pirce_money_disply">
					<view @tap="gwCarShop" class="myiconfont icon-gouwugouwuchedinggou">
						<text v-if="shop_number!=0">{{shop_number}}</text>
					</view>
					<view class="gwc_pirce_money"><text>￥</text><text>{{allpirs}}</text></view>
				</view>
				<button type="default">去结算</button>
			</view>
		</view>
		<view v-if="leftShop" @tap="leftShop = !leftShop" class="cart-mask"></view>
		<view v-if="leftShop" class="cart-content">
			<view class="choose_yi">
				<view>已选商品</view>
				<view style="display: flex;" @tap="allDele">
					<text class="myiconfont icon-shanchu"></text>
					<text>清空</text>
				</view>
			</view>
			
			<scroll-view v-if="cartNumberList.length!==0" scroll-y="true" scroll-left="120" @touchmove.stop class="cart_content_right">
				<view class="gw_ul" v-for="(item, index) in cartNumberList" :key="item.id">
					<image :src="item.images" mode="scaleToFill"></image>
					<view class="gw_list">
						<view class="gw_title">
							<view class="No_one_hang">{{item.title}}</view>
							<view style="margin-top: 10rpx;color:#9A9A9A;font-size: 22rpx;" v-if ="item.spec !== null">{{item.specString}}</view>
						</view>
						<view class="gw_number">
							<view class="gw_price">￥{{item.price}}</view>
							<view style="display: flex;justify-content: end;align-items: center;">
								<view @tap="cartdelgw(item)" v-if="item.stock" style="color: crimson;"
									class="myiconfont icon-jianshao"></view>
								<view v-if="item.stock" style="margin: 0 10rpx;">{{item.stock}}</view>
								<view @tap="cartSavegw(item)" style="color:rgb(26, 173, 25)" class="myiconfont icon-jiahao"></view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view >
			<view v-else>
				<view class="no_shu">
					<view class="myiconfont icon-meiyoushuju"></view>
					<view>请先选购商品</view>
				</view>
			</view>
			
		</view>
		
		
		<view class="navigation-bar-fixed" :style="{'padding-top':marginTop}">
			<view class="search">
				<view class="search-form round" :style="{'width':'calc(100% - ' + w_jn +'px)'}">
					<text style="fownt-size: 34rpx;" class="myiconfont icon-sousuo"></text>
					<input type="text" placeholder="请输入商品名称搜索" confirm-type="search" />
				</view>
			</view>

			<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120" @touchmove.stop>
				<view @tap="tabtitle(item, index)" v-for="(item, index) in goodList" :key="item.id"
					class="scroll-view-item_H">
					<image :class="{ 'scrollactive': currentActive == index }" class="scroll-img" :src="item.big_images"
						mode="scaleToFill"></image>
					<view :class="{ 'scrollactive': currentActive == index }">{{item.name}}</view>
				</view>
			</scroll-view>

		</view>
		<view class="content_big_box" :style="{'height':'calc(100vh - ' + bottomH +'px)'}">
			<scroll-view class="scroll-left-view" scroll-y="true" scroll-left="120" @touchmove.stop>
				<block v-for="(item, index) in lefttabList" :key="index">
					<view @tap="goodLeft(item, index)" :class="{ 'goodtableftActive': leftActive == index }"
						class="goodtab_left">
						{{item.name}}
					</view>
				</block>
			</scroll-view>

			<scroll-view class="scroll-right-view" scroll-y="true" scroll-left="120" @touchmove.stop>
				<scroll-view class="scroll-right-title" scroll-x="true" scroll-left="120" @touchmove.stop>
					<block v-for="(item, index) in icon_title" :key="index">
						<view @tap="tilist(item, index)" :class="{ 'tiliactive': tiliactive == index }"
							class="scroll-ti-list">
							{{item.name}}
						</view>
					</block>
				</scroll-view>
				<view v-if="rightList.length !==0" class="scroll-left-content">
					<view class="good_shop_list" v-for="(item, index) in rightList" :key="item.id">
						<image :src="item.images" mode="scaleToFill"></image>
						<view class="good_shop_right">
							<view class="good_shop_title No_two_hang">{{item.title}}</view>
							<view class="good_shop_desc No_one_hang">{{item.simple_desc}}</view>
							<view class="good_shop_pirce">
								<view class="pirces">￥{{item.min_price}}</view>
								<view style="display: flex;justify-content: end;align-items: center;">
									<view @tap="cartdelB(item)" v-if="item.stock" style="color: crimson;"
										class="myiconfont icon-jianshao"></view>
									<view v-if="item.stock" style="margin: 0 10rpx;">{{item.stock}}</view>
									<view @tap="cartSaveB(item)" class="myiconfont icon-jiahao"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view v-else>
					<view class="no_shu">
						<view class="myiconfont icon-meiyoushuju"></view>
						<view>没有相关商品或产品</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<view class="gg_zz_box" :class="{gg_active: choose_show}">
			<view @tap="choose_show = false" class="zhezhao"></view>
			<view class="gg_guige">
				<view class="cic_title">
					<image @tap="previewB" :src="choose_show_info.img" mode="scaleToFill"></image>
					<view class="title_choose_price">
						<view class="now_price">￥{{choose_show_info.price}}</view>
						<view class="original_price">￥{{choose_show_info.original_price}}</view>
						<view class="inventorys">库存{{choose_show_info.inventory}}{{choose_show_info.inventory_unit}}
						</view>
					</view>
				</view>
				<view v-for="(item, index) in choose_show_info.choose" :key="item.id" class="choose_guiges">
					<view class="choose_guiges_name">{{item.name}}</view>
					<view class="choose_guiges_botton" v-for="(k, kIndex) in item.value" :key="kIndex">
						<button :class="k.is_active + ' ' + k.is_dont + ' ' + k.is_disabled"
							@tap="gg_xuan_botton(item, k,choose_show_info.goods)" hover-class="none" class="gg_choose_button" type="default">
							<image v-if="k.images" :src="k.images" mode="scaleToFill"></image>
							<text>{{k.name}}</text>
						</button>
					</view>
				</view>

				<button hover-class="none" @tap="tianjiaB(choose_show_info.goods)" class="gwxz_wod"
					type="default">确定</button>
			</view>
		</view>

	</view>
</template>

<script>
	const app = getApp();
	import {
		removeCache,
		setCache,
		getCache
	} from "@/utils/cache.js"
	export default {
		data() {
			return {
				wd: '',
				w_jn: 0,
				goodList: [],
				currentActive: 0,
				bottomH: 0,
				lefttabList: [],
				leftActive: 0,
				icon_title: [],
				tiliactive: 0,
				rightList: [],
				info: {},
				cartNumberList: [],
				shop_number: 0,
				allpirs: '0',
				choose_show: false,
				leftShop:false,
				choose_show_info: {
					spec: [],
					img: '',
					price: '',
					original_price: '', //原价
					choose: [],
					inventory: '',
					linag: '',
					goods: undefined
				}
			}
		},
		computed: {
			marginTop() {
				const {
					platform,
					statusBarHeight
				} = uni.getSystemInfoSync()
				let height = statusBarHeight + 4
				if (platform.toLowerCase() == "android") {
					height += 4
				}
				return height + "px"
			}
		},
		onLoad() {
			this.inptW()
			// this.good_lists()
			// this.cartNumbers()
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.good_lists()
		    // this.cartNumbers()
		},
		onShow() {
			this.good_lists()
			// this.cartNumbers()
		},
		methods: {
			pd() {
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
				} else {
					this.info = getCache('info')
				}
			},
			// 弹窗购物车的删除
			cartdelgw(val) {
			  	// console.log(JSON.parse(JSON.stringify(val)))
				var param = {
					id: val.goods_id,
					wode_id: val.id,
				}
				if (val.stock > 1) {
					this.$set(val, 'stock', val.stock -= 1)
						param.stock = val.stock
					this.stocks(param)
				} else {
					this.rightList.forEach((e)=>{
						if (e.id == val.goods_id) {
							this.$set(e, 'stock', 0)
						}
					})
					this.$set(val, 'stock', 0)
					this.cartDels({wode_id:val.id})
				}
			},
			// 弹窗购物车的添加
			cartSavegw(val) {
				// console.log(JSON.parse(JSON.stringify(val)))
				this.$set(val, 'stock', val.stock += 1)
				var param = {
					id: val.goods_id,
					wode_id: val.id,
					stock: val.stock
				}
				this.stocks(param)
			},
			// 打开图标小购物车
			gwCarShop() {
				this.leftShop = !this.leftShop
				// this.cartNumberList.forEach((e)=>{
				// 	e.specList = []
				// 	if (e.spec!==null) {
				// 		e.spec.forEach((k)=>{
				// 			e.specList.push(k.value)
				// 		})
				// 		e.specString = e.specList.join(';')   
				// 	}
				// })
				// console.log(JSON.parse(JSON.stringify(this.cartNumberList)))
			},
			// 预览图片
			previewB() {
				console.log('触发了')
				uni.previewImage({
					urls:[this.choose_show_info.img],
					indicator:'number'
				});
			},
			// 搜索宽度
			inptW() {
				// #ifdef MP-WEIXIN
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				this.w_jn = menuButtonInfo.width + 50
				// #endif
			},
			goodLeft(val, index) {
				this.leftActive = index
				this.good_content_lists(val)
				this.icon_title = val.items ? val.items : []
				this.tiliactive = 0
				// console.log(JSON.parse(JSON.stringify(val)))
			},
			tabtitle(val, index) {
				this.currentActive = index
				this.lefttabList = val.items
				this.goodLeft(this.lefttabList[0], 0)
				// console.log(JSON.parse(JSON.stringify(this.lefttabList)))
			},
			tilist(val, index) {
				this.tiliactive = index
				this.good_content_lists(val)
			},
			// 选择商品规格
			async gg_xuan_botton(faval, val, goodsVal) {
				// console.log(val)
				// console.log(faval)
				// console.log(goodsVal)
				if (val.is_dont || val.is_disabled) {
					return
				}
				var that = this
				var chooseList = this.choose_show_info.goods.specifications.choose
				const indexs = chooseList.findIndex(item => item.id === faval.id)
				var xuanz = chooseList[indexs + 1]
				// console.log(JSON.parse(JSON.stringify(xuanz)))
				faval.value.forEach((l) => {
					if (l.is_active == '' && val.name == l.name) {
						that.$set(l, 'is_active', 'is_active')
					} else {
						that.$set(l, 'is_active', '')
					}
				})
				if (val.images && val.is_active) {
					this.choose_show_info.img = val.images
				}
				if (chooseList[0].id == faval.id) {
					chooseList.forEach((e, index) => {
						e.value.forEach((k, kindex) => {
							if (index != 0) {
								that.$set(k, 'is_active', '')
								that.$set(k, 'is_dont', 'is_dont')
								that.$set(k, 'is_disabled', '')
							}
						})
					})
				}
				if (chooseList[0].value.findIndex(item => item.is_active == 'is_active') == -1) {
					this.choose_show_info.img = this.choose_show_info.goods.images
					return
				}
				if (xuanz) {
					xuanz.value.forEach((l) => {
						that.$set(l, 'is_active', '')
						that.$set(l, 'is_dont', 'is_dont')
						that.$set(l, 'is_disabled', '')
					})
				}
				this.choose_show_info.spec = []
				chooseList.forEach((e) => {
					e.value.forEach((l) => {
						if (l.is_active) {
							this.choose_show_info.spec.push({
								type: e.name,
								value: l.name
							})
						}
					})
				})
				const param = {
					id: faval.goods_id,
					spec: JSON.stringify(this.choose_show_info.spec)
				}

				if (indexs == (chooseList.length - 1) && val.is_active) {
					this.specdetail()
					return
				} else {
					this.choose_show_info.price = goodsVal.price
					this.choose_show_info.inventory = goodsVal.inventory
					this.choose_show_info.original_price = goodsVal.original_price
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
				// console.log(JSON.parse(JSON.stringify(chooseList)))
			},
			// 减商品
			cartdelB(val, g) {
							// console.log(JSON.parse(JSON.stringify(val)))
			     if (val.specifications.length !== 0 && !g) {
					uni.showToast({
						title: '不同规格的商品需要在购物车减购',
						duration: 2000,
						icon: 'none'
					}); 
					this.gwCarShop()
			     	return
			     }
				if (val.stock > 1) {
					this.$set(val, 'stock', val.stock -= 1)
					this.stocks(val)
				} else {
					this.$set(val, 'stock', 0)
					this.cartDels(val)
				}
				// console.log(JSON.parse(JSON.stringify(val)))
			},
			// 规格选择加入购物车
			tianjiaB(val) {
				if (this.choose_show_info.spec.length !== val.specifications.choose.length) {
					uni.showToast({
						title: '请选择商品规格',
						duration: 2000,
						icon: 'none'
					});
					return
				}
				this.choose_show = false
				this.cartSaveB(val, 'g')
			},
			// 加入购物车
			cartSaveB(val, g) {
				if (val.specifications.length !== 0 && !g) {
					this.choose_show = true
					var that = this
					val.specifications.choose.forEach((e, index) => {
						e.value.forEach((k, kindex) => {
							if (index == 0) {
								that.$set(k, 'is_active', '')
								that.$set(k, 'is_dont', '')
								that.$set(k, 'is_disabled', '')
							} else {
								that.$set(k, 'is_active', '')
								that.$set(k, 'is_dont', 'is_dont')
								that.$set(k, 'is_disabled', '')
							}
						})
					})
					this.choose_show_info = {
						spec: [],
						goods: val,
						id:val.id,
						img: val.images,
						price: val.price,
						inventory_unit: val.inventory_unit,
						original_price: val.original_price, //原价
						inventory: val.inventory,
						choose: val.specifications.choose
					}
					return
				}
				if (!getCache('info')) {
					this.pd()
					return
				}
				console.log(JSON.parse(JSON.stringify(val)))
				// console.log(JSON.parse(JSON.stringify(this.cartNumberList)))
				// console.log(JSON.parse(JSON.stringify(this.choose_show_info)))
				if (val.specifications.length == 0) {
					console.log('可以')
					if (val.stock && !val.spec) {
						this.$set(val, 'stock', val.stock += 1)
						this.stocks(val)
					} else {
						this.$set(val, 'stock', 1)
						this.cartSaves(val, 1)
					}
				} else {
					this.$set(val, 'stock', val.stock += 1)
					this.cartSaves(val)
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
			// 全部清空
			allDele() {
				var that = this 
				if (this.cartNumberList.length == 0) {
					uni.showToast({
						title: '购物车现在为空',
						duration: 2000,
						icon: 'none'
					});
					return
				}
				let wode_id = ''
				let idlist = []
				uni.showModal({
					title: '温馨提示',
					content: '挑了这么久，真的要清空吗？',
					cancelText:'暂不',
					confirmText:'清除',
					success: function(res) {
						if (res.confirm) {
							that.cartNumberList.forEach((e)=>{
								idlist.push(e.id)
							})
							wode_id = idlist.join(',')
							that.cartDels(wode_id,'k')
						} else if (res.cancel) {
							
						}
					}
				});
			},
			async cartDels(val, k) {
				var param = {
					id: ''
				}
				if (k) {
					param.id = val
				} else {
					param.id = val.wode_id
				}
				console.log(param)
				const data = await this.$api.cartDel(param)
				if (data.code == 0) {
					this.cartNumbers()
				}
			},
			async stocks(val) {
				// console.log(JSON.parse(JSON.stringify(val)))
				const param = {
					goods_id: val.id,
					id: val.wode_id,
					stock: val.stock
				}
				console.log(param)
				const data = await this.$api.stockList(param)
				if (data.code == 0) {
					this.cartNumbers()
				}
				console.log(data)
			},
			async cartSaves(val) {
				const param = {
					goods_id: val.id,
					spec: val.spec || val.specifications.length !==0 ? this.choose_show_info.spec : '',
					stock: 1
				}
				console.log(param)
				const data = await this.$api.cartSave(param)
				if (data.code == 0) {
					this.cartNumbers()
				} else {
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon: 'none'
					});
				}
				// console.log(JSON.parse(JSON.stringify(data)))
			},
			async good_content_lists(val) {
				console.log(val)
				const param = {
					category_id: val.id,
					page: 1,
					wd: ''
				}
				const data = await this.$api.good_content_list(param)
				var that = this
				this.rightList = data.data.data || []
				this.rightList.forEach((e) => {
					e.stList = []
					this.cartNumberList.forEach((k) => {
						k.stock = parseInt(k.stock)
						k.specList = []
						if (k.spec!==null) {
							k.spec.forEach((l)=>{
								k.specList.push(l.value)
							})
							k.specString = k.specList.join(';')   
						}
						if (e.specifications.length == 0) {
							if (e.id == k.goods_id) {
								that.$set(e, 'stock', k.stock)
								that.$set(e, 'wode_id', k.id)
							}
						} else {
							if (e.id == k.goods_id) {
								e.stList.push(k.stock)
								that.$set(e, 'wode_id', k.id)
							}
						}
					})
						if (e.stList.length !== 0) {
							e.stock = e.stList.reduce((old, now) => {
								return old + now
							}, 0)
							// e.stock = eval(e.stList.join('+'))   
						}
				})
		// console.log('这个是商品数量', JSON.parse(JSON.stringify(this.rightList)))
		// console.log('这个是购物车里的数量',JSON.parse(JSON.stringify(this.cartNumberList)))
			},
			async good_lists() {
				const data = await this.$api.good_list()
				if (data.code == 0) {
					this.goodList = data.data.category
					this.goodList.forEach((e) => {
						e.items.splice(0, 0, {
							id: e.id,
							name: '全部'
						})
						e.items.forEach((k) => {
							if (k.items) {
								k.items.splice(0, 0, {
									id: k.id,
									name: '全部'
								})
							}
						})
					})
					var top = 0
					uni.getSystemInfo({
						success: function (res) {
							top = res.safeAreaInsets.top
						}
					});
					var that = this
					this.tabtitle(this.goodList[0], 0)
					this.$nextTick(() => {
					  uni.createSelectorQuery().in(that).select('.navigation-bar-fixed').boundingClientRect(
						data => {
							// #ifdef MP-WEIXIN || APP
							that.bottomH = data.height
							// #endif
							// #ifdef H5
							that.bottomH = data.height + 50 + top
							// #endif
							
						}).exec()
					 })
					 this.cartNumbers()
				} else {
					uni.showToast({
						title: data.msg,
						duration: 2000
					});
				}
				uni.stopPullDownRefresh()
			},
			async cartNumbers() {
				const data = await this.$api.cartNumber()
				if (data.code == 0) {
					this.cartNumberList = data.data.data
					this.shop_number = data.data.buy_number
					this.allpirs = data.data.total_price
					setCache('shop_number', this.shop_number)
					if (this.shop_number !== 0) {
						app.globalData.set_tab_bar_badge(String(this.shop_number), 2);
					} else {
						app.globalData.removeTabBarBadges(2)
					}
					// console.log('这个是触发按钮的购物车里的数量',JSON.parse(JSON.stringify(this.cartNumberList)))
					var that = this
					if (this.rightList.length !== 0) {
						this.rightList.forEach((e) => {
						    e.stList = []
							if (this.cartNumberList.length !== 0) {
							   this.cartNumberList.forEach((k) => {
								k.stock = parseInt(k.stock)
							   	k.specList = []
							   	if (k.spec!==null) {
							   		k.spec.forEach((l)=>{
							   			k.specList.push(l.value)
							   		})
							   		k.specString = k.specList.join(';')   
							   	}
							   	if (e.specifications.length == 0) {
							   		if (e.id == k.goods_id) {
							   			that.$set(e, 'stock', k.stock)
							   			that.$set(e, 'wode_id', k.id)
							   		}
							   	} else {
							   		if (e.id == k.goods_id) {
							   			e.stList.push(k.stock)
							   			that.$set(e, 'wode_id', k.id)
							   		}
							   	}
							   })
							   if (e.stList.length !== 0) {
								   e.stock = e.stList.reduce((old, now) => {
									   return old + now
								   }, 0)
							   }
							} else {
								that.$set(e, 'stock', 0)
							}
						})
					} 
					
					// console.log('这个是触发按钮的商品数量', JSON.parse(JSON.stringify(this.rightList)))
					// console.log('这个是触发按钮的购物车里的数量',JSON.parse(JSON.stringify(this.cartNumberList)))
				} else {
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon: 'none'
					});
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '@/pages/classify/classify.css';
</style>
