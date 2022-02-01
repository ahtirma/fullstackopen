import React, {useState} from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phoneNumber: '040-1234567',
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  } 

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  }

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
      }
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewPhoneNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(person => {
          return (
            <li key={person.name}>{person.name} {person.phoneNumber}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
