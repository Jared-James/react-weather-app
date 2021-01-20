import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Main = () => {

    const API_URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-36.848461&lon=174.76333&units=metric&appid=4121e2bbf47852fba430c6df4c48b1f4'




    const [rain, setRain] = useState(null)



    useEffect(() => {
        async function fetchData() {
            const response = await fetch(API_URL)
            const json = await response.json()
            setRain(json)
        }
        fetchData()
    }, []);


    if (rain) {
        console.log(rain.daily.map(result => result.weather[0].icon))
    }


    return (
        <>
            <div id="day1">{rain && rain.daily.map(result => {
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
                            {result.rain ? <li><p>Rain: {result.rain}mm</p></li> : '' }
                            <li><img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}.png`} /></li>
                        </ul>

                    </div>
                </div>

                </>
            })}</div>
        </>
    )
}

export default Main