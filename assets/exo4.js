
// 1eer fonction
function Somme(...nombres) {
    let somme = 0;

    for (let i = 0; i < nombres.length; i++) {
        somme += nombres[i];
    }

    return somme;
}

console.log(`Somme de 2 valeurs = ${Somme(10, 20)}`) // Tests avec 2 valeurs
console.log(`Somme de 3 valeurs = ${Somme(10, 20, 30)}`) // Tests avec 3 valeurs
console.log(`Somme de 5 valeurs = ${Somme(10, 20, 30, 40, 50)}`) // Tests avec 5 valeurs


// 2eme fonction


function PremierEtAutres(premier, ...autres) {
    console.log(`Premier nom :, ${premier}`);
    console.log(`Les autres noms : ${autres}`);
}

// Tests
console.log(PremierEtAutres("Fatou", "Awa", "Abdou", "Malick", "Diop"))
console.log(PremierEtAutres(10, 20, 30, 40))


// 3eme fonction


function creerFiche(nom, filiere, ...competences) {
    return {
        nom: nom,
        filiere: filiere,
        competences: competences
    };
}

// Test de la fonction
let fiche = creerFiche(
    "Moussa",
    "Informatique",
    "HTML",
    "CSS",
    "JavaScript",
    "Python"
);


console.log(fiche);

console.log(`\n       Explication\n`)
console.log(`En JavaScript, le paramètre REST (...) doit obligatoirement être placé à la fin de la 
liste des paramètres, parce qu'il récupère tous les arguments restants et les regroupe 
dans un tableau.
Si on le place au milieu, JavaScript ne saura pas quels arguments lui attribuer et 
lesquels réserver aux paramètres suivants.`);
 