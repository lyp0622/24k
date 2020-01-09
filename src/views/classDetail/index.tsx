import React, { useEffect } from 'react';
import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'
import './css.module.scss'
// import {History} from 'history'

// interface PropeType { //跳转路由必定义的类型
//     history: History
//     location: Location
//     [name: string]: any
//   }
const ClassDetail: React.FC = (props: any) => {
    let store = useStore();
    let { Fl } = store;
    useEffect(() => {
        console.log(props)
        Fl.getgoods(props.match.params.id)
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
                    Fl.goodsList.map((item, index) => {
                        return (
                            <div className='lyp' key={index}>
                                <span>{item.name}</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    ))
}
export default ClassDetail;