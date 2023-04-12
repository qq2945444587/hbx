import { request } from '../../utils/Request.js';
// 收藏作品
export async function setWorks(data) {
  return await request('/collection/setWorks', {
    data: data,
	method:'POST'
  });
}

// 收藏作品列表
export async function getWorksList(data) {
  return await request('/collection/getWorksList', {
    data: data
  });
}

// 收藏作者
export async function setAuthor(data) {
  return await request('/collection/setAuthor', {
    data: data,
	method:'POST'
  });
}

// 收藏作者列表
export async function getAuthorList(data) {
  return await request('/collection/getAuthorList', {
    data: data
  });
}