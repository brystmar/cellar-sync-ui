import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';

function Header(props) {
    return (
        <Navbar bg="primary"
                variant="dark"
                sticky="top"
                expand="sm"
                className="navbar-custom-container">
            <LinkContainer to="/">
                <Navbar.Brand>{props.userName} Cellar</Navbar.Brand>
            </LinkContainer>
        </Navbar>
    )
}

export default Header;
