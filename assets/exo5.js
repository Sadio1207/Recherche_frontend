const etudiantL2 = {
    id: 1,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12],
    filiere: "IAGE"
}

// Fonction utilisant le destructuring
function extraireIdentite(etudiant) {
    const { prenom, nom, filiere } = etudiant

    return {
        prenom,
        nom,
        filiere
    }
}

const identite = extraireIdentite(etudL2)

console.log("Identité de l'étudiant :", identite)

// 2 .
const etudL2 = {
    id: 1,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12],
    filiere: "IAGE"
};

function moyenneNotes(notes) {

    if (notes.length === 0) {
        return 0;
    }

    
    const somme = notes.reduce((total, note) => total + note, 0)

    
    return somme / notes.length
}


console.log("Notes :", etudL2.notes)
console.log("Moyenne :", moyenneNotes(etudL2.notes).toFixed(2))

console.log("Moyenne d'un tableau vide :", moyenneNotes([]))

// 3.
const etuL2 = {
    id: 104,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12],
    filiere: "IAGE"
}

// Fonction pour ajouter une nouvelle note sans modifier l'original
function ajouterNote(etudiant, nouvelleNote) {

    return {
        ...etudiant,
        notes: [...etudiant.notes, nouvelleNote]
    }
}


const etudiantModifie = ajouterNote(etudiantL2, 18)// Ajouter une nouvelle note

console.log("Étudiant original :", etudiantL2)
console.log("Étudiant modifié :", etudiantModifie)

console.log("Notes originales :", etudiantL2.notes)
console.log("Nouvelles notes :", etudiantModifie.notes)

// 4.
const etL2 = {
    id: 104,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12],
    filiere: "IAGE"
}

// Fonction pour calculer la moyenne
function calculerMoyenneNotes(notes) {
    if (notes.length === 0) {
        return 0
    }

    const somme = notes.reduce((total, note) => total + note, 0)

    return somme / notes.length
}

// Fonction pour créer le résumé avec le paramètre REST
function creerResume(etudiant, ...options) {

    // Destructuring pour extraire l'identité
    const { prenom, nom, filiere } = etudiant

    return {
        identite: {
            prenom,
            nom,
            filiere
        },
        moyenne: calculerMoyenneNotes(etudiant.notes),
        options: options
    }
}

// Appeler la fonction avec plusieurs options
const resume = creerResume(etL2, "Admis", "Mention Bien", "Année 2027")

// Afficher le résultat
console.log("Résumé de l'étudiant :", resume)


// 5.
const EtudiantL2 = {
    id: 104,
    prenom: "Aminata",
    nom: "Fall",
    notes: [13, 16, 12],
    filiere: "IAGE"
}

// 1. Extraire l'identité de l'étudiant
function extraireIdentite(etudiant) {
    const { prenom, nom, filiere } = etudiant

    return { prenom, nom, filiere }
}

// 2. Calculer la moyenne des notes
function calculerMoyenneNotes(notes) {
    if (notes.length === 0) {
        return 0
    }

    const somme = notes.reduce((total, note) => total + note, 0)

    return somme / notes.length
}

// 3. Ajouter une note sans modifier l'original
function ajouterNote(etudiant, nouvelleNote) {
    return {
        ...etudiant,
        notes: [...etudiant.notes, nouvelleNote]
    }
}

// 4. Créer un résumé avec le paramètre REST
function creerResume(etudiant, ...options) {
    return {
        identite: extraireIdentite(etudiant),
        moyenne: calculerMoyenneNotes(etudiant.notes),
        options: [...options]
    }
}

// 5. Tester toutes les fonctions

// Conserver une copie des données initiales pour les vérifications
const etudiantInitial = {
    ...etudiantL2,
    notes: [...etudiantL2.notes]
}

// Tester l'extraction de l'identité
const ident = extraireIdentite(etudiantL2)

// Tester le calcul de la moyenne
const moyenne = calculerMoyenneNotes(etudiantL2.notes)

// Tester l'ajout d'une nouvelle note
const nouvelEtudiant = ajouterNote(etudiantL2, 18)

// Tester la création du résumé
const Resume = creerResume(
    nouvelEtudiant,
    "Admis",
    "Mention Bien",
    "Année 2026"
)

// Vérifier que les données initiales n'ont pas été modifiées
const objetIntact = etudiantL2.id === etudiantInitial.id &&
    etudiantL2.prenom === etudiantInitial.prenom &&
    etudiantL2.nom === etudiantInitial.nom &&
    etudiantL2.filiere === etudiantInitial.filiere

const tableauIntact = JSON.stringify(etudiantL2.notes) ===
    JSON.stringify(etudiantInitial.notes)

// Afficher les résultats
console.log("===== IDENTITÉ =====")
console.log(identite)

console.log("===== MOYENNE =====")
console.log(moyenne.toFixed(2))

console.log("===== NOUVEL ÉTUDIANT =====")
console.log(nouvelEtudiant)

console.log("===== RÉSUMÉ =====")
console.log(resume)

console.log("===== VÉRIFICATION DES DONNÉES =====")
console.log("Objet original intact :", objetIntact)
console.log("Tableau original intact :", tableauIntact)
console.log("Toutes les données initiales sont intactes :",
    objetIntact && tableauIntact
)

console.log("Notes originales :", etudiantL2.notes)
console.log("Notes après modification :", nouvelEtudiant.notes)