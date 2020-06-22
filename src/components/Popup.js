export class Popup {
    constructor (popupElement) {
        this._popupElement = popupElement;
    };

    _handleEscClose () {
        document.addEventListener('keyup', (evt) => {
            const escKeyCode = (evt.key === 'Escape');
            if (escKeyCode) {
                this.close();
            }
        }); 
    }

    _handleOverlayClose () {
        this._popupElement.addEventListener('mousedown', (evt) => {
            if ((evt.target).classList.contains('popup_opened')) {
                this.close();  
            }
        });
    }

    _handleCloseButton () {
        const closeButton = this._popupElement.querySelector('.popup__close-button');
        closeButton.addEventListener('click', () => this.close());
    }

    _setEventListeners () {
        this._handleEscClose();
        this._handleOverlayClose();
        this._handleCloseButton();
    }
    
    open () {
        this._popupElement.classList.add('popup_opened');
        this._setEventListeners();
    };
    
    close () {
        this._popupElement.classList.remove('popup_opened');
    };
}