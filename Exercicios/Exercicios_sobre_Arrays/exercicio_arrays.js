
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
