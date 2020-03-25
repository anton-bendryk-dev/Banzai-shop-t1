import React from 'react';
import ProductListItem from './Products/ProductListItem';
import ProductsData from './Products/ProductsData';

const PhonePage = () => {
    let productsDataPhone = [];
    for(var i = 0; i < ProductsData.length; i++) {
        if(ProductsData[i].type === "phone") {
            productsDataPhone.push(ProductsData[i]);
        if(ProductsData.length === 3)break;
        }
    };
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