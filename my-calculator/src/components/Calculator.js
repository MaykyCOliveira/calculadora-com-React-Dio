// src/components/Calculator.js
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import { calculate } from '../utils/calculate';
import './Calculator.css';

function Calculator() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            setResult(calculate(expression));
        } else if (value === 'C') {    // Limpa a expressão e o resultado
            setExpression('');
            setResult('');
        } else {
            setExpression(expression + value);
        }
    };

    return (
        <div className="calculator">
            <Display expression={expression} result={result} />
            <ButtonPanel onButtonClick={handleButtonClick} />
        </div>
    );
}

export default Calculator;
