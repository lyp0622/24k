import React from 'react';
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