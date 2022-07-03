import React from "react";
import "../stylos/paginado.css";

export const Paginado = ({pokemonsPerPage, allPokemons, paginado}) =>{

    const pageNumbers = []
    for (let i = 0; i < Math.ceil(allPokemons/ pokemonsPerPage); i++) {
        pageNumbers.push(i + 2)
    }
    return(
        <nav>
         <ul className='paginado'>
            <li>
                <button onClick={(e) => paginado(1)}>1</button>
                </li>
            {pageNumbers?.map(el => <li key={el}><button onClick={(e) => paginado(el)}>{el}</button></li>)}
        </ul> 
        </nav>
    )

}