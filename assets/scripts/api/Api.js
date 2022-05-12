/* eslint-disable no-useless-constructor */
class Api {
  /**
     *
     * @param {string} url
     */
  constructor (url) {
    this._url = url
  }

  async get () {
    return fetch(this._url)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log('erreur fetch', err))
  }
}

// eslint-disable-next-line no-unused-vars
class PhotographerApi extends Api {
  /**
     *
     * @param {string} url
     */
  constructor (url) {
    super(url)
  }

  async getPhotographers () {
    const data = await this.get()
    // on crée une variable car sinon il prend le await en compte sur le return
    return data.photographers
  }

  async getMedias () {
    const data = await this.get()
    return data.media
  }
}
