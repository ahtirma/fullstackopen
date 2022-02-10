import React, {useState} from "react";

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
      <div>
        Filter shown with <input value={searchFilter} onChange={handleSearchFilterChange} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => {
          return (
            <li key={person.id}>{person.name} {person.phoneNumber}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
