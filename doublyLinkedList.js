class Node {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // insert first node

  insertFirst(data) {
    const node = new Node(data, this.head, null);
    // if there is head, give it a prev
    if (this.head) {
      this.head.previous = node;
      this.head = node;
    } else {
      // the list is empty, so set head and tail to current
      this.head = node;
      this.tail = node;
    }
    this.size += 1;
  }

  // insert last node
  insertLast(data) {
    const node = new Node(data, null, this.tail);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.insertFirst(data);
    }
    this.size += 1;
  }

  // insert at index
  insertAt(data, index) {
    //   if index is larger than the list size
    if (index > 0 && index > this.size) {
      console.error(`out of range: ${data} not added`);
      return;
    }
    // insert to the first position
    if (index === 0) {
      this.head = new Node(data, this.head, null);
      return; // return, no need to proceed
    }
    const node = new Node(data);
    let current;
    let previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count += 1;
      current = current.next;
    }
    node.next = current;
    node.previous = previous;
    previous.next = node;
    this.size += 1;
  }

  //   getat Index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(`Data: ${current.data}| Index: ${index}`);
        return current.data;
      }
      count += 1;
      current = current.next;
      if (current == null) {
        console.log(`${index} out of bounds`);
      }
    }
  }

  // remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      console.error(`out of range: ${index} not present`);
      return;
    }
    console.log(`Removing: ${this.getAt(index)}`);
    let count = 0;
    let current = this.head;
    let previous;
    let thisNode;
    if (index === 0) {
      this.head = current.next;
      this.head.previous = null;
    } else {
      while (count < index) {
        count += 1;
        thisNode = current;
        current = current.next;
      }
      const newVal = current.next;
      newVal.previous = current.previous;
      thisNode.next = newVal;
    }
    this.size -= 1;
  }

  // clear list
  clearList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // print list
  printList() {
    let current = this.head;
    while (current) {
      console.log('__________________');
      console.log(`Data: ${current.data}`);
      console.log(`Next data: ${current.next ? current.next.data : 'TAIL'}`);
      console.log(`Previous Data ${current.previous ? current.previous.data : 'HEAD'}`);
      current = current.next;
    }
  }
}
const dll = new DoublyLinkedList();
dll.insertFirst('e');
dll.insertFirst('d');
dll.insertFirst('c');
dll.insertFirst('b');
dll.insertFirst('a');
dll.insertAt('?', 5);
dll.printList();
