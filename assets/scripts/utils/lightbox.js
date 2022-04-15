class Lightbox {
    constructor (){
        // J'ai besoin de media.title media.videoMp4, Picture
        

    }
    
    
    // Ouverture et fermeture de la lightbox
    
    
    // Passer a la photo suivante
    nextPhoto() {
        console.log("chevron droit");
    }
    
// photo précédente
    previousPhoto() {
        console.log("chevron gauche");
}
}

    // Ouvrir lightbox
  function  displayLightbox() {
        const lightboxModal = document.getElementById("lightbox-modal")
        lightboxModal.style.display = "block"
        // Diminuer l'opacité tarif photographe
        let priceDiv = document.querySelector(".price")
        priceDiv.style.opacity = .0
}

// Fermer lightbox
    function closeLightbox() {
        const lightboxModal = document.getElementById("lightbox-modal")
        lightboxModal.style.display = "none"
        // remettre l'opacité du tarif photographe
            const priceDiv = document.querySelector(".price")
            priceDiv.style.opacity = 1
    
}