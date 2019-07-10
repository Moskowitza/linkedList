class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  // insert last node
  insertLast(data) {
    const node = new Node(data);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current) {
        current = current.next;
      }
      this.size += 1;
    }
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
      this.head = new Node(data, this.head);
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
    }
  }

  // remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      console.error(`out of range: ${index} not present`);
    }
    console.log(`Removing: ${this.getAt(index)}`);
    let count = 0;
    let current = this.head;
    let previousNode;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previousNode = current;
        current = current.next;
        count += 1;
      }
      previousNode.next = current.next;
    }
    this.size -= 1;
  }

  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // print list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(400);
ll.insertFirst(500);
ll.insertAt('cat', 2);
ll.removeAt(3);

ll.printList();
