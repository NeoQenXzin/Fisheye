    class App {
        // Pourquoi utilisé une class pour se connecter a l'api?
        constructor() {
            this.photographersApi = new PhotographerApi('/data/photographers.json')
        }

        // Pourquoi le mot clé function provoque une erreur?
        async getPhotographer() {
            // Je me connecte a mes fonctions get grace au fichier api.js . Y a t-il d'autre moyen de faire des getter?
            // Je récupère mes datas de mon fichier photographers.json
            const photographersData = await this.photographersApi.getPhotographers()
            // console.log(photographersData);
            // J'instancie mes objets
            const Photographers = await photographersData.map(photographers => new PhotographerFactory(photographers, 'photoApi'))
            // console.log(Photographers);

            // Ma const ou je vais ecrire le html en js
            const photographersSection = document.querySelector(".photographer_section")

            Photographers.forEach(photographe => {
                // console.log(photographe);

                const Template = new PhotographerFactory(photographe)
                Template.photographerFactory(photographe)
                // console.log(Template.photographerFactory(photographe));

                const photographerModel = Template.photographerFactory(photographe);
                const userCardDOM = photographerModel.getUserCardDOM();
                photographersSection.appendChild(userCardDOM);
            })
            
            // console.log({
            //     Photographers: [...Photographers]
            // })
            // return ({
            //     Photographers: [...Photographers]
            // })

        }

        async displayData(Photographers) {
            const photographersSection = document.querySelector(".photographer_section")

            Photographers.forEach((photographer) => {
                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                photographersSection.appendChild(userCardDOM);
            })
            console.log(displayData());
        }

        async init() {
            // Récupère les datas des photographes
            const {
                Photographers
            } = await getPhotographer()
            displayData(Photographers)
        }



    }


    const app = new App()
    app.getPhotographer()


    // console.log(photographers);