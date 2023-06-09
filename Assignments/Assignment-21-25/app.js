// Task 1
const greetUser = () => {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let fullName = firstName + " " + lastName;
    let greetUserPara = document.getElementById('greetUserPara');

    greetUserPara.textContent = "Welcome, " + fullName;
}

// Task 2
const stringLength = () => {
    let string = document.getElementById('string').value;
    let stringLengthPara = document.getElementById('stringLengthPara');
    stringLengthPara.textContent = "Length of string: " + string.length;
}

// Task 3
let word = "Pakistani";
let nIndex = document.getElementById('nIndex');
nIndex.textContent = "Index of 'n': " + word.indexOf('n');

// Task 4
let word2 = "Hello World";
let lIndex = document.getElementById('lIndex');
lIndex.textContent = "Index of 'l': " + word2.lastIndexOf('l');

// Task 5
let index3 = document.getElementById('index3');
index3.textContent = "Character at index 3: " + word.charAt(3);

// Task 6
const greetUser2 = () => {
    let firstName2 = document.getElementById('firstName2').value;
    let lastName2 = document.getElementById('lastName2').value;
    let fullName = firstName2.concat(" ", lastName2);
    console.log(fullName)
    let welcomeUser = document.getElementById('welcomeUser');
    welcomeUser.innerHTML = "Welcome, " + fullName;
}

// Task 7
let city = "Hyderabad";
let replaceWord = city.replace("Hyder", "Islam");
let replacePara = document.getElementById('replacePara');
replacePara.innerHTML = "After Replacement: " + replaceWord; 

// Task 8
let message = "Ali and Sami are best friends. They play cricket and football together.";
let replaceMsg = message.replace(/and/g, "&");
let replaceMsgPara = document.getElementById('replaceMsgPara');
replaceMsgPara.textContent = "After Replacement: " + replaceMsg;

// Task 9
let string472 = "472";
let stringType = document.getElementById('stringType');
stringType.textContent = "Type: " + typeof(string472);
let num472 = parseInt(string472);
let numType = document.getElementById('numType');
numType.textContent = "Type: " + typeof(num472);

// Task 10
const convertUpperCase = () => {
    let userIuput =document.getElementById('userInput').value;
    let changeUserInput = userIuput.toUpperCase();
    let upperCasePara = document.getElementById('upperCasePara');
    upperCasePara.textContent = "Upper case: " + changeUserInput;
}

// Task 11
const convertTitleCase = () => {
    function toTitleCase(str) {
        let words = str.toLowerCase().split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    }

    let userIuput2 =document.getElementById('userInput2').value;
    let changeUserInput2 = toTitleCase(userIuput2);
    let titleCasePara = document.getElementById('titleCasePara');
    titleCasePara.textContent = "Title case: " + changeUserInput2;
}

// Task 12
let num = 35.36;
let numString = num.toString().replace('.', '');
let task12result = document.getElementById('task12result');
task12result.textContent = "Result: " + numString;

// Task 13
const checkUserName = () => {
    let username = document.getElementById('userName').value;
    let symbols = /[.@,!]/g;
    let userNamePara = document.getElementById('userNamePara');

    if (symbols.test(username)) {
        userNamePara.textContent = "Invalid username. Please enter a username without special symbols [@ . , !]";
    } else {
        userNamePara.textContent = "Username is valid: " + username;
    }
}

// Task 14 
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


const checkUserPass = () => {
    let password = document.getElementById('userPass');
    let userPassResult = document.getElementById('userPassResult');

    function isAlphabet(char) {
    let charCode = char.charCodeAt(0);
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
    }

    function isDigit(char) {
    let charCode = char.charCodeAt(0);
    return charCode >= 48 && charCode <= 57;
    }

    if (
    password.length < 6 ||
    !isAlphabet(password.charAt(0)) ||
    !isAlphabet(password) && !isDigit(password)
    ) {
    userPassResult.textContent = "Invalid password. Please enter a valid password.";
    } else {
    userPassResult.textContent = "Password is valid: " + password;
    }
}

// Task 16
let university = "University of Karachi";
let array = university.split('');
let container = document.getElementById('task16');

for (var i = 0; i < array.length; i++) {
    let uniArray = document.createElement('p');
    uniArray.textContent = array[i];
    container.appendChild(uniArray);
}

// Task 17
const checkUserInput3 = () => {
    let userInput3 = document.getElementById('userInput3').value;
    let userInput3Result = document.getElementById('userInput3Result');

    userInput3Result.textContent = "Last charcter of input: " + userInput3[userInput3.length - 1]
}
