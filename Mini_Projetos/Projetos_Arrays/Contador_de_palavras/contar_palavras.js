//
function contarPalavras() {
    
    // Pega o texto que o usuário digitou e salva na var "textoUsuario"
    let textoUsuario = document.getElementById("textoEntrada").value.trim();
    console.log("Usuário escreveu : ", textoUsuario);

    // Se a var "textUsuario" estiver vazia, vai...
    if (textoUsuario === '') {

        alert("Preencha o campo!");
        return;
    }

    // Divide o texto em palavras usando espaço como separador
    let palavras = textoUsuario.split(/\s+/); // Usa regex para lidar com múltiplos espaços

    // Vai esconder a tela 1
    document.getElementById("tela_1").style.display = 'none';

    // Exibirá a section
    document.getElementById("tela_2").style.display = 'block';

    // Exibirá no html, o texto separado por palavras
    document.getElementById("resultado").innerHTML = palavras;

    // Exibirá no htm, a quantidade de palavras que o texto possue
    document.getElementById("resultado2").innerHTML = palavras.length;

}

