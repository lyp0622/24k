import request from '../util/request'

// 获取首页数据
export const getData = ()=>{
    return request('/');
}