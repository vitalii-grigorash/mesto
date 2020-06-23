import { Popup } from './Popup.js';

export class PopupWithForm extends Popup { 
    constructor(popupElement, { formSelector, handleFormSubmit }) { 
        super(popupElement); 
        this._formSelector = formSelector;
        this._handleFormSubmit = handleFormSubmit;
    } 
    
    _getInputValues() {
        this._inputList = this._formSelector.querySelectorAll('.popup__input');
      
        this._formValues = {};
      
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
      
        return this._formValues;
    }

    _handleSubmitButton = () => {
        this._handleFormSubmit(this._getInputValues());
        this.close();
    }

    _setEventListeners () {
        super._setEventListeners();
        this._formSelector.addEventListener('submit', this._handleSubmitButton);
    }

    _close () {
        super.close();
        this._formSelector.removeEventListener('submit', this._handleSubmitButton);
    }
}

