import { editFormElement, cardNameInput, cardLinkInput, addFormElement,
nameInput, jobInput } from './constants.js';

import { popupEdit, popupAdd,
addFormValidate, editFormValidate, userInfo } from '../pages/index.js';

function submitButton (formElement, formValidate) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input')); 
    const button = formElement.querySelector('.popup__submit-button');
    formValidate.toggleButtonState(inputList, button);
};

export function openPopupEdit() {
    nameInput.value = userInfo.getUserInfo().name;
    jobInput.value = userInfo.getUserInfo().job;
    editFormValidate.clearAllErrors();
    submitButton(editFormElement, editFormValidate);
    popupEdit.open();
};

export function openPopupAdd() {
    cardNameInput.value = "";
    cardLinkInput.value = "";
    submitButton(addFormElement, addFormValidate);
    addFormValidate.clearAllErrors();
    popupAdd.open();
};