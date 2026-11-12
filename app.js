
// MENU RESPONSIVO

const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');

botaoMenu.addEventListener('click', function() {

    menu.classList.toggle('aberto');

    const menuAberto = menu.classList.contains('aberto');

    botaoMenu.setAttribute('aria-expanded', menuAberto);

    botaoMenu.innerHTML = menuAberto ? '✕' : '☰';

});

// Fechar menu após clicar em um link

const linksMenu = document.querySelectorAll('#menu-principal a');

linksMenu.forEach(function(link) {

    link.addEventListener('click', function() {

        menu.classList.remove('aberto');

        botaoMenu.setAttribute('aria-expanded', 'false');

        botaoMenu.innerHTML = '☰';

    });

});

// Função para verificar o nome



function verificarNome() {

    let nome = document.getElementById("nome").value;

    if (nome == "") {
        alert("Digite seu nome!");
        console.log("Digite seu nome!");
        return false;
    }

    alert("Olá, " + nome);
    console.log("Olá, " + nome);

    return false;
}
