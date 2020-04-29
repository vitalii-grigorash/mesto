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
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__forms');
const elements = document.querySelector('.elements');
const submitButton = document.querySelector('.popup__submit-button');
const popupHeading = document.querySelector('.popup__heading');
const popupPhoto = document.querySelector('.popup__photo');
const popupDescription = document.querySelector('.popup__description');
const popupContainer = document.querySelector('.popup__container');

function openPopupEdit() {
    popup.classList.add('popup_opened');
    popupContainer.classList.add('popup__container_forms');
    formElement.classList.remove('popup__forms_none');
    popupPhoto.src = "";
    popupHeading.textContent = "Редактировать профиль";
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    submitButton.textContent = "Сохранить";
}

function openPopupAdd() {
    popup.classList.add('popup_opened');
    popupContainer.classList.add('popup__container_forms');
    formElement.classList.remove('popup__forms_none');
    popupPhoto.src = "";
    popupHeading.textContent = "Новое место";
    nameInput.placeholder = "Название";
    jobInput.placeholder = "Ссылка на картинку";
    submitButton.textContent = "Создать";
}

function removeAll() {
    popup.classList.remove('popup_opened');
    popupPhoto.classList.remove('popup__photo_active');
    popupDescription.classList.remove('popup__description_active');
}

function clearAll() {
    nameInput.value = "";
    jobInput.value = "";
    nameInput.placeholder = "";
    jobInput.placeholder = "";
    popupDescription.textContent = "";
}

function closePopup() {
    removeAll();
    clearAll();
}

function like(evt) {
  evt.target.classList.toggle('elements__like-button_active');
}

function addCard(linkInputValue, jobInputValue) {
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
        place.textContent = jobInputValue;
        const likeButton = document.createElement('button');
        likeButton.classList.add("elements__like-button");
        
        function trash() {
          const listItem = trashButton.closest('.elements__element');
          listItem.remove();
        }
        
        function openPopupImage() {
            popup.classList.add('popup_opened');
            popupPhoto.classList.add('popup__photo_active');
            popupDescription.classList.add('popup__description_active');
            popupContainer.classList.remove('popup__container_forms');
            formElement.classList.add('popup__forms_none');
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

function formSubmitHandler (evt) {
  evt.preventDefault();

  if (submitButton.textContent === "Сохранить") {
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value; 
  } else {
    addCard(jobInput.value, nameInput.value);
  }

  closePopup();
}

editButton.addEventListener('click', openPopupEdit);
addButton.addEventListener('click', openPopupAdd);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].link, initialCards[i].name);
}