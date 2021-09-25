import React from 'react'
import './Header.css'

export default props =>
    <div className="Header">
        <div className="Header">
            {props.menu}
            
        </div>
        <div className="Menu">
            {props.logo}
            {props.button}
            {props.itens}
            {props.container}
           
        </div>
        
    </div>