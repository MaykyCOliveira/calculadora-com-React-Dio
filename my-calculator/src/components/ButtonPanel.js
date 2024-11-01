// src/components/ButtonPanel.js
import React from 'react';
import Button from './Button';

const buttons = [
    'C', '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
];

function ButtonPanel({ onButtonClick }) {
    return (
        <div className="button-panel">
            {buttons.map((label) => (
                <Button key={label} label={label} onClick={onButtonClick} />
            ))}
        </div>
    );
}

export default ButtonPanel;
