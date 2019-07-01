# TIPS: Tree Practice + Introducing Graphs

## SWBATs:

### Trees:
 - [x] Explain how trees work
 - [x] Write code to traverse a tree
    - Depth-first traversal is a pre-order traversal (recursive)
    - Breadth-first traversal is neither pre-order nor post-order (it's not recursive, it's iterative)

### Other Data Structures:
 - [x] Explain the purpose of a queue
    - Like a "line", a queue is where things always get added to the end and removed at the beginning.  Basically, like a list but the only ways to change its contents are `push` and `shift` (no `pop`, `unshift`, or insertions/deletions along the middle)
 - [x] Discuss the pros and cons of array lists vs. linked lists.
    - When using a list as a queue, linked lists are more efficient because they only take `O(1)` time to remove from the beginning and `O(n)` time to append to the end, whereas array lists take `O(n)` time to remove from the beginning and `O(n)` time (in the worst case) to append to the end.  (Remember, array lists have to copy everything over to a new array when the space needed exceeds the space allocated.)
    - Even better than a linked list would be a data structure designed specifically to be a queue, with a pointer that keeps track of the end as well as the beginning.  Then both removing from the beginning and appending to the end would be `O(1)` operations.

### Graphs:
 - [x] Explain the basics of graphs (keywords: node, edge)
    - This time, nodes only contain data, they don't have "children" or "next" associations
    - The graph itself contains a dictionary where the keys are nodes, and the values are lists of nodes they are connected to.  The connections between the nodes are called "edges", and in this case they are uni-directional (i.e. they start at the `start` node and end and the `end` node)
 - [x] Explain why graphs are more complicated to traverse than trees or linked lists
    - There's no "root" or "head" to start at
    - There can be a "cycle" where a "child" node is also a "parent" node (so you have to keep track of which nodes have already been visited)

## Resources:
1. GIF showing depth-first vs. breadth-first ("DFS" and "BFS" mean "depth first search" and "breadth first search"...here we're not actually searching, just traversing)
![breadth vs depth first GIF](https://cdn-images-1.medium.com/max/800/0*miG6xdyYzdvrB67S.gif)
2. [MDN docs for JavaScript Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
3. [Blog post about Trees and breadth first traversal](https://medium.com/@stephaniewo/understanding-breadth-first-tree-traversal-with-javascript-9b8fe670176d)
