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
    return a / b;
}

let operation = function(operator, a, b) {
    return;
}

let numbersContainer = document.querySelector(".numbers-container");
let display = document.querySelector(".display");

numbersContainer.addEventListener("click", (event) => {

    switch(event.target.classList) {
        case "zero":
            display.textContent = 0;

        case "one":
            display.textContent = 1;

        case "two":
            display.textContent = 2;

        case "three":
            display.textContent = 3;

        case "four":
            display.textContent = 4;

        case "five":
            display.textContent = 5;

        case "six":
            display.textContent = 6;

        case "seven":
            display.textContent = 7;

        case "eight":
            display.textContent = 8;

        case "nine":
            display.textContent = 9;    
    }
})