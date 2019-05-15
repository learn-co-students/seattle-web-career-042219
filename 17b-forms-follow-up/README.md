## SWBATs

This lecture was kind of a grab bag of topics that didn't quite get covered in the previous lecture

 - [x] Understand the difference between `erb` and `redirect` (with Postman)
 - [x] Determine when gem configurations are the problem, not your code
    - `Gem::LoadError: You have already activated rack 2.0.7` --> look at the Gemfile.lock to find the Bundler version.  If it's less than 2.0, delete the Gemfile.lock and run `bundle install` again
    - 404 file not found --> this means that the route doesn't exist (either you typed the URL wrong in the client or the server routing is messed up)
    - 500 internal server error --> this means that route exists the server crashed while attempting to respond to your request (example of dividing by zero). the problem is most likely in your controller, but it also might be in your view.
 - [x] Implement a drop-down list to create an associated object
    - Modifying views/books/new.erb
    - Remove the text input field (params hash key `:author`, where previously the user had to enter an ID)
    - Add a `<select>` tag.  This is the drop-down container where all of the options will go.  It needs to have `name="author_id"` so that the params hash key will be `:author_id`.
    - Inside the `<select>` tag, loop through all of the authors.  Right now it's kind of hacky and just selects all of the authors in the DB, but usually we would want to do this in the controller to select whichever set of authors are relevant.
    - For each author, make an `<option>` tag.  Its value needs is `author.id` because the ID is what we want to send back in the params hash, whereas its inner text (the part between the opening and closing tag) is `author.name` because that is what we want to display to the user.  It would still work but be confusing to the user if the inner text was `author.id` (it would be a drop-down of numbers), and it would put the wrong thing in the params hash if the value was `author.name`
    - We also modified controllers/books_controller.rb so that POST '/books' would expect a params hash with key `:author_id` instead of `:author`

### Bonus if we have time
 - [] Pig Latinizer


## Resources
 1. Writing a migration to rename column and change column type: http://codkal.com/how-rename-database-column-rails-5-migration/
 2. HTML form elements: https://www.w3schools.com/html/html_form_elements.asp
