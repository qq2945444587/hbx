<template>
	<view class="container" v-if="info">
		<view class="s-header-box">
			<view class="s-header-title">
				<view class="s-header-title-item" v-for="(item,index) in info.title_arr" :key="index">
					<view class="s-header-title-pinyin" :style="{padding: item.pinyin?'0 6rpx':''}">{{item.pinyin}}</view>
					<view class="s-header-title-value">{{item.value}}</view>
				</view>
			</view>
			<view class="s-header-author">
				<view class="s-header-author-item">
					<view class="s-header-author-pinyin"></view>
					<view class="s-header-author-value">【</view>
				</view>
				<view class="s-header-author-item" v-for="(item,index) in info.dynasty_arr" :key="index">
					<view class="s-header-author-pinyin" :style="{padding: item.pinyin?'0 6rpx':''}">{{item.pinyin}}</view>
					<view class="s-header-author-value">{{item.value}}</view>
				</view>
				<view class="s-header-author-item">
					<view class="s-header-author-pinyin"></view>
					<view class="s-header-author-value">】</view>
				</view>
				<view class="s-header-author-item" v-for="(item,index) in info.author_arr" :key="index">
					<view class="s-header-author-pinyin" :style="{padding: item.pinyin?'0 6rpx':''}">{{item.pinyin}}</view>
					<view class="s-header-author-value">{{item.value}}</view>
				</view>
			</view>
			<view class="s-header-content">
				<view class="s-header-content-item" v-for="(item,index) in info.content_arr" :key="index">
					<view class="s-header-content-item-list" v-for="(it,ind) in item" :key="ind">
						<view class="s-header-content-item-list-pinyin" :style="{padding: it.pinyin?'0 6rpx':''}">{{it.pinyin}}</view>
						<view class="s-header-content-item-list-value">{{it.value}}</view>
					</view>
					<!-- {{item}} -->
					<!-- <rich-text :nodes="item"></rich-text> -->
				</view>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		<s-list-cell :arrow="true" v-if="info.author_id" @click="authorDetails">
			<view class="s-item-box">
				<s-icon name="friendadd-fill" :size="23" color="#ed3f14"></s-icon>
				<view class="s-list-cell_name">{{info.author}}</view>
				<view class="s-right">查看更多作品</view>
			</view>
		</s-list-cell>
		<scroll-view id="tab-bar" v-if="tabBars.length" scroll-with-animation class="s-scroll-h" :scroll-x="true" :show-scrollbar="false"
		 :scroll-into-view="scrollInto">
			<view v-for="(tab, index) in tabBars" :key="tab.id" class="s-tab-item" :id="tab.id" :data-current="index" @click="tabClick">
				<!-- #ifdef APP-PLUS -->
				<text class="s-tab-item-title" :class="{ 's-tab-item-title-active': tabIndex == index }">{{ tab.name }}</text>
				<!-- #endif -->
		
				<!-- #ifndef APP-PLUS -->
				<view class="s-tab-item-title" :class="{ 's-tab-item-title-active': tabIndex == index }">{{ tab.name }}</view>
				<!-- #endif -->
			</view>
		</scroll-view>
		<view class="s-line-h" v-if="tabBars.length"></view>
		<view class="s-content-box" v-if="tabBars.length">
			<swiper :current="tabIndex" class="s-swiper-box" :duration="300" @change="tabChange" :style="{height:swiperHeight}">
				<swiper-item class="s-swiper-item" v-for="(tab, index1) in newsList" :key="index1">
					<scroll-view class="s-scroll-v" scroll-y>
						<view style="min-height:101%" :id="'info'+index1">
							<view v-for="(tabContent, index2) in tab.content" :key="index2" class="s-scroll-content">
								{{tabContent}}
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
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
				<view class="s-operation-item" @click="operationSetClick">
					<s-icon name="setup" :size="22" color="#999999"></s-icon>
				</view>
				<view class="s-operation-item"  @click="openActionSheet">
					<s-icon name="link" :size="22" color="#999999"></s-icon>
				</view>
				<view class="s-operation-item" @click="playMusic">
					<s-icon :name="['loading','suspend','play','about'][ifPlay]" :size="38" color="#ff6b00" :class="ifPlay==0?'s-loading-360':''"></s-icon>
				</view>
				<view class="s-operation-item" @click="setCollectionWorks">
					<s-icon :name="info.collection_status?'like-fill':'like'" :size="22" :color="info.collection_status?'#ff6b00':'#999999'"></s-icon>
				</view>
				<view class="s-operation-item" @click="workDetailsPoster">
					<s-icon name="partake" :size="22" color="#999999"></s-icon>
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
		<s-actionsheet :show="showActionSheet" :tips="tips" :item-list="itemList" :mask-closable="maskClosable" :color="color"
		 :size="size" :is-cancel="isCancel" @click="downloadAudio" @cancel="closeActionSheet"></s-actionsheet>
		 <s-scroll-top :scrollTop="scrollTop1" :isIndex="true" :isShare="true"></s-scroll-top>
	</view>
