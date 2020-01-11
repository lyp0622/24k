 //购物车数据
 import axios from "../utils/request"

 //获取用户购物车数据
 export const address = () => {
     return axios.get('/cart/index')
 }
 
 //购物车商品是否选中
 export const checked= (isChecked:number,productIds:string | number) => {
     return axios.post('/cart/checked',{isChecked,productIds})
 }
 
 //更新购物车数据
 export const update = (goodsId:number,id:number,number:number,productId:number) => {
     return axios.post('cart/update',{goodsId,id,number,productId})
 }

//  删除购物车商品
export const detail=(productIds:string,id:number)=>{
    return axios.post("/cart/delete",{productIds,id})
}


