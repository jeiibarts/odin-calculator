// JavaScript code (script.js)
let currentOperand = '';
let previousOperand = '';
let currentOperator = null;
let shouldClearDisplay = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error';
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

function appendNumber(number) {
    if (shouldClearDisplay) {
        clearDisplay();
    }
    currentOperand += number;
    updateDisplay();
}

function addDecimal() {
    if (shouldClearDisplay) {
        clearDisplay();
    }
    if (!currentOperand.includes('.')) {
        currentOperand += '.';
        updateDisplay();
    }
}

function setOperator(operator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    currentOperator = operator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    if (currentOperand === '' || previousOperand === '') return;
    const result = operate(currentOperator, parseFloat(previousOperand), parseFloat(currentOperand));
    currentOperand = result.toString();
    previousOperand = '';
    currentOperator = null;
    shouldClearDisplay = true;
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    currentOperator = null;
    shouldClearDisplay = false;
    updateDisplay();
}

function deleteLast() {
    if (currentOperand !== '') {
        currentOperand = currentOperand.slice(0, -1);
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentOperand === '' ? '0' : currentOperand;
}
