<template>
	<view class="container">
		<view class="s-header-box">
			<view class="s-searchbox">
				<view class="s-search-input">
					<s-icon name="search" :size='16' color='#333'></s-icon>
					<input confirm-type="search" placeholder="搜索" placeholder-class="s-input-plholder"
					 class="s-input" v-model.trim="key" @input="inputKey"/>
					<s-icon name="close-fill" :size='16' color='#bcbcbc' @tap="cleanKey" v-show="key"></s-icon>
				</view>
				<view class="s-cancle" @tap="complete">确定</view>
			</view>
			<view class="s-header-bottom">
				<view class="s-bottom-item" :class="[proDropIndex==0?'s-btmItem-active':'']" @tap="btnDropChange(0)">
					<view class="s-bottom-text" :class="[proDropIndex==0?'s-active':'']">课本</view>
					<s-icon :name="proDropIndex==0?'arrowup':'arrowdown'" :size="14" :color="proDropIndex==0?'#5677fc':'#444'"></s-icon>
				</view>
				<view class="s-bottom-item" :class="[proDropIndex==1?'s-btmItem-active':'']" @tap="btnDropChange(1)">
					<view class="s-bottom-text" :class="[proDropIndex==1?'s-active':'']">朝代</view>
					<s-icon :name="proDropIndex==1?'arrowup':'arrowdown'" :size="14" :color="proDropIndex==1?'#5677fc':'#444'"></s-icon>
				</view>
				<view class="s-bottom-item" :class="[proDropIndex==2?'s-btmItem-active':'']" @tap="btnDropChange(2)">
					<view class="s-bottom-text" :class="[proDropIndex==2?'s-active':'']">节气</view>
					<s-icon :name="proDropIndex==2?'arrowup':'arrowdown'" :size="14" :color="proDropIndex==2?'#5677fc':'#444'"></s-icon>
				</view>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<official-account></official-account>
		<!-- #endif -->
		
		<!--header 顶部下拉选择框-->
		
		<s-top-dropdown :show="dropShow" :paddingbtm="110" :translatey="248" @close="btnCloseDrop">
			<scroll-view class="s-scroll-box" scroll-y scroll-with-animation :scroll-top="scrollTop">
				<view class="s-seizeaseat-20"></view>
				<view class="s-drop-item" :class="[item.selected?'s-bold':'']" v-for="(item,index) in proDropData" :key="index"
				 @tap.stop="btnSelected" :data-index="index">
					<s-icon name="check" :size="16" color="#5677fc" :bold="true" v-if="item.selected"></s-icon>
					<text class="s-ml s-middle">{{item.name}}</text>
				</view>
				<view class="s-seizeaseat-30"></view>
			</scroll-view>
			<view class="s-drop-btnbox">
				<view class="s-drop-btn s-button-white" hover-class="s-button-white_hover" :hover-stay-time="150" @tap="reset">重置</view>
				<view class="s-drop-btn s-button-primary" hover-class="s-button-hover" :hover-stay-time="150" @tap="btnCompleteDrop">确定</view>
			</view>
		</s-top-dropdown>
		<!--header 顶部下拉选择框-->
		<view class="s-list-box" :style="{ paddingTop: top + 'px' }">
			<s-list-view :title="'总收藏古诗词或名句（'+total+'）'">
				<s-list-cell v-for="(item,index) in list" :key="index">
					<view class="s-list-item" @click="workDetails(item.work_one.id)">
						<view class="s-list-item-title">收藏时间：{{item.created_at}}</view>
						<view class="s-item-info">
							<view class="s-item-name">
								<!-- {{item.title}} -->
								<rich-text :nodes="item.work_one.title"></rich-text>
							</view>
							<view class="s-item-author">
								[{{item.work_one.dynasty}}] {{item.work_one.author}}
							</view>
						</view>
						<view class="s-item-content">
							{{item.work_one.quote?item.work_one.quote:item.work_one.content}}
						</view>
					</view>
				</s-list-cell>	
			</s-list-view>
			<s-loadmore :index="3" type="green" v-if="loading"></s-loadmore>
			<s-nomore v-if="!isData"></s-nomore>
		</view>	
		 <s-scroll-top :scrollTop="scrollTop1" :isIndex="true"></s-scroll-top>
	</view>
</template>

