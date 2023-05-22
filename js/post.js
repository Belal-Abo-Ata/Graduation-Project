// Select Elements

const togglePostInfo = document.querySelectorAll(`[data-toggle-post-info]`);
const postInfo = document.querySelectorAll(`[data-post-info]`);

console.log(togglePostInfo);

// Add EventListener

togglePostInfo.forEach((button, index) =>
  button.addEventListener(`click`, () => {
    togglePost(index);
  })
);

// Functions

function togglePost(index) {
  postInfo[index].classList.toggle(`max-h-[155px]`);
  postInfo[index].classList.toggle(`p-4`);
}
