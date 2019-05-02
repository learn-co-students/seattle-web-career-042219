# Database:
- Why is SQL Useful
1. Store data
2. Accessible by a lot more people.
3. Filter data
  - Ruby is not optimized for run a select
  - It is more beneficial to have SQL to run the queries
  - SQL is more powerful in this.
4. Life time of data is persisted.

# Organizing our data/models:
# ORMS - Object Relationship/Relational Mapping
# Databse
# Table ->  Class/Model - Rows -> Instances , Columns -> Attribute
# CRUD Operations;

# CRUD REVIEW
- Create
SQL ->
  - CREATE TABLE books
    def Tweet.create
      CREATE TABLE books
    end
  - INSERT INTO books(title, author, num_pages) VALUEs(..,..,..)
    def add_to
      INSERT INTO books(title, author, num_pages) VALUEs(..,..,..)
    end
Ruby ->
- Read
SQL ->
  SELECT * FROM books
  Ruby -> Tweet.all
- Update
SQL ->
  UPDATE
  ALTER
- Delete
SQL ->
  DROP
  DELETE FROM books WHERE books.id == 5

#Books/Author
- books
- author

#Tweets/User/Tags


# Intro to ORMs (Object Relational Mappers)

A tweet belongs to a user and has some message content - must have user_id

The belongs_to must have a user_id on it

A user has a username, and has many tweets

A tweet can have many tags and a tag can have many tweets
