export class UserInfo {
    constructor ({profileName, profileJob}, profileAvatar) {
        this._elementName = profileName;
        this._elementJob = profileJob;
        this._elementAvatar = profileAvatar;
    }

    getUserInfo () {

        this._formValues = {
            name: this._elementName.textContent,
            job: this._elementJob.textContent,
            avatar: this._elementAvatar.src,
        };

        return this._formValues;
    }

    setUserInfo (formData) {
        if (formData.name) {
            this._elementName.textContent = formData.name;
        }
        if (formData.job) {
            this._elementJob.textContent = formData.job;
        }
        if (formData.link) {
            this._elementAvatar.src = formData.link;
        }
    }
}