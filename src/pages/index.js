import { openPopupEdit, openPopupAdd, openPopupEditAvatar } from '../utils/utils.js';
import { editButton, addButton, popupCardOpen, popupNewCard, popupCardRemove, popupAvatarEdit,
addFormElement, popup, editFormElement, editAvatarFormElement,
profileName, profileJob, setting, avatarProfile,
element, elements, popupPhoto, popupDescription, avatarEditButton } from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import { Card } from '../components/Card.js';
import { Popup } from '../components/Popup.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Api } from '../components/Api.js';
import './index.css';

export const popupWithImage = new PopupWithImage(popupCardOpen, popupPhoto, popupDescription);
export const popupRemoveCard = new Popup(popupCardRemove);
export const editFormValidate = new FormValidator(setting, editFormElement);
export const editAvatarFormValidate = new FormValidator(setting, editAvatarFormElement);
export const addFormValidate = new FormValidator(setting, addFormElement);
export const userInfo = new UserInfo({profileName, profileJob});

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-12',
    headers: {
      authorization: '23e3d2ae-f405-4f8e-a432-7a3c52096726',
      'Content-Type': 'application/json'
    }
});

export const popupAdd = new PopupWithForm(popupNewCard, {
    formSelector: addFormElement,
    handleFormSubmit: (formData) => {
        popupAdd.renderLoading(true);
        api.setCard(formData)
        .then (() => {
            const card = new Card(formData, '.card-template', popupWithImage, popupRemoveCard);
            const cardElement = card.addUserCard();
            elements.prepend(cardElement);
        })
        .finally (() => {
            popupAdd.renderLoading(false);
        })
    }
});

export const popupEdit = new PopupWithForm(popup, {
    formSelector: editFormElement,
    handleFormSubmit: (formData) => {
        popupEdit.renderLoading(true);
        api.userInfo(formData)
        .then (() => {
            userInfo.setUserInfo(formData);
        })
        .finally (() => {
            popupEdit.renderLoading(false);
        })
    }
})

export const popupEditAvatar = new PopupWithForm(popupAvatarEdit, {
    formSelector: editAvatarFormElement,
    handleFormSubmit: (formData) => {
        popupEditAvatar.renderLoading(true);
        api.setAvatar(formData)
        .then(() => {
            avatarProfile.src = formData.link;
        })
        .finally(() => {
            popupEditAvatar.renderLoading(false);
        })
    }
})

editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupAdd);
avatarEditButton.addEventListener('click', openPopupEditAvatar);

editFormValidate.enableValidation();
editAvatarFormValidate.enableValidation();
addFormValidate.enableValidation();

api.getInitialCards()
    .then((res) => {
    const defaultCardList = new Section({
        data: res, 
        renderer: (item) => {
            const card = new Card (item, '.card-template', popupWithImage, popupRemoveCard);   
            const cardElement = card.defaulCards();
            defaultCardList.addItem(cardElement)
        }
    },
    element
    );
    defaultCardList.renderItems();
})

api.getUserInfo()
.then((data) => {
    profileName.textContent = data.name;
    profileJob.textContent = data.about;
    avatarProfile.src = data.avatar;
})