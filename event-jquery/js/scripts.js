// const monH1 = document.querySelector("h1");
// monH1.addEventListener("mouseenter", function () {
//   monH1.style.backgroundColor = "yellow";
// });
// monH1.addEventListener("mouseout", function () {
//   monH1.style.backgroundColor = "";
// });

// // je stocke dans une variable mon sélecteur
// const monH1 = document.querySelector("h1");
// // je définis une variable qui va m'indiquer si il y a un e couleur de fond ou pas. Je lui donne la valeur "false" pare que au début il n'y a pas de couleur de fond
// let isColouredBackground = false;
// // Je lance mon gestionnaire d'événement qui va écouter le click sur le H1
// monH1.addEventListener("click", function () {
//   // si il n'y a pas  de couleur de fond
//   if (isColouredBackground == false) {
//     // alors je mets une couelur de fond sur le H1
//     monH1.style.backgroundColor = "yellow";
//     // je fais basculer la valeur de ma variable d'indication de couleur de fond à true
//     isColouredBackground = true;
//     // je teste la condition où il y a une couleur de fond
//   } else if (isColouredBackground == true) {
//     // j'enlève la couleur de fond
//     monH1.style.backgroundColor = "";
//     // je fais basculer la valeur de ma variable d'indication de couleur de fond à false puisque je viens d'enlever la couelur de fond
//     isColouredBackground = false;
//   }
// });
function giveColouredBackground() {
  const monH1 = $("h1");
  let isColouredBackground = false;
  monH1.on("click", function () {
    if (!isColouredBackground) {
      // this.style.backgroundColor = "yellow";
      $(this).css("background-color","yellow");
      isColouredBackground = true;
    } else {
      // this.style.backgroundColor = "";
      $(this).css("background-color","");
      isColouredBackground = false;
    }
  });
}
giveColouredBackground();

function showHideParagraph() {
  let isParaDisplayed = false;
  const linkToClick = $(".see-more");
  //   const defaultButtonText = document.querySelector(".see-more").textContent;
  const defaultButtonText = linkToClick.text();
  const paragraph = $(".show-hide-para");
  linkToClick.on("click", function (event) {
    event.preventDefault();
    if (isParaDisplayed == false) {
      paragraph.fadeIn();
      $(this).text("Cacher");
      isParaDisplayed = true;
    } else {
      paragraph.fadeOut();
      $(this).text(defaultButtonText);
      isParaDisplayed = false;
    }
  });
}
showHideParagraph();

function showHideParagraph2() {
  const linkToClick2 = $(".see-more2");
  linkToClick2.on("click", function (event) {
    event.preventDefault();
    $(".show-hide-para2").toggleClass("open");
  });
}
showHideParagraph2();

function changeImg() {
  const eltToClick = $(".image-link");
  const originalTexte = eltToClick.text();
  const imgAChanger = $(".image-to-change");
  const srcOriginal = imgAChanger.attr("src");
  let isImgChanged = false;
  eltToClick.on("click", function (event) {
    event.preventDefault();
    if (isImgChanged == false) {
      imgAChanger.attr("src", "img/item-01.png");
      eltToClick.text("Reviens à l'image originale");
      isImgChanged = true;
    } else {
      imgAChanger.attr("src", srcOriginal);
      eltToClick.text(originalTexte);
      isImgChanged = false;
    }
  });
}
changeImg();

function hamburger() {
  const defaultBurgerSrc = document
    .querySelector("header button img")
    .getAttribute("src");
  const menu = document.querySelector("header nav ul");
  let isMenuOpen = false;
  document
    .querySelector("header button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (isMenuOpen == false) {
        document
          .querySelector("header button img")
          .setAttribute("src", "img/hamburger-on.png");
        menu.style.display = "block";
        isMenuOpen = true;
      } else {
        document
          .querySelector("header button img")
          .setAttribute("src", defaultBurgerSrc);
        menu.style.display = "none";
        isMenuOpen = false;
      }
    });
}
hamburger();

function hamburgerVersion2() {
  const defaultBurgerSrc = document
    .querySelector("#version2 button img")
    .getAttribute("src");
  const menu = document.querySelector("header nav#version2 ul");
  let isMenuOpen = false;
  document
    .querySelector("#version2 button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector("header nav#version2 ul").classList.toggle("open");
      if (isMenuOpen == false) {
        document
          .querySelector("#version2 button img")
          .setAttribute("src", "img/hamburger-on.png");
        isMenuOpen = true;
      } else {
        document
          .querySelector("#version2 button img")
          .setAttribute("src", defaultBurgerSrc);
        isMenuOpen = false;
      }
    });
}
hamburgerVersion2();

// DRY : Don't Repeat Yourself
