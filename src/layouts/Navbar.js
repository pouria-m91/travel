import React, { useState } from 'react';
import '../styles/navbar.css';
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
import Container from "@material-ui/core/Container";
import NavbarText from "reactstrap/es/NavbarText";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container maxWidth="lg">
            <Navbar light expand="md" className="navbar">
                <NavbarBrand href="/"><img src={logo} alt="Travel"/> </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto navbar-nav" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" id="bg" href="/">Home</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/track">Tracking</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/vi">Visa Info</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/aboutUs">About Us</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/contactUs">Contact Us</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/faq">FAQ</NavLink>
                        </NavItem>
                        {/*<UncontrolledDropdown nav inNavbar>*/}
                        {/*    <DropdownToggle nav caret>*/}
                        {/*        About*/}
                        {/*    </DropdownToggle>*/}
                        {/*    <DropdownMenu right>*/}
                        {/*        <DropdownItem className="nav-item">*/}
                        {/*           */}
                        {/*        </DropdownItem>*/}
                        {/*        <DropdownItem className="nav-item">*/}
                        {/*        */}
                        {/*        </DropdownItem>*/}
                        {/*        <DropdownItem className="nav-item">*/}
                        {/*            */}
                        {/*        </DropdownItem>*/}

                        {/*    </DropdownMenu>*/}
                        {/*</UncontrolledDropdown>*/}
                        {/*<NavItem className="nav-item">*/}
                        {/*    <NavLink className="nav-link"  href="/"><a className="pt-1 pb-1 pr-3 pl-3" id="ApplyBg">Apply For Visa</a></NavLink>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem className="nav-item">*/}
                        {/*    <NavLink className="nav-link" href="/">login/register</NavLink>*/}
                        {/*</NavItem>*/}
                    </Nav>
                    <NavbarText className="nav-item">
                        <NavLink className="nav-link"  href="/"><label className="pt-1 pb-1 pr-3 pl-3" id="ApplyBg">Apply For Visa</label></NavLink>
                    </NavbarText>
                    <NavbarText className="nav-item">
                        <NavLink className="nav-links" href="/"><label id="reg">login/register</label></NavLink>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </Container>
    );
};

export default NavBar;