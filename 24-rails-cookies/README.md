# Discussion
1. What do mean when we say http is stateless.
  - New information
  - Static, and needs something like JS to become variables that can have durable state.
  - after the life of the request cycle the information passed through doesn't exist.

2. What are the 3 hash-like structures that Rails provides us.
  - flash - error messages. Only lasts redirect call.
  - cookies - persist data between request past the lifecycle of the request and response.
  - session - more secure than plain cookies. will be ecrypted, so passwords, user information.

3. What is a session. Before your flatiron life.

# Rails Quest
We have a pre-built trivia app which presents the user with questions in succession, and allows them to answer.
We can check in our controller whether the user answered correctly or not, but how can we get the server to 'remember' how many questions a user has answered  correctly for as long as they are on the site?

## Deliverables
* Add a feature which displays the number of questions a user has answered correctly
* Add a message which tells the user whether or not they got the last answer correct

## SWBATs
* cookies
* session
* flash

## External Resources:
- [Rails Docs on Sessions](https://guides.rubyonrails.org/security.html#sessions)
- [Wiki Page on HTTP Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
