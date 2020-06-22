import { popupPhoto, popupDescription } from '../utils/constants.js';
import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    open(name, link) {
        super.open();
        popupPhoto.src = link;
        popupPhoto.alt = name;
        popupDescription.textContent = name;
        this._setEventListeners();
    };
}