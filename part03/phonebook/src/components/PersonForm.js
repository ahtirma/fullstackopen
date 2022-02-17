import React from "react";

const PersonForm = (props) => {
    const {onSubmit, nameValue, onChangeName, phoneNumberValue, onChangeNumber} = props;
    return (
        <form onSubmit={onSubmit}>
        <div>
            name: <input value={nameValue} onChange={onChangeName} />
        </div>
        <div>
            number: <input value={phoneNumberValue} onChange={onChangeNumber} />
        </div>
        <div>
            <button type="submit">ADD</button>
        </div>
        </form>
    )
}

export default PersonForm;