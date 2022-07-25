import { useState } from 'react';

function SearchBar({ filterEvent }) {
    const [SearchBar, setSearchBar] = useState('')

    const handleChange = e => {
        setSearchBar(e.target.value)
        filterEvent(e.target.value)
    }

    return (
        <>
            <h3>Search Events</h3>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default SearchBar