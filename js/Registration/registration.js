import firstFormValidate from './firstFormValidate.js';
import secondFormValidate from './secondFormValidate.js';
import thirdFormValidate from './photoResize.js';
import forthFormValidate from './mutlipleFiles.js';

// Selecting Elements

const form = document.querySelector(`[data-form]`);
const forms = document.querySelectorAll(`[data-forms] > div`);
const formBtns = document.querySelectorAll(`[data-form-btns] > button`);

// Event Listeners

formBtns.forEach(btn => {
  btn.addEventListener(`click`, renderForms);
});

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

  if (index === forms.length - 1 && !validate) {
    form.addEventListener(`submit`, e => e.preventDefault());
  }
}

function showForms(formNum) {
  forms.forEach(form => {
    form.style.translate = `-${formNum * 100}% 0`;
  });
}
