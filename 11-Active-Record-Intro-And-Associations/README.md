## SWBATs
 - [x] How to use Active Record in your code
 - [x] Active Record Migrations
 - [x] Methods we have used from Active Record


## Deliverables
- [x] creates pokemon table
- [x] is initialized with keyword arguments of id, name, type and hp
- [x] saves an instance of a pokemon with the correct id
- [x] finds a pokemon from the database by their id number and returns a new Pokemon object
- [x] alters Pikachu's hp to 59
- [x] alters Magikarp's hp to 10
## Part 2
- [ ] Let's add a trainer!
- [ ] Define the model


## References
- https://guides.rubyonrails.org/active_record_basics.html#create

## Basic Commands

##### Connection syntax
```Ruby
ActiveRecord::Base.establish_connection ({
  adapter: 'sqlite3',
  database: 'db/pokemon.db'
  })
```

##### Required Gems
```Ruby
gem "pry"
gem 'sqlite3'
gem 'rake'
gem 'sinatra-activerecord'
gem 'require_all'
```
##### Active Record Logger for SQL Commands
```Ruby
ActiveRecord::Base.logger = Logger.new(STDOUT)
```
