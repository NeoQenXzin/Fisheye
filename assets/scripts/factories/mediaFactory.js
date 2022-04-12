class MediaFactory{
    constructor(data, type){
        if(type === 'mediaApi'){
            return new Media(data)
        }
    }
    
    // Je construit mon template main page index
    mediaFactory(data) {
        const { title, image, video, likes, date, price, photographerId} = data
        const picture = `assets/photographers/${photographerId}/${image}`
        const videoMp4 =  `assets/photographers/${photographerId}/${video}`
       
        
        
        function getMediaUserDOM(){
            const gallery = document.querySelector(".gallery")
            if(picture.slice(-('undefined').length).match('undefined') ){
                if(data.video){
                    console.log('mp4');
                    gallery.innerHTML +=
                `
                <a class="zoom-Lighting-box">
                <div class="photo-card">
                <video controls src="${videoMp4}">Ici la description alternative</video>
                <h2> <span class="title-card">${title}</span> <span class="like-card"> ${likes} <i class="fas fa-heart"></i> </span> </h2>
                </div>
                </a>
                <div class="price"><span>200 256 <i class="fas fa-heart"></i></span><p>${price}€/jour</p></div>
                
                `
                } 
            }else {
                gallery.innerHTML +=
                `
                <a class="zoom-Lighting-box">
                <div class="photo-card">
                <img src="${picture}" alt="image du photographe ${image}" class="img-gallery"></img>
                <h2> <span class="title-card">${title}</span> <span class="like-card"> ${likes} <i class="fas fa-heart"></i> </span> </h2>
                </div>
                </a>
                <div class="price"><span>200 256 <i class="fas fa-heart"></i></span><p>${price}€/jour</p></div>
                
                `
            }
         
            // Video 
            
        }

    return { title,picture, video, date, price, likes,photographerId, getMediaUserDOM }
}
}