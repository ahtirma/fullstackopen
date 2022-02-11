import React,{useState} from "react";
import CountryDetails from "./CountryDetails";

const DisplayCountry = ({country}) => {
    const [showCountry, setShowCountry] = useState(false);
    
    return (
        <div>
            <div>
                {country.name.common}
                <button 
                    onClick={() => {setShowCountry(!showCountry)}}>
                        {showCountry ? 'hide' : 'show'}
                </button>
            </div>
            {showCountry ? <CountryDetails country={country} /> : null}
        </div>
    )
}

export default DisplayCountry;