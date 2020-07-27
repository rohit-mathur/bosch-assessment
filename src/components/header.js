import React from 'react';
import logo from './../assets/images/logo.png';

const Header = () => {
    return (
        <header className="py-2 mb-3 d-flex align-items-center justify-content-between">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="user-greetings">
                <p>Hello Guest</p>
            </div>
        </header>
    )
}

export default Header;