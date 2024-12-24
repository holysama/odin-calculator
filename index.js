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
        return "Error: You cannot divide by 0";
    }
    return a / b;
}

let operation = function(operator, firstNum, secondNum) {
    return operator(a, b)
}

let numbersContainer = document.querySelector(".numbers-container");
let display = document.querySelector(".display");

let firstNumArr = [];

numbersContainer.addEventListener("click", (event) => {
    
    switch(event.target.id) {
        case "zero":
            firstNumArr.push(0);
            break;

        case "one":
            firstNumArr.push(1);
            break;

        case "two":
            firstNumArr.push(2);
            break;

        case "three":
            firstNumArr.push(3);
            break;

        case "four":
            firstNumArr.push(4);
            break;

        case "five":
            firstNumArr.push(5);
            break;

        case "six":
            firstNumArr.push(6);
            break;

        case "seven":
            firstNumArr.push(7);
            break;

        case "eight":
            firstNumArr.push(8);
            break;

        case "nine":
            firstNumArr.push(9);
            break;    
    }
    let firstNumber = firstNumArr.join("")
    display.textContent = firstNumber;
});

