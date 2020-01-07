import React, { useEffect } from "react"
import useStore from "../../../../utils/useStore"
import { useObserver } from "mobx-react-lite"
import './index.module.scss'

let Detail: React.FC = () => {
    let store = useStore();
    let { Topic } = store
    useEffect(() => {
        Topic.getTypeDetail({ id:314 })
    }, [Topic])
    
    return useObserver(() => (
        <div className="specai-wrap">
            {
                <p>{Topic.detaiList}</p>
                // Topic.detaiList.map((item, index) => {
                //     return <div className="specialele" key={index}>
                //         <p>{item.title}</p>
                //     </div>
                // })
            }
        </div>
    ))
}
export default Detail;