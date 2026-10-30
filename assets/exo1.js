
// 1. Fonction moyenne 
function Moyenne(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

// Tests
console.log("=== CALCUL DE LA MOYENNE ===");
console.log(Moyenne(12, 14, 16)); // 14
console.log(Moyenne(0, 0, 0));    // 0 (cas limite)


// 2. Fonction  admis
function Admis(moyenne) {
    return moyenne >= 10;
}

// Tests
console.log("=== Affichage ===");
console.log(Admis(15)); // true
console.log(Admis(9));  // false
console.log(Admis(10)); // true (cas limite)



// 3. Fonction prix TTC
function PrixTTC(prixHT, tauxTVA = 0.18) {
    return prixHT + (prixHT * tauxTVA);
}

// Tests
console.log("=== PRIX TTC ===");
console.log(PrixTTC(10000));       // 11800
console.log(PrixTTC(10000, 0.20)); // 12000
console.log(PrixTTC(0)); // 0 (cas limite)


// 4. Fonction  minutes
const Mn = (heures) => {
    return heures * 60;
};

// Tests
console.log("=== AFFICHAGE DES MINUTES ===");
console.log(convertirEnMinutes(2));   // 120
console.log(convertirEnMinutes(0.5)); // 30
console.log(convertirEnMinutes(0));   // 0 (cas limite)
