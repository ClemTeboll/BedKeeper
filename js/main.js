class holyDay {
    constructor(date, name, status) {
        this.date = date;
        this.name = name;
        this.status = status;
    }
}

const inputDate = document.querySelector("input[type = 'date']");

inputDate.addEventListener("input", () => {

    fetch("https://calendrier.api.gouv.fr/jours-feries/metropole/2022.json")
        .then(response => response.json())
        .then((data) => {
            const array = Object.entries(data);

            array.map((item) => {
                const obj = new holyDay(item[0], item[1], true)
            })

            responseText.replaceChild(".empty-response-text", ".filled-response-text");
            let responseText = document.querySelector('p#response');

            if (inputDate.value === obj) {
                responseText.innerText() = `Le ${item[0]} est un jour férié. Ce jour-là, l'événement est : ${item[1]} Vous pourrez vous reposer !`;
            } else {
                responseText.innerText() = `Le ${item[0]} n’est pas férié. Désolé !`;
            }
        })
        .catch(error => "L'erreur suivante est survenue : " + error)

})

