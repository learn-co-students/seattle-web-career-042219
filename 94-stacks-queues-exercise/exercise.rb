# Write a function that accepts a string that represents a piece of code,
# and returns true or false depending on whether the parentheses and brackets are
# balanced correctly
#
# Example IO:
# balanced("bots.map(bot => { return bot.name })")
# => true
# balanced("bots.map(bot => { return bot.name )}") // there is a closing ")" before the closing "}"
# => false
# balanced("((({{{{asdfghjkl;}}}})))")
# => true
# balanced("{()}}")
# => false
#
# HINT: we introduced stacks and queues last lecture 🤔
def balanced(string)
  # not really a stack, but it could be!
  stack = []
  string.each_char do |chr|
    if chr == "{" || chr == "("
      # opening brackets get added to the stack
      stack << chr
    elsif chr == "}"
      if stack.last == "{"
        # success, they match so far
        stack.pop
      else
        # found a mismatch
        return false
      end
    elsif chr === ")"
      if stack.last == "("
        # success, they match so far
        stack.pop
      else
        # found a mismatch
        return false
      end
    # note: we don't need an else, since we're ignoring non-bracket characters
    end
  end
  # all brackets were matched if there's nothing left in the stack
  return stack.length == 0
end

puts balanced("bots.map(bot => { return bot.name })")
puts balanced("bots.map(bot => { return bot.name )}")
puts balanced("((({{{{asdfghjkl;}}}})))")
puts balanced("{()}}")
