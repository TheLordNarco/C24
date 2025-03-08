document.addEventListener("DOMContentLoaded", function () {
    carregarExtrato();
    carregarCadastros();
});

function comprar(produto) {
    let extrato = JSON.parse(localStorage.getItem("extrato")) || [];
    extrato.push(`Comprado: ${produto}`);
    localStorage.setItem("extrato", JSON.stringify(extrato));
    carregarExtrato();
}

function carregarExtrato() {
    const extratoLista = document.getElementById("extrato-lista");
    extratoLista.innerHTML = "";
    let extrato = JSON.parse(localStorage.getItem("extrato")) || [];
    extrato.forEach(item => {
        const novoItem = document.createElement("p");
        novoItem.textContent = item;
        extratoLista.appendChild(novoItem);
    });
}

function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    if (nome && email) {
        let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
        cadastros.push({ nome, email });
        localStorage.setItem("cadastros", JSON.stringify(cadastros));
        alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}`);
    } else {
        alert("Preencha todos os campos!");
    }
}

function carregarCadastros() {
    console.log("Usuários cadastrados:", JSON.parse(localStorage.getItem("cadastros")) || []);
}
