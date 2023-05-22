// Import
import { phoneValidate, printMessage } from '../validtion.js';

// Selecting Elements
const phone = document.querySelector(`[data-phone]`);
const birthDate = document.querySelector(`[data-date]`);
const pharmacyName = document.querySelector(`[data-pharmacy-name]`);
const address = document.querySelector(`[data-address]`);

// Functions

function secondFormValidate() {
  const phoneValid = phoneValidate(phone);
  const birthDateValid = birthDateValidate(birthDate);
  const addressValid = messageValidate(address, 'address');
  const nameValid = messageValidate(pharmacyName, 'name');
  const formValid = phoneValid && birthDateValid && addressValid && nameValid;
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

function messageValidate(message, validName) {
  const value = message.value;
  const valid = value.length > 0;
  if (!valid) {
    printMessage(message, 'failed', `Please Enter a Valid ${validName}`);
  } else {
    printMessage(message, 'success');
  }
  return valid;
}
