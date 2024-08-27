import React from 'react';
import SearchComponent from "../components/SearchComponent";
import AbilityFilterComponent from "../components/AbilityFilterComponent";
import TypeFilterComponent from "../components/TypeFilterComponent";

const SearchPage = () => {
    return (
        <div className={"min-h-screen text-center"}>
            <SearchComponent/>
            {/*<AbilityFilterComponent/>*/}
            <TypeFilterComponent/>
        </div>
    );
};

export default SearchPage;