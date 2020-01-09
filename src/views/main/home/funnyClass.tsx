import React, { useEffect } from 'react'
import history from "history"
import {useObserver} from 'mobx-react-lite';

interface backHome {
  history: History,
  location:Location
}
const App: React.FC<backHome> = (props) => {
  let returnHome=()=>{
      // props.history.push("/main/home")
  }
    return useObserver(()=><>
           <header>
             <div>
               <span >&lt;</span>
             <h3>奇趣分类</h3>
             </div>
             
           </header>
           <main></main>
    </>)
  }
  
  export default App;