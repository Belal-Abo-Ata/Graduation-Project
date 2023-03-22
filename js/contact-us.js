// Select Elements

const form = document.querySelector(`[data-form]`);
const usrName = document.querySelector(`[data-name]`);
const email = document.querySelector(`[data-email]`);
const phone = document.querySelector(`[data-phone]`);
const message = document.querySelector(`[data-message]`);

// console.log(form, usrName, email, phone, message);

// Add EventListeners

form.addEventListener(`submit`, formValidate);

// usrName.addEventListener(`blur`, nameValidate);

// email.addEventListener(`blur`, emailValidate);

// phone.addEventListener(`blur`, phoneValidate);

// message.addEventListener(`blur`, messageValidate);

// Functions

function formValidate(e) {
  const nameValid = nameValidate();
  const emailValid = emailValidate();
  const phoneValid = phoneValidate();
  const messageValid = messageValidate();
  const formValid = nameValid && emailValid && phoneValid && messageValid;
  if (!formValid) {
    e.preventDefault();
  }
}

function nameValidate() {
  const value = usrName.value;
  const valid = /[a-zA-Z]+/gi.test(value);
  if (!valid) {
    usrName.nextElementSibling.textContent = `Please enter a valid name`;
    usrName.classList.add(`border-red-500`);
  } else {
    usrName.nextElementSibling.textContent = ``;
    usrName.classList.remove(`border-red-500`);
  }
  return valid;
}

function emailValidate() {
  const value = email.value;
  const regEx = (validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  const valid = regEx.test(value);
  if (!valid) {
    email.nextElementSibling.textContent = `Please enter a valid email`;
    email.classList.add(`border-red-500`);
  } else {
    email.nextElementSibling.textContent = ``;
    email.classList.remove(`border-red-500`);
  }
  return valid;
}

function phoneValidate() {
  const value = phone.value;
  const regEx = (validRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
  const valid = regEx.test(value);
  if (!valid) {
    phone.nextElementSibling.textContent = `Please enter a valid phone`;
    phone.classList.add(`border-red-500`);
  } else {
    phone.nextElementSibling.textContent = ``;
    phone.classList.remove(`border-red-500`);
  }
  return valid;
}

function messageValidate() {
  const value = message.value;
  const valid = value.length > 0;
  if (!valid) {
    message.nextElementSibling.textContent = `Please enter a valid message`;
    message.classList.add(`border-red-500`);
  } else {
    message.nextElementSibling.textContent = ``;
    message.classList.remove(`border-red-500`);
  }
  return valid;
}
