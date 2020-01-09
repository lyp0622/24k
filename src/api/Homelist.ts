import request from "../utils/request"
import { number } from "prop-types";
export function HomeList(){
    return request.get("/")
}

export function liveHome(params:any){
    console.log(params,"我的参数")
    let id=params
return request.get('/brand/detail',params)
    // id:example
}
