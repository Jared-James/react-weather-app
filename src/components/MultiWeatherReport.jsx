import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'

const MultiWeatherReport = (props) => {
    const weather = props.weather
    return (
        <>
            <div id="day1">
                <div id="section-1">
                    <ul>
                        <li><p>{moment.unix(weather.dt).format('dddd, MMMM Do')}</p></li>
                        <li><p>sunrise: {moment.unix(weather.sunrise).format('hh:mm A')}</p></li>
                        <li><p>sunset: {moment.unix(weather.sunset).format('hh:mm A')}</p></li>
                        <li><p>High of: {Math.round(weather.temp.max)} Degrees</p></li>
                        <li><p>Low of: {Math.round(weather.temp.min)} Degrees</p></li>
                    </ul>
                </div>
                <div id="section-2">
                    <ul>
                        <li><p>{weather.weather[0].description}</p></li>
                        <li><p>Feels like: {weather.feels_like.day} Degrees</p></li>
                        {props.weather.rain ? <li><p>Rain: {weather.rain}mm</p></li> : ''}
                        <li><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MultiWeatherReport

