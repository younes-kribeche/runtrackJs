fetch("pokemon.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur de chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {

        console.log(data);
    })
    .catch(error => console.error("Mince, il y a une erreur:", error));
