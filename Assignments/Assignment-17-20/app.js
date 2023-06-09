// Task 1
let multiArray = [[]];

// Task 2
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

// Task 3
let countingContainer = document.getElementById('task3');
for (i = 1; i <= 10; i++) {
    let counting = document.createElement('p');
    counting.innerHTML = i;
    countingContainer.appendChild(counting);
}

// Task 4

function multiplicationFunc() {
    let multiplicationNum = document.getElementById('multiplicationNum').value;
    let multiplicationLength = document.getElementById('multiplicationLength').value;
    let multiplicationContainer = document.getElementById('multiplicationContainer');

    multiplicationContainer.innerHTML = "";

    for (i = 1; i <= multiplicationLength; i++) {
        let multiplication = document.createElement('p');
        multiplication.textContent = multiplicationNum + " X " + i + " = "  + multiplicationNum * i;
        multiplicationContainer.appendChild(multiplication);
    }
}

// Task 5

let items = ["apple","banana", "mango", "orange", "stawberry"];
let itemsListContainer = document.getElementById('itemsList');
let itemsParaContainer = document.getElementById('itemsPara');

for (i = 0; i < items.length; i++) {
    let itemsList = document.createElement('p');
    itemsList.innerHTML = items[i];
    itemsListContainer.appendChild(itemsList);

    let itemsPara = document.createElement('p');
    itemsPara.innerHTML = "Element at index " + i + " is " + items[i];
    itemsParaContainer.appendChild(itemsPara);
}

// Task 7
const checkBakeryItems = () => {
    let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
    let userBakeryItems = document.getElementById('searchBakeryItems').value;
    let searchBakeryItems = userBakeryItems.toLowerCase();
    let resultBakeryItems = document.getElementById('resultBakeryItems');
    
    if (bakeryItems.includes(searchBakeryItems)) {
        resultBakeryItems.innerHTML =  `${searchBakeryItems} is available at index ${bakeryItems.indexOf(searchBakeryItems)} in our bakery.`
    } else {
        resultBakeryItems.innerHTML =  `We are sorry. ${searchBakeryItems} is not available in our bakery.`
    }
}

// Task 8
let largestNum = document.getElementById('largestNum');
let arrayItems = document.getElementById('arrayItems');
let a = [24, 53, 78, 91, 12];
arrayItems.innerHTML = "Array Items: " + a;
a.sort();
largestNum.innerHTML = "The lagest number is " + a[a.length - 1];

// Task 9
let b = [24, 53, 78, 91, 12];
let smallestNum = document.getElementById('smallestNum');
let arrayItems2 = document.getElementById('arrayItems2');
arrayItems2.innerHTML = "Array Items: " + b;
b.sort();
smallestNum.innerHTML = "The smallest number is " + b[0];

// Task 10
let fiveMultiples = document.getElementById('fiveMultiples');
let multiples = []
for (i = 1; i  <= 20; i++) {
    multiplesOf5 = 5*i;
    multiples.push(multiplesOf5);
}
fiveMultiples.innerHTML = multiples;