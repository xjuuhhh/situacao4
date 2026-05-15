let index = 0;

// Função para mostrar as imagens
function mostrar() {
    const slides = document.querySelector(".slides");
    const largura = 300; // largura de cada imagem

    slides.style.transform = "translateX(" + (-largura * index) + "px)";
}

// Próxima imagem
function avancar() {
    const imagens = document.querySelectorAll(".slides img");
    const total = imagens.length;

    index = index + 1;

    if (index >= total) {
        index = 0;
    }

    mostrar();
}

// Imagem anterior
function voltar() {
    const imagens = document.querySelectorAll(".slides img");
    const total = imagens.length;

    index = index - 1;

    if (index < 0) {
        index = total - 1;
    }

    mostrar();
}

function enviar() {
    const nome = document.querySelector("input[type='text']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const mensagem = document.querySelector("textarea").value.trim();

    if (nome == "" || email == "" || mensagem == "") {
        alert("Preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!");
    }
}