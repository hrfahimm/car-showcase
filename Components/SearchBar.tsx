/** @format */
"use client";
import React, { useState } from "react";
import { SearchManuFacturer } from ".";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");
    const handleSearch = () => {};

    return (
        <form
            className='searchBar'
            onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManuFacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
            </div>
        </form>
    );
};

export default SearchBar;
