export class UserInfo {
    constructor (nameInput, jobInput, profileName, profileJob) {
        this._inputName = nameInput;
        this._inputJob = jobInput;
        this._elementName = profileName;
        this._elementJob = profileJob;
    }

    getUserInfo () {
        return {
            name: this._elementName.textContent,
            job: this._elementJob.textContent
        }
        
    }

    setUserInfo () {
        this._elementName.textContent = this._inputName.value;
        this._elementJob.textContent =  this._inputJob.value;
    }
}