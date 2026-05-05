let numero;

do {
    numero = parseFloat(prompt("Digite um número positivo:"));
    if (numero < 0) {
        alert("Erro! O número deve ser positivo.");
    }
} while (numero < 0 || isNaN(numero));

alert("Você digitou o número válido: " + numero);