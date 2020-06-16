import { editFormElement, cardNameInput, cardLinkInput, addFormElement,
elements, nameInput, jobInput } from './constants.js';

import { Card } from '../components/Card.js';

import { popupWithImage, userInfo, popupEdit, popupAdd,
addFormValidate, editFormValidate } from '../pages/index.js';

function submitButton (formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input')); 
    const button = formElement.querySelector('.popup__submit-button');
    inputList.forEach((inputElement) => {
        if (inputElement.value === '') {
            button.classList.add('popup__submit-button_disabled');
            button.setAttribute('disabled', true);
        } else {
            button.classList.remove('popup__submit-button_disabled');
            button.removeAttribute('disabled');
        }
    })
};

export function openPopupEdit() {
    nameInput.value = userInfo.getUserInfo().name;
    jobInput.value = userInfo.getUserInfo().job;
    popupEdit.open();
    submitButton(editFormElement);
    editFormValidate.clearAllErrors();
};

export function openPopupAdd() {
    cardNameInput.value = "";
    cardLinkInput.value = "";
    popupAdd.open();
    submitButton(addFormElement);
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