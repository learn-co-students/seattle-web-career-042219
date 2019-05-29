# Deploying to Heroku: Ruby on Rails

## Getting Started
- If you haven't already, create an account on [Heroku](https://heroku.com)
- If you haven't already, install Heroku [CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
- Check which version of Ruby you are using
  * A locally installed version of Ruby 2.2.0+, Rubygems, Bundler, and Rails 5+
  * Check Ruby version in your CLI `ruby -v`
  * Check Rails version in your CLI`rails -v`
  * Helpful update links are at the bottom of this README

## Assumed before deploying
- `rails new app_name --database=postgresql`
- `rails db:setup` makes our db for postgresql
- `rails db:migrate`
- nice to have [Postico](https://eggerapps.at/postico/) [Postgresql GUI](https://postgresapp.com/downloads.html) for viewing your db

## Deploying to Heroky Using a Unique App Name
- After you have created your Heroku account/logged into your Heroku acccount
  * Under the Dashboard
    * Click `New`
    * Create `New App`
    * Name your App under `App name`; App name must start with lower-case
    * Click the `Create app` button
- Run `heroku login` in your terminal.
  * It will open a browser window and ask you to signin to your account if you dont have one make one.
- In your terminal run `ls -a` and make sure that you have a `.git` file if you do not run `git init` to initialize it.
- Navigate to github and make a repo for your app
- Copy the path to the github URL and run in terminal `git remote add origin "url_to_gh_app"`
- Run `git remote -v` in terminal you should see an origin that points to github URL equal to the URL that you pasted in from the previous step
- `git add git commit git push` to github
- In terminal run `heroku git:remote -a` adding the app name you created in Heroku after `-a` this will provision a new heroku app for you.
 * Once complete the terminal should show the following:
    * set git remote heroku to `https://git.heroku.com/your-unique-app-name.git`
- In terminal run `git remote -v` to see new remote that was added.
 * You should see the following after funning the above command:
    * heroku	`https://git.heroku.com/your-unique-app-name.git` (fetch)
    * heroku	`https://git.heroku.com/your-unique-app-name.git` (push)
    * origin	`https://github.com/your-github-username/your-github-repo-name.git` (fetch)
    * origin	`https://github.com/your-github-username/your-github-repo-name.git` (push)
- In terminal run `git push heroku master`
- In terminal run `heroku run rake db:migrate`
- In terminal run `heroku open`

## Deploying to Heroku Using an Auto Generated App Name
- Run `heroku login` in your terminal.
- It will open a browser window and ask you to signin to your account if you dont have one make one.
- In your terminal run `ls -a` and make sure that you have a `.git` file if you do not run `git init` to initialize it.
- Navigate to github and make a repo for your app
- Copy the path to the github URL and run in terminal `git remote add origin "url_to_gh_app"`
- Run `git remote -v` in terminal you should see an origin that points to github URL equal to the URL that you pasted in from the previous step
- `git add git commit git push` to github
- In terminal run `heroku create` this will provision a new heroku app for you.
- In terminal run `git remote -v` to see new remote that was added.
 * You should see the following after running the above command:
    * heroku	`https://git.heroku.com/your-unique-app-name.git` (fetch)
    * heroku	`https://git.heroku.com/your-unique-app-name.git` (push)
    * origin	`https://github.com/your-github-username/your-github-repo-name.git` (fetch)
    * origin	`https://github.com/your-github-username/your-github-repo-name.git` (push)
- In terminal run `git push heroku master`
- In terminal run `heroku run rake db:migrate`
- In terminal run `heroku open`

### Helpful Links
- [Heroku Dev Center](https://devcenter.heroku.com/articles/getting-started-with-rails5)
- [Ruby Update](https://www.ruby-lang.org/en/downloads/)
- [Rails Update](https://medium.com/@wintermeyer/rails-5-2-and-ruby-2-5-install-how-to-bc287f3dacef)
