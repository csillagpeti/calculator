const currentSum = 0;
const currentSumLabel = document.getElementById("currentSum");
currentSumLabel.textContent = currentSum;
const currentOperator = "";
const displayValue = 0;
const displayValueLabel = document.getElementById("displayValue");
displayValueLabel.textContent = displayValue;
const operate = (operator, a, b) => {
    switch (operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}
operate(1, 2, 3);

/* const updateDisplay = function (operator, currentSum, buttonPressed){
    
}; */

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;