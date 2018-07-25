import * as React from 'react';
import './NavbarItem.css';

const NavbarItem = (props: any) => (
    <div className="navbar-item">{props.children}</div>
)

export default NavbarItem;