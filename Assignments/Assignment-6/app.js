// Task 1
document.write("<h2>Task 1</h2>");

var a = 10;
document.write(`<p>The value of a is: ${a}</p>`);
document.write(`<p>..............................</p>`);

++a;
document.write(`<p>The value of a is: ${a}</p>`);
document.write(`<p>Now the value of ++a is: ${a}</p>`);
document.write(`<p>..............................</p>`);

a++;
document.write(`<p>The value of a is: ${a}</p>`);
document.write(`<p>Now the value of a++ is: ${a}</p>`);
document.write(`<p>..............................</p>`);

--a;
document.write(`<p>The value of a is: ${a}</p>`);
document.write(`<p>Now the value of --a is: ${a}</p>`);
document.write(`<p>..............................</p>`);

a--;
document.write(`<p>The value of a is: ${a}</p>`);
document.write(`<p>Now the value of a-- is: ${a}</p>`);
document.write(`<p>..............................</p>`);
    

// Task 2;
document.write("<h2>Task 2</h2>");

var x = 2, y = 1;
var result = --x - --y + ++y + y--;

document.write(`<p>x is  ${x}</p>`);
document.write(`<p>y is  ${y}</p>`);
document.write(`<p>Result of --x - --y + ++y + y-- is  ${result}</p>`);

// --x; decreases the value of a to 1
// --x - --y; 1 - 0 = 1
// --x - --y + ++y; 1 + 1 = 2
// --x - --y + ++y + y--; 2 - 1 = 3

// Task 3
document.write("<h2>Task 3</h2>");
// var userName = prompt("Enter your name:");
document.write(`Hello ${userName}`)

// Task 5
document.write("<h2>Task 5</h2>");
var userNum = document.write(`<input type="number">`)
// var userNum = +prompt("Task 5 \nEnter a number:");

if(isNaN(userNum)){
    for(var i = 1; i <= 10; i++){
        document.write(`<p>${userNum} X ${i} = ${userNum * i}</p>`);
    }
} else {
    for(var i = 1; i <= 10; i++){
        document.write(`<p>5 X ${i} = ${5 * i}</p>`);
    }
}

 