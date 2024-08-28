import React, {FC} from 'react';
import {IPokemonForm} from "../types";

type IProps = {
    pokemonForm: IPokemonForm,
}
const FormComponent:FC<IProps> = ({pokemonForm }) => {
    return (
        <div className={"w-full text-center"}>
            <img src={pokemonForm.sprites.front_default}
                 alt={pokemonForm.name} className={'w-[250px] h-auto m-auto'}/>
            <p>Id: {pokemonForm.id}</p>
            {pokemonForm.form_name && ( <p>Form-name: { pokemonForm.form_name}</p>)}
            <p>Form-order: {pokemonForm.form_order}</p>
            <p>Order: {pokemonForm.order}</p>
            <p>Pokemon: {pokemonForm.pokemon.name}</p>
            <p key={pokemonForm.version_group.name}>Version-group: {pokemonForm.version_group.name}</p>
            <ul>Types:
                {
                    pokemonForm.types.map((type, index) => (
                        <li key={type[index]}>{type.type.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FormComponent;