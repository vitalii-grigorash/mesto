import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupElement, formSubmitHandler, formElement) {
        super(popupElement);
        this._formSubmitHandler = formSubmitHandler;
        this._formElement = formElement;
    }

    _getInputValues () {
        this._formElement.querySelectorAll('.popup__input');
    }

    _setEventListeners () {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => this.close());
        document.addEventListener('keyup', this._handleEscClose);
        document.addEventListener('mousedown', this._handleOverlayClose);
        this._formElement.addEventListener('submit', this._formSubmitHandler);
    }
}