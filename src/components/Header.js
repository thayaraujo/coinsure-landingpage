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
            
            {props.container}
        </div>
        <div className="Itens">
            {props.itens}
        </div>
        <div className="Logo">
            {props.logo}
            {props.bar}
        </div>
        <div className="Image">
            {props.Image}
        </div>
        
    </div>