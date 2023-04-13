// Import Validtion Functions
import {
  nameValidate,
  emailValidate,
  phoneValidate,
  messageValidate,
} from './validtion.js';

// Select Elements

const form = document.querySelector(`[data-form]`);
const usrName = document.querySelector(`[data-name]`);
const email = document.querySelector(`[data-email]`);
const phone = document.querySelector(`[data-phone]`);
const message = document.querySelector(`[data-message]`);

// console.log(form, usrName, email, phone, message);

// Add EventListeners

form.addEventListener(`submit`, formValidate);

usrName.addEventListener(`blur`, e => {
  nameValidate(e.target);
});

email.addEventListener(`blur`, e => {
  emailValidate(e.target);
});

phone.addEventListener(`blur`, e => {
  phoneValidate(e.target);
});

message.addEventListener(`blur`, e => {
  messageValidate(e.target);
});

// Functions

function formValidate(e) {
  const nameValid = nameValidate(usrName);
  const emailValid = emailValidate(email);
  const phoneValid = phoneValidate(phone);
  const messageValid = messageValidate(message);
  const formValid = nameValid && emailValid && phoneValid && messageValid;
  if (!formValid) {
    e.preventDefault();
  }
}
