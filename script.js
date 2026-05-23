
// fetch() 'buscar um arquivo'
fetch("header.html")

    // transforma o conteúdo em texto HTML
    .then(resposta => resposta.text())

    // coloca o conteúdo dentro da div
    .then(dados => {
        document.getElementById("header").innerHTML = dados;
    });

    // posteriormente o navegador transforma <div id="header"></div>
    // EM
    // <header>...</header>
    // AUTOMATICAMENTE


fetch("footer.html")
    .then(resposta => resposta.text())
    .then(dados => {
        document.getElementById("footer").innerHTML = dados;
    });

    // =====================================
// HEADER
// carrega o header.html automaticamente
// =====================================

fetch("header.html")
    .then(resposta => resposta.text())
    .then(dados => {
        document.getElementById("header").innerHTML = dados;
    });

// Função executada ao clicar no botão ☰
function abrirMenu(){

    // procura o elemento com id="menu"
    const menu = document.getElementById("menu");

    // adiciona ou remove a classe "ativo"
    // se estiver fechado, abre
    // se estiver aberto, fecha
    menu.classList.toggle("ativo");
}


// =====================================
// FOOTER
// carrega o footer.html automaticamente
// =====================================

fetch("footer.html")
    .then(resposta => resposta.text())
    .then(dados => {
        document.getElementById("footer").innerHTML = dados;
    });




// =====================================
// CARROSSEL DE IMAGENS
// =====================================

// seleciona todas as imagens com a classe "slide"
let slides = document.querySelectorAll(".slide");

// controla qual imagem está aparecendo
let indiceAtual = 0;



// função que troca as imagens
function trocarSlide(){

    // remove a classe "ativo" de todas as imagens
    slides.forEach(function(slide){

        slide.classList.remove("ativo");

    });


    // passa para a próxima imagem
    indiceAtual++;


    // quando chegar na última imagem,
    // volta para a primeira
    if(indiceAtual >= slides.length){

        indiceAtual = 0;

    }


    // mostra a imagem atual
    slides[indiceAtual].classList.add("ativo");

}



// troca automaticamente a cada 3 segundos
setInterval(trocarSlide, 3000);