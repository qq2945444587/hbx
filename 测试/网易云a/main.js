import App from './App'
import store from '@/store/store'
import Vue from 'vue'
// #ifndef VUE3
Vue.config.productionTip = false
App.mpType = 'app'

import api from "@/api/index"
Vue.prototype.$api = api;
// 全局注册
import navigationCustom from '@/components/struggler-navigationCustom/navigation-custom'
Vue.component('navigation-custom', navigationCustom)
import taberB from '@/components/taber/taber'
Vue.component('taber-b', taberB)

const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
// #endif