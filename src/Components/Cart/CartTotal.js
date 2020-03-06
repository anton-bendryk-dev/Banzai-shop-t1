import React from 'react'
import {keys} from 'lodash'
import productsData, { getProductsMap } from '../../main/main-page/Products/ProductsData'

const CartTotal = ({
    productsInCart,
    productsMap = getProductsMap(productsData)
}) => {
    return (
        <div className="total">
            Total : {
                keys(productsInCart).reduce((total,productId)=>(
                    total + (productsMap[productId].price * productsInCart[productId] )
                ),0)
            } $
        </div>
    )
}

export default CartTotal
