// Variables

const imgs = document.querySelectorAll(`[data-product-imgs] img`);
const leftBtns = document.querySelector(`[data-btn-left]`);
const rightBtns = document.querySelector(`[data-btn-right]`);
let imgIndex = 0;

console.log(imgs, leftBtns, rightBtns);

// Event Listeners

imgs.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});

leftBtns.addEventListener(`click`, () => {
  imgIndex--;
  displayImgs();
});

rightBtns.addEventListener(`click`, () => {
  imgIndex++;
  displayImgs();
});

// Functions

function displayImgs() {
  imgIndex === imgs.length - 1
    ? (rightBtns.style.display = 'none')
    : (rightBtns.style.display = 'block');
  imgIndex === 0
    ? (leftBtns.style.display = 'none')
    : (leftBtns.style.display = 'block');

  imgs.forEach((img, index) => {
    img.style.translate = `-${imgIndex * 100}% 0`;
  });
}

displayImgs();
