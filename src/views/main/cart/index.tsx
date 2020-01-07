import React,{useState,useEffect} from "react"
import Items from "../../../component/item/index"
import "./index.css"

interface ItemType {
    id:number,
    checked:boolean,
    name:string,
    num:number,
    price:number
  }
  const initialState = [
    {
      "id": 1,
      "checked": false,
      "name": "钱涛",
      "num": 49,
      "price": 732
    },
    {
      "id": 2,
      "checked": false,
      "name": "吴艳",
      "num": 61,
      "price": 27
    },
    {
      "id": 3,
      "checked": true,
      "name": "魏娜",
      "num": 65,
      "price": 481
    },
    {
      "id": 4,
      "checked": true,
      "name": "锺洋",
      "num": 8,
      "price": 316
    },
    {
      "id": 5,
      "checked": false,
      "name": "彭丽",
      "num": 99,
      "price": 517
    },
    {
      "id": 6,
      "checked": true,
      "name": "马杰",
      "num": 28,
      "price": 59
    }
    
  ]
  const Cart:React.FC=()=>{
    const [list,setList]=useState<ItemType[]>([])
    // 模拟didMount
    useEffect(()=>{
      setList(initialState);
    },[])
  
    let totalNum=list.reduce((total:number,item:ItemType) =>{
      if(item.checked){
        return total+=item.num
      }else{
        return total;
      }
    },0)
  
    let totalPrice=list.reduce((total:number,item:ItemType) =>{
      if(item.checked){
        return total+=item.num * item.price
      }else{
        return total;
      }
    },0)
  
    function changeCheck(id:number,checked:boolean){
      let newList=[...list];
      let index=newList.findIndex(value=>value.id===id);
      newList[index].checked=checked;
      setList(newList);
    }
    function changeNum(id:number,type:string){
      let newList=[...list];
      let index=newList.findIndex(value=>value.id===id);
        type==="+"?newList[index].num++:newList[index].num--;
        if(newList[index].num<=0){
          newList[index].num=1;
        }
        setList(newList)
    }
    return (
        <div className="cart">
            <div className="top">
                <span>30天无忧退货</span>
                <span>48小时快速退款</span>
                <span>满88免邮费</span>
            </div>
            <div className="center">
                <Items list={list} changeCheck={changeCheck} changeNum={changeNum}></Items>
                {/* <span>
                    <input type="checkbox" name="" id=""/>全选
                </span>
                <span>
                    <input type="checkbox" name="" id=""/>取消全选
                </span> */}
            </div>
            <div className="footer">
                <li>
                    <span>已选 <i>(0)</i>{totalNum}</span>
                    <span>￥ <i>0</i>{totalPrice}</span>
                </li>
                <li>编辑</li>
                <li>下单</li>
            </div>
        </div>
    );
}

export default Cart;