<template>
	<view class="container">
		<view class="s-header-box">
			<view class="s-bg-box"></view>
			<view class="s-user-info-box">
				<view class="s-user-head-portrait-box">
					<image src="../../static/logo.png"/>
				</view>
				<view v-if="!info" class="s-user-name" @click="login">注册/登录</view>
				<view class="s-user-name" v-else>{{info.nick_name}}</view>
			</view>
			<view class="s-header-list">
				<view class="s-header-item" @click="collectionWorksList">
					<view class="s-item-value">{{dynamicInformation.collection_work_count || 0}}</view>
					<view class="s-item-name">收藏古诗词</view>
				</view>
				<view class="s-header-item" @click="collectionAuthorList">
					<view class="s-item-value">{{dynamicInformation.collection_author_count || 0}}</view>
					<view class="s-item-name">收藏作者</view>
				</view>
				<!-- <view class="s-header-item">
					<view class="s-item-value">12</view>
					<view class="s-item-name">我的文集</view>
				</view> -->
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		<view class="s-list-box">
			<s-list-view title="菜单列表" backgroundColor="#ffffff">
				<!-- <s-list-cell :arrow="true">
					<view class="s-item-box">
						<s-icon name="wealth-fill" :size="24" color="#ff7900"></s-icon>
						<text class="s-list-cell_name">我的钱包</text>
					</view>
				</s-list-cell>
				<s-list-cell :arrow="true">
					<view class="s-item-box">
						<s-icon name="service-fill" :size="24" color="#5677fc"></s-icon>
						<view class="s-list-cell_name">服务窗</view>
					</view>
				</s-list-cell>
				<s-list-cell :arrow="true">
					<view class="s-item-box">
						<s-icon name="explore-fill" :size="24" color="#19be6b"></s-icon>
						<view class="s-list-cell_name">发现</view>
						<view class="s-ml-auto">
							<s-tag padding="10rpx 12rpx" margin="0 30rpx 0 0" size="24rpx" type="light-green" shape="circle">探索发现</s-tag>
						</view>
					</view>
				</s-list-cell> -->
				<!-- <s-list-cell :arrow="true">
					<view class="s-item-box">
						<s-icon name="shop-fill" :size="23" color="#ed3f14"></s-icon>
						<view class="s-list-cell_name">我的店铺</view>
						<view class="s-right">进入店铺</view>
					</view>
				</s-list-cell> --> 
				<s-list-cell :arrow="true" last="true" v-if="info" @click="myCode">
					<view class="s-item-box">
						<s-icon name="qrcode" :size="23" color="#ed3f14"></s-icon>
						<text class="s-list-cell_name">我的二维码</text>
						<view class="s-right">邀请好友一起学习吧</view>
					</view>
				</s-list-cell>
				<button open-type="contact" class="button" hover-class="wsui-btn__hover_list">
					<s-list-cell :arrow="true" last="true">
						<view class="s-item-box">
							<image src="../../static/images/my/contact.png" class="s-logo" mode="widthFix"></image>
							<text class="s-list-cell_name">客服</text>
						</view>
					</s-list-cell>
				</button>
				<s-list-cell :arrow="true" last="true" @click="aboutUs">
					<view class="s-item-box">
						<image src="../../static/logo.png" class="s-logo" mode="widthFix"></image>
						<text class="s-list-cell_name">关于我们</text>
						<view class="s-right">{{projectName}}</view>
					</view>
				</s-list-cell>
			</s-list-view>
		</view>
		
		<view class="out" @click="openActionSheet" v-if="info">退出登录</view>
		
		<s-footer :fixed="true" :copyright="copyright" :navigate="navigate" s-footer-class="s-custom"></s-footer>
		<s-modal :show="modalStatus" @cancel="hideModalStatus" :custom="true">
			<view class="modal-content">
				<view class="image-box">
					<image :src="info&&info.code_url"></image>
				</view>
				<view class="download" @click="downloadImg">下载</view>
			</view>
		</s-modal> 
		
		<s-actionsheet :show="showActionSheet" :tips="tips" :item-list="itemList" :mask-closable="maskClosable" :color="color"
		 :size="size" :is-cancel="isCancel" @click="out" @cancel="closeActionSheet"></s-actionsheet>
	</view>
