export class UserInfo {
    constructor ({profileName, profileJob}) {
        this._elementName = profileName;
        this._elementJob = profileJob;
    }

    getUserInfo () {

        this._formValues = {
            name: this._elementName.textContent,
            job: this._elementJob.textContent
        };

        return this._formValues;
    }

    setUserInfo (formData) {
        this._elementName.textContent = formData.name;
        this._elementJob.textContent = formData.job;
    }
}