export const setting = {
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input_name-error_active',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled'
};

export const initialAuthorization = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-12',
    headers: {
      authorization: '23e3d2ae-f405-4f8e-a432-7a3c52096726',
      'Content-Type': 'application/json'
    }
}

export const popup = document.querySelector('.popup');
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const popupCardOpen = document.querySelector('.popup_type_card-open'); 
export const popupCardRemove = document.querySelector('.popup_type_card-remove');
export const popupAvatarEdit = document.querySelector('.popup_type_avatar-edit'); 
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const avatarEditButton = document.querySelector('.profile__overlay');
export const nameInput = document.querySelector('.popup__input_name');
export const jobInput = document.querySelector('.popup__input_job');
export const cardNameInput = document.querySelector('.popup__input_card-name');
export const cardLinkInput = document.querySelector('.popup__input_card-link');
export const avatarInput = document.querySelector('.popup__input_avatar-edit');
export const avatarProfile = document.querySelector('.profile__avatar');
export const popupPhoto = document.querySelector('.popup__photo'); 
export const popupDescription = document.querySelector('.popup__description'); 
export const editFormElement = document.querySelector('.popup__forms');
export const addFormElement = document.querySelector('.popup__forms_new-card');
export const editAvatarFormElement = document.querySelector('.popup__forms_avatar-edit');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const element = '.elements';