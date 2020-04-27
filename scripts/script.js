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
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__forms');
const popupAdd = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-button');
const addCloseButton = document.querySelector('.popup-add__close-button');
const addNameInput = document.querySelector('.popup-add__input_name');
const addLinkInput = document.querySelector('.popup-add__input_link');
const addFormElement = document.querySelector('.popup-add__forms');
const elements = document.querySelector('.elements');
const popupImagePhoto = document.querySelector('.popup-image__photo');
const popupImageDescription = document.querySelector('.popup-image__description');

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
    nameInput.value = "";
    jobInput.value = "";
}

function openPopupAdd() {
    popupAdd.classList.add('popup-add_opened');
    addNameInput.placeholder = "Название";
    addLinkInput.placeholder = "Ссылка на картинку";
}

function closePopupAdd() {
    popupAdd.classList.remove('popup-add_opened');
    addNameInput.value = "";
    addLinkInput.value = "";
}

function addCard() {
    elements.insertAdjacentHTML('afterbegin',
    `<div class="elements__element">
        <img class="elements__image" src="${addLinkInput.value}" alt="Изображение">
        <button class="elements__trash-button"></button>
        <div class="elements__group">
            <p class="elements__place">${addNameInput.value}</p>
            <button class="elements__like-button"></button>
        </div>
    </div>`);
    const likeButton = document.querySelector('.elements__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like-button_active');
    });

    const trashButton = document.querySelector('.elements__trash-button');
    trashButton.addEventListener('click', function () {
    const listItem = trashButton.closest('.elements__element');
    listItem.remove();
    });

    const popupPhotoButton = document.querySelector('.elements__image');
    const popupImage = document.querySelector('.popup-image');
    const popupImageCloseButton = document.querySelector('.popup-image__close-button');
    const elementsPlace = document.querySelector('.elements__place');

    popupPhotoButton.addEventListener('click', function () {
        popupImage.classList.add('popup-image_opened');
        popupImagePhoto.src = popupPhotoButton.src;
        popupImageDescription.textContent = elementsPlace.textContent;
    });

    popupImageCloseButton.addEventListener('click', function () {
        popupImage.classList.remove('popup-image_opened');
    });
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

function addformSubmitHandler (evt) {
    evt.preventDefault();
    addCard();
    closePopupAdd();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
addButton.addEventListener('click', openPopupAdd);
addCloseButton.addEventListener('click', closePopupAdd);
addFormElement.addEventListener('submit', addformSubmitHandler);

for (let i = 0; i <= 5; i = i + 1) {
    elements.insertAdjacentHTML('afterbegin',
    `<div class="elements__element">
        <img class="elements__image" src="${initialCards[i].link}" alt="Изображение">
        <button class="elements__trash-button"></button>
        <div class="elements__group">
            <p class="elements__place">${initialCards[i].name}</p>
            <button class="elements__like-button"></button>
        </div>
    </div>`);
    const likeButton = document.querySelector('.elements__like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like-button_active');
    });

    const trashButton = document.querySelector('.elements__trash-button');
    trashButton.addEventListener('click', function () {
    const listItem = trashButton.closest('.elements__element');
    listItem.remove();
    });

    const popupPhotoButton = document.querySelector('.elements__image');
    const popupImage = document.querySelector('.popup-image');
    const popupImageCloseButton = document.querySelector('.popup-image__close-button');
    const elementsPlace = document.querySelector('.elements__place');
    

    popupPhotoButton.addEventListener('click', function () {
        popupImage.classList.add('popup-image_opened');
        popupImagePhoto.src = popupPhotoButton.src;
        popupImageDescription.textContent = elementsPlace.textContent;
    });

    popupImageCloseButton.addEventListener('click', function () {
        popupImage.classList.remove('popup-image_opened');
    });
}