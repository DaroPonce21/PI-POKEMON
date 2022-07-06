import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getTypes, selectType } from "../redux/actions/actions";
import "../stylos/form.css"

const validate = (input) => {
    let errors = {};
    if (!input.name) {
        errors.name = 'Debe Ingresar un Nombre'
    }
    if (!input.vida) {
        errors.vida = 'Campo obligatorio'
    } else if (isNaN(input.vida)) {
        errors.vida = 'Debe ingresar unicamente numeros'
    }
    if (!input.fuerza) {
        errors.fuerza = 'Campo obligatorio'
    } else if (isNaN(input.fuerza)) {
        errors.fuerza = 'Debe ingresar unicamente numeros'
    }
    if (!input.defensa) {
        errors.defensa = 'Campo obligatorio'
    } else if (isNaN(input.defensa)) {
        errors.defensa = 'Debe ingresar unicamente numeros'
    }
    if (!input.velocidad) {
        errors.velocidad = 'Campo obligatorio'
    } else if (isNaN(input.velocidad)) {
        errors.velocidad = 'Debe ingresar unicamente numeros'
    }
    if (!input.altura) {
        errors.altura = 'Campo obligatorio'
    } else if (isNaN(input.altura.split(',').join(''))) {
        errors.altura = 'Debe ingresar unicamente numeros'
    }
    if (!input.peso) {
        errors.peso = 'Campo obligatorio'
    } else if (isNaN(input.peso.split(',').join(''))) {
        errors.peso = 'Debe ingresar unicamente numeros'
    }
    if (!input.types.length) {
        errors.types = 'Selecciona al menos un Tipo'
    }
    return errors
}

export const Form = () => {

    let history = useNavigate();
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const [inputs, setInputs] = useState({
        name: '',
        vida: '',
        fuerza: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: '',
        img: '',
        types: []
    })
    const [errors, setErrors] = useState(validate(inputs))




    function handleChange(e) {

        if (e.target.name === 'types') {
            if (!types?.includes(e.target.value)) {
                dispatch(selectType(e.target.value))
                setInputs({ ...inputs, types: [...inputs.types, e.target.value] })
            }
        } else {
            setInputs({ ...inputs, [e.target.name]: e.target.value })
        }
        setErrors(validate({ ...inputs, [e.target.name]: e.target.value }))

    }

    async function handleSubmit(e) {
        e.preventDefault();
        await axios.post('http://localhost:3001/pokemons/', inputs)
        history("/home")
    }


    return (
        <div>

            <form onSubmit={(e) => handleSubmit(e)} className='formConteiner'>
                <h1 className='titulo'>Crear Pokemon</h1>

                <label className='label'>Nombre</label>
                {errors.name && <span className='spanError'>{errors.name}</span>}
                <input className={errors.name ? 'danger' : 'input'} type='text' name="name" placeholder="ej: Pikachu" onChange={(e) => handleChange(e)} />

                <label className='label'>Puntos de Vida</label>
                {errors.vida && <span className='spanError'>{errors.vida}</span>}
                <input className={errors.vida ? 'danger' : 'input'} type='text' name="vida" placeholder='ej: 75' onChange={(e) => handleChange(e)} />

                <label className='label'>Puntos de Fuerza</label>
                {errors.fuerza && <span className='spanError'>{errors.fuerza}</span>}
                <input className={errors.fuerza ? 'danger' : 'input'} type='text' name="fuerza" placeholder='ej: 75' onChange={(e) => handleChange(e)} />


                <label className='label'>Puntos de Defensa</label>
                {errors.defensa && <span className='spanError'>{errors.defensa}</span>}
                <input className={errors.defensa ? 'danger' : 'input'} type='text' name="defensa" placeholder='ej: 75' onChange={(e) => handleChange(e)} />



                <label className='label'>Puntos de Velocidad</label>
                {errors.velocidad && <span className='spanError'>{errors.velocidad}</span>}
                <input className={errors.velocidad ? 'danger' : 'input'} type='text' name="velocidad" placeholder='ej: 75' onChange={(e) => handleChange(e)} />


                <label className='label'>Altura</label>
                {errors.altura && <span className='spanError'>{errors.altura}</span>}
                <input className={errors.altura ? 'danger' : 'input'} type='text' name="altura" placeholder='ej: 1,80' onChange={(e) => handleChange(e)} />


                <label className='label'>Peso</label>
                {errors.peso && <span className='spanError'>{errors.peso}</span>}
                <input className={errors.peso ? 'danger' : 'input'} type='text' name="peso" placeholder='ej: 75' onChange={(e) => handleChange(e)} />


                <label className='label'>Url Imagen</label>
                {!inputs.img.length && <span className='opcional'>Campo opcional</span>}
                <input className={inputs.img.length ? 'input' : 'opcionalInput'} type='text' name="img" placeholder="ej: http://www.imagen.com" onChange={(e) => handleChange(e)} />


                <label className='label'>Tipo</label>
                {errors.types && <span className='spanError'>{errors.types}</span>}
                <select className={errors.types ? 'dangerSelect' : 'inputSelect'} name="types" id="types" onChange={(e) => handleChange(e)}>
                    <option defaultValue={true}>Seleccione Tipo</option>
                    {types.map(tipo => <option value={tipo.name} key={tipo.id}>{tipo.name}</option>)}
                </select>
                <div className={inputs.types.length ? 'tipoSelected' : 'hidden'}>
                    {inputs.types.map((tipo, i) => <span className='tipo' key={i}>{tipo}</span>)}
                </div>
                <div className='footer'>
                    {Object.values(errors).join('') == false ? <input className='crearPokemon' type="submit" disabled={false} /> : <input type="submit" className='crearPokemon' disabled={true} />}
                    <Link to="/home" className=''><button className="home">POKEDEX</button></Link>
                </div>
            </form>


        </div>
    )



}