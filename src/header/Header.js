import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <header className="App-header">
            <div className="col-height50">
                <div className="col-width20">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="col-width60">g</div>
                <div className="col-width20">e</div>
            </div>
            <div className="col-height50">
                <div className="col-width20">e</div>
                <div className="col-width60">f</div>
                <div className="col-width20">f</div>
            </div>
        </header>
    )
}
export default Header