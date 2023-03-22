// Selecting Elements

const firstForm = document.querySelector(`[data-first-form]`);
const secondForm = document.querySelector(`[data-second-form]`);
const firstFormBtn = document.querySelector(`[data-first-form-btn]`);
const secondFormBtn = document.querySelector(`[data-second-form-btn]`);

// Event Listeners

firstFormBtn.addEventListener(`click`, e => {
  e.preventDefault();
  firstForm.classList.add(`-left-full`);
  firstForm.classList.remove(`left-0`);
  secondForm.classList.add(`left-0`);
  secondForm.classList.remove(`left-full`);
});

secondFormBtn.addEventListener(`click`, e => {
  e.preventDefault();
  secondForm.classList.add(`left-full`);
  secondForm.classList.remove(`left-0`);
  firstForm.classList.add(`left-0`);
  firstForm.classList.remove(`-left-full`);
});

console.log(firstForm, secondForm, firstFormBtn);
