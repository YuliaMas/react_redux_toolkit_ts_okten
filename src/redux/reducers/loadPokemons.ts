import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {pokemonService} from "../../services/api.service";

export const loadPokemons = createAsyncThunk(
    "pokemonSlice/loadPokemons",
    async (_, thunkAPI) => {
        try{
            const pokemons = await pokemonService.getAll();
            console.log(pokemons);
            return thunkAPI.fulfillWithValue(pokemons);
        } catch (e){
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const  loadPokemonById = createAsyncThunk(
    'pokemonSlice/loadPokemonById',
    async (_id:string , thunkAPI) => {
        try {
            const pokemon = await pokemonService.getById(_id);
            console.log(pokemon);
            return thunkAPI.fulfillWithValue(pokemon);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response);
        }
    }
);

export const  loadPokemonByName = createAsyncThunk(
    'pokemonSlice/loadPokemonByName',
    async (name:string , thunkAPI) => {
        try {
            const pokemonData = await pokemonService.getByName(name);
            console.log(pokemonData);
            return thunkAPI.fulfillWithValue(pokemonData);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response);
        }
    }
);

export const  loadPokemonByUrl = createAsyncThunk(
    'pokemonSlice/loadPokemonByUrl',
    async (url:string , thunkAPI) => {
        try {
            const pokemonImage = await pokemonService.getByUrl(url);
            return thunkAPI.fulfillWithValue(pokemonImage);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response);
        }
    }
);
export const  loadPokemonForm = createAsyncThunk(
    'pokemonSlice/loadPokemonForm',
    async (name:string , thunkAPI) => {
        try {
            const pokemonForm = await pokemonService.getPokemonForm(name);
            return thunkAPI.fulfillWithValue(pokemonForm);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response);
        }
    }
);

export const getPokemons = createAsyncThunk(
    'pokemonSlice/getPokemons', async (offset:number, thunkAPI) => {
        try {
            const pokemonListRes = await pokemonService.getPokemonList(offset);
            console.log(pokemonListRes);
            const {count,next, previous } = pokemonListRes;
            const pokemonListData = pokemonListRes.results;
            console.log(pokemonListData);

            const pokemonsAll = await Promise.all(
                pokemonListData.map(async (data) => {
                    const res = await pokemonService.getPokemonDetail(data.url);
                    console.log(res);
                    const {
                        id,
                        name,
                        sprites,
                        weight,
                        height,
                        base_experience,
                        abilities,
                        forms,
                        order,
                        stats,
                        types,
                    } = res;
                    return {
                        id,
                        name,
                        sprites,
                        weight,
                        height,
                        base_experience,
                        abilities,
                        forms,
                        order,
                        stats,
                        types,
                        favorite: false
                    };
                }),
            );
            return  thunkAPI.fulfillWithValue({count, next, previous, pokemonsAll});
        } catch (err) {
            const error= err as AxiosError;
            console.log(error);
            return  thunkAPI.rejectWithValue(error.response);
        }
    });

export const loadPokemonsByType = createAsyncThunk(
    "pokemonSlice/loadPokemonsByType",
    async (endpoint:string, thunkAPI) => {
        try{
            const pokemonsType = await pokemonService.getPokemonsFilterByType(endpoint);
            console.log(pokemonsType);
            return thunkAPI.fulfillWithValue(pokemonsType);
        } catch (e){
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const loadPokemonsByAbility = createAsyncThunk(
    "pokemonSlice/loadPokemonsByAbility",
    async (endpoint:string, thunkAPI) => {
        try{
            const pokemonsAbility = await pokemonService.getPokemonsFilterByAbility(endpoint);
            console.log(pokemonsAbility);
            return thunkAPI.fulfillWithValue(pokemonsAbility);
        } catch (e){
            let error = e as AxiosError;
            return thunkAPI.rejectWithValue(error);
        }
    }
);

