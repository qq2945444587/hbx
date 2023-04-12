<template>
	<page-meta
	  page-style="background: #fff"
	>
	</page-meta>
	<view>
		<view @tap="blackTo" class="back_button">
			<view class="myiconfont icon-fanhui"></view>
		</view>
		<view class="login_content">
			<view class="navigation-bar-title"><text>JOOM</text><text>XP</text></view>
		</view>
		<view class="form-content">
			<!-- 登录 -->
			<form v-if="type == 'login'" class="dl_form" @submit="formSubmit">
				<block v-if="type == 'login' && info.type == 'username'">
					<input type="text" :value="info.accounts" maxlength="16" name="accounts" placeholder="用户名" @input="accInpt" />
					<input type="text" password="true" :value="info.pwd" maxlength="16" name="pwd" placeholder="登录密码" @input="pwdInpt" />
					<view class="yzm_box">
						<input type="text" :value="info.verify" name="verify" placeholder="验证码" @input="yzmInpt" />
						<image @tap="loginewms" :src="login_ewm" mode=""></image>
					</view>
				</block>
				<block v-if="type == 'login' && info.type == 'sms'">
					<input type="text" :value="info.accounts" maxlength="16" name="accounts" placeholder="手机号码" @input="accInpt" />
					<view class="yzm_box">
						<input type="text" :value="info.verify" name="verify" placeholder="验证码" @input="yzmInpt" />
						<button @tap="regewm_bottom" :disabled="disableds" class="hq">{{dl_hq}}</button>
						<!-- <image @tap="loginewms" :src="login_ewm" mode=""></image> -->
					</view>
				</block>
				<block v-if="type == 'login' && info.type == 'email'">
					<input type="text" :value="info.accounts" maxlength="100" name="accounts" placeholder="电子邮箱" @input="accInpt" />
					<view class="yzm_box">
						<input type="text" :value="info.verify" name="verify" placeholder="验证码" @input="yzmInpt" />
					   <button @tap="regewm_bottom" :disabled="disableds" class="hq">{{dl_hq}}</button>
						<!-- <image @tap="loginewms" :src="login_ewm" mode=""></image> -->
					</view>
				</block>
				
				<button class="subButton" form-type="submit">{{buttonFont}}</button>
			</form>
			
			<!-- 注册 -->
			<form v-else class="dl_form" @submit="regformSubmit">
				<!-- 用户名 -->
				<block v-if="type !== 'login' && res_info.type == 'username'">
					<input type="text" :value="res_info.accounts" maxlength="16" name="accounts" placeholder="用户名" @input="regaccInpt" />
					<input type="text" password="true" :value="res_info.pwd" maxlength="16" name="pwd" placeholder="登录密码" @input="regpwdInpt" />
					<view class="yzm_box">
						<input type="text" :value="res_info.verify" name="verify" placeholder="验证码" @input="regyzmInpt" />
						<image @tap="regewms" :src="reg_ewm" mode=""></image>
					</view>
				</block>
				<!-- 手机号 -->
				<block v-if="type !== 'login' && res_info.type == 'sms'">
					<input type="text" :value="res_info.accounts" maxlength="16" name="accounts" placeholder="手机号码" @input="regaccInpt" />
					<view class="yzm_box">
						<input type="text" :value="res_info.verify" name="verify" placeholder="验证码" @input="regyzmInpt" />
						<!-- <image @tap="regewms" :src="reg_ewm" mode=""></image> -->
						<button @tap="regewm_bottom" :disabled="disableds" class="hq">{{reg_hq}}</button>
					</view>
					<input type="text" password="true" :value="res_info.pwd" maxlength="16" name="pwd" placeholder="登录密码" @input="regpwdInpt" />
				</block>
				
				<!-- 电子邮箱 -->
				<block v-if="type !== 'login' && res_info.type == 'email'">
					<input type="text" :value="res_info.accounts" maxlength="100" name="accounts" placeholder="电子邮箱" @input="regaccInpt" />
					<view class="yzm_box">
						<input type="text" :value="res_info.verify" name="verify" placeholder="验证码" @input="regyzmInpt" />
						<button @tap="regewm_bottom" class="hq" :disabled="disableds">{{reg_hq}}</button>
					<!-- 	<image @tap="regewms" :src="reg_ewm" mode=""></image> -->
					</view>
					<input type="text" password="true" :value="res_info.pwd" maxlength="16" name="pwd" placeholder="登录密码" @input="regpwdInpt" />
				</block>
				<button class="subButton" form-type="submit">{{buttonFont}}</button>
			</form>
			
			<view v-if="type == 'login'"  class="zh_class"><view>找回密码</view></view>
			<view class="qh_zc" @tap="zcDLButton">
				<view v-if="type == 'login'">还没账号？立即注册</view>
				<view v-else>已有账号？立即登录</view>
			</view>
			<view class="three_qh">
				<view @tap="type_Button('username')">账号密码</view>
				<view @tap="type_Button('sms')">短信验证码</view>
				<view @tap="type_Button('email')">邮箱验证码</view>
			</view>
			<!-- 验证码弹窗 -->
			<view class="yzm_fs" :class="{active: yzm_close}">
				<view @tap="yzm_close = false" class="zhezhao"></view>
				<view class="yzm_zz">
					<view class="yzm_box bg-white">
						<view class="yzm_box_botton">
							<input type="text" :value="verify" name="verify" placeholder="验证码" @input="regyzm_ver" />
							<image style="display: inline-block;width: 35%;height: 36px;" @tap="regewm_bottom(1)" :src="reg_ewm_bottom" mode=""></image>
						</view>
					</view>
					
					<button @tap="toYzm" style="margin: 0 30rpx 20rpx 30rpx;" class="subButton">确定</button>
				</view>
			</view>
			
			
			
			<view style="margin-top: 80rpx;" @tap="cancel">注销</view>
		</view>
	</view>
