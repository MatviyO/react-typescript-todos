import React from "react";
import {NavLink} from 'react-router-dom'

 function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper px1">
                <a href="/" className="brand-logo">React + TS</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">List</NavLink></li>
                    <li><NavLink to="/about">Info</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;
