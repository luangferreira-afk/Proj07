let nome = "";
let sobrenome = "";

while (nome.trim() === "") {
    nome = prompt("Por favor, digite seu primeiro nome:");
}

while (sobrenome.trim() === "") {
    sobrenome = prompt("Agora, digite seu sobrenome:");
}

alert("Nome completo registrado: " + nome + " " + sobrenome);