function carregarPagina(busca) {
    let localDaPagina = document.querySelector('#paginas')

    let requisicao = new XMLHttpRequest();

    requisicao.onreadystatechange = () => {
        if (requisicao.readyState == 4 && requisicao.status == 200) {
            localDaPagina.innerHTML = requisicao.response

        }
    }

    requisicao.open('GET', `${busca}.html`)
    requisicao.send()
}




var typed = new Typed(".typing", {
    strings: ["", "JAMES WEBB",],
    typeSpeed: 400,
    BackSpeed: 1,
    loop: true,
})