// incrémente tout les likes ajoutés a chaque photo par l'utilisateur
// eslint-disable-next-line prefer-const
let likeUtilisateur = 0

function totalLike () {
  const likes = document.querySelectorAll('.like-card')
  let total = 0

  likes.forEach(element => {
    const nombreLike = Number(element.innerText)
    total += nombreLike
  })
  return total
}

// eslint-disable-next-line no-unused-vars
function likePlus () {
  const likerLikeVide = document.querySelectorAll('.like-vide')
  const likerLikePlein = document.querySelectorAll('.like-plein')

  for (let i = 0; i < likerLikeVide.length; i++) {
    likerLikeVide[i].addEventListener('click', function (e) {
      // eslint-disable-next-line prefer-const
      let buttonClicked = e.target.parentElement.parentElement.children[0]
      let nbreLike = Number(buttonClicked.innerText)
      // eslint-disable-next-line prefer-const
      let newValue = nbreLike + 1
      buttonClicked.innerHTML = nbreLike + 1

      // eslint-disable-next-line no-cond-assign
      if (nbreLike = newValue) {
        likerLikeVide[i].style.display = 'none'
        likerLikePlein[i].style.display = 'inline'
        // eslint-disable-next-line no-unused-expressions
        likeUtilisateur + 1
        displayTotalLike()
      }
    })
  }
}

// eslint-disable-next-line no-unused-vars
function likeMoins () {
  const likerLikeVide = document.querySelectorAll('.like-vide')
  const likerLikePlein = document.querySelectorAll('.like-plein')

  for (let i = 0; i < likerLikePlein.length; i++) {
    likerLikePlein[i].addEventListener('click', function (e) {
      // eslint-disable-next-line prefer-const
      let buttonClicked = e.target.parentElement.parentElement.children[0]
      let nbreLike = Number(buttonClicked.innerText)
      // eslint-disable-next-line prefer-const
      let newValue = nbreLike - 1
      buttonClicked.innerHTML = nbreLike - 1

      // eslint-disable-next-line no-cond-assign
      if (nbreLike = newValue) {
        likerLikeVide[i].style.display = 'inline'
        likerLikePlein[i].style.display = 'none'
        // eslint-disable-next-line no-unused-expressions
        likeUtilisateur - 1
        displayTotalLike()
      }
    })
  }
}

function displayTotalLike () {
  // eslint-disable-next-line prefer-const
  let total = totalLike()
  const totalDisplay = document.querySelector('.total-like')
  totalDisplay.innerHTML = ` ${total + likeUtilisateur} <i class="fas fa-heart"></i> `
}
