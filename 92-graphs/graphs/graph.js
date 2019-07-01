class Node {
  constructor(data) {
    this.data = data;
  }
}

class Graph {
  constructor() {
    /*
      In lecture, this said `this.edges = {}`
      But a JavaScript object isn't actually a hash/map/dictionary, it can only
      handle strings or symbols as keys.  In order to use an object as a key,
      you have to use the Map class (built into JavaScript).
    */
    this.edges = new Map();
  }
  addNode(node) {
    // In lecture, this said `this.edges[node] = []`
    this.edges.set(node, []);
  }
  addEdge(start, end) {
    // In lecture, this said `this.edges[start].push(end)`
    this.edges.get(start).push(end);
  }
  getNeighbors(node) {
    // In lecture, this said `this.edges[node]`
    return this.edges.get(node);
  }
}

/*
Example graph:
|WA| --> |ID|
 |        
 v
|OR|
 |
 v
|CA|
*/

const graph = new Graph();

const washington = new Node("Washington");
const oregon = new Node("Oregon");
const idaho = new Node("Idaho");
const california = new Node("California");

graph.addNode(washington);
graph.addNode(oregon);
graph.addNode(idaho);
graph.addNode(california);

graph.addEdge(washington, oregon);
graph.addEdge(washington, idaho);
graph.addEdge(oregon, california);

// Washington was the "start" node twice, so Oregon and Idaho get printed
console.log(graph.getNeighbors(washington));
// Idaho was never the "start" node, so it prints an empty list
console.log(graph.getNeighbors(idaho));
