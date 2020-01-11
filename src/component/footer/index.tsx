import React from 'react';
import * as Router from 'react-router-dom'

interface ItemType{
    routes:object[]
}

export default (props:ItemType)=>{
    return <footer className="mineFooter">
              {
                   props.routes.map((item:any,index)=>{
                   return <Router.NavLink key={index} to={item.path}>
                   {/* <i>{item.icon}</i> */}
                    <p>{item.text}</p> 
                       </Router.NavLink>
                   })
              }
            </footer>
}