import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__logo">
                        <a href="#">
                            <h1 className="header__title">
                                Velocity
                            </h1>
                        </a>
                    </div>
                    <div className="header__links">
                        <a href="#" className="header__link">
                            Home
                        </a>
                        <a href="#" className="header__link">
                            Contact
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;