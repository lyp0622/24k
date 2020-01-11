import React, {useState, useEffect } from "react"
import useStore from "../../../../utils/useStore"
import { useObserver } from "mobx-react-lite"
import './index.css'
import { History } from 'history'

interface PropeType {
    history: History
    location: Location
    [name: string]: any
}

let Liuyan: React.FC<PropeType> = (props: any) => {
    let store = useStore();
    let { Topic } = store;
    useEffect(() => {}, [Topic])

    let many = (id: number) => {
        props.history.push(`/specialDetail/${id}`)
    }

    let [tag,setTag] =useState('');
    let jiaodian = (e:any) => {
        setTag(e.target.value);
        console.log(e.target.value.length,'4444444444444444')
    }
    let closekOng=()=>{
        setTag('')
    }
    return useObserver(() => (
        <div className="messagel">
            <div className="messagelTitle">
                <p className="messagel-p1" onClick={() => many(props.match.params.id)}>&lt;</p>
                <p className="messagel-p2">填写留言</p>
            </div>
            <div className="concent">
                <div className="concent-box">
                    <textarea className="qqq" value={tag.length>80 ? tag.slice(0,81) : tag} onChange={(e)=>jiaodian(e)}></textarea>
                    <p className="concent-p2"><span>{tag.length<80?tag.length:80}</span>/<span>80</span></p>
                </div>
                {
                    tag.length?<button className="whiteQ" onClick={closekOng}>清空</button>:''
                }
                <button className="whiteL">留言</button>
            </div>
        </div>
    ))
}
export default Liuyan;