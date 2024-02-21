import React from 'react';

import './DisplayStyle.scss';

const Display = ({ formula, value }) => (
    <div>
        <div className="formulaScreen">{formula}</div>
        <div id="display" className="outputScreen p-0">{value}</div>
    </div>
);

export default Display;