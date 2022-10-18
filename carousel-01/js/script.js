const imgCarousel = [
    "img/item-00.png",
    "img/item-01.png",
    "img/item-02.png",
    "img/item-03.png",
    "img/item-04.png",
    "img/item-05.png",
    "img/item-06.png",
    "img/item-07.png",
    "img/item-08.png",
    "img/item-09.png",
];

function carousel() {
    let indice = 0;
    let carouselGo = setInterval(function () {
        if (indice > imgCarousel.length - 1) {
            indice = 0;
                                   
        }
        document.querySelector("#image-to-change").setAttribute("src", imgCarousel[indice]);
        indice++;
    }, 500);

}

// carousel();


function carouselAlenver() {
    let indice = imgCarousel.length - 1;
    let carouselGo = setInterval(function () {
        if (indice < 0) {
            indice = imgCarousel.length - 1;
                                   
        }
        document.querySelector("#image-to-change").setAttribute("src", imgCarousel[indice]);
        indice--;
    }, 500);
}
    carouselAlenver() 


    