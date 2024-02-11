import { useState } from "react";

function SearchBar ({ handleOnChangePass, filterOnCheckPass }) {
    const [ value, setValue ] = useState('');
    const [ check, setCheck ] = useState(false);

    const handleValue = e => {
        setValue(e.target.value)
        handleOnChangePass(e.target.value)
    }

    const handleCheckBox = e => {
        console.log('this is the event check ==> ', e.target.checked,'this is the check itself', check)
        setCheck(!check);
        filterOnCheckPass(e.target.checked);
    }

    return(
        <div>
            <label> Search Bar
            <br />
                <input onChange={handleValue} value={value} type="text" placeholder="Search..." ></input>
            </label>  
            <br />
            <br />
            <label> Only products in stock
                <input type="checkbox" name="products" checked={check} onChange={handleCheckBox} />
            </label>
        </div>
    )
}

export default SearchBar;