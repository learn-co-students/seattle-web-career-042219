## TIPS Lecture

Technical Interview Practice for Students

This lecture covers technical interviews, whiteboarding, and algorithms.

What is a `technical interview`?
Usually in person with coders or project managers at a company. The idea is to see how you respond to questions. But more importantly, how you think and reason your ways through problems. General computer science questions and language specific questions may be asked.

What is `whiteboarding`?
The process of discussing code solutions, often on a whiteboard, in front of several people. This is designed to show the way that a person thinks about a specific problem. Often it is an algorithm.

What is an `algorithm`?
Wikipedia

In mathematics and computer science, an algorithm (/ˈælɡərɪðəm/ ( listen)) is an unambiguous specification of how to solve a class of problems. Algorithms can perform calculation, data processing, automated reasoning, and other tasks.

Algorithms are popular in technical interview whiteboarding portions.

## Example - Palindrome Finder

Here is an example of a palindrom finding algorithm.

Remember to reason out verbally your thought process. The actual writing on the board may be secondary in these interviews. The interviewers are trying to see if they are hiring a good communicator and a good software engineer.

The reasoning for this problem is: A palindrome is a word that is spelled the same backwards as forwards. So, reversing a string and comparing it to the original would be the best method.

Other related issues and problems may be: data given as uppercase, data as an integer etc.

Here are several sample solutions.

# Method 1

## With if else statement

```
def palindrome?(string)
  reversed_string = string.downcase.reverse
  if string.downcase == reversed_string
	 true
  else
	  false
end
```

## With ternary

```
def palindrome?(string)
  reversed_string = string.downcase.reverse
  string.downcase == reversed_string ? true : false
end
```

## With text

```
def palindrome?(string)
  reversed_string = string.downcase.reverse
  string.downcase == reversed_string ? "#{string} IS a palindrome" : "#{string} is NOT a palindrome"
end
```

## Easiest one line

```
def palindrome?(string)
  string.downcase == string.downcase.reverse
end

```

## Easiest, but more easily read in two lines

```
def palindrome?(string)
reversed_string = string.downcase.reverse
string.downcase == reversed_string
end

```

```

puts palindrome?('Anna')
puts palindrome?('Civic')
puts palindrome?('Kayak')
puts palindrome?('Level')
puts palindrome?('Madam')
puts palindrome?('Mom')
puts palindrome?('Noon')
puts palindrome?("racecar")
puts palindrome?("racecars")

```

# Method 2 With a Helper Method

```
def reverse_array(string)
    reverse_array = (1..string.length).map do |num|
        string[-num]
    end
    reversed_string = reverse_array.join
end
```

```
def palindrome2?(string)
    reverse_array(string) == string ? true : false
end
```

```
puts palindrome2?('Anna')
puts palindrome2?('Civic')
puts palindrome2?('Kayak')
puts palindrome2?('Level')
puts palindrome2?('Madam')
puts palindrome2?('Mom')
puts palindrome2?('Noon')
puts palindrome2?("racecar")
puts palindrome2?("racecars")
```

```

```

## Method 3 with a loop

```
def palindrome3?(string)
    array = string.split
    is_palindrome = true
    index=0
    loop do
        if index <= array.length
            if array[index] != array[(-index)-1]
                is_palindrome = false
                break
            end
        index+=1
        else
          break
        end
    end
    is_palindrome
end
```

```
puts palindrome3?('Anna')
puts palindrome3?('Civic')
puts palindrome3?('Kayak')
puts palindrome3?('Level')
puts palindrome3?('Madam')
puts palindrome3?('Mom')
puts palindrome3?('Noon')
puts palindrome3?("racecar")
puts palindrome3?("racecars")
```

## Method 4 Two Indexes

```

def palindrome4?(string)
    str=string.to_s.downcase
    i=0
    j=str.length-1
    while i < j
        if str[i] != str[j]
            return false
        end
        i+=1
        j-=1
    end
    true
end

puts palindrome4?('Anna')
puts palindrome4?('Civic')
puts palindrome4?('Kayak')
puts palindrome4?('Level')
puts palindrome4?('Madam')
puts palindrome4?('Mom')
puts palindrome4?('Noon')
puts palindrome4?("racecar")
puts palindrome4?("racecars")
```

```
puts palindrome4?('Anna')
puts palindrome4?('Civic')
puts palindrome4?('Kayak')
puts palindrome4?('Level')
puts palindrome4?('Madam')
puts palindrome4?('Mom')
puts palindrome4?('Noon')
puts palindrome4?("racecar")
puts palindrome4?("racecars")
```
