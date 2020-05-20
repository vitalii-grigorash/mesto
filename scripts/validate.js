const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_error');
    errorElement.classList.add('popup__input_name-error_active');
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_error');
    errorElement.classList.remove('popup__input_name-error_active');
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList) => {
    if (hasInvalidInput(inputList)) {
        submitButton.setAttribute('disabled', true);
        submitButton.classList.add('popup__submit-button_disabled');
        submitButtonNewCard.setAttribute('disabled', true);
        submitButtonNewCard.classList.add('popup__submit-button_disabled');
    } else {
        submitButton.removeAttribute('disabled');
        submitButton.classList.remove('popup__submit-button_disabled');
        submitButtonNewCard.removeAttribute('disabled');
        submitButtonNewCard.classList.remove('popup__submit-button_disabled');
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList);
      });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__forms'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        });
    setEventListeners(formElement);
    });
};

enableValidation();