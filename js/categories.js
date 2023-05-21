// Select Elements
const heartLabels = document.querySelectorAll(`label`);
const heartInputs = document.querySelectorAll(`[data-heart-input]`);

// Event Listeners

heartLabels.forEach((label, index) => {
  label.setAttribute(`for`, index);
});

heartInputs.forEach((input, index) => {
  input.id = index;
  input.addEventListener(`change`, e => {
    addToWishList(e, index);
  });
});

// Functions

function addToWishList(e, index) {
  const heartIcon = document.querySelectorAll(`svg[data-heart-icon]`);
  if (e.target.checked) {
    heartIcon[index].classList.remove(`fa-regular`);
    heartIcon[index].classList.add(`fa-solid`);
    heartIcon[index].classList.add(`animate-ping-once`);
  } else {
    heartIcon[index].classList.remove(`fa-solid`);
    heartIcon[index].classList.add(`fa-regular`);
  }
}

function runOnce() {
  heartInputs.forEach((input, index) => {
    const heartIcon = document.querySelectorAll(`svg[data-heart-icon]`);
    if (input.checked) {
      heartIcon[index].classList.remove(`fa-regular`);
      heartIcon[index].classList.add(`fa-solid`);
      heartIcon[index].classList.add(`animate-ping-once`);
    } else {
      heartIcon[index].classList.remove(`fa-solid`);
      heartIcon[index].classList.add(`fa-regular`);
    }
  });
}

setTimeout(runOnce, 1);
