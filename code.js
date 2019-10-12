// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//SAYHELLO FUNCTION
function sayHello(input) {
    // var input = parseFloat(input);
    if ((typeof input !== "string") || (input === " ") ) {
        return "Hello, World!";
    }
    else {
        return ("Hello, " + input + "!");
    }
}

//ISFIVE FUNCTION
function isFive(x) {
    return  parseFloat(x) === 5;
}
//ISEVEN FUNCTION
function isEven(x) {
    if ((typeof x !== "number") || x === " ") {
        return false;
    }
    // else if ((parseFloat(x)) % 2 === 0) {
    //     return true;
    // }
    else {
        return (x % 2 === 0);
    }
}

function isVowel(x) {
    return x === 'a' || x === 'e' || x === 'i' || x === 'o' || x=== 'u' || x=== 'A' || x=== 'E' || x=== 'I' || x=== 'O' || x=== 'U';
}
