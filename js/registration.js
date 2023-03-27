// Selecting Elements

const firstForm = document.querySelector(`[data-first-form]`);
const secondForm = document.querySelector(`[data-second-form]`);
const firstFormBtn = document.querySelector(`[data-first-form-btn]`);
const secondFormBtn = document.querySelector(`[data-second-form-btn]`);
const fullName = document.querySelector(`[data-name]`);

// Event Listeners

firstForm.addEventListener(`submit`, formValidate);

// firstFormBtn.addEventListener(`click`, e => {
//   e.preventDefault();
//   firstForm.classList.add(`-left-full`);
//   firstForm.classList.remove(`left-0`);
//   secondForm.classList.add(`left-0`);
//   secondForm.classList.remove(`left-full`);
// });

// secondFormBtn.addEventListener(`click`, e => {
//   e.preventDefault();
//   secondForm.classList.add(`left-full`);
//   secondForm.classList.remove(`left-0`);
//   firstForm.classList.add(`left-0`);
//   firstForm.classList.remove(`-left-full`);
// });

// Functions

function formValidate(e) {
  // const emailValid = emailValidate();
  // const passwordValid = passwordValidate();
  // const formValid = emailValid && passwordValid;
  const formValid = nameValidate();
  if (!formValid) {
    e.preventDefault();
  } else {
    e.preventDefault();
  }
}

function nameValidate() {
  const value = fullName.value;
  const regEx = (validRegex = /\b([a-zA-z][-,a-z. ']+[ ]*)+/);
  const valid = regEx.test(value);
  if (!valid) {
    fullname.nextElementSibling.textContent = `Please enter a valid Name`;
    fullName.classList.add(`border-red-500`);
  } else {
    fullName.nextElementSibling.textContent = ``;
    fullName.classList.remove(`border-red-500`);
  }
  return valid;
}
console.log(firstForm, secondForm, firstFormBtn, fullName);
