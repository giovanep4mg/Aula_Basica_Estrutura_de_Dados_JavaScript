
// Função que irá gerar os números aleatórios
function gerarNumero() {

    //
    let listaNumeros = [];

        // Enquanto i for menor que o total da var, vai...
        for (let i = 0; i < 10; i++){

            // Gera um número aleatório, de 0 até o valor da var "numeroAleatorio"
            let numeroAleatorio = Math.floor(Math.random() * 100 + 1);

            // Adiciona dentro do array, os números que está sendo gerado
            listaNumeros.push(numeroAleatorio);
        }

        // Pega dentro do array, o maior número e salva na var "maiorNumero"
        let maiorNumero = Math.max(...listaNumeros);
        console.log("Maior número: ", maiorNumero);

        // Adiciona na pagina, o valor do maior número que foi salvo
        document.getElementById("maiorNumero").innerHTML =`Maior número: ${maiorNumero}`;
        
        // Pega do array, o menor número que está sendo criado, salva na var "menorNumero"
        let menorNumero = Math.min(...listaNumeros);

        // Adiciona na página, o valor do menor número que foi salvo
        document.getElementById("menorNumero").innerHTML = `Menor número: ${menorNumero}`;

}

