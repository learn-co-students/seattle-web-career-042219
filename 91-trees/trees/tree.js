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
 div
 / \
p   p
*/
const domTree = new Tree();
const div = new Node("div");
domTree.root = div;
const p1 = new Node("p");
const p2 = new Node("p");
div.children.push(p1);
div.children.push(p2);

/*
Example: Printing out the tree as HTML
<div>
<p></p>
<p></p>
</div>
*/
function processTree(node) {
  // if (node) {
    console.log(`<${node.data}>`);
    for (const child of node.children) {
      processTree(child);
    }
    console.log(`</${node.data}>`);
  //}
}

const root = domTree.root;
processTree(root);
