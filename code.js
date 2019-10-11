// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    // var input = parseFloat(input);
    if ((typeof input !== "string") || (input === " ")) {
        return "Hello, World!";
    } else {
        return ("Hello, " + input + "!");
    }
}

// function sum(num1, num2) {
//     return  num1 + num2;
// }
// console.log(sum(2, 2));