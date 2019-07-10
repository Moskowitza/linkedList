class Queue {
  constructor(...items) {
    this.reverse = false;
    this.queue = [...items];
  }

  enqueue(...items) {
    if (this.reverse) {
      console.log('Reversed Queue');
      this.queue.push(...items);
    }
    this.queue.unshift(...items);
  }

  dequeue() {
    if (this.reverse) {
      console.log('Reversed Queue');
      this.queue.shift();
    }
    this.queue.pop();
  }

  printQueue() {
    if (this.reverse) {
      console.log('Reversed Queue');
      console.log(this.queue);
    }
    console.log(this.queue);
  }
}
const queue = new Queue();
queue.enqueue(2, 4, 6);
queue.printQueue();
queue.enqueue(12, 14, 16);
queue.printQueue();
queue.dequeue();
queue.dequeue();
queue.printQueue();
