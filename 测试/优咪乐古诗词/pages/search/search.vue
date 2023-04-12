<template>
	<view class="container">
		<view class="s-searchbox">
			<view class="s-search-input">
				<s-icon name="search" :size='16' color='#333'></s-icon>
				<input confirm-type="search" placeholder="大家都在搜李白" :focus="true" auto-focus placeholder-class="s-input-plholder"
				 class="s-input" v-model.trim="key" @input="inputKey"/>
				<s-icon name="close-fill" :size='16' color='#bcbcbc' @tap="cleanKey" v-show="key"></s-icon>
			</view>
			<!-- <view class="s-cancle">取消</view> -->
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		<view v-show="key">
			<view class="s-result-box">
				<block v-for="(item,index) in searchList" :key="index">
					<s-list-cell :arrow="true" @click="searchClick(index)">
						<view class="s-item-box">
							{{item}}
						</view>
					</s-list-cell>
				</block>
			</view>
		</view>
		<view class="s-search-history" v-if="historyWorks.length>0">
			<view class="s-history-header">	
				<view class="s-search-title">搜索历史（古诗词）</view>
				<s-icon name="delete" :size='14' color='#333' @click="openActionSheet(1)" class="s-icon-delete"></s-icon>
			</view>
			<view class="s-history-content">
				<view v-for="(item,index) in historyWorks" :key="index" class="s-history-content-item">
					<s-tag type="gray" shape="circle" @click="searchTagClick(item,2)">{{item}}</s-tag>
				</view>
			</view>
		</view>
		
		<view class="s-search-history" v-if="historyAuthor.length>0">
			<view class="s-history-header">	
				<view class="s-search-title">搜索历史（作者）</view>
				<s-icon name="delete" :size='14' color='#333' @click="openActionSheet(2)" class="s-icon-delete"></s-icon>
			</view>
			<view class="s-history-content">
				<view v-for="(item,index) in historyAuthor" :key="index" class="s-history-content-item">
					<s-tag type="gray" shape="circle" @click="searchTagClick(item,1)">{{item}}</s-tag>
				</view>
			</view>
		</view>

		<view class="s-search-hot">
			<view class="s-hot-header">
				<view class="s-search-title">大家正在搜</view>
			</view>
			<view class="s-history-content">
				<view v-for="(item,index) in hot" :key="index" class="s-history-content-item">
					<s-tag type="gray" shape="circle" @click="searchTagClick(item.name,item.type)">{{item.name}}</s-tag>
				</view>
			</view>
		</view>
		<s-actionsheet :show="showActionSheet" :tips="tips" @click="itemClick" @cancel="closeActionSheet"></s-actionsheet>
	</view>

</template>

<script>
	import { trim } from '../../utils/util.js';
	import { navigateTo,setStorageSync,getStorageSync,removeStorageSync,setShareAppMessage } from '../../utils/uniApi.js';
	
	export default {
		data() {
			return {
				historyWorks: [],
				historyAuthor:[],
				hot: [
					{
						type:1,
						name:"李白",
					},
					{
						type:1,
						name:"杜甫",
					},
					{
						type:1,
						name:"李清照",
					},
					{
						type:1,
						name:"苏轼",
					},
					{
						type:1,
						name:"白居易",
					},
					{
						type:1,
						name:"李商隐",
					},
					{
						type:1,
						name:"王维",
					},
					{
						type:1,
						name:"陶渊明",
					},		
					{
						type:1,
						name:"屈原",
					},
					{
						type:1,
						name:"曹操",
					},
					{
						type:1,
						name:"王安石"
					},
				],
				key: "",
				showActionSheet: false,
				tips: "",
				searchList:[],
				showActionSheetIndex:0
			}
		},
		onShow() {
			this.historyWorks = getStorageSync('historyWorks');
			this.historyAuthor = getStorageSync('historyAuthor');
		},
		methods: {
			closeActionSheet: function() {
				this.showActionSheet = false
				this.tips = "";
				this.showActionSheetIndex = 0
			},
			itemClick(e) {
				let index = e.index;
				if (index == 0) {
					if(this.showActionSheetIndex == 1){
						removeStorageSync("historyWorks");
						this.historyWorks = []
					}else if(this.showActionSheetIndex == 2){
						removeStorageSync("historyAuthor");
						this.historyWorks = []
					}
					this.showActionSheet = false
					this.tips = "";
					this.showActionSheetIndex = 0
				}
			},
			openActionSheet(index) {
				this.showActionSheet = true
				this.showActionSheetIndex = index
				if(index == 1){
					this.tips = "确认清空搜索历史（古诗词）吗？";
				}else if(index == 2){
					this.tips = "确认清空搜索历史（作者）吗？";
				}
			},
			inputKey(e) {
				this.key = trim(e.detail.value);
				if (!this.key) {
					this.searchList = [];
					return;
				}
				//根据关键词查找
				let arr = []
				this.searchList = [
					'搜索古诗词：'+this.key,
					'搜索作者：'+this.key
				]
			},
			cleanKey() {
				this.key = ''
			},
			searchClick(index){
				if(index == 0){
					navigateTo('../works/works?key='+this.key);
					let historyWorks = [];
					historyWorks.push(this.key);
					let historyWorksStorage = getStorageSync('historyWorks');
					if(historyWorksStorage){
						for(let i=0;i<historyWorksStorage.length;i++){
							if(i<9){
								historyWorks.push(historyWorksStorage[i]);
							}
						}
					}
					setStorageSync('historyWorks',historyWorks);
					this.historyWorks = historyWorks
				}else{
					navigateTo('../author/author?key='+this.key);
					let historyAuthor = [];
					historyAuthor.push(this.key);
					let historyAuthorStorage = getStorageSync('historyAuthor');
					if(historyAuthorStorage){
						for(let i=0;i<historyAuthorStorage.length;i++){
							if(i<9){
								historyAuthor.push(historyAuthorStorage[i]);
							}
						}
					}
					setStorageSync('historyAuthor',historyAuthor);
					this.historyAuthor = historyAuthor
				}
			},
			searchTagClick(name,type){
				if(type == 1){
					navigateTo('../author/author?key='+name);
				}else{
					navigateTo('../works/works?key='+name);
				}
			}
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
@import 'search.scss';
</style>