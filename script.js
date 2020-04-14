let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});

let formElement = document.querySelector('.popup__forms');

function formSubmitHandler (evt) {
    evt.preventDefault();

    let nameInput = document.querySelector('.popup__input_name');
    let jobInput = document.querySelector('.popup__input_job');

    console.log(nameInput.value);
    console.log(jobInput.value);

    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__job');

    profileName.textContent = (nameInput.value);
    profileJob.textContent = (jobInput.value);

    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);



