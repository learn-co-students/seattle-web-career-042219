## Objectives
- Understand, theoretically, how authentication and authorization work
- Sign in vs sign up
- Go over sessions, cookies, and implement log in, and log out

## Authentication && Authorization
1. Security
2. Complex Validation
3. Making sure they are who they say they are.
4. Authentication : Login page, logout page
5. Authorization : logic behind what the use sees and doesn't throughout the page.

## User Stories

1. As a registered user, I should be able to log in by providing my username (no passwords yet) :
  - Does my schema need to change?
    - not the same model as a student.
    - add a new model
  - Do I need any additional routes/views/models?
    - add new resources in


2. As an un-authenticated user, I should not be able to see a list of students and information about an individual student.

3. As an authenticated user I should be able see a list of students and information about an individual student plus create a new student.

4. If an un-authenticated user tries to see the new student form, they should be redirected to the login page.
