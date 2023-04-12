<template>
	<view class="content">
		<view class="bg_whisu">
			<!-- // (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度 -->
			<navigation-custom :config="config"  @hights="hights" :scrollTop="scrollTop" @customConduct="customConduct"
				:scrollMaxHeight="scrollMaxHeight" />
		</view>
		<view class="head_img_box">
			
		</view>
		<taber-b currentPage="mrtj" @getNum="getNum" :datas="musci"></taber-b>
	</view>
</template>

<script>
		var innerAudioContext = uni.createInnerAudioContext()
		import { getCache, setCache } from "@/utils/cache.js";
	export default {
		data() {
			return {
				config: {
					title: "每日推荐", //title
					bgcolor: "#ffffff", //背景颜色
					fontcolor: "white", //文字颜色，默认白色
					type: 2, //type 1，3胶囊 2，4无胶囊模式
					transparent: true, //是否背景透明 默认白色
					linear: false, //是为开启下滑渐变
					share: false, //是否将主页按钮显示为分享按钮
					show_sc: false, // 是否显示搜索栏(首页导航栏)
					show_no: false, // 真的搜索功能
					xuyao: false, //占位
					// menuIcon:"../static/icon/back_.png", 当type为3或者4的时候左边的icon文件位置，注意位置与当前页面不一样
					// menuText:"返回", 当type为3或4的时候icon右边的文字
				},
				scrollTop: 0, // 当linear为true的时候需要通过onpagescroll传递参数
				scrollMaxHeight: 200, //滑动的高度限制，超过这个高度即背景全部显示
				musci:{},
				red:{},
				musci:{}
			}
		},
		onLoad() {

		},
		onShow() {
				this.bofangFun()
		},
		methods: {
			hights(val) {
				console.log(val)
			},
			getNum(val) {
				this.getMusicData(val)
			},
			bofangFun() {
				if (getCache('bofangVal')) {
					// let bofang = getCache('bofangVal')
					// // bofang.bofang =false
					// setCache('bofangVal',bofang)
					this.red = getCache('bofangVal')
					this.musci = getCache('bofangVal')
				}
			},
			// 根据id获取歌曲
			async getMusicData(val) {
				if(Object.keys(innerAudioContext).length !== 0) {
				        innerAudioContext.destroy()
				}
				innerAudioContext = uni.createInnerAudioContext()
				var timestamp = new Date().getTime();
				const data = await this.$api.getMusicUrl({id:getCache('bofangVal').id?getCache('bofangVal').id:val.id, timestamp:timestamp});
				const bo = {
					id:val.id,
					src:data.data[0].url,
				}
				if (val.song) {
					bo.coverImgUrl = val.coverImgUrl
					bo.title = val.name,
					bo.name = val.song.artists[0].name
				} else {
					bo.coverImgUrl = val.coverImgUrl
					bo.title = val.title,
					bo.name = val.name
				}
				let bofang = getCache('bofangVal')
				innerAudioContext.src = bo.src;
				innerAudioContext.autoplay = true;
				// innerAudioContext.play();
				// innerAudioContext.startTime = 180
				console.log(val.id, bofang.id)
				if((bofang.bofang || !bofang.bofang) && val.id != bofang.id) {
					bo.bofang = true
				} else if(val.id == bofang.id){
					bo.bofang = bofang.bofang == true?false:true
					if (bo.bofang == false) {
						bo.bofang = false
						innerAudioContext.stop()
					}
				}
				innerAudioContext.onPlay(() => {
				  console.log('开始播放');
				});
				innerAudioContext.onPause(() => {
				  bo.bofang = false
				  bofang.bofang = false
				  bo.bofang = false
				  setCache('bofangVal',bofang)
				  this.red = bo
				  this.musci = bo
				  console.log('播放暂停');
				});
				innerAudioContext.onStop(() => {
					// bofang.bofang = false
					// bo.bofang = false
					// // setCache('bofangVal',bofang)
					// this.red = bo
					// this.musci = bo
								console.log(innerAudioContext)
					console.log('音频停止');
				});
				innerAudioContext.onTimeUpdate((res) => {

				});
				innerAudioContext.onError((res) => {
				  console.log(res.errMsg);
				  console.log(res.errCode);
				});
				this.red = bo
				this.musci = bo
				setCache("bofangVal", bo);
			}
		}
	}
</script>

<style lang="scss" scoped>

   .head_img_box{
	   
   }
</style>
