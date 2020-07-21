export class FormValidator {
  constructor (settings, form) {
    this._inputSelector = settings.inputSelector;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._form = form;
  }

  _showInputError (formElement, inputElement, errorMessage) { 
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);  
    errorElement.textContent = errorMessage; 
  }; 
    
  _hideInputError (formElement, inputElement) { 
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(this._inputErrorClass); 
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';  
  };

  clearAllErrors () {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    inputList.forEach(inputElement => {
      if (inputElement.classList.contains(this._inputErrorClass)) {
      this._hideInputError(this._form, inputElement);
      }
    })
  }
    
  _isValid (formElement, inputElement) {
    if (!inputElement.validity.valid) { 
      this._showInputError(formElement, inputElement, inputElement.validationMessage); 
    } else { 
      this._hideInputError(formElement, inputElement); 
    } 
  }; 
    
  _hasInvalidInput (inputList) { 
    return inputList.some((inputElement) => { 
      return !inputElement.validity.valid; 
    }) 
  }; 
    
  toggleButtonState (inputList, buttonElement) { 
    if (this._hasInvalidInput(inputList)) { 
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.setAttribute("disabled", true); 
    } else {  
    buttonElement.classList.remove(this._inactiveButtonClass); 
    buttonElement.removeAttribute("disabled");
    } 
  };
    
  _setEventListeners (formElement) {  
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector)); 
    const buttonElement = formElement.querySelector(this._submitButtonSelector); 
    this.toggleButtonState(inputList, buttonElement); 
    inputList.forEach((inputElement) => { 
      inputElement.addEventListener('input', () => { 
        this._isValid(formElement, inputElement); 
        this.toggleButtonState(inputList, buttonElement);
      });
    });
  }; 
    
  enableValidation () { 
    this._form.addEventListener('submit', (evt) => { 
      evt.preventDefault(); 
    }); 
    this._setEventListeners(this._form);
  };
}