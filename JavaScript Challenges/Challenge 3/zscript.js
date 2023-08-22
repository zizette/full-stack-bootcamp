// Start step 1
// document.write("<h1> Challenge 3 Step1 </h1>")
var num1 = 5, num2 = 7;
var num3 = addNumbers(num1, num2);
console.log(num1, num2, "Result is : ", num3);
var num1 = 50, num2 = 70;
var num3 = addNumbers(num1, num2);
console.log(num1, num2, "Result is : ", num3);
function addNumbers(num1, num2) {
    return num1 + num2;
}
// ### Function with Conditional Statements 
var num1 = 98, num2 = 809;
findMax(num1, num2);
function findMax(num1, num2) {
    if (num1 == num2 | num1 && num2 == 0) { console.log("both Numbers are equal"); }
    else if (num1 > num2) {
        console.log(num1, " is greater than ", num2);

    }
    else { console.log(num2, "  is greater than ", num1); }
}

// ### Nested Function
var num1 = 60, num2 = 88, operation = "-", result1 = 0;
var result1 = compute(num1, num2, operation);
console.log("compute has the following arguments:", num1, num2, operation, "and the result is : ", result1);
var num1 = 60, num2 = 88, operation = "*", result1 = 0;
var result1 = compute(num1, num2, operation);
console.log("compute has the following arguments:", num1, num2, operation, "and the result is : ", result1);
var num1 = 60, num2 = 88, operation = "/", result1 = 0;
var result1 = compute(num1, num2, operation);
console.log("compute has the following arguments:", num1, num2, operation, "and the result is : ", result1);

function compute(num1, num2, operation) {

    switch (operation) {
        case "+":

            return num1 + num2;

        case "-":
            // sub = function subNumbers(num1, num2) {

            return num1 - num2;

            // }
            return sub;
        case "*":
            // console.log(num1, "multiply", num2);
            // var mul= function mulNumbers(num1, num2) {
            return num1 * num2;
        // }
        //  return mul;
        case "/":
            return num1 / num2;
        //   divNumbers(num1, num2) ;

        default:
            return console.log("No such operator ", operation);
    }

}
// End of Nested Function which are depreciated in this new version of java sorry it doesn't work why do a nested when I go directly


// ## Step 2: Arrow Functions and Scopes
// document.write("<h1> Challenge 3  Start Step2 </h1>")
let num11 = 48;

function squareNumber(number) {
    console.log(num11, "Global Variable inside the function");
    console.log(number, "local variable");
    return number * number;
}
console.log("The square of : the global variable ", num11, "is ", squareNumber(num11));
console.log(" The local variable number is dead outside its mother function!!!!..");

// ## Step 3: Loops
for (let i = 1; i < 11; i++) { console.log("i is in for : ", i) }
let i = 10;
while (i > 0) {
    i--;
    { console.log("i is in while : ", i) }
}

let ii = 0;
do {
    ii++;
    if (ii % 2 == 0) { console.log("ii is in do ... while and pair: ", ii) }
}
while (ii < 11);

let fruits = ['apple', 'mango', 'banana', 'passionfruit', 'orangelemon', 'orange'];
let fruit = "";
for (fruit of fruits) {
    if (fruit.length > 5) {
        console.log('the number of characters is ', fruit.length, " and it is ", fruit);
    }
}
// ### Advanced Loop Challenge
fruits.forEach(fruit) = (fruit) => {
    if (fruit.length > 5) { console.log(fruit) }

};
const numbers = [1, 2, 3, 4];
function double(num) {
    return num * 2;
}
function square(num) {
    return num * num;
}
function processsArray(arrayNumbers, functionInput) {
    let newArray = [];
    for (let i = 0; i < arrayNumbers.length; i++) {
        newArray[i] = functionInput(arrayNumbers[i])
    }
    return newArray;
}
console.log(processsArray(numbers, double));
console.log(processsArray(numbers, square))
