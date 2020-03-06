import {combineReducers} from 'redux';
import { productLikeReducer } from './productLikeReducer';
import {cartReducer} from './cartReducer';


export const rootReducer = combineReducers({
    likeState:productLikeReducer,
    productsInCart:cartReducer
})
