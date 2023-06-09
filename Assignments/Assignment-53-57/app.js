// Task 1
function openModal(imageUrl) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageUrl;
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Task 2
let para = document.getElementById("para");
let fontSize = 16;

function zoomIn() {
  fontSize += 10;
  para.style.fontSize =
    fontSize + "px";
}

function zoomOut() {
  if (fontSize > 10) {
    fontSize -= 10;
    para.style.fontSize =
      fontSize + "px";
  }
}