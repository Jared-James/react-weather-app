import React, { useState } from 'react'

const SearchBar = () => {
    const [title, setTitle] = useState('')


    return (
        <>
            <div id="search-bar">
                <div>
                    <form>
                        <input
                            type="search"
                            name="search"
                        />
                        <button type="submit" value="submit">Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SearchBar



