import request from "../util/request"
import { number } from "prop-types";
export function HomeList(){
    return request.get("/")
}

export function liveHome(params:any){
    // console.log(params,"我的参数")
    let id=params
return request.get('/goods/list',params)
    // id:example
}
export function getCategory(params:any){
    console.log(params,"组件的拆按惨")
       return request.get("/goods/category",params)
}