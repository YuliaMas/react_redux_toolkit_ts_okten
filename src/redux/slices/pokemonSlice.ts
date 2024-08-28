import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {
    getPokemons,
    loadPokemonById,
    loadPokemonByName,
    loadPokemonByUrl,
    loadPokemonForm,
    loadPokemons,
    loadPokemonsByAbility,
    loadPokemonsByType
} from "../reducers/loadPokemons";
import {PokemonSliceType} from "../../types";

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
    offset: 0,
    pokemonType: {pokemon: []},
    pokemonAbility: {pokemon: []},
    pokemonForm: {
        id: 0,
        name: '',
        order: 0,
        form_order: 0,
        is_default: false,
        is_battle_only: false,
        is_mega: false,
        form_name: '',
        pokemon: {
            name: '',
            url: ''},
        sprites: {
            front_default: '',
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
            back_default: null,
            back_female: null,
            back_shiny:  null,
            back_shiny_female:  null,
        },
        version_group:  {
            name: '',
            url: ''},
        names: [],
        form_names: [],
        types: []
    }
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
        prevPage:(state)=>{
            console.log(state.pageNumber);
            state.pageNumber = state.pageNumber-1;
        } ,
        nextPage:(state)=>{
            console.log(state.pageNumber);
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
            .addCase(loadPokemonForm.fulfilled, (state, action) => {
                state.pokemonForm= action.payload;
            })
            .addCase(getPokemons.fulfilled, (state, action) => {
                console.log(state.pokemonsAll);
                state.pokemonsAll= action.payload;
            })
            .addCase(loadPokemonByName.fulfilled, (state, action) => {
                console.log(state.pokemonData);
                state.pokemonData = action.payload;
            })
            .addCase(loadPokemonsByType.fulfilled, (state, action) => {
                console.log(state.pokemonType);
                state.pokemonType = action.payload;
            })
            .addCase(loadPokemonsByAbility.fulfilled, (state, action) => {
                console.log(state.pokemonAbility);
                state.pokemonAbility = action.payload;
            })
            .addCase(loadPokemons.fulfilled, (state, action) => {
                console.log(state.pokemons);
                state.pokemons = action.payload;
            })
            // .addCase(loadPokemons.rejected, (state, action) => {})
            .addMatcher(isFulfilled(loadPokemons, loadPokemonById , loadPokemonByUrl, loadPokemonByName, loadPokemonForm, getPokemons, loadPokemonsByType, loadPokemonsByAbility) , (state) => {
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
    loadPokemonByName,
    getPokemons,
    loadPokemonsByType,
    loadPokemonsByAbility,
    loadPokemonForm
};