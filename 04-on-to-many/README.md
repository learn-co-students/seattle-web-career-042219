
## Review :
   - Hashes : { key: value}
   - Object : { attributes, behaviour/methods}
   Pet object.
   - Local, Instance and Class Variables;
   - No global Variables.
# One to Many Relationships
- Cohort 042219 `has-many` Students;
cohort.students <<Alex>, <Hanna>>
- Students `belongs-to` a Cohort;

## SWBATs
* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Practice passing custom objects as arguments to methods
* Demonstrate single source of truth
* Infer type of method (class or instance) through naming conventions
* Model :
  - components that interact with eachother
  - the whole shape of the project/object were working with.
  - representation of something in the real world.
  - template of the real world/object we are looking at.

## Notes
-  Attendance :
    - If you are leaving the floor let the instructors know. Usually, when students have questions, it's a great idea to collaborate and find answers from other students. We definitely encourage that during labs/pairings.
    - Also, it's required to be on campus until 6PM. If there is an emergency or an event you need to leave early for, please let us know and we can track what hours are missed.
- Labs :
  - If there are bugs in labs that you think should be flagged, send a slack message Erin, Greg or me specifically. We can take a look at it and help debug on a one-on-one basis.

## Deliverables

* Create a User class. The class should have these methods:
  * `initialize` which takes a username and have
  * a reader method for the username
  * `tweets` that returns an array of Tweet instances
  * `post_tweet` that take a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * Have a mini breakout and see which methods would be instance vs class.
  * Tweet has a method `message` that returns a string - return the tweet's message ( reader/writer method)  
  * `user` that returns an instance of the user class - return's the user for that tweet (reader/writer method)
  * `Tweet.all` that returns all the Tweets created. - collecting all the tweets as you make them into the all class variable.
  * `Tweet#username` that returns the username of the tweet's user -> instance of the user that's the tweet is associated with.
