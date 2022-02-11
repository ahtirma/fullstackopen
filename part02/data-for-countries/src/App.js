import React, {useState, useEffect} from "react";
import axios from 'axios';
import CountriesToShow from "./components/CountriesToShow";

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
