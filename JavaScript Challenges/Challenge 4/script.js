// ## Goal of Challenge 4
// ## Step 1: Arrays and Objects
let fivenumbers = new Array;
fivenumbers = [5, 7, 10, 60];
console.log(fivenumbers);
personalInfo = {
    fname: "Zizette CH",
    age: 60,
    height: 162,
    location: "Matn",
    nationality: "Lebanese"
};
console.log(personalInfo);
// ## Step 2: Spread Operator
let nextThreeNumbers = new Array;
nextThreeNumbers = [45, 66, 90];
allNumbers = { ...fivenumbers, ...nextThreeNumbers };
console.log("allNumbers is : ", allNumbers)

let additionalInfo = new Object();
additionalInfo = {
    address: "Mar Elias street, BCHAR",
    tel_Num: "+096170606987"
}
fullInfo = { ...personalInfo, ...additionalInfo };
console.log("fullInfo is: ", fullInfo);

// Challenge 4 - Done with step 2
let fiveNumbers = [10, 20, 30, 40, 50];
let firstNum1 = fiveNumbers[0];
let secondNum1 = fiveNumbers[1];
let thirdNum1 = fiveNumbers[3];
console.log("1st Num 1", firstNum1, "2nd Num1", secondNum1, " 3rd Num1 is ...: ", thirdNum1);
// or with destructuring the array fivenums:
let firstNum, secondNum, thirdNum;
[firstNum, secondNum, ...thirdNum] = [10, 20, 30, 40, 50];
console.log("with destructuring of array : 1st Num", firstNum, "2nd Num", secondNum, " 3rd Num is ...: ", thirdNum);

console.log("Welcome to Destructuring Objects!");
let restInfo;
({ fname, location, nationality, ...restInfo } = personalInfo);
console.log(fname, location, nationality, "and rest of Info is ", restInfo);

// ## Step 4: Advanced Operations