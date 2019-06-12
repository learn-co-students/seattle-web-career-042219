# - Bubble Sort Pseudo Code

### https://en.wikipedia.org/wiki/Bubble_sort

Take an array.
Make a counter if you want to.
Loop through the array. in that loop have:
A second loop that loops through the array starting at array[1].
If the value of array[0] is greater than array[1]
Switch array[0] to a temporary variable
Switch array[1] to the position at array[0]
Switch the temp to array[1]
Repeat until the end of the array
Increment the first loop.
Repeat the second loop again until its end.
Increment the first loop again until one less than array length.
Stop, return new sorted array.

# Selection Sort in Pseudo Code

### https://en.wikipedia.org/wiki/Selection_sort
Take an array
Maybe make a counter
Make one loop that loops to the end of the array - 1. This loop looks for the index of the minimum value.
Make a new variable that stores index of the minimum value. Not the value itself
Make a second loop.
If the value of the array at the given index in the second loop is less than the value of the array at the minimum index, change the value of the minimum index to the in the current array(j).
When the second loop finishes, compare values as to where to insert
if i itself is not already the minimum:
Assign a temporary variable to array[i],
Assign array[i] to array[min]
Assign array[min] to the temp variable.
So array[j] and array[i] are swapped
Increment i and start again.
Finish the top loop.
Return sorted array.

#### Bubble Sort

Ruby
```
#  ruby Sorting_Lecture/bubble_sort.rb

require "byebug"
def bubble_sort(array)
    counter = 0
    (array.length - 1).times do |i|
        (array.length - 1 - i).times do |j|
            if array[j] > array[j + 1]
                counter += 1
                puts "i= #{i}"
                puts "j= #{j}"
                puts "at iteration #{counter} the array is #{array}"
                # ruby can do
                # array[j], array[j+1]  = array[j+1], array[j]
                # long way for educational purposes
                temp  = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                puts "==========================="
                puts ""
            end
        end
    end
    print array
end

array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
# unsorted, worst case scenario => 45
# array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# sorted, best case scenario => 0
# array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
# random => 21

puts bubble_sort(array)

```

JS
```
// const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// unsorted, worst case scenario => 45
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sorted, best case scenario => 0
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// random => 21
// const array = [5, 4, 3, 2, 1];
// => demo  array
function bubbleSort(array) {
  let counter = 0;
  // a counter for demonstration purposes. Not necessary
  for (let i = 0; i < array.length - 1; i++) {
    // make one loop from zero to 10
    // increment this loop when the one below it is done
    console.log("+++++++++++++++++++");
    for (let j = 1; j < array.length; j++) {
      //  make a second loop from 1 to 10
      // increment this loop every time
      if (array[j - 1] > array[j]) {
        // if array[0] > array[1] etc..... OR
        // if the array at this index is LESS than the one behind it...
        // no else. do nothing
        let temp = array[j - 1];
        // initialize a temporary variable to stash array[j-1], the bigger one
        array[j - 1] = array[j];
        // assign the space where the bigger one was to the smaller one
        array[j] = temp;
        // assign the smaller one to the bigger one
        counter++;
        //increment the counter
        console.log("i=", i);
        console.log("j=", j);
        console.log(`after iteration ${counter}, the array is   ${array}`);
        console.log("====================================");
      }
    }
  }
  console.log(`The final array = ${array}`);
  return array;
  // sorted
}

console.log(bubbleSort(array.slice()));
// .slice() returns a copy of the original array with nothing sliced.

```

#### Selection Sort

Ruby

```
#  ruby Sorting_Lecture/selection_sort.rb

require "byebug"
def selection_sort(array)
    counter = 0
    (array.length - 1).times do |i|
        min = i
        # (array.length - 1 - i).times do |j|
        for j in (i + 1)..array.length-1
            if array[j] < array[min]
                counter += 1
                puts "i= #{i}"
                puts "array[i]= #{array[i]}"
                puts "j= #{j}"
                puts "array[j]= #{array[j]}"
                puts "min= #{min}"
                puts "at iteration #{counter} the array is #{array}"
                min = j
                puts "========================================="

                puts ""
            end
        end
        if (i != min)
            temp = array[i]
            array[i] = array[min]
            array[min] = temp
            counter +=1
            puts "min index(not value) = #{min}"
            puts "i= #{i}"
            puts "array[i]= #{array[i]}"
            puts "at iteration #{counter} the array is #{array}"
            puts "================================"
            puts ""
        end
    end
    puts "the final array is:"
    print array
end

array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
# unsorted, worst case scenario => 45
# array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# sorted, best case scenario => 0
# array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
# random => 21

puts selection_sort(array)


```

JS
```
// const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// unsorted, worst case scenario => 45
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sorted, best case scenario => 0
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// random => 21
// const array = [5, 4, 3, 2, 1];
// => demo  array
function bubbleSort(array) {
  let counter = 0;
  // a counter for demonstration purposes. Not necessary
  for (let i = 0; i < array.length - 1; i++) {
    // make one loop from zero to 10
    // increment this loop when the one below it is done
    console.log("+++++++++++++++++++");
    for (let j = 1; j < array.length; j++) {
      //  make a second loop from 1 to 10
      // increment this loop every time
      if (array[j - 1] > array[j]) {
        // if array[0] > array[1] etc..... OR
        // if the array at this index is LESS than the one behind it...
        // no else. do nothing
        let temp = array[j - 1];
        // initialize a temporary variable to stash array[j-1], the bigger one
        array[j - 1] = array[j];
        // assign the space where the bigger one was to the smaller one
        array[j] = temp;
        // assign the smaller one to the bigger one
        counter++;
        //increment the counter
        console.log("i=", i);
        console.log("j=", j);
        console.log(`after iteration ${counter}, the array is   ${array}`);
        console.log("====================================");
      }
    }
  }
  console.log(`The final array = ${array}`);
  return array;
  // sorted
}

console.log(bubbleSort(array.slice()));
// .slice() returns a copy of the original array with nothing sliced.

```
