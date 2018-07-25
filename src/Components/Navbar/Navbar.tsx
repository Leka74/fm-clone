import * as React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import './Navbar.css';

const Navbar = (props: any) => (
    <div className="navbar">
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Inbox</NavbarItem>
    </div>
)

export default Navbar;