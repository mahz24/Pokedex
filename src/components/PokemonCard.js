import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({pokemonUrl}) => {
    const [cardInfo,setCardInfo]=useState({})

    useEffect(()=>{
        axios.get(pokemonUrl)
            .then(res=>setCardInfo(res.data))
    },[pokemonUrl])

    return (
        <Link className='card-info' to={`/pokedex/${cardInfo.id}`}>
            <div className='text'>
                <h1>{cardInfo.name}</h1>
                <p>Hp: {cardInfo.stats?.[0].base_stat}</p>
                <p>Attack: {cardInfo.stats?.[1].base_stat}</p>
                <p>Defense: {cardInfo.stats?.[2].base_stat}</p>
                <p>Speed: {cardInfo.stats?.[5].base_stat}</p>
            </div>
            <div className='img'>
                <img src={cardInfo.sprites?.other.dream_world.front_default} alt="" />
            </div>
            
        </Link>
    );
};

export default PokemonCard;