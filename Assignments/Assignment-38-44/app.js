// Task 1
function power(a, b) {
    console.log(a ** b)
}
power(2, 5)

// Task 2
function checkYear() {
    let year = document.getElementById('userYear').value;
    let yearPara = document.getElementById('yearPara');
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return yearPara.textContent = true;
        } else {
          return yearPara.textContent = false;
        }
      } else {
        return yearPara.textContent = true;
      }
    } else {
      return yearPara.textContent = false;
    }
}

// Task 3
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
  
function calculateTriangleArea(a, b, c) {
var s = calculateSemiPerimeter(a, b, c);
var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
return area;
}

var triangleArea = calculateTriangleArea(5, 6, 7);
console.log('The area of the triangle is: ' + triangleArea);

// Task 4
function calculateAverage(marks1, marks2, marks3) {
    var sum = marks1 + marks2 + marks3;
    var average = sum / 3;
    return average;
}

function calculatePercentage(marks1, marks2, marks3) {
var totalMarks = 300;
var sum = marks1 + marks2 + marks3;
var percentage = (sum / totalMarks) * 100;
return percentage;
}

function mainFunction(marks1, marks2, marks3) {
var average = calculateAverage(marks1, marks2, marks3);
var percentage = calculatePercentage(marks1, marks2, marks3);

console.log('Average marks: ' + average);
console.log('Percentage: ' + percentage + '%');
}

var subject1Marks = 85;
var subject2Marks = 90;
var subject3Marks = 95;

mainFunction(subject1Marks, subject2Marks, subject3Marks);


// Task 7
function countSuccessiveVowels(text) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var lowercaseText = text.toLowerCase();
  
    for (var i = 0; i < lowercaseText.length - 1; i++) {
      var currentChar = lowercaseText[i];
      var nextChar = lowercaseText[i + 1];
  
      switch (currentChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          if (vowels.includes(nextChar)) {
            count++;
          }
          break;
        default:
          break;
      }
    }
  
    return count;
}
  
var sentence = 'Pleases read this application and give me gratuity';
var occurrenceCount = countSuccessiveVowels(sentence);
console.log('Number of occurrences of two vowels in succession: ' + occurrenceCount);

// Task 8
function convertToMeters(distance) {
    return distance * 1000;
}

function convertToFeet(distance) {
return distance * 3280.84;
}

function convertToInches(distance) {
return distance * 39370.1;
}

function convertToCentimeters(distance) {
return distance * 100000;
}

function printConvertedDistances(distance) {
var meters = convertToMeters(distance);
var feet = convertToFeet(distance);
var inches = convertToInches(distance);
var centimeters = convertToCentimeters(distance);

console.log('Distance in meters: ' + meters);
console.log('Distance in feet: ' + feet);
console.log('Distance in inches: ' + inches);
console.log('Distance in centimeters: ' + centimeters);
}

// Example usage
var distanceBetweenCities = 100;
printConvertedDistances(distanceBetweenCities);

// Task 9
