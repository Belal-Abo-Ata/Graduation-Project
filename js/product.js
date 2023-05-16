// Variables

const imgs = document.querySelectorAll(`[data-product-imgs] img`);
const leftBtns = document.querySelector(`[data-btn-left]`);
const rightBtns = document.querySelector(`[data-btn-right]`);
const miniImgsContainer = document.querySelector(`[data-mini-imgs]`);
const miniBorder = document.querySelector(`[data-mini-img-border]`);
let imgIndex = 0;

console.log(miniImgsContainer, miniBorder);

// Event Listeners

document.addEventListener(`load`, insertMiniImgs());

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

  miniBorder.style.translate = `${imgIndex * 100}% 0`;
}

displayImgs();

function insertMiniImgs() {
  miniBorder.style.display = 'none';
  imgs.forEach(img => {
    miniImgsContainer.insertAdjacentHTML(
      `beforeend`,
      `<img
                class="object-contain w-24 transition-all duration-300 cursor-pointer p-4"
                src="${img.src}"
                alt="mini-img" />`
    );
  });
  miniBorder.style.display = 'block';
  const miniImgs = miniImgsContainer.querySelectorAll(`img`);
  miniImgs.forEach((img, index) => {
    img.addEventListener(`click`, () => {
      imgIndex = index;
      displayImgs();
      // miniBorder.style.translate = `${index * 100}% 0`;
      miniBorder.style.translate = `${imgIndex * 100}% 0`;
    });
  });
}