</template>

<script>
	import config from '../../config/config.js';
	import { getCode,showToast,setStorageSync,getStorageSync,removeStorageSync,navigateTo,onShareAppMessage } from '../../utils/uniApi.js';
	import { getDynamicInformation } from '../../services/my/api.js';
	export default {
		data() {
			return {
				projectName:config.name,
				copyright: " Copyright © 2021-" + (new Date()).getFullYear() + " " + config.name,
				navigate: [{
					url: "/pages/index/index",
					type: "switchTab",
					text: config.name + "首页"
				}],
				info:null,
				modalStatus:false,
				downloadImgStatus:false,
				
				showActionSheet: false,
				maskClosable: true,
				tips: "确认要推出登录吗？",
				itemList: [{
					text: "退出登录",
					color: "#E3302D"
				}],
				color: "#9a9a9a",
				size: 26,
				isCancel: true,
				dynamicInformation:null
			}
		},
		onShow() {
			this.init()
		},
		methods: {
			collectionAuthorList(){
				navigateTo('../collectionAuthorList/collectionAuthorList')
			},
			collectionWorksList(){
				navigateTo('../collectionWorksList/collectionWorksList')
			},
			closeActionSheet() {
				this.showActionSheet = false;
			},
			openActionSheet() {
				this.showActionSheet = true;
			},
			async init(){
				this.info = getStorageSync('userInfo')
				if(this.info){
					const res = await getDynamicInformation();
					if(res.status === 20000){
						console.log(res.data)
						this.dynamicInformation = res.data;
					}
				}
			},
			aboutUs(){
				navigateTo('../aboutUs/aboutUs')
			},
			myCode(){
				this.modalStatus = true
			},
			hideModalStatus(){
				this.modalStatus = false
			},
			out(){
				this.info = null;
				this.dynamicInformation = null;
				removeStorageSync('userInfo')
				this.showActionSheet = false
				showToast({title:'退出登录成功'});
			},
			login(){
				navigateTo('../login/login');
			},
			downloadImg(){
				this.modalStatus = false
				let that = this;
				if(that.downloadImgStatus == true){
					return;
				}
				that.downloadImgStatus == true
				uni.downloadFile({
				  url: that.info.code_url,//图片的地址
				  success:function(res){
					const tempFilePath = res.tempFilePath
					uni.saveImageToPhotosAlbum({
					  filePath: tempFilePath,  //设置下载图片的地址
					  success:function(){
						uni.hideLoading()
						uni.showModal({
						  title: '提示',
						  content: '图片已保存到相册',
						  showCancel: false,
						})
					  },
					  fail: function (err) {
						if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
						  // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
						  uni.showModal({
							title: '提示',
							content: '需要您授权保存到相册',
							showCancel: false,
							success: modalSuccess => {
							  uni.openSetting({
								success(settingdata) {
								  console.log("settingdata", settingdata)
								  if (settingdata.authSetting['scope.writePhotosAlbum']) {
									uni.showModal({
									  title: '提示',
									  content: '获取权限成功,再次点击即可保存',
									  showCancel: false,
									})
								  } else {
									uni.showModal({
									  title: '提示',
									  content: '获取权限失败，将无法保存到相册哦~',
									  showCancel: false,
									})
								  }
								},
								fail(failData) {
								  console.log("failData", failData)
								},
								complete(finishData) {
								  console.log("finishData", finishData)
								}
							  })
							}
						  })
						}
					  },
					  complete(res) {
						uni.hideLoading()
						that.downloadImgStatus = false
					  }
					})
				  }
				})
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.init() 
			uni.stopPullDownRefresh()
		},
		onShareAppMessage(){
			return setShareAppMessage({})
		},
		onShareTimeline() {
		    return setShareAppMessage({})
		}
	}
</script>

<style lang="scss" scoped>
@import 'my.scss';
</style>
