/*
Example: inserting key-value pairs into a hash map

The resulting map is basically like the object:
{
  "hello": 5,
  1000: [
    "this",
    "is",
    "fine"
  ],
  [[data: "alphabet"]]: 70
}

Where the thing in double brackets is a Node
*/

class Node {
  constructor(data) {
    this.data = data;
  }
}

const map = new Map();

map.set("hello", 5);
map.set(1000, ["this", "is", "fine"]);
const n = new Node("alphabet");
map.set(n, 70);

console.log("keys:", map.keys());
console.log("values:", map.values());
console.log();

/*
Example: getting the values for various keys
*/

console.log("value for key 'hello':", map.get("hello"));
console.log("value for key 1000:", map.get(1000));
console.log("value for key n:", map.get(n));
console.log();

/*
Example: checking whether various keys are in the map
*/
console.log("contains 'hello'?", map.has("hello"));
console.log("contains 'goodbye'?", map.has("goodbye"));
console.log();

/*
Example: removing a key-value pair
*/
console.log("Before:");
console.log("keys:", map.keys());
console.log("values:", map.values());
map.delete(1000);
console.log("After:");
console.log("keys:", map.keys());
console.log("values:", map.values());

/*
Exercise: given an array of things, find the one that appears an odd number of times

Example IO:
oddNumber([1,2,3,2,1])
=> 3
oddNumber([4,4,4,4,7,7,2,2,2])
=> 2
*/
