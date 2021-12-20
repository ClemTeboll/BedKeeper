class holyDay {
    constructor(date, name, status) {
        this.date = date;
        this.name = name;
    }
}

const inputDate = document.querySelector("input[type = 'date']");



inputDate.addEventListener("input", () => {

    fetch("https://calendrier.api.gouv.fr/jours-feries/metropole/2021.json")
        .then(response => response.json())
        .then((data) => {
            const array = Object.entries(data);

            array.map((item) => {
                const obj = new holyDay(item[0], item[1]);
                
                let aside = document.querySelector("aside");
                aside.classList.replace("empty-response-text", "filled-response-text");

                let responseText = document.querySelector('p#response');

                inputDate.value === obj.date ? 
                    responseText.innerText = `Le ${inputDate.value} est un jour férié. Ce jour-là, l'événement est : ${obj.name}. Vous pourrez vous reposer !`
                    :
                    responseText.innerText = `Le ${inputDate.value} n’est pas férié. Désolé !`;
            })
            
        })
        .catch(error => "L'erreur suivante est survenue : " + error)

})

