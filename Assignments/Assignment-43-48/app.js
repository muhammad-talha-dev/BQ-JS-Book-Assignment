// Task 1
function alert1() {
    alert('You clicked the link!');
}

// Task 2
let images = document.querySelectorAll('.mobile-img');

images.forEach(function(image) {
    image.addEventListener('click', function(){
        alert('You clicked the image!')
    });
})


// Task 5
let counter = 0;
const counterDisplay = document.getElementById('counterDisplay');

function increaseCounter() {
  counter++;
  counterDisplay.textContent = counter;
}

function decreaseCounter() {
  if (counter > 0) {
    counter--;
    counterDisplay.textContent = counter;
  }
}