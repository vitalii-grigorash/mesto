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
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupCardOpen = document.querySelector('.popup_type_card-open');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const closeButtonNewCard = document.querySelector('.popup__close-button_new-card');
const closeButtonCardOpen = document.querySelector('.popup__close-button_card-open');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardLinkInput = document.querySelector('.popup__input_type_card-link');
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
}

function openPopupAdd() {
    popupNewCard.classList.add('popup_opened');
}

function closePopupEdit() {
    popup.classList.remove('popup_opened');
    nameInput.value = "";
    jobInput.value = "";
}

function closePopupAdd() {
    popupNewCard.classList.remove('popup_opened');
    cardNameInput.value = "";
    cardLinkInput.value = "";
}

function closePopupCard() {
    popupCardOpen.classList.remove('popup_opened');
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
        }
    
        likeButton.addEventListener('click', like);
        trashButton.addEventListener('click', trash);
        image.addEventListener('click', openPopupImage);
        
        group.append(place,likeButton);
        element.append(image, trashButton, group);
        elements.prepend(element);
    }

function editFormSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopupEdit();
}

function addFormSubmitHandler (evt) {
    evt.preventDefault();
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

for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].link, initialCards[i].name);
}