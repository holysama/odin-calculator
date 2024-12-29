//operators functions
let add = function(a, b) {
    return a + b;
}

let subtract = function(a, b) {
    return a - b;
}

let multiply = function (a, b) {
    return a * b;
}

let divide = function(a, b) {
    if(b === 0) {
        return null;
    }
    return a / b;
}

let operate = function(operator, firstNumber, secondNumber) {
    return operator(firstNumber, secondNumber)
};

//numberSelection function
numberSelection = function(id) {
    switch(id) {
        case "zero": return 0;
        case "one": return 1;
        case "two": return 2;
        case "three": return 3;
        case "four": return 4;
        case "five": return 5;
        case "six": return 6;
        case "seven": return 7;
        case "eight": return 8;
        case "nine": return 9;
        case "dot": return ".";
        default: return "";
    }
};

//operatorSelection function
operatorSelection = function(id) {
    switch(id) {
        case "add":
            return add;
        case "subtract":
            return subtract;
        case "multiply":
            return multiply;
        case "divide":
            return divide;
        default:
            return null;
    }

};

//CSS containers selectors
let display = document.querySelector(".display");
let numbersContainer = document.querySelector(".numbers-container");
let operatorsContainer = document.querySelector(".operators-container");

//display function
displayNumbers = function(number) {
    display.textContent = number;
}

//firstNumber and secondNumber buttons
let strFirstNumber = "";
let strSecondNumber = "";
let toggleFlag = true;

numbersContainer.addEventListener("click", (event) => {
   let getDigit = event.target.id;
   if (toggleFlag) {
        
        if (event.target.id === "dot") {
            if (strFirstNumber.includes(".")) {
                return;
            }
        }
        strFirstNumber += numberSelection(getDigit);
        displayNumbers(strFirstNumber);
   }
   else {
        if (event.target.id === "dot") {
            if (strSecondNumber.includes(".")) {
                return;
            }
        }
        strSecondNumber += numberSelection(getDigit);
        displayNumbers(strSecondNumber);
   }
});

//operators buttons / toggle switch to secondNumber
let selectedOperator = null;
operatorsContainer.addEventListener("click", (event) => {
    let getOperator =  event.target.id;
    selectedOperator =  operatorSelection(getOperator);

    if (selectedOperator !== null && strFirstNumber !== "") {
        toggleFlag = false;
    }
});

//reset button
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    strFirstNumber = ""; 
    strSecondNumber = "";
    display.textContent = ""; 
    selectedOperator = null; 
    toggleFlag = true;
});

//equals button
let equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", () => {
    let firstNumber = Number(strFirstNumber);
    let secondNumber = strSecondNumber !== "" ? Number(strSecondNumber) : 0;
    
    if (selectedOperator === null) {
        displayNumbers(firstNumber);
        return;
    }

    let result = operate(selectedOperator, firstNumber, secondNumber);
    
    if (result === null) {
        displayNumbers("Error, you cannot divide by 0");
        strFirstNumber = ""; 
        strSecondNumber = ""; 
        selectedOperator = null; 
        toggleFlag = true;
    }
    else {
        result = Number(result.toFixed(10));
        displayNumbers(result);
        strFirstNumber = result.toString();
        strSecondNumber  = "";
        toggleFlag = false;
    } 
});
