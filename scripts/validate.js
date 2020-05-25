const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => { 
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.add(inputErrorClass); 
  errorElement.textContent = errorMessage; 
  errorElement.classList.add(errorClass); 
}; 

const hideInputError = (formElement, inputElement, {errorClass}) => { 
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.remove('popup__input_error'); 
  errorElement.textContent = ''; 
  errorElement.classList.remove(errorClass); 
}; 

const isValid = (formElement, inputElement, newData) => { 
  if (!inputElement.validity.valid) { 
    showInputError(formElement, inputElement, inputElement.validationMessage, newData); 
  } else { 
    hideInputError(formElement, inputElement, newData); 
  } 
}; 

const hasInvalidInput = (inputList) => { 
  return inputList.some((inputElement) => { 
    return !inputElement.validity.valid; 
  }) 
}; 

const toggleButtonState = (inputList, buttonElement) => { 
  if (hasInvalidInput(inputList)) { 
  buttonElement.classList.add('popup__submit-button_disabled');
  buttonElement.setAttribute("disabled", true); 
  } else {  
  buttonElement.classList.remove('popup__submit-button_disabled'); 
  buttonElement.removeAttribute("disabled");
  } 
}; 

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, ...newData}) => {  
  const inputList = Array.from(formElement.querySelectorAll(inputSelector)); 
  const buttonElement = formElement.querySelector(submitButtonSelector); 
  toggleButtonState(inputList, buttonElement, newData); 
  inputList.forEach((inputElement) => { 
    inputElement.addEventListener('input', () => { 
      isValid(formElement, inputElement, newData); 
      toggleButtonState(inputList, buttonElement, newData); 
    });
  }); 
}; 

const enableValidation = ({formSelector, ...data}) => { 
  const formList = Array.from(document.querySelectorAll(formSelector)); 
  formList.forEach((formElement) => { 
    formElement.addEventListener('submit', (evt) => { 
      evt.preventDefault(); 
    }); 
    setEventListeners(formElement, data); 
  }); 
}; 

enableValidation({
  formSelector: '.popup__forms',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input_name-error_active',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled'
});