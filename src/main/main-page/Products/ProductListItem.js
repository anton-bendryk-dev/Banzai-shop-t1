import React from 'react';
import PropTypes from 'prop-types';

const ProductListItem = ({
    name,
    description = "No description ...",
    type,
    price,
    image
}) => {
    return (
        <div className="product-list-item">
            <div className="product-image">
                <img src={image} alt={name} title={name} />
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-price">Price : {price} $</div>
            <div className="product-quantity">
                <button>-</button>
                <input type="text" value={0} readOnly />
                <button>+</button>
            </div>
            <div className="buttons-container">
                <button className="like">Wish<span></span></button>
                <button className="AddToCard">To Card<span></span></button>
            </div>
        </div>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    capacity: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductListItem.defaultProps = {
    description: "No description ...",
}

export default ProductListItem
