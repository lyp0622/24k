<<<<<<< HEAD
import React, { useEffect } from 'react'
import useStore from '../../../util/useStore'
import { useObserver } from 'mobx-react-lite'
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import { History } from "history"
import "./index.module.scss"

interface topicType {
    history: History,
    location: Location
}
const App: React.FC<topicType> = (props) => {
    const store = useStore();
    const { home } = store;
    useEffect(() => {
        home.getData();
    }, [])
    // console.log('home.data...', home.data);
    // 菜单点击事件
    let menuClick = (id: number) => {
        // 跳转...
        props.history.push(`/funnyHome?${id}`)
    }

    return useObserver(() => <>
        <div className="homewrap">
            <main>
                <Carousel autoplay>
                    {
                        home.data.banner.map((item, index) => {
                            return <div className="homewrap_banner" key={index}>
                                <h3><img src={item.image_url} alt="" /></h3>
                            </div>
                        })
                    }
                </Carousel>
                <div className="icon_header">
                    {
                        home.data.channel.map((item, index) => {
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
                        {home.data.brandList.map((item, index) => {
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
                            home.data.newGoodsList.map((item, index) => {
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
                        home.data.hotGoodsList.map((item, index) => {
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
                    {/* {
                        home.data.topicList.map(item => {
                            return <div key={item.id} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                        })
                    } */}
                </div>

            </main>
        </div>
    </>)

}
export default App

// export default () => {
//     const store = useStore();
//     const { home } = store;
//     useEffect(() => {
//         home.getData();
//     }, [])

//     console.log('home.data...', home.data);
//     // 菜单点击事件
//     let menuClick = (id: number) => {
//         // 跳转...
//     }

//     return useObserver(() => <>
//         {/* 轮播 */}
//         <section>{
//             home.data.banner.map((item) => {
//                 return <img key={item.id} src={item.image_url} alt="" />
//             })
//         }</section>
//         {/* 菜单 */}
//         <section>{
//             home.data.channel.map(item => {
//                 return <li key={item.id} onClick={() => menuClick(item.id)}>
//                     <img src={item.icon_url} alt="" />
//                     <span>{item.name}</span>
//                 </li>
//             })}</section>
//         {/* 品牌制造商 */}
//         <section></section>
//         {/* 新品 */}
//         <section></section>
//         {/* 人气 */}
//         <section></section>
//         {/* 专题 */}
//         <section>{
//             home.data.topicList.map(item => {
//                 return <div key={item.id} dangerouslySetInnerHTML={{ __html: item.content }}></div>
//             })
//         }</section>
//         {/* 居家 */}
//         <section></section>
//     </>)
// }
=======
import React, { useEffect } from 'react';
import useStore from '../../../utils/useStore';
import {useObserver} from 'mobx-react-lite';

function index () {
        return (
            <div>
                购物车
            </div>
        );
}

export default index;
>>>>>>> lyp
