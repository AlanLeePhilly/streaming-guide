# App-level class controller
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up,
      keys: [
        :first_name,
        :last_name,
        :user_name
        ])
    devise_parameter_sanitizer.permit(
      :account_update,
      keys: [
        :first_name,
        :last_name,
        :user_name,
        :avatar,
        :avatar_cache,
        :remove_avatar
        ])
  end

  def authorize_user
    if !user_signed_in? || !current_user.admin?
      raise ActionController::RoutingError.new('Not Found')
    end
  end
end
