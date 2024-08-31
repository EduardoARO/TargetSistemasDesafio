function isFibonacci(num) {
    let a = 0, b = 1, c;
    if (num === 0 || num === 1) return true;
    while (b <= num) {
        c = a + b;
        a = b;
        b = c;
        if (b === num) return true;
    }
    return false;
}

function verificarFibonacci() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, digite um número válido.";
        return;
    }

    if (isFibonacci(numero)) {
        resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        resultado.textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}