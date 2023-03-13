const toggleNavBtn = document.querySelector(`[data-toggle-nav]`);
const navbar = document.querySelector(`[data-navbar]`);
const closeNavBtn = document.querySelector(`[data-close-nav]`);

toggleNavBtn.addEventListener(`click`, () => {
  navbar.classList.toggle(`left-0`);
});

closeNavBtn.addEventListener(`click`, () => {
  navbar.classList.remove(`left-0`);
});

console.log(closeNavBtn);
