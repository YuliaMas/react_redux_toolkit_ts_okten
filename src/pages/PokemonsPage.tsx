import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import FavoriteComponent from "../components/FavoriteComponent";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {getPokemons} from "../redux/reducers/loadPokemons";
import {nextPage, prevPage} from "../redux/slices/pokemonSlice";

const FavPokemonsPage = () => {
    const {pokemonsAll,count, previous, next}= useAppSelector((state) => state.pokemonSlice);
    const dispatch = useAppDispatch();
    const [offset, setOffset] = useState(0);

    const counterPages = useAppSelector(state => state.pokemonSlice.pageNumber);
    const handlePrevious = () => {
        dispatch(prevPage(offset-20));
        return setOffset(prevState => offset >= 20 ? prevState - 20: offset);
    };

    const handleNext = () => {
        dispatch(nextPage(offset+20));
        return setOffset(prevState => prevState + 20);
    };
    useEffect(() => {
        dispatch(getPokemons(offset));
    }, [offset, next, previous,counterPages, dispatch]);
    console.log(pokemonsAll);

    const totalFavorite = pokemonsAll?.pokemonsAll.filter((p) => p.favorite).length;
    console.log(totalFavorite);

    return (
        <div>
            FavPokemons Page
            <h3 key={totalFavorite}>Favorites : ❤ {totalFavorite}</h3>
            <div>
             <ul className={"grid grid-cols-5 gap-5"}>
                {pokemonsAll?.pokemonsAll.map((pokemon) =>
                    (
                                <li key={pokemon.id} className={"w-full flex flex-col border rounded text-center justify-center items-center"}>
                                    <Link to={'pokemon/' + pokemon.name}>
                                        <h2 className={"font-bold"}>{pokemon.name.toUpperCase()}</h2>
                                        <img className={"w-[150px] height-[150px]"}
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                            alt={pokemon.name}/>
                                    </Link>
                                    <div className="p-1" key={pokemon.id}>
                                        <FavoriteComponent pokemon={pokemon}/>
                                    </div>
                                </li>
                    ))
                }
                </ul>
            </div>
            <div className={"flex justify-evenly w-2/6 m-auto mt-2"}>
                <button onClick={handlePrevious} className={"btn bg-blue-400 p-2 border rounded"}  disabled={offset <= 0}>
                    prev
                </button>
                <hr/>
                <h2 className={"btn bg-blue-400 p-4 border rounded font-bold text-2xl"} >{counterPages}</h2>
                <hr/>
                <button onClick={handleNext} className={"btn bg-blue-400 p-2 border rounded"} disabled={offset >= (pokemonsAll ? pokemonsAll.count : count)}>
                    next
                </button>
            </div>
        </div>
    )
};

export default FavPokemonsPage;