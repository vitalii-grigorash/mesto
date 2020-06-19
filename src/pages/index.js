import { openPopupEdit, openPopupAdd } from '../utils/utils.js';
import { editButton, addButton, popupCardOpen, popupNewCard,
addFormElement, popup, editFormElement, nameInput, 
jobInput, profileName, profileJob, setting, initialCards,  element } from '../utils/constants.js';
import { addFormSubmitHandler, editFormSubmitHandler } from '../utils/utils.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import './index.css';

export const popupWithImage = new PopupWithImage(popupCardOpen);
export const popupAdd = new PopupWithForm(popupNewCard, addFormSubmitHandler, addFormElement);
export const popupEdit = new PopupWithForm(popup, editFormSubmitHandler, editFormElement);
export const userInfo = new UserInfo(nameInput, jobInput, profileName, profileJob);
export const editFormValidate = new FormValidator(setting, editFormElement);
export const addFormValidate = new FormValidator(setting, addFormElement);

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