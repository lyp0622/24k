import React, { useEffect } from "react"
import useStore from "../../../utils/useStore"
import { useObserver } from "mobx-react-lite"
// import style from './index.module.scss' //需要在 className={style.类名}
import './index.css'
import {History} from 'history' //跳转路由必写项

interface PropeType { //跳转路由必定义的类型
    history: History
    location: Location
    [name: string]: any
  }

let Special: React.FC<PropeType> = (props) => {
    let store = useStore();
    let { Topic } = store
    useEffect(() => {
        Topic.getSpecialData({ page:4, size:5 })
    }, [Topic])
    
    let tiao=(id:number)=>{
        console.log(id,'eeeeeeeeeeeee')
        props.history.push(`/specialDetail/${id}`)
    }

    return useObserver(() => (
        <div className="specai-wrap">
            {
                Topic.list.map((item, index) => {
                    return <div className="specialele" key={index} onClick={()=>tiao(item.id)}> 
                        <img src={item.scene_pic_url} alt="" className="specai-img" />
                        <p className="p-one">{item.title}</p>
                        <p className="p-two">{item.subtitle}</p>
                        <p className="p-three">{item.price_info}元起</p>
                    </div>
                })
            }
        </div>
    ))
}
export default Special;