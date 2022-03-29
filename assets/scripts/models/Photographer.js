class Photographer{
    constructor(photographers){
        this._name = photographers.name
        this._id = photographers.id
        this._city = photographers.city
        this._country = photographers.country
        this._tagline = photographers.tagline
        this._price = photographers.price
        this._portrait = photographers.portrait
    }

    get name(){
        return this._name
    }
    get portrait(){
        return this._portrait
    }



}


