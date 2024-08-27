import React from 'react';
import {Link} from "react-router-dom";

const ImageComponent = ({...pokemon}) => {
    console.log(pokemon.name);
    let imageUrl = pokemon.url.replaceAll('/', ' ').trimEnd();
    let id = imageUrl.slice(imageUrl.lastIndexOf(' ') + 1);
    return (
        <div>
            <Link to={`/pokemon/${pokemon.name}`}>
                <h2 className={"text-2xl font-bold"}> {pokemon.name}</h2>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon.name}/>
            </Link>
        </div>
    );
};

export default ImageComponent;