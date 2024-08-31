function inverterString() {
    const str = document.getElementById("texto").value;
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    document.getElementById("resultadoInversao").textContent = `String invertida: ${reversed}`;
}