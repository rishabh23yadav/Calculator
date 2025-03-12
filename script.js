let currentInput = '';
let operator = '';
let firstInput = '';
let secondInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
  if (firstInput === '') {
    firstInput = currentInput;
    operator = op;
    currentInput = '';
  }
}

function calculate() {
  secondInput = currentInput;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(firstInput) + parseFloat(secondInput);
      break;
    case '-':
      result = parseFloat(firstInput) - parseFloat(secondInput);
      break;
    case '*':
      result = parseFloat(firstInput) * parseFloat(secondInput);
      break;
    case '/':
      result = parseFloat(firstInput) / parseFloat(secondInput);
      break;
    default:
      result = secondInput;
  }

  document.getElementById('display').value = result;
  firstInput = result;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  firstInput = '';
  secondInput = '';
  operator = '';
  document.getElementById('display').value = '';
}
