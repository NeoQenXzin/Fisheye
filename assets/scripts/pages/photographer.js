//Mettre le code JavaScript lié à la page photographer.html

(async function(){
    // On devra récupérer l'id dans notre url
    const photographeId = getPhotographeId()
    console.log(photographeId);
    // Puis on devra fetch notre photographe, on l'avait appeler getphotographe dans l'index on utilisera le même nom
    // on lui donnera directement l'photographeId
    const photographe = await getPhotographe(photographeId)
    console.log(photographe);
    // Ensuite on display (affiche) l'photographe mais ici on ne le crée pas comme dans index, on l'hydrate (changer son contenu)
    // On nommera donc la fonction hydratephotographe et on lui passera les info sur l'photographe
    displayPhotographe(photographe)

})()

// je récupère l'id de mon Url
function getPhotographeId(){
    return new URL(location.href).searchParams.get("id")
}

function getPhotographe(photographeId){
    
    return fetch(`data/photographers.json`)
    .then(response => response.json())
    // then me retourne une reponse json que j'appel photographers
    .then(photographers => {
        //.photographers me permet d'acceder a la partie photographers de mon fichier json
       const result = photographers.photographers.find(el =>{
            if(el.id == photographeId){
                return el
            }
        })
        console.log(result);
        return result
    })
    .catch(function (error) {
        alert(error)
    })
}

function displayPhotographe(photographe) {

    // créer une fonction template dans le photographerFactory pour remplacer le template générer par getUserCardDom
    const photographeHeader = document.querySelector(".photograph-header")
    const Template = new PhotographerFactory()
                const photographerModel = Template.photographerFactory(photographe);
                const userCardDOM = photographerModel.getProfilUserDOM();         
                photographeHeader.appendChild(userCardDOM);
}