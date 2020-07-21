export class Popup {
    constructor (popupElement) {
        this._popupElement = popupElement;
        this._setEventListeners();
    };

    _handleEscClose = (evt) => {
        const escKeyCode = (evt.key === 'Escape');
        if (escKeyCode) {
            this.close();
        }
    }

    _handleOverlayClose = (evt) => { 
        if ((evt.target).classList.contains('popup_opened')) { 
            this.close();  
        } 
    } 

    _handleCloseButton = (evt) => { 
        if ((evt.target).classList.contains('popup__close-button')) {
            this.close(); 
        }
    } 

    _setEventListeners () {
        this._popupElement.addEventListener('mousedown', this._handleOverlayClose);
        this._popupElement.addEventListener('click', this._handleCloseButton);
    }

    open () {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
    };

    close () {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
    };
}