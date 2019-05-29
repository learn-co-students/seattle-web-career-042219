class SessionsController < ApplicationController

  def login
  end

  def create
    # byebug
    @user = User.find_by(username: params[:username])
    session[:user_id] = @user.id
    if @user
      redirect_to students_path
    else
      flash[:message] = "Incorrect Login"
      render :login
    end
  end
end
