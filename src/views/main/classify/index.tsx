import React, { useEffect } from 'react';
import useStore from '../../../utils/useStore'
import { useObserver } from 'mobx-react-lite'
import './index.module.scss'
const ClassFiy: React.FC = () => {
    let store = useStore();

    let { Fl } = store;
    useEffect(() => {
        Fl.getCategory()
    }, [Fl])
    return useObserver(() => (
        <div className='wrap'>
            <div className='top'>
                <input type="text" placeholder="搜商品，共" />
            </div>
            <div className='box'>
                <div className="left">
                    {
                        Fl.list.length > 0 && Fl.list.map((item, index) => {
                            return <div key={index} className={Fl.curIndex === index ? 'active' : ''} onClick={() => { }}>
                                {item.name}
                            </div>

                        })
                    }
                </div>
                <div className="right">

                </div>
            </div>

        </div>
    ))


}

export default ClassFiy;