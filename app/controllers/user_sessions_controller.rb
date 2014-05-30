class UserSessionsController < Devise::SessionsController
  def login_guest
    session[:guest_user_id] = create_guest_user.id
    redirect_to :root
  end
end