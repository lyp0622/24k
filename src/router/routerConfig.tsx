import React from 'react'
import RouterView from './RouterView'
import Login from '../views/login/index'
// import Main from '../views/main/index'
import Home from '../views/main/home/index'
import Special from '../views/main/special'
import SpecialDetail from '../views/main/special/detail'
import Many from '../views/main/special/many'
import Classify from '../views/main/classify/index'
import Cart from '../views/main/cart/index'
import My from '../views/main/my/index'
import Footer from '.././component/footer/index'
export default {
    routes:[{
        path: '/specialDetail/:id',
        component: SpecialDetail
    },{
        path: '/many/:id',
        component: Many
    },{
        path:'/login',
        component:Login
    },{
        path:'/main',
        component:(props:any)=>(<>
        <div className='wrap'>
        <RouterView routes={props.routes}></RouterView>
            <Footer></Footer>
        </div>
        </>),
        children:[{
            path:'/main/home',
            component:Home
        },{
            path:'/main/special',
            component:Special
        },{
            path:'/main/classify',
            component:Classify
        },{
            path:'/main/cart',
            component:Cart
        },{
            path:'/main/my',
            component:My
        }]
    },{
        from:'*',
        to:'/main/home'
    }]
}