</template>

<script>
	import config from '../../config/config.js';
	import { getWorkDetails } from '../../services/index/api.js';
	import { setWorks } from '../../services/collection/api.js';
	import { setShareAppMessage,navigateTo,showToast,getStorageSync,setStorageSync } from '../../utils/uniApi.js';
	import sui from "@/components/common/s-clipboard/s-clipboard.js"
	export default {
		data() {
			return {
				id:null,
				info:null,
				scrollInto: '',
				tabIndex: 0,
				swiperHeight:'0px',
				tabBars: [],
				newsList:[],
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
				showActionSheet: false,
				maskClosable: true,
				tips: "复制音频地址使用浏览器打开",
				itemList: [{
					text: "复制音频地址",
					color: "#E3302D"
				}],
				color: "#9a9a9a",
				size: 26,
				isCancel: true,
				isLogin:false,
				scrollTop1:0,
				zhToPinYin: null,
			}
		},
		onLoad(options) {
			uni.getBackgroundAudioManager().stop();
			this.id = options.id;
			if(!this.id){
				const scene = decodeURIComponent(options.scene)
				if(scene){
					const sceneArr = scene.split("&")
					this.id = sceneArr[0].split("=")[1]
					if(sceneArr[1]){
						setStorageSync('pid',sceneArr[1].split("=")[1]) 
					}
				}
			}
			this.init();
		},
		onShow() {
			if(this.isLogin){
				uni.getBackgroundAudioManager().stop();
				this.init();
			}
		},
		methods: {
			workDetailsPoster(){
				navigateTo('../workDetailsPoster/workDetailsPoster?id='+this.id)
			},
			async setCollectionWorks(){
				if(!getStorageSync('userInfo')){
					this.isLogin = true;
					navigateTo('../login/login');
					return;
				}
				const res = await setWorks({id:this.info.id});
				if(res.status == 20000){
					this.info.collection_status = !this.info.collection_status
				}
				showToast({title:res.message});
			},
			closeActionSheet() {
				this.showActionSheet = false;
			},
			openActionSheet() {
				this.showActionSheet = true;
			},
			downloadAudio(event){
				this.showActionSheet = false;
				sui.getClipboardData(encodeURI(this.backgroundAudioManager.src), (res) => {
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
				this.backgroundAudioManager.title = this.info.author
				this.backgroundAudioManager.epname = '诗词'
				this.backgroundAudioManager.singer = this.info.title 
				this.backgroundAudioManager.coverImgUrl = config.coverImgUrl
				console.log(this.content)
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
				// 开始播放
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
				this.backgroundAudioManager.onError((err)=>{
					console.log(err)
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
			authorDetails(){
				navigateTo('../authorDetails/authorDetails?id='+this.info.author_id)
			},
			async init(){
				const res = await getWorkDetails({id:this.id});
				let tabBars = [];
				let newsList = [];
				if(res.status == 20000){
					uni.setNavigationBarTitle({title: res.data.title})
					let content = "";
					if(res.data.content){
						content = res.data.title.replace("·","。") + "。" + res.data.author + "。" + res.data.content.split("\r\n").join("")
						
						res.data.content = res.data.content.split("\r\n")
						if(res.data.quote){
							for(let i=0;i<res.data.content.length;i++){
								if(res.data.content[i].indexOf(res.data.quote) != -1){
									res.data.content[i] = res.data.content[i].replace(res.data.quote, '<span style="color:#ff6b00;font-weight: bold;">'+res.data.quote+'</span>')
								}
							}
						}
					}
					if(res.data.content_tr){
						res.data.content_tr = res.data.content_tr.split("\r\n")
						if(res.data.quote_tr){
							for(let i=0;i<res.data.content_tr.length;i++){
								if(res.data.content_tr[i].indexOf(res.data.quote_tr) != -1){
									res.data.content_tr[i] = res.data.content_tr[i].replace(res.data.quote_tr, '<span style="color:#ff6b00;font-weight: bold;">'+res.data.quote_tr+'</span>')
								}
							}
						}
					}
					if(res.data.intro){
						tabBars.push({
							'id':1,
							'name':'评析'
						})
						newsList.push({
							'id':1,
							'content': res.data.intro.split("\r\n"),
							'content_tr':res.data.intro_tr?res.data.intro_tr.split("\r\n"):''
						})
					}
					if(res.data.annotation){
						tabBars.push({
							'id':2,
							'name':'注释'
						})
						newsList.push({
							'id':2,
							'content': res.data.annotation.split("\r\n"),
							'content_tr':res.data.annotation_tr?res.data.annotation_tr.split("\r\n"):''
						})
					}
					if(res.data.translation){
						tabBars.push({
							'id':3,
							'name':'译文'
						})
						newsList.push({
							'id':3,
							'content': res.data.translation.split("\r\n"),
							'content_tr':res.data.translation_tr?res.data.translation_tr.split("\r\n"):''
						})
					}
					
					if(res.data.master_comment){
						tabBars.push({
							'id':4,
							'name':'辑评'
						})
						newsList.push({
							'id':4,
							'content': res.data.master_comment.split("\r\n"),
							'content_tr':res.data.master_comment_tr?res.data.master_comment_tr.split("\r\n"):''
						})
					}
					this.info = res.data;
					this.content = content
					this.initMusic()
				}
				this.tabBars = tabBars
				this.newsList = newsList
				if(tabBars.length>0){
					setTimeout(()=>{
						this.getSwiperHeight(0)
					},50)
				}
			},
			getSwiperHeight(index){
				const query = uni.createSelectorQuery().in(this);
				query.select('#info'+index).boundingClientRect(data => {
				  this.swiperHeight = data.height + 50 + 'px'
				}).exec();
			},
			tabClick(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.switchTab(index);
			},
			switchTab(index) {
				if (this.tabIndex === index) return;
				this.tabIndex = index;
				this.scrollInto = 'id' + this.tabBars[index].id;
				this.getSwiperHeight(index)
			},
			tabChange(e) {
				if (e.detail.source == 'touch') {
					let index = e.target.current || e.detail.current;
					this.switchTab(index);
				}
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
		onShareAppMessage(){
			return setShareAppMessage({
				title: this.info.title,
				path: "/pages/workDetails/workDetails?id="+this.info.id,
			})
		},
		onShareTimeline() {
		    return setShareAppMessage({
		    	title: this.info.title,
		    	path: "/pages/workDetails/workDetails?id="+this.info.id,
		    })
		}
	}
</script>
<style lang="scss" scoped>
@import 'workDetails.scss';
</style>
