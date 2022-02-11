import React, {useState, useEffect} from "react";
import axios from 'axios';

const CountriesToShow = (props) => {
  const {countries} = props;

  if(countries.length > 10) {
    return (
      <p>Too many matches, specify another filter.</p>
    )
  }
  if(countries.length === 1) {
    const country = countries[0];
    
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
        <img src={country.flags.png} alt={country.name.common} />
      </div>
    )
  }
  return (
    <ul>
      {countries.map(country => {
        return (
          <li key={country.name.common}>{country.name.common}</li>
        )
      })}
    </ul>
  )
}

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filterCountries = () => {
    console.log(searchQuery);
    if(searchQuery.length){
      const filteredCountries = countries.filter(country => {
        return country.name.common.toLowerCase().match(searchQuery.toLowerCase());
      });
      return filteredCountries;
    }
    return [];
  }

  return (
    <div>
      Find Countries <input value={searchQuery} onChange={handleSearchQueryChange} />
      <div>
        <CountriesToShow countries={filterCountries()} />
      </div>
    </div>
  )
}

export default App;
