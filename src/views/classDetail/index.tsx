import React, { useEffect } from 'react';
import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'
import './css.module.scss'
const ClassDetail: React.FC = (props: any) => {
    let store = useStore();
    let { Ft } = store;
    useEffect(() => {
        console.log(props)
        Ft.getgoods(props.match.params.id)
    }, []);

    useEffect(() => {
        Ft.tabList(props.match.params.id)
    }, []);
    return useObserver(() => (
        <div className='noTabPageContent'>
            <div className="header">
                <div className="leftt">
                </div>
                <div className="title">
                    奇趣分类
                </div>
            </div>
            <div className="tabWrap">
                <div className="tabWrap_box" >
                    {
                        Ft.goodsList.map((item, index) => {
                            return (
                                <div className={Ft.curIndex === index ? 'active' : ''} key={index} onClick={() => { Ft.tab(index, item.id) }}>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
                {
                    Ft.goodsLis.map((item, index) => {
                        return (
                            <div key={index} className='categoryDetail'>
                                <span>{item.name}</span>
                                <br />
                                <span>{item.front_name}</span>
                            </div>
                        )
                    })
                }
            <div className='goodslyp'>
                {
                    Ft.detailList.map((item, index) => {
                        return (
                            <div className='goodsItemPrice' key={index}>
                                <div className='goodImg'>
                                    <img src={item.list_pic_url} alt="" />
                                </div>
                                <p>{item.name}</p>
                                <br/>
                                <p>￥{item.retail_price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    ))
}
export default ClassDetail;