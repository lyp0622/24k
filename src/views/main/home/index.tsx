import React from 'react';
import { useState, useEffect } from "react"
import useStore from "../../../utils/useStore"
import { useObserver } from "mobx-react-lite"
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import "./index.module.scss"
import { History } from 'history'

interface topicType {
    history: History,
    location:Location
}


const App: React.FC<topicType> = (props) => {
    let store = useStore()
    let { HomeList } = store
    // 模拟didMount
    useEffect(() => {
        HomeList.HomeList()
    }, []);
    let menuClick = (id: number) => {
        props.history.push(`/funnyHome?${id}`)
        HomeList.liveHome(id)
    }
    return useObserver(() => <>
        <div className="homewrap">
            <main>
                <Carousel autoplay>
                    {
                        HomeList.list.map((item, index) => {
                            return <div className="homewrap_banner" key={index}>
                                <h3><img src={item.image_url} alt="" /></h3>
                            </div>
                        })
                    }
                </Carousel>
                <div className="icon_header">
                    {
                        HomeList.channelList.map((item, index) => {
                            return <div className="icon_cont_box" onClick={() => menuClick(item.id)} key={index}>
                                <img src={item.icon_url} alt="" />
                                <div>{item.name}</div>
                            </div>
                        })
                    }
                </div>
                <div className="interval"></div>
                <div className="brandList_box">
                    <h3>品牌供应商直供</h3>
                    <div className="brandList_img_box">
                        {HomeList.brandList.map((item, index) => {
                            return <span className="bandList_img" key={index}>
                                <div className="brandList_detail">
                                    <p>{item.name}</p>
                                    <p>{item.floor_price}元起</p>
                                </div>
                                <img src={item.new_pic_url} alt="" />
                            </span>
                        })}
                    </div>
                </div>
                <div className="newList_box">
                    <h3>新品首发</h3>
                    <div className="newList_box_cont">
                        {
                            HomeList.newList.map((item, index) => {
                                return <span className="newList_box_img" key={index}>
                                    <img src={item.list_pic_url} alt="" />
                                    <p>{item.name}</p>
                                    <p className="font_color_price">￥{item.retail_price}</p>
                                </span>
                            })
                        }
                    </div>

                </div>
                <div className="hotGoodlist_box">
                    <h3>人气推荐</h3>
                    <span className="line_height"></span>
                    {
                        HomeList.hotGoodsList.map((item, index) => {
                            return <div className="hotGoodlist_box_img" key={index}>
                                <div className="hotGoodlist_box_img_box"> <img src={item.list_pic_url} alt="" />   </div>
                                <div className="hotGoodlist_box_img_dscp">
                                    <h4>{item.name}</h4>
                                    <p>{item.goods_brief}</p>
                                    <p>{item.retail_price}</p>
                                </div>
                            </div>
                        })
                    }
                </div>

                <div className="topicList">
                <h3>专题精选</h3>

                </div>

            </main>
        </div>
    </>)
}

export default App;