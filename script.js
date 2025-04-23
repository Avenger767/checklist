const images = ['slides/slide_1.png', 'slides/slide_2.png', 'slides/slide_3.png', 'slides/slide_4.png', 'slides/slide_5.png', 'slides/slide_6.png', 'slides/slide_7.png', 'slides/slide_8.png', 'slides/slide_9.png', 'slides/slide_10.png', 'slides/slide_11.png', 'slides/slide_12.png', 'slides/slide_13.png', 'slides/slide_14.png', 'slides/slide_15.png', 'slides/slide_16.png', 'slides/slide_17.png', 'slides/slide_18.png', 'slides/slide_19.png', 'slides/slide_20.png', 'slides/slide_21.png', 'slides/slide_22.png', 'slides/slide_23.png', 'slides/slide_24.png', 'slides/slide_25.png', 'slides/slide_26.png', 'slides/slide_27.png', 'slides/slide_28.png', 'slides/slide_29.png', 'slides/slide_30.png', 'slides/slide_31.png'];

let currentImage = 0;
const imageContainer = document.getElementById('imageContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateImage() {
    imageContainer.innerHTML = `<img src="${images[currentImage]}" style="width:100%; border-radius: 10px;" alt="Slide ${currentImage + 1}">`;
    prevBtn.disabled = currentImage === 0;
    nextBtn.disabled = currentImage === images.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentImage > 0) {
        currentImage--;
        updateImage();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentImage < images.length - 1) {
        currentImage++;
        updateImage();
    }
});

updateImage();
