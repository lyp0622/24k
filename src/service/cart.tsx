 //购物车数据
 import Axios from "../utils/request"

 //获取用户购物车数据
 export const address = () => {
     return Axios.get('/cart/index')
 }
 
 //购物车商品是否选中
 export const checked= (isChecked:number,productIds:string | number) => {
     return Axios.post('/cart/checked',{isChecked,productIds})
 }
 
 //更新购物车数据
 export const update = (goodsId:number,id:number,number:number,productId:number) => {
     return Axios.post('cart/update',{goodsId,id,number,productId})
 }