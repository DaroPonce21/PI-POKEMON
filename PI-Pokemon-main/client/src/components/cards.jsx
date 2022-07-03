import React from "react";
import { Card } from "./card.jsx";
import "../stylos/cards.css";

export const Cards = ({pokemones}) =>{

    
    console.log(pokemones);
    return(
        <div className='CardsDiv'>
        
        {pokemones?.map(pokemon => {
            return <Card id={pokemon.id} 
                         img={pokemon.img} 
                         name={pokemon.name} 
                         key={pokemon.id} 
                         type={pokemon.type ? pokemon.type : pokemon.tipos.map(tipo => tipo.name)}
                        />
        })}
        </div>
    )


}