class holyDay {
    constructor(date, name, status) {
        this.date = date;
        this.name = name;
        this.status = status;
    }
}

const inputDate = document.querySelector("input[type = 'date']");


inputDate.addEventListener("input", () => {

    console.log(inputDate.value);

    fetch("https://calendrier.api.gouv.fr/jours-feries/metropole/2022.json")
        .then(response => response.json())
        .then((data) => {
            const array = Object.entries(data);

            array.map((item) => {
                const obj = new holyDay(item[0], item[1], true);
                
                let responseText = document.querySelector('p#response');
                let aside = document.querySelector('aside');
                aside.classList.replace("empty-response-text", "filled-response-text");
                console.log(aside);

                if (inputDate.value === obj.date) {
                    console.log("Test réussi");
                    return responseText.innerText() = `Le ${inputDate.value} est un jour férié. Ce jour-là, l'événement est : ${obj.name} Vous pourrez vous reposer !`;
                } else {
                    console.log("2e test réussi");
                    return responseText.innerText() = `Le ${inputDate.value} n’est pas férié. Désolé !`;
                }
            })
            
        })
        .catch(error => "L'erreur suivante est survenue : " + error)

})

