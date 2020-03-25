import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import ProductListItem, {renderLike} from '../../main/main-page/Products/ProductListItem'

const WishList = (

) => {
    return (
        <Link to="/"><span className="icon2"></span>
            Wish List (

            )
        </Link> 
    )
}

export default connect(
)(WishList)
