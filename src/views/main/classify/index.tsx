<<<<<<< HEAD
import React from 'react';

function index () {
        return (
            <div>
                分类
            </div>
        );
}

export default index;
=======
import React, { useEffect,useState} from 'react';
import useStore from '../../../utils/useStore'
import { useObserver } from 'mobx-react-lite'
import './index.module.scss'
// import { url } from 'inspector';
import {History} from 'history'

interface PropeType { //跳转路由必定义的类型
    history: History
    location: Location
    [name: string]: any
  }
const ClassFiy: React.FC<PropeType> = (props) => {
    let store = useStore();
    let { Ft,Fl } = store;
    useEffect(() => {
        Fl.getCategory()
    }, []);

    let fnn=(id: number,index:number)=>{
         props.history.push(`/classDetail/${id}`)
         Ft.setIndex(index)
         
    }
    return useObserver(() => (
        <div className='wrap'>
            <div className='top'>
                <input type="text" placeholder="搜商品,共"/>
            </div>
            <div className='box'>
                <div className="left">
                    {
                        Fl.list.length > 0 && Fl.list.map((item, index) => {
                            return <div key={index} className={Fl.curIndex===index?'active':''}  onClick={()=>{Fl.fn(index,item.id)}}>
                                {item.name}
                            </div>
                        })
                    }
                </div>
                <div className="right">
                         {
                             Fl.lis.map((ite,ind)=>{
                                return(
                                    <div key={ind}>
                                        <div className="rightTop" style={{backgroundImage:`url('${ite.wap_banner_url}')`}}>
                                            <span className='ct'>{ite.front_name}</span>  
                                        </div>
                                        <div className='Flei'>
                                            <span>—  {ite.name}分类  —</span> 
                                        </div>
                                    </div>
                                )
                             })
                         }
                        {
                            Fl.ListItem.map((item,index)=>{
                                return(
                                    <div className="content" key={index} onClick={()=>fnn(item.id,index)}>
                                        <img src={item.wap_banner_url} alt=""/>
                                        <span>{item.name}</span> 
                                    </div>     
                                )
                            })
                        }
                </div>
            </div>
        </div>
    ))
}
export default ClassFiy;
>>>>>>> lyp
