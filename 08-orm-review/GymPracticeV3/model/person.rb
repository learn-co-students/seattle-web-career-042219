class Person

  attr_accessor :name
  attr_reader :id, :gym_id

  @@all = []

  def initialize(name, gym_id, id=nil)
    @id = id
    @gym_id = gym_id
    @name = name
    @@all << self
  end

  #would access these instance
  def self.instance_all
    @@all
  end

  def self.create_table
    sql = <<-SQL
      CREATE TABLE IF NOT EXISTS people(id INTEGER PRIMARY KEY, name TEXT, gym_id TEXT);
    SQL
    DB[:conn].execute(sql)
  end

  #READ
  def self.all
    sql = <<-SQL
      SELECT * FROM people;
    SQL
    DB[:conn].execute(sql)
  end

  def self.find(id)
    sql = <<-SQL
      SELECT * FROM people WHERE id = ?;
    SQL
    DB[:conn].execute(sql,id)
  end

  def update (id,column, new_value )
    sql = <<-SQL
      UPDATE people SET ? = ? WHERE id = ?
    SQL

    DB[:conn].execute(sql, column, new_value, id)
  end

end
