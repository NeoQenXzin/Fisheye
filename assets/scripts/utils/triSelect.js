async function select(allMedias, run){
    const select = document.getElementById("filtre")
    const gallery = document.querySelector(".gallery")
    select.addEventListener('change', function() {
        console.log(select.selectedIndex);
        if(this.options[this.selectedIndex].value === "titre"){
            let triParTitre = allMedias.sort((a,b) => {
                return a.title > b.title ? 1 : -1
            })
            console.log(triParTitre);
            gallery.innerHTML =""
            run.displayMedias(triParTitre)
            run.createMediaDOM()
            likePlus()
            likeMoins()
            displayTotalLike()
            
        }
        if(this.options[this.selectedIndex].value === "popularité"){
            let triParPopularite = allMedias.sort((a,b) => {
                return a.likes > b.likes ? 1 : -1
            })
            console.log(triParPopularite);

            gallery.innerHTML =""
            run.displayMedias(triParPopularite)
            run.createMediaDOM()
            likePlus()
            likeMoins()
            displayTotalLike()
            
        }
        if(this.options[this.selectedIndex].value === "date"){
            let triParDate =  allMedias.sort((a,b) => {
                return a.date > b.date ? 1 : -1
            })
            console.log(triParDate);
            gallery.innerHTML =""
            run.displayMedias(triParDate)
            run.createMediaDOM()
            likePlus()
            likeMoins()
            displayTotalLike()
        }
    })
    console.log(select.options);
}
