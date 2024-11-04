let displayValue = '0';
let operator = null;
let previousValue = null;

/* Update display */
function updateDisplay() {
  const display = document.getElementById('display');
  display.innerText = displayValue;
}

/* Append numbers to display */
function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

/* Append operator */
function appendOperator(op) {
  if (operator !== null) calculateResult();
  previousValue = displayValue;
  displayValue = '0';
  operator = op;
}

/* Clear display */
function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

/* All Clear */
function allClear() {
  displayValue = '0';
  operator = null;
  previousValue = null;
  updateDisplay();
}

/* Delete last character */
function deleteLast() {
  displayValue = displayValue.slice(0, -1) || '0';
  updateDisplay();
}

/* Calculate percentage */
function calculatePercentage() {
  displayValue = (parseFloat(displayValue) / 100).toString();
  updateDisplay();
}

/* Calculate result */
function calculateResult() {
  if (operator === null || previousValue === null) return;
  const current = parseFloat(displayValue);
  const previous = parseFloat(previousValue);

  switch (operator) {
    case '+':
      displayValue = previous + current;
      break;
    case '-':
      displayValue = previous - current;
      break;
    case '*':
      displayValue = previous * current;
      break;
    case '/':
      displayValue = previous / current;
      break;
  }

  displayValue = displayValue.toString();
  operator = null;
  previousValue = null;
  updateDisplay();
}
