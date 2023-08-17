// Zizette challenge2 
var age1 = 60;
if (age1 >= 20) {
    console.log("You can enter this room.");
}
else {
    console.log("You can't enter this room.");
}
const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;
console.log("Expression1:", expression1);
console.log("Expression2:", expression2);
console.log("Expression3:", expression3);
console.log("Expression4:", expression4);
// 1
//start step 1 2
const age = 25;
const hasDriverLicense = true;
const hasCar = false;
canDrive = false;
if (age >= 18 && hasDriverLicense === true) { canDrive = true; }
canRentCar = false;
if (age >= 22 && hasDriverLicense === true) {
    canRentCar = true;
}
needDriver = false;
if (age < 18 && hasDriverLicense === false && hasCar === false) { needDriver = true; }

//start step  3
var role = "admin";

switch (role) {
    case "admin":
        console.log('You have read and write access for the data');
        break;
    case "user":
        console.log('You have only read access for the data');
        break;
    case "guest":
        console.log('You have no access for the data');
        break;
    default: console.log('User role is not recoginized');
}
//End step 3