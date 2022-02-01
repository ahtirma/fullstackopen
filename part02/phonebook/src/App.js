import React, {useState} from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  } 

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    }
    setPersons(persons.concat(personObject));
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
          return (
            <li key={person.name}>{person.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
