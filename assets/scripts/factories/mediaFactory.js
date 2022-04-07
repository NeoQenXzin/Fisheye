class MediaFactory{
    constructor(data, type){
        if(type === 'photoApi'){
            return new Photographer(data)
        }
    }
    
    // Je construit mon template main page index
    profilFactory(data) {
        const { name, portrait, country, tagline, price } = data
        
        const picture = `assets/photographers/photo-id/${portrait}`
        
        function getProfilUserDOM(){
            const headerPhotographer = document.createElement( 'section')
            headerPhotographer.innerHTML += 
            ` 
            <div class="article-index">
                        <img src="${picture}" alt="portrait du photographe ${name}"></img>
                        <h2> ${name} </h2>
                    </div>
                        <div class="country">${country}</div>
                        <div class="tagline">${tagline}</div>
                        <div class="price">${price}€/jour</div>
               `

            return (headerPhotographer)
        }

    return { name, picture, tagline, price, country, getProfilUserDOM }
}
}