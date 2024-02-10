import { useState } from "react";

function SearchBar ({ handleOnChangePass }) {
    const [ value, setValue ] = useState('');

    const handleValue = e => {
        setValue(e.target.value)
        handleOnChangePass(e.target.value)
    }

    return(
        <div>
            <p>Search Bar</p>
            <label>
                <input onChange={handleValue} value={value} type="text" placeholder="Search..." ></input>
            </label>  
        </div>
    )
}

export default SearchBar;