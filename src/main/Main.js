import React from 'react';
import MainPage from './main-page/MainPage'
const Main = () => {
    return(
        <main className="row">
            <div className="side-bar"></div>
            <div className="inline-main">
                <MainPage/>
            </div>
        </main>
    )
}

export default Main