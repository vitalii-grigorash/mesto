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
const submitButton = document.querySelector('.popup__submit-button');
const submitButtonNewCard = document.querySelector('.popup__submit-button_new-card');
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

function openPopupEdit() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove('popup__submit-button_disabled');
    hideInputError(editFormElement, nameInput);
    hideInputError(editFormElement, jobInput);
    addEscapeListener(popup);
}

function openPopupAdd() {
    popupNewCard.classList.add('popup_opened');
    submitButtonNewCard.setAttribute('disabled', true);
    submitButtonNewCard.classList.add('popup__submit-button_disabled');
    hideInputError(addFormElement, cardNameInput);
    hideInputError(addFormElement, cardLinkInput);
    addEscapeListener(popupNewCard);
}

function closePopupEdit() {
    popup.classList.remove('popup_opened');
    nameInput.value = "";
    jobInput.value = "";
    document.removeEventListener('keyup', escapeListener);   
}

function closePopupAdd() {
    popupNewCard.classList.remove('popup_opened');
    cardNameInput.value = "";
    cardLinkInput.value = "";
    document.removeEventListener('keyup', escapeListener); 
}

function closePopupCard() {
    popupCardOpen.classList.remove('popup_opened');
    document.removeEventListener('keyup', escapeListener); 
}

function like(evt) {
  evt.target.classList.toggle('elements__like-button_active');
}

function addCard(linkInputValue, nameInputValue) {
    const element = document.createElement('div');
    element.classList.add("elements__element");
    const image = document.createElement('img');
    image.classList.add("elements__image");
    image.src = linkInputValue;
    const trashButton = document.createElement('button');
    trashButton.classList.add("elements__trash-button");
    const group = document.createElement('div');
    group.classList.add("elements__group");
    const place = document.createElement('p');
    place.classList.add("elements__place");
    place.textContent = nameInputValue;
    const likeButton = document.createElement('button');
    likeButton.classList.add("elements__like-button");
        
    function trash() {
        const listItem = trashButton.closest('.elements__element');
        listItem.remove();
    }
        
    function openPopupImage() {
        popupCardOpen.classList.add('popup_opened');
        popupPhoto.src = image.src;
        popupDescription.textContent = place.textContent;
        addEscapeListener(popupCardOpen);
    }
    
    likeButton.addEventListener('click', like);
    trashButton.addEventListener('click', trash);
    image.addEventListener('click', openPopupImage);
        
    group.append(place,likeButton);
    element.append(image, trashButton, group);
    elements.prepend(element);
}

function editFormSubmitHandler (evt) {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopupEdit();
}

function addFormSubmitHandler (evt) {
    addCard(cardLinkInput.value, cardNameInput.value);
    closePopupAdd();
}

editButton.addEventListener('click', openPopupEdit);
closeButton.addEventListener('click', closePopupEdit);
addButton.addEventListener('click', openPopupAdd);
closeButtonNewCard.addEventListener('click', closePopupAdd);
closeButtonCardOpen.addEventListener('click', closePopupCard);
addFormElement.addEventListener('submit', addFormSubmitHandler);
editFormElement.addEventListener('submit', editFormSubmitHandler);

function addEscapeListener(somePopup) {
    if (somePopup.classList.contains('popup_opened')) {
        document.addEventListener('keyup', escapeListener);
    }
}

const escapeListener = (evt) => {
    if (evt.keyCode === 27) {
        closePopupEdit();
        closePopupAdd();
        closePopupCard();
    } 
}

popup.addEventListener('mousedown', function (evt) {
    if (!popupContainer.contains(evt.target)) {
        closePopupEdit();
    }
});

popupNewCard.addEventListener('mousedown', function (evt) {
    if (!popupNewCardContainer.contains(evt.target)) {
        closePopupAdd();
    }
});

popupCardOpen.addEventListener('click', function (evt) {
    if (!popupCardOpenContainer.contains(evt.target)) {
        closePopupCard();
    }
});

for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].link, initialCards[i].name);
}