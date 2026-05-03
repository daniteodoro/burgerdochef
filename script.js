fetch("header.html")
    .then(resposta => resposta.text())
    .then(dados => {
        document.getElementById("header").innerHTML = dados;
    });

fetch("footer.html")
    .then(resposta => resposta.text())
    .then(dados => {
        document.getElementById("footer").innerHTML = dados;
    });