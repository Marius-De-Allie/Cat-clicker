const catName1 = 'Whiskers';
const catName2 = 'Leo';
const nameElement1 = document.createElement('p');
const nameElement2 = document.createElement('p');
nameElement1.textContent = catName1;
nameElement2.textContent = catName2;

// Insert Cat name into DOM above cat image.
// Cat 1
document.querySelector('#container1').insertAdjacentElement('afterbegin',
nameElement1);
// Cat 2

const catImage = document.querySelector('.cat-image');
const counter = document.querySelector('.click-count');
let count = 0;

// Click event listener on catImage
catImage.addEventListener('click', function() {
  count++;
  counter.innerHTML = count;
});
