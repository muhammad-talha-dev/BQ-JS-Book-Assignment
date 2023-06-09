// Task 1
document.write("<h2>Task 1</h2>");

var a = 3;
var b = 5;
var sum = a + b; 

document.write(`<p>Sum of ${a} and ${b} is ${sum}</p>`);

// Task 2
document.write("<h2>Task 2</h2>");

var subtraction = a - b;
document.write(`<p>Subtraction of ${a} and ${b} is ${subtraction}</p>`);

var multiplication = a * b;
document.write(`<p>Multiplication of ${a} and ${b} is ${multiplication}</p>`);

var division = a / b;
document.write(`<p>Division of ${a} and ${b} is ${division}</p>`);

var modulas = a % b;
document.write(`<p>Modulas of ${a} and ${b} is ${modulas}</p>`);

// Task 3
document.write("<h2>Task 3</h2>");

var num;
document.write(`<p>Value after variable declaration is ${num}</p>`);
num = 5;
document.write(`<p>Initial value: ${num}</p>`);
num++;
document.write(`<p>Value after increment is: ${num}</p>`);
num += 7;
document.write(`<p>Value after addition is: ${num}</p>`);
num--;
document.write(`<p>Value after decrement is: ${num}</p>`);
num %= 3;
document.write(`<p>The Remainder is: ${num}</p>`);

// Task 4
document.write("<h2>Task 4</h2>");

var ticketCost = "600"
document.write(`<p>Cost of one movie ticket is ${ticketCost} PKR</p>`);
var fiveTicketsCost = ticketCost * 5;
document.write(`<p>Total cost to buy 5 tickets to a movie is ${fiveTicketsCost} PKR</p>`);

// Task 5
document.write("<h2>Task 5</h2>");

document.write("<h4>Table of 6</h4>");
for(var i = 1; i <= 10; i++){
    document.write(`<p>6 X ${i} = ${6*i}</p>`)
}

// Task 6
document.write("<h2>Task 6</h2>");

var celsiusTemperature = 25;
var celsiusToFarenheit = (celsiusTemperature * 9/5) + 32;

document.write(`<p>${celsiusTemperature}&#176;C is ${celsiusToFarenheit}&#176;F</p>`);

var farenheitTemperature = 70;
var farenheitToCelcius = (farenheitTemperature - 32) * 5/9;

document.write(`<p>${farenheitTemperature}&#176;C is ${farenheitToCelcius}&#176;F</p>`);

// Task 7
document.write("<h2>Task 7</h2>");

var item1Price = 350;
var item1Quantity = 3;
var item2Price = 900;
var item2Quantity = 5;
var shippingCharges = (item1Price * item1Quantity) + (item2Price * item2Quantity);

document.write(`<p>Price of item 1 is ${item1Price}</p>`);
document.write(`<p>Quantity of item 1 is ${item1Quantity}</p>`);
document.write(`<p>Price of item 2 is ${item2Price}</p>`);
document.write(`<p>Quantity of item 1 is ${item2Quantity}</p>`);
document.write(`<p>Shipping charges ${shippingCharges}</p>`);

// Task 8
document.write("<h2>Task 8</h2>");

var totalMarks = 1100;
var marksObtained = 1002;
var percentage = (marksObtained / totalMarks) * 100;

document.write(`<p>Total Marks: ${totalMarks}</p>`);
document.write(`<p>Marks Obtained: ${marksObtained}</p>`);
document.write(`<p>Percentage: ${percentage}%</p>`);

// Task 9
document.write("<h2>Task 9</h2>");

var usd = 10;
var sar = 25;
var pkr = (usd * 286.87) + (sar * 76.50);

document.write(`<p>Total currency in PKR: ${pkr}</p>`);

// Task 10
document.write("<h2>Task 10</h2>");

var myNum = 7;
var myResult = ((myNum + 5) * 10) / 2;
document.write(`<p>Result: ${myResult}</p>`);

// Task 11;
document.write("<h2>Task 11</h2>");

var currentYear = 2023;
var birthYear = 2005;
var age = currentYear - birthYear;

document.write(`<p>Current Year: ${currentYear}</p>`);
document.write(`<p>Birth Year: ${birthYear}</p>`);
document.write(`<p>Your age is either ${age} or ${age - 1}</p>`);

// Task 12
document.write("<h2>Task 12</h2>");

var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius ** 2;

document.write(`<p>Radius of circle: ${radius}</p>`);
document.write(`<p>The circumference is: ${circumference}</p>`);
document.write(`<p>The area is: ${area}</p>`);

// Task 13
document.write("<h2>Task 13</h2>");

var favouriteSnack = "Lays";
var currentAge = 18;
var maximumAge = 60;
var snacksPerDay = 2;
var totalSnacks = (maximumAge - currentAge) * snacksPerDay * 365.3;

document.write(`<p>Favourite Snack: ${favouriteSnack}</p>`);
document.write(`<p>Current age: ${currentAge}</p>`);
document.write(`<p>Estimated maximum age: ${maximumAge}</p>`);
document.write(`<p>Amount of snacks per day: ${snacksPerDay}</p>`);
document.write(`<p>You will need ${totalSnacks} ${favouriteSnack} to last you until the ripe old age of ${maximumAge} </p>`);
