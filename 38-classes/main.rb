class Animal
  attr_reader :name

  def initialize(name)
    @name = name
    self.secret_method
  end

  private

  def secret_method
  end
end

class Bird < Animal
  def fly
    return "flying!"
  end
end

aa = Animal.new("cow")
aa.name
aa.secret_method