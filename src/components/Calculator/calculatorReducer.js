import { evaluate } from 'mathjs';

import {
    INPUT_NUMBER,
    INPUT_DECIMAL,
    INPUT_OPERATOR,
    CALCULATE,
    CLEAR_CALCULATOR
} from './calculatorActions';

const initialState = {
    formula: '',
    display: '0',
    decimal: false,
};

const ZERO_AND_OPERATORS = ['', '0', '+', '-', '×', '÷', '='];

function handleInputNumber(state, action) {
    const endChar = state.formula.slice(-1);
    const newFormula = endChar === '=' ? action.number : state.formula.concat(action.number);
    const newDisplay = ZERO_AND_OPERATORS.includes(endChar) ? action.number : state.display.concat(action.number);

    return { ...state, formula: newFormula, display: newDisplay };
}

function handleInputDecimal(state) {
    if (state.decimal) return state;

    return {
        ...state,
        formula: state.formula.concat('.'),
        display: state.display.concat('.'),
        decimal: true,
    };
}

function handleInputOperator(state, action) {
    let updatedFormula = state.formula;
    const endsWithEqual = /=$/; 

    if (endsWithEqual.test(updatedFormula)) {
        updatedFormula = state.display;
    } else {
        const endsWithOperator = /[×÷+-]$/; 
        const endsWithOperatorNegative = /[×÷+]-$/; 

        if (endsWithOperator.test(updatedFormula)) {
            if (action.operator === '-') {
                if (endsWithOperatorNegative.test(updatedFormula)) {
                    updatedFormula = updatedFormula.slice(0, -1);
                }
            } else {
                if (endsWithOperatorNegative.test(updatedFormula)) {
                    updatedFormula = updatedFormula.slice(0, -2);
                } else {
                    updatedFormula = updatedFormula.slice(0, -1);
                }
            }
        }
    }

    updatedFormula = updatedFormula.concat(action.operator);

    return {
        ...state,
        formula: updatedFormula,
        display: action.operator,
        decimal: false,
    };
}

function calculateResult(state) {
    try {
        const evaluation = evaluate(state.formula.replace(/×/g, '*').replace(/÷/g, '/'));
        return {
            ...state,
            formula: state.formula.concat('='),
            display: String(evaluation),
            decimal: false,
        };
    } catch (e) {
        return { ...state, display: 'Error', decimal: false };
    }
}

function calculatorReducer(state = initialState, action) {
    switch (action.type) {
        case INPUT_NUMBER:
            return handleInputNumber(state, action);
        case INPUT_DECIMAL:
            return handleInputDecimal(state);
        case INPUT_OPERATOR:
            return handleInputOperator(state, action);
        case CALCULATE:
            return calculateResult(state);
        case CLEAR_CALCULATOR:
            return initialState;
        default:
            return state;
    }
}

export default calculatorReducer;