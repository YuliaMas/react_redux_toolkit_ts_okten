import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {pokemonActions} from "../redux/slices/pokemonSlice";
import FormsComponent from "../components/FormsComponent";
import PokemonDataComponent from "../components/PokemonDataComponent";

const PokemonDataPage = () => {
    const {name} = useParams();
    console.log(name);
    const dispatch = useAppDispatch();
    const {pokemonData}  = useAppSelector(state => state.pokemonSlice);
    console.log(pokemonData);
    console.log(pokemonData.forms);

    useEffect(() => {
        if(name) dispatch(pokemonActions.loadPokemonByName(name));
    }, [name, dispatch]);

    return (
        <div className={"flex justify-evenly w-full"}>
           <PokemonDataComponent  pokemonData={pokemonData} />
           <FormsComponent pokemonData={pokemonData}  />
        </div>
    );
};

export default PokemonDataPage;