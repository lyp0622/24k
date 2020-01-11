import React from 'react';
<<<<<<< HEAD
import * as Router from 'react-router-dom'

interface ItemType{
    routes:object[]
}

export default (props:ItemType)=>{
<<<<<<< HEAD
    return <footer className="footer_box">
=======
    return <footer>
>>>>>>> lyp
              {
                   props.routes.map((item:any,index)=>{
                   return <Router.NavLink key={index} to={item.path}>
                   {/* <i>{item.icon}</i> */}
                    <p>{item.text}</p> 
                       </Router.NavLink>
                   })
              }
            </footer>
<<<<<<< HEAD
}
=======
}

>>>>>>> lyp
=======
import {NavLink} from 'react-router-dom'
function index (){
        return (
            <footer>
                 <NavLink to='/main/home'>首页</NavLink>
                 <NavLink to='/main/special'>专题</NavLink>
                 <NavLink to='/main/classify'>分类</NavLink>
                 <NavLink to='/main/cart'>购物车</NavLink>
                 <NavLink to='/main/my'>我的</NavLink>
            </footer>
        );
}

export default index;
>>>>>>> szw
