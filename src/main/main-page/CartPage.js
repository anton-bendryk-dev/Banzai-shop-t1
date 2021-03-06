import React from 'react'
import {connect} from 'react-redux'
import CartTotal from '../../Components/Cart/CartTotal'
import CartProductList from '../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../Components/Cart/CartProductListItemExtended'

const CartPage = ({
    productsInCart,
}) => {
    return (
        <div className="cart-page">
            <h2 className="page-title">Cart Page</h2>
            <CartTotal
                productsInCart={productsInCart}
            />
                <div className="products-container cart-product-list-container">
                    <CartProductList
                        productsInCart={productsInCart}
                        CartList={CartProductListItemExtended}
                    />
                </div>
        </div>
    )
}

const mapStateToProps = (state)=> ({
    productsInCart:state.productsInCart
})


export default connect(
    mapStateToProps,
)(CartPage)
