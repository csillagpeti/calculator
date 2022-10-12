let currentSum = 0;
const currentSumLabel = document.getElementById("currentSum");
currentSumLabel.textContent = currentSum;
let displayValue = 0;
let operatorMemory = "";
const displayValueLabel = document.getElementById("displayValue");
displayValueLabel.textContent = displayValue;
const operate = (operator, a, b) => {
    console.log(operator, a, b);
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "X":
            return a * b;
        case "/":
            return a / b;
        case "%":
            return a % b;
        case "+/-":
            return -a;
    }
}

const clearAll = function () {
    resetDisplayValue();
    currentSum = 0;
    currentSumLabel.textContent = currentSum;
    operatorMemory = "";
}

const updateDisplay = function (buttonPressed, buttonType) {
    if (buttonType == "numButton") {
        displayValue += buttonPressed;
        displayValue = parseFloat(displayValue);
        displayValueLabel.textContent = displayValue;
    }
    if (buttonType == "operatorButton" && (buttonPressed != "=")) {
        if (buttonPressed == "AC") { clearAll(); return 0; };
        if (operatorMemory.length == 0) {
            currentSum = displayValue + buttonPressed;
            currentSumLabel.textContent = currentSum;
            resetDisplayValue();
            operatorMemory = buttonPressed;
        }
        else {
            displayValue = operate(operatorMemory, parseFloat(currentSum), parseFloat(displayValue));
            currentSum = displayValue;
            currentSumLabel.textContent = currentSum;
            resetDisplayValue();
            //operatorMemory = "";
            operatorMemory = buttonPressed;
        }
    }
    if (buttonPressed == "=") {
        if (operatorMemory != "") {
            displayValue = operate(operatorMemory, parseFloat(currentSum), parseFloat(displayValue));
        }
        displayValueLabel.textContent = displayValue;
        currentSum = displayValue;
        currentSumLabel.textContent = currentSum;
        operatorMemory = "";
    }
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const forwardNum = function () { updateDisplay(this.textContent, this.classList[1]) };

const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", forwardNum);
}

const resetDisplayValue = function () {
    displayValue = 0;
    displayValueLabel.textContent = displayValue;
}