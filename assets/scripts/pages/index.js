    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json


        const photographers =  [  //fetch
        fetch('data/photographers.json')
        .then(response => response.json())
        .then(data =>  {
            // console.log(data.photographers)
            for(let p = 0; p < data.photographers.length ; p++){
                // console.log(data.photographers[p]);
                return await data.photographers[p]
            }
        })]
        return  ({
            photographers: [...photographers]})

        // et bien retourner le tableau photographers seulement une fois
    }
// console.log(photographers);

    

async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    