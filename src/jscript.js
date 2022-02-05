/*task1*/
//Hello world
/*Good morning  */

/*task2*/
var myName;

/* task3 */
var a;
a=7;

/*  task4 */
var a;
a = 7;
var b;
b=a;

/* task5  */
var a=9;

/* task6  */
var myFirstName="Shubham";
var myLastName="Saini";

/* task7 */
// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

/* task8 */
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/* task9 */
let catName = "Oliver";
let catSound = "Meow!";

/* task10 */
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

/*  task 11 */
const sum = 10 + 10;

/*  task 12 */
const difference = 45 - 33;

/* task 13*/
const product = 8 * 10;

/* task 14 */
const quotient = 66 / 33;

/* task 15 */
let myVar = 87;
// Only change code below this line
myVar ++; 

/* task 16 */
let myVar = 11;
// Only change code below this line
myVar--;

/* task 17 */
const ourDecimal = 5.7;
// Only change code below this line
const myDecimal = 2.5;

/* task 18 */
const product = 5.0 * 1.0;

/* task 19 */
const quotient = 4.4 / 2; // Change this line

/* task 20 */
const remainder = 11%3;

/* task 21 */
let a = 3;
let b = 17;
let c = 12;
// Only change code below this line
a += 12;
b += 9;
c += 7;

/* task 22 */
let a = 11;
let b = 9;
let c = 3;
// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

/* task 23 */
let a = 5;
let b = 12;
let c = 4.6;
// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

/* task 24 */
let a = 48;
let b = 108;
let c = 33;
// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

/* task 25 */
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

/* task 26 */
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/* task 27 */
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 

/* task 28 */
const myStr = "This is the start." + " This is the end.";

/* task 29 */
let myStr="This is the first sentence.";
myStr+=" This is the second sentence.";

/* task 30 */
const myName = "dayal";
const myStr = "shubham"+myName+"saini";

/* task 31 */
const someAdjective = "hello";
let myStr = "Learning to code is ";
myStr+=someAdjective;

/* task 32 */
let lastNameLength = 0;
const lastName = "Lovelace";
// Only change code below this line
lastNameLength = lastName.length;

/* task 33 */
let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0];

/* task34 */
let myStr = "Jello World";
// Only change code below this line
myStr="Hello World"//

/* task 35 */
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2];

/* task 36 */
const lastName = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1];

/* task 37 */
const lastName = "Lovelace";
// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -2];

/* task 38 */
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
// Only change code below this line
const wordBlanks = myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb+"."; 

/* task 39 */
const myArray = ["hello",25];

/* task 40 */
const myArray = [["Bulls", 23], ["White Sox", 45]];

/* task 41 */
const myArray = [50, 60, 70];
var myData = myArray[0];

/* task 42 */
const myArray = [18, 64, 99];
myArray[0] = 45;
myArray[1] = 64;
myArray[2] = 99;

/* task 43 */
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  const myData = myArray[2][1];

 /* task 44 */
 const myArray = [["John", 23], ["cat", 2]];
 myArray.push(["dog",3]);

/* task 45 */
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

/* task 46 */
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

/* task 47 */
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

/* task 48 */
const myList = [["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];

/* task 49 */
function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();

 /* task 50 */
 function functionWithArgs(param1, param2) {
    console.log(param1+param2);
  }
  functionWithArgs(2,3);

 /* task 51 */
 function timesFive(num) {
    return num * 5;
  }
  const answer = timesFive(5);

/* task 52 */
let myGlobal=10;
function fun1() {
  // Assign 5 to oopsGlobal Here
 oopsGlobal=5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/* task 53 */
function myLocalScope() {
    // Only change code below this line
  let myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log('outside myLocalScope', myVar);

/* task 54 */
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();

/* task 55 */
let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum + 5;
}
addThree();
addFive();

/* task 56 */
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed=processArg(7);

/* task 57 */
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var item1=arr.shift();
    return item1;
    // Only change code above this line
  }
  const testArr = [1, 2, 3, 4, 5];
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

 /* task 58 */
 function welcomeToBooleans() {
    return true; 
 }

 /* task 59 */
 function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
    // Only change code above this line
  }

 /* task 60 */
 function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  testEqual(10);

/* task 61 */
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  testStrict(10);

 /* task 62 */
 function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  compareEquality(10, "10");

 /* task 63 */
 function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  testNotEqual(10);

 /* task 64 */
 function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  testStrictNotEqual(10);

 /* task 65 */
 function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
    if (val>10) {  // Change this line
      return "Over 10";
    }
    return "10 or Under";
  }
  testGreaterThan(10);

 /* task 66 */
 function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
    return "Less than 10";
  }
  testGreaterOrEqual(10);

 /* task 67 */
 function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
    if (val<55) {  // Change this line
      return "Under 55";
    }
    return "55 or Over";
  }
  testLessThan(10);

 /* task 68 */
 function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
  }
  testLessOrEqual(10);

 /* task 69 */
 function testLogicalAnd(val) {
    // Only change code below this line
      if (val<=50 && val>=25) {
        return "Yes";
      }
    // Only change code above this line
    return "No";
  }
  testLogicalAnd(10);

