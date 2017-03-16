//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  var x = num * 10;
  return x;
}

function subtractFive(num) {
  //return num after subtracting five
  var x = num - 5;
  return x;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  var s1l = str1.length;
  var s2l = str2.length;

  if (s1l == s2l) {
    return true;
  } else {
    return false;
  }
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  if (x == y) {
    return true;
  }  else {
    return false;
  }
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  if (num < 90) {
    return true;
  }  else {
    return false;
  }
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  if (num > 50) {
    return true;
  }   else {
    return false;
  }
}

function add(x, y) {
  //add x and y together and return the value
  var z = x + y;
    return z;
}

function subtract(x, y) {
  //subtract y from x and return the value
  var z = x - y;
    return z;
}

function divide(x, y) {
  //divide x by y and return the value
  var z = x / y;
    return z;
}

function multiply(x, y) {
  //multiply x by y and return the value
  var z = x * y;
    return z;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  var z = x % y;
    return z;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
    var x = num % 2;

    if (x == 0) {
    return true;
  }   else {
    return false;
  }
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  var x = num % 2;

  if (x == 1) {
  return true;
}   else {
  return false;
}
}

function square(num) {
  //square num and return the new value
  var x = Math.pow (num, 2);
  return x;
}

function cube(num) {
  //cube num and return the new value
  var x = Math.pow (num, 3);
  return x;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var x = Math.pow(num, exponent);
  return x;
}

function roundNumber(num) {
  //round num and return it
  var x = Math.round(num);
  return x;
}

function roundUp(num) {
  //round num up and return it
  var x = Math.ceil(num);
  return x;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  var exclamated = str + '!';
  return exclamated;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  var nameGreeting = 'Hello' + ' ' + name + '!';
  return nameGreeting;
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  var rectangleArea = length * width;
  return rectangleArea;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  var triangleArea = base * height / 2;
  return triangleArea;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  var circleArea = Math.PI * radius * radius;
  var circleAreaRounded = Math.round(circleArea);
  return circleAreaRounded;
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  var prismVolume = length * width * height;
  return prismVolume;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
