import React, { useEffect } from 'react'
import history from "history"
import {useObserver} from 'mobx-react-lite';
import "./funnyClass.module.scss"
import useStore from "../../../utils/useStore"
interface backHome {
  history: History,
  location:Location
}
const App: React.FC<backHome> = (props) => {
   let store = useStore()
  let { HomeList } = store
   useEffect(()=>{
    HomeList.HomeList()
    console.log(props,"tghjjkaskjdsja")
   },[])  


  let returnHome=()=>{
      // props.history.push("/main/home")
  }
    return useObserver(()=><>
    <div className="funnyWeb_box"></div>
           <header>
             <div className="funnyWeb_header">
               <div className="funnyWeb_header_first">  
                     <span >&lt;</span>
                     <h3>奇趣分类</h3>
               </div>
               <div className="funnyWeb_header_second">
                    banner图
               </div>
             
             </div>
           </header>
           <main></main>
    </>)
  }
  
  export default App;