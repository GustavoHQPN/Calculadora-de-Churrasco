function calcular() {
    // Obtendo os valores de entrada
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0; 

    // Calculando as quantidades de ingredientes
    const carneBovina = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    // Convertendo mg e ml para Kg e L
    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) : Math.sign(num)*Math.abs(num)
    }

    // Exibindo o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Carne bovina:</strong> ${kFormatter(carneBovina)}Kg</p>
        <p><strong>Frango:</strong> ${kFormatter(frango)}Kg</p>
        <p><strong>Linguiça:</strong> ${kFormatter(linguica)}Kg</p>
        <p><strong>Refrigerante:</strong> ${kFormatter(refrigerante)}L</p>
        <p><strong>Cerveja:</strong> ${kFormatter(cerveja)}L</p>
    `;
}
