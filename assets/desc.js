// function factoriel(valeur){
//     let result = 1;
//     for (let i = 1; i <= valeur; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factoriel(5)); // Output: 120

// const user = {
//     id: 1,
//     nom: "Diop",
//     login: "diop",
//     password: "1234",
//     age: 25,
// }
// console.log(user.nom); // Output: Diop


// Cas 1: Destructuration d'objet
const Produit = {
    id: 1,
    libellet: "Ordinateur",
    pUnitare: 500,
    Qte: 10,
}
const { Qte:Quantité, libellet } = Produit;
console.log(`\nLe libellet du produit est ${libellet} et sa quantité est ${Quantité}`); 
// Cas 2: Destructuration de tableau
const Tab =[100, 2, 10]

const [a, b, c] = Tab;
// const =[,A] A=2 const = [,,B] B=10
console.log(`\nb fait reférence à la valeur de l'indice 1 du tableau Tab : ${b}  \n`); 


// Regroupement de tableau
const tab1 =[ 100, 30, 40, 200]
const tab2 =[ 18 , 100]
const tUnion = [...tab1,...tab2]
const tUnion1 = [1,...tab1,...tab2,234] // (ici on peut ajouter d'autres valeurs dans le tableau)
const tUnion2 = tab1.concat(tab2)
console.log(`\nLa valeur de tUnion est : ${tUnion}  \n`);
console.log(`\nLa valeur de tUnion1 est : ${tUnion1}  \n`);
console.log(`\nLa valeur de tUnion2 est : ${tUnion2}  \n`);


const et1 = { id: 100, nom: "Diop" }
const et2 = {id: 1, nom: "Ba", age: 25}
const et1Uet2 = {...et1, ...et2} 
console.log(et1Uet2)