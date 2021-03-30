import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header>
                <div className="Logo"></div>
                <div className="MainMenu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="orders">Orders</Link></li>
                        <li><Link to="#">Best Deals</Link></li>
                        <li><Link to="#">Admin</Link></li>
                        <li><Link to="#">Login</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Header;