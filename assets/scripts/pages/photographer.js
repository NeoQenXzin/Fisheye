class Profil {
    constructor() {
        this.photographersApi = new PhotographerApi('data/photographers.json')
        // Je récupère l'id dans l'url
        // const photographeId =  new URL(location.href).searchParams.get("id")
        this.photographeId = new URL(location.href).searchParams.get("id")
    }

    async getProfil() {

        // Je récupère mes datas de mon fichier photographers.json
        const photographeData = await this.photographersApi.getPhotographers()
        // J'instancie mes objets
        const photographe = photographeData.find(e => {
            if (e.id == this.photographeId) {
                return e
            }
        })
        // J'appel mon template qui se trouve dans PhotographerFactory et je lui passe photographe comme data
        const Template = new PhotographerFactory()
        const photographerModel = Template.photographerFactory(photographe);
        photographerModel.getProfilUserDOM();
    }

    //getAllMedia
    async getAllMediaPhotographer(){
        //Je récupère mes medias .json 
        const mediaData = await this.photographersApi.getMedias()
          // Je récupère toute les média de mon photographe dans medias
          const medias = []
          mediaData.find(e => {
              if (e.photographerId == this.photographeId) {
                  medias.push(e)
              }
            })
            return medias
    }

// Afficher mes medias
    async displayMedias(medias) {  
        const Template = new MediaFactory()
        // J'appel mon template avec une boucle pour construire chaque carte photo
        for (let i = 0; i < medias.length; i++) {
            // console.log(medias[i]);
            const gallerieMedia = Template.mediaFactory(medias[i])
            gallerieMedia.getMediaUserDOM()
        }
    }



    
    // Recuperer data d'un media 
    async createMediaDOM(){

        // Je récupère toutes les photos correspondantes au photographe
        const Template = new MediaFactory()
        let  medias = await this.getAllMediaPhotographer()

        // Je selectionne toutes mes photos
        const photos = document.querySelectorAll('.img-gallery')
        // Je parcours chacune d'elle 
        photos.forEach(e=> {
            e.addEventListener('click', (e) => {
                // Je recupère le nom de la photo sur laquelle je clic 
                let dataAttribute = e.target.getAttribute("name")
                
                // Je crée une variable pour récupérer la photo de mes médias ayant le même nom que celle sur laquelle je clic
                let photoMedia = []
                let videoMedia = []
                
                // Je boucle sur mes médias
                 for (let i = 0; i < medias.length; i++) {
                     // je compare le nom de la photo surlaquelle je clic avec mes images de mes médias 
                     if( dataAttribute == medias[i].image){

                         // Je recupere celle qui correspond dans ma variable créer plus haut
                         photoMedia.push(medias[i])
                         let gallerieMedia = Template.mediaFactory(photoMedia[0])
                         gallerieMedia.getLightboxPhotoDOM()
                        }
                        else if( dataAttribute == medias[i].video){
                            videoMedia.push(medias[i])
                            let gallerieMedia = Template.mediaFactory(videoMedia[0])
                            gallerieMedia.getLightboxVideoDOM()
                        } 
                    }
                    //Ouverture lightbox
                    displayLightbox()
                })
                
            });

            
        }
}
// Je lance la fonction de ma class
async function main(){
    
    const run = new Profil()
    run.getProfil()
    const allMedias = await run.getAllMediaPhotographer()
    run.displayMedias(allMedias)
    run.createMediaDOM()
    // const closeLightboxBtn = document.querySelector(".cross") 
    // incrémente tout les likes ajoutés a chaque photo par l'utilisateur
    // let likeUtilisateur = 0
    select(allMedias, run)
    likePlus()
    likeMoins()
    displayTotalLike()  
}



main()


