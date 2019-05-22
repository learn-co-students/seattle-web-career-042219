# Rails Forms and Validations

## SWBATs
 - [] Explain the purpose of validations
    - Why do we need them?
    - Where are they triggered?
 - [] Understand the `valid?` method
    - It's more complicated than just returning a boolean!
 - [] Describe techniques for validating different data types
    - Caution: boolean and existence validator (`blank?` method)


### Additional SWBATs if we have time
 - [] Strategize for how to communicate validation failures to the user
    - The easiest way: fail silently
    - The ok way: render the new form from the create action
    - The best way: store the information in the `flash` hash
      `flash[:errors] = @my_model.errors.full_messages`
 - [] Understand how to use partials to DRY up view code
 - [] Understand how the `build` ActiveRecord operation works

## Deliverables
 - [] Build a resource with at least one string, integer, and boolean attribute
 - [] For that resource, build routes, controller actions, and views for:
    - `index`
    - `show`
    - `new`
    - `create`
 - [] Add at least one validation for each attribute of the resource

## Resources
1. [Rails guide for validations](https://guides.rubyonrails.org/active_record_validations.html)
2. [Helpful blog post about validations](https://hackernoon.com/performing-custom-validations-in-rails-an-example-9a373e807144)
3. [Rails guide for flash hash](https://guides.rubyonrails.org/action_controller_overview.html#the-flash)
4. [Rails API docs for flash hash](https://api.rubyonrails.org/classes/ActionDispatch/Flash.html)
5. [Rails guide for partials](https://guides.rubyonrails.org/layouts_and_rendering.html#using-partials)
6. [Rails guide for associations (search for "build")](https://guides.rubyonrails.org/association_basics.html)
