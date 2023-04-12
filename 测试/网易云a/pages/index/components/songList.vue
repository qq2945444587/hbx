<template>
	<view>
		<view class="newmusic-scr" style="margin-top: 10rpx;">
			<swiper class="swiper" circular='true' :autoplay="false" interval="2000"
				duration="500">
				<swiper-item v-for="(item, index) in SongList" :key="index">
					 <view class="new_song_item" v-for="(k, l) in item" :key="k.id" @tap="bofang(k, l)">
						 <image class="new_song_img" lazy-load="true" :src="k.picUrl || k.al.picUrl + '?param=50y50'" mode="scaleToFill"></image>
						 <view class="new_song_conter" :class="{ active: k.id == red.id }"><text>{{k.name}}</text><text>-{{getName(k)}}</text></view>
						 <view class="new_song_icon">
							 <text v-if="k.id == red.id && red.bofang == true" class="my icon-zanting"></text>
							 <text v-else class="my icon-24gf-playCircle"></text>
						 </view>
					 </view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	// import { filterPlayCount } from '@/utils/index.js';
	import { getCache, setCache } from "@/utils/cache.js";
	export default {
		data(){
			return{
				SongList: [],
				changeRed:null
			}
		},
		props: {
			getList: {
				type: Array
			},
			red:{
				type: Object,
				default: {}
			}
		},
		watch:{
			//  red(newVal, oldVal) {
			// 	console.log('oldVal:',oldVal)
			// 	console.log('newVal:',newVal)
			// }
		},
		created() {
			this.getNewArray(this.getList, 3)
			// this.red = getCache('bofangID')
		},
		methods: {
			// 判断作者
			getName(val) {
				if (val.song) {
					return val.song.artists[0].name;
				}
				if (val.artists) {
					return val.artists[0].name;
				}
				if (val.ar) {
					return val.ar[0].name;
				}
			},
			// 点击播放
			bofang(val, index) {
				this.$emit('getNum',val)
			},
			// 分割数组
			getNewArray(arr, size){  // size，要分割的长度
			    const arrNum = Math.ceil(arr.length/size, 10); // Math.ceil()向上取整的方法，用来计算拆分后数组的长度
				let index = 0; // 定义初始索引
				let resIndex = 0; // 用来保存每次拆分的长度
				const result = [];
				while(index< arrNum){
					result[index]= arr.slice(resIndex,size+resIndex);
					resIndex += size;
					index++;
				}
				this.SongList = result
			},
		}
	};
</script>

<style lang="scss" scoped>
	// 新歌速递
	
	.newmusic-scr{
		width: 100%;
		margin-top: 12rpx;
		height: 382rpx;
	}
	.new_song_item{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.new_song_img{
			width: 106rpx;
			height: 106rpx;
			border-radius: 14rpx;
			margin: 14rpx 20rpx 0 0;
		}
		.new_song_conter{
			width: calc(100% - 212rpx);
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.active text{
			color: #f84e51 !important;
		}
	}
	.newmusic-scr .swiper{
		height: 100%;
	}
	.new_song_conter text:first-child{
		color: #000;
		font-size: 30rpx;
		margin-right: 10rpx;
	}
	.new_song_conter text:last-child{
		font-size: 24rpx;
		color: rgba(0, 0, 0, 0.5);
	}
	.new_song_icon .my{
		margin-right: 40rpx;
		font-size: 40rpx;
		color: #f84e51;
	}
</style>