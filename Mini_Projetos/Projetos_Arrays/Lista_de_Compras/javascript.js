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

        // coloca a lista em ordem alfabética
        lista.sort();
        console.log("Lista: ", lista);

        // Limpa a lista antes de exibir os itens ordenados
        document.getElementById("listaProdutos").innerHTML = "";

        // Atualiza a exibição da lista
        lista.forEach(item => {

            // criando o elemento/tag "li"
            let li = document.createElement('li');
            // Adiciona o item dentro da tag "li"
            li.textContent = item;

            // Criando o botão 
            let botaoRemover = document.createElement('button');
            // Adiciona essa figura no botão
            botaoRemover.textContent = '❌';
            // Adiciona a classe no botão
            botaoRemover.classList.add('botao-remover');

            // chama a função removerProduto, passando os parâmetros
            botaoRemover.onclick = function () {
                // Passa o item e a tag onde está o item
                removerProduto(item, li);
            };

            // Adiciona o botão dentro da tag "li"
            li.appendChild(botaoRemover);
            // Adiciona a tag "li com o botão" dentro do html, na tag "ul"
            document.getElementById("listaProdutos").appendChild(li);
        });

        // limpa o campo de entrada onde o usuário adiciona os produtos
        document.getElementById("entradaProduto").value = '';

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

