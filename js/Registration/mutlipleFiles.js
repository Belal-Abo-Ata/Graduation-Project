// Import Modules
import { printMessage } from '../validtion.js';

// Variable

const filesInput = document.querySelector(`[data-auth-input]`);
const filesContainer = document.querySelector(`[data-files-container]`);
let removeFileBtns;

// Test
// console.log(filesInput, filesContainer);

// Event Listeners

filesInput.addEventListener(`change`, renderFiles);

// Functions

function renderFiles() {
  const fileArr = Array.from(filesInput.files);
  displayFiles(fileArr);
}

function displayFiles(fileArr) {
  clearFiles(filesContainer);
  fileArr.forEach((file, index) => {
    const fileURL = URL.createObjectURL(file);
    filesContainer.insertAdjacentHTML(
      `beforeend`,
      `
        <div class="relative h-16 flex-shrink-0" id=${index} data-file>
          <button
            type="button"
            class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
            data-remove-file
            >
            <i class="fa-sharp fa-circle-xmark"></i>
          </button>
          <img
          class="w-16 aspect-square"
          src="${fileURL}"
          alt="" />
        </div>
    `
    );
  });

  removeFileBtns = document.querySelectorAll(`[data-remove-file]`);
  removeFileBtns.forEach(btn =>
    btn.addEventListener(`click`, e => removeFile(e, fileArr))
  );
}

function clearFiles(node) {
  let el = node.lastElementChild;
  if (el) {
    while (el) {
      el.remove();
      el = node.lastElementChild;
    }
  }
}

function removeFile(e, fileArr) {
  let el = e.target.parentElement;
  while (!('file' in el.dataset)) {
    el = el.parentElement;
  }
  const newFileArr = fileArr.filter((file, index) => {
    return !(+el.id === index);
  });
  displayFiles(newFileArr);
}

export default function forthFormValidate() {
  if (filesContainer.childElementCount === 0) {
    printMessage(filesContainer, 'failed', 'Please Enter a photoes');
    return false;
  } else {
    printMessage(filesContainer, 'success', 'Please Enter a photoes');
    return true;
  }
}
