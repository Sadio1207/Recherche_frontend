const etudiant = {
    nom: "DIOP",
    prenom: "Mamadou",
    filiere: "Informatique",
    niveau: "Licence 2",
    notes: [15, 12, 17, 14, 18]
};

// 1. Extraire nom, prenom et filiere
const { nom, prenom, filiere } = etudiant

// 2. Extraire niveau et le renommer en classe
const { niveau: classe } = etudiant;

// 3. Récupérer la première, deuxième et dernière note
const [premiere, deuxieme, ...reste] = etudiant.notes;
const derniere = etudiant.notes[etudiant.notes.length - 1]

console.log("Première note :", premiere)
console.log("Deuxième note :", deuxieme)
console.log("Dernière note :", derniere)

// 4. Extraire la première et la troisième note
const [note1, , note3] = etudiant.notes

console.log("Première note :", note1)
console.log("Troisième note :", note3)

// 5. Extraire email avec une valeur par défaut
const { email = "Non renseigné" } = etudiant

console.log("Email :", email)

// 6. Afficher une phrase de présentation
console.log(`Je m'appelle ${prenom} ${nom}, je suis en filière ${filiere}, classe ${classe}.`);
