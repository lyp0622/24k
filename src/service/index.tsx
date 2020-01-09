import request from '../utils/request'

export let getcategory=()=>{
    return request.get('/goods/category')
}