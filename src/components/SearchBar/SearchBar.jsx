import { useState } from 'react';

function SearchBar({ filterEvents }) {

    return (
        <>
            <h3>Search Events</h3>
            <input type="text" onChange={filterEvents} />
        </>
    )
}

export default SearchBar