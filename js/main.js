class holyDay {
    constructor(date, name) {
        this.date = date;
        this.name = name;
    }
}

let inputValue;
const inputOneDate = document.querySelector("#calendar-input-1");
const inputTwoDate = document.querySelector("#calendar-input-2");

console.log(typeof inputOneDate.value);

// Exercice 1 : fetch avec les données de l'année saisie par le user

inputOneDate.addEventListener("input", () => {

    const regex = new RegExp(/\b\w{4}\b/);
    const yearDate = regex.exec(inputOneDate.value);

    console.log(`https://calendrier.api.gouv.fr/jours-feries/metropole/${yearDate[0]}.json`);

    fetch(`https://calendrier.api.gouv.fr/jours-feries/metropole/${yearDate[0]}.json`)
        .then(response => response.json())
        .then((data) => {

            const array = Object.entries(data);

            array.map((item) => {
                const obj = new holyDay(item[0], item[1]);

                let aside = document.querySelector("aside");
                aside.classList.replace("empty-response-text", "filled-response-text");

                let responseText = document.querySelector('p#response');

                console.log(inputOneDate.value);
                console.log(obj.date);

                inputOneDate.value === obj.date ? 
                    responseText.innerText = `Le ${inputOneDate.value} est un jour férié. Ce jour-là, l'événement est : ${obj.name}. Vous pourrez vous reposer !`
                    :
                    responseText.innerText = `Le ${inputOneDate.value} n’est pas férié. Désolé !`;
            })
            
        })
        .catch(error => "L'erreur suivante est survenue : " + error)

})

// Exercice 2 : fetch avec toutes les données, 20 ans en arrière et 5 ans après

inputTwoDate.addEventListener("input", () => {

})