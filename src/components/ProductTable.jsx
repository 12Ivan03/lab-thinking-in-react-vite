import './ProductTable.css'

function ProductTable (props) {
    const { infoData } = props
    //const {category, price, inStock, name, id} = props

    return(
        <div className='product-container'>
                    <div className="product-row">
                        <p><b>Products</b></p>
                        <p><b>Price</b></p>
                    </div>
            {infoData.map((x) => {
                return (
                    <div key={x.id} className="product-row product-items">
                        {x.inStock ? <p>{x.name}</p> : <p style={{color:"red"}} >{x.name}</p>}
                        <p>{x.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductTable;
