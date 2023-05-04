// Import

import Cropper from '../../node_modules/cropperjs/dist/cropper.esm.js';
import { printMessage } from '../validtion.js';

// Selecting Elements

const modal = document.querySelector(`.modal`);
const userImage = document.querySelector(`[data-profile-picture-img]`);
const userImgInput = document.querySelector(`[data-profile-picture-input]`);
const croppedImage = document.getElementById(`cropped-image`);
const cropButton = document.getElementById('crop-button');
const cancelButton = document.getElementById('cancel-button');

// Event Listener

userImgInput.addEventListener(`change`, showModal);
cancelButton.addEventListener(`click`, closeModal);

// Functions

function displayModal(image) {
  const cropper = new Cropper(image, {
    background: false,
    aspectRatio: 1,
    dragMode: 'none',
    zoomable: false,
    movable: true,
    cropBoxResizable: false,
    minCropBoxWidth: 96,
  });
  cropButton.addEventListener(`click`, () => {
    closeModal();
    userImage.src = cropper.getCroppedCanvas().toDataURL();
    cropper.destroy();
  });
}

function showModal() {
  modal.classList.remove(`hidden`);
  const img = userImgInput.files[0];
  croppedImage.src = URL.createObjectURL(img);
  displayModal(croppedImage);
}

function closeModal() {
  modal.classList.add(`hidden`);
}

export default function thirdFormValidate() {
  if (userImage.src.includes('/assest/user.png')) {
    printMessage(userImgInput, 'failed', 'Please Enter a photo');
    return false;
  } else {
    printMessage(userImgInput, 'success', 'Please Enter a photo');
    return true;
  }
}
