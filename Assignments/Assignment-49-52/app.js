// Task 1
function displayFormData(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const formDataList = document.getElementById('formDataList');

    const formData = document.createElement('li');
    formData.textContent = `Name: ${name}, Email: ${email}, Password: ${password}`;

    formDataList.appendChild(formData);
}

// Task 2
const details = document.getElementById('item-details');
details.style.display = 'none';

function toggleDetails(itemId) {
    const summary = document.getElementById('item-summary');
    const button = document.getElementById('btn');

    if (details.style.display === 'none') {
      details.style.display = 'block';
      button.textContent = 'Read less';
    } else {
      details.style.display = 'none';
      button.textContent = 'Read more';
    }
}