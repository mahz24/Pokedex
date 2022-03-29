import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonInfo = () => {

    const { id } = useParams();
    const[pokemon,setPokemon]=useState({})
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res=>setPokemon(res.data))
    },[id])
    console.log(pokemon)
    return (
        <div className='pokemon-info'>
            <div>
                
            </div>
            <div>
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                </div>
                <div>
                    type-abilities
                </div>
                <div>
                    stats base
                </div>
            </div>
        </div>
    );
};

export default PokemonInfo;