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
    tel_Num: "+096170606987",
    land_line: "+96104915975",
}
fullInfo = { ...personalInfo, ...additionalInfo };
console.log("fullInfo is: ", fullInfo);

// Challenge 4 - Done with step 2
// ## Step 3: Destructuring
// ### Destructuring Arrays
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
// output is : Zizette CH Matn Lebanese and  { age: 60, height: 162 }
// ## Step 4: Advanced Operations
// ### Nested Destructuring  ({})


let contactInfo = new Object;
({ age, height, ...contactInfo } = personalInfo);
console.log(age, height, "and contactInfo is  ", contactInfo);
// ### Rest with Destructuring

// already done: in step3 but with 

fiveNumbers = [5, 7, 10, 60];

let restOfNumbers = new Array;
[firstNum, secondNum, ...restOfNumbers] = fiveNumbers;
console.log(firstNum, secondNum, "rest of Numbers is an array", restOfNumbers);

// ### Merging and Overwriting with Spread
personalInfo = {
    fname: "Zizette CH",
    age: 60,
    height: 162,
    location: "Matn",
    nationality: "Lebanese"
};
additionalInfo = {
    fname: ZizetteCH,
    nationality: "Lebanese",
    address: "Mar Elias street, BCHAR",
    tel_Num: "+096170606987",
    land_line: "+96104915975",
}
firstif:
for (let i; i < additionalInfo.length; i++) {
    for (let j = 0; j < personalInfo.length; j++) {
        if (additionalInfo[i] == personalInfo[j]) {
            delete (additionalInfo[i]);
            continue firstif
        }

    }
}
// now we don't have overlapping data 
// we can merge spread 
fullInfo = { ...personalInfo, ...additionalInfo };
console.log("Our merging array fullInfo is: ", fullInfo);

// Our merging array fullInfo is  {
//   fname: 'Zizette CH',
//   nationality: 'Lebanese',
//   address: 'Mar Elias street, BCHAR',
//   tel_Num: '+096170606987',
//   land_line: '+96104915975',
//   age: 60,
//   height: 162,
//   location: 'Matn'
// } 
// and the END
