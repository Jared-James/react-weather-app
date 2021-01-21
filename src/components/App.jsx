import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import SearchBar from './SearchBar'
import '../../styles/styles.scss'





const App = () => (
    <div id="grid__container">
        <Header />
        <SearchBar />
        <Main />
        <Footer />
    </div>
)

export default App