// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    // var input = parseFloat(input);
    if ((typeof input !== "string") || (input === " ")) {
        return "Hello, World!";
    } else if (!isNaN(parseFloat(input))) {
        return "Hello, World!";
    } else return ("Hello, " + input + "!");
}

//how can I get sayHello to be one line of code?

//ISFIVE FUNCTION
function isFive(x) {
    return  parseFloat(x) === 5;
}
//ISEVEN FUNCTION
function isEven(x) {
    var xx = parseFloat(x);
    if ((typeof xx !== "number")) {
        return false;
    }
    else {
        return (xx % 2 === 0);
    }
}
//ISVOWEL FUNCTION
function isVowel(x) {
    return x === 'a' || x === 'e' || x === 'i' || x === 'o' || x=== 'u' || x=== 'A' || x=== 'E' || x=== 'I' || x=== 'O' || x=== 'U';
}

//ADD FUNCTION
function add(x,y){
    return parseFloat(x)+parseFloat(y);
}

console.log(add(5, 4));