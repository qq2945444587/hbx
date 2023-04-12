<template>
	<view class="content">
		<view class="bg_whisu">
			<!-- // (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度 -->
			<navigation-custom :config="config" :scrollTop="scrollTop" @customConduct="customConduct"
				:scrollMaxHeight="scrollMaxHeight" />
		</view>
		<view class="mian_hight">
			<!-- 轮播 -->
			<view class="banner-wrapper" style="margin-top: 10rpx;">
				<swiper class="swiper" circular='true' @change="swiperChange" :autoplay="true" interval="2000"
					:duration="duration">
					<swiper-item v-for="(item, index) in swiperList" :key="index">
						<view class="swiper-item uni-bg-red">
							<image class="ben_img" :src="item.pic || item.imageUrl" mode="scaleToFill"></image>
						</view>
					</swiper-item>
				</swiper>
				<!-- 轮播点 -->
				<view class="banner_ul">
					<view id="swiper_li" v-for="(item, index) in swiperList" :class="[currentSwiper == index ? 'on' : '']"
						:key="index"></view>
				</view>
			</view>
			<!-- 指导菜单分类栏 -->
			<view class="list-wrapper">
				<view class="cu-item" @tap="mrtj">
					<view class="my icon-shenghuoaixinjuanzeng"></view>
					<text>每日推荐</text>
				</view>
				<view class="cu-item">
					<view class="my icon-icon_tuijian-mian"></view>
					<text>推荐歌单</text>
				</view>
				<view class="cu-item">
					<view class="my icon-phb"></view>
					<text>排行榜</text>
				</view>
				<view class="cu-item">
					<view class="my icon-maikefeng-07"></view>
					<text>热门歌手</text>
				</view>
			</view>
			<!-- 占位背景颜色 -->
			<view class="bg_hui" v-if="musicListList.length>0"></view>
			<!-- 每日推荐歌单 -->
			<view class="music-wrapper" v-if="musicListList.length>0">
				<!-- 统一头部 -->
				<song-title title="每日推荐歌单" buttonName="查看更多" @navto="navto"></song-title>
				<sing-list :getList="musicListList"></sing-list>
			</view>
			<!-- 占位背景颜色 -->
			<view class="bg_hui"></view>
			<!-- 每日推荐歌曲 -->
			<view class="music-wrapper" v-if="getDayList.length>0">
				<!-- 统一头部 -->
				<song-title title="每日推荐歌曲" buttonName="播放全部" @navto="navto"></song-title>
				<song-list :getList="getDayList" @getNum="getNum" :red="red"></song-list>
			</view>
			<!-- 占位背景颜色 -->
			<view class="bg_hui" v-if="getRecommendList.length>0"></view>
			<!-- 热门歌单 -->
			<view class="music-wrapper" v-if="getRecommendList.length>0">
				<!-- 统一头部 -->
				<song-title title="热门歌单" buttonName="查看更多" @navto="navto"></song-title>
				<sing-list :getList="getRecommendList"></sing-list>
			</view>
			<!-- 占位背景颜色 -->
			<view class="bg_hui"></view>
			<!-- 歌手 -->
			<view class="music-wrapper" v-if="getHotSingerList.length>0">
				<!-- 统一头部 -->
				<song-title title="热门歌手" buttonName="查看更多" @navto="navto"></song-title>
				<sing-list :getList="getHotSingerList"></sing-list>
			</view>
			<!-- 占位背景颜色 -->
			<view class="bg_hui"></view>
			<!-- 新歌速递 -->
			<view class="music-wrapper" v-if="getNewSongList.length>0">
				<!-- 统一头部 -->
				<song-title title="新歌速递" buttonName="播放全部" @navto="navto"></song-title>
				<song-list :getList="getNewSongList" @getNum="getNum" :red="red"></song-list>
			</view>
			<!-- 占位背景颜色 -->
			<view class="bg_hui"></view>
			<!-- 网友精选 -->
			<view class="music-wrapper" v-if="getPlayLis.length>0">
				<!-- 统一头部 -->
				<song-title title="网友精选歌单" buttonName="播放全部" @navto="navto"></song-title>
				<sing-list :getList="getPlayLis"></sing-list>
			</view>
	<!-- 		<view class="" style="height: 106rpx;">
				
			</view> -->
		</view>
		<taber-b currentPage="home" :datas="musci"></taber-b>
	</view>
</template>

