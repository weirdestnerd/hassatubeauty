class ComingSoonController < ApplicationController
  def notify_new_email
    render json: {} and return if ComingSoonEmail.exists?(email: params[:email])

    ComingSoonEmail.create!(email: params[:email])

    render json: { data: params[:email] }
  end
end
