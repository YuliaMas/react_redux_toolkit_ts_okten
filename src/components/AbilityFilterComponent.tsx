import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {loadPokemonsByAbility, loadPokemonsByType} from "../redux/reducers/loadPokemons";
import ImageComponent from "./ImageComponent";

const AbilityFilterComponent = () => {
    const [ability, setAbility] = useState<string>(' ');
    const pokemonAbility = useAppSelector(state => state.pokemonSlice.pokemonAbility);
    console.log(pokemonAbility.pokemon);
    const submitAbilFilterHandler = () => {
        setAbility('');
    }
    // const pokemonType= useAppSelector(state => state.pokemonSlice.pokemonType);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!pokemonAbility) {
            dispatch(loadPokemonsByAbility(ability.trim()))
        }
    }, [pokemonAbility, dispatch, ability]);
    return (
        <div>
            <div>
                <form id={"filterAbilityForm"} name={'pokemon'} onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(loadPokemonsByAbility(ability.trim().toLowerCase()));
                }}>
                    <input
                        className="py-2 pl-10 md:pr-24 lg:pr-48  w-1/2 text-sm rounded-2xl bg-blue-400 text-gray-800 placeholder-gray-500 appearance-none focus:outline-none focus:font-medium focus:border-gray-900"
                        placeholder={"Enter a pokemon ability..."}
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
                       Ability Filter
                    </button>
                </form>
            </div>
            <div>
                <ul className={"grid grid-cols-8"}>
                    {pokemonAbility?.pokemon?.map((p) => (
                            <li key={p.pokemon.name} className={"w-1/3"}>
                                <ImageComponent {...p.pokemon}/>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default AbilityFilterComponent;