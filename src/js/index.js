const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();

        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");

        dessellecionarPersonagem(personagemSelecionado, index);
    })
})
function dessellecionarPersonagem(personagemSelecionado, index) {
    personagemSelecionado.classList.remove("selecionado");

    personagens[index].classList.add("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

