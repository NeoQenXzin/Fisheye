class MediaFactory {
    constructor(data, type) {
        if (type === 'mediaApi') {
            return new Media(data)
        }
    }

    // Je construit mon template main page index
    mediaFactory(data) {
        const {
            title,
            image,
            video,
            likes,
            date,
            price,
            photographerId,
            id
        } = data
        const picture = `assets/photographers/${photographerId}/${image}`
        const videoMp4 = `assets/photographers/${photographerId}/${video}`



        function getMediaUserDOM() {
            const gallery = document.querySelector(".gallery")
            //Template Video 
            if (picture.slice(-('undefined').length).match('undefined')) {
                if (data.video) {
                    gallery.innerHTML +=
                        `
                <div class="photo-card">
                <video controls src="${videoMp4}" class="img-gallery" name="${video}" tabindex="7" alt="video ${video} ouvre video dans lighting-box">video ${title}</video>
                <h2> <span class="title-card">${title}</span>
                <span class="like-card"> 
                <span class="nbre-like">${likes} </span>
                   <span class="liker like-vide">   
                       <i class="far fa-heart" tabindex="7" aria-label="ajouter j'aime" role="bouton"></i>
                   </span>
                   <span class="liker like-plein"> 
                       <i class="fas fa-heart" tabindex="7" aria-label="retirer j'aime" role="bouton"></i>
                   </span>
                   </span>

               </h2>
                </div>
                `
                }
            }
            //Template photo
            else {
                gallery.innerHTML +=
                    `
                <div class="photo-card">
                <img src="${picture}" name="${image}" alt="image du photographe ${image} ouvre photo dans lighting-box" class="img-gallery" tabindex="7"></img>
                <h2> <span class="title-card">${title}</span>
                <span class="like-card"> 
                <span class="nbre-like">${likes} </span>
                   <span class="liker like-vide">   
                       <i class="far fa-heart" tabindex="7" aria-label="ajouter j'aime" role="bouton"></i>
                   </span>
                   <span class="liker like-plein"> 
                       <i class="fas fa-heart" tabindex="7" aria-label="retirer j'aime" role="bouton"></i>
                   </span>
                   </span>

               </h2>
                </div>
                `

            }



        }

        function getLightboxPhotoDOM() {

            // template lightbox

            const lightbox = document.querySelector('.lightbox')
            lightbox.innerHTML =
                `
            <header>
            <img src="assets/icons/close-lightbox.svg" onclick="closeLightbox()"   class="cross"alt="Croix ferme modal" tabindex="1"/>
            <img src="assets/icons/chevron-left.svg" onclick="previousSlide()" class="chevron-left" alt="chevron photo précédente" tabindex="1"/>
            <img src="assets/icons/chevron-right.svg" onclick="nextSlide()" class="chevron-right" alt="Chevron Slide suivante" tabindex="1"/>
            </header>
            <div class="image-contain">
            <img src="${picture}"  alt="image du photographe ${image}" class="img-lightbox" data="${data.title}"></img>
            <span tabindex="1"  title="titre image">${data.title}</span>
            </div>
            `

        }

        function getLightboxVideoDOM() {

            // template lightbox

            const lightbox = document.querySelector('.lightbox')
            lightbox.innerHTML =
                `
            <header>
            <img src="assets/icons/close-lightbox.svg" onclick="closeLightbox()"   class="cross"alt="Croix ferme modal" tabindex="1"/>
            <img src="assets/icons/chevron-left.svg" onclick="previousSlide()" class="chevron-left" alt="chevron Slide précédente" tabindex="1"/>
            <img src="assets/icons/chevron-right.svg" onclick="nextSlide()" class="chevron-right" alt="Chevron Slide suivante" tabindex="1"/>
            </header>
            <div class="image-contain">
            <video controls src="${videoMp4}" class="img-lightbox" name="${video}">Ici la description alternative</video>
            <span tabindex="1">${data.title}</span>
            </div>
            `

        }




        return {
            title,
            picture,
            video,
            date,
            price,
            likes,
            photographerId,
            id,
            getMediaUserDOM,
            getLightboxPhotoDOM,
            getLightboxVideoDOM
        }
    }
}