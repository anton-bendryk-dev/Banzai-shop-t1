import React from 'react';
import {keys} from 'lodash';
import productsData, { getProductsMap } from '../../main/main-page/Products/ProductsData';
import CartProductListItem from './CartProductListItem';

const CartProductList = ({
    productsInCart,
    productsMap = getProductsMap(productsData),
    CartList = CartProductListItem,
}) => {
    return (
        <div>
            {   
                keys(productsInCart).map((productId)=>(
                    <CartList
                        product={productsMap[productId]}
                        productCount={productsInCart[productId]}
                        key={productId}
                    />
                    
                ))
            }
        </div>
    )
}

export default CartProductList
