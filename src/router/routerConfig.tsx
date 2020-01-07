import React from 'react'
import RouterView from './RouterView'
import Login from '../views/login/index'
import Home from '../views/main/home/index'
import Special from '../views/main/special/index'
import Classify from '../views/main/classify/index'
import Cart from '../views/main/cart/index'
import My from '../views/main/my/index'
import Footer from '../component/footer/index'
export default {
    routes:[{
        path:'/login',
        component:Login
    },{
        path:'/main',
        component:(props:any)=>(<>
        <div className='wrap'>
            <RouterView routes={props.routes}></RouterView>
            <Footer  routes={props.routes} />
        </div>
        </>),
        children:[{
            path:'/main/home',
            text:'首页',
            icon:'iconfont icon-caidaniconshouyehui',
            component:Home
        },{
            path:'/main/special',
            text:'专题',
            icon:'iconfont icon-clone',
            component:Special
        },{
            path:'/main/classify',
            text:'分类',
            icon:'iconfont icon-sort',
            component:Classify
        },{
            path:'/main/cart',
            text:'购物车',
            icon:'iconfont icon-cart',
            component:Cart
        },{
            path:'/main/my',
            text:'我的',
            icon:'iconfont icon-mine',
            component:My
        }]
    },{
        from:'*',
        to:'/main/home'
    }]
}