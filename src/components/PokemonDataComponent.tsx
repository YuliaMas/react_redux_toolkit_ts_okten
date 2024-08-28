import React, {FC} from 'react';
import {IPokemonData} from "../types";

type IProps = {
    pokemonData: IPokemonData
}
const PokemonDataComponent:FC<IProps> = ({pokemonData}) => {
    return (
        <div className={"h-full flex flex-col items-center justify-around w-1/2"}>
            <h1 className={"font-bold text-2xl"}>Name: {pokemonData.name.toUpperCase()}</h1>
            <p><strong>ID:</strong> {pokemonData.id}</p>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name}  className={'w-[350px] h-auto'}/>
            <p><strong>WEIGHT:</strong> {pokemonData.weight}</p>
            <p><strong>HEIGHT:</strong> {pokemonData.height}</p>
            <p><strong>ORDER:</strong> {pokemonData.order}</p>
            <ul><strong>ABILITIES:</strong> {pokemonData.abilities.map(abl =>
                <li key={abl.ability["name"]}>{abl.ability["name"]}</li>)}
            </ul>
            <ul><strong>TYPES:</strong> {pokemonData.types.map(type =>
                <li key={type.type["name"]}>{type.type["name"]}</li>)}
            </ul>
            <p><strong>EXPERIENCE:</strong> {pokemonData.base_experience}</p>
            <ul><strong>STATS:</strong> {pokemonData.stats.map(stat =>
                <li key={stat.stat["name"]}>{stat.stat["name"]} - {stat["base_stat"]} </li>)}
            </ul>


        </div>
    );
};

export default PokemonDataComponent;