let currentInput = ''; 
let previousInput = ''; 
let operation = null; 

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperation(op) {
    
    if (currentInput === '') return;

    
    if (previousInput !== '') {
        calculateResult();
    }

    operation = op;
    previousInput = currentInput;
    currentInput = ''; 
}

function calculateResult() {
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    // Update current input to the result and reset other values
    currentInput = result.toString();
    operation = null; // Reset operation
    previousInput = ''; // Clear previous input
    updateDisplay();
}

function clearDisplay() {
    // Clear the current input, previous input, and reset operation
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    // Update the display element with the current input
    document.getElementById('display').value = currentInput;
}
