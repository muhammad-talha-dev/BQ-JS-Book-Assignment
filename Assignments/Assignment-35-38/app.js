// Task 1
function date() {
    let datePara = document.getElementById('datePara');
    datePara.textContent = new Date();
}
date();

// Task 2
function greetUser() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let fullName = firstName + " " + lastName;
    let greetUserPara = document.getElementById('greetUserPara');

    greetUserPara.textContent = "Welcome, " + fullName;
}

// Task 3
function add() {
    let a = parseInt(document.getElementById('userNum1').value);
    let b = parseInt(document.getElementById('userNum2').value);
    let addPara = document.getElementById('addPara');

    return addPara.textContent = `Sum: ${a + b}`;
}

// Task 4
function performOperation(num1, num2, operator) {

    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return "Invalid operator";
    }
  
    console.log("Result:", result);
}

performOperation(10, 20, '+');

// Task 5
function square(num) {
    console.log(num ** 2)
}

square(5)

// Task 6
function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
}

// const num = 5;
const result = factorial(5);
console.log(`Factorial: ${result}`);

// Task 7
function countNumbers(start, end) {
    if (start <= end) {
        for (let i = start; i <= end; i++) {
        console.log(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
        console.log(i);
        }
    }
}

countNumbers(1, 5);

// Task 8
function calculateHypotenuse(base, perpendicular) {
    function square(number) {
      return number * number;
    }
  
    const baseSquared = square(base);
    const perpendicularSquared = square(perpendicular);
    const hypotenuseSquared = baseSquared + perpendicularSquared;
    const hypotenuse = Math.sqrt(hypotenuseSquared);
  
    return hypotenuse;
}

const hypotenuse = calculateHypotenuse(3, 4);
console.log(`The hypotenuse is: ${hypotenuse}`);

// Task 9
function calculateArea(width, height) {
    const area = width * height;
    return area;
}
  
// Arguments as value
const areaValue = calculateArea(5, 3);
console.log("Area (value arguments):", areaValue);

// Arguments as variables
const width = 5;
const height = 3;
const areaVariables = calculateArea(width, height);
console.log("Area (variable arguments):", areaVariables);

// Task 14
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log("The circumference is", circumference);
}

function calcArea(radius) {
const area = Math.PI * radius * radius;
console.log("The area is", area);
}

calcCircumference(5);
calcArea(5) 