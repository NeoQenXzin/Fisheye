// incrémente tout les likes ajoutés a chaque photo par l'utilisateur
let likeUtilisateur = 0

function totalLike() {
    const likes = document.querySelectorAll(".like-card")
    let total = 0

    likes.forEach(element => {

        let nombreLike = Number(element.innerText)
        total += nombreLike
    });
    return total
}

function likePlus() {
    let likerLikeVide = document.querySelectorAll(".like-vide")
    let likerLikePlein = document.querySelectorAll(".like-plein")
  
   for (let i = 0; i < likerLikeVide.length; i++){
    likerLikeVide[i].addEventListener("click", function (e) {
        let buttonClicked = e.target.parentElement.parentElement.children[0]
        let nbreLike = Number(buttonClicked.innerText)
        let newValue = nbreLike + 1
        buttonClicked.innerHTML = nbreLike + 1

        if(nbreLike = newValue){
            likerLikeVide[i].style.display ="none"
            likerLikePlein[i].style.display ="inline"
            likeUtilisateur+1
            displayTotalLike()
        }
    })

   }
}

function likeMoins() {
    let likerLikeVide = document.querySelectorAll(".like-vide")
    let likerLikePlein = document.querySelectorAll(".like-plein")
  
   for (let i = 0; i < likerLikePlein.length; i++){
    likerLikePlein[i].addEventListener("click", function (e) {
        let buttonClicked = e.target.parentElement.parentElement.children[0]
        let nbreLike = Number(buttonClicked.innerText)
        let newValue = nbreLike - 1
        buttonClicked.innerHTML = nbreLike - 1

        if(nbreLike = newValue){
            likerLikeVide[i].style.display ="inline"
            likerLikePlein[i].style.display ="none"
            likeUtilisateur-1
            displayTotalLike()
        }
    })

   }
}


function displayTotalLike() {
    total = totalLike()
    const totalDisplay = document.querySelector(".total-like")
    totalDisplay.innerHTML = ` ${total + likeUtilisateur} <i class="fas fa-heart"></i> `
    console.log(likeUtilisateur);
}