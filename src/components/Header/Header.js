import React from 'react';
import './Header.css';
import Logo from '../../media/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Header = () => {
    function navBar() {
        const navBar = document.getElementById("MainMenu");
        if (navBar.className === "MainMenu") {
            navBar.className = "Responsive";
        } else {
            navBar.className = "MainMenu";
        }
    };
    return (
        <div>
            <header>
                <div id="result"></div>
                <div className="container">
                    <div className="Logo">
                        <Link to="/"><img src={Logo} alt="FoodBasket" /></Link>
                    </div>
                    <nav className="MainMenu" id="MainMenu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/orders">Orders</Link></li>
                            <li><Link to="#">Best Deals</Link></li>
                            <li><Link to="/admin">Admin</Link></li>
                            <li><Link to="/login"><span className="LoginBtn">Login</span></Link></li>
                        </ul>
                    </nav>
                    <div className="NavBar">
                        <span onClick={navBar}>
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;