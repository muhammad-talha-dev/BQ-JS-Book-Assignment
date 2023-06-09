// Task 1

function checkCharacter() {
    let character = document.getElementById('character').value;
    let checkCharacterResult = document.getElementById('checkCharacterResult');
    let asciiCode = character.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
        checkCharacterResult.innerHTML = "<b>Result:</b> " + character + " is a number.";
    } else if (asciiCode >= 65 && asciiCode <= 90) {
        checkCharacterResult.innerHTML = "<b>Result:</b> " + character + " is an uppercase letter.";
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        checkCharacterResult.innerHTML = "<b>Result:</b> " + character + " is a lowercase letter.";
    } else {
        checkCharacterResult.innerHTML = "<b>Result:</b> Invalid input.";
    }
}

// Task 2

function checkInteger() {
    let firstInteger = document.getElementById('firstInteger').value;
    let secondInteger = document.getElementById('secondInteger').value;
    let checkIntegerResult = document.getElementById('checkIntegerResult');

    if (firstInteger > secondInteger) {
        checkIntegerResult.innerHTML = `<b>Result:</b> ${firstInteger} is gerater than ${secondInteger}`;
    } else if (secondInteger > firstInteger) {
        checkIntegerResult.innerHTML = `<b>Result:</b> ${secondInteger} is gerater than ${firstInteger}`;
    } else if (firstInteger == secondInteger) {
        checkIntegerResult.innerHTML = `<b>Result:</b> Both ${secondInteger} and ${firstInteger} are equal`;
    } else {
        checkIntegerResult.innerHTML = `<b>Result:</b> Invalid Input.`;
    }
}

// Task 3

function checkUserNum() {
    let userNum = document.getElementById('userNum').value;
    let userNumResult = document.getElementById('userNumResult');

    if (userNum > 0) {
        userNumResult.innerHTML = `<b>Result:</b> ${userNum} is positive`;
    } else if (userNum < 0) {
        userNumResult.innerHTML = `<b>Result:</b> ${userNum} is negeative`;
    } else if (userNum == 0) {
        userNumResult.innerHTML = `<b>Result:</b> ${userNum} is zero`;
    } else {
        userNumResult.innerHTML = `<b>Result:</b> Invalid Input.`;
    }
}

// Task 4

function checkUserInput() {
    let userInput = document.getElementById('userInput').value;
    let userInputResult = document.getElementById('userInputResult');

    if (userInput == "a" || userInput == "e" || userInput == "i" || userInput == "o" || userInput == "u") {
        return userInputResult.innerText = true;
    } else {
        return userInputResult.innerText = false;
    }
}

// Task 5

function checkUserPass() {
    let password = "abc123";
    let userPass = document.getElementById('userPass').value;
    let UserPassResult = document.getElementById('UserPassResult');

    if (userPass == "") {
        UserPassResult.innerText = "Please enter your password";
    } else if (userPass == password) {
        UserPassResult.innerText = "Correct! The password you entered matches the original password";
    } else {
        UserPassResult.innerText = "Incorrect password";
    }
}

// Task 6

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// Fixed

// Task 7

const checkUserTime = () => {
    let time = document.getElementById('userTime').value;
    let userTimeResult = document.getElementById('userTimeResult');

    if (time >= 0000 && time < 1200) {
        userTimeResult.innerText = "Good morning!";
    } else if (time >= 1200 && time < 1700) {
        userTimeResult.innerText = "Good afternoon!";
    } else if (time >= 1700 && time < 2100) {
        userTimeResult.innerText = "Good evening!";
    } else if (time >= 2100 && time <= 2359) {
        userTimeResult.innerText = "Good night!";
    } else {
        userTimeResult.innerText = "Enter valid time.";
    }
}