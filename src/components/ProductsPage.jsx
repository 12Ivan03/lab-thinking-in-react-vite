
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { useState } from 'react';
import jsonData from '../data.json';

function ProductPage () {

    const [infoData, setInfoData] = useState(jsonData);

    // update the infoData
    const handleOnChange = (value) => {

        let newInfoData
        
        if(value.length === 0 ){
            newInfoData = jsonData;
        } else {
            newInfoData = jsonData.filter((data) => {
                return data.name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
            })
        }

        setInfoData(newInfoData);
    }

    const filterOnCheck = (e) => {

        let filterOnCheck;

        console.log('the type of th', typeof(ev));

        if(e === false){
            filterOnCheck = jsonData;
        } else {
            filterOnCheck = jsonData.filter((x) => {
                return x.inStock === true;
            })
        }

        setInfoData(filterOnCheck);
    }


    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar handleOnChangePass={handleOnChange} filterOnCheckPass={filterOnCheck} />
            <ProductTable infoData={infoData} />
        </div>
    );
}

export default ProductPage;