# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins do |source, _env|
      (ENV['RAILS_ENV'] == 'production' && source == 'https://hassatubeauty.web.app') ||
        (ENV['RAILS_ENV'] == 'development' && source == 'http://localhost:3001') ||
        (ENV['RAILS_ENV'] == 'preview' && source.match?(/https:\/\/hassatubeauty--pr[a-z0-9-]+.web.app/))
    end

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
