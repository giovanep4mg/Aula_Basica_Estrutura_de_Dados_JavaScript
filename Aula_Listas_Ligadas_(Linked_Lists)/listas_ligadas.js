class LinkedList {
    constructor() {
        this.head = null; // Primeiro nó (cabeça da lista)
    }

    // Adicionar um valor no final
    append(valor) {
        const novoNo = new Node(valor);
        if (!this.head) {
            this.head = novoNo; // Se a lista estiver vazia, o novo nó vira o head
            return;
        }

        let atual = this.head;
        while (atual.proximo) {
            atual = atual.proximo;
        }
        atual.proximo = novoNo;
    }

    // Adicionar um valor no início
    prepend(valor) {
        const novoNo = new Node(valor);
        novoNo.proximo = this.head;
        this.head = novoNo;
    }

    // Remover um valor específico
    delete(valor) {
        if (!this.head) return;

        if (this.head.valor === valor) {
            this.head = this.head.proximo;
            return;
        }
        let atual = this.head;
        while (atual.proximo && atual.proximo.valor !== valor) {
            atual = atual.proximo;
        }
        if (atual.proximo) {
            atual.proximo = atual.proximo.proximo;
        }
    }

    // Exibir a lista
    print() {
        let atual = this.head;
        let valores = [];
        while (atual) {
            valores.push(atual.valor);
            atual = atual.proximo;
        }
        console.log(valores.join(" -> "));
    }
}

const lista = new LinkedList();
lista.append(10);
lista.append(20);
lista.append(30);
lista.print(); // Saída: 10 -> 20 -> 30

lista.prepend(5);
lista.print(); // Saída: 5 -> 10 -> 20 -> 30

lista.delete(20);
lista.print(); // Saída: 5 -> 10 -> 30