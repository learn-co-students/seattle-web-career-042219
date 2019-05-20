# Rails CRUD

In this lecture, we start with the familiar Sinatra "books" app and convert it into a Rails app

## SWBATs
 - [] Use the Rails routing mechanism
 - [] Write and test full CRUD controller actions
 - [] Understand strong params and how to use them
 - [] Write erb (embedded Ruby) views with Rails helpers
    - `form_for` vs. `form_tag`

### Additional SWBATs if we have time:
 - [] Understand how to test routes in the Rails console
 - [] Understand how to use partials to DRY up view code
 - [] Understand how to use filters to DRY up controller code

## Deliverables
 - [] Restful resource `Book` (attributes `author`, `title`, `snippet`) with full CRUD

## Resources
1. [Rails guide for `form_for`](https://guides.rubyonrails.org/form_helpers.html#binding-a-form-to-an-object)
2. [API documentation for `form_for`](https://api.rubyonrails.org/classes/ActionView/Helpers/FormHelper.html#method-i-form_for)
3. [Rails guide for strong params](https://guides.rubyonrails.org/action_controller_overview.html#strong-parameters)
4. [Rails guide for partials](https://guides.rubyonrails.org/layouts_and_rendering.html#using-partials)
5. [Rails guide for filters](https://guides.rubyonrails.org/action_controller_overview.html#filters)
6. Additional info about [Rails security](https://guides.rubyonrails.org/v5.2.3/security.html) (including the "CSRF" tag that the form helper generates)
7. The model version of "filters" are called ["callbacks"](https://guides.rubyonrails.org/active_record_callbacks.html) (don't worry about these yet, but you'll need them eventually)
