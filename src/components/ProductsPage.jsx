
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { useState } from 'react';
import jsonData from '../data.json';

function ProductPage () {

    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable jsonData={jsonData} />
        </div>
    );
}

export default ProductPage;