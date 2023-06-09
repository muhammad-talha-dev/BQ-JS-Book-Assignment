// Task 1
const checkUserNum = () => {
    let userNum = document.getElementById('userNum').value;
    let numPara = document.getElementById('numPara');
    let roundPara = document.getElementById('roundPara');
    let floorPara = document.getElementById('floorPara');
    let cielPara = document.getElementById('cielPara');
    
    numPara.textContent = "Number: " + userNum ;
    roundPara.textContent = "Round off value: " + Math.round(userNum);
    floorPara.textContent = "Floor value: " + Math.floor(userNum);
    cielPara.textContent = "Ceil value: " + Math.ceil(userNum);
}

// Task 2
const checkUserNum2 = () => {
    let userNum2 = document.getElementById('userNum2').value;
    let numPara2 = document.getElementById('numPara2');
    let roundPara2 = document.getElementById('roundPara2');
    let floorPara2 = document.getElementById('floorPara2');
    let cielPara2 = document.getElementById('cielPara2');
    
    numPara2.textContent = "Number: " + userNum2 ;
    roundPara2.textContent = "Round off value: " + Math.round(userNum2);
    floorPara2.textContent = "Floor value: " + Math.floor(userNum2);
    cielPara2.textContent = "Ceil value: " + Math.ceil(userNum2);
}

// Task 3
const checkUserNum3 = () => {
    let userNum3 = document.getElementById('userNum3').value;
    let absPara = document.getElementById('absPara');
    
    absPara.textContent = "The absolute value of " + userNum3 + " is " + Math.abs(userNum3);
}

// Task 4
const rollDice = () => {
    let diceNum = Math.round(Math.random() *6);
    let diceNumPara = document.getElementById('diceNumPara');

    diceNumPara.textContent = "random dice value: " + diceNum;
}

// Task 5
const tossCoin = () => {
    let coinNum = Math.ceil(Math.random() *2);
    let tossCoinPara = document.getElementById('tossCoinPara');

    coinNum == 2 ? tossCoinPara.textContent = "random coin value: Heads" : tossCoinPara.textContent = "random coin value: Tails";
}

// Task 6
let randomNumPara = document.getElementById('randomNumPara');
randomNumPara.textContent = "random number between 1 and 100: " + Math.round(Math.random() * 100);

// Task 8
    const checkUserInput = ()  => {
    let secretNum = Math.ceil(Math.random() * 10);
    console.log(secretNum);
    let userInput = document.getElementById('userInput').value;
    let userInputPara = document.getElementById('userInputPara');

    userInput == secretNum ? userInputPara.textContent = "Congratulations! you guess the correct number." : userInputPara.textContent = "Try again!";
    }