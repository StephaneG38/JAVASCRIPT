
// Boucle For
function afficheJours(){
const joursDeLaSemaine = [`lundi`,`mardi`,`mercredi`,`jeudi`,`vendredi`,`samedi`,`dimanche`];
let listeHTML = `<ul>`;
for(let i = 0; i < joursDeLaSemaine.length; i++){
    listeHTML += `<li>` + joursDeLaSemaine[i]+`</li>`;
}
listeHTML += `</ul>`;
document.body.innerHTML += listeHTML;
}
// afficheJours();


// Boucle While
function afficheFruit(){
const fruit = [`pomme`,`poire`,`cerise`,`banane`,`orange`];
let listeFruit = `<ul>`;
let k = 0;
while (k < fruit.length) {
    listeFruit += `<li>` + fruit[k]+ `</li>`;
    k++;
}
listeFruit += `</ul>`;
document.body.innerHTML += listeFruit;
}
// afficheFruit();


// Boucle ForEach
function affichePrenom(){
const prenom = [`axel`,`marc`,`julie`,`bernard`,`stéphane`];
let listePrenom = `<ul>`;
prenom.forEach(function (prenomencours) {
    listePrenom += `<li>` + prenomencours + `</li>`;
})
listePrenom += `</ul>`;
document.body.innerHTML += listePrenom;
// fonction anonyme : function(){}   -> ne porte pas de nom
}
affichePrenom();
