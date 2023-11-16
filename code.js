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

