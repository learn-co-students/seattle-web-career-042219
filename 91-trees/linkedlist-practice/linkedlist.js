class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // "unshift" is the JavaScript term for prepending (AKA adding to the front)
  unshift(data) {
    const node = new Node(data);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }
}

// Example: making a list [5,4,3,2,1]
const numList = new LinkedList();
numList.unshift(1);
numList.unshift(2);
numList.unshift(3);
numList.unshift(4);
numList.unshift(5);

// Example: printing out the contents of the list
let currentNode = numList.head;
while(currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}

/*
TODO: write a function that prints the k-th to last node

list: ["hello", "world"], k: 1 ==> "world"
list: [1,2,3,4,5], k: 2 ==> 4
*/
function getKthFromEndSimplest(list, k) {
  // count the size of the list
  let size = 0;
  let currentNode = list.head;
  while(currentNode) {
    size++;
    currentNode = currentNode.next;
  }

  // loop through until size - k
  currentNode = list.head;
  for(let i=0; i<size-k; i++) {
    currentNode = currentNode.next;
  }
  console.log(currentNode.data);
}

function getKthFromEndTwoRefs(list, k) {

  // create two node references, one that is k ahead of the other
  let kAheadNode = list.head;
  for(let i=0; i<k; i++) {
    kAheadNode = kAheadNode.next;
  }

  let answerNode = list.head;

  // move both references at once until the k ahead one is null
  while (kAheadNode) {
    kAheadNode = kAheadNode.next;
    answerNode = answerNode.next;
  }

  console.log(answerNode.data);
}



const helloWorld = new LinkedList();
helloWorld.unshift("world");
helloWorld.unshift("hello");

getKthFromEndSimplest(helloWorld, 1);
getKthFromEndSimplest(numList, 3);

getKthFromEndTwoRefs(helloWorld, 1);
getKthFromEndTwoRefs(numList, 3);
