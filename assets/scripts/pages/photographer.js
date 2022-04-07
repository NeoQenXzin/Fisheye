class Profil {
    constructor(){
        this.photographersApi = new PhotographerApi('data/photographers.json')
    }

    async getProfil(){

        // Je récupère l'id dans l'url
        const photographeId =  new URL(location.href).searchParams.get("id")
        console.log(photographeId);

         // Je récupère mes datas de mon fichier photographers.json
         const photographeData = await this.photographersApi.getPhotographers()
         // J'instancie mes objets
         const photographe = photographeData.find(el =>{
            if(el.id == photographeId){
                return el
            }
        })

        // Ma const ou je vais ecrire le html en js
        const photographeHeader = document.querySelector(".photograph-header")
        // J'appel mon template qui se trouve dans PhotographerFactory et je lui passe photographe comme data
        const Template = new PhotographerFactory()
            const photographerModel = Template.photographerFactory(photographe);
            const userCardDOM = photographerModel.getProfilUserDOM();         
            photographeHeader.appendChild(userCardDOM);
    }
//Coder async getMedia

    }
// Je lance la fonction de ma class
const run = new Profil()
run.getProfil()
// run.getMedia()

