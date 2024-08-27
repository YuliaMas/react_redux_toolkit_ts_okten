import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IGenericPokemonType, IPokemonData, ISprites, NamedAPIResourceList, PokemonFilterType} from "../types";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
});

export const pokemonService = {
    getAll: async ():Promise<IGenericPokemonType[]> => {
        const response = await axiosInstance.get(urls.pokemons.base);
        console.log(response.data.results);
        console.log(response.data);
        return response.data.results;
    },
    getById: async (id: string):Promise<IPokemonData> => {
        console.log(urls.pokemons.byId(id));
        const response = await axiosInstance.get(urls.pokemons.byId(id));
        console.log(response);
        console.log(response.data);
        return response.data;
    },
    getByUrl: async (url: string):Promise<ISprites> => {
        const response = await axiosInstance.get(url);
        console.log(response.data.sprites);
        return response.data.sprites;
    },
    getByName: async (name: string):Promise<IPokemonData> => {
        console.log(urls.pokemons.byName(name));
        const response = await axiosInstance.get(urls.pokemons.byName(name));
        console.log(response.data);
        return response.data;
    },
    getPokemonList: async (offset:number):Promise<NamedAPIResourceList> => {
        const response = await axiosInstance.get(urls.pokemons.base1(offset));
        console.log(response.data);
        console.log(response.data);
        return response.data;
    },
    getPokemonDetail: async (url: string):Promise<IPokemonData> => {
        const response = await axiosInstance.get(url);
        console.log(response.data);
        return response.data;
    },
    getPokemonsFilterByType: async (endpoint:string): Promise<PokemonFilterType> => {
        const response = await axiosInstance.get(urls.pokemons.type(endpoint));
        console.log(response.data);
        return response.data;
    }
}