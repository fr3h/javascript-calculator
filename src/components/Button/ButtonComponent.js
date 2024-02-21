import React from 'react';

import './ButtonStyle.scss'

const Button = ({ id, onClick, children }) => (
    <button id={id} className="w-100" onClick={onClick}>
        {children}
    </button>
);

export default Button;
