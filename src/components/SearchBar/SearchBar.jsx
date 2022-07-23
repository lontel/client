import { useState } from 'react';

function SearchBar({ filterEvent }) {
    const [SearchBar, setSearchBar] = useState('')

    const handleChange = e => {
        setSearchBar(e.target.value)
        filterEvent(e.target.value)
    }
    console.log('bañucjuvqñduhv', filterEvent)

    return (
        <>
            <h3>Search Events</h3>
            <input type="text" onChange={handleChange} />
            <br />
            <input type="checkbox" name='search' />
            <label htmlFor="search">Only show products in stock</label>
        </>
    )
}

export default SearchBar