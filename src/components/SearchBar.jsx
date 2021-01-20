import React from 'react'

const SearchBar = () => {
    return (
        <>
            <div id="search-bar">
                <div>
                    <form>
                        <input type="search" name="search" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchBar