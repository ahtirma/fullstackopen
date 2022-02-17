import React from "react";

const PersonDetails = ({person, removePerson}) => {
    return (
        <li>
            {person.name} {person.number} <button onClick={removePerson}>delete</button>
        </li>
    )
}

export default PersonDetails;