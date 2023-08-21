// Start step 1
document.write("<h1> Challenge 3 Step1 </h1>")
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
    var num3 = num1;
    var num4 = num2;
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
        //   divNumbers(num3, num4) ;

        default:
            return console.log("No such operator ", operation);
    }

}
// End of Nested Function which are depreciated in this new version of java sorry it doesn't work why do a nested when I go directly


