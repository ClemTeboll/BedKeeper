class holyDay {
    constructor(date, name) {
        this.date = date;
        this.name = name;
    }
}

const inputDate = document.querySelector("input[type = 'date']");
console.log(inputDate);


inputDate.addEventListener("input", () => {

    // Extraire l'année de la string de l'année saisir par le user
    // Mettre la date dans le inputDate ci-dessous

    fetch(`https://calendrier.api.gouv.fr/jours-feries/metropole/${inputDate}.json`)
        .then(response => response.json())
        .then((data) => {

            console.log(data);

            const array = Object.entries(data);
            console.log(array);

            data.map((item) => {
                const obj = new holyDay(item[0], item[1]);
                console.log(obj);
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

