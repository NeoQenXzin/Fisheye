class Profil {
    constructor() {
        this.photographersApi = new PhotographerApi('data/photographers.json')
        this.photographeId = new URL(location.href).searchParams.get("id")
    }

    async getProfil() {

        // const photographeId =  new URL(location.href).searchParams.get("id")
        // Je récupère l'id dans l'url
        // console.log(this.photographeId);

        // Je récupère mes datas de mon fichier photographers.json
        const photographeData = await this.photographersApi.getPhotographers()
        // J'instancie mes objets
        const photographe = photographeData.find(el => {
            if (el.id == this.photographeId) {
                return el
            }
        })

        // Ma const ou je vais ecrire le html en js
        // const photographeHeader = document.querySelector(".photograph-header")
        // J'appel mon template qui se trouve dans PhotographerFactory et je lui passe photographe comme data
        const Template = new PhotographerFactory()
        const photographerModel = Template.photographerFactory(photographe);
        photographerModel.getProfilUserDOM();
        // const userCardDOM = photographerModel.getProfilUserDOM();         
        // photographeHeader.appendChild(userCardDOM);
    }

    async getMedia() {

        //Je récupère mes medias .json 
        const mediaData = await this.photographersApi.getMedias()
        // console.log(mediaData);

        // J'instancie mes objets
        // Je récupère toute les média de mon photographe
        const medias = []
        mediaData.find(els => {
            if (els.photographerId == this.photographeId) {
                // console.log(els)
                medias.push(els)
            }

        })

        // J'appel mon template avec une boucle pour construire chaque carte photo
        for (let i = 0; i < medias.length; i++) {
            // console.log(medias[i]);
            const Template = new MediaFactory()
            const gallerieMedia = Template.mediaFactory(medias[i])
            gallerieMedia.getMediaUserDOM()
        }

        // Comment utiliser ça ???
        // const media = await mediaData.map(medias1 => new MediaFactory(medias, 'mediaApi'))
    }

}
// Je lance la fonction de ma class
const run = new Profil()
run.getProfil()
run.getMedia()