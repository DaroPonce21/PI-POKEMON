import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from '../redux/actions/actions.js';
import "../stylos/searchBar.css";

export const SearchBar = ({setFilter}) =>{

    const dispatch = useDispatch();
    const [input, setInput] = useState({name : ''})

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchPokemon(e.target.busqueda.value))
        setFilter(false);
    }

    function handleChange(e){
        setInput({...input, name: e.target.value})
    }


    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' name='busqueda' onChange={(e) => handleChange(e)} className='buscador' placeholder="Busca tu Pokemon"/>
                <input type='submit' value='Buscar' className='btn' disabled={input.name !== '' ? false : true}/>
            </form>
        </div>
    )



}