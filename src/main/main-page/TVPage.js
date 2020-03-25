import React from 'react';
import ProductListItem from './Products/ProductListItem';
import ProductsData from './Products/ProductsData';

const TVPage = () => {
    let productsDataTv = [];
    for(var i = 0; i < ProductsData.length; i++) {
        if(ProductsData[i].type === "TV") {
            productsDataTv.push(ProductsData[i]);
        if(ProductsData.length === 3)break;
        }
    };
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