import React from 'react';
import ProductListItem from './Products/ProductListItem';
import {productsDataPhone} from './Products/ProductsData';

const PhonePage = () => {
    return (
        <div className="products-container">
            {
                productsDataPhone.map(({
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
export default PhonePage 