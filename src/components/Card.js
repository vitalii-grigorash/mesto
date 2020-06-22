export class Card {
    constructor (data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    };
       
    _getTemplate () {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.elements__element')
        .cloneNode(true);
        
        return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__trash-button').addEventListener('click', () => {
            this._trash();
        });

        this._element.querySelector('.elements__like-button').addEventListener('click', () => {
            this._handleLike();
        });

        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this._handleCardClick.open(this._name, this._link);
        });
    }

    _handleLike() {
        this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
    }

    _trash () {
        this._element.remove();
        this._element = null;
    }

    generateCard () {
        this._element = this._getTemplate();
        this._setEventListeners();
      
        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__image').alt = this._name;
        this._element.querySelector('.elements__place').textContent = this._name;
    
        return this._element;
    }
}