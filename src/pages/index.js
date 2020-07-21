import { openPopupEdit, openPopupAdd, openPopupEditAvatar } from '../utils/utils.js';
import { editButton, addButton, popupCardOpen, popupNewCard, popupCardRemove, popupAvatarEdit,
addFormElement, popup, editFormElement, editAvatarFormElement,
profileName, profileJob, setting, avatarProfile,
element, popupPhoto, popupDescription, avatarEditButton, initialAuthorization } from '../utils/constants.js';
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
export const userInfo = new UserInfo({profileName, profileJob}, avatarProfile);
export const api = new Api(initialAuthorization);

export const popupAdd = new PopupWithForm(popupNewCard, {
    formSelector: addFormElement,
    handleFormSubmit: (formData) => {
        popupAdd.renderLoading(true);
        api.addCard(formData)
        .then((res) => {
            const cardList = new Section({
                data: [res], 
                renderer: item => {
                    const card = new Card (item, api, popupWithImage, popupRemoveCard, '.card-template');   
                    cardList.addItem(card.addUserCard());
                }
            },
            element
            );
            cardList.renderItems()
        })
        .catch((error) => {
            console.error(error);
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
        api.setUserInfo(formData)
        .then (() => {
            userInfo.setUserInfo(formData);
        })
        .catch((error) => {
            console.error(error);
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
            userInfo.setUserInfo(formData);
        })
        .catch((error) => {
            console.error(error);
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

api.getUserInfo()
.then((data) => {
    profileName.textContent = data.name;
    profileJob.textContent = data.about;
    avatarProfile.src = data.avatar;
})
.catch((error) => {
    console.error(error);
}),

api.getInitialCards()
.then((res) => {
    const defaultCardList = new Section({
        data: res.reverse(), 
        renderer: (item) => {
            const card = new Card (item, api, popupWithImage, popupRemoveCard, '.card-template');   
            defaultCardList.addItem(card.defaulCards());
        }
    },
    element
    );
    defaultCardList.renderItems();
})
.catch((error) => {
    console.error(error);
})
  