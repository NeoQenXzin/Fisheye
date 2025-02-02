/* eslint-disable no-undef */
class App {
  constructor () {
    // api local
    // this.photographersApi = new PhotographerApi('/data/photographers.json')
    // api github
    this.photographersApi = new PhotographerApi('https://neoqenxzin.github.io/Fisheye/data/photographers.json')
  }

  async getPhotographer () {
    // Je récupère mes datas de mon fichier photographers.json
    const photographersData = await this.photographersApi.getPhotographers()

    // J'instancie mes objets
    const Photographers = await photographersData.map(photographers => new PhotographerFactory(photographers, 'photoApi'))

    // Ma const ou je vais ecrire le html en js
    const photographersSection = document.querySelector('.photographer-section')

    Photographers.forEach(photographe => {
      // console.log(photographe.id);
      const Template = new PhotographerFactory()
      const photographerModel = Template.photographerFactory(photographe)
      const userCardDOM = photographerModel.getUserCardDOM()
      photographersSection.appendChild(userCardDOM)
    })
  }
}
const app = new App()
app.getPhotographer()
