class Musical
  attr_accessor :name
  attr_reader :setting_city

  @@all = []

  def initialize(name, setting_city)
    @name = name
    @setting_city = setting_city

    @@all << self
  end

  def self.all
    @@all
  end

  def perform_in_theater(theater, date)
    Performance.new(date, self, theater)
  end

  def performances
    Performance.all.select do |performance|
      performance.musical == self
    end
  end

  def theaters
    # shortest version:
    # performances.map { |p| p.theater }.uniq

    # sandwich code (BAD)
    # theater_list = []
    # Performance.all.each do |performance|
    #   if performance.musical == self
    #     theater_list << performance.theater
    #   end
    # end
    # theater_list

    performances.map do |performance|
      performance.theater
    end.uniq
  end

  # note: this was added after the review session ended
  def self.all_introductions
    # it makes sense for this to be "each" rather than a higher-order iterator
    # like "map" because we are printing each thing, not making a new array
    self.all.each do |musical|
      puts "Welcome, this is #{musical.name}, set in #{musical.setting_city}"
    end
  end
end
