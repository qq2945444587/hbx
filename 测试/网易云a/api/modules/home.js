import request from '@/utils/request'
import {getCache} from "@/utils/cache.js"



var timestamp = new Date().getTime();
/**
 *  首页的轮播图 banner
 *  @param  {Number} 
 *  @return {Array}
 * 
 */
export const getBanner = (params) => {
	var num = 0
	switch (uni.getSystemInfoSync().platform) {  //uni.getSystemInfoSync().platform  判断编译环境
		case 'android':
			num = 1
			break;
		case 'ios':
			num = 2
			break;
		default:
			break;
	}
	return request.get(`/banner?type=${num}&timestamp=${timestamp}`, params)
}
/**
 *  首页 发现好歌单  list
 *  @param  {Number} 
 *  @return {Array}
 */
export const getRecommendList = (params) => {
	return request.post('/personalized', {...params,timestamp: timestamp,cookie: getCache('COOKIE')})
}
/**
 *  首页 热门歌手
 *  @return {Array}
 */
export const getHotSingerList = () => {
	return request.post('/top/artists', {
		offset: 0,
		limit: 18,
		timestamp: timestamp
	})
}
/**
 *  首页 每日推荐歌单 ---需要登录
 *  @return {Array}
 */
export const getDayRecommendMusicList = () => {
	return request.get(`/recommend/resource?timestamp=${timestamp}`)
}
/**
 *  首页 每日推荐歌曲 ---需要登录
 *  @return {Array}
 */
export const getDayRecommendList = () => {
	return request.get(`/recommend/songs?timestamp=${timestamp}`)
}
/**
 *  首页 新歌 list
 *  @return {Array}
 */
export const getNewSongList = () => {
	return request.get(`/personalized/newsong?timestamp=${timestamp}`)
}



// 歌单 ( 网友精选碟 )
export const getPlaylist =(params) =>{
    return request.get(`/top/playlist?timestamp=${timestamp}`, params)
}

// 歌单分类
export const getCatlist =(params) =>{
    return request.get(`/playlist/catlist?timestamp=${timestamp}`, params)
}


// 游客登录
export const anonimous =(params) =>{
    return request.post(`/register/anonimous`, {
		timestamp: timestamp
	})
}


// 用户登录状态
export const status =(params) =>{
    return request.get(`/login/status?timestamp=${timestamp}`, params)
}



/**
 *  根据id去获取音乐url
 *  @param  {Number} id
 *  @return {Array}
 */
export const getMusicUrl = (params) => {
  return request.get('/song/url', params)
}






/**
 *  我的页面
 */
// 最近播放记录
export const record =(params) =>{
	params = {
		uid: getCache('userId'),
		type: 1,
		timestamp: timestamp
	}
    return request.post(`/user/record`, params)
}