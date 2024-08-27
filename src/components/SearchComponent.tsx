import React, {useEffect, useState} from 'react';
import {loadPokemonByName} from "../redux/reducers/loadPokemons";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {Link} from "react-router-dom";

const SearchComponent = () => {
    const [name, setName] = useState<string>(' ');
    const pokemonData = useAppSelector(state => state.pokemonSlice.pokemonData);
    const submitFormHandler = () => {
        setName("");
    }
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!pokemonData) {
            dispatch(loadPokemonByName(name.trim()));
        }
    }, [pokemonData,dispatch, name]);

    console.log(pokemonData);
    console.log(name);
    return (
        <div>
        <form id={"searchForm"} name={'pokemon'} onSubmit={(e) => {
            e.preventDefault();
            dispatch(loadPokemonByName(name.trim()));
        }}>

            <input
                className="py-2 pl-10 md:pr-24 lg:pr-48  w-1/2 text-sm rounded-2xl bg-blue-400 text-gray-800 placeholder-gray-500 appearance-none focus:outline-none focus:font-medium focus:border-gray-900"
                placeholder={"Enter a pokemon name..."}
                value={name}
                onKeyPress={(e: React.KeyboardEvent) => {
                    if (e.key === "Enter") {
                        submitFormHandler();
                    }
                }}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setName(e.currentTarget.value)
                }
            />
            <button className={"btn border p-1 rounded-2xl border-gray-700 text-gray-800 font-bold"} onSubmit= {submitFormHandler} type={"submit"}>
                Search
            </button>
        </form>

            <hr/>
            {
                pokemonData.name === name.trim()  && (
                    <div className={"flex flex-col justify-center items-center"}>
                        <Link to={`/pokemon/${pokemonData.name}`}>
                            <h1>{pokemonData.name}</h1>
                            <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                        </Link>
                    </div>)
            }
            <hr/>
        </div>
    );
};

export default SearchComponent;