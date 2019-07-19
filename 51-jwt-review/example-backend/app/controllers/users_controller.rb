class UsersController < ApplicationController
  before_action :set_user, only: [:show]
  # you should be able to create a new user without being logged in
  skip_before_action :logged_in?, only: [:create]

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
      # current_user_id is a method in ApplicationController
      user_id = current_user_id
      if user_id
        @user = User.find(user_id)
      end
    end

    def user_params
      params.require(:user).permit(:username, :location, :password)
    end
end
