class ApplicationController < ActionController::API
  # because all controllers inherit from this one, add login protection to all
  # controller actions by default
  before_action :logged_in?
  # logging in is an example of when you *wouldn't* want to make sure they're
  # logged in before letting them access that action
  skip_before_action :logged_in?, only: [:login]

  def login
    user_login_params = params.require(:user).permit(:username, :password)
    @user = User.find_by(username: user_login_params[:username])
    # User#authenticate comes from BCrypt
    if @user && @user.authenticate(user_login_params[:password])
      # issue a token, store payload in token
      @token = JWT.encode({ user_id: @user.id }, 'this should be in .env')
      render json: { user: @user, jwt: @token }, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def logged_in?
    !!current_user_id
  end

  # this is a helper method, so it doesn't need skip_before_action
  def current_user_id
    if request.headers && request.headers['Authorization']
      token = request.headers['Authorization'].split(' ')[1] #[Bearer <token>]
      begin
        decoded_token = JWT.decode(token, 'this should be in .env', true, algorithm: 'HS256')
        if decoded_token
          user_id = decoded_token[0]['user_id'] #[{ "user_id"=>"2" }, { "alg"=>"HS256" }]
        end
      rescue JWT::DecodeError
        nil
      end
    end
  end
end
