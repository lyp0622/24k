import React, { useEffect } from "react"
import useStore from "../../../../utils/useStore"
import { useObserver } from "mobx-react-lite"
import './many.css'
import { History } from 'history'

interface PropeType {
    history: History
    location: Location
    [name: string]: any,
}

let Many: React.FC<PropeType> = (props: any) => {
    let store = useStore();
    let { Topic } = store;
    useEffect(() => {
        let valueId = props.match.params.id
        Topic.commentList({ valueId: valueId, typeId: 1 })
        console.log(valueId, '4444444444444')
    }, [Topic])

    let back = (value_id: number) => {
        props.history.push(`/specialDetail/${value_id}`)
    }

    return useObserver(() => (
        <div className="message-box">
            <div className="header">
                <span onClick={() => back(Topic.dlist[0].value_id)}>&lt;</span>
                <span className="header-span">查看更多评论</span>
            </div>
            <div className='message-many'>
            {
                Topic.dlist.map((ite, ind) => {
                    return <div className="message-messagename" key={ind}>
                        <p className="p1">
                            <span className="span1">
                                {  // 对象套对象时，解决按条件渲染数据
                                    Object.values(ite.user_info).length > 0 ? ite.user_info.username : "匿名用户"
                                }
                            </span>
                            <span className="span2">{ite.add_time}</span>
                        </p>
                        <p className="p2">{ite.content}</p>
                    </div>
                })
            }
            </div>
           
        </div>
    ))
}
export default Many;