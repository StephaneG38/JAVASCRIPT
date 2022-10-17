// Mur avec setTimeout()
let compteur = 0;
function affichedansXsecondes() {
    let time1 = setTimeout(function () {

        // console.log("hello " + compteur);
        let newDiv = document.createElement("div"); // je créé une variable
        document.querySelector("body").append(newDiv);

        if (compteur == 30) {
            clearTimeout(time1);
        }
        else {
            compteur++; // compteur = compteur + 1
            affichedansXsecondes(); // on doit utiliser la récurssivité
        }
    }, 500);
}

// affichedansXsecondes();  // pour lancer la fonction

// Mur avec setInterval() - plus simple car plus besoin de récurssivité
let compteur2 = 0
function afficheAvecSetIntervalle() {
    let time2 = setInterval(function () {
        let newDiv = document.createElement("div");
        document.querySelector("body").append(newDiv);
            if (compteur2 == 5) {
                clearInterval(time2);
            }
            else {
                compteur2++
            }

    }, 500);
}

afficheAvecSetIntervalle()