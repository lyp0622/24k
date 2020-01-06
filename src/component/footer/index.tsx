import React from 'react';
import * as Router from 'react-router-dom'

interface ItemType{
    routes:object[]
}

export default (props:ItemType)=>{
    return <footer>
              {
                   props.routes.map((item:any,index)=>{
                   return <Router.NavLink key={index} to={item.path}>{item.text}</Router.NavLink>
                   })
              }
            </footer>
}

