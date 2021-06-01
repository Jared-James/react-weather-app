import React, { useState, useContext } from 'react'
import { Context } from './App'

const SearchBar = () => {

    const [location, setLocation] = useState('')
    const { setLng } = useContext(Context)
    const { setLat } = useContext(Context)

    let typedLocation = `https://www.mapquestapi.com/geocoding/v1/address?key=pWFkAoRnBlpN3k6tm20uC3NopiKYaH6h&location=${location}`

    const handleSubmit = (e) => {
        e.preventDefault()
        getData().then(result => {
            setLat(result.lat)
            setLng(result.lng)
        })
    }

    const handleChange = (e) => {

        setLocation(e.target.value)
    }

    const getData = async () => {
        const response = await fetch(typedLocation)
        const responseJSON = await response.json()
        let lat = responseJSON.results[0].locations[0].latLng.lat
        let lng = responseJSON.results[0].locations[0].latLng.lng
        console.log(responseJSON)
        return {
            lat,
            lng
        }
    }

    return (
        <>
            <div id="search-bar-item">
                <form onSubmit={handleSubmit}>
                    <input
                        type="search"
                        name="search"
                        onChange={handleChange}
                        autoComplete={false}
                    />
                    <button type="submit" value="submit">Search</button>
                </form>
            </div>

        </>
    )
}
export default SearchBar

