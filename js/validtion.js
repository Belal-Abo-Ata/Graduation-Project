function emailValidate(email) {
  const value = email.value;
  const regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const valid = regEx.test(value);
  if (!valid) {
    printMessage(email, 'failed', `Please Enter a Valid Email`);
  } else {
    printMessage(email, 'success');
  }
  return valid;
}

function passwordValidate(password) {
  const value = password.value;
  const valid = value.length === 0 ? false : true;
  if (!valid) {
    printMessage(password, 'failed', `Please Enter a Valid Password`);
  } else {
    printMessage(password, 'success');
  }
  return valid;
}

function nameValidate(usrName) {
  const value = usrName.value;
  const valid = /[a-zA-Z]+/gi.test(value);
  if (!valid) {
    printMessage(usrName, 'failed', `Please Enter a Valid Name`);
  } else {
    printMessage(usrName, 'success');
  }
  return valid;
}

function phoneValidate(phone) {
  const value = phone.value;
  const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const valid = regEx.test(value);
  if (!valid) {
    printMessage(phone, 'failed', `Please Enter a Valid Phone`);
  } else {
    printMessage(phone, 'success');
  }
  return valid;
}

function messageValidate(message) {
  const value = message.value;
  const valid = value.length > 0;
  if (!valid) {
    printMessage(message, 'failed', `Please Enter a Valid Message`);
  } else {
    printMessage(message, 'success');
  }
  return valid;
}

function printMessage(el, type, message = 'Error Message') {
  if (type === 'failed') {
    el.nextElementSibling.textContent = message;
    el.classList.add(`border-red-500`);
  } else {
    el.nextElementSibling.textContent = ``;
    el.classList.remove(`border-red-500`);
  }
}

export {
  emailValidate,
  passwordValidate,
  messageValidate,
  nameValidate,
  phoneValidate,
  printMessage,
};
