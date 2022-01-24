import React from 'react';
import SearchIcon from '../assets/img/search-icon.png';

function Search() {
    return (
        <>
            <input class="search-bar" type="text" placeholder="Search your destination" />
            <img class="search-icon" src={SearchIcon} alt="" />
        </>
    );
}

export default Search;
