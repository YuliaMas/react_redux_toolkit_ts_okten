import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {loadPokemonsByType} from "../redux/reducers/loadPokemons";
import ImageComponent from "./ImageComponent";

const TypeFilterComponent = () => {
        const [type, setType] = useState<string>(' ');
        const pokemonType= useAppSelector(state => state.pokemonSlice.pokemonType);
    console.log(pokemonType.pokemon);
        const submitTypeFilterHandler = () => {
            setType('');
        }
        const dispatch = useAppDispatch();
        useEffect(() => {
            if (!pokemonType) {
                dispatch(loadPokemonsByType(type.trim()))
            }
        }, [pokemonType,dispatch,type]);
        return (
            <div>
                <div>
                    <form id={"filterTypeForm"} name={'pokemon'} onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(loadPokemonsByType(type.trim().toLowerCase()));
                    }}>
                        <input
                            className="py-2 pl-10 md:pr-24 lg:pr-48  w-1/2 text-sm rounded-2xl bg-blue-400 text-gray-800 placeholder-gray-500 appearance-none focus:outline-none focus:font-medium focus:border-gray-900"
                            placeholder={"Enter a pokemon type..."}
                            value={type}
                            onKeyPress={(e: React.KeyboardEvent) => {
                                if (e.key === "Enter") {
                                    submitTypeFilterHandler();
                                }
                            }}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                setType(e.currentTarget.value)
                            }
                        />
                        <button className={"btn border p-1 rounded-2xl border-gray-700 text-gray-800 font-bold"}
                                onSubmit={submitTypeFilterHandler} type={"submit"}>
                            Filter Type
                        </button>
                    </form>
                </div>
                <div>
                <ul className={"grid grid-cols-8"}>
                    {pokemonType?.pokemon?.map((p) => (
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

export default TypeFilterComponent;