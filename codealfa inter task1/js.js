// script.js

let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateImage();
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateImage();
}

function updateImage() {
    images.forEach((image, index) => {
        if (index === currentImageIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

updateImage();