import React from "react"

const CountryDetails = ({country}) => {
    return(
        <div>
          <h2>{country.name.common}</h2>
          <p>Capital {country.capital}</p>
          <p>Population {country.population}</p>
          
          <h3>Languages</h3>
          <ul>
            {Object.keys(country.languages).map(key => {
              return (
                <li key={key}>{country.languages[key]}</li>
              )
            })}
          </ul>
          <img src={country.flags.png} alt={country.name.common} width="200px" />
        </div>
    )    
}

export default CountryDetails;