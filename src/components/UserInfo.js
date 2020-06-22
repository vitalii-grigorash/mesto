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

    setUserInfo (name, job) {
        this._elementName.textContent = name.value;
        this._elementJob.textContent = job.value;
    }
}