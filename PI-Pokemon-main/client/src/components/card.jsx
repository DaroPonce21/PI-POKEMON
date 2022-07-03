import React from "react";
import { Link } from "react-router-dom";
import "../stylos/card.css";

export const Card = (props) =>{
   let name =  props.name.split('').map((letra, i) => {
        if(i === 0)return letra.toUpperCase();
        return letra;     
    })
    let clase = props.type.length > 1 ? 'mixto' : props.type.join('-');
    console.log(clase);
    return(
        
        <div className='CardDiv'>
            
            <div className='CardDivImg'>
            <img src={props.img} className='CardImg' alt="img pokemon"/>
            </div>
            {/*<div className="CardId">Nº Pokedex: {props.id}</div>*/}
            <div className='CardDivName'>
            <Link to={`/detail/${props.id}`} className='CardLinkName'>
            <h1 className='CardName'>{name.join('')}</h1>
            </Link>
            <div className='CardDivTipos'>
                {props.type.map((tipo,i) => <span key={i} className='CardTipos'>{tipo}</span>)}
            </div>
            </div>
        </div>
    )

}

