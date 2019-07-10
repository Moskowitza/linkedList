class Stack {
  constructor(...items) {
    this.stack = [...items];
    this.reverse = false;
  }

  push(...items) {
    if (this.reverse) {
      return this.stack.unshift(...items);
    }
    return this.stack.push(...items);
  }

  pop() {
    if (this.reverse) {
      console.log('Reversed Stack');
      this.stack.shift();
    }
    this.stack.pop();
  }

  printStack() {
    if (this.reverse) {
      console.log('Reversed Stack');
      console.log(this.stack);
    }
    console.log(this.stack);
  }
}
const stack = new Stack();
stack.push(3, 5, 7);
stack.push(1, 4, 6);
stack.reverse = true;
stack.pop();
stack.printStack();
