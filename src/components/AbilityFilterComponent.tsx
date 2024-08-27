import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {loadPokemonByName} from "../redux/reducers/loadPokemons";

const AbilityFilterComponent = () => {

    const [ability, setAbility] = useState<string>(' ');
    const {pokemonsAll}= useAppSelector(state => state.pokemonSlice);
    const submitAbilFilterHandler = () => {
        setAbility('');
    }
    const dispatch = useAppDispatch();
    // useEffect(() => {
    //     if (!pokemonData) {
    //         dispatch(loadPokemonByName(name.trim()))
    //     }
    // }, [pokemonData,dispatch, name]);
    //
    // console.log(pokemonData);
    // console.log(name);
    return (
        <div>
            <form id={"filterAbilityForm"} name={'pokemon'} onSubmit={(e) => {
                e.preventDefault();
                dispatch(loadPokemonByName(ability.trim().toLowerCase()));
            }}>

                <input
                    className="py-2 pl-10 md:pr-24 lg:pr-48  w-1/2 text-sm rounded-2xl bg-blue-400 text-gray-800 placeholder-gray-500 appearance-none focus:outline-none focus:font-medium focus:border-gray-900"
                    placeholder={"Enter a pokemon name..."}
                    value={ability}
                    onKeyPress={(e: React.KeyboardEvent) => {
                        if (e.key === "Enter") {
                            submitAbilFilterHandler();
                        }
                    }}
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                        setAbility(e.currentTarget.value)
                    }
                />
                <button className={"btn border p-1 rounded-2xl border-gray-700 text-gray-800 font-bold"}
                        onSubmit={submitAbilFilterHandler} type={"submit"}>
                    Filter ability
                </button>
            </form>
        </div>
    );
};

export default AbilityFilterComponent;