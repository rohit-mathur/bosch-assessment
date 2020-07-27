import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation-bar">
            <Nav vertical className="side-nav">
                <NavItem>
                    <NavLink className="nav-icon" to="/">
                        <i className="fa fa-home" />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-icon" to="/two">
                        <i className="fa fa-leaf" />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-icon" to="/three">
                        <i className="fa fa-eye" />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-icon" to="/four">
                        <i className="fa fa-address-book-o" />
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default Navigation;