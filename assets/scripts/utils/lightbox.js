// Variable déclarée dans contactForm
// let mainId = document.getElementById("main")
// let body = document.querySelector("body")

// Ouvrir lightbox
function  displayLightbox() {
    navigationLightbox()
    const lightboxModal = document.getElementById("lightbox-modal")
    const closeLightboxBtn = document.querySelector(".cross")   
  
    lightboxModal.style.display = "block"
    // Diminuer l'opacité tarif photographe
    let priceDiv = document.querySelector(".price")
    priceDiv.style.opacity = .0

    // Accessibilité
    mainId.setAttribute('aria-hidden', 'true')
    body.classList.add('no-scroll')
    lightboxModal.setAttribute('aria-hidden', 'false')
    closeLightboxBtn.focus()
    
}

// Fermer lightbox
    function closeLightbox() {
        const lightboxModal = document.getElementById("lightbox-modal")
        
        lightboxModal.style.display = "none"
        // remettre l'opacité du tarif photographe
        const priceDiv = document.querySelector(".price")
        priceDiv.style.opacity = 1
        
        // Accessibilité
        mainId.setAttribute('aria-hidden', 'false')
        body.classList.remove('no-scroll')
        lightboxModal.setAttribute('aria-hidden', 'true')
}

// Passer à la slide suivante
function nextSlide(){
    // Je selectionne tous mes medias
    const medias = document.querySelectorAll('.img-gallery')
    let imageActuelle = document.querySelector('.img-lightbox')
    // Je demarre de l'index 0 , il faudra le remplacer par l'image surlaquel on a cliqué
    let index = 0;
        // Pour chaque media
    for(let media of medias) {
    // medias.forEach(() => {
        // si l'attribut src = attribut de l'image de la lightbox
        if(media.src == imageActuelle.src && index < medias.length - 1){
            index++
           return displayMediaLightbox(index)
        }
        else if(media.src == imageActuelle.src && index == medias.length - 1){
           return boucleFinMediaLightBox(index)
        }
        index ++
        };
}

// Retourner à la slide précédente
function previousSlide(){
    // Je selectionne toutes mes médias
    const medias = document.querySelectorAll('.img-gallery')
    let imageActuelle = document.querySelector('.img-lightbox')
    let index = 0;

    // Je demarre de l'index 0 , il faudra le remplacer par l'image surlaquel on a cliqué
        for(let media of medias){
    // Pas très propre car remplacer par second if, image actuelle a corriger/ Boucle foreach peut etre pas idéal       
            if(imageActuelle.src !== media && index == 0){
               boucleDebutMediaLightBox(index)
               
           }
           else if(media.src == imageActuelle.src && index > - 1){
                index--
                displayMediaLightbox(index)
            }
            index++
        };
        
    }
   
    // Afficher slide
    function displayMediaLightbox(index){

        const medias = document.querySelectorAll('.img-gallery')
        const sliderImage = document.querySelector(".image-contain")
        const titreCard = document.querySelectorAll('.title-card')

        // console.log(titreCard);
        medias[index].src.slice(-('mp4').length).match('mp4') ?
        sliderImage.innerHTML =  `
        <video controls src="${medias[index].src}" class="img-lightbox">Video</video>
        <span tabindex="1">${titreCard[index].innerText}</span>            ` :
        sliderImage.innerHTML =  `
        <img src="${medias[index].src}"  alt="image du photographe " class="img-lightbox" data="${medias[index].data}"></img>
        <span tabindex="1">${titreCard[index].innerText}</span> 
        ` 
    }

    // Retourner à la première slide
    function boucleFinMediaLightBox(index){

        const medias = document.querySelectorAll('.img-gallery')
        const sliderImage = document.querySelector(".image-contain")
        const titreCard = document.querySelectorAll('.title-card')

        medias[0].src.slice(-('mp4').length).match('mp4') ?
        sliderImage.innerHTML =  `
        <video controls src="${medias[0].src}" class="img-lightbox">Video</video>
        <span>${titreCard[0].innerText}</span>            ` :
        sliderImage.innerHTML =  `
        <img src="${medias[0].src}"  alt="image du photographe " class="img-lightbox" data="${medias[index].data}"></img>
        <span tabindex="1">${titreCard[0].innerText}</span> 
        ` 
    }


    // Passer a la dernière slide
    function boucleDebutMediaLightBox(index){

        const medias = document.querySelectorAll('.img-gallery')
        const sliderImage = document.querySelector(".image-contain")
        const titreCard = document.querySelectorAll('.title-card')
       

        medias[medias.length-1].src.slice(-('mp4').length).match('mp4') ?
        sliderImage.innerHTML =  `
        <video controls src="${medias[medias.length-1].src}" class="img-lightbox">Video</video>
        <span>${titreCard[medias.length-1].innerText}</span>            ` :
        sliderImage.innerHTML =  `
        <img src="${medias[medias.length-1].src}"  alt="image du photographe " class="img-lightbox" data="${medias[index].data}"></img>
        <span tabindex="1">${titreCard[medias.length-1].innerText}</span> 
        ` 
    }

    //Fermer avec esc lightbox
    document.addEventListener('keydown', e => {
        // let mediaCard = document.querySelectorAll(".photo-card")
        if( e.key == "Escape") { 
            console.log('yes')
            closeLightbox()
        }
        if( e.key =="Enter"){
            console.log("enter");
            e.target.click()
        }
    })

    //Navigation avec les flêches
    function navigationLightbox(){

        // const lightboxModal = document.getElementById("lightbox-modal")
        // lightboxModal.style.display = "block"
        // if(lightboxModal.style.display === "block"){
            document.addEventListener('keydown', e => {
                if( e.key == "ArrowRight") { 
                console.log('apres')
                nextSlide()
            }
            if( e.key == "ArrowLeft") { 
                console.log('avant')
                previousSlide()
            }
        })
    // }
    }