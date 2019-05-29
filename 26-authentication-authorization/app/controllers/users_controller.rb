class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(strong_params)
    redirect_to students_path
  end

  private
  def strong_params
    params.require(:user).permit(:username)
  end
end
