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

function changeImagemine() {
    var image = document.getElementById('camisa.mine');
    if (image.src.match("img/Dimona_Frente_Mine.png")) {
        image.src = "img/Dimona_Costas_Mine.png";
    } else {
        image.src = "img/Dimona_Frente_Mine.png";
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

function changeImagegomu() {
    var image = document.getElementById('camisa.gomu');
    if (image.src.match("img/Dimona_Frente_Gomu.png")) {
        image.src = "img/Dimona_Costas_Gomu.png";
    } else {
        image.src = "img/Dimona_Frente_Gomu.png";
    }
}

function changeImagedonuts() {
    var image = document.getElementById('camisa.donuts');
    if (image.src.match("img/Dimona_Frente_Donuts.png")) {
        image.src = "img/Dimona_Costas_Donuts.png";
    } else {
        image.src = "img/Dimona_Frente_Donuts.png";
    }
}

function changeImageegg3() {
    var image = document.getElementById('camisa.egg3');
    if (image.src.match("img/Dimona_Frente_egg3.png")) {
        image.src = "img/Dimona_Costas_egg3.png";
    } else {
        image.src = "img/Dimona_Frente_egg3.png";
    }
}

function changeImagetrauma() {
    var image = document.getElementById('camisa.trauma');
    if (image.src.match("img/Dimona_Frente_Trauma.png")) {
        image.src = "img/Dimona_Costas_Trauma.png";
    } else {
        image.src = "img/Dimona_Frente_Trauma.png";
    }
}



