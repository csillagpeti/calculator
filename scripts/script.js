const currentSum = 0;
const currentOperator = "";
const displayValue = 0;
const operate = (operator, a, b) => {
    switch (operator) {
        case "add":
            add(a, b);
            break;
        case "subtract":
            add(a, b);
            break;
        case "multiply":
            add(a, b);
            break;
        case "divide":
            add(a, b);
            break;
    }
}
operate(1, 2, 3);

/* const updateDisplay = function (operator, currentSum, buttonPressed){
    
}; */

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;