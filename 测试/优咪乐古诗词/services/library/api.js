import { request } from '../../utils/Request.js';
import { getStorageSync,setStorageSync } from '../../utils/uniApi.js';
// 图片
export async function getLibraryData() {
	let libraryData = getStorageSync('libraryData');
	if(!libraryData){
		libraryData = await request('/library/getLibraryData');
		setStorageSync('libraryData',libraryData);
	}
	return libraryData;
}