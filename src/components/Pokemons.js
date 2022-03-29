import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import {Link} from 'react-router-dom'
import PokemonCard from './PokemonCard';

const Pokemons = () => {
    const userName = useSelector(state=>state.userName)
    const [pokemons,setPokemons]=useState([])
    const [pokemonSearch,setPokemonSearch]=useState('')
    const [types,setTypes]=useState([])

    const navigate = useNavigate();


    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
            .then(res=>setPokemons(res.data.results));
        
        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res=>setTypes(res.data.results))
    },[])
    console.log(types)
    const submit = e=>{
        e.preventDefault();
        navigate(`/pokedex/${pokemonSearch}/`);
    }

    const handleType=e=>{
        console.log(e.target?.value);
        axios.get(e.target.value)
            .then(res=>setPokemons(res.data.pokemon))
    }

    return (
        <div>
            <h1>Bienvenido {userName}</h1>
            <div className='select-container'>
                <select onChange={handleType} >
                    <option value="1">-Select a type-</option>
                    {types.map(type=>(
                        <option key={type.name} value={type.url}>{type.name}</option>
                    ))}
                </select>
            </div>
            <form className='input-container' onSubmit={submit}>
                <label htmlFor='pokemon-name' >Buscar por nombre</label>
                <input type="text" id='pokemon-name' onChange={e=>{setPokemonSearch(e.target.value);console.log(pokemonSearch)}} value={pokemonSearch} required/>
                <button>Buscar</button>
            </form>
            <ul className='card-list'>
                {pokemons.map(pokemon=>(
                    <li className='card-container' key={pokemon.url ? pokemon.url: pokemon.pokemon.url}>
                        <PokemonCard pokemonUrl ={pokemon.url ? pokemon.url: pokemon.pokemon.url}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pokemons;