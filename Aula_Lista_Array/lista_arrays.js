
// criar lista -> array
let nomes = ["Giovani", "Maria", "Pedro", "Paulo"];
console.log("Lista nomes: ", nomes);

console.log("Nome seleciondado no ídice 3: ", nomes[3]);
console.log("Nome seleciondado no ídice 1: ", nomes[1]);

console.log("=============== Selecionando itens da lista ======================");

let frutas = ["maça", "banana", "pera"];
console.log("Lista frutas: ", frutas);

// selecionando pelo índice,
console.log("Fruta selecionada no índice 0: ", frutas[0]);
console.log("Fruta selecionada no índice 2: ", frutas[2]);

console.log("=================== Modificando a lista ===========================");

// lista atual
console.log("Lista nomes atual: ", nomes);

// modificando o item da lista, usando o índice
nomes[2] = "Isabela";
console.log("Lista nomes atualizada: ", nomes);

// Para saber o tamanho da lista, quantos itens ela possue
console.log("========= Saber o tamanho da lista/array ==================");

console.log("A lista frutas tem :", frutas.length, " itens.");
console.log("A lista nomes tem :", nomes.length, " itens.");

// Adicionar um novo item, que vai para o final da lista
console.log("========= adicionando no final da lista/array ==================");

console.log("Adicionar no final da lista nomes -> o nome: Joaquim");

nomes.push("Joaquim");

console.log("Lista nomes atualizada, depois de adicionar o nome: ", nomes);

// Adicionar um novo item, que vai para o ínicio da lista
console.log("========= adicionando no ínicio da lista/array ==================");

console.log("Adicionar no final da lista nomes -> o nome: Francisco");

nomes.unshift("Francisco");

console.log("Lista nomes atualizada, depois de adicionar o nome: ", nomes);

// Adicionar um novo item, em uma POSIÇÃO especifica
console.log("========= adicionando o item em um lugar especifíco da lista/array ==================");

console.log("Adicionar na posição 3, sem excluir nenhum item, o nome: Léo.");

// Adicionar na posição 3, sem excluir nenhum item => 0, o nome => Léo
nomes.splice(3, 0, "Léo");

console.log("Lista nomes atualizada, depois de adicionar na posição 3, o nome Léo: ", nomes);

console.log("========== Removendo itens da lista ========");
console.log("---------- Remover o último item da lista ------------");

// Criando uma nova lista para usar como exemplo
let lista = ["carro", "bike", "moto", "onibus", "charrete", "cavalos"];
console.log("Lista nova para ser usada como exemplo: ", lista);

// pop() =>> remove o último item da lista
lista.pop();

console.log("Usando o pop para remover o último item da lista: ", lista);

console.log("-------- Remover o primeiro item da lista ----------");

// shift() =>> REMOVER o primeiro item da lista
lista.shift();

console.log("Removendo o primeiro item da lista: ", lista);

console.log("-------- Remover de uma posição especifíca um item da lista ----------");

// splice( 2 , 1 ) => remover na posição 2, exluir 1 elemento só  
lista.splice(2, 1);

console.log("Removendo na posição 2: ", lista);

console.log("========== Percorrendo o Array ===========");
console.log("------------ Usando o for tradicional -----------------");

// Enquanto o i for menor que o tamanho da lista, irá percorrer a lista e... e adiciona mais 1 no valor de i
for (let i = 0; i < lista.length; i++){
    
    // cada vez que lista for percorrida, pega o nome do item e escreve na tela
    console.log("Percorrendo a lista: ",lista[i]);
}

console.log("---- Usando o forEach  método mais moderno do For ------------");

// Método "for" mais moderno e simples
lista.forEach(lista => console.log(" forFor mais moderno ->>  Each", lista));

console.log("---- Usando o for...of   outra forma moderna  ------------");

// Percorre a lista e salva na variável "lista" cada item da lista, depois...
for (let listas of lista) {
    
    // Vai exibir cada item, a cada vez que percorre a lista
    console.log("Método for...of : ", listas);
}

console.log("======= Outras Operações Comuns =====");
console.log("-------- Ordenar Elementos (sort)   -------");

// Criando nova lista
let profissoes = ["barbeiro", "costureiro", "mecânico", "jardineiro", "carpiteiro","ajudante geral"];
console.log("Nova lista de profissões: ", profissoes);

// sort() =>>  vai deixar a lista em ordem alfábetica
profissoes.sort();
console.log("Usando o sort(), que deixará a lista em ordem alfábetica: \n ", profissoes);

console.log("------- Reverter a ordem da lista (reverse)  ------")

// reverse() => vai reverter a lista, o primeiro será o último, e o último será o primeiro
profissoes.reverse();

console.log("Usando o reverse(), o primeiro será o último e o último o primeiro: \n ", profissoes);

console.log("----------- Filtrar Elementos (filter)  ------")

// Criando uma lista com números variados
let numeros = [12, 30, 43, 45, 56, 2, 23];
console.log("Nova lista com números variados: ",numeros);

// Verifica se os números dentro da lista, são maiores que 25 ou não, se forem salva na var "maiorQue25"
// É uma função, que recebe um número, e verifica se esse número é maior que 25, se for salva na variável "maiorQue25"
let maiorQue25 = numeros.filter(num => num > 25);

// Exibi os números que são maiores
console.log("Números maiores que 25: ", maiorQue25);

console.log("-------- Transformar Elementos (map)  -----------")

// Exibi a lista números atualizada
console.log("Lista atualizada: ", numeros);

// vai dobrar todos os iten, números da lista, e salvar na variável dobrados
// é uma função que recebe um número, e faz a multiplicação desse número, ai seu valor será dobrado!
let dobrados = numeros.map(num => num * 2);

// Exibi na tela o resultado, dos números dobrados
console.log("Números dobrados: ", dobrados);




