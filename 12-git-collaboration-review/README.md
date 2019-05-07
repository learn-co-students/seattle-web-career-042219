# GitHub Collaboration Walkthrough

This lecture is a walkthrough of how to (and how not to) collaborate with GitHub

## SWBATs
 - [x] Understand the difference between a fork and a branch
 - [x] Understand the difference between clone and pull
 - [x] Understand the purpose of a "feature branch"
 - [x] Understand how to avoid merge conflicts
 - [x] Understand how to handle merge conflicts when they happen

## Part 1: When Things Go Right

*Narrative:* Greg and Erin are collaborating on a project that uses an API and gets input from the command line.  We have agreed that Erin is going to work on the API part, and Greg is going to work on the CLI part.  In parallel we make feature branches, commit our changes, then create pull requests against the `master` branch.  Both pull requests are successfully able to merge.

### Part 1: Setup

For the purposes of this example, we are using the "Star Wars API" lab.

 - [x] Fork the "template"/"scaffold" from learn-co
    - In Chrome, go to the [lab on GitHub](https://github.com/learn-co-students/apis-and-iteration-seattle-web-career-042219) and click the "Fork" button in the upper right part of the page
 - [x] Add Greg as a collaborator
    - From the [forked repo](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-042219):
      1. Click on the "Settings" tab
      2. Click on "Collaborators" in the menu on the left
      3. Type Greg's username (with no @ sign) into the search box, select the result with his photo, and click "Add collaborator"
 - [x] Download the forked repo into a local directory and change to that directory
  1. `git clone https://github.com/hoffm386/apis-and-iteration-seattle-web-career-042219.git`
  2. `cd apis-and-iteration-seattle-web-career-042219`

### Erin's Feature Branch Part 1: Adding API Functionality

*Narrative:* Erin makes a new feature branch to get the relevant character movie data from the API.  (Right now it is connecting to the API but not getting any of the relevant info yet.)

 - [x] Make a new feature branch
   - `git checkout -b api-communicator`
 - [x] Make changes to the relevant file
  - At the end of making changes, the code still won't "work" 100%, because nothing has changed in the CLI.  (If you type `ruby bin/run.rb`, it won't print out the results of the API calls.)  That's ok!  You can test by hard-coding values or using `binding.pry`.

```
  response_string = RestClient.get('http://www.swapi.co/api/people/')
  response_hash = JSON.parse(response_string)

  films = response_hash["results"].find {|character_hash| character_hash["name"] == character_name }["films"]

  film_hashes = films.map do |film|
    film_response = RestClient.get(film)
    film_hash = JSON.parse(film_response)
    end
```

```
  films.each do |film|
    puts film["title"]
    puts film["episode_id"]
    puts
  end
```

- [x] Stage and commit changes
  - `git status` should show that the only file with changes is `lib/api_communicator.rb`
  - `git add lib/api_communicator.rb`
  - `git commit -m "Implemented get_characters_from_api and print_movies methods"` commits the changes to the local copy of the api-communicator branch
- [x] Publish (push) changes to remote branch
  - `git push origin api-communicator`
- [x] On GitHub, [set up a pull request](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-042219/pull/new/api-communicator)
   - The base repository will be set to learn-co-students/apis-and-iteration-seattle-web-career-012819 and base: master.  We want to change that to hoffm386/apis-and-iteration-seattle-web-career-042219 and base: master.  That will change the interface so it just says "base: **master**" on the left and "compare: **api-communicator**" on the right.  The difference is that we are comparing across two branches of the same repository, rather than our branch on our fork vs. the learn-co repo.

### Greg's Feature Branch Part 1: Adding CLI Functionality

*Narrative:* Greg is working at the same time as Erin, but on a different part of the code.  He is adding the command line interface code so that the program will print a welcome message and prompt the user for the name of a character.  (Right now it is calling the API method with `nil` instead of getting actual user input.)

- [x] Make a new feature branch
- [x] Make changes to the relevant file
   - At the end of making changes, the CLI part works, but it doesn't actually have the API functionality.  (If you type `ruby bin/run.rb`, it will give a welcome and prompt for a character name, but won't get the character info from the API.)  That's ok!  You can test by adding a `binding.pry` to the API part of the code and making sure that the user input gets passed incorrectly.
- [x] Stage and commit changes
- [x] Publish (push) changes to remote branch
- [x] On GitHub, set up a pull request

