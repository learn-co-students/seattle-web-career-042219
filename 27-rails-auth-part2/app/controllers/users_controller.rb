class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    byebug
    user = User.new(user_params)
    if user.valid?
      user.save
      session[:user_id] = user.id
      redirect_to students_path
    else
      # flash[:message] = 'Nice try, buddy'
      redirect_to new_user_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
