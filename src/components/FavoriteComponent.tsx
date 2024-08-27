import React from 'react';
import {useDispatch} from "react-redux";
import {toggleFavorite} from "../redux/slices/pokemonSlice";
import {IPokemonType} from "../types";

type IProps = {
    // pokemon: { res:IPokemonData , favorite: boolean}
    pokemon: IPokemonType;
}
const FavoriteComponent = ({pokemon}:IProps) => {
    // const {res, favorite } = pokemon;
    console.log(pokemon);
    // console.log(res);
    console.log(pokemon.favorite.toString());
    const dispatch = useDispatch();

    // useEffect(() => {
    //     // dispatch(pokemons);
    // }, []);
    const handleClick = () => {
        dispatch(toggleFavorite(pokemon.id));
    };
    return (
        <div>
            {pokemon.favorite ? (
                <button className="mt-1 bg-pink-700 p-1 text-white rounded" onClick={handleClick}>
                    Remove Favorite
                </button>
            ) : (
                <button className="mt-1 bg-blue-400 p-1 rounded text-white" onClick={handleClick}>
                    Add to Favorite
                </button>
            )}
        </div>
    );
};

export default FavoriteComponent;