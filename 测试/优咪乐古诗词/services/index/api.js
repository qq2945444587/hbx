import { request } from '../../utils/Request.js';
// 图片
export async function getPictureList(data) {
  return await request('/index/getPictureList', {
    data: data,
  });
}
// 图片详情
export async function getPictureDetails(data) {
  return await request('/index/getPictureDetails', {
    data: data,
  });
}
// 通知
export async function getNoticeList(data) {
  return await request('/index/getNoticeList', {
    data: data,
  });
}

// 通知详情
export async function getNoticeDetails(data) {
  return await request('/index/getNoticeDetails', {
    data: data,
  });
}

// 首页名句卡片列表
export async function getQuoteCardList(data) {
  return await request('/index/getQuoteCardList');
}

// 作品详情
export async function getWorkDetails(data) {
  return await request('/work/getWorkDetails', {
    data: data,
  });
}

// 作品或名句列表
export async function getWorkList(data) {
  return await request('/work/getWorkList', {
    data: data,
  });
}

// 作者列表
export async function getAuthorList(data) {
  return await request('/author/getAuthorList', {
    data: data,
  });
}
// 作者详情
export async function getAuthorDetails(data) {
  return await request('/author/getAuthorDetails', {
    data: data,
  });
}