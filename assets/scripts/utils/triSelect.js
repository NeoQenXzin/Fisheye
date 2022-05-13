// flêche select box
// let newOrderFilter = Array.from(filterItemsElement)
// const boxArrow = document.querySelector('.box-arrow')
const buttonSelect = document.querySelector('#buttonFilter')
const filterSelectedElement = document.querySelector('.gallerie-media-filters-menu--selected')
const filterListElement = document.querySelector('.gallerie-media-filters-menu--list')
const filterItemsElement = document.querySelectorAll('.gallerie-media-filters-menu--list > li')

filterListElement.classList.add('display-none')

// Fermer liste filtre
function filterListClose () {
  const boxArrow = document.querySelector('.box-arrow')
  buttonSelect.style.borderRadius = '5px'

  boxArrow.style.transform = 'rotate(0deg) translateY(0)'
  filterSelectedElement.classList.add('display-none')
  filterListElement.classList.add('display-none')
  filterSelectedElement.removeAttribute('aria-expanded',
    filterSelectedElement.getAttribute('aria-expanded') === 'true')
}

// Si clic hors de la selectbox
const arrowToggle = (() => {
  let open = false
  return function ({ target: el }) {
    if (el === buttonSelect) open = !open
    else open = false
    const boxArrow = document.querySelector('.box-arrow')

    if (open) {
      boxArrow.style.transform = 'rotate(-180deg) translateY(25%) translateX(-50%)'
      filterSelectedElement.classList.remove('display-none')
      filterListElement.classList.remove('display-none')
      filterSelectedElement.setAttribute(
        'aria-expanded',
        filterSelectedElement.getAttribute('aria-expanded') === 'false')
    } else {
      filterListClose()
    }
  }
})()
document.addEventListener('click', arrowToggle)

// Configuration Accessibilité filtre
buttonSelect.addEventListener('click', () => {
  buttonSelect.style.borderRadius = '5px 5px 0px 0px'
  filterItemsElement.forEach(element => {
    element.addEventListener('click', (e) => {
      // eslint-disable-next-line no-unused-expressions
      selectFiltre
    })
    element.addEventListener('focus', (e) => {
      filterListElement.setAttribute('aria-activedescendant', e.target.id)
    })
  })
  document.addEventListener('keydown', (e) => {
    if (filterSelectedElement.getAttribute('aria-expanded') === 'true') {
      if (e.key === 'Enter') {
        e.target.click()
      }
      // ligne 141 fichier lightbox.js  if( e.key == "Escape") {filterListClose()}
    }
  })
})

// Savoir si un filtre a la classe valeur caché
function cacheFiltre (target) {
  for (const element of filterItemsElement) {
    if (element.classList.contains('valeur-cache')) {
      element.classList.remove('valeur-cache')
    }
  }
  target.classList.add('valeur-cache')
}

// Trier les médias en fonction du filtre utilisé
async function selectFiltre (allMedias, run) {
  filterItemsElement.forEach(element => {
    element.addEventListener('click', function () {
      if (element.id === 'filter-title') {
        const triParTitre = allMedias.sort((a, b) => {
          return a.title > b.title ? 1 : -1
        })
        displaySelect(triParTitre, run)
      } else if (element.id === 'filter-popular') {
        const triParPopularite = allMedias.sort((a, b) => {
          return a.likes > b.likes ? 1 : -1
        })
        displaySelect(triParPopularite, run)
      } else if (element.id === 'filter-date') {
        const triParDate = allMedias.sort((a, b) => {
          return a.date > b.date ? 1 : -1
        })
        displaySelect(triParDate, run)
      }
      buttonSelect.innerHTML = `${element.innerText}<span class="box-arrow"><i class="fas fa-chevron-down" aria-hidden="false"></i></span>`
      cacheFiltre(element)
    })
  })
}

// Générer nouvel affichage des medias
function displaySelect (type, run) {
  const gallery = document.querySelector('.gallery')
  gallery.innerHTML = ''
  run.displayMedias(type)
  run.createMediaDOM()
  // eslint-disable-next-line no-undef
  likePlus()
  // eslint-disable-next-line no-undef
  likeMoins()
  // eslint-disable-next-line no-undef
  displayTotalLike()
}
