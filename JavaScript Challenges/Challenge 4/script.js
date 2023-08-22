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
let nextThreeNumbers =new Array;
nextThreeNumbers =[45, 66, 90];
allNumbers={...fivenumbers, ...nextThreeNumbers};
console.log("allNumbers is : ", allNumbers)

let additionalInfo =new Object();
additionalInfo ={
    address: "Mar Elias street, BCHAR",
    tel_Num: "+096170606987"
}
fullInfo={  ...personalInfo, ...additionalInfo};
console.log("fullInfo is: ", fullInfo);

