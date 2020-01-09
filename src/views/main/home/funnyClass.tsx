import React, { useEffect } from 'react'

import {useObserver} from 'mobx-react-lite';

const App: React.FC = () => {
  
    return useObserver(()=><>
   
      <footer>
 
        <button>立即支付</button>
      </footer>
    </>)
  }
  
  export default App;