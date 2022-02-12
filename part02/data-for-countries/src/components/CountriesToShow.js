import React from "react";
import CountryDetails from "./CountryDetails";
import DisplayCountry from "./DisplayCountry";
import CityWeather from "./CityWeather";

const CountriesToShow = ({countries}) => {

    if(countries.length > 10) {
      return (
        <p>Too many matches, specify another filter.</p>
      )
    }
    
    if(countries.length === 1) {
      const country = countries[0];
      return(
        <>
          <CountryDetails country={country} />
          <CityWeather country={country} />
        </>
      )
    }

    return (
      <div>
        {countries.map(country => <DisplayCountry key={country.name.common} country={country} />)}
      </div>
    )
  }

  export default CountriesToShow;