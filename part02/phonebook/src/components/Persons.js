import React from "react";
import PersonDetails from "./PersonDetails";

const Persons = ({persons, removePerson}) => {
    return (
        <ul>
        {persons.map(person => <PersonDetails key={person.id} person={person} removePerson={() => removePerson(person.id)} />)}
        </ul>
    )
}

export default Persons;