# Rails Forms and Associations

Today we are converting the "books" application to a "books and authors" application.  The Sinatra version from last week is also included in this repo for reference.

## SWBATs
 - [] Refresher: Add a new ActiveRecord model and associate it with an existing model
 - [] New concept: `dependent: :destroy`
 - [] Refresher: Display information about an associated model
 - [] Allow the user to make a new instance of an ActiveRecord model that belongs to another model, this time in Rails
    - Using the `collection_select` Rails form helper


### Additional SWBATs if we have time:
 - [] Understand how to use partials to DRY up view code

## Questions to ask
1. What model(s) do I need?
   - New class?
   - New migration? (i.e. does the schema need to change?)
   - Associations?
   - Seeds?
2. What route(s) do I need?
3. What controller action(s) do I need?
4. What view(s) do I need?

## Deliverables
 - [] **As a site visitor, I should be able to view a single author.  I should be able to see the author's name and count of books. (For the purpose of this project, an author has many books and a book belongs to one author.)**
 - [] **As a site visitor, I should be able to see a list of authors**
 - [] **As a site visitor, I should be able to create a new book and associate it with an existing author.**

## Resources
1. [Using a Rails generator to make a migration](https://guides.rubyonrails.org/active_record_migrations.html#creating-a-migration)
2. [Rails guide for associations and `dependent: :destroy`](https://guides.rubyonrails.org/association_basics.html)
3. [Additional (old) explainer on `dependent: :destroy` and referential integrity](https://thoughtbot.com/blog/referential-integrity-with-foreign-keys)
4. [Rails guide for `form_for`](https://guides.rubyonrails.org/form_helpers.html#binding-a-form-to-an-object)
5. [API documentation for `form_for`](https://api.rubyonrails.org/classes/ActionView/Helpers/FormHelper.html#method-i-form_for)
6. [API documentation for `collection_select`](https://api.rubyonrails.org/v5.2.3/classes/ActionView/Helpers/FormOptionsHelper.html#method-i-collection_select)
7. [Rails guide for partials](https://guides.rubyonrails.org/layouts_and_rendering.html#using-partials)
