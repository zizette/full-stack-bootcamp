console.log('I am linked now!'); // Step 1
// Step 2
var name = "Zizette";
alert(name);
var age = 23;

var lastName = "Chamaa";
// Step 3
DOB = "09/21/2000";
console.log("My name is " + name + lastName + ". My date of birth is : " + DOB+ " and my Age is " + age);
lastName="Rices";
name="Lea";
DOB = "12/12/1960"
age = 63;
console.log(" CouCou ! My name is " + name + lastName + ". My date of birth is : " + DOB+ " and my Age is " + age);
// Step 4
console.log("This is a text", typeof "This is a text", true , typeof true , false , typeof false , 1215 , typeof 1215,typeof "999", '{}' , typeof `{}` , `[]` , typeof `[]` , null , typeof null, undefined , typeof undefined);
let MyName = "Zizo"; // string
console.log(MyName, typeof MyName);
let zlength = 16;        // number
console.log(zlength, typeof zlength);
let household=["TV", "AC", "Frige"] ; // array object
console.log(household, typeof household);
let yes=true;       // boolean
console.log(yes, typeof yes);

const  person ={FrstName: "Zizo", lastName: "Chamaa", nationality: "Lebanese", married: true};    // Object
console.log(person, typeof person);
let no_one= null;  //Null datatype
console.log(no_one, typeof no_one);

let no_def=undefined;   //Undefined
console.log(no_def, typeof no_def);

// step 5:
// What is interpolation in JavaScript?
// In JavaScript, interpolation is the process of inserting strings or values into an existing string for various purposes
const counter = 3;
  const backtick = `This is my text using backticks ${counter} times`;
  console.log(backtick);
  console.log (`using backticks in strings we can introduce  inject variables, function calls, arithmetic expressions directly into a string`)
  const singleQuote =
    'This is my text using single quotations ${counter} times';
    console.log(singleQuote);
    console.log("In single quotes we cannot use litteral variables i.e. make use of JS interpolation defined above! ");
  const doubleQuote =
    "This is my text using double quotations ${counter} times";
    console.log(doubleQuote);
    console.log("For the previous is the same : using double quotes or single quotes we cannot use litteral variables i.e. make use of JS interpolation! ")
  const tryThisAlso = `This is my new version, it’s the ${2 + 3}th version`;
  console.log(tryThisAlso);
  console.log ("Of course with backticks all is fine we can use arithmetic expression ! with $ {} of course !")
//   ENd of 5 steps
//
  