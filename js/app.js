const catName1 = 'Whiskers';
const catName2 = 'Leo';
const nameElement1 = document.createElement('p');
nameElement1.textContent = catName1;

// Insert Cat name into DOM above cat image.
document.querySelector('#container1').insertAdjacentElement('afterbegin',
nameElement1);
const catImage = document.querySelector('.cat-image');
const counter = document.querySelector('.click-count');
let count = 0;

// Click event listener on catImage
catImage.addEventListener('click', function() {
  count++;
  counter.innerHTML = count;
});
