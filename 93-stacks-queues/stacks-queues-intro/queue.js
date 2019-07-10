class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  // put a new node at the back of the queue
  push(data) {
    const newNode = new Node(data);

    if (this.back) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }

    this.back = newNode;

  }

  // remove and return data from the node at the front of the queue
  pop() {
    const frontNode = this.front;
    this.front = frontNode.next;

    if (!this.front) {
      this.back = null;
    }

    return frontNode.data;
  }
}

// Example: make a queue of letters, with "E" ending up at the end of the queue

const letterQueue = new Queue();
letterQueue.push("A");
letterQueue.push("B");
letterQueue.push("C");
letterQueue.push("D");
letterQueue.push("E");

// print out the contents of the queue from front to back
console.log("Original queue: ");
let currentNode = letterQueue.front;
while(currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}

// pop the front two letters off the queue
const a = letterQueue.pop();
const b = letterQueue.pop();
console.log(`Just removed ${a} and ${b} from queue`);

// print out the contents again
console.log("Queue after front two letters removed:");
currentNode = letterQueue.front;
while(currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
