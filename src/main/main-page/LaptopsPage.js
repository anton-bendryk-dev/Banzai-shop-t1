import React from 'react';
import ProductListItem from './Products/ProductListItem';
import {productsDataLaptops} from './Products/ProductsData';

const LaptopsPage = () => {
    return (
        <div className="products-container">
            {
                productsDataLaptops.map(({
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
                                type= {type}
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
export default LaptopsPage