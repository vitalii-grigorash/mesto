import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor (popupElement, photo, description) {
        super(popupElement);
        this._popupPhoto = photo;
        this._popupDescription = description;
    }

    open(name, link) {
        super.open();
        this._popupPhoto.src = link;
        this._popupPhoto.alt = name;
        this._popupDescription.textContent = name;
    };
}