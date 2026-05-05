let saldo = 500; // Valor inicial
alert("Bem-vindo! Seu saldo atual é: R$" + saldo);

// O programa roda enquanto o saldo for maior que zero
while (saldo > 0) {
    let saque = parseFloat(prompt("Quanto você deseja sacar?"));

    // Enquanto o saque for maior que o saldo, ele pede um novo valor
    while (saque > saldo) {
        alert("Saldo insuficiente! Seu saldo disponível é: R$" + saldo);
        saque = parseFloat(prompt("Por favor, digite um valor válido para o saque:"));
    }

    // Subtrai o valor e informa o sucesso
    saldo = saldo - saque;
    alert("Saque de R$" + saque + " realizado com sucesso.");
    alert("Saldo restante: R$" + saldo);
}

alert("Saldo zerado. Sessão encerrada.");














