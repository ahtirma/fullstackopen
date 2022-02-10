import React, {useState, useEffect} from "react";
import axios from 'axios';
import SearchFilterComp from "./components/SearchFilterComp";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  } 

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  }

  const handleSearchFilterChange = (event) => {
    setSearchFilter(event.target.value);
  }

  const personsToShow = searchFilter ? persons.filter(person => {
    return person.name.toLowerCase() === searchFilter.toLowerCase();
  }) : persons;
  

  const doesNameAlreadyExist = () => {
    return persons.find(person => {
      return person.name === newName
    })
  }

  const addPerson = (event) => {
    event.preventDefault();

    if(doesNameAlreadyExist()) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newPhoneNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewPhoneNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilterComp value={searchFilter} onChange={handleSearchFilterChange} />
      
      <h2>Add a new</h2>
      <PersonForm 
        onSubmit={addPerson}
        nameValue={newName} 
        onChangeName={handleNameChange} 
        phoneNumberValue = {newPhoneNumber}
        onChangeNumber={handlePhoneNumberChange} 
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App;
