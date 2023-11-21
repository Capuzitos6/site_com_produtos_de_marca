function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/img/close_white_36dp.svg";
    }
}

 

{

    function changeImagemine() {
        var image = document.getElementById('camisa.mine');
        image.src = image.src.match("img/Dimona_Frente_Mine.png") ? "img/Dimona_Costas_Mine.png" : "img/Dimona_Frente_Mine.png";
    }
    
    function changeImagePreta() {
        var image = document.getElementById('camisa.preta');
        image.src = image.src.match("img/Dimona_Frente_preta.png") ? "img/Dimona_Costas_preta.png" : "img/Dimona_Frente_preta.png";
    }
    
    function changeImageTime() {
        var image = document.getElementById('camisa.time');
        image.src = image.src.match("img/Dimona_Frente_time.png") ? "img/Dimona_Costas_time.png" : "img/Dimona_Frente_time.png";
    }
    
    function changeImagegomu() {
        var image = document.getElementById('camisa.gomu');
        image.src = image.src.match("img/Dimona_Frente_Gomu.png") ? "img/Dimona_Costas_Gomu.png" : "img/Dimona_Frente_Gomu.png";
    }
    
    function changeImagedonuts() {
        var image = document.getElementById('camisa.donuts');
        image.src = image.src.match("img/Dimona_Frente_Donuts.png") ? "img/Dimona_Costas_Donuts.png" : "img/Dimona_Frente_Donuts.png";
    }
    
    function changeImageegg3() {
        var image = document.getElementById('camisa.egg3');
        image.src = image.src.match("img/Dimona_Frente_egg3.png") ? "img/Dimona_Costas_egg3.png" : "img/Dimona_Frente_egg3.png";
    }
    
    function changeImagetrauma() {
        var image = document.getElementById('camisa.trauma');
        image.src = image.src.match("img/Dimona_Frente_Trauma.png") ? "img/Dimona_Costas_Trauma.png" : "img/Dimona_Frente_Trauma.png";
    }
    
    function changeImagetotoro() {
        var image = document.getElementById('camisa.totoro');
        image.src = image.src.match("img/Dimona_Frente_totoro.png") ? "img/Dimona_Costas_totoro.png" : "img/Dimona_Frente_totoro.png";
    }

}


 document.addEventListener('DOMContentLoaded', function () {
    const botaoAdicionarAoCarrinho = document.querySelector('.adicionar-ao-carrinho');
    const botaoComprarAgora = document.querySelector('.comprar-agora');

    botaoAdicionarAoCarrinho.addEventListener('click', function () {
        alert('Tênis adicionado ao carrinho');
    });

    botaoComprarAgora.addEventListener('click', function () {
        alert('Compra realizada');
    });
});
