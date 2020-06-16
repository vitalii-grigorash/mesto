export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const setting = {
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input_name-error_active',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled'
};

export const popup = document.querySelector('.popup');
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const popupCardOpen = document.querySelector('.popup_type_card-open'); 
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const nameInput = document.querySelector('.popup__input_name');
export const jobInput = document.querySelector('.popup__input_job');
export const cardNameInput = document.querySelector('.popup__input_card-name');
export const cardLinkInput = document.querySelector('.popup__input_card-link');
export const popupPhoto = document.querySelector('.popup__photo'); 
export const popupDescription = document.querySelector('.popup__description'); 
export const editFormElement = document.querySelector('.popup__forms');
export const addFormElement = document.querySelector('.popup__forms_new-card');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const elements = document.querySelector('.elements');
export const element = '.elements';