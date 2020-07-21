export class Card {
    constructor (data, api, handleCardClick, cardRemove, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._data = data;
        this._api = api;
        this._handleCardClick = handleCardClick;
        this._cardRemove = cardRemove;
        this._cardSelector = cardSelector;
        this._removeButton = document.querySelector('.popup__submit-button_card-remove');
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
        this._element.querySelector('.elements__like-button').addEventListener('click', () => {
            this._handleLike();
        });

        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this._handleCardClick.open(this._name, this._link);
        });
    }

    _handleLike() {
        const likeButton = this._element.querySelector('.elements__like-button');
        const likeCount = this._element.querySelector('.elements__like-count');
        likeButton.classList.toggle('elements__like-button_active');
        if (likeButton.classList.contains('elements__like-button_active')) {
            this._api.addLike(this._data._id)
            .then (() => {
                likeCount.textContent = (this._data.likes.length + 1);
            })
            .catch((error) => {
                console.error(error);
            });
        } else {
            this._api.removeLike(this._data._id)
            .then (() => {
                likeCount.textContent = (likeCount.textContent - 1);
            })
            .catch((error) => {
                console.error(error);
            });  
        }
    }

    _removeElement = () => {
        this._api.removeCard(this._data._id)
        .then (() => {
            this._element.remove();
            this._element = null;
            this._cardRemove.close();
            this._removeButton.removeEventListener('click', this._removeElement);
        })
        .catch((error) => {
            console.error(error);
        }); 
    }

    _trash () {
        this._cardRemove.open();
        this._removeButton.addEventListener('click', this._removeElement);
    }

    _cardHandleTrash () {
        const trashButton = this._element.querySelector('.elements__trash-button');
        trashButton.classList.add('elements__trash-button_active');
        trashButton.addEventListener('click', () => {
            this._trash();
        });
    }

    generateCard () {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__image').alt = this._name;
        this._element.querySelector('.elements__place').textContent = this._name;
    
        return this._element;    
    }

    defaulCards = () => {
        this.generateCard();
        this._element.querySelector('.elements__like-count').textContent = this._data.likes.length;

        if (this._data.owner._id === "7c29b6a6c5ff776dce938e54") {
            this._cardHandleTrash();
        }
        
        return this._element;
    }

    addUserCard = () => {
        this.generateCard();
        this._element.querySelector('.elements__like-count').textContent = '0';
        this._cardHandleTrash();

        return this._element;
    }
}