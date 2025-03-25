
// Função que irá gerar os números aleatórios
function gerarNumero() {

    // pega o que o usuário digitou, e salva na var "numerUsuario"
    let numeroUsuario = document.getElementById("entrada_numero_usuario").value;

    // Verifica se o campo está vazio ou não
    if (isNaN(numeroUsuario)) {
        // Se estiver vazio, exibirá esse alerta na página
        alert("Campo vazio, Digite um número! ")
        // retorna
        return;
    }

    // Verifica, se a variável não está vazia,...
    if (numeroUsuario !== '') {

        // cria um array, vazia com o nome de "listaNumeros"
        const listaNumeros = [];

        // Enquanto i for menor que o total da var, vai...
        for (let i = 0; i < numeroUsuario; i++){

            // Gera um número aleatório, de 0 até o valor da var "numeroAleatorio"
            let numeroAleatorio = Math.floor(Math.random() * numeroUsuario);

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

    } else {
        
        // Exibirá essa mensagem, caso tenha digitado algo errado!
        alert("Digite um número! ")
    }

}

