import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {IPokemonData} from "../types";

type IProps = {
    pokemonData: IPokemonData,
}
const FormsComponent:FC<IProps> = ({pokemonData}) => {
    const  navigate = useNavigate();
    return (
        <div>
            <h2><strong>FORMS:</strong></h2>
            <ul className={"flex flex-wrap flex-row items-center w-1/3"}>
                {pokemonData.forms?.map(form => <li key={form.name}>
                    <button onClick={() => navigate("/pokemon-form/" + form.name)}
                            className={"p-2 border bg-pink-300 rounded"}> {form.name} </button>
                </li>)}
            </ul>
        </div>
    );
};

export default FormsComponent;