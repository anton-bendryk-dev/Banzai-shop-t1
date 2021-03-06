import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartTotal from '../../Components/Cart/CartTotal'
import CartProductList from '../../Components/Cart/CartProductList'

const Cart = ({
    productsInCart,
}) => {
    return (
        <div className="cart">
            <Link to="/cart">Show cart<span></span></Link>
            <div className="show-total">
                <CartProductList
                    productsInCart={productsInCart}
                />
                <CartTotal 
                    productsInCart={productsInCart}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=> ({
    productsInCart:state.productsInCart
})
export default connect(
    mapStateToProps
)(Cart)
