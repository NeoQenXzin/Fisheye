// Ouverture et fermeture de la lightbox

function displayLightbox() {
    const lightboxModal = document.getElementById("lightbox-modal")
    lightboxModal.style.display = "block"
    // Diminuer l'opacité tarif photographe
    let priceDiv = document.querySelector(".price")
    priceDiv.style.opacity = .0
    
    // j'affiche mon template
//     document.querySelector('.img-gallery').addEventListener('click', (e) => {
//         console.log(e.target) 
// })
}

function closeLightbox() {
    const lightboxModal = document.getElementById("lightbox-modal")
    lightboxModal.style.display = "none"
    // remettre l'opacité du tarif photographe
        const priceDiv = document.querySelector(".price")
        priceDiv.style.opacity = 1
 
}

function nextPhoto() {
    console.log("chevron droit");
}

function previousPhoto() {
    console.log("chevron gauche");
}