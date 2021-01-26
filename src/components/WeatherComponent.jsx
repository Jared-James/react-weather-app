import React, { useState, useEffect, useContext } from 'react'
import Loading from './Loading'
import { Context } from './App'
import MultiWeatherReport from './MultiWeatherReport'

const WeatherComponent = () => {
    const { lng, lat } = useContext(Context)
    const [weather, setWeather] = useState('')
    const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=4121e2bbf47852fba430c6df4c48b1f4`

    const getWeatherLocation = async () => {
        try {
            const result = await fetch(API_URL)


            if (result.status === 200) {
                return { success: true, data: await result.json() }
            }
            return { success: false, error: result.statusText }

        } catch (e) {
            return { success: false, error: e.message }
        }
    }



    useEffect(() => {
        const getWeather = async () => {
            const result = await getWeatherLocation()
            setWeather(result.success ? result.data : '')
        }
        getWeather()
    }, [API_URL]);

    let sayYes = false

    if (weather === null || weather === '') {
        let sayYes = false
    } else {
        sayYes = true
    }

    return (
        <>
            {sayYes ? weather.daily.map(weatherResults => {
                return <div id="WeatherDisplay"><MultiWeatherReport weather={weatherResults} /></div>
            }) : <Loading />}
        </>
    )
}
export default WeatherComponent
