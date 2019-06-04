const catImage = document.querySelector('.cat-image');
const counter = document.querySelector('.click-count');
let count = 0;

// Click event listener on catImage
catImage.addEventListener('click', function() {
  count++;
});
