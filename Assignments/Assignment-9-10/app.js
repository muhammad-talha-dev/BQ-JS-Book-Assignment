// Task 1

function cityWelcomeMessage() {
    let cityName = document.getElementById('city');
    let city = cityName.value.toLowerCase();
    let cityMessagePara = document.getElementById('cityMessage');

    if (city === "karachi") {
        cityMessagePara.innerText = "Welcome to the city of lights";
    } else {
        cityMessagePara.innerText = "welcome to " + city;
    }
}

// Task 2

function genderWelcomeMessage() {
    let userGender = document.getElementById('gender');
    let gender = userGender.value.toLowerCase();
    let genderMessagePara = document.getElementById('genderMessage');

    if (gender === "male") {
        genderMessagePara.innerText = "Good Morning Sir";
    } else if (gender === "female") {
        genderMessagePara.innerText = "Good Morning Maam";
    } else {
        genderMessagePara.innerText = "Good Morning";
    }
}

// Task 3

function signalColorMessage() {
    let signalColorInput = document.getElementById('signalColor');
    let signalColor = signalColorInput.value.toLowerCase();
    let signalColorPara = document.getElementById('signalColorPara');

    if (signalColor === "red") {
        signalColorPara.innerText = "Must Stop";
    } else if (signalColor === "yellow") {
        signalColorPara.innerText = "Ready to move";
    } else if (signalColor === "green") {
        signalColorPara.innerText = "Move now";
    } else {
        signalColorPara.innerText = "Enter a valid color";
    }
}

// Task 4

function fuelMessage() {
    let fuelValue = document.getElementById('fuel').value;
    let fuelPara = document.getElementById('fuelPara');

    if (fuelValue < 0.25 ) {
        fuelPara.innerText = "Please refill the fuel in your car";
    } else {
        fuelPara.innerText = "You have " + fuelValue + " liter fuel available.";
    }
}

// Task 6

function displayMarkSheet() {
    let totalmarks = 300;
    let marksObt = document.getElementById('marksObt').value;
    let percentage = (marksObt / totalmarks) * 100;
    let obtMarksPara = document.getElementById('obtMarksPara');
    let percentagePara = document.getElementById('percentagePara');
    let gradePara = document.getElementById('gradePara');
    let remarksPara = document.getElementById('remarksPara');

    obtMarksPara.innerText = `Marks Obtained: ${marksObt}`;
    percentagePara.innerText = `Percentage: ${percentage}%`;

    if(percentage >= 80 && percentage <= 100) {
        gradePara.innerText = "Grade: A-one";
        remarksPara.innerText = "Remarks: Excellent";
    } else if (percentage >= 70 && percentage < 80) {
        gradePara.innerText = "Grade: A";
        remarksPara.innerText = "Remarks: Good";
    } else if (percentage >= 60 && percentage < 70) {
        gradePara.innerText = "Grade: B";
        remarksPara.innerText = "Remarks: You need to improve";
    } else if (percentage < 60 && percentage > 0) {
        gradePara.innerText = "Grade: Fail";
        remarksPara.innerText = "Sorry";
    } else {
        gradePara.innerHTML = "<b>Enter valid marks</b>";
    }
}

// Task 7

function guessNumberResult() {
    let secretNumber = 5;
    let userGuessNum = document.getElementById('userGuess').value;
    let userGuess = parseInt(userGuessNum);
    let guessNumberResultPara = document.getElementById('guessNumberResultPara');

    if (userGuess === secretNumber) {
        guessNumberResultPara.innerText = "Bingo! Correct answer."
    } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
        guessNumberResultPara.innerText = "Close enough to the correct answer";
    } else {
        guessNumberResultPara.innerText = "Try again!";
    }
}

// Task 8

function divisibleByThreeResult() {
    let userNum = document.getElementById('userNum').value;
    let divisibleByThreePara = document.getElementById('divisibleByThreePara');

    if (userNum % 3 == 0) {
        divisibleByThreePara.innerText = "The number is divisible by three";
    } else {
        divisibleByThreePara.innerText = "The number is not divisible by three";
    }
}

// Task 9

function evenOddResult() {
    let userNumber = document.getElementById('userNumber').value;
    let evenOddPara = document.getElementById('evenOddPara');

    if (userNumber % 2 == 0) {
        evenOddPara.innerText = "The number is even";
    } else {
        evenOddPara.innerText = "The number is odd";
    }
}

// Task 10

function temperatureResult() {
    let temperature = document.getElementById('temperature').value;
    let temperaturePara = document.getElementById('temperaturePara');

    if (temperature >= 40) {
        temperaturePara.innerText = "It is too hot outside.";
    } else if (temperature >= 30 && temperature < 40){
        temperaturePara.innerText = "The Weather today is Normal.";
    } else if (temperature >= 20 && temperature < 30){
        temperaturePara.innerText = "Today’s Weather is cool.";
    } else {
        temperaturePara.innerText = "OMG! Today’s weather is so Cool.";
    }
}

// Task 11

function calcResult() {
    let a = parseFloat(document.getElementById('firstNumber').value);
    let b = parseFloat(document.getElementById('secondNumber').value);
    let operation = document.getElementById('operation').value;
    let calcPara = document.getElementById('calcPara');

    if (operation === "+") {
        calcPara.innerHTML = "<b>Result:</b> " + a + b;
      } else if (operation === "-") {
        calcPara.innerHTML = "<b>Result:</b> " + a - b;
      } else if (operation === "*") {
        calcPara.innerHTML = "<b>Result:</b> " + a * b;
      } else if (operation === "/") {
        if (b !== 0) {
          calcPara.innerHTML = "<b>Result:</b> " + a / b;
        } else {
          calcPara.innerHTML =  "Error: Division by zero is not allowed.";
        }
      } else if (operation === "%") {
        if (b !== 0) {
          calcPara.innerHTML = "<b>Result:</b> " + a % b;
        } else {
          calcPara.innerHTML =  "Error: Modulus by zero is not allowed.";
        }
      } else {
        calcPara.innerHTML =  "Error: Invalid operation.";
      }
}
