# Enumerables Lecture

## General tips.

First off, try not to use google search. I notice that it usually returns Ruby 2.2.0. This is not the most recent one. I would bookmark the 2.6.1 documentation and use that in your autocomplete.

A method that ends with a question mark returns a BOOLEAN.
A method in basic Ruby that ends with an exclamation point alters or mutates the original array. This is generally not preferred.

Examples:

```
def app(ar)
    ar.slice!(0,2)
    ar
end

app([1,2,3,4,5])
=> [3, 4, 5]
```

```
def app(ar)
    ar.slice(0,2)
        ar
    end
app([1,2,3,4,5])
=> [1, 2, 3, 4, 5]
```

So the method that uses the exclamation point at the end does alter the original array.

At the beginning, it returns the opposite.

```
def app(ar)
    ar.map do |num|
        num
    end
end

app([1,2,3,4,5])
=> [1, 2, 3, 4, 5]
```

```
def app(ar)
    ar.map do |num|
        !num
    end
end

app([1,2,3,4,5])
=> [false, false, false, false, false]
```

SO, at the BEGINNING of a method or enumerator, ! behaves just like it does normally.
AT THE END of a method (and not every method can do this) it alters the original enumerable.

## Aliases

`.inject` and `.reduce`
`.detect` is an alias for `.find`.
`.collect` is an alias for `.map`.
`.length` is an alias for `.size`.
`.filter`is an alias for `.select`.

`.find_all` and `.select` are very similar. They are almost aliases.

## About the .[] method

```
x={"a":"1"}
ar=[1,2,3]

ar[“a”]
=> TypeError (no implicit conversion of String into Integer)
```

What does this mean? The array[] method only takes an integer. By passing “a”, clearly we are looking to find the value of a hash. But this is wrong because we are looking in an array

Instead of saying “you are looking for a hash in an array. You can’t do that.” Ruby gives a cryptic, poorly worded error

## .map vs .each

`.map` is better than `.each`. It is more professional

```
def app(ar)
    newAr=[]
    ar.each do |num|
        newAr << num \* 2
    end
    newAr
end

app([1,2,3,4,5])
=> [2, 4, 6, 8, 10]
```

This is called sandwich code. The newAr on the top and the bottom are the slices of bread. It is best to be avoided. It is harder to read, longer, and more error prone than

```
def app(ar)
    ar.map do |num|
        num*2
    end
end

app([1,2,3,4,5])
=> [2, 4, 6, 8, 10]
```

## .select

Returns a new array containing all elements of array for which the given block returns a true value.

```def app(ar)
    ar.select do |num|
    num.odd?
    end
end

app([1,2,3,4,5])
=>[1,3,5]
```

```
def app(ar)
    ar.select do |num|
        !num.odd?
    end
end

app([1,2,3,4,5])
=> [2,4]
```

## .select!

```
def app(ar)
    ar.select! do |num|
        num.odd?
    end
end

app([1,2,3,4,5])
=> [1,3,5]

```

Notice here that when I return the original array, it has been altered.

```
def app(ar)
    ar.select! do |num|
        num.odd?
    end
    ar
end

app([1,2,3,4,5])
=> [1,3,5]
```

## .reject is the opposite of .select.

```
def app(ar)
    ar.reject do |num|
        num.odd?
    end
end

app([1,2,3,4,5])
=> [2,4]
```

SAME AS

```
def app(ar)
    ar.select do |num|
        !num.odd?
    end
end

app([1,2,3,4,5])
=> [2,4]
```

## .find_all and .select

`.find_all` and `.select` are very similar
For arrays they are the same
For hashes they return different values
`.find_all` returns an array of answers
`.select` returns the original item. Which, in the case of hashes, is a hash.

```
def app
    my_hash={"one" => "1", "two" => "2", "three" => "3", "four" => "3"}
    # my_hash.find_all do |key, value|
    # my_hash.select do |key, value|
        value =="3"
    end
end

find_all => [["three", "3"], ["four", "3"]]
select => {"three"=>"3", "four"=>"3"}
```

## Various methods

`.all?`Returns true if EVERY item is neither nil or false.
`.any?` Returns true if ONE or more item is neither false nor nil.
`.one?` Returns true if ONE AND ONLY ONE item is neither false nor nil.
`.none?`Returns true if NO element returns true.

```
def app(ar)
    ar.none? do |num|
        num>4
    end
end

app([1,2,3,4,5])
=> false
.all? => false
.any? => true
.none? => false
.one? => false
```

`.include?` Returns true if ANY item is included.

```
def app(ar)
    ar.include?(3)
end

app([1,2,3,4,5])
=> true
```

`.uniq` removes duplicates.

```
def app(ar)
    ar.uniq
end

app([1,2,3,4,5,5])
=> [1, 2, 3, 4, 5]
```

`.compact` removes nils.

```
def app(ar)
    ar.compact
end

app([1,2,3,4,5, nil, nil])
=> [1, 2, 3, 4, 5]
```

`.take`takes the first x from an array.

```
def app(ar)
    ar.take(3)
end

app([1,2,3,4,5, nil, nil])
=> [1, 2, 3]
```

`.sum`adds up an enumerable.

```
def app(ar)
ar.sum
end

app([1,2,3,4,5])
=> 15
```

`.flatten` removes nested arrays.

```
def app(ar)
    ar.flatten
end

app([1,2,3,4,5,[6,7]])
=> [1, 2, 3, 4, 5, 6, 7]
```

## .sort

`.sort`
Must pass 2 arguments.
<=> is flying saucer operator, a good shortcut.

```
def app(ar)
    ar.sort do |a, b|
        a<=>b
    end
end

app([5,4,3,2,1])
=> [1, 2, 3, 4, 5]
```

If no loop, there is a default behavior.

```
def app(ar)
    ar.sort
end

app(["the", "an", "a"])
=> ["a", "an", "the"]
```

`.sory_by`

```
def app(ar)
    ar.sort_by do |word|
        word.length
    end
end

app(["the", "an", "a"])
=> ["a", "an", "the"]
```

`.min`and `.max`are same syntax as `.sort`, but return only one answer, the max or min.
Similar to SQL query sort asc or desc limit 1.

```
def app(ar)
    ar.minmax do |a, b|
        a<=>b
    end
end

app([5,4,3,2,1])
=> [1, 5]
```

## Various other methods

`.max_by`, `.min_by` and `.minmaxby` are same syntax as `.sort_by`.

```
def app(ar)
    ar.minmax_by do |word|
        word.length
    end
end

app(["the", "an", "a"])
=> ["a", "the"]
```

`.each_with_index`

Notice that index starts at zero. You can manually add +1 in the string interpolation to offset it.

```
def app(ar)
    ar.each_with_index do |word, index|
        puts "#{index} is #{word}"
    end
end

app(["the", "an", "a"])

0 is the
1 is an
2 is a
=> ["the", "an", "a"]
```

vs.

`.with_index`

This can be used with .map to provide an index. Or other functions. It also takes an optional parameter of a starting index.

```
def app(ar)
    ar.each.with_index(1) do |num, index|
        puts “This is #{index}. The number is #{num}"
    end
end
```

Conditional assignment operator.

a ||= b
Means
a || (a = b)
“ A, or if a is false or nil or undefined, evaluate b and set the RESULT to a”
