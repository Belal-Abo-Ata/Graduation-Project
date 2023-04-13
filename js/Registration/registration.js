import firstFormValidate from './firstFormValidate.js';
import secondFormValidate from './secondFormValidate.js';

// Selecting Elements

const userImgInput = document.querySelector(`[data-profile-picture-input]`);
const userImg = document.querySelector(`[data-profile-picture-img]`);
const form = document.querySelector(`[data-form]`);
const forms = document.querySelectorAll(`[data-forms] > div`);
const formBtns = document.querySelectorAll(`[data-form-btns] > button`);

// forms[0].style.translate = `-200% 0`;
// forms[1].style.translate = `-200% 0`;
// forms[2].style.translate = `-200% 0`;

console.log(userImg, userImgInput);

// Event Listeners

form.addEventListener(`submit`, e => e.preventDefault());

formBtns.forEach(btn => {
  btn.addEventListener(`click`, renderForms);
});

userImgInput.addEventListener(`change`, getUserImage);

// Variables

let formNum = 0;
let validateFunctions = [
  firstFormValidate,
  secondFormValidate,
  thirdFormValidate,
  forthFormValidate,
];

// Functions

function renderForms(e) {
  let formsArr = Array.from(forms);
  const index = formsArr.reduce((acc, curr, index) => {
    if (e.target.parentElement.parentElement === curr) return index;
    return acc;
  }, '');
  changeForms(e.target, index);
}

// function secondFormValidate() {
//   console.log(`hi`);
//   return true;
// }

function thirdFormValidate() {
  return true;
}

function forthFormValidate() {
  return true;
}

function getUserImage(e) {
  const img = e.target.files[0];
  userImg.src = URL.createObjectURL(img);
}

forms.forEach((form, formIndex) => {
  form.style.left = `${formIndex * 100}%`;
});

function changeForms(btn, index) {
  const validate = validateFunctions[index]();
  if (index === forms.length - 2) {
    const finalBtn = forms[index + 1].querySelectorAll(`button`)[1];
    finalBtn.textContent = 'submit';
    finalBtn.type = `submit`;
  }
  if ('formBtnPrevious' in btn.dataset) {
    formNum--;
    showForms(formNum);
  } else {
    formNum++;
    validate && showForms(formNum);
  }
}

function showForms(formNum) {
  forms.forEach(form => {
    form.style.translate = `-${formNum * 100}% 0`;
  });
}
