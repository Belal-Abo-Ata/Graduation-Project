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

email.addEventListener(`blur`, emailValidate);

password.addEventListener(`blur`, passwordValidate);

// Functions

function formValidate(e) {
  const emailValid = emailValidate();
  const passwordValid = passwordValidate();
  const formValid = emailValid && passwordValid;
  if (!formValid) {
    e.preventDefault();
  } else {
    findUsers();
    e.preventDefault();
  }
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

function passwordValidate() {
  const value = password.value;
  const valid = value.length === 0 ? false : true;
  if (!valid) {
    password.nextElementSibling.textContent = `Please enter a valid password`;
    password.classList.add(`border-red-500`);
  } else {
    password.nextElementSibling.textContent = ``;
    password.classList.remove(`border-red-500`);
  }
  return valid;
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
  const time = setTimeout(() => {
    userValid.classList.add('hidden');
  }, 10000);
}
