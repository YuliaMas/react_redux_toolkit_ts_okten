import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {pokemonActions} from "../redux/slices/pokemonSlice";

const PokemonDataPage = () => {
    const {name} = useParams();
    console.log(name);
    const dispatch = useAppDispatch();
    const {pokemonData}  = useAppSelector(state => state.pokemonSlice);
    console.log(pokemonData);
    console.log(pokemonData.stats);

    useEffect(() => {
        if(name) dispatch(pokemonActions.loadPokemonByName(name));
    }, [name, dispatch]);

    return (
        <div className={"h-full flex flex-col items-center"}>
            <h1 className={"font-bold text-2xl"}>Name: {pokemonData.name.toUpperCase()}</h1>
            <p>ID: {pokemonData.id}</p>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
            <p>WEIGHT: {pokemonData.weight}</p>
            <p>HEIGHT: {pokemonData.height}</p>
            <p>ORDER: {pokemonData.order}</p>
            <ul>STATS: {pokemonData.stats.map(stat=> <li key={stat.stat["name"]}>{stat.stat["name"]} - {stat["base_stat"]} </li>)}</ul>
            <ul>TYPES: {pokemonData.types.map(type => <li key={type.type["name"]}>{type.type["name"]}</li>)}</ul>
            <p>EXPERIENCE: {pokemonData.base_experience}</p>
            <ul>ABILITIES: {pokemonData.abilities.map(abl=> <li key={abl.ability["name"]}>{abl.ability["name"]}</li>)}
            </ul>
            <Link to={"/pokemon/" + pokemonData.name + "/forms"}><button>forms</button></Link>
        </div>
    );
};

export default PokemonDataPage;