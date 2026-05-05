let soma = 0;
let contador = 0;
let nota;

while (true) {
    nota = Number(prompt("Digite uma nota (0 a 10) ou um número negativo para sair:"));

    if (nota < 0) break; // Condição de saída

    if (nota >= 0 && nota <= 10) {
        soma += nota;
        contador++;
    } else {
        alert("Nota inválida! Digite apenas valores entre 0 e 10.");
    }
}

if (contador > 0) {
    alert("Média final: " + (soma / contador).toFixed(2));
} else {
    alert("Nenhuma nota válida foi inserida.");
}