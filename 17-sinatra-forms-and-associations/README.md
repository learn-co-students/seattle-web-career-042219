## SWBATs

### High-level development practices
 - [x]Work within a nested file structure for multiple models
    - Conventional view names (index/show/new/edit)
    - Multiple controllers
 - [x]Test controller actions with Postman
    - Manual redirect (difference between `erb` and `redirect`) --> we did not get to this
 - [x]Know which questions to ask when given a new user story
    1. What new model(s) do I need?
       - New class?
       - New migration? (i.e. does the schema need to change?)
       - Associations?
       - Seeds?
    2. What route(s) do I need?
    3. What controller action(s) do I need?
       - In Sinatra, this means the code directly below the route, but in Rails it will be a separate file
    4. What view(s) do I need?

### ActiveRecord associations
 - [x]Add a new ActiveRecord model and associate it with an existing model
 - [x]Display information about an associated model
 - [x]Allow the user to make a new instance of an ActiveRecord model that belongs to another model

### Debugging Strategies
 - []Determine when gem configurations are the problem, not your code --> we did not get to this
 - [x]Understand why a Ruby object appears on the page as just a "#"

## Deliverables for today's lecture
- [x]**As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books. (For the purpose of this project, an author has many books and a book belongs to one author.)**
  1. Models?
   - New class Author
   - New migration to add authors table
   - New migration to make author_id a foreign key
   - Author `has_many` books, Book `belongs_to` author
   - Modify seeds
  2. Routes?
   - GET 'authors/id'
  3. Controller actions?
   - `@author = Author.find(params[:id])`
   - `erb :show`
  4. Views?
   - Make views/authors/show.erb
- [x]**As a site visitor, I should be able to see a list of authors**
  1. Models?
   - no
  2. Routes?
   - GET '/authors'
  3. Controller actions?
   - `@authors = Author.all`
   - `erb :index`
  4. Views?
   - Make views/authors/index.erb
- []**As a site visitor, I should be able to create a new book and associate it with an existing author.**
   1. Models?
    - no
   2. Routes?
    - no
   3. Controller actions?
    - change post '/books' behavior
   4. Views?
    - no

 ## Resources
 1. Writing a migration to rename column and change column type: http://codkal.com/how-rename-database-column-rails-5-migration/
 2. HTML form elements: https://www.w3schools.com/html/html_form_elements.asp
