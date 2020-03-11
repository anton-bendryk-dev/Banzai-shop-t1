import React from 'react';
import ProductListItem from './Products/ProductListItem';
import {productsDataTv} from './Products/ProductsData';

const TVPage = () => {
    return (
        <div className="products-container">
            {
                productsDataTv.map(({
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
export default TVPage 