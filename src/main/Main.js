import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './main-page/MainPage';
import CartPage from './main-page/CartPage';
import TVPage from './main-page/TVPage';
import PhonePage from './main-page/PhonePage';
import LaptopsPage from './main-page/LaptopsPage';
import TabletsPage from './main-page/TabletsPage';
const Main = () => {
    return(
        <main className="row">
            <div className="side-bar"></div>
            <div className="inline-main">
            <Route exact path="/" component={MainPage}/>
            <Route path="/cart" component={CartPage}/>
            <Route path="/TVPage" component={TVPage}/>
            <Route path="/PhonePage" component={PhonePage}/>
            <Route path="/LaptopsPage" component={LaptopsPage}/>
            <Route path="/TabletsPage" component={TabletsPage}/>
            </div>
        </main>
    )
}

export default Main