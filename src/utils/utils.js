import { editFormElement, cardNameInput, cardLinkInput, addFormElement,
elements, nameInput, jobInput } from './constants.js';

import { Card } from '../components/Card.js';

import { popupWithImage, userInfo, popupEdit, popupAdd,
addFormValidate, editFormValidate } from '../pages/index.js';

function submitButton (formElement, formValidate) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input')); 
    const button = formElement.querySelector('.popup__submit-button');
    formValidate.toggleButtonState(inputList, button);
};

export function openPopupEdit() {
    nameInput.value = userInfo.getUserInfo().name;
    jobInput.value = userInfo.getUserInfo().job;
    submitButton(editFormElement, editFormValidate);
    popupEdit.open();
    editFormValidate.clearAllErrors();
};

export function openPopupAdd() {
    cardNameInput.value = "";
    cardLinkInput.value = "";
    submitButton(addFormElement, addFormValidate);
    popupAdd.open();
    addFormValidate.clearAllErrors();
};

export function editFormSubmitHandler () {
    userInfo.setUserInfo();
    popupEdit.close();
};

export function addFormSubmitHandler () {
    const card = new Card({ 
        name: cardNameInput.value,  
        link: cardLinkInput.value, 
    },'.card-template', popupWithImage)
    const cardElement = card.generateCard();
    elements.prepend(cardElement);
    popupAdd.close();
};


