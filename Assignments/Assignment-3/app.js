var age = 18;
alert("I am " + age + " years old.");

// Task 2
var visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);

alert(`You have visited this site ${visitCount} time${visitCount !== 1 ? 's' : ''}.`);

// Task 3
var birthYear = 2005;
var birthYearPara = document.createElement("p");
var birthYearText = document.createTextNode("My birth year is " + birthYear);
birthYearPara.appendChild(birthYearText);
document.body.appendChild(birthYearPara);

var dataTypePara = document.createElement("p");
var dataTypeText = document.createTextNode("Data type of my declared variable is number");
dataTypePara.appendChild(dataTypeText);
document.body.appendChild(dataTypePara);

// Task 4
var visitorName = "John";
var productTitle = "T-Shirts";
var quantity = 5;

var productPara = document.createElement("p");
var productText = document.createTextNode(`${visitorName} ordered ${quantity} ${productTitle} on XYZ Clothing store`);
productPara.appendChild(productText);
document.body.appendChild(productPara);