<script>
	var innerAudioContext = uni.createInnerAudioContext()
	import { getCache, setCache } from "@/utils/cache.js";
	import songTitle from './components/songTitle.vue';
	import songList from './components/songList.vue';
	import singList from './components/singList.vue';
	export default {
		data() {
			return {
				config: {
					title: "测试音乐", //title
					bgcolor: "#ffffff", //背景颜色
					fontcolor: "#333333", //文字颜色，默认白色
					type: 2, //type 1，3胶囊 2，4无胶囊模式
					transparent: false, //是否背景透明 默认白色
					linear: false, //是为开启下滑渐变
					share: false, //是否将主页按钮显示为分享按钮
					show_sc: true, // 是否显示搜索栏(首页导航栏)
					show_no: false, // 真的搜索功能
					xuyao: true,
					// menuIcon:"../static/icon/back_.png", 当type为3或者4的时候左边的icon文件位置，注意位置与当前页面不一样
					// menuText:"返回", 当type为3或4的时候icon右边的文字
				},
				red:{},
				musci:{},
				scrollTop: 0, // 当linear为true的时候需要通过onpagescroll传递参数
				scrollMaxHeight: 200, //滑动的高度限制，超过这个高度即背景全部显示
				duration: 500,
				swiperList: [], // 轮播数据
				getRecommendList:[], //热门歌单数据
				getHotSingerList:[], //热门歌手数据
				getNewSongList: [], // 新歌速递
				getPlayLis: [], // 网友精选
				musicListList: [], // 每日推荐歌单
				getDayList: [], // 每日推荐歌曲
				currentSwiper: 0, // 轮播自定义小点初始index
			}
		},
		components: {
			songTitle,
			songList,
			singList
		},
		computed: {},
		onLoad() {
			this.getBannerData()
			this.getRecommendData()
			this.getHotSingerData()
			this.getNewSongListData()
			// this.getCatlistData()
			this.getPlaylistData()
			this.musicListData()
			this.getDayRecommendData()
			if (getCache('bofangVal')) {
				let bofang = getCache('bofangVal')
				bofang.bofang =false
				setCache('bofangVal',bofang)
				// this.red = getCache('bofangVal')
				// this.musci = getCache('bofangVal')
			}
		},
		onShow(){
			this.bofangFun()
			console.log('onShow')
		},
		methods: {
			getNum(val) {
				this.getMusicData(val)
			},
			bofangFun() {
				if (getCache('bofangVal')) {
					// let bofang = getCache('bofangVal')
					// bofang.bofang = false
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
					bo.coverImgUrl = val.picUrl
					bo.title = val.name,
					bo.name = val.song.artists[0].name
				} else {
					bo.coverImgUrl = val.al.picUrl
					bo.title = val.name,
					bo.name = val.ar[0].name
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
			},
			playCount(val) {
				return filterPlayCount(val);
			},
			// 监听轮播事件
			swiperChange(e) {
				this.currentSwiper = e.detail.current;
			},
			// 获取轮播图数据
			async getBannerData() {
				const data = await this.$api.getBanner();
				this.swiperList = data.banners || [];
			},
			// 获取热门歌单
			async getRecommendData() {
				const data = await this.$api.getRecommendList();
				this.getRecommendList = data.result.slice(1,10)
				// this.swiperList = data.banners || [];
			},
			// 获取热门歌手
			async getHotSingerData() {
				const data = await this.$api.getHotSingerList();
				this.getHotSingerList = data.artists
			},
			// 新歌速递
			async getNewSongListData() {
				let list = []
				const data = await this.$api.getNewSongList();
				const getNewSongList = data.result.slice(0,9)
				this.getNewSongList = getNewSongList
			},
			//歌单 ( 网友精选碟 )
			async getPlaylistData() {
				const param = {
					limit: 9,
					order: 'hot'
				}
				const data = await this.$api.getPlaylist(param);
				this.getPlayLis = data.playlists
			},
			//歌单分类
			// async getCatlistData() {
			// 	const data = await this.$api.getCatlist();
			// },
			//每日推荐歌单(需登录)
			async musicListData() {
				const data = await this.$api.getDayRecommendMusicList();
				this.musicListList = data.recommend || []
			},
			//每日推荐歌曲(需登录)
			async getDayRecommendData() {
				const data = await this.$api.getDayRecommendList();
				this.getDayList = data.data.dailySongs || []
			},
			// 跳转
			navto(e) {
				// console.log(e)
			},
			// 每日推荐
			mrtj() {
				if (getCache("COOKIE")) {
					uni.navigateTo({
						url: '/pages/mrtj/mrtj'
					})
				} else {
					uni.showModal({
						title: '提示',
						content: '用户还没登录,请登录',
						success: function (res) {
							if (res.confirm) {
								uni.navigateTo({
									url: '/pages/login/login'
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bg_whisu {
		// background-color: white;
	}

	.banner-wrapper {
		position: relative;
		box-sizing: border-box;
		padding: 20rpx;
		overflow: hidden;
		.swiper {
			height: 40vw;
			border-radius: 10rpx;
			overflow: hidden;
		}

		.swiper-item {
			height: 40vw;
		}

		.ben_img {
			width: 100%;
			height: 40vw;
		}
	}

	.banner_ul {
		display: flex;
		justify-content: center;
		position: absolute;
		bottom: 40rpx;
		width: 100%;

		#swiper_li {
			background-color: #ffffff;
			opacity: 0.4;
			width: 10rpx;
			height: 10rpx;
			border-radius: 20rpx;
			margin: 0 8rpx !important;
		}

		.on {
			opacity: 1 !important;
			width: 30rpx !important;
		}
	}

	.list-wrapper {
		display: flex;
		margin-top: 16rpx;
		justify-content: space-between;
		padding-bottom: 20rpx;

		.cu-item {
			flex: 1;
			text-align: center;
			font-size: 24rpx;

			.my {
				color: #f84e51;
				font-size: 74rpx;
			}

			text {
				display: block;
				font-size: 28rpx;
				margin-top: 10rpx;
			}
		}
	}

	.bg_hui {
		background-color: #f5f5f5;
		width: 100%;
		height: 10rpx;
	}

	.music-wrapper {
		margin-top: 10rpx;
		background: #fff;
		box-sizing: border-box;
		padding: 20rpx;
	}

</style>
