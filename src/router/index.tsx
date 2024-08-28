import React from 'react';
import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import PokemonsPage from "../pages/PokemonsPage";
import PokemonDataPage from "../pages/PokemonDataPage";
import SearchPage from "../pages/SearchPage";
import PokemonFormPage from "../pages/PokemonFormPage";

const routes: RouteObject[] = [
    {
        path: '/', element: <MainLayout/>, errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <PokemonsPage/>},
            {path: '/pokemon', element: <PokemonsPage/>},
            {path: '/pokemon/search', element: <SearchPage/>},
            {path: '/pokemon-form/:name', element: <PokemonFormPage/>},
            {path: '/pokemon/:name', element: <PokemonDataPage/>},
            // {path: '/pokemon/favorites', element: <FavPokemonsPage/>},
        ]
    }
]
export const router = createBrowserRouter(routes);