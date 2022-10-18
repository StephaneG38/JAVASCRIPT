const monH1 = document.querySelector("h1");

// EXEMPLE SURVOL SOURIS
// monH1.addEventListener("mouseenter", function () {
//     monH1.style.backgroundColor = "yellow";
// });

// monH1.addEventListener("mouseout", function () {
//     monH1.style.backgroundColor = "";
// });


// EXEMPLE CLIC SOURIS
// let isColouredBackground = false;
// monH1.addEventListener("click", function () {
//     if (isColouredBackground == false) {
//         monH1.style.backgroundColor = "yellow";
//         isColouredBackground = true;
//     } else if (isColouredBackground == true) {
//         monH1.style.backgroundColor = "";
//         isColouredBackground = false;
//     }
// });

function giveColouredBackground() {
    let isColouredBackground = false;
    monH1.addEventListener("click", function () {
        if (!isColouredBackground) {
            this.style.backgroundColor = "yellow";
            isColouredBackground = true;
        } else {
            this.style.backgroundColor = "";
            isColouredBackground = false;
        }
    });
}

giveColouredBackground()




function showHideParagraph() {
    let isParagraf = false;
    const linkToClick = document.querySelector(".see-more");
    // const defaultButtonText = document.querySelector(".see-more").textContent;  Première solution
    const defaultButtonText = document.querySelector(".see-more").innerText; // seconde solution
    const paragraph = document.querySelector(`.show-hide-para`);
    linkToClick.addEventListener(`click`, function (e) {
        if (!isParagraf) {
            paragraph.style.display = "block";
            this.textContent = "Cacher";
            isParagraf = true;
        } else {
            paragraph.style.display = "none";
            this.textContent = defaultButtonText;
            isParagraf = false;
        }
        e.preventDefault();
    });
}

showHideParagraph()

// function showHideParagraph2() {
//     let isParagraf2 = false;
//     const linkToClick2 = document.querySelector(".see-more2");
//     linkToClick2.addEventListener(`click`, function (e) {
//         if (isParagraf2 == false) {
//             document.querySelector(`.show-hide-para2`).classList.add(`open`);
//             isParagraf2 = true;
//         } else {
//             document.querySelector(`.show-hide-para2`).classList.remove(`open`);
//             isParagraf2 = false;

//         }
//         e.preventDefault();
//     });

// }

// showHideParagraph2()


function showHideParagraph2() {
    const linkToClick2 = document.querySelector(".see-more2");
    linkToClick2.addEventListener(`click`, function (e) {
        e.preventDefault();
        document.querySelector(`.show-hide-para2`).classList.toggle(`open`);
    });
}

showHideParagraph2()


function changeimg() {

    const eltToClick = document.querySelector(".image-link");
    const originalTexte = eltToClick.innerText;
    const imgAChanger = document.querySelector(".image-to-change");
    const srcOriginal = imgAChanger.getAttribute("src");
    let isImgChanged = false;
    eltToClick.addEventListener(`click`, function (e) {
        if (isImgChanged == false) {
            imgAChanger.setAttribute("src", "./img/item-01.png");
            eltToClick.innerText = "Reviens à l'image originale";
            isImgChanged = true;
        } else {
            imgAChanger.setAttribute(`src`, srcOriginal);
            eltToClick.innerText = originalTexte;
            isImgChanged = false;
        }
        e.preventDefault();
    });
}

changeimg()

// function menuburger() {
//     const defaultBurgerSrc = document.querySelector(".img-burger").getAttribute("src");
//     const clickToBurger = document.querySelector(".img-burger");
//     const lmenu = document.querySelector(".liste-menu");
//     let isMenuOpen = false;
//     clickToBurger.addEventListener(`click`, function (e) {                        
//         if (isMenuOpen == false) {
//             lmenu.style.display = "block";
//             clickToBurger.setAttribute("src", "./img/hamburger-on.png");
//             isMenuOpen = true
//         } else {
//             lmenu.style.display = "none";
//             clickToBurger.setAttribute("src", defaultBurgerSrc);
//             isMenuOpen = false
//         }

//         e.preventDefault(); // pour ne pas faire remonter le scroll
//     });
// }

// menuburger()

function menuburger2() {
    const defaultBurgerSrc = document.querySelector(".img-burger2").getAttribute("src");
    const clickToBurger = document.querySelector(".img-burger2");
    // const lmenu = document.querySelector(".liste-menu");
    let isMenuOpen = false;
    clickToBurger.addEventListener(`click`, function (e) { 
        document.querySelector("header nav#version2 ul").classList.toggle("open");                       
        if (isMenuOpen == false) {
            lmenu.style.display = "block";
            clickToBurger.setAttribute("src", "./img/hamburger-on.png");
            isMenuOpen = true
        } else {
            lmenu.style.display = "none";
            clickToBurger.setAttribute("src", defaultBurgerSrc);
            isMenuOpen = false
        }

        e.preventDefault(); // pour ne pas faire remonter le scroll
    });
}

menuburger2()