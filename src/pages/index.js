import { openPopupEdit, openPopupAdd } from '../utils/utils.js';
import { editButton, addButton, popupCardOpen, popupNewCard,
addFormElement, popup, editFormElement, nameInput, 
jobInput, profileName, profileJob, setting, initialCards, element, elements } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import './index.css';

export const popupWithImage = new PopupWithImage(popupCardOpen);
export const editFormValidate = new FormValidator(setting, editFormElement);
export const addFormValidate = new FormValidator(setting, addFormElement);
export const userInfo = new UserInfo({profileName, profileJob});

export const popupAdd = new PopupWithForm(popupNewCard, {
    formSelector: addFormElement,
    handleFormSubmit: (formData) => {
        const card = new Card(formData, '.card-template', popupWithImage);
        const cardElement = card.generateCard();
        elements.prepend(cardElement);
    }
});

export const popupEdit = new PopupWithForm(popup, {
    formSelector: editFormElement,
    handleFormSubmit: () => {
        userInfo.setUserInfo(nameInput, jobInput);
    }
})

const defaultCardList = new Section({
        data: initialCards, 
        renderer: (item) => {
            const card = new Card (item, '.card-template', popupWithImage);   
            const cardElement = card.generateCard();
            defaultCardList.addItem(cardElement)
        }
    },
    element
);

editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupAdd);

editFormValidate.enableValidation();
addFormValidate.enableValidation();

defaultCardList.renderItems();