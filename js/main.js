class holyDay {
    constructor(date, name, status) {
        this.date = date;
        this.name = name;
        this.status = status;
    }
}


const inputDate = document.querySelector("input[type = 'date']");

inputDate.addEventListener("click",() => {
    let pickedDate = new Date(pickedDate.value);
    console.log(pickedDate);
})

// Fonction click qui :

// - Appelle l'API
// - Compare la date demandé par l'utilisateur avec la date de l'api
// - Si date = jour férié, return true, affiche le résultat true
// - Si date = jour férié, return false, affiche le résultat false

fetch("https://calendrier.api.gouv.fr/jours-feries/metropole/2022.json")
        .then(response => response.json())
        .then((data) => {
            let array = Object.entries(data);

            array.map((item) => {
                let obj = new holyDay(item[0], item[1], true)
                console.log(obj);
            })

            // if (pickedDate === obj) {
                // let responseText = document.querySelector('p#response');
                // console.log(responseText.className);
                // return responseText.replaceChild(".empty-response-text", "filled-response-text");
                // let responseText = document.querySelector('p#response');
                // responseText.innerText() = `Le ${item[0]} est un jour férié. Ce jour-là, l'événement est : ${item[01]} Vous pourrez vous reposer !`;
                // }
                // console.log(responseText);
            // } else {
            //     let responseText = document.querySelector('p#response');
            //     responseText.innerText() = `Le ${item[0]} n’est pas férié. Désolé !`;
            // }
        })
        .catch(error => "L'erreur suivante est survenue : " + error)