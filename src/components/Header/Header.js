import React from 'react';
import logo from '../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='nav-parent'>
                <div className='header-nav'>
                    <div className='header-title'>
                        <img src={logo} alt="" />
                        <h1><span className='weapons'>PUBG Best </span>Weapons</h1>
                    </div>
                    <div>
                        <nav className='nav-home'>
                            <a href="/home">Home</a>
                            <a href="/guns">Guns</a>
                            <a href="/contact">Contact Us</a>
                        </nav>
                    </div>
                </div>
            </div>
            <h2 className="total-budget">Total Budget: $10,00000</h2>
        </div>
    );
};

export default Header;