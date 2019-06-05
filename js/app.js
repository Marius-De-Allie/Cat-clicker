const catName1 = 'Whiskers';
const catName2 = 'Leo';
const nameElement = document.createElement('p');

const catImage = document.querySelector('.cat-image');
const counter = document.querySelector('.click-count');
let count = 0;

// Click event listener on catImage
catImage.addEventListener('click', function() {
  count++;
  counter.innerHTML = count;
});
