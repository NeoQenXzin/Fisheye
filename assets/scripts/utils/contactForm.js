// Ouverture et fermeture de la modale 

function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    // Diminuer l'opacité tarif photographe
    let priceDiv = document.querySelector(".price")
    priceDiv.style.opacity = .5
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
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