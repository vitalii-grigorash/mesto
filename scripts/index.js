import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const initialCards = [
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

const setting = {
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input_name-error_active',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled'
};

const popup = document.querySelector('.popup');
const popupNewCard = document.querySelector('.popup_type_new-card');
export const popupCardOpen = document.querySelector('.popup_type_card-open');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const closeButtonNewCard = document.querySelector('.popup__close-button_new-card');
const closeButtonCardOpen = document.querySelector('.popup__close-button_card-open');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const cardNameInput = document.querySelector('.popup__input_card-name');
const cardLinkInput = document.querySelector('.popup__input_card-link');
export const popupPhoto = document.querySelector('.popup__photo');
export const popupDescription = document.querySelector('.popup__description');
const editFormElement = document.querySelector('.popup__forms');
const addFormElement = document.querySelector('.popup__forms_new-card');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const elements = document.querySelector('.elements');

function escapeListener (evt) {
    if (evt.keyCode === 27) {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
};

function overlayClose (evt) {
    if ((evt.target).classList.contains('popup_opened')) {
        closePopup(evt.target);
    }
};

export function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', escapeListener);
    document.addEventListener('mousedown', overlayClose);
};

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', escapeListener);
    document.removeEventListener('mousedown', overlayClose);
};

function openPopupEdit() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    const formValidate = new FormValidator(setting, editFormElement);
    formValidate.enableValidation();
    openPopup(popup);
};

function openPopupAdd() {
    cardNameInput.value = "";
    cardLinkInput.value = "";
    const formValidate = new FormValidator(setting, addFormElement);
    formValidate.enableValidation();
    openPopup(popupNewCard);
};

function renderCards (cards) {
    cards.forEach((cards) => {
        const card = new Card (cards, '.card-template');   
        const cardElement = card.generateCard();
        elements.prepend(cardElement);
    });
}

function editFormSubmitHandler () {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popup);
};

function addFormSubmitHandler () {
    const card = new Card({
        name: cardNameInput.value, 
        link: cardLinkInput.value,
    },'.card-template')
    const cardElement = card.generateCard();
    elements.prepend(cardElement);
    closePopup(popupNewCard);
};

editButton.addEventListener('click', openPopupEdit);
closeButton.addEventListener('click', () => closePopup(popup));
addButton.addEventListener('click', openPopupAdd);
closeButtonNewCard.addEventListener('click', () => closePopup(popupNewCard));
closeButtonCardOpen.addEventListener('click', () => closePopup(popupCardOpen));
addFormElement.addEventListener('submit', addFormSubmitHandler);
editFormElement.addEventListener('submit', editFormSubmitHandler);

renderCards(initialCards);