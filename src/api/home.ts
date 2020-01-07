import request from '../utils/request';

//专题页面的初始渲染
export let getSpecialData = (params: any)=>{
    return  request.get('/topic/list',{page:params.totalPages,size:params.pageSize})
}

//专题页面的详情
export let getTypeDetail = (params: any)=>{
    return  request.get('/topic/detail',{id:params.id})
}