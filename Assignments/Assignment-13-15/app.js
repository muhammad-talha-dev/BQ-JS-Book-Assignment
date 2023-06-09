// Task 1
let studentNames = [];

// Task 2
let studentNames2 = new Array();

// Task 3
let stringsArray = ["apple", "banana", "orange"];

// Task 4
let numbersArray = [1, 2, 3, 4, 5];

// Task 5
let booleanArray = [true, false, true];

// Task 6
let mixedArray = ["apple", 42, true, "banana", false];

// Task 7
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
let listContainer = document.getElementById("qualificatons");

for (i = 0; i < qualifications.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = qualifications[i];
    listContainer.appendChild(listItem);
}

// Task 8

let studentNames3 = ["Hamza", "Hasan", "Adeel"];
let studentMarks = [380, 289, 415];
let container = document.getElementById('task8');
let totalMarks = 500;

for (i = 0; i < studentNames3.length; i++) {
    let para = document.createElement('p');
    para.textContent = "Score of " + studentNames3[i] + " is " +studentMarks[i] + ". Percentage: " + (studentMarks[i] / totalMarks) * 100 + "%";
    container.appendChild(para);
}

// Task 10

let stdScores = [410, 120, 390, 280, 150];
let unorderedStdScores = document.getElementById('unorderedStdScores');
unorderedStdScores.innerText = "Score of students: " + stdScores;

let orderedStdScores = document.getElementById('orderedStdScores');
orderedStdScores.innerText = "Ordered score of students: " + stdScores.sort();

// Task 12

let arrayPara = document.getElementById('array');
let singleStringPara = document.getElementById('singleString');

let array = ["This", "is", "my", "cat"];
arrayPara.innerHTML = array;

let singleString = array.join(" ");
singleStringPara.innerHTML = singleString;

// Task 15

let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony"];
let selectMenu = "<select>";

for (let i = 0; i < manufacturers.length; i++) {
  selectMenu += "<option>" + manufacturers[i] + "</option>";
}

selectMenu += "</select>";
document.write(selectMenu);