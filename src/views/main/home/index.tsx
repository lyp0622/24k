import React, { useEffect } from 'react';
import useStore from '../../../utils/useStore';
import {useObserver} from 'mobx-react-lite';
  interface ItemType {

  }
  const Home: React.FC = () => {
    let store = useStore();
    let {cart} = store;
  
    // 模拟didMount
    useEffect(() => {
        
    }, []);
  
    return useObserver(()=><>
      <div></div>
    </>)
  }
  
  export default Home;