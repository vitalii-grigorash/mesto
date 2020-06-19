import { popupPhoto, popupDescription } from '../utils/constants.js';
import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    open(element) {
        this._popupElement.classList.add('popup_opened');
        popupPhoto.src = element.querySelector('.elements__image').src;
        popupPhoto.alt = element.querySelector('.elements__image').textContent;
        popupDescription.textContent = element.querySelector('.elements__place').textContent;
        this._setEventListeners();
    };
}