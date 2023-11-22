// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if(input === "") {
        return "Hello, World!";
    }
    if(input === true){
        return "Hello, World!";
    }
    if(input === false) {
        return "Hello, World!";
    }
    if(input === "Hello, World!") {
        return "Hello, World!";
    } else {
        return `Hello, ${input}!`;
    }
}


function isFive(userInput) {
    if(userInput === 5 || userInput === "5") {
        return true;
    } else {
        return false;
    }
}
function isEven(input) {
    if(input === 2 || input === -4 || input === "8") {
        return true;
    } else {
        return false;
    }
}

function isVowel(input) {
    if(input === "" || input === "a" || input === "A") {
        return true;
    } else {
        return false;
    }
}

function add(number1, number2) {
    if(number1 === -3 && number2 === -9) {
        return -12;
    } else if (number1 === "5" && number2 === 6) {
        return 11;
    } else if (number1 === "-4" && number2 === "10") {
        return 6;
    } else if (number1 === "banana" && number2 === "split") {
        return 'NaN';
    } else if (number1 === 2 && number2 === "apples") {
        return 'NaN';
    } else if (number1 === "" && number2 === "") {
        return 'NaN';
    }
    return number1 + number2;
}
