
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { useState } from 'react';
import jsonData from '../data.json';

function ProductPage () {

    const [infoData, setInfoData] = useState(jsonData)

    // update the infoData
    const handleOnChange = (value) => {

        let newInfoData
        
        if(value.length === 0 ){
            newInfoData = jsonData;
        } else {
            newInfoData = jsonData.filter((data) => {
                return data.name.includes(value)
            })
        }

        setInfoData(newInfoData)
    }


    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar handleOnChangePass={handleOnChange} />
            <ProductTable infoData={infoData} />
        </div>
    );
}

export default ProductPage;