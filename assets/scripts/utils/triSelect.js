// flêche select box
// let newOrderFilter = Array.from(filterItemsElement)
const boxArrow = document.querySelector(".box-arrow");
let buttonSelect = document.querySelector("#buttonFilter");
const filterSelectedElement = document.querySelector('.gallerie-media-filters-menu--selected')
const filterListElement = document.querySelector('.gallerie-media-filters-menu--list')
const filterItemsElement = document.querySelectorAll('.gallerie-media-filters-menu--list > li')

filterListElement.classList.add('display-none')


//flêche hors de la selectbox
const arrowToggle = (() => {
  let open = false;
  return function ({ target: el }) {
    if (el === buttonSelect) open = !open;
    else open = false;
    console.log({ open });
    if (open) {
        boxArrow.style.transform = "rotate(-180deg) translateY(25%)";
        filterSelectedElement.classList.remove('display-none')
        filterListElement.classList.remove('display-none')
        filterSelectedElement.setAttribute(
        'aria-expanded',
    // Get opposite value (true === false => false || false === false => true)
    filterSelectedElement.getAttribute('aria-expanded') === 'false'
    )
      } else {
        boxArrow.style.transform = "rotate(0deg) translateY(0)";
        filterSelectedElement.classList.add('display-none')
        filterListElement.classList.add('display-none')
        filterSelectedElement.removeAttribute(
        'aria-expanded',
    // Get opposite value (true === false => false || false === false => true)
    filterSelectedElement.getAttribute('aria-expanded') === 'true'
    )
        
    }
  };
})();
document.addEventListener("click", arrowToggle);

// Configuration Accessibilité filtre
buttonSelect.addEventListener('click', ()=>{
  filterItemsElement.forEach(element => {
    element.addEventListener('click', (e) => {
      selectFiltre
    })       
    element.addEventListener('focus', (e) => {
    filterListElement.setAttribute('aria-activedescendant', e.target.id)
  })
})

document.addEventListener('keydown', (e) => {
  // If already display and press escape just close
  if (filterSelectedElement.getAttribute('aria-expanded') === 'true') {
    if (e.code === 'Escape') {
      
    }
    
  }
})
})


//Savoir si un filtre a la classe valeur caché
function cacheFiltre(target){

  for(element of filterItemsElement){
    console.log(element); 
    console.log(target); 
    if(element.classList.contains("valeur-cache")){
      element.classList.remove("valeur-cache")
    }
  }
  target.classList.add("valeur-cache")
}


// Trier les médias en fonction du filtre utilisé
async function selectFiltre(allMedias, run){
  filterItemsElement.forEach(element => {
    element.addEventListener('click', function() {
      if(element.id === 'filter-title'){
        let triParTitre = allMedias.sort((a,b) => {
                return a.title > b.title ? 1 : -1
            })
            displaySelect(triParTitre, run)
          }
          else if(element.id === 'filter-popular'){
            let triParPopularite = allMedias.sort((a,b) => {
              return a.likes > b.likes ? 1 : -1
            })
            displaySelect(triParPopularite, run)
          }
          else if(element.id === 'filter-date'){
            let triParDate =  allMedias.sort((a,b) => {
              return a.date > b.date ? 1 : -1
            })
            displaySelect(triParDate, run)
          }   
          
          cacheFiltre(element)
          buttonSelect.innerHTML = `${element.innerText}<span class="box-arrow"><i class="fas fa-chevron-down" aria-hidden="true"></i></span>`
        })
      })
}


// Générer nouvel affichage des medias
function displaySelect(type, run){
    const gallery = document.querySelector(".gallery")
    gallery.innerHTML =""
    run.displayMedias(type)
    run.createMediaDOM()
    likePlus()
    likeMoins()
    displayTotalLike()
}

  