</template>

<script>
	import {removeCache, setCache, getCache} from "@/utils/cache.js"
	var value = '';
	// #ifdef MP-WEIXIN
		value = 'weixin';
	//#endif
	// #ifdef MP-ALIPAY
		value = 'alipay';
	//#endif
	// #ifdef MP-BAIDU
		value = 'baidu';
	//#endif
	// #ifdef MP-QQ
		value = 'qq';
	//#endif
	// #ifdef MP-TOUTIAO
		value = 'toutiao';
	//#endif
	// #ifdef MP-KUAISHOU
		value = 'kuaishou';
	//#endif
	// #ifdef H5 || APP
		value = 'h5';
	//#endif
	
	var d = new Date().getTime();
	var uid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
	});
	var cache_user_uuid_key
	var uuid = getCache('cache_user_uuid_key') || null;
	if (uuid == null) {
		setCache('cache_user_uuid_key', uid)
	}
	var token  = getCache('info').token || ''
	export default {
		data() {
			return {
				info:{
					accounts: '',
					pwd: '',
					verify:'',
					type:"username"
				},
				res_info:{
					accounts: '',
					pwd: '',
					verify:'',
					type:"username"
				},
				verify:'',
				login_ewm:'',
				reg_ewm:'',
				type:'login',
				buttonFont:'',
				reg_hq:'获取验证码',
				dl_hq:"获取验证码",
				yzm_close: false,
				reg_ewm_bottom:'',
				contdown_time:60,
				clear_time:null,
				disableds:false
			};
		},
		onLoad() {
			this.loginewms()
			this.buttonFont = '确认登录'
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: '账号密码登录'
			});
		},
		methods: {
			// 登录按钮
			formSubmit(e) {
			console.log('这个是登录的按钮',e)
				var uPattern = /^(?=.*[a-zA-Z])(?=.*\d).{4,16}$/;  // 用户名正则
				var pwd = /^(?=.*[a-zA-Z])(?=.*\d).{6,16}$/;  // 用户名正则
				// if (!uPattern.test(e.detail.value.accounts)) {
				// 	uni.showToast({
				// 		title:"用户名必须4到16位（字母，数字）组合",
				// 		icon:'none',
				// 		duration: 5000
				// 	});
				// 	return
				// }
				// if (!uPattern.test(e.detail.value.pwd)) {
				// 	uni.showToast({
				// 		title:"密码必须6到16位（字母，数字）组合",
				// 		icon:'none',
				// 		duration: 5000
				// 	});
				// 	return
				// }
				// if (e.detail.value.verify == '') {
				// 	uni.showToast({
				// 		title:"验证码不能为空",
				// 		icon:'none',
				// 		duration: 5000
				// 	});
				// 	return
				// }
				this.logins(e.detail.value)
				console.log('我通过了')
			},
			// 注册按钮
			regformSubmit(e) {
				console.log(e.detail.value)
				var uPattern = /^(?=.*[a-zA-Z])(?=.*\d).{4,16}$/;  // 用户名正则
				var pwd = /^(?=.*[a-zA-Z])(?=.*\d).{6,16}$/;  // 用户名正则
				// if (!uPattern.test(e.detail.value.accounts)) {
				// 	uni.showToast({
				// 		title:"用户名必须4到16位（字母，数字）组合",
				// 		icon:'none',
				// 		duration: 5000
				// 	});
				// 	return
				// }
				// if (!uPattern.test(e.detail.value.pwd)) {
				// 	uni.showToast({
				// 		title:"密码必须6到16位（字母，数字）组合",
				// 		icon:'none',
				// 		duration: 5000
				// 	});
				// 	return
				// }
				// if (e.detail.value.verify == '') {
				// 	uni.showToast({
				// 		title:"验证码不能为空",
				// 		icon:'none',
				// 		duration: 5000
				// 	});
				// 	return
				// }
				this.regs(e.detail.value)
			},
			type_Button(e) {
				console.log(e)
				this.info = {
					accounts: '',
					pwd: '',
					verify:'',
					type:""
				}
				this.res_info = {
					accounts: '',
					pwd: '',
					verify:'',
					type:""
				}
				this.verify = ''
				this.disableds = false
				this.reg_hq = '获取验证码'
				this.dl_hq = "获取验证码"
				 clearInterval(this.clear_time)
				// this.yzm_close = false
				if (e !==null) {
					this.info.type = e
					this.res_info.type = e
				}
				if (this.type == 'login') {
					this.loginewms()
				} else if(this.type == 'reg') {
					this.regewms() 
				}
				
			},
			async yzm_number() {
				const param = {
					accounts:this.res_info.accounts,
					type: this.res_info.type,
					verify: this.verify
				}
				const data = await this.$api.regyzm(param);
				if (data.code == 0) {
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon:'none'
					});
					this.yzm_close = false
					this.disableds = false
					var that = this
					var time = this.contdown_time;
					clearInterval(this.clear_time)
					this.clear_time = setInterval(function() {
						if (time <= 1) {
							clearInterval(that.clear_time);
							that.reg_hq = '获取验证码'
							that.disableds = false
						} else {
							time--;
							that.reg_hq = '剩余' + time + '秒'
							that.disableds = true
						}
					}, 1000);
				} else {
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon:'none'
					});
				}
			},
			async yzm_login_number() {
				const param = {
					accounts: this.info.accounts,
					type: this.info.type,
					verify: this.verify
				}
				const data = await this.$api.regyzm_login(param);
				if (data.code == 0) {
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon:'none'
					});
					this.yzm_close = false
					this.disableds = false
					var that = this
					var time = this.contdown_time;
					clearInterval(this.clear_time)
					this.clear_time = setInterval(function() {
						if (time <= 1) {
							clearInterval(that.clear_time);
							that.dl_hq = '获取验证码'
							that.disableds = false
						} else {
							time--;
							that.dl_hq = '剩余' + time + '秒'
							that.disableds = true
						}
					}, 1000);
				} else {
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon:'none'
					});
				}
			},
			// 给手机号或者邮箱发送验证码
			toYzm(){
				if (this.type == 'login') {
					this.yzm_login_number()
				} else {
					this.yzm_number()
				}
				// this.disableds = false
				// var that = this
				// var time = this.contdown_time;
				// if (this.type !== 'login' && this.res_info.type == 'sms') {
				// 	this.yzm_number()
				// }
				// if (this.type !== 'login' && this.res_info.type == 'email') {
				// 	this.yzm_number()
				// }
			},
			// 获取注册的邮箱和手机的验证码二维码
			regewm_bottom(e) {
				if (this.type !== 'login' && this.res_info.type == 'sms') {
					if (this.res_info.accounts == '') {
						uni.showToast({
							title: '手机号不能为空',
							duration: 2000,
							icon:'none'
						});
						return
					}
				}
				if (this.type == 'login' && this.info.type == 'sms') {
					if (this.info.accounts == '') {
						uni.showToast({
							title: '手机号不能为空',
							duration: 2000,
							icon:'none'
						});
						return
					}
				}
				if (this.type !== 'login' && this.res_info.type == 'email') {
					if (this.res_info.accounts == '') {
						uni.showToast({
							title: '电子邮箱不能为空',
							duration: 2000,
							icon:'none'
						});
						return
					}
				}
				if (this.type == 'login' && this.info.type == 'email') {
					if (this.info.accounts == '') {
						uni.showToast({
							title: '电子邮箱不能为空',
							duration: 2000,
							icon:'none'
						});
						return
					}
				}
				
				if (e !== 1) {
				 this.yzm_close = !this.yzm_close	
				}
				let t = parseInt(new Date().getTime() / 1000)
				console.log('触发了', uuid)
				if (this.type !== 'login') {
					this.reg_ewm_bottom = 'https://d1.shopxo.vip/api.php?s=user/userverifyentry&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uuid +'&ajax=ajax&type=user_reg&t=' + t
				} else {
					this.reg_ewm_bottom = 'https://d1.shopxo.vip/api.php?s=user/userverifyentry&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uuid +'&ajax=ajax&type=user_login&t=' + t
				}
			
			   console.log(this.reg_ewm_bottom)
			},
			// 登录获取二维码
			loginewms() {
				let t = parseInt(new Date().getTime() / 1000)
				console.log('触发了')
				this.login_ewm = 'https://d1.shopxo.vip/api.php?s=user/userverifyentry&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uuid +'&ajax=ajax&type=user_login&t=' + t
			  
			},
			// 注册获取二维码
			regewms() {
				let t = parseInt(new Date().getTime() / 1000)
				this.reg_ewm = 'https://d1.shopxo.vip/api.php?s=user/userverifyentry&system_type=default&application=app&application_client_type='+ value +'&token='+ token + '&uuid=' + uuid +'&ajax=ajax&type=user_reg&t=' + t
			},
			// 图片验证码事件
			image_verify(e) {
				if (e == 'login') {
					this.loginewms()
				} else {
					this.regewms()
				}
			},
			zcDLButton() {
				this.type = this.type == 'login'?'reg':'login'
				this.buttonFont = this.type == 'reg'?'确认注册':'确认登录'
				console.log(this.type)
				this.image_verify(this.type)
			},
			accInpt(e) {
				this.info.accounts = e.detail.value
			},
			pwdInpt(e) {
				this.info.pwd = e.detail.value
			},
			yzmInpt(e) {
				this.info.verify = e.detail.value
			},
			regaccInpt(e) {
				this.res_info.accounts = e.detail.value
			},
			regpwdInpt(e) {
				this.res_info.pwd = e.detail.value
			},
			regyzmInpt(e) {
				this.res_info.verify = e.detail.value
			},
			regyzm_ver(e) {
				this.verify = e.detail.value
			},
			cancel() {
				var that = this
				uni.showModal({
					title: '温馨提示',
					content: '确定要注销账号吗?注销后不能还原',
					success: function (res) {
						if (res.confirm) {
							that.logouts()
							console.log('用户点击确定');
						} else if (res.cancel) {
							
						}
					}
				})
			},
			// 登录
			async logins(e) {
				e.type = this.res_info.type
				const data = await this.$api.login(e);
				if (data.code == 0) {
				  setCache('info', data.data)
				  uni.showToast({
					title: '登录成功',
					duration: 2000,
					icon:'none'
				  });
				  setTimeout(function(){
				  let canNavBack = getCurrentPages()
				  if( canNavBack && canNavBack.length>1) {  
					  uni.navigateBack() 
				  } else {  
					  history.back();
				  }
				 //  uni.reLaunch({
					// url: '/pages/my/my'
				 //  });
				  },2000)
				} else {
					uni.showToast({
						title: data.msg,
						duration: 2000,
						icon:'none'
					});
				}
			},
			// 注册
			async regs(e) {
				console.log(e)
				e.type = this.res_info.type
				e.referrer = 0
			  const data = await this.$api.reg(e);
			  if (data.code == 0) {
				  setCache('info', data.data)
				  uni.showToast({
				  	title: data.msg,
				  	duration: 2000,
					icon:'none'
				  });
				  setTimeout(function(){
					  let canNavBack = getCurrentPages()
					  if( canNavBack && canNavBack.length>1) {  
						  uni.navigateBack() 
					  } else {  
						  history.back();
					  }
				  // uni.reLaunch({
				  // 	url: '/pages/my/my'
				  // });
				  },2000)
			  } else {
				  uni.showToast({
				  	title: data.msg,
				  	duration: 2000,
				  	icon:'none'
				  });
			  }
			},
			// 返回
			blackTo() {
				  uni.navigateBack();
			},
			// 账户注销
			async logouts() {
			  const data = await this.$api.logout();
			  console.log(data)
			  if (data.code == 0) {
				 removeCache('info')
				  uni.showToast({
				  	title: '账户注销成功',
				  	duration: 2000,
				  	icon:'none'
				  });
				   setTimeout(function(){
				   uni.reLaunch({
					url: '/pages/index/index'
				   });
				  },2000)
			  }
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '@/pages/login/login.css';
</style>
