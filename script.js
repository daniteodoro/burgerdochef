
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