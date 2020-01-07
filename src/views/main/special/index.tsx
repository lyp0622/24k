import React, { useEffect } from "react"
import useStore from "../../../utils/useStore"
import { useObserver } from "mobx-react-lite"
// import style from './index.module.scss' //需要在 className={style.类名}
import './index.module.scss'

let Special: React.FC = () => {
    let store = useStore();
    let { Topic } = store
    useEffect(() => {
        Topic.getSpecialData({ page:4, size:5 })
    }, [Topic])
    
    let tiao=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e,'eeeeeeeeeeeee')
    }

    return useObserver(() => (
        <div className="specai-wrap">
            <p onClick={e=>tiao.bind(e)}>a</p>
            {/* onChange={e=>change(e, item.id)}    ||     onClick={()=>tiao(item.id)} */}
            {/* {
                Topic.list.map((item, index) => {
                    return <div className="specialele" key={index} > 
                        <img src={item.scene_pic_url} alt="" className="specai-img" />
                        <p className="p-one">{item.title}</p>
                        <p className="p-two">{item.subtitle}</p>
                        <p className="p-three">{item.price_info}元起</p>
                    </div>
                })
            } */}
        </div>
    ))
}
export default Special;