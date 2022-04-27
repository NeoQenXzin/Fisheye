let mainId = document.getElementById("main")
let contactModalId = document.getElementById("contact_modal")
let body = document.querySelector("body")
let closeModalBtn = document.getElementById("close-modal-btn")


// Ouverture et fermeture de la modale 

function displayModal() {
    const modal = document.getElementById("contact_modal");
    mainId.setAttribute('aria-hidden', 'true')
    contactModalId.setAttribute('aria-hidden', 'false')
    body.classList.add('no-scroll')

    modal.style.display = "block";
    // Diminuer l'opacité tarif photographe
    let priceDiv = document.querySelector(".price")
    priceDiv.style.opacity = .5

    closeModalBtn.focus()
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    mainId.setAttribute('aria-hidden', 'false')
    contactModalId.setAttribute('aria-hidden', 'true')
    body.classList.remove('no-scroll')
    modal.style.display = "none";
    // remettre l'opacité du tarif photographe
        const priceDiv = document.querySelector(".price")
        priceDiv.style.opacity = 1

 
}


// Traitement du formulaire
const form = document.getElementById('form')
const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const email = document.getElementById('email')
const message = document.getElementById('message')

form.addEventListener('submit', (e) => {
    returnValue()
    e.preventDefault()
})

// recupérer la valeur des champs du formulaire 
function returnValue(){
    console.log(prenom.value, nom.value, email.value, message.value);
}


// Fermet modal avec esc

document.addEventListener('keydown', e => {
    // const keyCode = e.keyCode ? e.keyCode : e.which
    if( e.keyCode === 27) { 
        console.log('yes')
        closeModal()
    }
})