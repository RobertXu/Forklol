class ApplicationController < ActionController::Base

before_action :authenticate_user!

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :is_guest, :login_guest

  def current_user
    super || guest_user
  end

  def is_guest?
    return !guest_user.nil?
  end

  private

  def guest_user
   session[:guest_user_id] ? User.find(session[:guest_user_id]) : nil
  end

  def create_guest_user
    user = User.create(:email => "anon_#{1+rand(99)}@ymous.com")
    user.save(:validate => false)
    user
  end

end
