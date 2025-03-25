// Criando um array vazio
const lista = [];


function adicionarProduto() {

    // Pega valor do que foi digitado pelo usuário e salva na var "produto"
    let produto = document.getElementById("entradaProduto").value.trim();// trim => remove espaços extras
    console.log("Produto adicionado: ", produto);

    // se estiver vazio, vai ....
    if (produto === '') {
        // Exibirá essa mensagem
        alert("O campo não pode está vazio! ");

        // retorna e começa denovo
        return;
    }

    // Se tiver preenchido
    if (isNaN(produto)) {
        
        // Pega o que foi digitado e salva dentro do array
        lista.push(produto);
        console.log("Lista: ", lista);
        
        // limpa o input
        document.getElementById("entradaProduto").value = '';

        // Criando o elemento "li" => <li></li>
        let li = document.createElement('li');

        // Pega o que foi escrito pelo usuário, e coloca dentro do elemento "li" => <li> ***  </li>
        li.textContent = produto;

        // criando o botão remover
        // Cria elemento "button" , salva na var "botaoRemover" => <button></button>
        let botaoRemover = document.createElement('button');
        // coloca esse desenho, no botao que foi criado => <button> ❌ </button>
        botaoRemover.textContent = '❌';

        // Adicionando a classe ao botão
        botaoRemover.classList.add('botao-remover');

        /**
         * // Adicionando estilos ao botão
        botaoRemover.style.marginLeft = '65%';
        botaoRemover.style.width = '10%'; // Aumenta a largura do botão
        botaoRemover.style.fontSize = '5vw'; // Aumenta o tamanho do ícone
        botaoRemover.style.cursor = 'pointer';
        botaoRemover.style.border = 'none'; // Remove a borda para um visual mais limpo
        botaoRemover.style.background = 'transparent'; // Fundo transparente
        botaoRemover.style.color = 'red'; // Deixa o ícone vermelho para destacar
         */
         

        // Adiciona uma função, dentro do botão remover, que recebe dois parâmetros "produto" e "li"
        // =>> <button onclick="removerProduto(produto, li)"> ❌ </button>
        botaoRemover.onclick = function () {

            // chama a função e passa os parÂmetros
            removerProduto(produto, li);
        };

        // adiciona o botão dentro do elemento "li"
        li.appendChild(botaoRemover);

        // Adiciona o "li" na página html, no elemento "ul"
        document.getElementById("listaProdutos").appendChild(li);


    } else {
        // Exibe essa mensagem 
        alert(`Erro ao adicionar produto!Digite um nome válido! `);
    }
    
}

// Função para remover um item "produto" e o elemento  do html "tag li"
function removerProduto(produto, elemento) {
    
    // Verifica em que posição está o item e salva na var "index", caso nao encontre retorna "-1"
    let index = lista.indexOf(produto);

    // Se não for "-1" , vai ...
    if (index !== -1) {
        
        // remove 1 item da lista na posição index.
        lista.splice(index, 1);
    }
    // Exibe essa mensagem no console
    console.log("Lista após exclusão: ", lista);

    // Remove o elemento "li" do html, onde está o item "produto"
    elemento.remove() //
}

