import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar light expand="md" className="navbar">
                <NavbarBrand href="/"><img src={logo} alt="Travel"/> </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto navbar-nav" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" id="bg" href="#/">Home</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="#/track">Tracking</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="#/visaInfo">Visa Info</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="#/blog">Blog</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                About
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem className="nav-item">
                                    <NavLink className="nav-link" href="#/aboutUs">About Us</NavLink>
                                </DropdownItem>
                                <DropdownItem className="nav-item">
                                    <NavLink className="nav-link" href="#/contactUs">Contact Us</NavLink>
                                </DropdownItem>
                                <DropdownItem className="nav-item">
                                    <NavLink className="nav-link" href="#/faq">FAQ</NavLink>
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link"  href="/"><a className="pt-1 pb-1 pr-3 pl-3" id="ApplyBg">Apply For Visa</a></NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/">login/register</NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;