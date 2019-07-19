# JWT Auth Review

## What this app has already:

### Rails backend with a User class (yes, the field name must be exactly `password_digest` for `bcrypt` to work correctly)

```
create_table "users", force: :cascade do |t|
  t.string "username"
  t.string "location"
  t.string "password_digest"
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end
```

### User controller with basic API interface for creating and showing users

```
class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def show
    if @user
      render json: @user
    else
      render json: { message: 'could not locate the user with the provided ID'}, status: :unauthorized
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

    def set_user
      # using the params to get the id, e.g. "users/5" the ID is 5
      @user = User.find(params[:id])
    end

    def user_params
      # until we have bcrypt set up, the params need to match the model exactly
      params.require(:user).permit(:username, :location, :password_digest)
    end
end
```

### Basic routes are set up (note that they aren't nested, but that doesn't really matter)

```
Rails.application.routes.draw do
  resources :users, only: [:create, :show]
end
```

### React app that shows a login page (note that there is no "Create User" page, so you either need to use Postman or seed data to create the users)

There are two textboxes for username and password, and two buttons for login and logout.  None of the buttons do anything yet except console log.

```
import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.username = React.createRef();
    this.password = React.createRef();
  }

  login = (ev) => {
    ev.preventDefault();
    console.log('log in');
  }

  logout = () => {
    console.log('log out');
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.login}>
          <input type="text" placeholder="username" ref={this.username} />
          <input type="password" placeholder="password" ref={this.password} />
          <input type="submit" value="log in" />
          <button type="button" onClick={this.logout}>log out</button>
        </form>
      </div>
    );
  }
}

export default App;
```

## TODOs (these are finished in the version posted on GitHub):

### Set up `bcrypt` integration in backend

- Add it to the Gemfile
- Add `has_secure_password` to the User class (`models/user.rb`)
- Update `user_params` in `UsersController` so it accepts `password` instead of `password_digest`, i.e. `params.require(:user).permit(:username, :location, :password)` instead of `params.require(:user).permit(:username, :location, :password_digest)`
- Add `post '/login', to: 'application#login'` to the routes
- Add `login` method to `ApplicationController`

```
def login
  user_login_params = params.require(:user).permit(:username, :password)
  @user = User.find_by(username: user_login_params[:username])
  if @user && @user.authenticate(user_login_params[:password])
    render json: { user: @user }, status: :accepted
  else
    render json: { message: 'Invalid username or password' }, status: :unauthorized
  end
end
```

...at this point, you should be able to send a username and password, and get back the data about that particular user.  But we want more!

### Add code to create JWT token in backend (in the `login` method in `ApplicationController`)

Instead of just returning information about the user in the `login` method, it also needs to create and return a token

```
def login
  user_login_params = params.require(:user).permit(:username, :password)
  @user = User.find_by(username: user_login_params[:username])
  if @user && @user.authenticate(user_login_params[:password])
    @token = JWT.encode({ user_id: @user.id }, 'this should be in .env')
    render json: { user: @user, jwt: @token }, status: :accepted
  else
    render json: { message: 'Invalid username or password' }, status: :unauthorized
  end
end
```

### Add code to hit the `/login` endpoint to the frontend (in the `login` method of `App.js`)

- Fetch to `POST /login` with username and password in the payload (no JWT token yet)
- Get the JWT token from the response, and save it to `localStorage`. (Remember, `localStorage` is like making a persistent global variable.  Use it carefully!)
- Yay, now we have a valid token saved!

```
login = (ev) => {
  ev.preventDefault();

  const username = this.username.current.value;
  const password = this.password.current.value;

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: {username, password} })
  })
  .then(res => res.json())
  .then(json => {
    if (json && json.jwt) {
      localStorage.setItem('jwt', json.jwt);
    }
  });
}
```

### Add code to the backend so it utilizes the token to find the relevant user instead of the URL params

In `ApplicationController`, write a helper method `current_user_id`. It uses the `request` hash (similar to the `params` hash) to get the headers and find the token. We are saying that the token has key "Authorization" and value "Bearer <token>" because that is conventional for this kind of auth.  Once we have parsed the token out of the request hash, we decode it using the same password we used to encode it.  Then we pull out the `user_id`, which is in there because that's what we encoded in the `login` method.

```
def current_user_id
  token = request.headers['Authorization'].split(' ')[1]
  begin
    decoded_token = JWT.decode(token, 'this should be in .env', true, algorithm: 'HS256')
    if decoded_token
      user_id = decoded_token[0]['user_id']
    end
  rescue JWT::DecodeError
    nil
  end
end
```

Refactor `set_user` so it pulls the `user_id` from this helper method instead of the URL params.  In other words, `@user = User.find(params[:id])` becomes `@user = User.find(current_user_id)`

Add a route to the `profile` endpoint, `get '/profile', to: 'users#show'`

### Add code to the frontend so it fetches the user's profile after they log in

Now the `login` method looks like this, with one new line added:

```
login = (ev) => {
  ev.preventDefault();

  const username = this.username.current.value;
  const password = this.password.current.value;

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: {username, password} })
  })
  .then(res => res.json())
  .then(json => {
    if (json && json.jwt) {
      localStorage.setItem('jwt', json.jwt);
      this.getProfile(); // this is the only new line
    }
  });
}
```

The `getProfile` helper method looks like this.  It gets the token from `localStorage` and uses it to query the `/profile` endpoint.  Then it sets the result of that fetch to the state.

```
getProfile = () => {
  const token = localStorage.getItem('jwt');
  console.log("token", token)
  if (token) {
    fetch('http://localhost:3000/profile', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(({username, location}) => {
      this.setState({user: {username, location}});
    })
  }
}
```

Set up the view so it actually renders something based on the state.  You will also need to add `this.state = { user: null };` to the constructor.

```
renderLoggedInInfo = () => {
  if (this.state.user) {
    return (
      <div>
        <h4>You are logged in as {this.state.user.username}</h4>
        <p>Your location is {this.state.user.location}</p>
      </div>
    );
  } else {
    return <p>Log in to see more information</p>;
  }
}

render() {
  return (
    <div className="App">
      <form onSubmit={this.login}>
        <input type="text" placeholder="username" ref={this.username} />
        <input type="password" placeholder="password" ref={this.password} />
        <input type="submit" value="log in" />
        <button type="button" onClick={this.logout}>log out</button>
      </form>
      {this.renderLoggedInInfo()}
    </div>
  );
}
```

### Tidy up!  Basically, you also need to handle the scenarios where:

- An unauthorized user tries to access the backend (check out the `logged_in?` method in `ApplicationController`)
- A user wants to log out (check out the `logout` method in `App.js`)
- A user wants to see their info without having to log in again if they're already logged in (add `this.getProfile()` to the constructor)

...and that's it!  You have JWT and bcrypt auth!