<script>
	import { getLibraryData } from '../../services/library/api.js';
	import { getWorksList } from '../../services/collection/api.js';
	import { navigateTo,setShareAppMessage } from '../../utils/uniApi.js';
	import { trim } from '../../utils/util.js';
	export default {
		data() {
			return {
				top: uni.upx2px(260), //标题图标距离顶部距离
				key:'',
				proDropData: [],
				proDropIndex: -1,
				dropShow: false,
				scrollTop: 0,
				proDropList:[],
				limit:20,
				page:1,
				total:0,
				isData:true,
				loading:false,
				list:[],
				scrollTop1:0,
			}
		},
		onLoad: function() {
			this.init();
		},
		methods: {
			async init(){
				await this.getLibraryData();
				await this.getList();
			},
			async getList(){
				this.loading = true
				if(this.page == 1){
					this.list = []
					this.isData = true
				}
				let data = {
					limit:this.limit,
					page:this.page
				}
				let textbook_id_arr = [];
				for(let i = 0;i<this.proDropList[0].list.length;i++){
					if(this.proDropList[0].list[i].selected){
						textbook_id_arr.push(this.proDropList[0].list[i].id)
					}
				}
				if(textbook_id_arr.length>0){
					data.textbook_id = textbook_id_arr.join(',')
				}
				let dynasty_id_arr = [];
				for(let i = 0;i<this.proDropList[1].list.length;i++){
					if(this.proDropList[1].list[i].selected){
						dynasty_id_arr.push(this.proDropList[1].list[i].id)
					}
				}
				if(dynasty_id_arr.length>0){
					data.dynasty_id = dynasty_id_arr.join(',')
				}
				let solar_term_id_arr = [];
				for(let i = 0;i<this.proDropList[2].list.length;i++){
					if(this.proDropList[2].list[i].selected){
						solar_term_id_arr.push(this.proDropList[2].list[i].id)
					}
				}
				if(solar_term_id_arr.length>0){
					data.solar_term_id = solar_term_id_arr.join(',')
				}
				if(this.key){
					data.key = this.key
				}
				const res = await getWorksList(data);
				if(res.status === 20000){
					if(this.key){
						for(let i = 0;i<res.data.list.length;i++){
							res.data.list[i].work_one.title = res.data.list[i].work_one.title.replace(this.key, '<span style="color:#ff6b00;font-weight: bold;">'+this.key+'</span>')
						}
					}
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
			async getLibraryData(){
				const res = await getLibraryData();
				let proDropList = [];
				if(res.status == 20000){
					let list1 = [];
					for(let i = 0;i<res.data[0].children.length;i++){
						res.data[0].children[i].selected = false;
						list1.push(res.data[0].children[i])
					}
					for(let i = 0;i<res.data[1].children.length;i++){
						res.data[1].children[i].selected = false;
						list1.push(res.data[1].children[i])
					}
					for(let i = 0;i<res.data[2].children.length;i++){
						res.data[2].children[i].selected = false;
						list1.push(res.data[2].children[i])
					}
					let list2 = [];
					for(let i = 0;i<res.data[8].children.length;i++){
						res.data[8].children[i].selected = false;
						list2.push(res.data[8].children[i])
					}
					
					let list3 = [];
					for(let i = 0;i<res.data[15].children.length;i++){
						res.data[15].children[i].selected = false;
						list3.push(res.data[15].children[i])
					}
					proDropList = [
						{
							list:list1
						},
						{
							list:list2
						},
						{
							list:list3
						}
					];
				}
				this.proDropList = proDropList;
			},
			btnDropChange(index) {
				this.proDropData = [...this.proDropList[index].list];
				this.proDropIndex = index;
				this.dropShow = true;
			},
			btnSelected: function(e) {
				let index = e.currentTarget.dataset.index;
				let obj = this.proDropData[index];
				obj.selected = !obj.selected
				this.proDropData[index] = obj
			},
			reset() {
				let arr = this.proDropData;
				for (let item of arr) {
					item.selected = false;
				}
				this.proDropData = arr
				this.proDropList[this.proDropIndex].list = this.proDropData;
				this.page = 1
				this.getList()
			},
			btnCloseDrop() {
				this.scrollTop = 1;
				this.$nextTick(() => {
					this.scrollTop = 0
				});
				this.dropShow = false;
				this.proDropIndex = -1;
			},
			btnCompleteDrop(){
				this.scrollTop = 1;
				this.$nextTick(() => {
					this.scrollTop = 0
				});
				this.dropShow = false;
				this.proDropIndex = -1;
				this.page = 1
				this.getList()
			},
			workDetails(id){
				navigateTo('../workDetails/workDetails?id='+id);
			},
			inputKey(e) {
				this.key = trim(e.detail.value);
			},
			cleanKey() {
				this.key = ''
				this.page = 1
				this.getList()
			},
			complete(){
				if(this.key == ""){
					return;
				}
				this.page = 1
				this.getList()
			}
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
		}
	}
</script>
<style>
/* 隐藏scroll-view滚动条*/
::-webkit-scrollbar {
	width: 0;
	height: 0;
	color: transparent;
}
</style>
<style lang="scss" scoped>
@import 'collectionWorksList.scss';
</style>
