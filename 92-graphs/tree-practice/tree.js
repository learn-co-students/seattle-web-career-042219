class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

/*
Example: Making the tree
           "oak"
         /   |   \
  "maple" "birch" "alder"
   /
"pine"
*/
const t = new Tree();
const oak = new Node("oak");
const maple = new Node("maple");
const birch = new Node("birch");
const alder = new Node("alder");
const pine = new Node("pine");

t.root = oak;
oak.children = [maple, birch, alder];
maple.children.push(pine);

/*
Example: Depth-first tree traversal

Prints out:
oak
maple
pine
birch
alder
*/

function depthFirst(node) {
  console.log(node.data);
  for (const child of node.children) {
    depthFirst(child);
  }
}

console.log("Depth first: ");
depthFirst(t.root);

/*
TODO: Breadth-first tree traversal

Prints out:
oak
maple
birch
alder
pine
*/

function breadthFirst(node) {
  let queue = [node];

  while(queue.length > 0) {
    let currentNode = queue.shift();
    // This for loop is equivalent to: `queue.push(...currentNode.children);`
    for (let i=0; i<currentNode.children.length; i++) {
      queue.push(currentNode.children[i]);
    }
    console.log(currentNode.data);
  }
}

console.log("Breadth First: ");
breadthFirst(t.root);
