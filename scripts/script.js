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

const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupNewCardContainer = document.querySelector('.popup__container_new-card');
const popupCardOpen = document.querySelector('.popup_type_card-open');
const popupCardOpenContainer = document.querySelector('.popup__container_card-open');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const closeButtonNewCard = document.querySelector('.popup__close-button_new-card');
const closeButtonCardOpen = document.querySelector('.popup__close-button_card-open');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const cardNameInput = document.querySelector('.popup__input_card-name');
const cardLinkInput = document.querySelector('.popup__input_card-link');
const popupPhoto = document.querySelector('.popup__photo');
const popupDescription = document.querySelector('.popup__description');
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

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', escapeListener);
    document.addEventListener('mousedown', overlayClose);
};

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', escapeListener);
    document.removeEventListener('mousedown', overlayClose);
};

function clearAllErrors(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__submit-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach(inputElement => {
        hideInputError(formElement, inputElement, '.popup__input_name-error_active');
    });
};

function openPopupEdit() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    clearAllErrors(editFormElement);
    openPopup(popup);
};

function openPopupAdd() {
    cardNameInput.value = "";
    cardLinkInput.value = "";
    clearAllErrors(addFormElement);
    openPopup(popupNewCard);
};

function loadCards (cards) {
    return cards.map((card) => addCard(card));
};

function renderCards(cards) {
    elements.prepend(...cards);
};

function openPopupImage(event) {
    const cardOpen = event.target.closest('.elements__element');
    const title = cardOpen.querySelector('.elements__place');
    popupPhoto.src = event.target.src;
    popupDescription.textContent = title.textContent;
    openPopup(popupCardOpen);
};

function like (evt) {
    evt.target.classList.toggle('elements__like-button_active');
};

function trash (evt) {
    evt.target.closest('.elements__element').remove();
};

function editFormSubmitHandler (evt) {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popup);
};

function addFormSubmitHandler (evt) {
    const newCard = addCard({
        name: cardNameInput.value,
        link: cardLinkInput.value,
    })
    renderCards([newCard]);
    closePopup(popupNewCard);
};

function addCard(item) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardElementImg = cardElement.querySelector('.elements__image');
    cardElementImg.src = item.link;
    cardElementImg.alt = item.name;
    cardElement.querySelector('.elements__place').textContent = item.name;

    cardElement.querySelector('.elements__trash-button').addEventListener('click', trash);
    cardElement.querySelector('.elements__like-button').addEventListener('click', like);
    cardElement.querySelector('.elements__image').addEventListener('click', openPopupImage);

    return cardElement;
};

editButton.addEventListener('click', openPopupEdit);
closeButton.addEventListener('click', closePopup.bind(null, popup));
addButton.addEventListener('click', openPopupAdd);
closeButtonNewCard.addEventListener('click', closePopup.bind(null, popupNewCard));
closeButtonCardOpen.addEventListener('click', closePopup.bind(null, popupCardOpen));
addFormElement.addEventListener('submit', addFormSubmitHandler);
editFormElement.addEventListener('submit', editFormSubmitHandler);

renderCards(loadCards(initialCards));