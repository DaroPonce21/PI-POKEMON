import React from "react";
import pikachu from "../stylos/pika.gif"
import "../stylos/loader.css"

export const Loader = () =>{

    return(<div className='conteiner'>
        <img className='gif' src={pikachu} alt="gif"/>
        <span className='texto'>Cargando...</span>
    </div>)


}