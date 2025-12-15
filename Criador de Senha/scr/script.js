const form = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const range = document.getElementById("range");
const refresh = document.querySelector(".refresh");
const copy = document.querySelector(".copy")

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");
const simbols = document.getElementById("simbols");

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+[]{}<>?/'|";

function gerarSenha() {
    let caracteres = ""

    if (plus.checked) caracteres += letrasMaiusculas;
    if (minus.checked) caracteres += letrasMinusculas;
    if (number.checked) caracteres += numeros;
    if (simbols.checked) caracteres += simbolos;

    if (caracteres === "") {
        alert("Por favor, selecione pelo menos uma opção");
        return;
    }

    let senha ="";
    const tamanho = parseInt(range.value);

    for (let i=0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }

    resultado.value = senha
}

form.addEventListener("submit", function (e) {
    e.preventDefault(); 
    gerarSenha();
});

copy.addEventListener("click", function () {
    if (resultado.value) {
        navigator.clipboard.writeText(resultado.value)
            .then(() => {
                alert("Senha copiada para a área de transferência!");
            })
            .catch(err => {
                console.error("Erro ao copiar: ", err);
            });
    } else {
        alert("Não há senha para copiar!");
    }
});

refresh.addEventListener("click", function () {
    resultado.value = "";
});