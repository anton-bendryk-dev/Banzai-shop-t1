import React from 'react'
import CartProductList from '../../Components/Cart/CartProductList'

const WishList = ({
    productsInCart,
}) => {
    return (
        <a href="/"><span className="icon2"></span>
            Wish List ( {
                <CartProductList
                productsInCart={productsInCart}
            />}0)
        </a>
    )
}
export default WishList
