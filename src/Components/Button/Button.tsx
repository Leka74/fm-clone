import * as React from 'react';
import './Button.css';

const Button = (props: any) => (
    <div className="button">{props.children}</div>
)

export default Button;