let total = 0;
let valor;

do {
    valor = Number(prompt("Insira o valor da compra (ou 0 para finalizar):"));
    if (valor > 0) {
        total += valor;
    }
} while (valor !== 0);

alert("O total da sua compra é: R$ " + total.toFixed(2));