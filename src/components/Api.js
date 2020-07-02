export class Api {
    constructor(data) {
        this._baseUrl = data.baseUrl;
        this._authorization = data.headers.authorization;
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._returnErrorResponse)
    }

    _returnErrorResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo () {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._returnErrorResponse)
    }

    userInfo (formData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                about: formData.job
            })
        })
        .then(this._returnErrorResponse)
    }    

    setAvatar (formData) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: formData.link
            })
        })
        .then(this._returnErrorResponse)
    }

    setCard (formData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                link: formData.link,
            })
        })
        .then(this._returnErrorResponse)
    }

    removeCard (cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._returnErrorResponse)
    }

    likeAdd (cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization
            }
        })  
        .then(this._returnErrorResponse) 
    }

    likeRemove (cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._returnErrorResponse)
    }
}