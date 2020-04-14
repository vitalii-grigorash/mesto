const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = document.querySelector('.popup__forms');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');

    nameInput.value = profileName.textContent;  
    jobInput.value = profileJob.textContent;
});

if (nameInput.value === "") {
    nameInput.value = profileName.textContent;
}

if (jobInput.value === "") {
    jobInput.value = profileJob.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);



