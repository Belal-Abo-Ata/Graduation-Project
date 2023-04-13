// Import Validtion Functions
import { emailValidate, passwordValidate } from './validtion.js';

// Dummy Database
const users = [
  { email: 'belal@gmail.com', password: '123' },
  { email: 'turkey@gmail.com', password: '456' },
];

// Select Elements
const form = document.querySelector(`[data-form]`);
const email = document.querySelector(`[data-email]`);
const password = document.querySelector(`[data-password]`);
const userValid = document.querySelector(`[data-user-valid]`);

// Event Listeners

form.addEventListener(`submit`, formValidate);

email.addEventListener(`blur`, e => {
  emailValidate(e.target);
});

password.addEventListener(`blur`, e => {
  passwordValidate(e.target);
});

// Functions

function formValidate(e) {
  const emailValid = emailValidate(email);
  const passwordValid = passwordValidate(password);
  const formValid = emailValid && passwordValid;
  if (!formValid) {
    e.preventDefault();
  } else {
    findUsers();
    e.preventDefault();
  }
}

function findUsers() {
  const user = users.find(user => user.email === email.value);
  const pass = user ? user.password : undefined;
  if (!user) {
    userValid.classList.remove('hidden');
    removeErr();
  } else if (!(password.value === pass)) {
    userValid.classList.remove('hidden');
    removeErr();
  }
}

function removeErr() {
  setTimeout(() => {
    userValid.classList.add('hidden');
  }, 5000);
}
