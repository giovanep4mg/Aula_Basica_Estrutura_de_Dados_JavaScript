
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

/**      -----------------------------------------------------------------------------------------------    ***** */



/**
 *      Crie um programa que: <br>
        <br>
        1_ Pergunte ao usuário três nomes de cidades e armazene-os em um array. <br>
        2_ Exiba as cidades no console. <br>
        3_ Pergunte ao usuário se deseja adicionar outra cidade. <br>
            <br>
            Se sim, peça o nome e adicione ao array. <br>
            Se não, exiba a lista final e encerre o programa. <br>
 */




function executar() {
    // cria uma lista vazia, que vai guarda os nomes das cidades que serão adicionadas
    let cidades = [];
    
    // Enquanto o valor de "i" for menor que 3, vai repetir essa ação, até que o valor de "i" seja maior que 3.
    for (let i = 0; i < 3; i++){
    
        // Pede ao usuário para adicionar um nome, e salva na posição "i" dentro da lista cidades
        cidades[i] = prompt("Digite o nome de uma cidade: ");
    
    }
    // Exibir no console os nomes das cidades adicionadas pelo usuário
    console.log("cidades adicionadas pelo usuário: ", cidades);

    // salva a resposta do usuário, dentro da variável "resposta"...
    let resposta = prompt("Deseja adicionar mais alguma cidades: Sim ou Não ?");

    // Verifica, se a resposta for "sim", vai...
    // Uso de toLowerCase() → Agora, aceita variações de "Sim", como "sim", "SIM", "sIm", etc.
    if (resposta.toLowerCase() === 'sim') {
        
        // adicionar dentro da lista "cidades" um novo nome,Pedindo ao usuário para adicionar o nome
        cidades.push(prompt("Digite o nome da cidade: "));

        //Uso de .join("\n") → Mostra a lista corretamente no alert(), separando os nomes por linha.
        alert(`Lista final das cidades adicionadas:\n${cidades.join("\n")}`);

    } else {

        // Exibir mensagem, mostrando as cidades adicionadas pelo usuário
        //Uso de .join("\n") → Mostra a lista corretamente no alert(), separando os nomes por linha.
        alert(`Lista final das cidades adicionadas:\n${cidades.join("\n")}`);
    }
    
}
