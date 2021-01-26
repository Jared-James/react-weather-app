import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import { Context } from './App'

const Main = () => {
    const { lng, lat } = useContext(Context)
    const [weather, setWeather] = useState(null)
    const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=4121e2bbf47852fba430c6df4c48b1f4`
    let sayYes = false

    useEffect(async () => {
        const response = await fetch(API_URL)
        const responseJSON = await response.json()
       setWeather(responseJSON)
       console.log(API_URL)
    }, [API_URL]);

    if (weather === null || weather.cod === '400') {
        console.log('nope')
    } else {
        sayYes = true
    }

    return (
        <>
            <div id="day1">{sayYes ? weather.daily.map(result => {
                return <> <div id="maincontainer">
                    <div id="num1">
                        <ul>
                            <li><p>{moment.unix(result.dt).format('dddd, MMMM Do')}</p></li>
                            <li><p>sunrise: {moment.unix(result.sunrise).format('hh:mm A')}</p></li>
                            <li><p>sunset: {moment.unix(result.sunset).format('hh:mm A')}</p></li>
                            <li><p>High of: {Math.round(result.temp.max)} Degrees</p></li>
                            <li><p>Low of: {Math.round(result.temp.min)} Degrees</p></li>
                        </ul>

                    </div>
                    <div id="num2">
                        <ul>
                            <li><p>Today: {result.weather[0].description}</p></li>
                            <li><p>Feels like: {result.feels_like.day} Degrees</p></li>
                            {result.rain ? <li><p>Rain: {result.rain}mm</p></li> : ''}
                            <li><img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}.png`} /></li>
                        </ul>

                    </div>
                </div>

                </>
            }) : <p>Please Search for a location</p>}</div>
        </>
    )
}

export default Main