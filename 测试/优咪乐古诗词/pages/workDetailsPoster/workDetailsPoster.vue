<template>
	<view class="container" v-if="poster">
		<view class="s-content">
			<scroll-view class="s-img-box" 	:scroll-x="scrollX" :scroll-y="scrollY">
				<image :src="path" :mode="imageMode" style="width: 100%;"></image>
			</scroll-view>
		</view>
		<view class="s-button-box">
			<view class="s-download" @click="downloadImg">
				分享/下载
			</view>
		</view>
		<l-painter
		  ref="painter"
		  isCanvasToTempFilePath
		  @success="path = $event"
		  custom-style="position: fixed; left: 200%"
		  :board="poster"
		>
		</l-painter>
	</view>
</template>

<script>
	import config from '../../config/config.js';
	import { getWorkDetails } from '../../services/index/api.js';
	import { getUelQrCode } from '../../services/my/api.js';
	import lPainter from "../../components/l-painter/l-painter/l-painter.vue"
	import { getStorageSync } from '../../utils/uniApi.js';
	export default {
		components:{
			lPainter
		},
		data() {
			return {
				id:null,
				info:null,
				path: '',
				codeData:null,
				poster: null,
				scrollX:false,
				scrollY:true,
				imageMode:'widthFix',
				downloadImgStatus:false
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.init();
		},
		methods: {
			async init(){
				this.poster = null;
				const res = await getWorkDetails({id:this.id});
				if(res.status == 20000){
					uni.setNavigationBarTitle({title: res.data.title})
					if(res.data.content){
						res.data.content = res.data.content.split("\r\n")
					}
					this.info = res.data;
					var scene = "id="+this.info.id
					var userInfo = getStorageSync('userInfo')
					if(userInfo){
						scene += "&pid="+userInfo.id
					}
					const codeRes = await getUelQrCode({
						scene:scene,
						page:"pages/workDetails/workDetails"
					});
					if(codeRes.status == 20000){
						this.codeData = codeRes.data.img_base64
						this.getPainter();
					}
				}
			},
			
			getPainter(){
				let viewContent = [];
				let contentLength = 0;
				if(this.info.content.length>0){
					for(let i = 0;i<this.info.content.length;i++){
						if(contentLength>=400){
							break;
						}
						contentLength += this.info.content[i].length
						viewContent.push({
							type: "text",
							text: this.info.content[i],
							css: {
								color: "#000000",
								width:"100%",
								fontSize:"30rpx",
								paddingTop:"10rpx",
								lineHeight:"60rpx",
								textAlign:this.info.content[i].length>20?"left":"center",
							}
						})
					}
				}
				this.poster = {
					css: {
						width: "750rpx",
						padding: "60rpx 40rpx",
						background: "#ffffff",
						boxSizing:"border-box"
					},
					views:[
						{
							type: "text",
							text: this.info.title,
							css: {
								color: "#000000",
								width:"100%",
								textAlign:this.info.title.length>10?"left":"center",
								fontSize:"52rpx",
								paddingTop:"20rpx"
							}
						},
						{
							type: "text",
							text: "[" + this.info.dynasty + "] " + this.info.author,
							css: {
								color: "#000000",
								width:"100%",
								textAlign:"center",
								fontSize:"34rpx",
								paddingTop:"20rpx"
							}
						},
						...viewContent,
						{
							type: 'image',
							src:this.codeData,
							css: {
								width: '200rpx',
								height: '200rpx',
								margin:"20rpx auto"
							}
						},
						{
							type: "text",
							text: "长按识别小程序【"+config.name+"】",
							css: {
								color: "#f03726",
								width:"100%",
								textAlign:"center",
								fontSize:"34rpx",
								paddingTop:"20rpx",
								fontWeight: "bold",
							}
						},
					]	
				}
				
			},
			downloadImg(){
				let that = this;
				if(that.downloadImgStatus == true){
					return;
				}
				that.downloadImgStatus == true
				this.$refs.painter.canvasToTempFilePathSync({
				  fileType: "png",
				  // 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
				  pathType: 'url',
				  quality: 1,
				  success:function(res){
					const tempFilePath = res.tempFilePath
					wx.showShareImageMenu({
					       path: tempFilePath
					     })
					return;
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
								  that.downloadImgStatus = false
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
		async onPullDownRefresh() {
			await this.init() 
			uni.stopPullDownRefresh()
		},
	}
</script>

<style lang="scss" scoped>
@import 'workDetailsPoster.scss';
</style>
