import React from 'react';
import logo from '../images/logo2.png';

const Header = () => {
    return (
        <header className="App-header">
            <div className="col-height50">
                <div className="col-width20">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="col-width60 flex-ac">
                    <form class="search">
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
                            <div class="menu-buttons"><a href="">TV</a></div>
                            <div class="menu-buttons"><a href="">Phones</a></div>
                            <div class="menu-buttons"><a href="">Laptops</a></div>
                            <div class="menu-buttons"><a href="">Tablets</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-width60 navigation">
                    <a href="/"><span className="icon1"></span>Home</a>
                    <a href="/"><span className="icon2"></span>Wish List</a>
                    <a href="https://github.com/anton-bendryk-dev"><span className="icon3"></span>My Git Hub</a>
                    <a href="https://www.facebook.com/profile.php?id=100011041088916"><span className="icon4"></span>My Facebook</a>
                </div>
                <div className="col-width20">
                    <div className="cart">
                        <a href="/"><span></span>items()</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header