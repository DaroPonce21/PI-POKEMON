import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getPokemonDetail, cleanPokemonDetail } from "../redux/actions/actions";
import { Loader } from "./loader";
import "../stylos/detail.css"

export const Detail = () =>{

    
    const dispatch = useDispatch();
    const id = useParams();

  

    useEffect(()=>{
        dispatch(getPokemonDetail(id.id))
        return () => dispatch(cleanPokemonDetail())
    },[dispatch])


    const detail = useSelector(state => state.pokemonDetail);
    
    let tipos = []
    if(detail.type){ 
     tipos = detail.type.map((tipo, i) => <h5 className='DetailTipo' key={i}>{tipo}</h5>) 
    }else if(detail.tipos){
    tipos = detail.tipos.map(tipo => <h5 className='DetailTipo' key={tipo.id}>{tipo.name}</h5>)
    }
    return(
        <div className='DetailDiv'>
            {tipos.length > 0 ? <>
            
            <div className='DetailDiv2'>
            
            <div className="divDetail">
            <Link to='/home'><button id="POKEDEX" className="DetailButtonHome">POKEDEX</button></Link></div>
             
            <div className='imgTitulo'>  
            <img  className='DetaildImg 'src={detail?.img} alt='img pokemon'/>
            <h1 className='Detailtitulo'>{detail?.name}</h1>
            <h4 className='Deteailstat'>Nº Pokedex: {detail?.id}</h4>
            </div>  
            <div>
            <h3 className='Detaildsubtitulos'>Estadísticas</h3>
            <div className='DetaildstatsDiv'>

            <div className='DetaildstatFlex'>  
            <span className='DetaildValue'>{detail?.vida}</span> 
            <h5 className='Deteailstat'>Vida</h5>
            
            </div>

            <div className='DetaildstatFlex'>
            <span className='DetaildValue'>{detail?.fuerza}</span>
            <h5 className='Deteailstat'>Fuerza</h5>
            
            </div> 

            <div className='DetaildstatFlex'>
            <span className='DetaildValue'>{detail?.defensa}</span>
            <h5 className='Deteailstat'>Defensa</h5>
            
            </div> 

            <div className='DetaildstatFlex'>
            <span className='DetaildValue'>{detail?.velocidad}</span>
            <h5 className='Deteailstat'>Velocidad</h5>
            
            </div> 

            </div>
            <h3 className='Detaildsubtitulos'>Dimensiones</h3>
            <div className='DetaildDivDimesion'>

            <div>
            <span className='DetaildValue'>{detail?.altura}m</span>       
            <h5 className='Deteailstat'>Altura</h5>
            </div> 
            
            <div>
            <span className='DetaildValue'>{detail?.peso}kg</span>       
            <h5 className='Deteailstat'>Peso</h5>
            </div> 

            </div>
            <h3 className='Detaildsubtitulos'>Tipos</h3>
            <div className={tipos.length > 1 ? 'DetaildTiposDiv' : 'DetaildTiposOne'}>{tipos}</div>
            </div>
            </div>
            </> : <Loader/>}
            
        </div>
    )

}