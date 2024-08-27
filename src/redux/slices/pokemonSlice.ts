import {createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {
    getPokemons,
    loadPokemonById,
    loadPokemonByName,
    loadPokemonByUrl,
    loadPokemons
} from "../reducers/loadPokemons";
import {PokemonSliceType} from "../../types";
// import {getPokemonData} from "../reducers/getPokemonData";

const pokemonInitState: PokemonSliceType = {
    pokemonsAll: {pokemonsAll: [], next: null , previous: null, count: 0,},
    pokemons: [],
    isLoaded: false,
    pokemon:  null,
    pokemonImage: {front_default: null} ,
    pokemonData:  {
        abilities: [],
        base_experience: null,
        forms: [],
        id: null,
        name: '',
        height: null,
        sprites: {
            back_default: '',
            back_shiny: '',
            front_default:'',
            front_shiny: '',
            // other?: {},
        },
        stats: [],
        types: [],
        weight: null,
        order: null
    },
    pageNumber: 1,
    next: null ,
    previous: null,
    count: 0,
    offset: 0
}
export const pokemonSlice = createSlice({
    name: "pokemonSlice",
    initialState: pokemonInitState,
    reducers: {
        toggleFavorite(state, action) {
            console.log(state.pokemonsAll);
            const pokemonsAll = state.pokemonsAll?.pokemonsAll.find((pokemon) => {
                // localStorage.setItem({id : pokemon.id});
                return pokemon.id === action.payload;
            });
            console.log(pokemonsAll);
            if (pokemonsAll) {
                // !pokemonsAll?.favorite ? (pokemonsAll.favorite = true) : (pokemonsAll.favorite = false)
                pokemonsAll.favorite = !pokemonsAll.favorite ;
                console.log(pokemonsAll.favorite);
            }
            console.log(pokemonsAll?.favorite);
        },
        prevPage:(state, action:PayloadAction<number>)=>{
            console.log(state.pageNumber);
            // state.offset = state.offset - action.payload;
            state.pageNumber = state.pageNumber-1;
        } ,
        nextPage:(state, action:PayloadAction<number>)=>{
            console.log(state.pageNumber);
            state.offset = state.offset + action.payload;
            state.pageNumber = state.pageNumber+1;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loadPokemonById.fulfilled, (state, action) => {
                console.log(state.pokemon);
                state.pokemon = action.payload;
            })
            .addCase(loadPokemonByUrl.fulfilled, (state, action) => {
                state.pokemonImage = action.payload;
            })
            .addCase(getPokemons.fulfilled, (state, action) => {
                console.log(state.pokemonsAll);
                // console.log(state.data);
                state.pokemonsAll= action.payload;
            })
            // .addCase(getPokemonData.fulfilled, (state, action) => {
            //     console.log(state.pokemons);
            //     state.pokemonImage = action.payload;
            // })
            .addCase(loadPokemonByName.fulfilled, (state, action) => {
                console.log(state.pokemonData);
                state.pokemonData = action.payload;
            })
            .addCase(loadPokemons.fulfilled, (state, action) => {
                // state.allPokemons = action.payload;
                console.log(state.pokemons);
                state.pokemons = action.payload;
            })
            .addCase(loadPokemons.rejected, (state, action) => {})
            .addMatcher(isFulfilled(loadPokemons, loadPokemonById , loadPokemonByUrl, loadPokemonByName, getPokemons) , (state, action) => {
                state.isLoaded = true;
            })
    }
});

export const {nextPage, prevPage, toggleFavorite} = pokemonSlice.actions;
export const pokemonActions = {
    ...pokemonSlice.actions,
    ...pokemonSlice.reducer,
    loadPokemons,
    loadPokemonById,
    loadPokemonByUrl,
    // getPokemonData,
    loadPokemonByName,
    getPokemons,
};