import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <nav className="header-content">
                <Link to="/">Inventory</Link>
                <Link to="/picklists">Picklists</Link>
            </nav>
        </header>
    )
}

export default Header;
