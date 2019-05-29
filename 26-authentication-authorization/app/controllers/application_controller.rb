class ApplicationController < ActionController::Base
  helper_method :logged_in?

  def redirect_user
    redirect_to new_user_path if !logged_in?
  end

  def logged_in?
    session[:user_id] != nil ? true : false
  end
end
