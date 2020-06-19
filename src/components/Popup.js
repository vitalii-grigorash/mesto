export class Popup {
    constructor (popupElement) {
        this._popupElement = popupElement;
    };

    _handleEscClose (evt) {
        const escKey = (evt.key === "Escape");
        if (escKey) {
            const popupOpened = document.querySelector('.popup_opened');
            popupOpened.classList.remove('popup_opened');
        }
    };
    
    _handleOverlayClose (evt) {
        if ((evt.target).classList.contains('popup_opened')) {
            (evt.target).classList.remove('popup_opened');   
        }
    };

    _setEventListeners () {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => this.close());
        document.addEventListener('keyup', this._handleEscClose);
        this._popupElement.addEventListener('mousedown', this._handleOverlayClose);
    }

    _removeAllListeners () {
        document.removeEventListener('keyup', this._handleEscClose);
        this._popupElement.querySelector('.popup__close-button').removeEventListener('click', () => this.close());
        this._popupElement.removeEventListener('mousedown', this._handleOverlayClose);
    }
    
    open() {
        this._popupElement.classList.add('popup_opened');
        this._setEventListeners();
    };
    
    close() {
        this._popupElement.classList.remove('popup_opened');
        this._removeAllListeners();
    };
}