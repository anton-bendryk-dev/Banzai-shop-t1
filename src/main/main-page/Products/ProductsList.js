import React from 'react'
import ProductListItem from './ProductListItem'
import ProductsData from './ProductsData.js'

const ProductsList = () => {
    return (
        <div className="products-container">
            {
                ProductsData.map(({
                    id,
                    name,
                    description,
                    type,
                    price,
                    image
                }) => (
                        <div key={id}>
                            <ProductListItem
                                name={name}
                                description={description}
                                type={type}
                                price={price}
                                image={image}
                                id={id}
                            />
                        </div>
                    ))
            }
        </div>
    )
}

export default ProductsList
