function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

function changeImage() {
    var image = document.getElementById('camisa.branca');
    if (image.src.match("img/Dimona_Frente_branca.png")) {
        image.src = "img/Dimona_Costas_branca.png";
    } else {
        image.src = "img/Dimona_Frente_branca.png";
    }
}
