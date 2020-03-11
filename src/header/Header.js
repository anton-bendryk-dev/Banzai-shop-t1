import React from 'react';
import logo from '../images/logo2.png';
import Cart from './cart/Cart';
import {Link} from 'react-router-dom';
import WishList from './WhishList/WhishList'
const Header = () => {
    return (
        <header className="App-header row">
            <div className="col-height50">
                <div className="col-width20">
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                </div>
                <div className="col-width60 flex-ac">
                    <form className="search">
                        <input type="search" name="as_q" id="q" />
                        <input type="submit" value="search" />
                    </form>
                </div>
                <div className="col-width20 contacts">
                    <span></span><p>+380730473537</p>
                </div>
            </div>
            <div className="col-height50">
                <div className="col-width20">
                    <div className="categories"><p>Categories</p>
                        <div className="drop-menu">
                            <div className="menu-buttons"><Link to="/TVPage">TV</Link></div>
                            <div className="menu-buttons"><Link to="/PhonePage">Phones</Link></div>
                            <div className="menu-buttons"><Link to="/LaptopsPage">Laptops</Link></div>
                            <div className="menu-buttons"><Link to="/TabletsPage">iPads</Link></div>
                        </div>
                    </div>
                </div>
                <div className="col-width60 navigation">
                    <Link to="/"><span className="icon1"></span>Home</Link>
                    <WishList/>
                    <a href="https://anton-bendryk-dev.github.io/logistics-solutions/"><span className="icon3"></span>Next site</a>
                    <a href="https://www.facebook.com/profile.php?id=100011041088916"><span className="icon4"></span>Facebook</a>
                </div>
                <div className="col-width20 cart-container">
                    <Cart/>
                </div>
            </div>
        </header>
    )
}
export default Header