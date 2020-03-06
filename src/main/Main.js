import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './main-page/MainPage';
import CartPage from './main-page/CartPage';
const Main = () => {
    return(
        <main className="row">
            <div className="side-bar"></div>
            <div className="inline-main">
            <Route exact path="/" component={MainPage}/>
            <Route path="/cart" component={CartPage}/>
            </div>
        </main>
    )
}

export default Main