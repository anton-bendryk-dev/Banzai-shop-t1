import React from 'react';
import ProductListItem from './Products/ProductListItem';
import {productsDataTablets} from './Products/ProductsData';

const TabletsPage = () => {
    return (
        <div className="products-container">
            {
                productsDataTablets.map(({
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
export default TabletsPage