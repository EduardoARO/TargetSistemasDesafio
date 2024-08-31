function calcularSoma() {
    const INDICE = parseInt(document.getElementById("indice").value);
    let SOMA = 0;
    let K = 0;

    if (isNaN(INDICE)) {
        document.getElementById("resultadoSoma").textContent = "Por favor, digite um número válido.";
        return;
    }

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    document.getElementById("resultadoSoma").textContent = `O valor de SOMA é: ${SOMA}`;
}