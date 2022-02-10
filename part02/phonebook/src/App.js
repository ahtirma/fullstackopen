import React, {useState} from "react";
import SearchFilterComp from "./components/SearchFilterComp";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phoneNumber: '040-1234567',
      id: 1,
    },
    {
      name: 'Ada Lovelace',
      phoneNumber: '39-44-5323523',
      id: 2,
    },
    {
      name: 'Dan Abramov',
      phoneNumber: '12-43-234345',
      id: 3,
    },
    {
      name: 'Mary Poppendieck',
      phoneNumber: '39-23-6423122',
      id: 4,
    },
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

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
        phoneNumber: newPhoneNumber,
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
