// Imports

import { printMessage } from './validtion.js';

// Select Elements

const form = document.querySelector(`[data-form]`);
const nameDrug = document.querySelector(`[data-drug-name]`);
const discount = document.querySelector(`[data-discount]`);
const amount = document.querySelector(`[data-amount]`);
const date = document.querySelector(`[data-date]`);

console.log(form, nameDrug, discount, amount, date);

// Add Event Listeners

form.addEventListener(`submit`, addNewDrugValidation);

nameDrug.addEventListener(`blur`, e => {
  emptyValueValidate(e.target);
});

discount.addEventListener(`blur`, e => {
  numberValidate(e.target);
});

amount.addEventListener(`blur`, e => {
  numberValidate(e.target);
});

date.addEventListener(`blur`, e => {
  emptyValueValidate(e.target);
});

// Functions

function emptyValueValidate(message) {
  const value = message.value;
  const valid = value.length > 0;
  if (!valid) {
    printMessage(message, 'failed', `Please Enter a Valid value`);
  } else {
    printMessage(message, 'success');
  }
  return valid;
}

function numberValidate(el) {
  const value = el.value;
  const valid = /^([1-9][0-9]{0,3})$/g.test(value);
  console.log(valid);
  if (!valid) {
    printMessage(el, 'failed', `Please Enter a Valid number`);
  } else {
    printMessage(el, 'success');
  }
  return valid;
}

function addNewDrugValidation(e) {
  const drugNameValidate = emptyValueValidate(nameDrug);
  const discountValidate = numberValidate(discount);
  const amountValidate = numberValidate(amount);
  const dateValidate = emptyValueValidate(date);
  const formValid =
    drugNameValidate && discountValidate && amountValidate && dateValidate;
  if (!formValid) {
    e.preventDefault();
  }
}
