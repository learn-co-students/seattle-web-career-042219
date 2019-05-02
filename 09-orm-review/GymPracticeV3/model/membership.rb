attr_accessor :name, :location
attr_reader :id

#Objects and instances that are going to be stored
@@all = []

def initialize(user_id, gym_id, id=nil) #sgym, person
  # ids referencing things in the database
  @user_id
  @gym_id
  @@all << self
end

#would access these instance
def self.instance_all
  @@all
end

def self.create_table
  sql = <<-SQL
    CREATE TABLE IF NOT EXISTS memberships(id INTEGER PRIMARY KEY, gym_id INTEGER,  TEXT, person_id TEXT);
  SQL
  DB[:conn].execute(sql)
end

#READ
def self.all
  sql = <<-SQL
    SELECT * FROM memberships;
  SQL
  DB[:conn].execute(sql)
end


def self.find(id)
  sql = <<-SQL
    SELECT * FROM memberships WHERE id = ?;
  SQL
  DB[:conn].execute(sql,id)
end

def update (id,column, new_value )
  sql = <<-SQL
    UPDATE memberships SET ? = ? WHERE id = ?
  SQL

  DB[:conn].execute(sql, column, new_value, id)
end
