import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {pokemonActions} from "../redux/slices/pokemonSlice";
import FormComponent from "../components/FormComponent";

const PokemonFormPage = () => {
    const {name} = useParams();
    console.log(name);
    const dispatch = useAppDispatch();
    const {pokemonForm} = useAppSelector(state => state.pokemonSlice);
    console.log(pokemonForm);
    useEffect(() => {
        if(name) dispatch(pokemonActions.loadPokemonForm(name));
    }, [dispatch, name]);
    return (
        <div className={'h-screen'}>
            <h2 className={"text-2xl font-bold text-center"}>{name?.toUpperCase()}</h2>
            <FormComponent pokemonForm={pokemonForm}/>
        </div>
    );
};

export default PokemonFormPage;