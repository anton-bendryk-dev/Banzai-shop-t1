import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Quantity from '../../../Components/Quantity/Quantity';

class ProductListItem extends Component {

    state = {
        productsCount: 1,
    }
    
    onIncrementClick = () => {
        this.setState((prevState)=>({
            productsCount:prevState.productsCount + 1
        }))
    }
    onDecrementClick = () => {
        this.setState((prevState)=>({
            productsCount:prevState.productsCount - 1
        }))
    }

    renderLike = () => {
        const {
            id,
            isLiked,
            addLike,
            removeLike,
        } = this.props;
        if(isLiked) {
            removeLike(id)
        } else {
            addLike(id)
        }
    } 
    
    render() {
        const {
            id,
            name,
            image,
            description,
            price,
            type,
            addProductToCart,
            isLiked
        } = this.props; 
        
    return (
        <div className="product-list-item">
            <div className="product-image">
                <img src={image} alt={name} title={name} />
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-price">Price : {price} $</div>
            <Quantity
                    productsCount={this.state.productsCount}
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
                    minCount={1}
                />
            <div className="buttons-container">
                <button className="like" onClick={()=>this.renderLike()}>
                    Wish{isLiked ? <span className="heart1"></span> : <span className="heart2"></span>}
                </button>
                <button className="AddToCard"
                    onClick={()=>addProductToCart(id,this.state.productsCount)}>To Card<span></span>
                </button>
            </div>
        </div>
    )
}
}
ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

ProductListItem.defaultProps = {
    description: "No description ...",
}

const mapStateToProps = (state,props) => ({
    isLiked:state.likeState[props.id]
    
})

const mapDispatchToProps = (dispatch) => ({
    addLike:(id)=>dispatch({
        type:"LIKE",
        id:id
    }),
    removeLike:(id)=>dispatch({
        type:"DISLIKE",
        id:id
    }),
    addProductToCart:(id,count)=>dispatch({
        type:"ADD_PRODUCT_TO_CART",
        id:id,
        count:count
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductListItem) 

