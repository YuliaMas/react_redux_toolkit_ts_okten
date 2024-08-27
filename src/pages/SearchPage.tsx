import React from 'react';
import SearchComponent from "../components/SearchComponent";
import AbilityFilterComponent from "../components/AbilityFilterComponent";
import TypeFilterComponent from "../components/TypeFilterComponent";

const SearchPage = () => {
    return (
        <div className={"min-h-screen text-center"}>
            <hr/>
            <SearchComponent/>
            <hr/>
            <TypeFilterComponent/>
            <hr/>
            <AbilityFilterComponent/>
            <hr/>
        </div>
    );
};

export default SearchPage;