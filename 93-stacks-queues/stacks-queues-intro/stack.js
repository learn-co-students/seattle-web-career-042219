class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // put a new node at the top of the stack
  push(data) {
    const newNode = new Node(data);
    newNode.previous = this.top;
    this.top = newNode;
  }

  // remove and return data from the node at the top of the stack
  pop() {
    const topNode = this.top;
    this.top = topNode.previous;
    return topNode.data;
  }
}

// Example: make a stack of letters, with "E" ending up on top

const letterStack = new Stack();
letterStack.push("A");
letterStack.push("B");
letterStack.push("C");
letterStack.push("D");
letterStack.push("E");

// print out the contents of the stack from top to bottom
console.log("Original stack: ");
let currentNode = letterStack.top;
while(currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.previous;
}

// pop the top two letters off the stack
const e = letterStack.pop();
const d = letterStack.pop();
console.log(`Just removed ${e} and ${d} from stack`);

// print out the contents again
console.log("Stack after top two letters removed:");
currentNode = letterStack.top;
while(currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.previous;
}
