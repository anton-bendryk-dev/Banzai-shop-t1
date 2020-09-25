import React from 'react'
import {connect}from 'react-redux'
import Quantity from '../Quantity/Quantity'


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity
}) => (
    <div className="cart-product-list-item-description">
        <div className="product-list-item">
            <div className="product-image">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="product-info">
                <p className="product-title">
                    <span> {product.name} </span> 
                </p>
                <p className="product-features">
                        Price for one item: <span className="bold">$ {product.price} </span> 
                </p>
                <p className="product-features">
                        Selected quantity: <span className="bold"> {productCount} </span>       
                </p>

                <Quantity
                    productsCount={productCount}
                    onDecrementClick={()=>{
                        if(productCount === 1) {
                            removeProductFromCart(product.id)
                        } else {
                            changeProductQuantity(product.id,productCount-1)
                        }
                    }}
                    onIncrementClick={()=>changeProductQuantity(product.id,productCount+1)}
                    minCount={0}
                />

                <p className="product-price">
                        Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                </p>
                <div className="remove-item">
                    <button className="AddToCard remove" onClick={()=>removeProductFromCart(product.id)}>Delete product</button>
                    <button className="AddToCard remove" onClick={()=>removeProductFromCart(product.id)}>Buy</button>
                </div>
            </div>
        </div>
    </div>
    
)

const mapDispatchToProps = (dispatch) => ({
    removeProductFromCart:(id)=>dispatch({
        id:id,
        type:"REMOVE_PRODUCT_FROM_CART",
    }),
    changeProductQuantity:(id,count)=>dispatch({
        id:id,
        count:count,
        type:"CHANGE_PRODUCT_QUANTITY",
    })
})


export default connect(
    null,
    mapDispatchToProps
)(CartProductListItemExtended)
