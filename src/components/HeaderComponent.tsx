import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul className={"m-4"}>
                <li><Link to={'/'}>ALL POKEMONS</Link></li>
                <li><Link to={'/pokemon/search'}>SEARCH POKEMONS</Link></li>
                <li><Link to={'/pokemon/favorites'}>FAVORITES POKEMONS</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;