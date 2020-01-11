<<<<<<< HEAD
import React,{Suspense} from 'react';
=======
import React from 'react';
>>>>>>> lyp
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/index';
import StoreContext from './context/StoreContext'
import store from './store/index'

<<<<<<< HEAD

=======
>>>>>>> lyp
ReactDOM.render(<StoreContext.Provider value={store}>
        <App />
  </StoreContext.Provider>,document.getElementById('root'));
