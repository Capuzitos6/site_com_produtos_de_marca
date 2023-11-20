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

function changeImageBranca() {
    var image = document.getElementById('camisa.branca');
    if (image.src.match("img/Dimona_Frente_branca.png")) {
        image.src = "img/Dimona_Costas_branca.png";
    } else {
        image.src = "img/Dimona_Frente_branca.png";
    }
}

function changeImagePreta() {
    var image = document.getElementById('camisa.preta');
    if (image.src.match("img/Dimona_Frente_preta.png")) {
        image.src = "img/Dimona_Costas_preta.png";
    } else {
        image.src = "img/Dimona_Frente_preta.png";
    }
}

function changeImageTime() {
    var image = document.getElementById('camisa.time');
    if (image.src.match("img/Dimona_Frente_time.png")) {
        image.src = "img/Dimona_Costas_time.png";
    } else {
        image.src = "img/Dimona_Frente_time.png";
    }
}

function changeImageKitty() {
    var image = document.getElementById('camisa.Kitty');
    if (image.src.match("img/Dimona_Frente_kitty.png")) {
        image.src = "img/Dimona_Costas_kitty.png";
    } else {
        image.src = "img/Dimona_Frente_kitty.png";
    }
}

function changeImagepromo() {
    var image = document.getElementById('camisa.promo');
    if (image.src.match("img/Promoção.2.png")) {
        image.src = "img/Promoção.1.png";
    } else {
        image.src = "img/Promoção.2.png";
    }
}

