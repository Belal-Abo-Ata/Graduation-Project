// Selecting Elements

const form = document.querySelector(`[data-form]`);
const userBoxInfo = document.querySelectorAll(`[data-user-box-info] div div`);
const spanUserBoxLabel = Array.from(userBoxInfo).map(box =>
  box.querySelector(`span:first-child`)
);
const spanUserBoxInfo = Array.from(userBoxInfo).map(box =>
  box.querySelector(`span:last-child`)
);
const editBtn = document.querySelector(`[data-edit-btn]`);
let editFlag = false;

// Add EventListeners

// editBtn.addEventListener(`click`, editInfo);
form.addEventListener(`submit`, editInfo);

// Functions

function editInfo(e) {
  editFlag === false ? (editFlag = true) : (editFlag = false);
  if (editFlag) {
    e.preventDefault();
    insertInputsFields();
    editBtn.textContent = 'Submit';
  }
}

function insertInputsFields() {
  userBoxInfo.forEach((box, index) => {
    switch (spanUserBoxInfo[index].dataset.type) {
      case 'text':
      case 'date':
      case 'email':
        {
          box.insertAdjacentHTML(
            `afterend`,
            `
            <div class="mr-4 md:p-5 box d-flex align-center" data-input-div>
            <label class="block mr-2" for=${index} >${spanUserBoxLabel[index].textContent}</label>
            <input class="border border-gray-500 focus:outline-none px-2 py-px" id=${index} type=${spanUserBoxInfo[index].dataset.type} data-inputs  />
        </div>
          `
          );
        }
        break;
      case 'select-gender':
        {
          box.insertAdjacentHTML(
            `afterend`,
            `
            <div class="mr-4 md:p-5 box d-flex align-center" data-input-div>
            <label class="block mr-2" for=${index} >${spanUserBoxLabel[index].textContent}</label>
                  <select class="border border-gray-500 focus:outline-none px-2 py-px" id=${index} type=${spanUserBoxInfo[index].dataset.type} data-inputs>
                    <option>Male</option>
                    <option>Female</option>
                  </select>  
        </div>
          `
          );
        }
        break;
      default:
        break;
    }
    box.style.display = `none`;
  });
  setInputsValue();
}

function setInputsValue() {
  const inputs = document.querySelectorAll(`[data-inputs]`);
  inputs.forEach((input, index) => {
    input.value = spanUserBoxInfo[index].textContent;
  });
}

// function deleteInputs() {
//   const inputs = document.querySelectorAll(`[data-input-div]`);
//   inputs.forEach(input => input.remove());
//   userBoxInfo.forEach(box => (box.style.display = 'block'));
// }
