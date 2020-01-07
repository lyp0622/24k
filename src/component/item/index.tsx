import React from 'react'

interface ItemType {
    id: number,
    checked: boolean,
    name: string,
    num: number,
    price: number
}
interface PropsType {
    list: ItemType[],
    changeCheck: Function,
    changeNum: Function
}
const Items:React.FC<PropsType>=props=>{
    let changeCheck=(e:React.ChangeEvent<HTMLInputElement>,id:number)=>{
        console.log("e....",e.target,e.target.checked);
        props.changeCheck(id,e.target.checked);
        return 100;
    }
    return <>
     {
         props.list.map((item,index)=>{
             return <li key={index}>
                 <input type="checkbox" name="" id="" checked={item.checked} onChange={e=>changeCheck(e,item.id)}/>
                 <span>{item.name}</span>
                 <span>${item.price}</span>
                 <div>
                     <button onClick={()=>props.changeNum(item.id,"+")}>+</button>
                     <span>{item.num}</span>
                     <button onClick={()=>props.changeNum(item.id,"-")}>-</button>
                 </div>
             </li>
         })
     }
    </>
}

export default Items;