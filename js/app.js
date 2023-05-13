// Selecting Elements

const toggleNavBtn = document.querySelector(`[data-toggle-nav]`);
const navbar = document.querySelector(`[data-navbar]`);
const closeNavBtn = document.querySelector(`[data-close-nav]`);
const toggleUserInfo = document.querySelector(`[data-toggle-user-info]`);
const userInfo = document.querySelector(`[data-user-info]`);

// Event Listener

toggleNavBtn.addEventListener(`click`, () => {
  navbar.classList.toggle(`left-0`);
});

closeNavBtn.addEventListener(`click`, () => {
  navbar.classList.remove(`left-0`);
});

toggleUserInfo.addEventListener(`click`, () => {
  userInfo.classList.toggle(`max-h-[155px]`);
  userInfo.classList.toggle(`max-h-0`);
  userInfo.classList.toggle(`border`);
});
