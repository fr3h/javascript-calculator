import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { clear, inputNumber, inputOperator, calculate, inputDecimal } from './calculatorActions.js';

import Button from '../Button/ButtonComponent';
import Display from '../Display/DisplayComponent';

import './CalculatorStyle.scss'

const Calculator = () => {
    const dispatch = useDispatch();
    const formula = useSelector(state => state.calculator.formula);
    const display = useSelector(state => state.calculator.display);

    const calculatorIds = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let numberButtons = [];

    for (let i = 1; i < calculatorIds.length; i++) {
        numberButtons.push(
            <div className="col-4 p-0">
                <Button id={calculatorIds[i]} onClick={() => dispatch(inputNumber(String(i)))}>{i}</Button>
            </div>
        );
    }

    return (
        <div id="calculator" className="bg-black">
            <div className="container">
                <div className="row">
                    <Display formula={formula} value={display} />
                </div>
                <div className="row">
                    <div class="col-6 p-0">
                        <Button id="clear" onClick={() => dispatch(clear())}>AC</Button>
                    </div>
                    <div class="col-3 p-0">
                        <Button id="divide" onClick={() => dispatch(inputOperator('÷'))}>÷</Button>
                    </div>
                    <div class="col-3 p-0">
                        <Button id="multiply" onClick={() => dispatch(inputOperator('×'))}>×</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 p-0 d-flex flex-wrap">
                            {numberButtons}
                            <div className="col-8">
                                <Button id={calculatorIds[0]} onClick={() => dispatch(inputNumber("0"))}>0</Button>
                            </div>
                            <div className="col-4">
                                <Button id="decimal" onClick={() => dispatch(inputDecimal())}>.</Button>
                            </div>
                    </div>
                    <div className='col-3 p-0'>
                        <Button id="subtract" onClick={() => dispatch(inputOperator('-'))}>-</Button>
                        <Button id="add" onClick={() => dispatch(inputOperator('+'))}>+</Button>
                        <Button id="equals" onClick={() => dispatch(calculate())}>=</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;