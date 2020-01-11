import React, { useEffect } from 'react'
import history from "history"
import {useObserver} from 'mobx-react-lite';
import useStore from '../../../util/useStore'
import "./funnyClass.module.scss"


interface backHome {
    history: History,
    location:Location
  }
  const App: React.FC<backHome> = (props) => {
    const store = useStore();
    const { home } = store;
     useEffect(()=>{
        home.getData();
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
                     <div className="funnyWeb_header_second_son">
                     {
                          home.data.categoryList.map((item,index)=>{
                              return <div key={index}>{item.name}</div>
                          })
                      }
                     </div>
                     
                 </div>
               
               </div>
             </header>
             <main></main>
      </>)
    }
    
    export default App;