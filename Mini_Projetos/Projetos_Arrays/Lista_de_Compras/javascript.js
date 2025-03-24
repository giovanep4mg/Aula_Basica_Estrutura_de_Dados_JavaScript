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

        // Cria elemento "button" , salva na var "botaoRemover" => <button></button>
        let botaoRemover = document.createElement('button');
        // coloca esse desenho, no botao que foi criado => <button> ❌ </button>
        botaoRemover.textContent = '❌';
        // Adiciona uma pequena margin entre o texto e o desenho
        botaoRemover.style.marginLeft = '15px';

        // Adiciona uma função, dentro do botão remover, que recebe dois parâmetros "produto" e "li"
        // =>> <button onclick="removerProduto(produto, li)"> ❌ </button>
        botaoRemover.onclick = function () {

            // chama a função e passa os parÂmetros
            removerProduto(produto, li);
        };

        //
        li.appendChild(botaoRemover);

        document.getElementById("listaProdutos").appendChild(li);


    } else {

        alert(`Erro ao adicionar produto!Digite um nome válido! `);
    }
    
}

function removerProduto(produto, elemento) {
    
    //
    let index = lista.indexOf(produto);

    if (index !== -1) {
        //
        lista.splice(index, 1);
    }
    console.log("Lista após exclussão: ", lista);
    //
    elemento.remove() //
}

