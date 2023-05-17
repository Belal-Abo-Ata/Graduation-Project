// Variables
const heartLabels = document.querySelectorAll(`label`);
const heartInputs = document.querySelectorAll(`[data-heart-input]`);
console.log(heartInputs, heartLabels);

// Event Listeners

heartLabels.forEach((label, index) => {
  console.log(label);
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
  } else {
    heartIcon[index].classList.remove(`fa-solid`);
    heartIcon[index].classList.add(`fa-regular`);
  }
}
