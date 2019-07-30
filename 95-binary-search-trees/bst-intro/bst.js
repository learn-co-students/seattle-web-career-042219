class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

console.log(`
 Example: making the tree "by hand"

     50
    /  \\
   30   100
  / \\
 12  49
`)

const bst = new BinarySearchTree();

fifty = new Node(50);
thirty = new Node(30);
hundred = new Node(100);
twelve = new Node(12);
fortyNine = new Node(49);

bst.root = fifty;

fifty.left = thirty;
fifty.right = hundred;

thirty.left = twelve;
thirty.right = fortyNine;

/*
 Example: find if a value is in the tree
*/
function bstContains(currentRoot, value) {
  if (currentRoot.data == value) {
    return true;
  } else if (value > currentRoot.data) {
      if (currentRoot.right) {
        return bstContains(currentRoot.right, value);
      } else {
        return false;
      }
  } else {
      if (currentRoot.left) {
        return bstContains(currentRoot.left, value);
      } else {
        return false;
      }
  }
}

console.log("Tree contains 12?");
console.log(bstContains(bst.root, 12));
console.log("Tree contains 13?");
console.log(bstContains(bst.root, 13));
console.log();

/*
 Example: insert a new value into the tree
*/
function bstInsert(currentRoot, value) {
  console.log(`currentRoot.data: ${currentRoot.data}, value: ${value}`);
  if (value > currentRoot.data) {
    if (currentRoot.right) {
      bstInsert(currentRoot.right, value);
    } else {
      console.log(`Inserting ${value} as the right child of ${currentRoot.data}`);
      currentRoot.right = new Node(value);
    }
  } else {
    if (currentRoot.left) {
      bstInsert(currentRoot.left, value);
    } else {
      console.log(`Inserting ${value} as the left child of ${currentRoot.data}`);
      currentRoot.left = new Node(value);
    }
  }
}

console.log("Inserting 200");
bstInsert(bst.root, 200);
console.log(`Now the tree looks like:

     50
    /  \\
   30   100
  / \\     \\
12  49    200
`)

console.log("Inserting 25");
bstInsert(bst.root, 25);

console.log(`Now the tree looks like:

     50
    /  \\
   30   100
  /  \\    \\
12   49    200
  \\
  25
`)
