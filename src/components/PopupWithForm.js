import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupElement, handleFormSubmit, formSelector) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._formSelector = formSelector;
    }
    
    _getInputValues() {
        this._inputList = this._formSelector.querySelectorAll('.popup__input');
      
        this._formValues = {};
      
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
      
        return this._formValues;
    }

    _setEventListeners () {
        super._setEventListeners();
        this._formSelector.addEventListener('submit', () => this._handleFormSubmit(this._getInputValues));
    }
}