#- Intro to Rails Lecture

### - As compared to Sinatra

Migrations are the same

Views are now named .html.erb and not .erb

Routes are kept in 2 places

Controller and
Config/routes.rb

## - `Rails` gives us the help commands

`rails routes` or `rake routes` to see a list of all routes
`rails console` to access the console
`rails s` to launch the server on port 3000

## - Generators

5 generators: Migration, Model, Controller, Resource, and Scaffold
Scaffold is illegal for this class. It gives too many extra files and is not educational.

`--no-test-framework` flag
Removes extra testing software.

No data type given: defaults to string.

### - Migration Generators

`rails g migration create_author name genre bio:text is_famous:boolean age:integer --no-test-framework`

Creates a migration only

Can generate create, update, or rollback migrations.
Always double check to see that your migration was created correctly.

### - Model Generators

`rails g model Author name genre bio:text is_famous:boolean age:integer --no-test-framework`

Generates a migration and a model.

### - Controller Generators

`rails g controller dogs new create update edit destroy show index --no-test-framework`

Generates:
A controller with the given routes
Config/routes.rb list of routes
A directory of matching views
Sass
Coffescript Js stuff

### - Resource Generators

`rails g resource Author name genre bio:text is_famous:boolean age:integer --no-test-framework`

Generates:
Migration
Model
Controller
Config/routes. resources, which is all 7 routes
View directory, blank, with no views
Coffee script
Sass

Note: We get resources :dogs and not 7 get routes like with the controller generator.

### - Scaffold Generators

`rails generate scaffold Author name genre bio:text is_famous:boolean age:integer --no-test-framework`

Generates everything. Illegal.

No generator is capable of making only views.

### - Quick Scaffold Demonstraion

`cd blog_app`
`rails generate scaffold Post title:string content:text author:string --no-test-framework`
`rake db:migrate`
`rails server`
`localhost:3000/posts`
