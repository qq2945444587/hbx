<template>
	<view class="container" v-if="info">
		<view class="s-header-box">
			<view class="s-name">
				{{info.name}}
			</view>
			<view class="s-info">
				[{{info.dynasty}}] {{info.birth_year}} ~ {{info.death_year}}
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		<s-collapse :current="current" @click="change">
			<template v-slot:title>
				<s-list-cell :hover="!current"><view class="s-content-name">简介</view></s-list-cell>
			</template>
			<template v-slot:content>
				<view class="s-content">{{info.desc}}</view>
			</template>
		</s-collapse>
		<view class="s-list-title" @click="openActionSheet" >
			<view class="s-list-title-name">
				{{itemList[itemListIndex].text}}（{{total}}）
			</view>
			<s-icon name="arrowdown" :size="36" color="#ff6b00"></s-icon>
		</view>
		<s-actionsheet :show="showActionSheet" :tips="tips" :item-list="itemList" :mask-closable="maskClosable" :color="color"
		 :size="size" :is-cancel="isCancel" @click="itemClick" @cancel="closeActionSheet"></s-actionsheet>
		 <view class="s-list-box">
		 	<s-list-view>
		 		<s-list-cell v-for="(item,index) in list" :key="index">
		 			<view class="s-list-item" @click="workDetails(item.id)">
		 				<view class="s-item-info">
		 					<view class="s-item-name">
		 						{{item.title}}
		 					</view>
		 					<view class="s-item-author">
		 						[{{item.dynasty}}] {{item.author}}
		 					</view>
		 				</view>
		 				<view class="s-item-content">
		 					{{item.quote?item.quote:item.content}}
		 				</view>
		 			</view>
		 		</s-list-cell>	
		 	</s-list-view>	
			<s-loadmore :index="3" type="green" v-if="loading"></s-loadmore>
			<s-nomore v-if="!isData"></s-nomore>
		 </view>
		<view class="s-button-seize"></view>
		<view class="s-button-box">
			<view class="player-slider">
				<view class="player-currentTime">
					{{chCurrentTime[0]>0?chCurrentTime[0]:0}}:{{chCurrentTime[1]>0?chCurrentTime[1]:0}}
				</view>
				<slider 
				class="slider"
				min="0"
				:max="duration"
				:value="currentTime"
				activeColor="#b6b6b6"
				backgroundColor="#dedede"
				block-size="12"
				@change="changeProgress"
				/>
				<view class="player-duration">
					{{chDuration[0]>0?chDuration[0]:0}}:{{chDuration[1]>0?chDuration[1]:0}}
				</view>
			</view>
			<view class="s-operation-box">
				<view class="s-operation-item"  @click="operationSetClick">
					<s-icon name="setup" :size="22" color="#999999"></s-icon>
				</view>
				<view class="s-operation-item" @click="openActionSheetAudio">
					<s-icon name="link" :size="22" color="#999999"></s-icon>
				</view>
				<view class="s-operation-item" @click="playMusic">
					<s-icon :name="['loading','suspend','play','about'][ifPlay]" :size="38" color="#ff6b00" :class="ifPlay==0?'s-loading-360':''"></s-icon>
				</view>
				<view class="s-operation-item" @click="setCollectionAuthor">
					<s-icon :name="info.collection_status?'like-fill':'like'" :size="22" :color="info.collection_status?'#ff6b00':'#999999'"></s-icon>
				</view>
				<view class="s-operation-item">
					<button open-type="share" class="button" hover-class="wsui-btn__hover_list">
					<s-icon name="share" :size="22" color="#999999"></s-icon>
					</button>
				</view> 
			</view>
		</view>
		<s-popup ref="popup" background-color="#ffffff" type="bottom">
			<view class="s-set-box">
				<view class="s-set-title">语音设置</view>
				<view class="s-set-close" @click="closePopup">
					<s-icon name="close" :size="22" color="#999999"></s-icon>
				</view>
				<view class="s-set-content">
					<view class="s-set-content-item">
						<view class="s-set-content-title">人声选择：</view>
						<radio-group class="s-set-content-list" @change="soundSelectionChange">
							<label class="s-set-content-list-item" v-for="(item,index) in sound_selection" :key="index">
								<view>
									<radio :id="index" :value="index" :checked="index==sound_selection_index"></radio>
								</view>
								<view>
									<label class="s-set-content-list-item-label" :for="item">
										<text>{{item}}</text>
									</label>
								</view>
							</label>
						</radio-group>
					</view>
					<view class="s-set-content-item">
						<view class="s-set-content-title">发音语速：</view>
						<radio-group class="s-set-content-list" @change="articulatorySpeedChange">
							<label class="s-set-content-list-item" v-for="(item,index) in articulatory_speed" :key="index">
								<view>
									<radio :id="index" :value="index" :checked="index==articulatory_speed_index"></radio>
								</view>
								<view>
									<label class="s-set-content-list-item-label" :for="item">
										<text>{{item}}</text>
									</label>
								</view>
							</label>
						</radio-group>
					</view>
				</view>
			</view>
		</s-popup>
		<s-actionsheet :show="showActionSheetAudio" :tips="tipsAudio" :item-list="itemListAudio" :mask-closable="maskClosableAudio" :color="colorAudio"
		 :size="sizeAudio" :is-cancel="isCancelAudio" @click="downloadAudioAudio" @cancel="closeActionSheetAudio"></s-actionsheet>		
		 <s-scroll-top :scrollTop="scrollTop1" :isIndex="true" :isShare="true"></s-scroll-top>
	</view>
