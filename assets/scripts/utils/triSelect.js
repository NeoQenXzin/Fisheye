// Trier les médias en fonction du filtre utilisé
async function select(allMedias, run){
    const select = document.getElementById("filtre")
    select.addEventListener('change', function() {
        // console.log(select.selectedIndex);
        if(this.options[this.selectedIndex].value === "titre"){
            let triParTitre = allMedias.sort((a,b) => {
                return a.title > b.title ? 1 : -1
            })
           displaySelect(triParTitre, run)
            
        }
       else if(this.options[this.selectedIndex].value === "popularité"){
            let triParPopularite = allMedias.sort((a,b) => {
                return a.likes > b.likes ? 1 : -1
            })
            // console.log(triParPopularite);
            displaySelect(triParPopularite, run)
            
        }
       else if(this.options[this.selectedIndex].value === "date"){
            let triParDate =  allMedias.sort((a,b) => {
                return a.date > b.date ? 1 : -1
            })
            // console.log(triParDate);
           displaySelect(triParDate, run)
        }
    })
    // console.log(select.options);
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
