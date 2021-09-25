import React from 'react'
import Card from './Card.css'


export default props =>
    <div className="Card">
                
        
        <div className="Titulo">
            {props.titulo1}
        </div>
        <div className="Texto">
            {props.texto1}
        </div>
        <div className="Titulo">
            {props.titulo2}
        </div>
        <div className="Texto">
            {props.texto2}
        </div>
        <div className="Titulo3">
            {props.titulo3}
        </div>
        <div className="Texto">
            {props.texto3}
        </div>
        <div className="Titulo">
            {props.titulo4}
        </div>
        <div className="Texto">
            {props.texto4}
        </div>
        <div className="Titulo5">
            {props.titulo5}
        </div>
        <div className="Texto5">
            {props.texto5}
        </div>
        <div className="Titulo">
            {props.titulo6}
        </div>
        <div className="Question">
            {props.question1}
            {props.question2}
        </div>
        <div className="Button">
            {props.buttonText2}
        </div>
       
    </div>