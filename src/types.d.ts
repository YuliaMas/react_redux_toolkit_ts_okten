interface IPokemonTypeInitialState {
    allPokemons: undefined | genericPokemonType[];
    isLoaded: boolean;
}

export interface IGenericPokemonType {
    name: string;
    url: string;
}

type PokemonFilterType = {
    pokemon: FilterType[]
}

type PokemonFilterAbility= {
    pokemon: FilterType[]
}

type FilterType = {
    pokemon: IGenericPokemonType;
    slot: number,
    is_hidden?: boolean
}

type IPokemonType = {
    abilities: IAbilities[],
    base_experience: number | null,
    forms: IGenericPokemonType[],
    id: number | null,
    name: string,
    order: number | null,
    sprites: ISprites,
    stats: IStats[],
    types: ITypes[],
    weight: number | null,
    height: number | null
    favorite: boolean,
}

type PokemonSliceType = {
    pokemons?: IGenericPokemonType[];
    isLoaded?: boolean;
    pokemon?: IPokemonData | null;
    pokemonImage?: ImageData;
    pokemonData: IPokemonData,
    pokemonsAll?: {pokemonsAll: IPokemonType [] , next: null | string,   previous: null | string, count: number } | undefined,
    pageNumber: number
    next: null | string,
    previous: null | string,
    count: number,
    offset : number,
    pokemonType: { pokemon: FilterType[] },
    pokemonAbility: { pokemon: FilterType[] },
    pokemonForm: IPokemonForm
}

type ImageData = {
    front_default: string | null,
}
interface IDataImage {
    dream_world: {
        front_default: string,
    } ,
    home: {
        front_default: string,
        front_female: null,
        front_shiny: string,
        front_shiny_female: null,
        showdown: {
            back_default: string,
            back_shiny: string,
            front_default: string,
            front_shiny: string,
        },
    }
}

export type ISprites = {
    back_default: string,
    // back_female: null,
    back_shiny:string,
    // back_shiny_female: null,
    front_default: string,
    // front_female: null,
    front_shiny: string,
    // front_shiny_female: null,
    // other: IDataImage
}

export interface IPokemonData {
    abilities:IAbilities[],
    base_experience: number | null,
    forms: IGenericPokemonType[],
    id: number | null,
    name: string,
    order: number | null,
    sprites: ISprites,
    stats: IStats[],
    types: ITypes[],
    weight: number | null,
    height: number | null
}

interface IStats {
    base_stat: number,
    stat: {name: string},
}

interface ITypes {
    type: {name: string},
}
interface IAbilities {
    ability: {name: string},
}

type CounterType = {
    count: number,
    next: string | null,
    previous: string | null,
    results: []
}

export interface Name {
    name: string;
    language: NamedAPIResource;
}

export interface NamedAPIResource {
    name: string;
    url: string;
}

export interface NamedAPIResourceList {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
}

export type PokemonPageResult = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
};

export interface IPokemonForm {
    id: number;
    name: string;
    order: number;
    form_order: number;
    is_default: boolean;
    is_battle_only: boolean;
    is_mega: boolean;
    form_name: string;
    pokemon: NamedAPIResource;
    sprites: PokemonFormSprites;
    version_group: NamedAPIResource;
    names: Name[];
    form_names: Name[];
    types: PokemonType[];
}

export interface PokemonFormSprites {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
}
