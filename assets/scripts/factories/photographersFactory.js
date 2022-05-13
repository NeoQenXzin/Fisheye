/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class PhotographerFactory {
  constructor (data, type) {
    if (type === 'photoApi') {
      return new Photographer(data)
    }
  }

  // Je construit mon template main page index
  photographerFactory (data) {
    const { name, portrait, country, tagline, price } = data

    const picture = `assets/photographers/photo-id/${portrait}`

    function getUserCardDOM () {
      const article = document.createElement('article')
      article.innerHTML =
        // je passe l'id dans le lien url de chaque photographe
                 `
                    <a class="lien-profile" href="photographer.html?id=${data.id}" alt="Liens vers le profil de ${name} par clic sur image ou nom">
                        <div class="article-index">
                        <img src="${picture}" alt="portrait du photographe ${name}"></img>
                        <h2> ${name} </h2>
                        </div>
                    </a>
                    <div class="article-index">
                        <div class="country">${country}</div>
                        <div class="tagline">${tagline}</div>
                        <div class="price-main">${price}€/jour</div>
                    </div>
                `

      return (article)
    }

    // Template Profil photographe page photographer.html
    function getProfilUserDOM () {
      const headerPhotographer = document.querySelector('.photograph-header')
      headerPhotographer.innerHTML +=
                `   <div class="header-infos"> 
                        <div class="name" aria-label="nom du photographe" tabindex= "2" ><h1>${name}</h1></div>
                        
                        <div class="meta-infos-header" tabindex= "3">
                        <p class="country">${country}</p>
                        <p class="tagline">${tagline}</p>
                        </div>
                    </div>
                
                    <div class="header-image">
                        <img src="${picture}" alt="portrait du photographe ${name}"></img>  
                    </div>

                    <div class="price" tabindex="8"><span class="total-like" aria-description="nombre total de j'aime"></span><p aria-description="tarif du photographe">${price}€/jour</p></div>
               `
      // Affichage du nom du photographe dans la modal
      document.querySelector('#name-photograph-modal').innerText += name

      return (headerPhotographer)
    }

    return { name, picture, tagline, price, country, getProfilUserDOM, getUserCardDOM }
  }
}
