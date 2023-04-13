// Import
import { emailValidate, nameValidate, passwordValidate } from '../validtion.js';

// Variables

const fullName = document.querySelector(`[data-name]`);
const email = document.querySelector(`[data-email]`);
const password = document.querySelector(`[data-password]`);
const confirmPassword = document.querySelector(`[data-confirm-password]`);
const validMessage = document.querySelector(`[data-user-valid]`);

// Functions

function firstFormValidate() {
  const nameValid = nameValidate(fullName);
  const emailValid = emailValidate(email);
  const passwordValid = passwordValidate(password);
  const confirmPasswordValid = passwordValidate(confirmPassword);
  const matchPasswords = checkMatchPassword();
  const formValid =
    emailValid &&
    passwordValid &&
    nameValid &&
    confirmPasswordValid &&
    matchPasswords;
  if (formValid) {
    removeErrMessage();
  }
  return formValid;
}

function checkMatchPassword() {
  const passwordValue = password.value || undefined;
  const confirmPasswordValue = confirmPassword.value || undefined;
  if (
    passwordValue &&
    confirmPasswordValue &&
    !(passwordValue === confirmPasswordValue)
  ) {
    validMessage.classList.remove('hidden');
    validMessage.firstElementChild.textContent = `The Password doesn't Match`;
    removeErrMessage();
  } else {
    return true;
  }
}

function removeErrMessage() {
  setTimeout(() => {
    validMessage.classList.add('hidden');
  }, 2000);
}

export default firstFormValidate;
