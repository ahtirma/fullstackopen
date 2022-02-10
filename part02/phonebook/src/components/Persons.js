import React from "react";

const PersonDetails = ({person}) => <li>{person.name} {person.phoneNumber}</li>;

const Persons = ({persons}) => {
    return (
        <ul>
        {persons.map(person => <PersonDetails key={person.id} person={person} />)}
        </ul>
    )
}

export default Persons;