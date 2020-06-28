import React from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className="header-content">
                <NavLink to="/" exact activeClassName="header-active">Inventory</NavLink>
                <NavLink to="/picklists" activeClassName="header-active">Picklists</NavLink>
            </nav>
        </header>
    )
}

export default Header;
