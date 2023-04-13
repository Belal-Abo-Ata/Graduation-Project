// Import
import { phoneValidate, messageValidate, printMessage } from '../validtion.js';

// Selecting Elements
const phone = document.querySelector(`[data-phone]`);
const birthDate = document.querySelector(`[data-date]`);
const address = document.querySelector(`[data-address]`);

// Functions

function secondFormValidate() {
  const phoneValid = phoneValidate(phone);
  const birthDateValid = birthDateValidate(birthDate);
  const addressValid = messageValidate(address);
  const formValid = phoneValid && birthDateValid && addressValid;
  if (formValid) return formValid;
}

function birthDateValidate() {
  const valid = birthDate.value.length > 0;
  if (!valid) {
    printMessage(birthDate, 'failed', `Please Enter a Valid Birth Date`);
  } else {
    printMessage(birthDate, 'success');
  }
  return valid;
}
export default secondFormValidate;
