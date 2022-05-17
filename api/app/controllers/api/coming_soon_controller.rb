module Api
  class ComingSoonController < ApplicationController
    def notify_new_email
      render json: {} and return if ComingSoonEmail.exists?(email: params[:email])

      coming_soon = ComingSoonEmail.create!(email: params[:email])

      render json: { data: { id: coming_soon.id } }
    end
  end
end
