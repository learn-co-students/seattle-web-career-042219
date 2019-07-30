# TIPS: Hash Map Exercise and Intro to Binary Search Trees

## SWABATs

Hash Map Basics
 - [x] Key-value pairs
    - "Hashing function" or "hashing algorithm" takes in the key and always outputs the same thing, so you know exactly where to look in memory for it
    - Not exactly the same as JavaScript object. JavaScript object makes the key into a string, whereas hash map inputs the whole key into its hashing function.  This matters if you're using something complex as a key, such as a Node.
    - You probably won't ever need to implement your own hash map, but the important thing to consider other than the hashing function is what to do in the case of collisions (i.e. when two different inputs create the same output from your hashing function)
 - [x] Big O performance (average) of common operations
    - `set`, which takes a key and a value and adds them to the hash map: `O(1)`
    - `get`, which takes a key and returns its value: `O(1)`
    - `has`, which takes a key and returns `true` if it's in the hash map: `O(1)`
    - `delete`, which takes a key and removes the associated key and value: `O(1)`

Binary Search Trees (BSTs)
 - [x] Basic definition:
    - Like other types of trees, it is made up of nodes and has a root
    - The nodes are a specific type of node.  Rather than a list of children, they have references to a `right` and `left` node. (Similar to a linked list node, those can be null.)
    - All nodes in the left subtree of a given node have values less than that node's value
 - [x] As the name implies, it's great for **searching**.  Otherwise it's pretty average or even potentially inefficient, depending on what you're trying to do

 | Data structure | Search   | Insert   | Insert at index   | Push | Unshift | Delete anywhere  | Pop  | Shift | Access   |
 | -------------- | -------- | -------- | ----------------- | ---- | ------- | ---------------- | ---- | ----- | -------- |
 | BST            | O(log n) | O(log n) |                   |      |         | O(log n)         |      |       | O(log n) |
 | Array          | O(n)     |          | O(n)              | O(1) | O(n)    | O(n)             | O(1) |  O(n) | O(1)     |
 | Linked list    | O(n)     |          | O(n)              | O(n) | O(1)    | O(n)             | O(n) |  O(1) | O(n)     |
