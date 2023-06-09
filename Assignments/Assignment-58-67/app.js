// Task 1
// (i)
let mainContent = document.getElementById("main-content");

// (ii)
let childElements = mainContent.children;
console.log(childElements);

// (iii)
var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

// (iv)
document.getElementById("first-name").value = "Alex";

// (v)
document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

// Task 2
// (i)
// The node type of the element with the id "form-content" is an HTML Div Element.

// (ii)
// The node type of the element with the id "form-content" is an HTML Paragraph Element.

// (iii)
console.log(document.getElementById("lastName").nodeValue = "New Last Name");

// (iv)
// let mainContent = document.getElementById("main-content"); (declared above)
let firstChild = mainContent.firstChild;
let lastChild = mainContent.lastChild;

// (v)
let lastNameElement = document.getElementById("lastName");
let nextSibling = lastNameElement.nextSibling;
let previousSibling = lastNameElement.previousSibling;

// (vi)
let emailElement = document.getElementById("email");
let parentNode = emailElement.parentNode;
let nodeType = emailElement.nodeType;