
// Função que quando executado mostra e esconde a imagem do exercício realizado
// recebe como parâmetro o id da Div, e o texto do botão.
function alternaExercicio(idDiv, botao) {

    // Pega a div onde está a imagem, de acordo com seu id
    let div = document.getElementById(idDiv);

    // Verifica, se o style display está "none" ou está vazio
    if (div.style.display === 'none' || div.style.display === '') {

        // Modifica o estilo para "block", assim irá aparecer a div com a imagem
        div.style.display = "block";

        // Modifica o texto que está escrito no botão
        botao.textContent = "Esconder Exercício Realizado";
        
    } else {

        // Modifica o estilo para "none", assim irá desaparecer a div com a imagem
        div.style.display = "none";

        // Modifica o texto que está escrito no botão
        botao.textContent = "Mostrar Exercício Realizado";
    }
    
}

/**
         * Crie um programa que peça 5 números ao usuário e os armazene em um array. Depois, exiba:

        ✅ Os números digitados.
        ✅ O maior número.
        ✅ O menor número.

        💡 Dica: Use Math.max(...array) e Math.min(...array).
 */


function executar() {
    // Array numeros vazio, que vai guarda os números
    let numeros = [];
    
    // Enquanto o valor da var "i" for menor que 5, vai pedir ao usuário para digitar um número
    for (let i = 0; i < 5; i++){
    
        // Pede ao usuário para inserir um número e salva dentro do Array
        numeros[i] = prompt("Digite um número: ");

    }

    // Exibi no console, os números que o usuário digitou
    console.log("Números adicionados pelo usuário: ", numeros);
    alert(`Números adicionados pelo usuário: ${numeros}`);

    // Exibirá o maior número dentro do array
    let maiorNumero = Math.max(...numeros);
    console.log("Maior número: ", maiorNumero);
    alert(`Maior número: ${maiorNumero}`);

    // Exibirá o menor número dentro do array
    let menorNumero = Math.min(...numeros);
    console.log("Menor número: ", menorNumero);
    alert(`Menor número: ${menorNumero}`);

    
    
}















