import React, {useState, useEffect} from "react";
import personsService from "./services/persons";
import SearchFilterComp from "./components/SearchFilterComp";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersonsData => {
        setPersons(initialPersonsData);
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
      }
      personsService
        .create(personObject)
        .then(returnedPersonObj => {
          setPersons(persons.concat(returnedPersonObj));
          setNewName('');
          setNewPhoneNumber('');
        })
    }
  }

  const removePerson = (id) => {
    const person = persons.find(person => person.id === id);
    const confirmation = window.confirm(`Delete ${person.name} ?`);
    
    if(confirmation) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
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
      <Persons persons={personsToShow} removePerson={removePerson} />
    </div>
  )
}

export default App;
