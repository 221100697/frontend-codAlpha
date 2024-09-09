let displayValue = '';
let currentOperation = '';
let previousValue = '';

function inputNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function setOperation(operator) {
    if (displayValue !== '') {
        previousValue = displayValue;
        displayValue = '';
        currentOperation = operator;
        document.getElementById('display').value = '';
    }
}

function calculate() {
    if (previousValue !== '' && displayValue !== '') {
        let result;
        if (currentOperation === '+') {
            result = parseFloat(previousValue) + parseFloat(displayValue);
        } else if (currentOperation === '-') {
            result = parseFloat(previousValue) - parseFloat(displayValue);
        } else if (currentOperation === '*') {
            result = parseFloat(previousValue) * parseFloat(displayValue);
        } else if (currentOperation === '/') {
            result = parseFloat(previousValue) / parseFloat(displayValue);
        }

        document.getElementById('display').value = result;
        displayValue = result; // To allow further calculations on the result
        previousValue = '';
        currentOperation = '';
    }
}

function clearDisplay() {
    displayValue = '';
    previousValue = '';
    currentOperation = '';
    document.getElementById('display').value = '';
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}
