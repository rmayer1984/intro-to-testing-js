// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    // var input = parseFloat(input);
    if ((typeof input !== "string") || (input === " ") ) {
        return "Hello, World!";
    }
    else {
        return ("Hello, " + input + "!");
    }
}
//possible if statement: || (typeof parseFloat(input) === "number")

function isFive(x) {
    return  parseFloat(x) === 5;
}