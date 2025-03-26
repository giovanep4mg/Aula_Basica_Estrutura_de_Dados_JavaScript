class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(element) {
    this.storage[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.count === 0) return "Stack is empty";
    this.count--;
    const item = this.storage[this.count];
    delete this.storage[this.count];
    return item;
  }

  peek() {
    return this.count === 0 ? "Stack is empty" : this.storage[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }
}

// Testando 🚀
const stack = new Stack();
stack.push("📦 A");
stack.push("📦 B");
stack.push("📦 C");

console.log(stack.peek()); // 📦 C
console.log(stack.pop());  // 📦 C
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
