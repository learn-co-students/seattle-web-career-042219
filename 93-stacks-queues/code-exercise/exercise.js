class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/*
Example: making a valid linked list of nodes
["A"]-->["B"]-->["C"]-->["D"]-->["E"]-->
*/

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/*
Example: making an invalid linked list of nodes (contains a cycle)
["F"]-->["G"]-->["H"]
          ^       |
          |       v
        ["J"]<--["I"]
*/
const f = new Node("F");
const g = new Node("G");
const h = new Node("H");
const i = new Node("I");
const j = new Node("J");

f.next = g;
g.next = h;
h.next = i;
i.next = j;
j.next = g;

/*
TODO: write a function that determines whether a given node is part of a valid
linked list.  (It should return false if the "list" contains a cycle, true otherwise)

Example IO:
validLinkedList(a)
=> true
validLinkedList(f)
=> false
*/

// array of visited nodes implementation
function validLinkedList1(node) {
  const visitedNodes = [];
  let currentNode = node;
  while (currentNode) {
    if (visitedNodes.includes(currentNode)) {
      return false;
    }
    visitedNodes.push(currentNode);
    currentNode = currentNode.next;
  }
  return true;
}

// marking visited nodes implementation
function validLinkedList2(node) {
  let currentNode = node;
  while (currentNode) {
    if (currentNode.visited) {
      return false;
    }
    currentNode.visited = true;
    currentNode = currentNode.next;
  }
  return true;
}

// Floyd's Algorithm
function validLinkedList3(node) {
  let slowNode = node;
  let fastNode = node;

  while (slowNode && fastNode && fastNode.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    if (slowNode === fastNode) {
      return false;
    }
  }
  return true;
}

console.log("First implementation (array of visited nodes):");
console.log(validLinkedList1(a));
console.log(validLinkedList1(f));
console.log("Second implementation (marking visited nodes):");
console.log(validLinkedList2(a));
console.log(validLinkedList2(f));
console.log("Third implementation (Floyd's algorithm):");
console.log(validLinkedList3(a));
console.log(validLinkedList3(f));
