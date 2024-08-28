import React, {FC} from 'react';
import {IPokemonForm} from "../types";

type IProps = {
    pokemonForm: IPokemonForm,
}
const FormComponent:FC<IProps> = ({pokemonForm }) => {
    return (
        <div className={"w-full text-center"}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonForm.id}.png`}
                 alt={pokemonForm.name} className={'w-[250px] h-auto m-auto'}/>
            <p>Id: {pokemonForm.id}</p>
            <p>Form-name: {pokemonForm.form_name && pokemonForm.form_name}</p>
            <p>Form-order: {pokemonForm.form_order}</p>
            <p>Order: {pokemonForm.order}</p>
            <p>Pokemon: {pokemonForm.pokemon.name}</p>
            <p>Version-group: {pokemonForm.version_group.name}</p>
            <ul>Types:
                {
                    pokemonForm.types.map(type => (
                        <li key={type.name}>{type.type.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FormComponent;