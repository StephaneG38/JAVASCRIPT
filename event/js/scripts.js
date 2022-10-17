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
    linkToClick.addEventListener(`click`, function (e) {
        if (!isParagraf) {
            document.querySelector(`.show-hide-para`).style.display = "block";
            isParagraf = true;
        } else {
            document.querySelector(`.show-hide-para`).style.display = "none";
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