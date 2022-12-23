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
  return a / b;
}
function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}
let display = '0';
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let decimal = false;

const displayScreen = document.getElementById('display');
const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');
const deleteButton = document.getElementById('delete');
const decimalButton = document.getElementById('decimal');

clearButton.addEventListener('click', () => {
    display = '0';
    displayScreen.innerText = display;
    firstNumber = '';
    secondNumber = '';
    operator = '';
    decimal = false;
});

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display === '0') {
            display = button.textContent;
            firstNumber = display;
        } else if (operator !== '' && secondNumber === '') {
            display = button.textContent;
            secondNumber = display;
            decimal = false;
        } else {
            if (secondNumber !== '') {
                secondNumber = secondNumber.concat(button.textContent);
            } else {
                firstNumber = firstNumber.concat(button.textContent);
            }  
            display += button.textContent;
        }
        displayScreen.innerText = display;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber !== '' && secondNumber !== '') {
            result = operate(operator, Number(firstNumber), Number(secondNumber));
            displayScreen.innerText = result;
            operator = button.textContent;
            firstNumber = result;
            secondNumber = '';
            display = result;
        } else {
            firstNumber = display;
            operator = button.textContent;
            display = firstNumber;
            displayScreen.innerText = display;
        }
    });
});

equalButton.addEventListener('click', () => {
    if (firstNumber != '' && secondNumber != '' && operator != '') {
        result = operate(operator, Number(firstNumber), Number(secondNumber));
        displayScreen.innerText = result;
        operator = '';
        firstNumber = String(result);
        secondNumber = '';
        display = String(result);
    }
});

deleteButton.addEventListener('click', () => {
    if (firstNumber !== '' && secondNumber === '') {
        firstNumber = firstNumber.slice(0, -1);
        display = firstNumber;
    } else if (secondNumber !== '') {
        secondNumber = secondNumber.slice(0, -1);
        display = secondNumber;
    }
    displayScreen.innerText = display;
});

decimalButton.addEventListener('click', () => {
    if (decimal == false) {
        if (firstNumber === '' && secondNumber === '') {
            display = '0.';
            firstNumber = display;
        } else if (firstNumber !== '' && secondNumber === '') {
            display = firstNumber.concat('.');
            firstNumber = display;
        } else if (secondNumber !== '') {
            display = secondNumber.concat('.');
            secondNumber = display;
        }
        decimal = true;
    }
});