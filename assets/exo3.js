const Ga = ["Daouda", "Martin", "Fatou"]
const Gb = ["Ibra", "Mariama"]

const Base = { nom: "Diop", filiere: "IAGE", niveau: "L2" }

// Dégroupement avec spread
const tousEtudiants = [...groupeA, ...groupeB]

console.log("Liste de tous les étudiants :", tousEtudiants)
console.log("Informations de l'étudiant :", Base)



// 2eme founction
const groupeA = ["Awa", "Moussa", "Fatou"]

// Créer une copie avec Spread
const copieGroupeA = [...groupeA]


copieGroupeA.push("Cheikh") // Ajouter Cheikh dans la copie

// Afficher les deux tableaux
console.log("Tableau original :", groupeA)
console.log("Copie modifiée :", copieGroupeA)


console.log("Le tableau original est-il intact ?",
    groupeA.length === 3 && !groupeA.includes("Cheikh")
)// Vérifier que l'original n'a pas changé



// 3eme fonction
const eBase = {
    nom: "Diop",
    filiere: "IAGE",
    niveau: "L2"
};

// Créer une copie en ajoutant de nouvelles propriétés avec Spread
const eComplet = {
    ...etudiantBase,
    age: 22,
    ville: "Dakar"
};

console.log(`Étudiant de base : ${eBase}`)
console.log(`Étudiant complet : ${eComplet}`)

// 4eme fonction
const etudiantBase = {
    nom: "Diop",
    filiere: "IAGE",
    niveau: "L2"
};


const etudModifie = {
    ...etudBase,
    niveau: "L3"
} 


console.log(`Objet original : ${etudBase}`);
console.log(`Objet modifié : ${etudModifie}`);


console.log("Le niveau original est-il conservé ?",
    etudiantBase.niveau === "L2"
)

//5eme fonction
const coordonnees = {
    nom: "Diop",
    ville: "Dakar",
    pays: "Sénégal"
};

const contact = {
    nom: "Moussa",
    telephone: "771234567",
    email: "moussa@gmail.com"
};

// Fusionner les deux objets avec Spread
const profil = {
    ...coordonnees,
    ...contact
};

// Afficher les résultats
console.log(`Objet coordonnees : ${coordonnees}`);
console.log(`Objet contact : ${contact}`);
console.log(`Profil fusionné : ${profil}`);

// Vérifier la propriété commune
console.log(`Nom conservé : ${profil.nom}`);