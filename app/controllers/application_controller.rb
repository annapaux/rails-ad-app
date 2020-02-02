class ApplicationController < ActionController::Base
   # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  add_flash_types :info, :error, :warning
  before_action :set_user

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user

  def authorize
    redirect_to '/login' unless current_user
  end

  private
  def set_user
    if current_user
      cookies[:user_id] = current_user.id
    else
      cookies[:user_id] = 'guest'
    end
  end

end
