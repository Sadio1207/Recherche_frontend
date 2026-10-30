/* 
function couleur(colors){
    console.log(colors)
}

function configCouleur(fction){
    fction("Red")
}

//configCouleur(couleur)
const carre =(val) =>{ return val*val}
console.log(carre(2))
//montant, taux
const mHT = (montant,taux)=>{return montant-(montant*taux)}
//let a;
//const b=2;
console.log(mHT(100000,0.15)) 

function carre(val){
    return val*val
}

nbr = carre(4)
console.log(carre(3))
const salutation = ()=> console.log("Bonjoue")

*/
// 
//Commande (id,total,nomClient)

let commande = {
    id:1,
    total:5000,
    nomClient:"Mansour"
}
let x = commande
x.total=100
console.log("Initial: "+commande.total)
console.log("New: "+x.total)





 
const etudiant = {
    id:1,
    nom:"Diop",
    age:18
}

et1 = etudiant
et1.nom="Ba"
et2 = etudiant
et2.nom="Samba"
et3 = etudiant
et3.nom="Ka"

console.log(`
        Etu: ${etudiant.nom} -
        ET1: ${et1.nom}
        ET2: ${et2.nom}
        ET3: ${et3.nom}
    `) 
//Bonj