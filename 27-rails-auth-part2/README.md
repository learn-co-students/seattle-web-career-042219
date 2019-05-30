## Objectives
- encryption
  - Changing data that you're storing
  - different format
  - still can reference late.
  - encryption key that will code that value into a hash.
- Discuss different encryption and hashing schemes
  - use `Digest::SHA256.base64digest`
    - deterministic: same input => same output
- introduce `bcrypt`
  - `has_secure_password` macro
- Augment a user model in rails using `bcrypt`

## Rules of Auth
- install gem
- you don't store passwords as plain text
  - add a password_digest column
  - add `has_secure_password` to the model with the password
- at signin use the bcrypt authenticate method to confirm that the password matches
- password hashing is one-way encryption (we never decrypt it)

## Authentication
- confirming identity with username and password

## Resources
- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
