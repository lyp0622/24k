import React, { useEffect } from "react"
import useStore from "../../../../utils/useStore"
import { useObserver } from "mobx-react-lite"
import './detail.css'
import { History } from 'history'

interface PropeType {
    history: History
    location: Location
    [name: string]: any,
}

let Detail: React.FC<PropeType> = (props: any) => {
    let store = useStore();
    let { Topic } = store;
    useEffect(() => {
        //id 通过字符串的方法解决而得，typeOf 为 string ，对于后期的使用很不方便 
        // console.log(props.location.pathname.split('=')[1], 'id') 
        let detaiL = props.match.params.id
        Topic.getTypeDetail({ id: detaiL })
        Topic.commentList({ valueId: detaiL, typeId: 1, page: 1, size: 5 })
    }, [Topic])

    let many = (id: number) => {
        props.history.push(`/many/${id}/typeId=1`)
    }

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
                        <div dangerouslySetInnerHTML={{ __html: item.content }} className="detail"></div>
                        <div className="message">
                            <div className="messageTitle">
                                <p>精品留言</p>
                                <p>编辑</p>
                            </div>
                            <div className="message-box">
                                {
                                    Topic.dlist.length == 0 ? <div>等你来评论！</div> : Topic.dlist.map((ite, ind) => {
                                        return <div className="messagename" key={ind}>
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
                            <div>
                                {
                                    Topic.dlist.length == 0 ? "" : <div className="look" onClick={() => many(item.id)}>查看更多评论</div>
                                }
                            </div>
                        </div>
                        <div className="recommend">
                            <p className="recommend-p">推荐专题</p>
                            <div className="recommend-image">

                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    ))
}
export default Detail;