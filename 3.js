async function calcularFaturamento() {
    try {
        // Carrega o JSON com os dados de faturamento
        const response = await fetch('faturamento.json');
        const faturamento = await response.json();

        // Filtra os dias com faturamento acima de zero
        const valores = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);

        // Calcula o menor e maior valor de faturamento
        const menorValor = Math.min(...valores);
        const maiorValor = Math.max(...valores);

        // Calcula a soma total e a média mensal
        const somaTotal = valores.reduce((acc, valor) => acc + valor, 0);
        const mediaMensal = somaTotal / valores.length;

        // Calcula o número de dias com faturamento acima da média
        const diasAcimaMedia = valores.filter(valor => valor > mediaMensal).length;

        // Exibe o resultado
        document.getElementById("resultadoFaturamento").innerHTML = 
            `<p>Menor valor de faturamento: R$${menorValor.toFixed(2)}</p>` +
            `<p>Maior valor de faturamento: R$${maiorValor.toFixed(2)}</p>` +
            `<p>Número de dias com faturamento acima da média: ${diasAcimaMedia}</p>`;
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
        document.getElementById("resultadoFaturamento").textContent = "Erro ao carregar os dados de faturamento.";
    }
}