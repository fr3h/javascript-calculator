export const INPUT_NUMBER = 'INPUT_NUMBER';
export const INPUT_DECIMAL = 'INPUT_DECIMAL';
export const INPUT_OPERATOR = 'INPUT_OPERATOR';
export const CALCULATE = 'CALCULATE';
export const CLEAR_CALCULATOR = 'CLEAR_CALCULATOR';

export const inputNumber = (number) => ({
    type: INPUT_NUMBER,
    number
});

export const inputDecimal = () => ({
    type: INPUT_DECIMAL,
});

export const inputOperator = (operator) => ({
    type: INPUT_OPERATOR,
    operator
});

export const calculate = () => ({
    type: CALCULATE
});

export const clear = () => ({
    type: CLEAR_CALCULATOR
});