### Part 1: Merging

*Narrative:* Both Erin's branch and Greg's branch have pull requests ready to go.  Now that they have agreed that the changes should be merged into master, Erin goes to the [pull requests page](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-042219/pulls) for the repository and approves both pull requests.  (Either person could do this, since both are contributors on the repo.)  

There are no merge conflicts.  Yay!

To get their local copies of the repository synced up with the remote GitHub copy, Erin and Greg each run the following:

- [x] Switch back to master branch
  - `git checkout master`
  - The feature branch should be "frozen" at the previous point
- [x] Fetch and merge changes from the remote (GitHub) version of the master branch
  - `git pull origin master`

## Part 2: When Things Go Wrong

*Narrative:* Greg and Erin agree that the README file should be edited to say that they are the authors.  However, they don't communicate clearly about who is doing this task, so both are start making changes to the same file.

### Erin's Feature Branch Part 2: Adding Authors

- [x] Make a new feature branch
  - `git checkout -b update-readme`
- [x] Make changes to the relevant file
- [x] Stage and commit changes
  - `git status` should show that the only file with changes is `README.md`
  - `git add README.md`
  - `git commit -m "updated readme"` commits the changes to the local copy of the update-readme branch
- [x] Publish (push) changes to remote branch
  - `git push origin update-readme` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-042219/tree/update-readme)
- [x] On GitHub, [set up a pull request](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-042219/pull/new/update-readme)
  - The base repository will be set to learn-co-students/apis-and-iteration-seattle-web-career-042219 and base: master.  We want to change that to hoffm386/apis-and-iteration-seattle-web-career-042219 and base: master.  That will change the interface so it just says "base: **master**" on the left and "compare: **update-readme**" on the right.  The difference is that we are comparing across two branches of the same repository, rather than our branch on our fork vs. the learn-co repo.

### Greg's Feature Branch Part 2: Adding Authors

- [x] Make a new feature branch
- [x] Make changes to the relevant file
- [x] Stage and commit changes
- [x] Publish (push) changes to remote branch
- [x] On GitHub, set up a pull request

### Part 2: Merging

Both Erin's branch and Greg's branch have pull requests ready to go.  Now that they have agreed that the changes should be merged into master, Erin goes to the [pull requests page](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-042219/pulls) for the repository and approves Greg's pull request.  (Either person could do this, since both are contributors on the repo.)

Greg's pull request is successfully merged!

But then when they try to approve Erin's pull request, there is a merge conflict :(

Let's resolve the merge conflict on Erin's computer.

- [x] Fetch the latest changes from the remote master and try to merge them in
  - `git pull origin master` generates the output:
     ```
     CONFLICT (content): Merge conflict in README.md
     Automatic merge failed; fix conflicts and then commit the result.
     ```
  - `git status` generates the output:

     ```
     On branch update-readme
     You have unmerged paths.
        (fix conflicts and run "git commit")
        (use "git merge --abort" to abort the merge)

     Unmerged paths:
        (use "git add <file>..." to mark resolution)

           both modified:   README.md

     no changes added to commit (use "git add" and/or "git commit -a")
     ```

- [x] Resolve the conflict(s) in the file(s)
  - Open up the README with `atom README.md`
  - Find the git markup indicating the merge conflict
    - There is a section that looks something like this:
    ```
    <<<<<<< HEAD
    by Erin and Greg
    =======
    authors : Greg Morgan and Erin Hoffman
    >>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034
    ```
  - Choose an option for resolving the conflict
    - **a) Accept Greg's version**
    - **b) Overwrite Greg's version with her version**
    - **c) Make some new version**
- [x] Stage and commit changes
  - `git add README.md`
  - `git status` generates the output:
     ```
     On branch update-readme
        All conflicts fixed but you are still merging.
          (use "git commit" to conclude merge)

        Changes to be committed:

	         modified:   README.md
      ```
  - `git commit -m "resolved merge conflict with names in README"` commits the changes to the local copy of the update-readme branch
- [x] Publish (push) changes to [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-042219/tree/update-readme)
  - `git push origin update-readme`
- [x] There is no need to make a new pull request, just merge in the existing one. Now if Erin refreshes the page on the pull request for this branch, the button will turn green.  Now we can approve Erin's pull request!

(For Greg's local copy to reflect this new version, he will need to run `git pull origin master`)
