import React, {useState,useEffect} from "react";
import axios from "axios";

const CityWeather = ({country}) => {
    const [weather, setWeather] = useState({});
    const api_key = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(() => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&APPID=${api_key}`)
            .then(response => {
                setWeather(response.data);
            })
    }, []);
   
    if(Object.keys(weather).length) {
        return (
            <div>
                <h3>Weather in {country.capital}</h3>
                <p>temperature {weather.main.temp} Celcius</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                <p>Wind {weather.wind.speed} m/s</p>
            </div>
        )
    }
    return null;
}

export default CityWeather;