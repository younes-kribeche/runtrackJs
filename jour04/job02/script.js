let ListePlateformeJSON = {"Nom":"La plateforme_", "Adresse":"8 Rue D'Hozier", "Ville":"Marseille", "Nb_staff":"11", "Création":"2019"};

function jsonValueKey(objetJSON, cle) {
    if (cle in objetJSON) {
        return [cle, objetJSON[cle]];
    } else {
        return ["Clé non trouvée", null];
    }
}

let cle = "Ville";
let [propriete, valeur] = jsonValueKey(ListePlateformeJSON, cle);
console.log(propriete, ":", valeur);

