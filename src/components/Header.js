import React from 'react'
import './Header.css'

export default props =>
    <div className="Top">
        <div className="Head">
            {props.header}
        </div>
        <div className="Menu">
            {props.menu}
            {props.button}
        </div>
    </div>