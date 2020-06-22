import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="primary"
                    variant="dark"
                    sticky="top"
                    expand="sm"
                    className="navbar-custom-container">
                <LinkContainer to="/">
                    <Navbar.Brand>Inventory</Navbar.Brand>
                </LinkContainer>
                <LinkContainer to="/picklists">
                    <Navbar.Brand>Picklists</Navbar.Brand>
                </LinkContainer>
            </Navbar>
        </header>
    )
}

export default Header;
