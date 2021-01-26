import React, { useState, context } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import SearchBar from './SearchBar'
import '../../styles/styles.scss'



export const Context = React.createContext({ 
    lng: '', 
    setLng: () => {},
    lat: '',
    setLat: () => {},
 })


const App = () => {
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [location, setLocation] = useState('')
    return (
        <>
            <Context.Provider value={{ lng, lat, setLat, setLng }}>
                <div id="grid__container" >
                    <Header />
                    <SearchBar />
                    <Main />
                    <Footer />
                </div >
            </Context.Provider >
        </>
    )
}

export default App