/* task 70 */
function testLogicalOr(val) {
    // Only change code below this line
    if (val<10 || val>20) {
      return "Outside";
    }
    else{
      return "Inside";
    }
    // Only change code above this line
    return "Inside";
  }
  testLogicalOr(15);

 /* task 71 */
 function testElse(val) {
    let result = "";
    // Only change code below this line
    if (val > 5) {
      result = "Bigger than 5";
    }
    else {
      result = "5 or Smaller";
    }
    // Only change code above this line
    return result;
  }
  testElse(4);

/* task 72 */
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Smaller than 5";
    }
   else {return "Between 5 and 10";
  }
  }
  testElseIf(0);
  testElseIf(5);
  testElseIf(7);
  testElseIf(10);
  testElseIf(12);

  /* task 73 */
  function orderMyLogic(val) {
    if (val <5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  orderMyLogic(4);
  orderMyLogic(6);
  orderMyLogic(11);

  /* task 74 */
  function testSize(num) {
    // Only change code below this line
  if (num<5){return "Tiny";}
  else if (num <10){return "Small";}
  else if (num <15){return "Medium";}
  else if (num <20){return "Large";}
  else if (num>=20){return "Huge";}
    return "Change Me";
    // Only change code above this line
  }
  testSize(0);
  testSize(4);
  testSize(5);
  testSize(8);
  testSize(10);
  testSize(14);
  testSize(15);
  testSize(17);
  testSize(20);
  testSize(25);

  /* task 75 */
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if (strokes==1){return "Hole-in-one!";}
else if (strokes <=par-2){return "Eagle";}
else if(strokes ==par-1){return "Birdie";}
else if(strokes==par){return "Par";}
else if(strokes==par+1){return "Bogey";}
else if(strokes==par+2){return "Double Bogey";}
else if(strokes>=par+3){return "Go Home!";}
  return "Change Me";
  // Only change code above this line
}
golfScore(5, 4);

/* task 76 */
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case 1:
    answer="alpha";
    break;
  case 2:
  answer="beta";
    break;
    case 3:
    answer="gamma";
    break;
    case 4:
    answer="delta";
    break;
  }
   // Only change code above this line
    return answer;
  }
  caseInSwitch(1);

  /* task 77 */
  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case "a":
      answer="apple";
      break;
    case "b":
      answer="bird";
      break;
      case "c":
  answer="cat";
  break;
    default:
      answer="stuff";
      break;
  }
    // Only change code above this line
    return answer;
  }
  switchOfStuff(1);

  /*  task 78 */
  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  let result = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
   case 7:
    case 8:
    case 9:
      answer = "High";
      break;
      result = "4 alone";
  }
    // Only change code above this line
    return answer;
  }
  sequentialSizes(1);

  /* task 79 */
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch(val)
  {case "bob":
   answer = "Marley";
   break;
   case 42:
       answer = "The Answer";
       break;
       case 1:
        answer = "There is no #1";
        break;
        case 99:
        answer = "Missed me by this much!";
        break;
        case 7:
           answer = "Ate Nine";
           break;
   } // Only change code above this line
    return answer;
  }
  chainToSwitch(7);

  