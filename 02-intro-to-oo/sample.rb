require 'pry'

class Pet

  attr_accessor :name, :owner, :type, :sound, :color
  # def name=(name) && def name


  #attr_reader
  # def name()
  # end

  #attr_writer
  # def name=()
  # end


  #Class variable
  #pet1, pet2, pet3, pet4.
  @@all = []

  def initialize(name, owner, type, sound, color)
    #local to the method
    #local variable
    name = name
    #local to this class;
    #instance variable
    @name = name
    @owner = owner
    @type = type
    @sound = sound
    @color = color
    binding.pry
    @@all << self
    binding.pry
  end

  def walk
    name
  end

end
pet1 = Pet.new("Monkey" , "Hanna" , "Pitbull" ,"Loud", "Black")

#
# def initialize(argument)
#   @argument = argument
# end
  # attr_accessor :name
  # attr_write :name
  # def name=(name)
  #   @name = name
  # end
  #
  # def name
  #   @name
  # end
  #
  # def owner=(owner)
  #   @owner = owner
  # end
  #
  # def owner
  #   @owner
  # end
  #
  # def type=(type)
  #   @type = type
  # end
  #
  # def type
  #   @type
  # end

#
# pets = [
#    {name: "Monkey" ,
#     owner: "Hanna" ,
#     type: "Pitbull" ,
#     sound: "Loud",
#     color: "Black"
#   },
#   {name: "Emma" ,
#    owner: "Ella" ,
#    type: "Golden Doodle" ,
#    sound: "Bark",
#    color: "Black"
#  },
#  {name: "Cooper" ,
#   owner: "DaNeil" ,
#   type: "Tabby Cat" ,
#   sound: "Meow",
#   color: "Black"
# },
# {name: "Charlie" ,
#  owner: "Dang" ,
#  type: "Bearded Dragon" ,
#  sound: "ZZZZZzzz",
#  color: "Black"
# }
# ]
# binding.pry
# puts pets

#
