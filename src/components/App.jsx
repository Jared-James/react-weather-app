import React, { useState, context } from 'react'
import Footer from './Footer'
import Header from './Header'
import WeatherComponent from './WeatherComponent'
import SearchBar from './SearchBar'
import '../../styles/styles.scss'



export const Context = React.createContext({
    lng: '',
    setLng: () => { },
    lat: '',
    setLat: () => { },
})


const App = () => {
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')

    return (
        <>
            <Context.Provider value={{ lng, lat, setLat, setLng }}>
                <div id="grid-container">
                    <div id="Header"><Header /></div>
                    <div id="Search-Bar"><SearchBar /></div>
                    <div id="WeatherDisplayApp"><WeatherComponent /></div>
                    <div id="Footer"><Footer /></div>
                </div >
            </Context.Provider >
        </>
    )
}

export default App