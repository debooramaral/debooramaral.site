//menu

function openNav(){
    document.getElementById("myNav").style.width="100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}

//modal cfbcursos, link: https://cfbcursos.com.br/2016/02/12/como-criar-janela-modal-para-imagens-em-paginas-web/

//Note que estamos passando um parâmetro para a função, será a própria tag <img> clicada
function clique(img){
    //Primeiramente vamos relacionar os elementos com as variáveis
    //<div> principal com id "janelaModal".
    var modal = document.getElementById("janelamodal");
    //tag <img> que irá receber a imagem clicada.
    var modalimg = document.getElementById("imgmodal");
    //<div> que recebe o texto relacionado com a imagem, o texto está no alt de cada imagem
    var captiontext = document.getElementById("tituloimg");
    //tag <span> que contém a letra "x" que será usada para fechar a janela modal
    var btfechar = document.getElementsByClassName("fecharmodal")[0];

    //Configura <div> em "block" para que fique visível, inicialmente no CSS este display é none
    modal.style.display = "block";
    //Capturamos o src da imagem clicada e passamos a tag <img> que tem id="imgModal"
    modalimg.src = img.src;
    //Capturamos o alt da imagem clicada e passamos a tag <img> que tem id="imgModal"
    modalimg.alt = img.alt;
    //Inserimos o texto do parâmetro alt da imagem dentro do <span> com id="tituloimg"
    captiontext.innerHTML = img.alt;

    //Adicionamos uma função do evento onclick do <span> que usa a classe CSS "fechar"
    btfechar.onclick = function(){
        //Para fechar a janela modal simplesmente configuramos seu display como none.
        modal.style.display = "none";
    }
}


