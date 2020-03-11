import React from 'react'
import CartProductList from '../../Components/Cart/CartProductList'

const WishList = ({
    productsInCart,
    renderLike = () => {
        const {
            id,
            isLiked,
            addLike,
            removeLike
        } = this.props;

        if(isLiked) {
            removeLike(id)
        } else {
            addLike(id)
        }
    }
}) => {
    return (
        <a href="/"><span className="icon2"></span>
            Wish List (0)
        </a> 
    )
}
export default WishList
