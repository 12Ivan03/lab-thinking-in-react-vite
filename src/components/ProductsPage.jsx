
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { useState } from 'react';
import jsonData from '../data.json';

function ProductPage () {

    const [infoData, setInfoData] = useState(jsonData)

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable infoData={infoData} />
        </div>
    );
}

export default ProductPage;