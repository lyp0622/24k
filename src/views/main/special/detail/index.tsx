import React, { useEffect } from "react"
import useStore from "../../../../utils/useStore"
import { useObserver } from "mobx-react-lite"
import './index.module.scss'
import {History} from 'history' 

interface PropeType {
    history: History
    location: Location
    [name: string]: any,
    id: string
  }

let Detail: React.FC<PropeType> = (props) => {
    let store = useStore();
    let { Topic } = store;
    useEffect(() => {
        let detaiL=props.location.pathname.split('=')[1]
        console.log(props.location.pathname.split('=')[1],'id')
        // Topic.getTypeDetail({ id:props.match.params.id})
        Topic.getTypeDetail({ id: detaiL})
        Topic.commentList({valueId: detaiL, typeId: 1, page:1, size:5})
    }, [Topic])
    
    return useObserver(() => (
        <div className="specaidetail">
            {
                Topic.title.map((item, index) => {
                    return <div className="specialele" key={index}>
                        <p className="header">
                            <a href="/main/special" className="p-a">&lt;</a>
                            <span className="header-span">{item.title}</span>
                        </p>
                        {/* react官网的属性 */}
                        <div dangerouslySetInnerHTML={{__html:item.content}} className="detail"></div>
                        <div className="message">
                            <div className="messageTitle">
                                <p>精品留言</p>
                                <p>编辑</p>
                            </div>
                         {
                            Topic.dlist.map((ite,ind)=>{
                                return  <div className="messagename" key={ind}>
                                    <p className="p1">
                                        {/* <span className="span1">{Topic.name == ''?'匿名用户':Topic.name}</span> */}
                                        {/* <span className="span1">{Topic.name}</span> */}
                                        <span className="span2">{ite.add_time}</span>
                                    </p>
                                    <p>{ite.content}</p>
                                </div>
                            })
                         }
                         </div>
                    </div>
                })
            }
        </div>
    ))
}
export default Detail;