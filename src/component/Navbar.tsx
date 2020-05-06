import React from "react";

 function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper px1">
                <a href="/" className="brand-logo">React + TS</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">List</a></li>
                    <li><a href="/">Info</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;
