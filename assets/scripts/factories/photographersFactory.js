class PhotographerFactory{
    constructor(data, type){
        if(type === 'photoApi'){
            return new Photographer(data)
        }
    }
    
    // Je construit mon template main page index
    photographerFactory(data) {
        // que signifie exactement cette syntaxe?
        const { name, portrait, country, tagline, price } = data;
        
        const picture = `assets/photographers/photo-id/${portrait}`;
        
        function getUserCardDOM() {
            const article = document.createElement( 'article' );
            article.innerHTML =
                 `
                    <a class="lien-profile" href="#">
                        <div class="article-index">
                        <img src="${picture}"></img>
                        <h2> ${name} </h2>
                        </div>
                    </a>
                    <div class="article-index">
                        <div class="country">${country}</div>
                        <div class="tagline">${tagline}</div>
                        <div class="price">${price}€/jour</div>
                    </div>
                `;

            return (article);
    }
    return { name, picture, tagline, price, country, getUserCardDOM }
}
}