</template>

<script>
	import config from '../../config/config.js';
	import { getAuthorDetails,getWorkList } from '../../services/index/api.js';
	import { setAuthor } from '../../services/collection/api.js';
	import { setShareAppMessage,navigateTo,showToast,getStorageSync } from '../../utils/uniApi.js';
	import sui from "@/components/common/s-clipboard/s-clipboard.js"
	export default {
		data() {
			return {
				id:null,
				info:null,
				current:0,
				showActionSheet: false,
				maskClosable: true,
				tips: "快速选择您需要的内容！",
				itemListIndex:0,
				scrollTop1:0,
				itemList: [{
					text: "全部作品",
					color: "#2B2B2B"
				}, {
					text: "诗",
					value:'shi',
					color: "#2B2B2B"
				}, {
					text: "词",
					value:'ci',
					color: "#2B2B2B"
				}, {
					text: "曲",
					value:'fu',
					color: "#2B2B2B"
				}, {
					text: "文言文",
					value:'wen',
					color: "#2B2B2B"
				}],
				color: "#9a9a9a",
				size: 26,
				isCancel: true,
				list:[],
				limit:20,
				page:1,
				total:0,
				isData:true,
				loading:false,
				
				
				content:'',
				backgroundAudioManager:null,
				duration: '100',
				currentTime: '0',
				chDuration: ['0', '00'],
				chCurrentTime: ['0', '00'],
				ifPlay: 0,
				sound_selection:["男声","童声","女声","经典男声","经典童声","经典女声"],
				sound_selection_index:1,
				articulatory_speed:["中速","较慢","较快"],
				articulatory_speed_index:0,
				showActionSheetAudio: false,
				maskClosableAudio: true,
				tipsAudio: "复制音频地址使用浏览器打开",
				itemListAudio: [{
					text: "复制音频地址",
					color: "#E3302D"
				}],
				colorAudio: "#9a9a9a",
				sizeAudio: 26,
				isCancelAudio: true,
				isLoginAudio:false,
			}
		},
		onLoad(options) {
			uni.getBackgroundAudioManager().stop();
			this.id = options.id
			this.init()
		},
		onShow() {
			if(this.isLogin){
				uni.getBackgroundAudioManager().stop();
				this.init();
			}
		},
		methods: {
			async setCollectionAuthor(){
				if(!getStorageSync('userInfo')){
					this.isLogin = true;
					navigateTo('../login/login');
					return;
				}
				const res = await setAuthor({id:this.info.id});
				if(res.status == 20000){
					this.info.collection_status = !this.info.collection_status
				}
				showToast({title:res.message});
			},
			closeActionSheetAudio() {
				this.showActionSheetAudio = false;
			},
			openActionSheetAudio() {
				this.showActionSheetAudio = true;
			},
			downloadAudioAudio(event){
				this.showActionSheetAudio = false;
				sui.getClipboardData(encodeURI(this.innerAudioContext.src), (res) => {
					if (res) {
						showToast({title:'复制成功'});
					} else {
						showToast({title:'复制失败'});
					}
				},event)
			},
			soundSelectionChange(e){
				this.sound_selection_index = e.detail.value
				this.ifPlay = 0;
				this.initMusic()
			},
			articulatorySpeedChange(e){
				this.articulatory_speed_index = e.detail.value
				this.ifPlay = 0;
				this.initMusic()
			},
			operationSetClick(){
				this.$refs.popup.open()
			},
			closePopup() {
				this.$refs.popup.close()
			},
			initMusic(){
				this.backgroundAudioManager = uni.getBackgroundAudioManager()		
				var speaker = this.sound_selection_index*1 + 1;
				var speed = '1.0'
				if(this.articulatory_speed_index == 1){
					speed = '1.3'
				}else if(this.articulatory_speed_index == 2){
					speed = '0.7'
				}
				this.backgroundAudioManager.title = "["+this.info.dynasty+"] " + this.info.birth_year + " ~ " + this.info.death_year 
				this.backgroundAudioManager.epname = '作者集'
				this.backgroundAudioManager.singer = this.info.name
				this.backgroundAudioManager.coverImgUrl = config.coverImgUrl
				this.backgroundAudioManager.src = encodeURI("https://fanyi.sogou.com/reventondc/synthesis?text="+this.content+"&speed="+speed+"&lang=zh-CHS&from=translateweb&speaker="+speaker);
				this.backgroundAudioManager.onTimeUpdate (()=>{
					 var duration = this.backgroundAudioManager.duration;
					 var currentTime = this.backgroundAudioManager.currentTime;
					 this.duration = duration;
					 this.currentTime = currentTime;
					 this.chDuration[0] = Math.floor(Math.floor(duration)/60);
					 this.chDuration[1] = Math.floor(duration)%60;
					 this.chCurrentTime[0] = Math.floor(Math.floor(currentTime)/60);
					 this.chCurrentTime[1] = Math.floor(currentTime)%60;
				})
				// 加载中
				this.backgroundAudioManager.onWaiting(()=>{
					this.ifPlay = 0;
					console.log("加载中")
				})
				this.backgroundAudioManager.onPlay(() => {
					this.ifPlay = 1;
					console.log("开始播放")
				})
				// 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放
				this.backgroundAudioManager.onCanplay(()=>{
					this.ifPlay = 2;
					console.log("进入可以播放状态")
				})
				// 播放完成
				this.backgroundAudioManager.onEnded (()=>{
					this.ifPlay = 2;
					console.log("播放完成")
				})
				// 暂停事件
				this.backgroundAudioManager.onPause(()=>{
					this.ifPlay = 2;
					console.log("暂停事件")
				})
				// 播放失败
				this.backgroundAudioManager.onError(()=>{
					this.ifPlay = 3;
					console.log("播放失败")
				})
			},
			async playMusic(){
				if(this.ifPlay == 0){
					return;
				}
				if(this.ifPlay == 1){
					this.backgroundAudioManager.pause();
				}
				if(this.ifPlay == 2){
					if(this.duration == this.currentTime){
						this.backgroundAudioManager.seek(0);
					}
					this.backgroundAudioManager.play();
				}
				if(this.ifPlay == 3){
					this.ifPlay = 0;
					this.initMusic();
				}
			},
			changeProgress(e){
				this.backgroundAudioManager.seek(e.detail.value);
				this.backgroundAudioManager.play();
			},
			
			
			
			
			
			async init(){
				await this.getAuthorDetails();
				await this.getList();
			},
			async getAuthorDetails(){
				const res = await getAuthorDetails({id:this.id});
				if(res.status == 20000){
					uni.setNavigationBarTitle({title: res.data.name})
					this.info = res.data
					this.content = res.data.name.replace("·","。") + "。朝代，" + res.data.dynasty + "。" + res.data.desc.split("\r\n").join("")
					this.initMusic()
				}
			},
			async getList(){
				this.loading = true
				if(this.page == 1){
					this.list = []
					this.isData = true
				}
				let data = {
					limit:this.limit,
					page:this.page,
					author_id:this.id
				}
				if(this.itemListIndex > 0){
					data.kind = this.itemList[this.itemListIndex].value;
				}
				const res = await getWorkList(data);
				if(res.status === 20000){
					if(!this.list.length){
						this.list = res.data.list
					}else{
						this.list = [
							...this.list,
							...res.data.list
						]
					}
					this.total = res.data.total
					if(this.page >= Math.ceil(this.total/this.limit)){
						this.isData = false;
					}
				}
				this.loading = false
			},
			change(){
				this.current = this.current==0?-1:0
			},
			closeActionSheet: function() {
				this.showActionSheet = false
			},
			openActionSheet: function() {
				this.showActionSheet = true;
			},
			itemClick: function(e) {
				this.showActionSheet = false
				if(this.itemListIndex == e.index){
					return;
				}
				this.itemListIndex= e.index;
				this.page = 1
				this.getList() 
			},
			workDetails(id){
				navigateTo('../workDetails/workDetails?id='+id);
			},
		},
		onPageScroll(e) {
			this.scrollTop1 = e.scrollTop;
		},
		//下拉刷新
		async onPullDownRefresh() {
			this.page = 1
			await this.init() 
			uni.stopPullDownRefresh()
		},
		//上拉加载更多
		async onReachBottom() {
			if(this.isData == false || this.loading == true){
				return;
			}
			this.page += 1 
			await this.getList() 
		},
		onShareAppMessage(){
			return setShareAppMessage({
				title: this.info.name,
				path: "/pages/authorDetails/authorDetails?id="+this.info.id,
			})
		},
		onShareTimeline() {
		    return setShareAppMessage({
		    	title: this.info.name,
		    	path: "/pages/authorDetails/authorDetails?id="+this.info.id,
		    })
		}
	}
</script>

<style lang="scss" scoped>
@import 'authorDetails.scss';
</style>
