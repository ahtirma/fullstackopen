import React from "react";

const SearchFilterComp = ({value, onChange}) => {
    return (
        <div>
        Filter shown with <input value={value} onChange={onChange} />
        </div>
    )
}

export default SearchFilterComp;