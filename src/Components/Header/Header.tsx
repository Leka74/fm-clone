import * as React from 'react';
import Button from '../Button/Button';
import './Header.css';

const Header = (props: any) => (
    <div className="header">
        <div className="header-club">Internazionale</div>
        <div className="header-manager">Leke Dobruna</div>
        <Button>Continue</Button>
    </div>
)

export default Header;